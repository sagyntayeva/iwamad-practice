import { NavLink } from "react-router";
import { useLikes } from "../context/useLikes";
import logo from "../assets/logo.svg";

const navLinks = [
  { to: "/", label: "Home", end: true },
  { to: "/skills", label: "Skills", end: false },
  { to: "/contact", label: "Contact", end: false },
  { to: "/register", label: "Register", end: false },
];

function Header() {
  const { likes } = useLikes();

  return (
    <header className="site-header">
      <img src={logo} alt="" width={32} height={32} className="site-header__logo" />
      <h1 className="site-header__title">KBTU SITE Students</h1>
      <nav className="site-nav" aria-label="Main">
        {navLinks.map((link) => (
          <NavLink key={link.to} to={link.to} end={link.end} className="site-nav__link">
            {link.label}
          </NavLink>
        ))}
      </nav>
      <span className="site-header__likes">Likes: {likes}</span>
    </header>
  );
}

export default Header;
