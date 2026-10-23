import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

function Layout() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between">
      <Header />
      <main className="w-full px-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
