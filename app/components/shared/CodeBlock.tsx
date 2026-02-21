'use client'

import { useState } from "react";
import { refractor } from "refractor/all";
import { toJsxRuntime } from "hast-util-to-jsx-runtime";
import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { Clipboard, Check } from "lucide-react";

type codeTypes = {
  value: {
    code: string;
    language: string;
    filename?: string | null;
  };
};

function RefractorHighlight({ language, value, className }: { language: string; value: string; className?: string }) {
  const lang = refractor.registered(language) ? language : "jsx";
  const tree = refractor.highlight(value, lang);
  const element = toJsxRuntime(tree, { jsx, jsxs, Fragment });

  return (
    <pre className={className}>
      <code>{element}</code>
    </pre>
  );
}

const CodeBlock = ({ value }: codeTypes) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  return (
    <div className='my-6 group'>
      <div className='flex items-center justify-between bg-zinc-50 dark:bg-[#141414] border dark:border-zinc-800 border-zinc-200 rounded-t-lg px-4 py-3'>
        <p className='text-sm font-mono text-zinc-500'>{value.filename || value.language || "code"}</p>
        <button
          onClick={handleCopy}
          className='flex items-center gap-x-1.5 text-sm transition-colors duration-200 hover:text-primary'
          aria-label='Copy code'
        >
          {copied ? (
            <>
              <Check className='w-4 h-4 text-primary' />
              <span className='text-primary text-xs'>Copied!</span>
            </>
          ) : (
            <Clipboard className='w-4 h-4' />
          )}
        </button>
      </div>
      <RefractorHighlight
        language={value.language ? value.language : "jsx"}
        value={value.code}
        className='text-sm border-x border-b dark:border-zinc-800 border-zinc-200 rounded-b-lg tracking-normal overflow-x-auto p-4 dark:bg-zinc-950 bg-zinc-50'
      />
    </div>
  );
};

export default CodeBlock;
