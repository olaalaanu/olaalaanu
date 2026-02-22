"use client";

import { useEffect } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { Copy, Check } from "lucide-react";

export default function CopyableCode() {
  useEffect(() => {
    // Select all code blocks rendered by your markdown parser
    const codeBlocks = document.querySelectorAll("pre");

    codeBlocks.forEach((pre) => {
      // Prevent duplicate buttons if the component re-renders
      if (pre.querySelector(".copy-btn")) return;

      // Create the button container
      const button = document.createElement("button");
      button.className =
        "copy-btn absolute top-3 right-3 p-2 rounded-lg border border-color-quinary bg-white/80 backdrop-blur-sm text-slate-500 hover:text-color-primary hover:border-color-primary transition-all duration-200 opacity-0 group-hover:opacity-100 focus:opacity-100";

      // Initial Icon (Copy)
      const copyIcon = renderToStaticMarkup(<Copy size={14} />);
      const checkIcon = renderToStaticMarkup(<Check size={14} />);

      button.innerHTML = copyIcon;

      button.onclick = () => {
        const codeElement = pre.querySelector("code");
        if (codeElement) {
          navigator.clipboard.writeText(codeElement.textContent || "");
          button.innerHTML = checkIcon;
          button.classList.add("text-green-500", "border-green-500");

          setTimeout(() => {
            button.innerHTML = copyIcon;
            button.classList.remove("text-green-500", "border-green-500");
          }, 2000);
        }
      };

      // Ensure the pre block can hold the absolute button and the hover group
      pre.style.position = "relative";
      pre.classList.add("group");
      pre.appendChild(button);
    });
  }, []);

  return null;
}
