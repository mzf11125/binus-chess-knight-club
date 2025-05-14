
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-chessBlue text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-xl font-bold text-chessBlue">♞</span>
              </div>
              <div className="font-bold text-xl">BINUS Chess Club</div>
            </Link>
            <p className="text-gray-300 mb-4">
              Promoting chess excellence and community at Bina Nusantara University
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-chessGreen transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-chessGreen transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-chessGreen transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div className="md:col-span-1">
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-gray-300 hover:text-white transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-gray-300 hover:text-white transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <address className="not-italic text-gray-300">
              <p>Bina Nusantara University</p>
              <p>Kemanggisan, Jakarta Barat</p>
              <p className="mt-2">Email: binuschess@example.com</p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} BINUS Chess Club. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
