interface CursilloLogoProps {
  width?: number;
  height?: number;
  className?: string;
  variant?: "dark" | "light" | "gold";
}

/**
 * The official Cursillo logo: a "C" arc with a pointed cross through it.
 * Matches the SVG from the original HTML template exactly.
 */
const CursilloLogo = ({
  width = 36,
  height = 46,
  className = "",
  variant = "dark",
}: CursilloLogoProps) => {
  const colors = {
    dark: {
      stroke: "#2C2825",
      fill: "#2C2825",
    },
    light: {
      stroke: "#C9A84C",
      fill: "white",
    },
    gold: {
      stroke: "#C9A84C",
      fill: "#C9A84C",
    },
  };

  const { stroke, fill } = colors[variant];
  const strokeOpacity = variant === "light" ? 0.7 : variant === "gold" ? 0.5 : 1;
  const fillOpacity = variant === "light" ? 0.9 : variant === "gold" ? 0.7 : 1;
  const crossFillOpacity = variant === "gold" ? 0.4 : fillOpacity;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 100 128"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* C shape arc */}
      <path
        d="M68 27 A42 42 0 1 0 68 97"
        stroke={stroke}
        strokeWidth={variant === "dark" ? "6" : "5"}
        fill="none"
        strokeLinecap="round"
        opacity={strokeOpacity}
      />
      {/* Cross vertical beam — tapers to point top and bottom */}
      <path
        d="M50 2 L47 44 L47 50 L47 60 L47 66 L47 112 L50 126 L53 112 L53 66 L53 60 L53 50 L53 44 Z"
        fill={fill}
        opacity={crossFillOpacity}
      />
      {/* Horizontal crossbeam — swept pointed ends */}
      <path
        d="M2 52 L47 48 L47 56 L2 52 Z"
        fill={fill}
        opacity={crossFillOpacity}
      />
      <path
        d="M98 52 L53 48 L53 56 L98 52 Z"
        fill={fill}
        opacity={crossFillOpacity}
      />
    </svg>
  );
};

export default CursilloLogo;
