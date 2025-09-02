import { Outlet } from "react-router-dom";
import PhoneButton from "../../components/UI/PhoneButton";
import ScrollToTop from "./ScrollToTop";
import Header from "./header/Header";
import Footer from "./footer/Footer";

function Layout() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <PhoneButton />
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
