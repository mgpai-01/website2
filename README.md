# Manufacturing Green Products — Website

Marketing site for **Manufacturing Green Products (MGP)**, a pallet
manufacturer in Fontana, CA serving the Inland Empire.

## Stack

- **Next.js 14** App Router (React Server Components)
- **Tailwind CSS v3**
- **Geist** typography
- **Phosphor Icons**
- **JSON-LD** `LocalBusiness` schema for local SEO

## Pages

- `/` — Homepage (hero, services bento, trust signals, testimonial)
- `/services` — Full pallet program detail (new, recycled, custom, ISPM-15, delivery, recycling)
- `/about` — Company story & principles
- `/contact` — Quote request form, contact details, yard location

## SEO

- LocalBusiness schema in `components/JsonLd.tsx`
- Per-page metadata + canonical URLs
- `sitemap.xml` and `robots.txt` generated from `app/sitemap.ts` and `app/robots.ts`
- Local keyword targeting: *pallets Fontana CA*, *pallet manufacturer Fontana*, *Inland Empire pallets*

## Local Development

```bash
npm install
npm run dev
```

Edit business details (phone, address, hours, service area) in
`lib/site.ts`. The schema and footer pull from there.
