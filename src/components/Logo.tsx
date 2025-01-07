import { SVGProps } from "react";

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 300 120"
      fill="none"
      {...props}
    >
      <title>Street Skate Logo</title>
      {/* Skateboard deck */}
      <path
        fill="currentColor"
        d="M50 45 C50 40, 250 40, 250 45 C250 50, 250 55, 250 60 C250 65, 50 65, 50 60 C50 55, 50 50, 50 45"
      />
      
      {/* Wheels */}
      <circle cx="80" cy="70" r="12" fill="currentColor" />
      <circle cx="220" cy="70" r="12" fill="currentColor" />
      
      {/* Text - STREET */}
      <text
        x="70"
        y="100"
        fill="currentColor"
        style={{
          fontSize: "24px",
          fontWeight: "bold",
          fontFamily: "Arial, sans-serif"
        }}
      >
        STREET
      </text>

      {/* Text - SKATE */}
      <text
        x="170"
        y="100"
        fill="currentColor"
        style={{
          fontSize: "24px",
          fontWeight: "bold",
          fontFamily: "Arial, sans-serif"
        }}
      >
        SKATE
      </text>
      
      {/* Motion lines */}
      <path
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        d="M30 75 L10 75 M30 80 L15 80 M30 85 L20 85"
      />
    </svg>
  );
}