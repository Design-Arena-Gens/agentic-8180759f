import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Articles" },
  { href: "#about", label: "About" },
  { href: "#newsletter", label: "Newsletter" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/90 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/90">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          Orbit Notes
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-zinc-600 md:flex dark:text-zinc-300">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-zinc-950 dark:hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="#newsletter"
          className="rounded-full bg-zinc-900 px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
        >
          Get updates
        </Link>
      </div>
    </header>
  );
}
