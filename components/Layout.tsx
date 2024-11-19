// Layout.tsx
import Navbar from "./NavBar";
import Footer from "./Footer"; // If you have a footer as well

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />  {/* Navbar is included here */}
      <main>{children}</main>
      <Footer />  {/* Optional, if you have a footer */}
    </div>
  );
};

export default Layout;
