import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowLeft, BadgeInfo, Flame, PackageOpen, ShoppingBag, Sparkles } from "lucide-react";
import { getSanjaiProduct, sanjaiProducts } from "@/lib/site-data";

const whatsappNumber = "628979143927";

type ProductPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return sanjaiProducts.map((product) => ({
    slug: product.slug
  }));
}

export function generateMetadata({ params }: ProductPageProps): Metadata {
  const product = getSanjaiProduct(params.slug);

  if (!product) {
    return {
      title: "Produk tidak ditemukan"
    };
  }

  return {
    title: `${product.name} | Aqilla Sanjai`,
    description: product.description
  };
}

export default function ProductDetailPage({ params }: ProductPageProps) {
  const product = getSanjaiProduct(params.slug);

  if (!product) {
    return (
      <main className="section-shell py-24">
        <div className="glass-panel rounded-[2rem] p-10 shadow-soft">
          <h1 className="section-title">Produk tidak ditemukan.</h1>
          <p className="section-copy mt-4">
            Produk yang kamu cari belum tersedia atau link-nya sudah berubah.
          </p>
          <Link
            href="/#sanjai"
            className="mt-8 inline-flex rounded-full bg-[#E67E22] px-5 py-3 text-sm font-medium text-[#FEF9E7] transition hover:bg-[#D35400]"
          >
            Kembali ke daftar produk
          </Link>
        </div>
      </main>
    );
  }

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    `Halo, saya ingin pesan ${product.name}.`
  )}`;
  const relatedProducts = sanjaiProducts.filter((item) => item.slug !== product.slug).slice(0, 3);

  return (
    <main className="pb-20 pt-6 sm:pt-8">
      <div className="section-shell">
          <Link
            href="/#sanjai"
            className="inline-flex items-center gap-2 text-sm font-medium text-tangerine-700 transition hover:text-tangerine-800"
          >
          <ArrowLeft className="h-4 w-4" />
          Kembali ke Sanjai Gallery
        </Link>

        <section className="mt-5 overflow-hidden rounded-[1.6rem] border border-tangerine-100 bg-white shadow-soft sm:mt-6 sm:rounded-[2rem]">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
            <div className="group relative min-h-[280px] overflow-hidden sm:min-h-[340px]">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-45`} />
              <div className="relative flex min-h-[280px] items-end p-5 sm:min-h-[340px] sm:p-10">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.16em] text-charcoal-800 sm:px-4 sm:py-2 sm:text-xs sm:tracking-[0.22em]">
                  <Sparkles className="h-4 w-4" />
                  Aqilla Sanjai
                  </div>
                  <h1 className="mt-4 text-2xl font-semibold tracking-tight text-white sm:mt-6 sm:text-5xl">
                    {product.name}
                  </h1>
                  <p className="mt-3 text-base font-medium text-white/90 sm:text-lg">{product.tagline}</p>
                  <p className="mt-4 max-w-xl text-sm leading-7 text-white/90 sm:text-base sm:leading-8">
                    {product.longDescription}
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 sm:p-10">
              <div className="relative aspect-square overflow-hidden rounded-[1.4rem] border border-tangerine-100 sm:rounded-[1.75rem]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute left-5 top-5">
                  <span className="inline-flex w-fit rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-charcoal-900">
                    {product.accent}
                  </span>
                </div>
              </div>

              <p className="mt-6 text-sm uppercase tracking-[0.24em] text-tangerine-700 sm:mt-8">Detail Produk</p>
              <p className="mt-3 text-2xl font-semibold text-charcoal-900 sm:text-3xl">{product.price}</p>
              <p className="mt-4 text-sm leading-7 text-charcoal-600 sm:leading-8">{product.description}</p>

              <div className="mt-6 grid gap-3 sm:mt-8 sm:grid-cols-2 sm:gap-4">
                <div className="rounded-[1.25rem] bg-tangerine-50 p-4 sm:rounded-[1.5rem] sm:p-5">
                  <div className="flex items-center gap-3 text-charcoal-900">
                    <Flame className="h-4 w-4 text-tangerine-700" />
                    <p className="text-sm font-semibold">Level Rasa</p>
                  </div>
                  <p className="mt-2 text-sm text-charcoal-600">{product.spiceLevel}</p>
                </div>
                <div className="rounded-[1.25rem] bg-saffron-50 p-4 sm:rounded-[1.5rem] sm:p-5">
                  <div className="flex items-center gap-3 text-charcoal-900">
                    <PackageOpen className="h-4 w-4 text-tangerine-700" />
                    <p className="text-sm font-semibold">Pilihan Kemasan</p>
                  </div>
                  <p className="mt-2 text-sm text-charcoal-600">{product.weight}</p>
                </div>
                <div className="rounded-[1.25rem] bg-white p-4 shadow-sm sm:col-span-2 sm:rounded-[1.5rem] sm:p-5">
                  <div className="flex items-center gap-3 text-charcoal-900">
                    <BadgeInfo className="h-4 w-4 text-tangerine-700" />
                    <p className="text-sm font-semibold">Cocok Untuk</p>
                  </div>
                  <p className="mt-2 text-sm text-charcoal-600">{product.bestFor}</p>
                </div>
              </div>

              <div className="mt-6 sm:mt-8">
                <h2 className="text-lg font-semibold text-charcoal-900 sm:text-xl">Keunggulan</h2>
                <div className="mt-4 grid gap-3">
                  {product.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="rounded-[1.25rem] border border-charcoal-900/10 bg-white px-4 py-3 text-sm text-charcoal-700"
                    >
                      {highlight}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row">
                <a
                  href={whatsappUrl}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#E67E22] px-5 py-3 text-sm font-medium text-[#FEF9E7] transition hover:bg-[#D35400] sm:w-auto"
                >
                  <ShoppingBag className="h-4 w-4" />
                  Pesan via WhatsApp
                </a>
                <Link
                  href="/#sanjai"
                  className="inline-flex w-full items-center justify-center rounded-full border border-[#935116]/20 bg-[#FEF9E7] px-5 py-3 text-sm font-medium text-[#641E16] transition hover:bg-white sm:w-auto"
                >
                  Lihat produk lainnya
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-ember-700">Produk Lainnya</p>
              <h2 className="section-title mt-3">Varian sanjai lain yang bisa kamu lihat.</h2>
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:gap-6 md:grid-cols-3">
            {relatedProducts.map((item) => (
              <article
                key={item.slug}
                className="rounded-[1.35rem] border border-tangerine-100 bg-white p-4 shadow-soft transition duration-300 hover:-translate-y-1 sm:rounded-[1.75rem] sm:p-6"
              >
                <div className="group relative aspect-square overflow-hidden rounded-[1.25rem]">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-charcoal-900 sm:mt-5 sm:text-2xl">{item.name}</h3>
                <p className="mt-2 text-sm font-medium text-tangerine-700">{item.tagline}</p>
                <p className="mt-3 text-sm leading-6 text-charcoal-600 sm:leading-7">{item.description}</p>
                <Link
                  href={`/produk/${item.slug}`}
                  className="mt-5 inline-flex rounded-full bg-[#E67E22] px-4 py-2 text-sm font-medium text-[#FEF9E7] transition hover:bg-[#D35400] sm:mt-6"
                >
                  Lihat Detail
                </Link>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
