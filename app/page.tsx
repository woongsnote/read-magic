import Title from "@/components/Title";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <section className="mt-20 flex flex-col gap-4">
      <Title title="This is ReadMagic" />
      <p className="mb-4 text-muted-foreground text-center">
        Magically generate README files for your projects
      </p>
      <Link href="/build" className="mx-auto w-fit">
        <Button>Start Building README</Button>
      </Link>
    </section>
  );
}
