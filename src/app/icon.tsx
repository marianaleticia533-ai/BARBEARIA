import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#14110f",
          borderRadius: 14,
        }}
      >
        <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#c89b3c" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <circle cx="6" cy="6" r="2.5" />
          <circle cx="6" cy="18" r="2.5" />
          <path d="M8.5 7.5 20 18M20 6 8.5 16.5" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
