import type { Language } from "./resources";

export const pageGuidance: Record<string, Record<Language, string>> = {
  "/about": {
    english: "Learn what Aklatang Galera offers and how to use its three sections.",
    tagalog: "Alamin ang tungkol sa Aklatang Galera at kung paano gamitin ang tatlong seksyon nito.",
  },
  "/": {
    english: "Choose one of the three sections to get started.",
    tagalog: "Pumili ng isa sa tatlong seksyon para makapagsimula.",
  },
  "/aklatan": {
    english:
      "Search research papers with Semantic Scholar, or browse our curated list of free databases.",
    tagalog:
      "Maghanap ng research paper sa Semantic Scholar o pumili sa aming listahan ng libreng database.",
  },
  "/hanapbuhay": {
    english:
      "Choose Jobs, Skills, or Business, then open a website to get started.",
    tagalog:
      "Pumili ng Trabaho, Kasanayan, o Negosyo, tapos buksan ang website na kailangan mo.",
  },
  "/public-services": {
    english:
      "Choose a category or search for a service. Use Puerto Galera for local services and news.",
    tagalog:
      "Pumili ng kategorya o maghanap ng serbisyo. Piliin ang Puerto Galera para sa lokal na serbisyo at balita.",
  },
};
