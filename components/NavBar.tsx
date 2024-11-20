import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Image
          src="/images/matsukura.png"  // Image name 'matsukura.png'
          alt="Matsukura Logo"
          width={100}  // Set a fixed width for the logo
          height={80}  // Set a fixed height for the logo
          objectFit="contain"
        />
        <Link href="/" className="navbar-title">
          Matsukura Eyewear
        </Link>
      </div>
      <div className="nav-links">
        <Link href="/eyeglasses" className="nav-link">Eyeglasses</Link>
        <Link href="/sunglasses" className="nav-link">Sunglasses</Link>
        <Link href="/contact" className="nav-link">Contact</Link>
        <Link href="/locations" className="nav-link">Locations</Link>
        <Link href="/about" className="nav-link">About</Link>
      </div>
    </nav>
  );
};

export default Navbar;
