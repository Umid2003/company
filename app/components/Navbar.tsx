"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { CiMenuFries } from "react-icons/ci";
import { TfiClose } from "react-icons/tfi";
import Logo from "@/public/imgs/sLogo.png";
import Image from "next/image";

const navLinks = [
  { name: "Biz haqimizda", path: "/#about", active: false },
  { name: "Xizmatlar", path: "/#services", active: false },
  { name: "Loyihalar", path: "/#projects", active: false },
  { name: "Bog'lanish", path: "/#contact", active: false },
];

export const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [links, setLinks] = useState(navLinks);

  const handleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const setActiveLink = (selectedPath: string) => {
    setLinks((prevLinks) =>
      prevLinks.map((link) =>
        link.path === selectedPath
          ? { ...link, active: true }
          : { ...link, active: false }
      )
    );
  };

  useEffect(() => {
    const handleHashChange = () => {
      setActiveLink(window.location.hash);
    };

    setActiveLink(window.location.hash);

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav
      className={`sticky top-0 pt-2 z-50 px-16 max-sm:px-8 ${
        menuOpen ? "bg-white" : "bg-[#0000009a] backdrop-blur-md"
      }`}
    >
      <div className="container w-[100%] p-5 flex items-center max-lg:justify-between">
        <div className="text-xl font-bold text-purple-900 mr-20">
          <Link href="/">
            <Image src={Logo} alt="Logo" width={40} height={30} />
          </Link>
        </div>

        <ul className="flex space-x-8 text-sm max-lg:hidden">
          {links.map((link) => (
            <li key={link.path} className="relative pt-2 group text-center">
              <Link
                href={link.path}
                onClick={() => {
                  setActiveLink(link.path)
                  if (window.innerWidth <= 768) {
                    setMenuOpen(false)
                  }
                }}
                className={`hover:text-purple-700 duration-300 ${
                  link.active ? "text-purple-600" : ""
                }`}
              >
                {link.name}
              </Link>
              {link.active && (
                <motion.div
                  layout
                  initial={{ width: 0 }}
                  animate={{ width: "calc(100% + 10px)" }}
                  transition={{ duration: 0.4 }}
                  className="absolute top-0 left-[-5px] bg-purple-900"
                  style={{ height: "1px" }}
                />
              )}
            </li>
          ))}
        </ul>

        <div className="Iconandbutton flex items-center">
          <button
            onClick={handleMenu}
            className={`hidden max-lg:flex text-xl ${
              menuOpen ? "text-black" : "text-white"
            }`}
          >
            {menuOpen ? (
              <TfiClose className="text-purple-800" />
            ) : (
              <CiMenuFries />
            )}
          </button>
        </div>
      </div>
      {menuOpen && (
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.2 }}
          className="lg:hidden h-[100vh] absolute top-16 bg-white left-0 w-full p-6 flex flex-col items-end gap-4"
        >
          {links.map((link, index) => (
            <div
              key={index}
              className="w-[100%] flex flex-col items-end border-b-2 mx-5 duration-300 border-gray-300 hover:border-purple-700"
            >
              <Link
                key={link.path}
                href={link.path}
                onClick={() => {
                  setActiveLink(link.path);
                  if (window.innerWidth <= 768) {
                    setMenuOpen(false);
                  }
                }}
                className={`text-black text-lg hover:scale-110 duration-300 p-2 pr-5 ${
                  link.active ? "text-purple-700" : ""
                }`}
              >
                {link.name}
              </Link>
            </div>
          ))}
        </motion.div>
      )}
    </nav>
  );
};
