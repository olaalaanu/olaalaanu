"use client";

import { useEffect } from "react";

export default function CopyableCode() {
  useEffect(() => {
    const codeBlocks = document.querySelectorAll("pre > code");

    codeBlocks.forEach((code) => {
      const pre = code.parentElement!;
      if (pre.querySelector(".copy-btn")) return;

      const button = document.createElement("button");
      button.textContent = "📋 Copy";
      button.className =
        "copy-btn absolute top-2 right-2 px-2 py-1 text-xs rounded bg-orange-700 text-white opacity-100";

      button.onclick = () => {
        navigator.clipboard.writeText(code.textContent || "");
        button.textContent = "✅ Copied!";
        setTimeout(() => (button.textContent = "📋 Copy"), 2000);
      };

      pre.style.position = "relative";
      pre.appendChild(button);
    });
  }, []);

  return null;
}
