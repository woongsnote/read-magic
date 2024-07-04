import { useState } from "react";
import { Button } from "./ui/button";

interface ReadmeDisplayProps {
  content: string;
}

const ReadmeDisplay = ({ content }: ReadmeDisplayProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mt-4 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-2xl font-bold">Generated README:</h2>
        <Button onClick={handleCopy}>
          {copied ? "Copied!" : "Copy to Clipboard"}
        </Button>
      </div>
      <pre className="bg-secondary p-4 rounded whitespace-pre-wrap">
        {content}
      </pre>
    </div>
  );
};

export default ReadmeDisplay;
