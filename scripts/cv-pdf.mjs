// Builds the site, serves it, and prints /cv/ to public/cv.pdf with headless Chrome.
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { build, preview } from "astro";

const chrome = process.env.CHROME ?? "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const port = 4399;

await build({ logLevel: "warn" });
const server = await preview({ server: { port }, logLevel: "warn" });
try {
  // Async: the preview server runs in this process and must keep serving while Chrome loads the page.
  await promisify(execFile)(chrome, [
    "--headless=new",
    "--disable-gpu",
    "--no-pdf-header-footer",
    `--print-to-pdf=${new URL("../public/cv.pdf", import.meta.url).pathname}`,
    `http://localhost:${port}/cv/`,
  ]);
} finally {
  await server.stop();
}
// Rebuild so dist/ carries the fresh PDF.
await build({ logLevel: "warn" });
