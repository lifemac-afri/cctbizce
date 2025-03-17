import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { IoIosPin } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-primary_green text-primary_gray py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">About Us</h2>
          <p className="text-sm ">
            We&apos;re committed to providing excellent customer service.
            Contact us anytime for more information about our services.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
          <ul className="text-lg space-y-3 text-primary_gray">
            <li>
              <a href="/" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-white">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white">
                Contact
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-white">
                Services
              </a>
            </li>
          </ul>
        </div>

        {/* Contact and Social Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
          <div className="flex items-center mb-3 text-primary_gray">
            <FaPhoneAlt className="mr-2" />
            <span>+233 (0) 242601203</span>
          </div>
          <div className="flex items-center mb-3 text-primary_gray">
            <HiOutlineMail className="mr-2" />
            <a href="mailto:info@cctbusiness.com">
              <span>info@cctbusiness.com</span>
            </a>
          </div>
          <div className="flex items-center mb-3 text-primary_gray">
            <IoIosPin className="mr-2" />
            <a href="mailto:info@cctbusiness.com">
              <span>Accra, Kumasi, Ho </span>
            </a>
          </div>
          <div className="flex space-x-4 mt-4">
            <a
              href="https://www.facebook.com/cctbizce"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-white"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://www.x.com/cctbizce"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-white"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://www.instagram.com/cctbizce/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-white"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://www.linkedin.com/company/cctbizce/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-white"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-white pt-4 text-center">
        <p className="text-sm text-primary_gray">
          &copy; {new Date().getFullYear()} CCT Business Consult and Events. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
