import Link from "next/link";
import Image from "next/image";
import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { IconButton, Menu, MenuItem, useMediaQuery } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const isMobile = useMediaQuery("(max-width: 768px)");

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Image
          src="/images/matsukura.png"
          alt="Matsukura Logo"
          width={100}
          height={80}
          objectFit="contain"
        />
        <Link href="/" className="navbar-title">
          Matsukura Eyewear
        </Link>
      </div>

      {/* Mobile Menu Button (MUI IconButton) */}
      {isMobile && (
        <IconButton
          edge="start"
          className="mobile-menu-toggle"
          onClick={handleMenuOpen}
          aria-label="Toggle Navigation"
        >
          <MenuIcon />
        </IconButton>
      )}

      {/* Menu (for Mobile and Desktop) */}
      <div className={`nav-links ${isMobile ? "" : "desktop-menu"}`}>
        {!isMobile ? (
          <>
            <Link href="/Products" className="nav-link">Eyeglasses</Link>
            <Link href="/sunglasses" className="nav-link">Sunglasses</Link>
            <Link href="/contact" className="nav-link">Contact</Link>
            <Link href="/locations" className="nav-link">Locations</Link>
            <Link href="/about" className="nav-link">About</Link>
          </>
        ) : (
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <MenuItem onClick={handleMenuClose}>
              <Link href="/Products" className="nav-link">Eyeglasses</Link>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <Link href="/sunglasses" className="nav-link">Sunglasses</Link>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <Link href="/contact" className="nav-link">Contact</Link>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <Link href="/locations" className="nav-link">Locations</Link>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <Link href="/about" className="nav-link">About</Link>
            </MenuItem>
          </Menu>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
