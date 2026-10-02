import { NavLink } from "react-router";

function NotFound() {
  return (
    <section className="max-w-md mx-auto bg-white rounded-2xl shadow-md p-6 flex flex-col items-start gap-4">
      <h2 className="text-lg font-semibold text-slate-800">404 — Page not found</h2>
      <p className="text-sm text-slate-600">
        The page you are looking for does not exist.
      </p>
      <NavLink
        to="/"
        end
        className="rounded-lg bg-sky-600 text-white px-4 py-2 text-sm hover:bg-sky-700 transition-colors"
      >
        Back to Home
      </NavLink>
    </section>
  );
}

export default NotFound;
