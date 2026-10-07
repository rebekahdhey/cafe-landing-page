type NavLink = {
  label: string;
  href: string;
};

const links: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "Menu", href: "#menu" },
  { label: "About", href: "#about" },
  { label: "Hours", href: "#hours" },
];

function Navbar() {
  return (
    <header className="navbar">
      <a href="#home" className="logo">
        🕯️ Little Hearth
      </a>

      <nav>
        {links.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default Navbar;