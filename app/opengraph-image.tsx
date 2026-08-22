import { ImageResponse } from "next/og";
import { siteConfig } from "./config/site";

export const alt =
  "Diamond Insurance Agency — Clear guidance for protecting what matters most";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background:
            "linear-gradient(135deg, #082f49 0%, #155e75 48%, #0f766e 100%)",
          color: "white",
          padding: "72px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "420px",
            height: "420px",
            borderRadius: "9999px",
            top: "-150px",
            right: "-80px",
            background: "rgba(103, 232, 249, 0.14)",
          }}
        />

        <div
          style={{
            position: "absolute",
            width: "380px",
            height: "380px",
            borderRadius: "9999px",
            bottom: "-180px",
            left: "260px",
            background: "rgba(94, 234, 212, 0.12)",
          }}
        />

        <div
          style={{
            position: "relative",
            display: "flex",
            width: "100%",
            height: "100%",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                fontSize: "24px",
                fontWeight: 700,
                letterSpacing: "5px",
                textTransform: "uppercase",
                color: "#cffafe",
              }}
            >
              Diamond Insurance Agency
            </div>

            <div
              style={{
                display: "flex",
                maxWidth: "900px",
                marginTop: "38px",
                fontSize: "70px",
                lineHeight: 1.06,
                fontWeight: 800,
                letterSpacing: "-2px",
              }}
            >
              Clear guidance for protecting what matters most.
            </div>

            <div
              style={{
                display: "flex",
                maxWidth: "850px",
                marginTop: "30px",
                fontSize: "28px",
                lineHeight: 1.4,
                color: "#ecfeff",
              }}
            >
              Life insurance, living benefits, and supplemental coverage
              guidance.
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderTop: "1px solid rgba(255,255,255,0.22)",
              paddingTop: "28px",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "14px",
                fontSize: "22px",
                color: "#cffafe",
              }}
            >
              <span>5+ Years Experience</span>
              <span>•</span>
              <span>Licensed in 6 States</span>
              <span>•</span>
              <span>Remote Consultations</span>
            </div>

            <div
              style={{
                display: "flex",
                fontSize: "21px",
                fontWeight: 700,
              }}
            >
              {siteConfig.url.replace("https://", "")}
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}