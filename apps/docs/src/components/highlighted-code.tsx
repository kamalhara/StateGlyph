"use client";

import {
  Highlight,
  themes,
  type Language,
  type PrismTheme,
} from "prism-react-renderer";

export type HighlightedCodeProps = {
  code: string;
  language?: Language | "shell";
};

const theme: PrismTheme = {
  ...themes.vsDark,
  plain: {
    ...themes.vsDark.plain,
    backgroundColor: "transparent",
  },
};

export function HighlightedCode({
  code,
  language = "tsx",
}: HighlightedCodeProps) {
  return (
    <Highlight
      theme={theme}
      code={code.trimEnd()}
      language={language === "shell" ? "bash" : language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <code
          className={`${className} block min-w-max`}
          style={{ color: style.color }}
        >
          {tokens.map((line, lineIndex) => (
            <span {...getLineProps({ line })} className="block" key={lineIndex}>
              {line.map((token, tokenIndex) => (
                <span
                  {...getTokenProps({ token })}
                  key={`${lineIndex}-${tokenIndex}`}
                />
              ))}
            </span>
          ))}
        </code>
      )}
    </Highlight>
  );
}
