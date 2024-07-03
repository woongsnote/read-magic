import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">ReadMagic</h1>
        <ThemeToggle />
      </div>
      <p className="mb-4 text-muted-foreground">
        Magically generate README files for your projects
      </p>
      <Link href="/build">
        <Button>Start Building README</Button>
      </Link>
    </div>
  );
}
