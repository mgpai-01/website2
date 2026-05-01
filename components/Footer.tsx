import Link from "next/link";
import { Phone, EnvelopeSimple, MapPin, Clock } from "@phosphor-icons/react/dist/ssr";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t hairline bg-zinc-950 text-stone-300">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-stone-50 text-zinc-950 font-mono text-[13px] font-semibold">
                MGP
              </span>
              <span className="text-sm font-medium tracking-tight text-stone-50">
                Manufacturing Green Products
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-stone-400">
              Fontana&apos;s pallet manufacturer of choice for warehouses,
              distribution centers, and exporters across the Inland Empire.
              Built sustainably, delivered the same day.
            </p>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-500">
              Visit
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex gap-3">
                <MapPin size={16} weight="bold" className="mt-0.5 shrink-0 text-moss-400" />
                <span>
                  {site.address.street}
                  <br />
                  {site.address.city}, {site.address.region} {site.address.postal}
                </span>
              </li>
              <li className="flex gap-3">
                <Clock size={16} weight="bold" className="mt-0.5 shrink-0 text-moss-400" />
                <span>
                  Mon–Fri 6a–6p
                  <br />
                  Sat 7a–2p
                </span>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-500">
              Contact
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={`tel:${site.phone}`}
                  className="group inline-flex items-center gap-3 transition-transform active:-translate-y-[1px]"
                >
                  <Phone size={16} weight="bold" className="text-moss-400" />
                  <span className="border-b border-transparent group-hover:border-stone-300">
                    {site.phoneDisplay}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="group inline-flex items-center gap-3 transition-transform active:-translate-y-[1px]"
                >
                  <EnvelopeSimple size={16} weight="bold" className="text-moss-400" />
                  <span className="border-b border-transparent group-hover:border-stone-300">
                    {site.email}
                  </span>
                </a>
              </li>
              <li className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-stone-50 px-5 py-2.5 text-sm font-medium text-zinc-950 transition-transform active:-translate-y-[1px]"
                >
                  Request a Quote
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-zinc-800 pt-6 text-xs text-stone-500 md:flex-row md:items-center">
          <p>
            © {new Date().getFullYear()} Manufacturing Green Products. All
            rights reserved.
          </p>
          <p className="font-mono uppercase tracking-[0.14em]">
            Pallets · Fontana · Inland Empire
          </p>
        </div>
      </div>
    </footer>
  );
}
