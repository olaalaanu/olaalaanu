// src/components/Footer.tsx
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-border py-6 text-center text-sm text-gray-500">
      <div className="flex justify-center space-x-6 mb-2">
        <a
          href="https://github.com/olaalaanu"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub className="w-6 h-6 hover:text-black transition" />
        </a>
        <a
          href="https://linkedin.com/in/olaalaanu"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="w-6 h-6 hover:text-blue-700 transition" />
        </a>
        <a
          href="https://twitter.com/olaalaanu"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <FaTwitter className="w-6 h-6 hover:text-blue-500 transition" />
        </a>
      </div>
      <p>&copy; {new Date().getFullYear()} Olaalaanu. All rights reserved.</p>
    </footer>
  );
}
