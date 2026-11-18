import { site } from "../data/site";
import type { Publication, PubType } from "../data/publications";

const PREFIX: Record<PubType, string> = { conference: "C", journal: "J", preprint: "P" };

export const stripMark = (author: string) => author.replace(/\*$/, "");
export const isMe = (author: string) => site.nameVariants.includes(stripMark(author));

/** First author, or marked equal-contribution together with the first author. */
export function isFirstAuthor(pub: Publication): boolean {
  const first = pub.authors[0];
  if (isMe(first)) return true;
  if (!first.endsWith("*")) return false;
  return pub.authors.some((a) => a.endsWith("*") && isMe(a));
}

export interface NumberedPub extends Publication {
  label: string; // "C1", "J1", "P1" — numbered oldest first within each type
  firstAuthor: boolean;
}

/** Newest first, each labelled within its type. */
export function numbered(pubs: Publication[]): NumberedPub[] {
  const counters: Record<PubType, number> = { conference: 0, journal: 0, preprint: 0 };
  return [...pubs]
    .sort((a, b) => a.date.localeCompare(b.date))
    .map((p) => ({ ...p, label: `${PREFIX[p.type]}${++counters[p.type]}`, firstAuthor: isFirstAuthor(p) }))
    .reverse();
}

const bibName = (author: string) => {
  const name = stripMark(author);
  const j = name.lastIndexOf(" ");
  return j < 0 ? name : `${name.slice(j + 1)}, ${name.slice(0, j)}`;
};

export function bibtex(pub: Publication): string {
  const year = pub.date.slice(0, 4);
  const fields: [string, string | undefined][] = [
    ["title", `{${pub.title}}`],
    ["author", pub.authors.map(bibName).join(" and ")],
  ];
  if (pub.type === "conference") fields.push(["booktitle", pub.venueFull]);
  if (pub.type === "journal") fields.push(["journal", pub.venueFull]);
  if (pub.type === "preprint" && pub.arxiv) {
    fields.push(["eprint", pub.arxiv], ["archivePrefix", "arXiv"]);
  }
  fields.push(["pages", pub.pages], ["year", year], ["doi", pub.doi]);
  const entry = pub.type === "conference" ? "inproceedings" : pub.type === "journal" ? "article" : "misc";
  const body = fields
    .filter((f): f is [string, string] => Boolean(f[1]))
    .map(([k, v]) => `  ${k} = {${v}}`)
    .join(",\n");
  return `@${entry}{${pub.key},\n${body}\n}`;
}

export function links(pub: Publication): { label: string; url: string }[] {
  const out: { label: string; url: string }[] = [];
  if (pub.doi) out.push({ label: "Paper", url: `https://doi.org/${pub.doi}` });
  if (pub.arxiv) out.push({ label: "arXiv", url: `https://arxiv.org/abs/${pub.arxiv}` });
  return out.concat(pub.links ?? []);
}
