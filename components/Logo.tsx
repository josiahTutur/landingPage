/* eslint-disable @next/next/no-img-element */
/* Official tutur lockup (symbol + wordmark), supplied as single-file assets.
   Purple for light surfaces, white for dark. Lives in /public/images. */

export default function Logo({
  height,
  variant = "color",
  className,
}: {
  height?: number;
  variant?: "color" | "white";
  className?: string;
}) {
  const src =
    variant === "white"
      ? "/images/tutur-logo-white.png"
      : "/images/tutur-logo-purple.png";
  // If `height` is given, size inline; otherwise let CSS (className) control it
  // so it can be made responsive.
  return (
    <img
      src={src}
      alt="tutur"
      className={className}
      style={{ height: height ?? undefined, width: "auto", display: "block" }}
    />
  );
}
