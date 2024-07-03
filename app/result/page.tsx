"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ReadmeDisplay from "@/components/ReadmeDisplay";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function ResultPage() {
  const [readme, setReadme] = useState("");

  useEffect(() => {
    const storedReadme = localStorage.getItem("generatedReadme");
    if (storedReadme) {
      setReadme(storedReadme);
    }
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">Your Generated README</h1>
        <ThemeToggle />
      </div>
      {readme ? (
        <ReadmeDisplay content={readme} />
      ) : (
        <p>No README generated yet.</p>
      )}
      <div className="mt-4">
        <Link href="/build">
          <Button variant="outline" className="mr-2">
            Build Another README
          </Button>
        </Link>
        <Link href="/">
          <Button variant="ghost">Back to Home</Button>
        </Link>
      </div>
    </div>
  );
}
