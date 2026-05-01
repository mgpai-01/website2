import type { Metadata } from "next";
import {
  Phone,
  EnvelopeSimple,
  MapPin,
  Clock,
  Truck,
} from "@phosphor-icons/react/dist/ssr";
import { QuoteForm } from "@/components/QuoteForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact & Pallet Quote — Fontana, CA",
  description:
    "Request a pallet quote from Manufacturing Green Products in Fontana, CA. Same-day Inland Empire delivery, custom builds, and ISPM-15 export pallets. We respond within one business day.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b hairline bg-stone-50">
        <div className="grain pointer-events-none absolute inset-0 opacity-50" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 pb-16 pt-16 md:grid-cols-12 md:px-8 md:pb-20 md:pt-24">
          <div className="md:col-span-7">
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-moss-700">
              Quote request
            </span>
            <h1 className="mt-4 text-[2.4rem] font-medium leading-[1] tracking-tighter text-zinc-950 md:text-[5rem]">
              Tell us what you ship.
              <br />
              <span className="text-zinc-500">We&apos;ll spec the pallet.</span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-zinc-700 md:text-lg">
              Drop volume, dimensions, and destination in the form. Our team
              comes back within one business day with pricing, lead time, and
              a delivery slot from the Fontana yard.
            </p>
          </div>

          <aside className="md:col-span-5">
            <div className="grid gap-3">
              <ContactRow
                icon={<Phone size={18} weight="bold" />}
                label="Call dispatch"
                value={site.phoneDisplay}
                href={`tel:${site.phone}`}
                hint="Mon–Fri 6a–6p · Sat 7a–2p"
              />
              <ContactRow
                icon={<EnvelopeSimple size={18} weight="bold" />}
                label="Email quotes"
                value={site.email}
                href={`mailto:${site.email}`}
                hint="One business day response"
              />
              <ContactRow
                icon={<MapPin size={18} weight="bold" />}
                label="Visit the yard"
                value={`${site.address.street}, ${site.address.city}, ${site.address.region} ${site.address.postal}`}
                href={`https://www.google.com/maps?q=${encodeURIComponent(
                  `${site.address.street}, ${site.address.city}, ${site.address.region}`
                )}`}
                hint="Will-call 6a–6p weekdays"
              />
            </div>
          </aside>
        </div>
      </section>

      {/* FORM */}
      <section className="border-b hairline bg-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-12 md:px-8 md:py-28">
          <div className="md:col-span-5">
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-moss-700">
              Form
            </span>
            <h2 className="mt-3 text-4xl font-medium tracking-tighter text-zinc-950 md:text-5xl">
              Quote request
            </h2>
            <p className="mt-5 text-base leading-relaxed text-zinc-700">
              The more detail you give us up front, the faster the number
              lands. If you&apos;re not sure on specs, leave it blank — we&apos;ll
              call you with the right questions.
            </p>

            <ul className="mt-8 grid gap-4 text-sm text-zinc-700">
              {[
                {
                  icon: <Clock size={16} weight="bold" />,
                  text: "Replies within 1 business day — usually under 4 hours.",
                },
                {
                  icon: <Truck size={16} weight="bold" />,
                  text: "Same-day delivery if confirmed before 11 AM PST.",
                },
                {
                  icon: <MapPin size={16} weight="bold" />,
                  text: "Free site survey for 5,000+ unit standing orders.",
                },
              ].map((b, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-xl bg-stone-100 text-moss-700">
                    {b.icon}
                  </span>
                  {b.text}
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-7">
            <QuoteForm />
          </div>
        </div>
      </section>

      {/* MAP / VISIT */}
      <section className="bg-zinc-950 text-stone-100">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 md:grid-cols-12 md:px-8 md:py-28">
          <div className="md:col-span-5">
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-moss-400">
              Visit
            </span>
            <h2 className="mt-3 text-4xl font-medium tracking-tighter text-stone-50 md:text-5xl">
              The yard, in Fontana.
            </h2>
            <p className="mt-5 text-stone-400">
              Two minutes off the I-10 at Cherry Ave. Pull up to the office
              gate, and we&apos;ll get you loaded.
            </p>

            <dl className="mt-9 grid grid-cols-2 gap-6 border-t border-zinc-800 pt-6 text-sm">
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-stone-500">
                  Address
                </dt>
                <dd className="mt-2 leading-relaxed text-stone-200">
                  {site.address.street}
                  <br />
                  {site.address.city}, {site.address.region}{" "}
                  {site.address.postal}
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-stone-500">
                  Hours
                </dt>
                <dd className="mt-2 leading-relaxed text-stone-200">
                  Mon–Fri 6a–6p
                  <br />
                  Sat 7a–2p
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-stone-500">
                  Phone
                </dt>
                <dd className="mt-2 text-stone-200">{site.phoneDisplay}</dd>
              </div>
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-stone-500">
                  Service area
                </dt>
                <dd className="mt-2 text-stone-200">
                  Fontana · Inland Empire · LA County
                </dd>
              </div>
            </dl>
          </div>

          <div className="md:col-span-7">
            <a
              href={`https://www.google.com/maps?q=${encodeURIComponent(
                `${site.address.street}, ${site.address.city}, ${site.address.region}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block overflow-hidden rounded-5xl border border-zinc-800 bg-zinc-900 transition-transform hover:-translate-y-[1px]"
            >
              <div className="grain absolute inset-0 opacity-30" />
              <div className="relative grid aspect-[4/3] place-items-center">
                <div className="text-center">
                  <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-moss-500/15 text-moss-300">
                    <MapPin size={26} weight="duotone" />
                  </div>
                  <div className="mt-5 font-mono text-[11px] uppercase tracking-[0.18em] text-stone-400">
                    34.0922° N · 117.435° W
                  </div>
                  <div className="mt-2 text-xl font-medium tracking-tight text-stone-50">
                    Fontana yard
                  </div>
                  <div className="mt-1 text-sm text-stone-400">
                    Open in Google Maps →
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
  hint,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
  hint: string;
}) {
  return (
    <a
      href={href}
      className="group flex items-start justify-between gap-4 rounded-3xl border hairline bg-white px-5 py-4 shadow-diffusion transition-all hover:-translate-y-[1px] hover:border-moss-300"
    >
      <div className="flex items-start gap-4">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-stone-50 text-moss-700">
          {icon}
        </span>
        <div>
          <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-zinc-500">
            {label}
          </div>
          <div className="mt-0.5 text-sm font-medium text-zinc-950">
            {value}
          </div>
          <div className="mt-0.5 text-xs text-zinc-500">{hint}</div>
        </div>
      </div>
    </a>
  );
}
