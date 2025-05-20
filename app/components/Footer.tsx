"use client";
import React, { useState } from "react";
import { FaChevronUp } from "react-icons/fa";
import {
  FaLinkedin,
  FaInstagram,
  FaTelegramPlane,
  FaFacebookF,
} from "react-icons/fa";

export const Footer: React.FC = () => {
  const [showTopButton, setShowTopButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowTopButton(true);
    } else {
      setShowTopButton(false);
    }
  }

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <footer className="h-[35vh] bg-black text-center flex flex-col items-center justify-center p-4 mt-auto relative">
      <div className="flex justify-center mb-4 bg-black">
        <a
          href="http://telegram.com"
          className="mx-2 p-3 text-white rounded-full border-[1px] hover:border-purple-900 transition duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTelegramPlane className="text-xl" />
        </a>
        <a
          href="http://facebook.com"
          className="mx-2 p-3 text-white rounded-full border-[1px] hover:border-purple-900 transition duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF className="text-xl" />
        </a>
        <a
          href="http://instagram.com"
          className="mx-2 p-3 text-white rounded-full border-[1px] hover:border-purple-900 transition duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="text-xl" />
        </a>
        <a
          href="http://linkedin.com"
          className="mx-2 p-3 text-white rounded-full border-[1px] hover:border-purple-900 transition duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-xl" />
        </a>
      </div>
      <p className="text-sm">
        &copy; {new Date().getFullYear()} IT Company All rights reserved
      </p>

      {showTopButton && (
        <div
          onClick={scrollToTop}
          className="absolute right-20 bottom-20 max-md:right-4 max-md:bottom-44 max-sm:right-2 max-sm:max-md:bottom-36 shadow-2xl shadow-white bg-zinc-900 text-white rounded-lg p-5 cursor-pointer hover:bg-zinc-950 transition duration-300"
        >
          <FaChevronUp />
        </div>
      )}
    </footer>
  );
};
