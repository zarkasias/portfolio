import { ImageResponse } from "next/og";

export const alt =
  "Chambers Consulting: a better website for your small business, without starting over.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "72px 80px",
        backgroundColor: "#eef7fa",
        color: "#16324a",
      }}
    >
      <div style={{ display: "flex", fontSize: 40, fontWeight: 600 }}>
        Chambers Consulting
      </div>

      <div
        style={{
          fontSize: 76,
          fontWeight: 600,
          lineHeight: 1.08,
          letterSpacing: "-0.02em",
          maxWidth: 1000,
        }}
      >
        A better website for your small business, without starting over
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
        <div
          style={{
            width: 96,
            height: 12,
            borderRadius: 999,
            backgroundColor: "#c8202f",
          }}
        />
        <div style={{ fontSize: 32, color: "#475a6b" }}>
          Website redesign and repair
        </div>
      </div>
    </div>,
    size,
  );
}
