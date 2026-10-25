import { ImageResponse } from "next/og";

/**
 * Site-wide Open Graph image (1200x630), generated at build time.
 * Uses the brand palette: deep navy with blue/violet gradient accents.
 */
export const alt = "CryptoSupport — Understand Crypto. Make Informed Decisions.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          background:
            "linear-gradient(135deg, #05070F 0%, #0B1022 55%, #141034 100%)",
          position: "relative",
        }}
      >
        {/* Glow accents */}
        <div
          style={{
            position: "absolute",
            top: -180,
            left: -120,
            width: 560,
            height: 560,
            borderRadius: 9999,
            background:
              "radial-gradient(circle, rgba(76,125,255,0.28) 0%, transparent 70%)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -200,
            right: -140,
            width: 620,
            height: 620,
            borderRadius: 9999,
            background:
              "radial-gradient(circle, rgba(139,92,246,0.26) 0%, transparent 70%)",
            display: "flex",
          }}
        />

        {/* Shield mark */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 24,
          }}
        >
          <div
            style={{
              width: 92,
              height: 92,
              borderRadius: 24,
              background: "linear-gradient(135deg, #4C7DFF 0%, #8B5CF6 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 52,
              color: "white",
              fontWeight: 700,
            }}
          >
            C
          </div>
          <div
            style={{
              fontSize: 64,
              fontWeight: 700,
              color: "#FFFFFF",
              letterSpacing: -1,
              display: "flex",
            }}
          >
            CryptoSupport
          </div>
        </div>

        {/* Tagline */}
        <div
          style={{
            marginTop: 48,
            fontSize: 52,
            fontWeight: 700,
            lineHeight: 1.15,
            letterSpacing: -1,
            display: "flex",
          }}
        >
          <span style={{ color: "#FFFFFF" }}>Understand Crypto. </span>
          <span
            style={{
              background: "linear-gradient(90deg, #8FB4FF 0%, #B39DFF 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Make Informed Decisions.
          </span>
        </div>

        {/* Footer line */}
        <div
          style={{
            marginTop: 44,
            fontSize: 28,
            color: "#9AA7C2",
            display: "flex",
            alignItems: "center",
            gap: 16,
          }}
        >
          <span>Free educational guides on crypto, blockchain & security</span>
          <span style={{ color: "#4C7DFF" }}>criptosupport.xyz</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
