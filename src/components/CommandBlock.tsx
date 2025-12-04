"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

interface CommandBlockProps {
  command: string;
  language?: string;
}

export function CommandBlock({ command, language = "bash" }: CommandBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group my-4">
      <div className="bg-muted rounded-lg border p-4 font-mono text-sm">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-muted-foreground">{language}</span>
          <Button
            variant="ghost"
            size="sm"
            onClick={copyToClipboard}
            className="h-6 px-2 text-xs opacity-0 group-hover:opacity-100 transition-opacity"
          >
            {copied ? "Copied!" : "Copy"}
          </Button>
        </div>
        <pre className="overflow-x-auto">
          <code>{command}</code>
        </pre>
      </div>
    </div>
  );
}
