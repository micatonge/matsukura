import Link from "next/link";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* About Section */}
          <div className="footer-item">
            <h4>About</h4>
            <ul>
              <li>
                <Link href="/about" className="hover-text">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/locations" className="hover-text">
                  Locations
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover-text">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="footer-item ft">
            <h4>Contact</h4>
            <p>Email: info@matsukura-eyewear.com</p>
            <p>Phone: +81 6-6608-3168</p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p className="footer-text">
            &copy; {new Date().getFullYear()} Matsukura Eyewear. All rights
            reserved.
          </p>
          <div className="social-icons">
            <a
              href="https://instagram.com/matsukurayata"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://facebook.com/MatsukuraYata"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://twitter.com/matsukuramegane"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
