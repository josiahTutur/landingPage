import Logo from "@/components/Logo";

/* Transparent nav overlaid on the dark hero photo — logo only. */
export default function Nav() {
  return (
    <nav className="nav" aria-label="Primary">
      <div className="nav-inner">
        <a href="#top" className="logo" aria-label="tutur — home">
          <Logo variant="white" className="nav-logo" />
        </a>
      </div>
    </nav>
  );
}
