"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ReadmeDisplay from "@/components/ReadmeDisplay";
import Title from "@/components/Title";

export default function ResultPage() {
  const [readme, setReadme] = useState("");

  useEffect(() => {
    const storedReadme = localStorage.getItem("generatedReadme");
    if (storedReadme) {
      setReadme(storedReadme);
    }
  }, []);

  return (
    <>
      <Title title="Your Generated README" />
      {readme ? (
        <ReadmeDisplay content={readme} />
      ) : (
        <p>No README generated yet.</p>
      )}
      <div className="mt-4 mx-auto flex max-w-4xl items-center">
        <Link href="/build">
          <Button variant="outline" className="mr-2">
            Build Another README
          </Button>
        </Link>
        <Link href="/">
          <Button variant="ghost">Back to Home</Button>
        </Link>
      </div>
    </>
  );
}
