"use client"; // Required for useState and usePathname
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi"; // Icons for menu & dark mode

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // On initial load, check the theme in localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <div className={`${isOpen ? "bg-black/50 fixed inset-0 backdrop-blur-sm" : ""}`}>
      <nav className="bg-blue-600 dark:bg-gray-900 text-white p-4 flex justify-between items-center fixed top-0 left-0 w-full shadow-md z-50">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/mw.png"
            alt="Portfolio Logo"
            width={50}
            height={50}
            className="cursor-pointer md:w-12 md:h-12 w-8 h-8"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          {["", "About", "Projects",  "Contact"].map((item) => (
            <Link
              key={item}
              href={item === "" ? "/" : `/${item}`}
              className={`${
                pathname === `/${item}` ? "font-bold text-yellow-300" : ""
              } hover:text-yellow-300 transition`}
            >
              {item === "" ? "Home" : item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white text-2xl">
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Dark Mode Toggle */}
        <button onClick={toggleDarkMode} className="ml-4 text-lg">
          {darkMode ? <FiSun /> : <FiMoon />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-16 right-4 bg-blue-700 dark:bg-gray-800 p-4 rounded-md shadow-md md:hidden transition-all duration-300 opacity-100 scale-100">
            {["", "About", "Projects",  "Contact"].map((item) => (
              <Link
                key={item}
                href={item === "" ? "/" : `/${item}`}
                className={`block py-2 ${
                  pathname === `/${item}` ? "font-bold text-yellow-300" : ""
                } hover:text-yellow-300 transition`}
                onClick={() => setIsOpen(false)}
              >
                {item === "" ? "Home" : item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </div>
  );
}
