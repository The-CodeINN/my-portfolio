'use client'

import { useState } from "react";
import Refractor from "react-refractor";
import js from "refractor/lang/javascript";
import ts from "refractor/lang/typescript";
import tsx from "refractor/lang/tsx";
import jsx from "refractor/lang/jsx";
import sql from "refractor/lang/sql";
import bash from "refractor/lang/bash";
import markdown from "refractor/lang/markdown";
import css from "refractor/lang/css";
import scss from "refractor/lang/scss";
import python from "refractor/lang/python";
import html from "refractor/lang/markup";
import yaml from "refractor/lang/yaml";
import graphql from "refractor/lang/graphql";
import json from "refractor/lang/json";
import { Clipboard } from "lucide-react";
import { CopyToClipboard } from "react-copy-to-clipboard";

Refractor.registerLanguage(js);
Refractor.registerLanguage(ts);
Refractor.registerLanguage(jsx);
Refractor.registerLanguage(tsx);
Refractor.registerLanguage(sql);
Refractor.registerLanguage(bash);
Refractor.registerLanguage(markdown);
Refractor.registerLanguage(css);
Refractor.registerLanguage(scss);
Refractor.registerLanguage(python);
Refractor.registerLanguage(html);
Refractor.registerLanguage(yaml);
Refractor.registerLanguage(graphql);
Refractor.registerLanguage(json);

type codeTypes = {
  value: {
    code: string;
    language: string;
    filename?: string | null;
  };
};

const CodeBlock = ({ value }: codeTypes) => {
  const error = console.error;
  console.error = (...args: any) => {
    if (/defaultProps/.test(args[0])) return;
    error(...args);
  };

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className='my-6'>
      <div className='flex items-center justify-between bg-zinc-50 dark:bg-[#141414] border dark:border-zinc-800 border-zinc-200 rounded-t-lg px-4 py-3 translate-y-2'>
        <p className='text-sm'>{value.filename || ""}</p>
        <CopyToClipboard text={value.code} onCopy={handleCopy}>
          <button>
            {copied ? (
              <span className='text-green-400'>Copied!</span>
            ) : (
              <Clipboard />
            )}
          </button>
        </CopyToClipboard>
      </div>
      <Refractor
        language={value.language ? value.language : "jsx"}
        value={value.code}
        className='text-sm border-x border-b dark:border-zinc-800 border-zinc-200 rounded-b-lg tracking-normal'
      />
    </div>
  );
};

export default CodeBlock;
