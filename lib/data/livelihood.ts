type Category = "jobs" | "skills" | "entrepreneurship";

interface Resource {
  id: number;
  name: string;
  category: Category;
  link: string;
  logoUrl: string;
  desc: { tagalog: string; english: string };
}

export const livelihoodResources: Resource[] = [
  {
    id: 1,
    category: "entrepreneurship",
    name: "Canva for Business",
    link: "https://www.canva.com/",
    logoUrl: "/canva-logo.png",
    desc: {
      tagalog: "Libreng marketing materials para sa iyong negosyo.",
      english: "Free marketing materials and graphics for your business.",
    },
  },
  {
    id: 2,
    category: "skills",
    name: "Coursera",
    link: "https://www.coursera.org/courses?query=free",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/9/97/Coursera-Logo_600x600.svg",
    desc: {
      tagalog: "Mga kurso mula sa top universities — maraming libre.",
      english: "Courses from top universities — many are free to audit.",
    },
  },
  {
    id: 3,
    category: "entrepreneurship",
    name: "DTI NEGOSYO Center",
    link: "https://www.dti.gov.ph/",
    logoUrl: "dti-logo.png",
    desc: {
      tagalog: "Tulong sa pagpapatala at pagpapalago ng negosyo mula sa DTI.",
      english: "Business registration and growth support from DTI.",
    },
  },
  {
    id: 4,
    category: "entrepreneurship",
    name: "DTI Oriental Mindoro",
    link: "https://www.facebook.com/DTI.OrientalMindoro",
    logoUrl: "dti-ormin-logo.jpg",
    desc: {
      tagalog:
        "Mga programa at balita para sa mga negosyante sa Oriental Mindoro.",
      english: "Programs and updates for entrepreneurs in Oriental Mindoro.",
    },
  },
  {
    id: 5,
    category: "skills",
    name: "freeCodeCamp",
    link: "https://www.freecodecamp.org/",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/3/39/FreeCodeCamp_logo.png",
    desc: {
      tagalog: "Libreng web development at coding curriculum.",
      english: "Free full web development and coding curriculum.",
    },
  },
  {
    id: 6,
    category: "entrepreneurship",
    name: "Google Business Profile",
    link: "https://business.google.com/",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    desc: {
      tagalog: "I-list ang iyong negosyo sa Google — libre.",
      english: "List your business on Google — completely free.",
    },
  },
  {
    id: 7,
    category: "skills",
    name: "Google Digital Garage",
    link: "https://grow.google/intl/en_ph/",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    desc: {
      tagalog: "Libreng digital skills training mula sa Google.",
      english: "Free digital skills training from Google.",
    },
  },
  {
    id: 8,
    category: "jobs",
    name: "JobStreet Philippines",
    link: "https://www.jobstreet.com.ph/",
    logoUrl: "/jobstreet-logo.png",
    desc: {
      tagalog: "Isa sa pinakamalaking job site sa Pilipinas at Asya.",
      english: "One of the largest job sites in the Philippines and Asia.",
    },
  },
  {
    id: 9,
    category: "jobs",
    name: "Kalibrr",
    link: "https://www.kalibrr.com/",
    logoUrl: "https://www.kalibrr.com/favicon.ico",
    desc: {
      tagalog: "Job matching platform na nakatuon sa mga Pilipino.",
      english: "Job matching platform focused on Filipino job seekers.",
    },
  },
  {
    id: 10,
    category: "skills",
    name: "Khan Academy",
    link: "https://www.khanacademy.org/",
    logoUrl: "/khan-logo.png",
    desc: {
      tagalog: "Libreng pag-aaral sa math, agham, at marami pa.",
      english: "Free learning in math, science, and more.",
    },
  },
  {
    id: 11,
    category: "entrepreneurship",
    name: "LinkedIn for Business",
    link: "https://business.linkedin.com/",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
    desc: {
      tagalog: "I-promote ang iyong brand at negosyo sa LinkedIn.",
      english: "Promote your brand and business on LinkedIn.",
    },
  },
  {
    id: 12,
    category: "jobs",
    name: "LinkedIn Jobs",
    link: "https://www.linkedin.com/jobs/",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
    desc: {
      tagalog: "Global na job network — para sa lokal at remote na trabaho.",
      english: "Global job network — for local and remote opportunities.",
    },
  },
  {
    id: 13,
    category: "jobs",
    name: "OnlineJobs.ph",
    link: "https://www.onlinejobs.ph/",
    logoUrl: "onlinejobs-logo.jpg",
    desc: {
      tagalog: "Platform para sa mga remote at online na trabaho.",
      english: "Platform for remote and online work opportunities.",
    },
  },
  {
    id: 14,
    category: "jobs",
    name: "OrMin Government Careers",
    link: "https://ormindoro.gov.ph/careers/",
    logoUrl: "ormin-logo.png",
    desc: {
      tagalog: "Mga bakanteng posisyon sa gobyerno ng Oriental Mindoro.",
      english: "Open government positions in Oriental Mindoro.",
    },
  },
  {
    id: 15,
    category: "jobs",
    name: "Civil Service Commission Job Opportunities",
    link: "https://csc.gov.ph/career/",
    logoUrl: "csc-logo.png",
    desc: {
      tagalog:
        "Opisyal na job portal ng CSC — libre para sa lahat ng Pilipino.",
      english: "CSC's official job portal — free for all Filipinos.",
    },
  },
  {
    id: 16,
    category: "jobs",
    name: "Resume.com",
    link: "https://www.resume.com/",
    logoUrl: "resume-logo.png",
    desc: {
      tagalog: "Gumawa ng propesyonal na resume nang libre.",
      english: "Build a professional resume for free.",
    },
  },
  {
    id: 17,
    category: "skills",
    name: "TESDA Online Program",
    link: "https://e-tesda.gov.ph/course/",
    logoUrl: "tesda-logo.jpg",
    desc: {
      tagalog: "Libreng online na mga kurso mula sa TESDA — may sertipiko.",
      english: "Free online courses from TESDA — with certificates.",
    },
  },
  {
    id: 18,
    category: "jobs",
    name: "PhilJobNet",
    link: "https://philjobnet.gov.ph/",
    logoUrl: "/pej-logo.jpeg",
    desc: {
      tagalog: "Ang opisyal na job portal ng gobyerno ng Pilipinas (DOLE).",
      english: "The official job portal of the Philippine government (DOLE).",
    },
  },
  {
    id: 19,
    category: "jobs",
    name: "Indeed Philippines",
    link: "https://ph.indeed.com/",
    logoUrl: "/indeed-logo.png",
    desc: {
      tagalog: "Isang malawak na aggregator ng mga trabaho sa bansa.",
      english: "A massive aggregator of job listings across the country.",
    },
  },
  {
    id: 22,
    category: "skills",
    name: "UPOU MODeL",
    link: "https://model.upou.edu.ph/",
    logoUrl: "/up-logo.png",
    desc: {
      tagalog: "Libreng self-paced online courses mula sa UP Open University.",
      english: "Free self-paced online courses from the UP Open University.",
    },
  },
  {
    id: 23,
    category: "skills",
    name: "DICT ICT Trainings",
    link: "https://dict.gov.ph/trainings",
    logoUrl: "/dict-logo.png",
    desc: {
      tagalog:
        "Libreng training sa IT, cybersecurity, at freelancing mula sa DICT.",
      english: "Free training in IT, cybersecurity, and freelancing from DICT.",
    },
  },
  {
    id: 24,
    category: "entrepreneurship",
    name: "SEC Philippines",
    link: "https://www.sec.gov.ph/",
    logoUrl: "/sec-logo.png",
    desc: {
      tagalog:
        "Opisyal na website para sa pagpaparehistro ng korporasyon at partnership.",
      english: "Official site for registering corporations and partnerships.",
    },
  },
  {
    id: 25,
    category: "entrepreneurship",
    name: "BIR for Small Business",
    link: "https://www.bir.gov.ph/",
    logoUrl: "/bir-logo.png",
    desc: {
      tagalog:
        "Gabay para sa pagpaparehistro ng buwis para sa mga bagong negosyo.",
      english: "Tax registration guides and updates for new businesses.",
    },
  },
  {
    id: 26,
    category: "entrepreneurship",
    name: "Go Negosyo",
    link: "https://www.gonegosyo.ph/",
    logoUrl: "/gonegosyo-logo.png",
    desc: {
      tagalog:
        "Libreng mentorship at resources para sa mga nagnanais mag-negosyo.",
      english: "Free mentorship and resources for aspiring entrepreneurs.",
    },
  },
  {
    id: 27,
    category: "entrepreneurship",
    name: "IPOPHL",
    link: "https://www.ipophil.gov.ph/",
    logoUrl: "/ipophil-logo.png",
    desc: {
      tagalog:
        "Protektahan ang iyong brand o imbensyon sa pamamagitan ng Trademark at Patent.",
      english: "Protect your brand or invention through Trademark and Patents.",
    },
  },
  {
    id: 28,
    category: "skills",
    name: "ATI eLearning for Agriculture & Fisheries",
    link: "https://elearn.e-extension.gov.ph/",
    logoUrl: "/eaf-logo.png",
    desc: {
      tagalog:
        "Libreng online courses sa pagsasaka, pag-aalaga ng hayop, at pangingisda mula sa Dept. of Agriculture.",
      english:
        "Free online courses on farming, livestock, and fisheries from the Dept. of Agriculture.",
    },
  },
  {
    id: 29,
    category: "skills",
    name: "Harvard University - Free Online Courses",
    link: "https://pll.harvard.edu/catalog/free",
    logoUrl: "/harvard-logo.png",
    desc: {
      tagalog:
        "Libreng online courses mula sa Harvard University sa programming, data science, humanities, at iba pa.",
      english:
        "Free online courses from Harvard University covering programming, data science, humanities, and more.",
    },
  },
  {
    id: 30,
    category: "skills",
    name: "Alison Free Online Courses",
    link: "https://alison.com/",
    logoUrl: "/alison-logo.png",
    desc: {
      tagalog:
        "Higit sa 6,000 libreng kurso sa IT, Health, Business, at Hospitality Management. Ang mga sertipiko ay may bayad pero libre ang mga kurso.",
      english:
        "Over 6,000 free courses in IT, Health, Business, and Hospitality Management. Certificates are paid but courses are free to complete.",
    },
  },
];
