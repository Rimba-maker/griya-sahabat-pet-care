import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { describe, it } from "node:test";
import { civilDate, requestErrors, requestMessage, whatsappUrl, type VisitRequest } from "./booking.ts";

const visit: VisitRequest = {
  nama: "Rani", whatsapp: "081987654321", hewan: "Kucing", layanan: "Hotel",
  paket: "Kamar Standard", tanggal: "2026-10-20", checkout: "2026-10-21", catatan: "Alergi ayam",
};

describe("civilDate", () => {
  it("should reject a non-existent leap day instead of silently moving the visit to March", () => {
    assert.equal(civilDate("2026-02-29"), null);
    assert.equal(civilDate("2028-02-29")?.getMonth(), 1);
  });

  it("should preserve the selected civil day and local today west of UTC", () => {
    const moduleUrl = new URL("./booking.ts", import.meta.url).href;
    const child = spawnSync(process.execPath, ["--experimental-strip-types", "--input-type=module", "-e", `
      import assert from 'node:assert/strict';
      import { visitDate, localToday } from ${JSON.stringify(moduleUrl)};
      assert.equal(visitDate('2026-10-20'), '20 Oktober 2026');
      assert.equal(localToday(new Date('2026-10-09T23:30:00-07:00')), '2026-10-09');
    `], { encoding: "utf8", env: { ...process.env, TZ: "America/Los_Angeles" } });
    assert.equal(child.status, 0, child.stderr);
  });
});

describe("requestErrors", () => {
  it("should reject check-out on or before check-in and accept the first overnight stay", () => {
    assert.ok(requestErrors({ ...visit, checkout: "2026-10-20" }, "2026-10-09").checkout);
    assert.ok(requestErrors({ ...visit, checkout: "2026-10-19" }, "2026-10-09").checkout);
    assert.equal(requestErrors(visit, "2026-10-09").checkout, undefined);
  });

  it("should allow today but reject a past visit", () => {
    assert.equal(requestErrors({ ...visit, tanggal: "2026-10-09" }, "2026-10-09").tanggal, undefined);
    assert.ok(requestErrors({ ...visit, tanggal: "2026-10-08" }, "2026-10-09").tanggal);
  });

  it("should not require or leak stale hotel check-out into a daycare request", () => {
    const daycare: VisitRequest = { ...visit, layanan: "Daycare", checkout: "" };
    assert.equal(requestErrors(daycare, "2026-10-09").checkout, undefined);
    assert.equal(requestMessage({ ...daycare, checkout: "2026-10-21" }).includes("Check-out:"), false);
  });
});

describe("whatsappUrl", () => {
  it("should never redirect a pet parent's personal request to the unverified PRD example contact", () => {
    assert.equal(whatsappUrl("6281234567890", requestMessage(visit)), null);
  });
});
