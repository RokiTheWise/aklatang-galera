"use client";

import { useSyncExternalStore } from "react";

const changeEvent = "aklatang:directory-params";

function subscribe(notify: () => void) {
  window.addEventListener("popstate", notify);
  window.addEventListener(changeEvent, notify);
  return () => {
    window.removeEventListener("popstate", notify);
    window.removeEventListener(changeEvent, notify);
  };
}

// A stable server snapshot keeps the directory in prerendered HTML. URL filters
// take over after hydration, without turning the entire page into a CSR shell.
export function useDirectoryParams() {
  const search = useSyncExternalStore(
    subscribe,
    () => window.location.search,
    () => "",
  );
  return new URLSearchParams(search);
}

export function notifyDirectoryParams() {
  window.dispatchEvent(new Event(changeEvent));
}
