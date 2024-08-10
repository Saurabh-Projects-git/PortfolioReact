import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="py-8 text-center text-white bg-gray-900" id="footer">
      <div className="container mx-auto">
        <div className="mb-4">
          <span className="block text-xl font-semibold mb-4">
            Follow us on:
          </span>
          <div className="flex justify-center items-center space-x-4">
            <a
              href="https://www.facebook.com/profile.php?id=100084279889035&mibextid=JRoKGi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-600"
            >
              <FaFacebook size={32} />
            </a>
            <a
              href="https://www.instagram.com/saurabhofficial_123?igsh=MTFrbHpyY2tidThlaA=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-pink-500"
            >
              <FaInstagram size={32} />
            </a>
            <a
              href="https://youtube.com/@saurabhgautam3121?si=oh61w4Wc3-HEyQ72"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-red-600"
            >
              <FaYoutube size={32} />
            </a>
            <a
              href="https://www.linkedin.com/in/saurabh-gautam-b04675251?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-500"
            >
              <FaLinkedin size={32} />
            </a>
            <a
              href="https://www.github.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-500"
            >
              <FaGithub size={32} />
            </a>
          </div>
          <div className="mt-4 text-sm">Like and Subscribe</div>
        </div>
        <div className="text-sm mt-4">
          &copy; 2023 codersaurabh. All rights reserved.
        </div>
      </div>
    </div>
  );
};
export default Footer;
