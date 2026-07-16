import { ImageResponse } from "next/og";
import { business } from "@/data/business";

export const runtime = "edge";
export const alt = business.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "80px",
          background: "#14110f",
          color: "#f7f3ec",
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            fontSize: 22,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#c89b3c",
            display: "flex",
          }}
        >
          Angra dos Reis - Nova Angra
        </div>
        <div style={{ fontSize: 74, marginTop: 24, display: "flex" }}>
          {business.name}
        </div>
        <div style={{ fontSize: 28, marginTop: 24, color: "#c9beac", display: "flex" }}>
          Nota {business.rating} de 5 - {business.reviewCount} avaliacoes no Google
        </div>
      </div>
    ),
    { ...size }
  );
}
