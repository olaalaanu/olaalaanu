import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-quinary py-6 text-center text-sm text-gray-500">
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

// import React from "react";
// import Link from "next/link";
// import {
//   FaGithub,
//   FaLinkedinIn,
//   FaTwitter,
//   FaWhatsapp,
//   FaEnvelope,
// } from "react-icons/fa";

// export default function Footer() {
//   const currentYear = new Date().getFullYear();

//   const socialLinks = [
//     {
//       icon: <FaGithub />,
//       href: "https://github.com/olaalaanu",
//       label: "GitHub",
//     },
//     {
//       icon: <FaLinkedinIn />,
//       href: "https://linkedin.com/in/yourprofile",
//       label: "LinkedIn",
//     },
//     {
//       icon: <FaTwitter />,
//       href: "https://twitter.com/yourhandle",
//       label: "Twitter",
//     },
//     {
//       icon: <FaWhatsapp />,
//       href: "https://wa.me/yournumber",
//       label: "WhatsApp",
//     },
//   ];

//   const navLinks = [
//     { name: "About", href: "/about" },
//     { name: "Projects", href: "/projects" },
//     { name: "Blog", href: "/blog" },
//     { name: "Contact", href: "/contact" },
//   ];

//   return (
//     <footer className="bg-white border-t border-[var(--color-quinary)] pt-16 pb-8 px-6">
//       <div className="max-w-7xl mx-auto">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
//           {/* Column 1: Brand/Tagline */}
//           <div className="space-y-4">
//             <Link
//               href="/"
//               className="text-xl font-extrabold text-slate-900 tracking-tighter"
//             >
//               LATEEF<span style={{ color: "var(--color-primary)" }}>.</span>
//             </Link>
//             <p className="text-slate-500 text-sm max-w-xs leading-relaxed">
//               Building scalable web systems and data-driven solutions for modern
//               businesses. Based in Lagos, working worldwide.
//             </p>
//           </div>

//           {/* Column 2: Quick Navigation */}
//           <div className="flex flex-col space-y-3">
//             <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">
//               Navigation
//             </h4>
//             {navLinks.map((link) => (
//               <Link
//                 key={link.name}
//                 href={link.href}
//                 className="text-sm font-medium text-slate-600 hover:text-[var(--color-primary)] transition-colors w-fit"
//               >
//                 {link.name}
//               </Link>
//             ))}
//           </div>

//           {/* Column 3: Connect */}
//           <div className="space-y-6">
//             <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">
//               Connect
//             </h4>
//             <div className="flex gap-4">
//               {socialLinks.map((social, idx) => (
//                 <a
//                   key={idx}
//                   href={social.href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   aria-label={social.label}
//                   className="w-10 h-10 rounded-full border border-[var(--color-quinary)] flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-900 hover:border-slate-900 transition-all"
//                 >
//                   {social.icon}
//                 </a>
//               ))}
//             </div>
//             <a
//               href="mailto:hello@lateefismaila.com"
//               className="inline-flex items-center gap-2 text-sm font-bold group"
//               style={{ color: "var(--color-primary)" }}
//             >
//               <FaEnvelope />
//               hello@lateefismaila.com
//             </a>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="pt-8 border-t border-[var(--color-quinary)] flex flex-col md:flex-row justify-between items-center gap-4">
//           <p className="text-xs text-slate-400">
//             © {currentYear} Lateef Ismaila. All rights reserved.
//           </p>
//           <div className="flex gap-6 text-[10px] font-bold uppercase tracking-widest text-slate-400">
//             <span className="flex items-center gap-1">
//               <span className="w-2 h-2 rounded-full bg-green-500"></span>
//               System Status: Online
//             </span>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }
