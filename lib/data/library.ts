type ResourceType = "research" | "ebooks";

export const libraryResources = [
  // ── Research / Journals ──────────────────────────────────────────────────
  {
    id: 1,
    name: "Archīum Ateneo",
    isLocal: true,
    resourceType: "research" as ResourceType,
    link: "https://archium.ateneo.edu/",
    logoUrl: "/ateneo-logo.png",
    desc: {
      tagalog: "Institutional repository ng Ateneo de Manila University.",
      english: "Ateneo de Manila University's institutional repository.",
    },
  },
  {
    id: 2,
    name: "arXiv",
    isLocal: false,
    resourceType: "research" as ResourceType,
    link: "https://arxiv.org/",
    logoUrl: "/arxiv-logo.png",
    desc: {
      tagalog:
        "Open-access archive para sa physics, math, at computer science.",
      english: "Open-access archive for physics, math, and computer science.",
    },
  },
  {
    id: 3,
    name: "BAHÁNDÌAN",
    isLocal: true,
    resourceType: "research" as ResourceType,
    link: "https://repository.cpu.edu.ph/",
    logoUrl: "/bahandian-logo.svg",
    desc: {
      tagalog: "Digital repository ng Central Philippine University.",
      english: "Central Philippine University's digital repository.",
    },
  },
  {
    id: 4,
    name: "BISIG (PUP)",
    isLocal: true,
    resourceType: "research" as ResourceType,
    link: "https://publishing.pup.edu.ph/ojs/index.php/BSG/search",
    logoUrl: "/pup-logo.png",
    desc: {
      tagalog: "PUP Journal ng Negosyo at Gobyerno.",
      english: "PUP Journal of Business and Government.",
    },
  },
  {
    id: 5,
    name: "DOAJ",
    isLocal: false,
    resourceType: "research" as ResourceType,
    link: "https://doaj.org/",
    logoUrl: "doaj-logo.svg",
    desc: {
      tagalog: "Libreng peer-reviewed scientific at scholarly articles.",
      english: "Free peer-reviewed scientific and scholarly articles.",
    },
  },
  {
    id: 6,
    name: "Google Scholar",
    isLocal: false,
    resourceType: "research" as ResourceType,
    link: "https://scholar.google.com/",
    logoUrl: "google-scholar-logo.png",
    desc: {
      tagalog: "Malawak na paghahanap ng iskolaryong literatura.",
      english: "Broad search for scholarly literature.",
    },
  },
  {
    id: 7,
    name: "Philippine Social Science Journal",
    isLocal: true,
    resourceType: "research" as ResourceType,
    link: "https://philssj.org/index.php/main/search/search",
    logoUrl: "phil-ssj-logo.png",
    desc: {
      tagalog: "Philippine Social Science Journal para sa mga mananaliksik.",
      english: "Philippine Social Science Journal for researchers.",
    },
  },
  {
    id: 8,
    name: "Plaridel Journal",
    isLocal: true,
    resourceType: "research" as ResourceType,
    link: "https://www.plarideljournal.org/",
    logoUrl: "plaridel-logo.png",
    desc: {
      tagalog: "Journal ng komunikasyon, media, at lipunan sa Pilipinas.",
      english: "Philippine journal of communication, media, and society.",
    },
  },
  {
    id: 9,
    name: "PLOS",
    isLocal: false,
    resourceType: "research" as ResourceType,
    link: "https://plos.org/our-journals/",
    logoUrl: "plos-logo.png",
    desc: {
      tagalog: "Open access na mga journal sa agham at medisina.",
      english: "Open access science journals.",
    },
  },
  {
    id: 10,
    name: "Taylor & Francis",
    isLocal: false,
    resourceType: "research" as ResourceType,
    link: "https://www.tandfonline.com/openaccess",
    logoUrl: "taylor-and-francis-logo.png",
    desc: {
      tagalog: "Koleksyon ng mga open access na pananaliksik sa buong mundo.",
      english: "Collection of open access research.",
    },
  },
  {
    id: 11,
    name: "Tuklas",
    isLocal: true,
    resourceType: "research" as ResourceType,
    link: "https://tuklas.up.edu.ph/",
    logoUrl: "tuklas-logo.png",
    desc: {
      tagalog: "Discovery service ng mga aklatan ng UP System.",
      english: "The UP System libraries' discovery service.",
    },
  },
  {
    id: 22,
    name: "Philippine E-Journals",
    isLocal: true,
    resourceType: "research" as ResourceType,
    link: "https://ejournals.ph/",
    logoUrl: "/pej-logo.jpeg",
    desc: {
      tagalog:
        "Koleksyon ng mga akademikong journal mula sa iba't ibang unibersidad sa Pilipinas.",
      english:
        "A collection of academic journals from various universities and organizations in the Philippines.",
    },
  },
  {
    id: 24,
    name: "HERDIN Plus",
    isLocal: true,
    resourceType: "research" as ResourceType,
    link: "https://www.herdin.ph/",
    logoUrl: "/herdin-logo.png",
    desc: {
      tagalog:
        "Pangunahing database para sa health at medical research sa Pilipinas, pinamamahalaan ng DOST-PCHRD.",
      english:
        "The primary database for health and medical research in the Philippines, managed by DOST-PCHRD.",
    },
  },
  {
    id: 25,
    name: "Philippine eLib",
    isLocal: true,
    resourceType: "research" as ResourceType,
    link: "http://www.elib.gov.ph/",
    logoUrl: "/nlp-logo.png",
    desc: {
      tagalog:
        "Isang kolaboratibong proyekto na nagbibigay ng access sa mga digitized na Filipiniana at union catalogs.",
      english:
        "A collaborative project providing access to digitized Filipiniana materials and union catalogs.",
    },
  },
  {
    id: 26,
    name: "Philippine Journal of Science",
    isLocal: true,
    resourceType: "research" as ResourceType,
    link: "https://philjournalsci.dost.gov.ph/",
    logoUrl: "/pjs-logo.png",
    desc: {
      tagalog:
        "Ang pinakamatandang siyentipikong journal sa bansa, inilalathala ng DOST.",
      english:
        "The oldest scientific journal in the country, published by DOST.",
    },
  },
  {
    id: 27,
    name: "Asia-Pacific Social Science Review",
    isLocal: true,
    resourceType: "research" as ResourceType,
    link: "https://animorepository.dlsu.edu.ph/apssr/",
    logoUrl: "/dlsu-logo.png",
    desc: {
      tagalog:
        "Isang nangungunang social science journal mula sa De La Salle University (DLSU).",
      english:
        "A leading social science journal from De La Salle University (DLSU).",
    },
  },
  {
    id: 28,
    name: "CORE",
    isLocal: false,
    resourceType: "research" as ResourceType,
    link: "https://core.ac.uk/",
    logoUrl: "/core-logo.svg",
    desc: {
      tagalog:
        "Ang pinakamalaking aggregator sa mundo ng mga open access na research papers.",
      english: "The world's largest aggregator of open access research papers.",
    },
  },
  {
    id: 29,
    name: "BASE",
    isLocal: false,
    resourceType: "research" as ResourceType,
    link: "https://www.base-search.net/",
    logoUrl: "/base-logo.png",
    desc: {
      tagalog:
        "Isa sa mga pinaka-voluminous search engines para sa academic web resources.",
      english:
        "One of the most voluminous search engines for academic web resources.",
    },
  },

  // ── E-Books ───────────────────────────────────────────────────────────────
  {
    id: 12,
    name: "Aklatang Bayan Online",
    isLocal: true,
    resourceType: "ebooks" as ResourceType,
    link: "https://sentrofilipino.upd.edu.ph/publikasyon/aklatang-bayan/online-downloadable-e-books/",
    logoUrl: "swf-logo.png",
    desc: {
      tagalog:
        "Isang open-access na repository ng mga aklat at pananaliksik na nakasulat sa wikang Filipino mula sa UP Sentro ng Wikang Filipino.",
      english:
        "An open-access repository of books and research papers written in the Filipino language by the UP Sentro ng Wikang Filipino.",
    },
  },
  {
    id: 30,
    name: "DOAB",
    isLocal: false,
    resourceType: "ebooks" as ResourceType,
    link: "https://www.doabooks.org/",
    logoUrl: "/doab-logo.png",
    desc: {
      tagalog:
        "Isang direktoryo ng mga peer-reviewed na open access books mula sa mga akademikong publisher.",
      english:
        "A directory of peer-reviewed open access books from academic publishers.",
    },
  },
  {
    id: 31,
    name: "OpenStax",
    isLocal: false,
    resourceType: "ebooks" as ResourceType,
    link: "https://openstax.org/",
    logoUrl: "/openstax-logo.png",
    desc: {
      tagalog:
        "Libreng peer-reviewed na mga textbook para sa kolehiyo mula sa Rice University.",
      english: "Free peer-reviewed college textbooks from Rice University.",
    },
  },
  {
    id: 32,
    name: "Open Textbook Library",
    isLocal: false,
    resourceType: "ebooks" as ResourceType,
    link: "https://open.umn.edu/opentextbooks/",
    logoUrl: "/opentext-logo.png",
    desc: {
      tagalog:
        "Koleksyon ng mga textbook na na-review na ng mga faculty para sa iba't ibang kurso.",
      english:
        "A collection of faculty-reviewed textbooks for various courses.",
    },
  },
  {
    id: 33,
    name: "HathiTrust Digital Library",
    isLocal: false,
    resourceType: "ebooks" as ResourceType,
    link: "https://www.hathitrust.org/",
    logoUrl: "/hathi-logo.png",
    desc: {
      tagalog:
        "Isang digital library ng milyun-milyong digitized na mga libro mula sa mga research institutions.",
      english:
        "A digital library of millions of digitized books from research institutions.",
    },
  },
  {
    id: 34,
    name: "National Academies Press",
    isLocal: false,
    resourceType: "ebooks" as ResourceType,
    link: "https://nap.nationalacademies.org/",
    logoUrl: "/natl-academies-logo.jpg",
    desc: {
      tagalog:
        "Libreng PDF ng mahigit 10,000 na publikasyon sa agham, engineering, at medisina.",
      english:
        "Free PDFs of over 10,000 publications in science, engineering, and medicine.",
    },
  },
  {
    id: 13,
    name: "Canvas.ph Art and Stories",
    isLocal: true,
    resourceType: "ebooks" as ResourceType,
    link: "https://www.canvas.ph/art-and-stories",
    logoUrl: "https://www.canvas.ph/favicon.ico",
    desc: {
      tagalog:
        "Mga kwento at sining para sa mga batang Pilipino mula sa Canvas.ph.",
      english: "Stories and art for Filipino children from Canvas.ph.",
    },
  },
  {
    id: 14,
    name: "eBooks for Students",
    isLocal: false,
    resourceType: "ebooks" as ResourceType,
    link: "https://ebooksforstudents.org/",
    logoUrl: "ebook-logo.png",
    desc: {
      tagalog: "Libreng ebook para sa mga estudyante sa iba't ibang paksa.",
      english: "Free ebooks for students across a wide range of subjects.",
    },
  },
  {
    id: 15,
    name: "Filipinas Heritage Library",
    isLocal: true,
    resourceType: "ebooks" as ResourceType,
    link: "https://www.filipinaslibrary.org.ph/search-collection/?keywords=read+online",
    logoUrl: "fillib-logo.jpg",
    desc: {
      tagalog:
        "Digital na koleksyon ng Ayala Foundation tungkol sa kasaysayan at kulturang Pilipino.",
      english:
        "Ayala Foundation's digital collection on Philippine history and culture.",
    },
  },
  {
    id: 16,
    name: "Free Children's Stories",
    isLocal: false,
    resourceType: "ebooks" as ResourceType,
    link: "https://www.freechildrenstories.com/",
    logoUrl: "https://www.freechildrenstories.com/favicon.ico",
    desc: {
      tagalog:
        "Libreng mga kwento para sa mga bata — maikling pagbabasa online.",
      english: "Free stories for children — short reads available online.",
    },
  },
  {
    id: 17,
    name: "Open Library",
    isLocal: false,
    resourceType: "ebooks" as ResourceType,
    link: "https://openlibrary.org/",
    logoUrl:
      "https://openlibrary.org/static/images/openlibrary-logo-tighter.svg",
    desc: {
      tagalog:
        "Libre at mahihiram na digital na mga libro mula sa Internet Archive.",
      english: "Free and borrowable digital books from the Internet Archive.",
    },
  },
  {
    id: 18,
    name: "Planet eBook",
    isLocal: false,
    resourceType: "ebooks" as ResourceType,
    link: "https://www.planetebook.com/",
    logoUrl: "https://www.planetebook.com/favicon.ico",
    desc: {
      tagalog:
        "Libreng klasikong literatura sa PDF format para sa mga mambabasa.",
      english: "Free classic literature in PDF format for readers.",
    },
  },
  {
    id: 19,
    name: "Project Gutenberg",
    isLocal: false,
    resourceType: "ebooks" as ResourceType,
    link: "https://www.gutenberg.org/",
    logoUrl: "https://www.gutenberg.org/gutenberg/pg-logo-129x80.png",
    desc: {
      tagalog: "Mahigit 70,000 libreng klasikong libro sa public domain.",
      english: "Over 70,000 free classic books in the public domain.",
    },
  },
  {
    id: 20,
    name: "Standard Ebooks",
    isLocal: false,
    resourceType: "ebooks" as ResourceType,
    link: "https://standardebooks.org/ebooks",
    logoUrl: "https://standardebooks.org/images/logo.svg",
    desc: {
      tagalog:
        "Mga maayos na na-format na libreng ebook — public domain classics.",
      english:
        "Beautifully formatted free ebooks — polished public domain classics.",
    },
  },
  {
    id: 21,
    name: "TechnoAklatan",
    isLocal: true,
    resourceType: "ebooks" as ResourceType,
    link: "https://nlpdl.nlp.gov.ph/TechnoAklatan.htm",
    logoUrl: "nlp-logo.png",
    desc: {
      tagalog: "Digital na koleksyon ng Pambansang Aklatan ng Pilipinas.",
      english: "National Library of the Philippines digital collection.",
    },
  },
  {
    id: 35,
    name: "Mountain Journal of Science (MJSIR)",
    isLocal: true,
    resourceType: "research" as ResourceType,
    link: "http://journals.bsu.edu.ph/index.php/BRJ/index",
    logoUrl: "/Benguet-logo.jpg",
    desc: {
      tagalog:
        "Open-access journal ng Benguet State University para sa agrikultura, forestry, at indigenous knowledge.",
      english:
        "Open-access journal by Benguet State University covering agriculture, forestry, and indigenous knowledge.",
    },
  },
  {
    id: 36,
    name: "Journal for Medicine, UST (JMUST)",
    isLocal: true,
    resourceType: "research" as ResourceType,
    link: "https://jmust.org/",
    logoUrl: "/ust-logo.svg",
    desc: {
      tagalog:
        "Opisyal na open-access medical journal ng UST para sa clinical studies, health research, at medical education.",
      english:
        "The official open-access medical journal of UST for clinical studies, health research, and medical education.",
    },
  },
  {
    id: 37,
    name: "Hasaan (UST Filipino Journal)",
    isLocal: true,
    resourceType: "research" as ResourceType,
    link: "https://hasaan.ust.edu.ph/",
    logoUrl: "/ust-logo.svg",
    desc: {
      tagalog:
        "Interdisiplinaryong refereed journal sa Filipino ng UST na nakatuon sa wikang Filipino bílang larang ng kaalaman.",
      english:
        "An interdisciplinary refereed journal in Filipino from UST focusing on the Filipino language as a field of knowledge.",
    },
  },
  {
    id: 38,
    name: "U.P. Los Baños Journal",
    isLocal: true,
    resourceType: "research" as ResourceType,
    link: "https://www.ukdr.uplb.edu.ph/uplb-journal/",
    logoUrl: "/uplb-logo.png",
    desc: {
      tagalog:
        "Isang multi-disciplinaryong journal mula sa UP Los Baños na sumasaklaw sa agrikultura, edukasyon, at sining.",
      english:
        "A multi-disciplinary journal from UP Los Baños featuring research in agriculture, education, and social sciences.",
    },
  },
  {
    id: 39,
    name: "Phil. Journal of Health Research (PJHRD)",
    isLocal: true,
    resourceType: "research" as ResourceType,
    link: "https://journals.lww.com/pjhrd/pages/default.aspx",
    logoUrl: "/upm-logo.png",
    desc: {
      tagalog:
        "Pangunahing journal para sa health research, disaster resilience, at public health policy sa Pilipinas mula sa UP Manila.",
      english:
        "A premier journal for health research, disaster resilience, and public health policy in the Philippines by UP Manila.",
    },
  },
  {
    id: 40,
    name: "Scientific Research Publishing (SCIRP)",
    isLocal: false,
    resourceType: "research" as ResourceType,
    link: "https://www.scirp.org/",
    logoUrl: "/scirp-logo.png",
    desc: {
      tagalog:
        "Koleksyon ng mga open-access na journal sa iba't ibang larangan gaya ng Computer Science, Medicine, at Social Sciences.",
      english:
        "A massive collection of open access journals across fields like Computer Science, Medicine, and Social Sciences.",
    },
  },
  {
    id: 41,
    name: "Malay (DLSU Filipino Journal)",
    isLocal: true,
    resourceType: "research" as ResourceType,
    link: "https://animorepository.dlsu.edu.ph/malay/",
    logoUrl: "/dlsu-logo.png",
    desc: {
      tagalog:
        "Isang internationally refereed at open-access journal sa Araling Filipino na nakatuon sa wika, kultura, at midya.",
      english:
        "An internationally refereed and open-access journal on Filipino Studies focusing on language, culture, and media.",
    },
  },
  {
    id: 42,
    name: "Dalumat (Multicultural Filipino Journal)",
    isLocal: true,
    resourceType: "research" as ResourceType,
    link: "https://animorepository.dlsu.edu.ph/dalumat/",
    logoUrl: "/dlsu-logo.png",
    desc: {
      tagalog:
        "Isang multidisciplinaryong e-journal ng De La Salle University (DLSU) na nagtatampok ng mga pananaliksik sa wika, kultura, at lipunang Filipino.",
      english:
        "A multidisciplinary e-journal from De La Salle University (DLSU) featuring research on Filipino language, culture, and society.",
    },
  },
  {
    id: 43,
    name: "ASEAN Journal of Engineering Education (AJEE)",
    isLocal: false,
    resourceType: "research" as ResourceType,
    link: "https://ajee.utm.my/index.php/ajee",
    logoUrl: "/utm-logo.png", // Published by Universiti Teknologi Malaysia (UTM)
    desc: {
      tagalog:
        "Isang journal ng Universiti Teknologi Malaysia (UTM) na nakatuon sa engineering education sa ASEAN, kabilang ang AI readiness, digital transformation, at modernong teknolohiya sa pagtuturo.",
      english:
        "A journal of Universiti Teknologi Malaysia (UTM)focusing on engineering education in ASEAN, covering topics like AI readiness, digital transformation, and modern teaching technologies.",
    },
  },
  {
    id: 44,
    name: "Cambridge University Press (Open Access)",
    isLocal: false,
    resourceType: "research" as ResourceType,
    link: "https://www.cambridge.org/core/publications/open-access",
    logoUrl: "/cambridge-logo.png", // Recommended: Cambridge University Press shield or wordmark
    desc: {
      tagalog:
        "Isang prestihiyosong koleksyon ng mahigit 400 open-access na journal at 600+ na aklat mula sa Cambridge sa iba't ibang larangan.",
      english:
        "A prestigious collection of over 400 open-access journals and 600+ books from Cambridge University Press across various disciplines.",
    },
  },
  {
    id: 45,
    name: "Civil Engineering Dimension (CED)",
    isLocal: false,
    resourceType: "research" as ResourceType,
    link: "https://ced.petra.ac.id/index.php/civ/search",
    logoUrl: "/pcu-logo.svg", // Recommended: Use the Petra Christian University or CED logo
    desc: {
      tagalog:
        "Isang Scopus-indexed journal mula sa Indonesia para sa civil engineering, structural design, at machine learning applications.",
      english:
        "A Scopus-indexed journal from Indonesia focusing on civil engineering, structural design, and machine learning applications.",
    },
  },
];

