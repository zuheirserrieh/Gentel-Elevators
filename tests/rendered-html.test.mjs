import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(new Request(`http://localhost${path}`, { headers: { accept: "text/html" } }), { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } }, { waitUntil() {}, passThroughOnException() {} });
}

test("server-renders the Gentle Elevators home page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Gentle Elevators \| Elevator Services Across Lebanon/);
  assert.match(html, /ELEVATORS THAT/);
  assert.match(html, /MOVE YOU FORWARD/);
  assert.match(html, /COMPLETE ELEVATOR SOLUTIONS/);
  assert.match(html, /Chat on WhatsApp/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/);
});

test("keeps business content configurable", async () => {
  const [company, projects, api] = await Promise.all([
    readFile(new URL("../data/company.ts", import.meta.url), "utf8"),
    readFile(new URL("../data/projects.ts", import.meta.url), "utf8"),
    readFile(new URL("../app/api/contact/route.ts", import.meta.url), "utf8"),
  ]);
  assert.match(company, /whatsappDigits/);
  assert.match(projects, /export const projects/);
  assert.match(api, /FORM_DELIVERY_EMAIL/);
  assert.match(api, /formsubmit\.co/);
  assert.match(api, /website/);
});
