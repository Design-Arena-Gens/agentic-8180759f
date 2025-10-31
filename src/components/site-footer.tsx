import Link from "next/link";

const footerLinks = [
  { href: "/blog", label: "Archive" },
  { href: "#about", label: "About" },
  { href: "https://twitter.com", label: "Twitter" },
  { href: "https://www.linkedin.com", label: "LinkedIn" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-zinc-200 bg-white py-10 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-semibold tracking-tight">Orbit Notes</p>
          <p className="mt-2 max-w-sm text-sm text-zinc-600 dark:text-zinc-400">
            Dispatches on product strategy, design systems, and building
            intentional teams in public.
          </p>
        </div>
        <nav className="flex flex-wrap gap-4 text-sm text-zinc-600 dark:text-zinc-400">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-zinc-950 dark:hover:text-zinc-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <p className="text-xs text-zinc-500 dark:text-zinc-500">
          © {new Date().getFullYear()} Orbit Notes. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
