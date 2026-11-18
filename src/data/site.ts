export const site = {
  name: "Jongbhin Woo",
  // Byline spellings across papers; any match is bolded in author lists.
  nameVariants: ["Jongbhin Woo", "Jongbin Woo", "Jong-Bin Woo"],
  position: "Ph.D. Student, School of Electrical Engineering, KAIST",
  lab: { name: "Multimodal AI (MMAI) Lab", url: "https://mmai.io/" },
  advisor: { name: "Prof. Joon Son Chung", url: "https://mm.kaist.ac.kr/joon/" },
  description:
    "Jongbhin Woo — Ph.D. student at KAIST MMAI Lab working on multimodal understanding and sign language understanding.",
  email: "jongbin@mmai.io",
  links: {
    scholar: "https://scholar.google.com/citations?user=O_l7ShIAAAAJ",
  },
  // File under public/; shown in the hero when set.
  photo: "/profile.webp" as string | null,
  // File under public/; set by `npm run cv`, which writes public/cv.pdf.
  cv: "/cv.pdf" as string | null,
  location: "Daejeon, South Korea",
};

export const interests = ["Multimodal understanding", "Sign language understanding"];

export interface Entry {
  period?: string;
  title: string;
  org: string;
  detail?: string;
}

export const education: Entry[] = [
  {
    period: "Sep 2022 – present",
    title: "Integrated M.S.–Ph.D. in Electrical Engineering",
    org: "KAIST",
    detail: "Multimodal AI (MMAI) Lab · Advisor: Prof. Joon Son Chung",
  },
  {
    period: "Mar 2015 – Aug 2022",
    title: "B.S. in Electronics Engineering",
    org: "Kyungpook National University",
    detail: "GPA 4.12 / 4.3",
  },
];

export const experience: Entry[] = [
  {
    period: "Jan 2022 – Aug 2022",
    title: "Research Intern",
    org: "Multimodal AI (MMAI) Lab, KAIST",
    detail: "Advisor: Prof. Joon Son Chung",
  },
  {
    period: "Sep 2021 – Dec 2021",
    title: "Research Intern",
    org: "SI Analytics",
    detail: "Deep learning for satellite image analysis",
  },
];

export const teaching: Entry[] = [
  {
    period: "Fall 2024, Fall 2025",
    title: "Teaching Assistant",
    org: "School of Electrical Engineering, KAIST",
    detail: "Deep Learning for Visual Understanding",
  },
];

// National R&D projects; listed on the CV only.
export const projects: Entry[] = [
  {
    period: "Apr 2025 – present",
    title:
      "Non-face-to-face communication platform with user de-identification and fingerspelling-based input for privacy protection of deaf and hard-of-hearing people",
    org: "IITP, Ministry of Science and ICT",
    detail: "Participating researcher",
  },
  {
    period: "2022 – 2024",
    title: "Voice phishing detection and prevention on mobile devices",
    org: "IITP, Ministry of Science and ICT",
    detail: "Participating researcher",
  },
];

export const honors: Entry[] = [
  { period: "2018, 2019", title: "Academic Excellence Scholarship", org: "Kyungpook National University" },
];

export const military: Entry[] = [
  { period: "Jan 2016 – Oct 2017", title: "Mandatory Military Service", org: "Republic of Korea Army" },
];

export const skills = ["Python", "PyTorch"];

export const references: Entry[] = [
  {
    title: "Prof. Joon Son Chung",
    org: "Associate Professor, School of Electrical Engineering, KAIST",
    detail: "joonson@kaist.ac.kr · Ph.D. advisor",
  },
];
