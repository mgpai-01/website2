"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { List, X, Phone } from "@phosphor-icons/react/dist/ssr";
import { site } from "@/lib/site";

const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Quote" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b hairline bg-stone-50/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <Link
          href="/"
          className="group flex items-center gap-2.5 transition-transform active:-translate-y-[1px]"
        >
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-zinc-950 text-stone-50 font-mono text-[13px] font-semibold tracking-tight">
            MGP
          </span>
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="text-[13px] font-medium tracking-tight text-zinc-950">
              Manufacturing Green Products
            </span>
            <span className="text-[11px] uppercase tracking-[0.14em] text-zinc-500">
              Fontana, California
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => {
            const active =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all active:-translate-y-[1px] ${
                  active
                    ? "bg-zinc-950 text-stone-50"
                    : "text-zinc-700 hover:bg-zinc-100"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <a
            href={`tel:${site.phone}`}
            className="ml-2 inline-flex items-center gap-2 rounded-full border hairline bg-white px-4 py-2 text-sm font-medium text-zinc-950 transition-all hover:border-moss-400 active:-translate-y-[1px]"
          >
            <Phone size={15} weight="bold" className="text-moss-600" />
            {site.phoneDisplay}
          </a>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-full border hairline bg-white md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={18} weight="bold" /> : <List size={18} weight="bold" />}
        </button>
      </div>

      {open && (
        <div className="border-t hairline bg-stone-50 md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-base font-medium text-zinc-800 hover:bg-zinc-100"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={`tel:${site.phone}`}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-zinc-950 px-4 py-3 text-base font-medium text-stone-50"
            >
              <Phone size={16} weight="bold" />
              Call {site.phoneDisplay}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
