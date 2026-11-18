export type PubType = "conference" | "journal" | "preprint";

export interface Publication {
  key: string; // BibTeX key
  type: PubType;
  title: string;
  /** As printed in the paper. Suffix "*" marks equal contribution. */
  authors: string[];
  venue: string; // short badge, e.g. "ACM MM 2024"
  venueFull: string; // proceedings / journal name for the citation line
  date: string; // "YYYY-MM-DD", publication or arXiv date; orders the list
  highlight?: string; // e.g. "Oral", "Spotlight"
  pages?: string;
  doi?: string;
  arxiv?: string; // arXiv id
  links?: { label: string; url: string }[];
  thumb?: string; // path under public/
}

export const publications: Publication[] = [
  {
    key: "woo2026signaligner",
    type: "preprint",
    title: "SignAligner: Dual-Granularity Span Generation for Sign Language Alignment",
    authors: ["Jongbhin Woo", "Youngjoon Jang", "Joon Son Chung"],
    venue: "Preprint",
    venueFull: "arXiv preprint arXiv:2611.22409",
    date: "2026-11-17",
    arxiv: "2611.22409",
    thumb: "/pubs/signaligner.webp",
  },
  {
    key: "woo2024letme",
    type: "conference",
    title: "Let Me Finish My Sentence: Video Temporal Grounding with Holistic Text Understanding",
    authors: ["Jongbhin Woo", "Hyeonggon Ryu", "Youngjoon Jang", "Jae Won Cho", "Joon Son Chung"],
    venue: "ACM MM 2024",
    venueFull: "Proceedings of the 32nd ACM International Conference on Multimedia",
    date: "2024-10-28",
    pages: "8199--8208",
    doi: "10.1145/3664647.3681514",
    arxiv: "2410.13598",
    thumb: "/pubs/vtg-htu.webp",
  },
  {
    key: "woo2024speech",
    type: "conference",
    title: "Speech Guided Masked Image Modeling for Visually Grounded Speech",
    authors: ["Jongbhin Woo", "Hyeonggon Ryu", "Arda Senocak", "Joon Son Chung"],
    venue: "ICASSP 2024",
    venueFull: "IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP)",
    date: "2024-04-14",
    pages: "8361--8365",
    doi: "10.1109/ICASSP48485.2024.10447235",
    thumb: "/pubs/speech-guided-mim.webp",
  },
  {
    key: "jang2023that",
    type: "conference",
    title: "That's What I Said: Fully-Controllable Talking Face Generation",
    authors: [
      "Youngjoon Jang",
      "Kyeongha Rho",
      "Jongbin Woo",
      "Hyeongkeun Lee",
      "Jihwan Park",
      "Youshin Lim",
      "Byeong-Yeol Kim",
      "Joon Son Chung",
    ],
    venue: "ACM MM 2023",
    venueFull: "Proceedings of the 31st ACM International Conference on Multimedia",
    date: "2023-10-26",
    pages: "3827--3836",
    doi: "10.1145/3581783.3612587",
    arxiv: "2304.03275",
    thumb: "/pubs/thats-what-i-said.webp",
  },
];
