import React from "react";
import Title from "./Title";
import Link from "next/link";
import { FileText } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="flex flex-col gap-6">
      <Title title="Welcome to ReadMagic" />

      <p className="text-xl text-center text-muted-foreground">
        Magically generate README files for your projects
      </p>

      <div className="flex justify-center">
        <Link href="/build">
          <Button size="lg">
            <FileText className="mr-2 h-4 w-4" /> Start Building README
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
