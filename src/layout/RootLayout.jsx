import { Outlet } from "react-router-dom";
import MobileNav from "../components/MobileNav";
import Navbar from "../components/Navbar";
import ScrollToTop from "../components/ScrollToTop";
import Sidebar from "../components/Sidebar";
import "../styles/pages/root.scss";
export default function RootLayout() {
  return (
    <main className="root-layout">
      <ScrollToTop />
      <Sidebar />
      <div>
        <section className="app-container">
          <Navbar />
          <Outlet />
        </section>
        <MobileNav />
      </div>
    </main>
  );
}
