"use client";

import { useState } from "react";
import { BiCopy } from "react-icons/bi";

type CopyButtonProps = {
  value: string;
};

export function CopyButton({ value }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  async function copyValue() {
    await navigator.clipboard.writeText(value);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  return (
    <button
      type="button"
      onClick={copyValue}
      className="ml-4 flex items-center gap-1 shrink-0 rounded border border-[#454946] px-2.5 py-1.5 font-mono text-[10px] text-[#aeb2ad] transition-colors hover:border-[#6c716d] hover:text-white"
    >
      {copied ? (
        <>
          <BiCopy size={16} /> Copied
        </>
      ) : (
        <>
          <BiCopy size={16} /> Copy
        </>
      )}
    </button>
  );
}
