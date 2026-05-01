import Link from "next/link";
import {
  ArrowUpRight,
  Leaf,
  Truck,
  Recycle,
  Ruler,
  ShieldCheck,
  Stack,
  Wrench,
  Clock,
  MapPin,
  Quotes,
} from "@phosphor-icons/react/dist/ssr";
import { site } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      {/* HERO — asymmetric split */}
      <section className="relative overflow-hidden border-b hairline bg-stone-50">
        <div className="grain pointer-events-none absolute inset-0 opacity-60" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 pb-20 pt-16 md:grid-cols-12 md:gap-8 md:px-8 md:pb-28 md:pt-24">
          <div className="md:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border hairline bg-white/70 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.16em] text-zinc-700">
              <span className="h-1.5 w-1.5 rounded-full bg-moss-500" />
              Pallet Manufacturer · Fontana, CA
            </div>

            <h1 className="mt-6 text-[2.6rem] font-medium leading-[0.98] tracking-tighter text-zinc-950 md:text-[5.2rem]">
              Pallets built green.
              <br />
              <span className="text-zinc-500">Shipped same-day across the Inland Empire.</span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-relaxed text-zinc-700 md:text-lg">
              Manufacturing Green Products supplies new, recycled, and
              custom-built wood pallets to warehouses, 3PLs, and exporters
              across Fontana and Southern California — milled to spec, stacked
              tight, and on your dock when you need them.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-zinc-950 px-6 py-3.5 text-sm font-medium text-stone-50 transition-all active:-translate-y-[1px]"
              >
                Get a quote in 24 hours
                <ArrowUpRight
                  size={16}
                  weight="bold"
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-full border hairline bg-white px-6 py-3.5 text-sm font-medium text-zinc-950 transition-all hover:border-zinc-300 active:-translate-y-[1px]"
              >
                Explore services
              </Link>
            </div>

            <dl className="mt-12 grid max-w-xl grid-cols-3 gap-6 border-t hairline pt-8 text-zinc-700">
              <div>
                <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-zinc-500">
                  Founded
                </dt>
                <dd className="mt-1.5 font-mono text-2xl tracking-tight text-zinc-950">
                  2008
                </dd>
              </div>
              <div>
                <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-zinc-500">
                  Pallets / mo
                </dt>
                <dd className="mt-1.5 font-mono text-2xl tracking-tight text-zinc-950">
                  120k+
                </dd>
              </div>
              <div>
                <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-zinc-500">
                  Recycled
                </dt>
                <dd className="mt-1.5 font-mono text-2xl tracking-tight text-zinc-950">
                  92%
                </dd>
              </div>
            </dl>
          </div>

          <div className="md:col-span-5">
            <div className="relative">
              <div className="rounded-5xl border hairline bg-white p-7 shadow-diffusion">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-zinc-500">
                    Today on the floor
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-moss-700">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-moss-500" />
                    Live capacity
                  </span>
                </div>

                <div className="mt-6 space-y-4">
                  {[
                    { name: "48×40 GMA · New", stock: "In production · 4,200 units" },
                    { name: "48×40 GMA · Recycled #1", stock: "Ready to ship · 2,180 units" },
                    { name: "Custom export · ISPM-15", stock: "Lead time · 3 business days" },
                  ].map((row) => (
                    <div
                      key={row.name}
                      className="flex items-start justify-between gap-4 rounded-3xl bg-stone-50 px-5 py-4 transition-transform hover:-translate-y-[1px]"
                    >
                      <div>
                        <div className="text-sm font-medium text-zinc-950">
                          {row.name}
                        </div>
                        <div className="mt-1 text-xs text-zinc-500">
                          {row.stock}
                        </div>
                      </div>
                      <Stack size={20} weight="duotone" className="text-moss-600" />
                    </div>
                  ))}
                </div>

                <div className="mt-7 flex items-center justify-between rounded-3xl bg-zinc-950 px-5 py-4 text-stone-50">
                  <div className="flex items-center gap-3">
                    <Clock size={18} weight="bold" className="text-moss-300" />
                    <div className="leading-tight">
                      <div className="text-[11px] uppercase tracking-[0.14em] text-stone-400">
                        Same-day cutoff
                      </div>
                      <div className="text-sm font-medium">
                        Order by 11:00 AM PST
                      </div>
                    </div>
                  </div>
                  <span className="font-mono text-xs text-stone-400">PST</span>
                </div>
              </div>

              <div className="absolute -bottom-5 -left-5 hidden rounded-3xl border hairline bg-white px-4 py-3 shadow-diffusion md:block">
                <div className="flex items-center gap-2.5">
                  <MapPin size={15} weight="bold" className="text-moss-600" />
                  <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-zinc-700">
                    Fontana → IE · 38 mi radius
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES BENTO */}
      <section className="border-b hairline bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-moss-700">
                What we make
              </span>
              <h2 className="mt-3 text-4xl font-medium tracking-tighter text-zinc-950 md:text-6xl">
                A full pallet program,
                <br />
                <span className="text-zinc-500">under one Fontana roof.</span>
              </h2>
            </div>
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 text-sm font-medium text-zinc-950"
            >
              All services
              <ArrowUpRight
                size={14}
                weight="bold"
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-6">
            <ServiceCard
              span="md:col-span-4"
              icon={<Stack size={22} weight="duotone" />}
              eyebrow="01 / Manufacturing"
              title="New wood pallets, milled to your spec"
              body="48×40 GMA, block, stringer, two-way, four-way — heat-treated kiln-dried lumber, screwed or nailed, branded with your logo on request."
            />
            <ServiceCard
              span="md:col-span-2"
              icon={<Recycle size={22} weight="duotone" />}
              eyebrow="02 / Recycled"
              title="A-grade recycled pallets"
              body="Sorted, repaired, re-decked. Tested under load before they leave the floor."
            />
            <ServiceCard
              span="md:col-span-2"
              icon={<Ruler size={22} weight="duotone" />}
              eyebrow="03 / Custom"
              title="Custom sizes & specs"
              body="From medical to aerospace skids — built to drawing in 3 to 5 business days."
            />
            <ServiceCard
              span="md:col-span-2"
              icon={<ShieldCheck size={22} weight="duotone" />}
              eyebrow="04 / Export"
              title="ISPM-15 heat treatment"
              body="On-site kilns. Stamped, certified, and audit-ready for international freight."
            />
            <ServiceCard
              span="md:col-span-2"
              icon={<Truck size={22} weight="duotone" />}
              eyebrow="05 / Logistics"
              title="Same-day Inland Empire delivery"
              body="Fleet of flatbeds running Fontana, Ontario, Riverside, and LA county daily."
            />
          </div>
        </div>
      </section>

      {/* WHY MGP — alternating dark band */}
      <section className="bg-zinc-950 text-stone-100">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-12 md:px-8 md:py-28">
          <div className="md:col-span-5">
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-moss-400">
              Why MGP
            </span>
            <h2 className="mt-3 text-4xl font-medium tracking-tighter text-stone-50 md:text-6xl">
              The greenest yard
              <br />
              in the IE.
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-stone-300">
              We earn the &ldquo;Green&rdquo; in our name. Every pallet that
              leaves our Fontana yard reuses a board, a stringer, or a deckboard
              that would otherwise hit a landfill — without compromising load
              rating or longevity.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden rounded-5xl border border-zinc-800 bg-zinc-800 md:col-span-7 md:grid-cols-2">
            {[
              {
                icon: <Leaf size={20} weight="duotone" />,
                title: "92% recycled fiber",
                body: "Every recycled pallet is a tree we didn’t cut.",
              },
              {
                icon: <Wrench size={20} weight="duotone" />,
                title: "On-site kiln & repair",
                body: "Faster turns. No sub-contracted bottlenecks.",
              },
              {
                icon: <Truck size={20} weight="duotone" />,
                title: "Owned fleet",
                body: "Drivers who know your dock, not a 3PL.",
              },
              {
                icon: <ShieldCheck size={20} weight="duotone" />,
                title: "Audit-ready compliance",
                body: "ISPM-15, ANSI MH1, OSHA — documented.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-zinc-950 p-8 transition-transform hover:-translate-y-[1px]"
              >
                <div className="grid h-10 w-10 place-items-center rounded-2xl bg-moss-500/15 text-moss-300">
                  {card.icon}
                </div>
                <h3 className="mt-5 text-lg font-medium tracking-tight text-stone-50">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm text-stone-400">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL + CTA */}
      <section className="border-b hairline bg-stone-50">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 md:grid-cols-12 md:px-8 md:py-28">
          <figure className="md:col-span-7">
            <Quotes size={36} weight="fill" className="text-moss-600" />
            <blockquote className="mt-5 text-2xl font-medium leading-snug tracking-tight text-zinc-950 md:text-4xl">
              &ldquo;MGP became our pallet program the day they delivered 2,400
              48×40s before lunch. We&apos;ve never looked back — three years
              and zero stockouts.&rdquo;
            </blockquote>
            <figcaption className="mt-8 flex items-center gap-4 text-sm">
              <div className="grid h-11 w-11 place-items-center rounded-full bg-zinc-950 font-mono text-xs font-semibold text-stone-50">
                DR
              </div>
              <div>
                <div className="font-medium text-zinc-950">Diana Rivas</div>
                <div className="text-zinc-500">
                  Operations Manager · IE Distribution Co.
                </div>
              </div>
            </figcaption>
          </figure>

          <div className="md:col-span-5">
            <div className="rounded-5xl border hairline bg-zinc-950 p-8 text-stone-50 md:p-10">
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-moss-300">
                Get a quote
              </span>
              <h3 className="mt-3 text-3xl font-medium tracking-tight md:text-4xl">
                Tell us what you ship.
                <br />
                We&apos;ll spec the pallet.
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-stone-400">
                Volume, dimensions, load type, destination — drop it in the
                form and we&apos;ll come back within one business day with
                pricing and lead time.
              </p>
              <Link
                href="/contact"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-stone-50 px-6 py-3.5 text-sm font-medium text-zinc-950 transition-transform active:-translate-y-[1px]"
              >
                Request a quote
                <ArrowUpRight size={16} weight="bold" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ServiceCard({
  span,
  icon,
  eyebrow,
  title,
  body,
}: {
  span: string;
  icon: React.ReactNode;
  eyebrow: string;
  title: string;
  body: string;
}) {
  return (
    <article
      className={`${span} group flex flex-col justify-between rounded-5xl border hairline bg-stone-50 p-7 transition-all hover:-translate-y-[2px] hover:bg-white`}
    >
      <div>
        <div className="grid h-11 w-11 place-items-center rounded-2xl bg-white text-moss-700 ring-1 ring-zinc-200/70">
          {icon}
        </div>
        <div className="mt-6 font-mono text-[11px] uppercase tracking-[0.16em] text-zinc-500">
          {eyebrow}
        </div>
        <h3 className="mt-3 text-xl font-medium tracking-tight text-zinc-950 md:text-2xl">
          {title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-zinc-600">{body}</p>
      </div>
    </article>
  );
}
