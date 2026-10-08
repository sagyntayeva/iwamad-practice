import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

function Layout() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Header />
      <main className="site-main w-full flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
