/* eslint-disable @next/next/no-img-element */
/* Official lockup: woven symbol on the LEFT of the tutur wordmark.
   Assets live in /public (trimmed to their content bounds). */

export default function Logo({
  height = 30,
  variant = "color",
  className,
}: {
  height?: number;
  variant?: "color" | "white";
  className?: string;
}) {
  const wordmark =
    variant === "white" ? "/tutur-wordmark-white.png" : "/tutur-wordmark.png";
  // symbol is ~1.08:1; wordmark text reads best a touch shorter than the symbol
  const wordHeight = Math.round(height * 0.62);
  return (
    <span
      className={className}
      style={{ display: "inline-flex", alignItems: "center", gap: height * 0.34 }}
    >
      <img
        src="/tutur-symbol.png"
        alt=""
        aria-hidden="true"
        style={{ height, width: "auto", display: "block" }}
      />
      <img
        src={wordmark}
        alt="tutur"
        style={{ height: wordHeight, width: "auto", display: "block" }}
      />
    </span>
  );
}
