import Link from "next/link";

const links = [
  { href: "#listen", label: "Listen" },
  { href: "#story", label: "Story" },
  { href: "#book", label: "Book" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-ink/10 bg-paper/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link href="#top" className="display text-lg tracking-tight">
          Tra&apos; Kyng
        </Link>
        <nav className="flex items-center gap-5 text-[0.72rem] font-semibold tracking-[0.18em] uppercase">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-brick">
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
