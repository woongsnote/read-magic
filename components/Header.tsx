import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

type HeaderProps = {
  title?: string;
};

const Header = ({ title = "ReadMagic" }: HeaderProps) => {
  return (
    <header className="flex justify-between items-center mb-4 p-4">
      <Link href="/" className="text-3xl font-bold">
        {title}
      </Link>
      <ThemeToggle />
    </header>
  );
};

export default Header;
