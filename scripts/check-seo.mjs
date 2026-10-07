import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";

const origin = "https://aklatang-galera.djenriquez.dev";
const routes = [
  ["/", "index", 0],
  ["/aklatan", "aklatan", 44],
  ["/hanapbuhay", "hanapbuhay", 28],
  ["/public-services", "public-services", 33],
  ["/about", "about", 0],
];
const decode = (value) =>
  value
    .replace(/&amp;/g, "&")
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
const attribute = (tag, name) =>
  tag.match(new RegExp(`\\b${name}="([^"]*)"`))?.[1];
function meta(html, name) {
  return [...html.matchAll(/<meta\b[^>]*>/g)]
    .filter(
      ([tag]) =>
        attribute(tag, "name") === name || attribute(tag, "property") === name,
    )
    .map(([tag]) => decode(attribute(tag, "content") ?? ""));
}

for (const [path, file, resourceCount] of routes) {
  const html = readFileSync(`.next/server/app/${file}.html`, "utf8");
  const canonical = [...html.matchAll(/<link\b[^>]*>/g)]
    .filter(([tag]) => attribute(tag, "rel") === "canonical")
    .map(([tag]) => attribute(tag, "href"));
  assert.deepEqual(
    canonical,
    [origin + (path === "/" ? "" : path)],
    `${path}: canonical`,
  );
  assert.equal(
    [...html.matchAll(/<h1\b/g)].length,
    1,
    `${path}: server-rendered heading`,
  );
  const cards = [...html.matchAll(/class="resource-card /g)].length;
  const featured = [...html.matchAll(/class="featured-service"/g)].length;
  assert.equal(
    cards + featured,
    resourceCount,
    `${path}: resources in initial HTML`,
  );
  assert.ok(
    !html.includes("Loading resources"),
    `${path}: client-only placeholder`,
  );
  assert.equal(meta(html, "description").length, 1, `${path}: description`);
  assert.ok(meta(html, "description")[0].trim(), `${path}: nonempty description`);
  assert.deepEqual(
    meta(html, "robots"),
    ["index, follow"],
    `${path}: indexing`,
  );
  assert.deepEqual(
    meta(html, "og:image"),
    [origin + "/og-image.png"],
    `${path}: share image`,
  );
  assert.deepEqual(
    meta(html, "twitter:image"),
    [origin + "/og-image.png"],
    `${path}: Twitter image`,
  );
  const title = decode(html.match(/<title>([^<]*)<\/title>/)?.[1] ?? "");
  assert.ok(title.includes("Aklatang Galera"), `${path}: title`);
  assert.deepEqual(meta(html, "og:title"), [title], `${path}: Open Graph title`);
  assert.deepEqual(
    meta(html, "twitter:title"),
    [title],
    `${path}: Twitter title`,
  );
  const schemas = [
    ...html.matchAll(
      /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g,
    ),
  ].map(([, json]) => JSON.parse(json));
  assert.ok(
    schemas.some(
      (schema) => schema["@type"] === "WebSite" && schema.url === origin,
    ),
    `${path}: site schema`,
  );
  assert.ok(
    schemas.every((schema) => !schema.potentialAction),
    `${path}: obsolete search schema`,
  );
  const site = schemas.find((schema) => schema["@type"] === "WebSite");
  assert.equal(site["@id"], `${origin}/#website`, `${path}: stable site identity`);
  assert.equal(site.creator.name, "Dexter Jethro Enriquez", `${path}: creator`);
  if (resourceCount) {
    const collection = schemas.find((schema) => schema["@type"] === "CollectionPage");
    assert.equal(collection?.url, origin + path, `${path}: collection URL`);
    assert.equal(collection.isPartOf["@id"], site["@id"], `${path}: collection identity`);
    const list = collection.mainEntity;
    assert.equal(list.numberOfItems, resourceCount, `${path}: structured resource count`);
    assert.equal(list.itemListElement.length, resourceCount, `${path}: structured list size`);
    const visibleResources = [...html.matchAll(/<a\b[^>]*>[\s\S]*?<\/a>/g)]
      .filter(([tag]) => /^(resource-card |featured-service$)/.test(attribute(tag, "class") ?? ""))
      .map(([tag]) => ({
        url: decode(attribute(tag, "href") ?? ""),
        name: decode(tag.match(/<h[23]>([^<]*)<\/h[23]>/)?.[1] ?? ""),
      }));
    assert.deepEqual(
      list.itemListElement.map(({ name, url }) => ({ name, url })),
      visibleResources,
      `${path}: schema matches resource names, destinations, and order`,
    );
    list.itemListElement.forEach((item, index) => {
      assert.equal(item.position, index + 1, `${path}: list position`);
    });
  }
  assert.ok(html.includes('href="/about"'), `${path}: discoverable help page`);
  if (path === "/about") {
    assert.ok(schemas.some((schema) => schema["@type"] === "AboutPage" && schema.url === origin + path), "About page schema");
    assert.equal([...html.matchAll(/<h2\b/g)].length, 6, "Six crawlable help answers");
    assert.ok(html.includes("independent civic project") && html.includes("does not cover every source"), "Clear identity and search limits");
  }
  console.log(
    `${path}: canonical, metadata, heading, and ${resourceCount} resources OK`,
  );
}
const sitemap = readFileSync(".next/server/app/sitemap.xml.body", "utf8");
const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]*)<\/loc>/g)].map(
  ([, url]) => url,
);
assert.deepEqual(
  new Set(sitemapUrls),
  new Set(routes.map(([path]) => origin + (path === "/" ? "" : path))),
  "sitemap URLs",
);
const robots = readFileSync(".next/server/app/robots.txt.body", "utf8");
assert.ok(
  robots.includes("Allow: /") &&
    robots.includes(`Sitemap: ${origin}/sitemap.xml`),
  "robots and sitemap discovery",
);
const notFound = readFileSync(".next/server/app/_not-found.html", "utf8");
assert.ok(
  meta(notFound, "robots").some((value) => value.includes("noindex")),
  "404 must not be indexed",
);
for (const asset of [
  "og-image.png",
  "apple-touch-icon.png",
  "favicon.ico",
  "favicon.svg",
]) {
  assert.ok(existsSync(`public/${asset}`), `missing SEO asset: ${asset}`);
}
console.log(
  "SEO build checks passed, including sitemap, robots, structured data, and 404 indexing.",
);
