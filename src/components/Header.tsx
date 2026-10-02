import { NavLink } from "react-router";
import { useLikes } from "../context/useLikes";

const navLinks = [
  { to: "/", label: "Home", end: true },
  { to: "/skills", label: "Skills", end: false },
  { to: "/contact", label: "Contact", end: false },
];

function Header() {
  const { likes } = useLikes();

  return (
    <header className="w-full py-6 px-4 flex flex-col items-center gap-3">
      <h1 className="text-2xl font-bold text-slate-800">KBTU SITE Students</h1>
      <div className="flex items-center gap-6">
        <nav className="flex gap-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) =>
                `rounded-lg px-3 py-1.5 text-sm transition-colors ${
                  isActive
                    ? "bg-sky-600 text-white font-semibold"
                    : "text-slate-600 hover:bg-slate-200"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <span className="text-sm text-slate-500">Likes: {likes}</span>
      </div>
    </header>
  );
}

export default Header;
