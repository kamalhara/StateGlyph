"use client";

import { useState } from "react";
import { BiCopy } from "react-icons/bi";

import { HighlightedCode, type HighlightedCodeProps } from "./highlighted-code";

type CodeBlockProps = {
  filename?: string;
  code: string;
  language?: HighlightedCodeProps["language"];
};

export function CodeBlock({ filename, code, language }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  async function copyCode() {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  return (
    <div className="overflow-hidden rounded-md border border-[#343735] bg-[#101211]">
      {filename && (
        <div className="flex items-center justify-between border-b border-[#2b2e2c] px-5 py-3">
          <span className="font-mono text-[10px] text-[#7e837e]">
            {filename}
          </span>
          <button
            type="button"
            onClick={copyCode}
            className="flex items-center gap-1 shrink-0 rounded border border-[#454946] px-2.5 py-1.5 font-mono text-[10px] text-[#aeb2ad] transition-colors hover:border-[#6c716d] hover:text-white"
          >
            <BiCopy size={14} />
            {copied ? "Copied" : "Copy"}
          </button>
        </div>
      )}
      <pre className="overflow-x-auto p-6 font-mono text-xs leading-7 text-[#d9dbd7] sm:text-sm">
        <HighlightedCode code={code} language={language} />
      </pre>
    </div>
  );
}
