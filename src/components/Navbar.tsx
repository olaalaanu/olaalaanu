"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const linkStyle = (href: string) =>
    pathname === href
      ? "text-[#265ec0] font-semibold"
      : "text-gray-700 hover:text-blue-600 hover:underline hover:underline-offset-8 decoration-wavy";

  return (
    <header className="border-b-1 text-gray-500">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center un">
        <Link href="/" className="text-2xl font-bold text-[#265ec0]">
          Olaalaanu
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className={linkStyle("/")}>
            Home
          </Link>
          <Link href="/about" className={linkStyle("/about")}>
            About
          </Link>
          <Link href="/projects" className={linkStyle("/projects")}>
            Projects
          </Link>
          <Link href="/blog" className={linkStyle("/blog")}>
            Blog
          </Link>
          <Link href="/contact" className={linkStyle("/contact")}>
            Contact
          </Link>
        </div>

        {/* Social Icons */}
        <div className="hidden md:flex space-x-4 items-center">
          <a
            href="https://github.com/olaalaanu"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub className="w-5 h-5 text-gray-600 hover:text-black" />
          </a>
          <a
            href="https://linkedin.com/in/olaalaanu"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="w-5 h-5 text-gray-600 hover:text-blue-700" />
          </a>
          <a
            href="https://twitter.com/olaalaanu"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <FaTwitter className="w-5 h-5 text-gray-600 hover:text-blue-500" />
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gray-700 dark:text-gray-200"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? "✖️" : "☰"}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-4 pb-4 space-y-2">
          <Link href="/" className="block" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link
            href="/about"
            className="block"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href="/projects"
            className="block"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </Link>
          <Link href="/blog" className="block" onClick={() => setIsOpen(false)}>
            Blog
          </Link>
          <div className="flex space-x-4 mt-4 justify-center">
            <a
              href="https://github.com/olaalaanu"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub className="w-5 h-5 text-gray-600 hover:text-black" />
            </a>
            <a
              href="https://linkedin.com/in/olaalaanu"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-5 h-5 text-gray-600 hover:text-blue-700" />
            </a>
            <a
              href="https://twitter.com/olaalaanu"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaTwitter className="w-5 h-5 text-gray-600 hover:text-blue-500" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
