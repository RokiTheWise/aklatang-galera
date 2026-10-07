type Category = "egovernment" | "scholarships" | "transparency";

interface Resource {
  id: number;
  name: string;
  category: Category;
  link: string;
  logoUrl: string;
  featured?: boolean;
  isLocal?: boolean;
  tags?: string[];
  desc: { tagalog: string; english: string };
}

export const servicesResources: Resource[] = [
  {
    id: 1,
    category: "egovernment",
    featured: true,
    isLocal: true,
    name: "eLGU Puerto Galera",
    link: "https://elgu-puerto-galera-oriental-mindoro.e.gov.ph/elgu-service",
    logoUrl: "/elgu-logo.png",
    tags: ["Business Permit (BPLS)", "Civil Registry", "Cedula / CTC"],
    desc: {
      tagalog:
        "Opisyal na online portal ng Munisipalidad ng Puerto Galera para sa mga serbisyong sibil.",
      english:
        "Official online portal of the Municipality of Puerto Galera for civil services.",
    },
  },
  {
    id: 2,
    category: "egovernment",
    featured: false,
    name: "eSEC Portal",
    link: "https://esecure.sec.gov.ph/",
    logoUrl: "sec-logo.png",
    desc: {
      tagalog: "Online na pagpapatala ng negosyo at korporasyon sa SEC.",
      english: "Online business and corporation registration with the SEC.",
    },
  },
  {
    id: 3,
    category: "egovernment",
    featured: false,
    name: "LTO Online Portal",
    link: "https://portal.lto.gov.ph/",
    logoUrl: "lto-logo.svg",
    desc: {
      tagalog:
        "I-renew ang lisensya, rehistro, at iba pang serbisyo ng LTO online.",
      english:
        "Renew your license, registration, and other LTO services online.",
    },
  },
  {
    id: 4,
    category: "egovernment",
    featured: false,
    name: "My.SSS Portal",
    link: "https://www.sss.gov.ph/",
    logoUrl: "sss-logo.svg",
    desc: {
      tagalog:
        "I-check ang SSS contributions, mag-apply ng benefits, at marami pa.",
      english: "Check SSS contributions, apply for benefits, and more.",
    },
  },
  {
    id: 5,
    category: "egovernment",
    featured: false,
    name: "Pag-IBIG Fund Online",
    link: "https://www.pagibigfundservices.com/",
    logoUrl: "pag-ibig-logo.svg",
    desc: {
      tagalog:
        "Mag-contribute, mag-apply ng loan, at ma-access ang Pag-IBIG services online.",
      english:
        "Contribute, apply for a loan, and access Pag-IBIG services online.",
    },
  },
  {
    id: 6,
    category: "egovernment",
    featured: false,
    name: "PhilHealth Member Portal",
    link: "https://memberinquiry.philhealth.gov.ph/member/",
    logoUrl: "philhealth-logo.svg",
    desc: {
      tagalog: "I-verify ang PhilHealth contributions at i-download ang MDR.",
      english: "Verify PhilHealth contributions and download your MDR.",
    },
  },
  {
    id: 7,
    category: "egovernment",
    featured: false,
    name: "PhilSys Registration",
    link: "https://philsys.gov.ph/",
    logoUrl: "philsys-logo.png",
    desc: {
      tagalog:
        "Mag-apply at i-track ang iyong Philippine National ID (PhilSys).",
      english: "Apply for and track your Philippine National ID (PhilSys).",
    },
  },
  {
    id: 19,
    category: "egovernment",
    featured: false,
    name: "eGovPH Super App",
    link: "https://e.gov.ph/",
    logoUrl: "/egov-logo.png",
    desc: {
      tagalog:
        "Ang one-stop-shop app para sa lahat ng serbisyo ng gobyerno ng Pilipinas.",
      english:
        "The single operating system app for all Philippine government services.",
    },
  },
  {
    id: 20,
    category: "egovernment",
    featured: false,
    name: "DFA Passport Appointment",
    link: "https://www.passport.gov.ph/",
    logoUrl: "/dfa-logo.png",
    desc: {
      tagalog: "Opisyal na portal para sa passport appointments at renewals.",
      english:
        "Official portal for scheduling passport applications and renewals.",
    },
  },
  {
    id: 21,
    category: "egovernment",
    featured: false,
    name: "BIR ORUS",
    link: "https://orus.bir.gov.ph/",
    logoUrl: "/bir-logo.png",
    desc: {
      tagalog:
        "Online portal para sa registration at updates ng Taxpayer Identification Number (TIN).",
      english:
        "Online registration and update system for Taxpayer Identification Numbers.",
    },
  },
  {
    id: 22,
    category: "egovernment",
    featured: false,
    name: "PSA Helpline",
    link: "https://psahelpline.ph/",
    logoUrl: "/psa-logo.png",
    desc: {
      tagalog: "Mag-order ng Birth, Marriage, at Death Certificates online.",
      english:
        "Order Birth, Marriage, and Death Certificates for nationwide delivery.",
    },
  },
  {
    id: 23,
    category: "egovernment",
    featured: false,
    name: "DTI BNRS",
    link: "https://bnrs.dti.gov.ph/",
    logoUrl: "/dti-logo.png",
    desc: {
      tagalog: "I-rehistro ang pangalan ng iyong negosyo online sa DTI.",
      english:
        "Register your sole proprietorship business name online with DTI.",
    },
  },
  {
    id: 8,
    category: "scholarships",
    featured: false,
    name: "Ateneo de Manila Scholarships",
    link: "https://www.ateneo.edu/college/scholarships/programs",
    logoUrl: "ateneo-logo.png",
    desc: {
      tagalog:
        "Mga scholarship at financial aid programs ng Ateneo de Manila University.",
      english:
        "Scholarship and financial aid programs of Ateneo de Manila University.",
    },
  },
  {
    id: 9,
    category: "scholarships",
    featured: false,
    name: "CHED UniFAST Scholarships",
    link: "https://ched.gov.ph/merit-scholarship/",
    logoUrl: "ched-logo.png",
    desc: {
      tagalog:
        "TES, StuFAPs, at iba pang scholarship programs ng CHED para sa mga Pilipino.",
      english:
        "TES, StuFAPs, and other CHED scholarship programs for Filipino students.",
    },
  },
  {
    id: 10,
    category: "scholarships",
    featured: false,
    name: "De La Salle University Scholarships",
    link: "https://www.dlsu.edu.ph/admission/scholarship/",
    logoUrl: "dlsu-logo.png",
    desc: {
      tagalog:
        "Mga iskolarship at financial assistance ng De La Salle University.",
      english:
        "Scholarship and financial assistance programs of De La Salle University.",
    },
  },
  {
    id: 11,
    category: "scholarships",
    featured: false,
    name: "DOST-SEI Scholarships",
    link: "https://www.science-scholarships.ph/",
    logoUrl: "dost-logo.png",
    desc: {
      tagalog:
        "Mga scholarship ng DOST para sa mga nag-aaral ng agham at teknolohiya.",
      english:
        "DOST scholarships for students pursuing science and technology.",
    },
  },
  {
    id: 12,
    category: "scholarships",
    featured: false,
    name: "OWWA Scholarships",
    link: "https://scholarship.owwa.gov.ph/",
    logoUrl: "owwa-logo.svg",
    desc: {
      tagalog: "Educational assistance para sa mga anak ng OFWs mula sa OWWA.",
      english: "Educational assistance for children of OFWs from OWWA.",
    },
  },
  {
    id: 13,
    category: "scholarships",
    featured: false,
    name: "University of Santo Tomas Scholarships",
    link: "https://ofad.ust.edu.ph/scholarships/",
    logoUrl: "ust-logo.svg",
    desc: {
      tagalog:
        "Mga scholarship at tuition discount ng Unibersidad ng Santo Tomas.",
      english:
        "Scholarship and tuition discount programs of the University of Santo Tomas.",
    },
  },
  {
    id: 14,
    category: "scholarships",
    featured: false,
    name: "University of the Philippines Scholarships",
    link: "https://upd.edu.ph/students/scholarships-and-grants/",
    logoUrl: "up-logo.png",
    desc: {
      tagalog:
        "Scholarship at financial assistance mula sa UP para sa mga Pilipino.",
      english:
        "UP scholarships and financial assistance programs for Filipino students.",
    },
  },
  {
    id: 24,
    category: "scholarships",
    featured: false,
    name: "SM Foundation Scholarship",
    link: "https://www.sm-foundation.org/what_we_do/college-scholarship-program/",
    logoUrl: "/sm-logo.svg",
    desc: {
      tagalog:
        "Full tuition at allowance para sa mga kwalipikadong public SHS graduates.",
      english:
        "Full tuition and monthly stipends for qualified public high school graduates.",
    },
  },
  {
    id: 25,
    category: "scholarships",
    featured: false,
    name: "Gokongwei Brothers Foundation",
    link: "https://www.gokongweibrothersfoundation.org/programs/scholarships",
    logoUrl: "/gokongwei-logo.jpg",
    desc: {
      tagalog:
        "Suportang pinansyal para sa mga mahuhusay na mag-aaral sa STEM courses.",
      english:
        "Financial support for outstanding students pursuing STEM-related degrees.",
    },
  },
  {
    id: 26,
    category: "scholarships",
    featured: false,
    name: "Megaworld Foundation",
    link: "https://www.megaworldfoundation.com/scholarship_program",
    logoUrl: "/mf-logo.png",
    desc: {
      tagalog:
        "Scholarship program para sa mga deserving na estudyante sa kolehiyo.",
      english:
        "Educational assistance program for deserving college students nationwide.",
    },
  },
  {
    id: 28,
    category: "scholarships",
    featured: false,
    name: "Aboitiz Future Leaders Scholarship Program",
    link: "https://sites.google.com/aboitiz.com/aboitiz-future-leaders-scholar/home?authuser=0/",
    logoUrl: "/aboitiz-logo.svg",
    desc: {
      tagalog:
        "Full tuition at allowance para sa mga sophomore (88% GWA) sa Engineering, Business, at Data Science.",
      english:
        "Full tuition and allowances for sophomores (88% GWA) in Engineering, Business, and Data Science.",
    },
  },
  {
    id: 32,
    category: "scholarships",
    featured: false,
    name: "National University Manila Scholarships",
    link: "https://www.national-u.edu.ph/nu-manila/scholarships/",
    logoUrl: "nu-logo.svg",
    desc: {
      tagalog:
        "Mga scholarship at financial aid programs ng National University Manila.",
      english:
        "Scholarship and financial aid programs of National University Manila.",
    },
  },
  {
    id: 33,
    category: "scholarships",
    featured: false,
    name: "Far Eastern University Scholarships",
    link: "https://www.feu.edu.ph/cost-and-aid/scholarship-grants/",
    logoUrl: "feu-logo.png",
    desc: {
      tagalog:
        "Mga scholarship at financial aid programs ng Far Eastern University.",
      english:
        "Scholarship and financial aid programs of Far Eastern University.",
    },
  },
  {
    id: 15,
    category: "transparency",
    featured: false,
    name: "Philippine Government Procurement System (PhilGEPS)",
    link: "https://www.philgeps.gov.ph/",
    logoUrl: "philgeps-logo.png",
    desc: {
      tagalog:
        "Opisyal na procurement at bidding portal ng gobyerno ng Pilipinas.",
      english:
        "Official government procurement and bidding portal of the Philippines.",
    },
  },
  {
    id: 16,
    category: "transparency",
    featured: false,
    name: "COA Transparency Portal",
    link: "https://www.coa.gov.ph/",
    logoUrl: "coa-logo.png",
    desc: {
      tagalog: "Mga ulat at audit ng Commission on Audit ng Pilipinas.",
      english:
        "Reports and audits from the Commission on Audit of the Philippines.",
    },
  },
  {
    id: 17,
    category: "transparency",
    featured: false,
    isLocal: true,
    name: "PIO Puerto Galera",
    link: "https://www.facebook.com/PIOPuertoGalera",
    logoUrl: "piopg-logo.jpg",
    desc: {
      tagalog:
        "Opisyal na pahayag at balita mula sa Public Information Office ng Puerto Galera.",
      english:
        "Official announcements and news from the Puerto Galera Public Information Office.",
    },
  },
  {
    id: 18,
    category: "transparency",
    featured: false,
    isLocal: true,
    name: "Sangguniang Bayan ng Puerto Galera",
    link: "https://www.facebook.com/SangguniangBayanPuertoGalera",
    logoUrl: "sbpg-logo.jpeg",
    desc: {
      tagalog:
        "Mga ordinansa, resolusyon, at opisyal na aksyon ng Sangguniang Bayan.",
      english:
        "Ordinances, resolutions, and official actions of the Municipal Council.",
    },
  },
  {
    id: 29,
    category: "transparency",
    featured: false,
    name: "Official Gazette",
    link: "https://www.officialgazette.gov.ph/",
    logoUrl: "/og-logo.png",
    desc: {
      tagalog:
        "Ang opisyal na journal ng Republika ng Pilipinas para sa mga bagong batas.",
      english:
        "The official journal of the Republic of the Philippines for new laws and issuances.",
    },
  },
  {
    id: 30,
    category: "transparency",
    featured: false,
    name: "FOI Philippines",
    link: "https://www.foi.gov.ph/",
    logoUrl: "/foi-logo.png",
    desc: {
      tagalog: "Portal para sa paghiling ng pampublikong impormasyon at datos.",
      english:
        "Official portal for requesting public data and government documents.",
    },
  },
  {
    id: 31,
    category: "transparency",
    featured: false,
    name: "OGP Philippines",
    link: "https://ogp.dbm.gov.ph/",
    logoUrl: "/ogp-logo.jpg",
    desc: {
      tagalog: "Inisyatibo para sa mas bukas at tapat na pamamahala sa bansa.",
      english:
        "Initiative for a more open, accountable, and transparent governance.",
    },
  },
  {
    id: 34,
    category: "egovernment",
    featured: false,
    name: "PPA Online Reservation Assistance System (ORAS)",
    link: "https://oras.ppa.com.ph/",
    logoUrl: "oras-logo.png",
    desc: {
      tagalog:
        "Libreng digital system ng PPA para sa pag-schedule ng biyahe at pag-iwas sa mahabang pila sa Batangas at Puerto Galera Port.",
      english:
        "A free digital system by the PPA to schedule port trips and avoid long queues in Batangas, Puerto Galera, and other major ports.",
    },
  },
];
