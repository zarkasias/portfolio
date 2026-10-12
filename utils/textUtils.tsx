import React from 'react';

// Updated regex to handle trailing punctuation
const urlRegex = /(https?:\/\/[^\s)]+)([.,;:)])?/g;

interface ConvertUrlsParams {
  text: string;
  isLight?: boolean;
}

export function convertUrlsToLinks({ text, isLight = false }: ConvertUrlsParams): (string | React.JSX.Element)[] {
  const result: (string | React.JSX.Element)[] = [];
  let lastIndex = 0;
  let match;

  while ((match = urlRegex.exec(text)) !== null) {
    // Add text before the URL
    if (match.index > lastIndex) {
      result.push(text.slice(lastIndex, match.index));
    }

    // Add the URL as a link
    const [_, url, punctuation] = match;
    result.push(
      <a
        key={url}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={`break-words hover:underline ${isLight ? 'text-blue-200' : 'text-blue-600'}`}
      >
        {url}
      </a>
    );

    // Add any trailing punctuation
    if (punctuation) {
      result.push(punctuation);
    }

    lastIndex = match.index + match[0].length;
  }

  // Add any remaining text after the last URL
  if (lastIndex < text.length) {
    result.push(text.slice(lastIndex));
  }

  return result;
} 