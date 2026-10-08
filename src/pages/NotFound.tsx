import { NavLink } from "react-router";
import Card from "../components/ui/Card";

function NotFound() {
  return (
    <Card className="max-w-md mx-auto w-full">
      <h2 className="page-title">404 — Page not found</h2>
      <p className="text-body">The page you are looking for does not exist.</p>
      <NavLink to="/" end className="text-link text-link--strong self-start">
        ← Back to Home
      </NavLink>
    </Card>
  );
}

export default NotFound;
