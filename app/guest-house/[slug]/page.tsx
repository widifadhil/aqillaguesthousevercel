import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, BedDouble, Car, DoorOpen, ShieldCheck } from "lucide-react";
import GuestHouseBookingPanel from "@/components/guest-house-booking-panel";
import GuestHouseGallery from "@/components/guest-house-gallery";
import { getGuestHouseUnit, guestHouseUnits } from "@/lib/site-data";

type GuestHousePageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return guestHouseUnits.map((unit) => ({
    slug: unit.slug
  }));
}

export function generateMetadata({ params }: GuestHousePageProps): Metadata {
  const unit = getGuestHouseUnit(params.slug);

  if (!unit) {
    return {
      title: "Guest house tidak ditemukan"
    };
  }

  return {
    title: `${unit.name} | Aqilla Guest House`,
    description: unit.summary
  };
}

export default function GuestHouseDetailPage({ params }: GuestHousePageProps) {
  const unit = getGuestHouseUnit(params.slug);

  if (!unit) {
    return (
      <main className="section-shell py-24">
        <div className="glass-panel rounded-[2rem] p-10 shadow-soft">
          <h1 className="section-title">Unit guest house tidak ditemukan.</h1>
          <p className="section-copy mt-4">Link yang kamu buka mungkin sudah berubah.</p>
          <Link
            href="/#guest-house"
            className="mt-8 inline-flex rounded-full bg-[#E67E22] px-5 py-3 text-sm font-medium text-[#FEF9E7] transition hover:bg-[#D35400]"
          >
            Kembali ke guest house
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="pb-20 pt-6 sm:pt-8">
      <div className="section-shell">
        <Link
          href="/#guest-house"
          className="inline-flex items-center gap-2 text-sm font-medium text-tangerine-700 transition hover:text-tangerine-800"
        >
          <ArrowLeft className="h-4 w-4" />
          Kembali ke section guest house
        </Link>

        <section className="mt-5 overflow-hidden rounded-[1.6rem] border border-tangerine-100 bg-white shadow-soft sm:mt-6 sm:rounded-[2rem]">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
            <div className="relative min-h-[280px] overflow-hidden sm:min-h-[380px]">
              <Image
                src={unit.coverImage}
                alt={unit.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 55vw"
                priority
              />
              <div className="absolute inset-0 bg-black/35" />
              <div className="relative flex min-h-[280px] items-end p-5 sm:min-h-[380px] sm:p-10">
                <div className="max-w-xl text-white">
                  <span className="inline-flex rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#641E16] sm:px-4 sm:py-2 sm:text-xs sm:tracking-[0.22em]">
                    Detail Rumah
                  </span>
                  <h1 className="mt-4 text-2xl font-semibold tracking-tight sm:mt-6 sm:text-5xl">{unit.name}</h1>
                  <p className="mt-3 text-sm leading-7 text-white/90 sm:mt-4 sm:text-base sm:leading-8">{unit.summary}</p>
                </div>
              </div>
            </div>

            <div className="p-5 sm:p-10">
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
                <div className="rounded-[1.2rem] bg-tangerine-50 p-4 sm:rounded-[1.5rem] sm:p-5">
                  <BedDouble className="h-5 w-5 text-tangerine-700" />
                  <p className="mt-3 text-sm font-semibold text-charcoal-900">{unit.roomCount}</p>
                </div>
                <div className="rounded-[1.2rem] bg-tangerine-50 p-4 sm:rounded-[1.5rem] sm:p-5">
                  <DoorOpen className="h-5 w-5 text-tangerine-700" />
                  <p className="mt-3 text-sm font-semibold text-charcoal-900">{unit.bathCount}</p>
                </div>
                <div className="col-span-2 rounded-[1.2rem] bg-tangerine-50 p-4 sm:col-span-1 sm:rounded-[1.5rem] sm:p-5">
                  <Car className="h-5 w-5 text-tangerine-700" />
                  <p className="mt-3 text-sm font-semibold text-charcoal-900">{unit.parking}</p>
                </div>
              </div>

              <div className="mt-6 rounded-[1.2rem] border border-tangerine-100 bg-[#FEF9E7] p-4 sm:mt-8 sm:rounded-[1.5rem] sm:p-5">
                <p className="text-sm font-semibold text-charcoal-900">Galeri foto tersedia</p>
                <p className="mt-2 text-sm leading-6 text-charcoal-600 sm:leading-7">
                  {unit.gallery.length} foto sudah tersedia untuk membantu melihat suasana {unit.name} dengan lebih jelas.
                </p>
              </div>

              <div className="mt-6 sm:mt-8">
                <GuestHouseBookingPanel
                  compact
                  title={`Booking ${unit.name}`}
                  description="Atur tanggal, jumlah tamu, dan tipe booking lalu kirim pertanyaan WhatsApp dengan format yang rapi."
                  bookingTypeOptions={[
                    { label: "Booking per kamar", value: `booking per kamar di ${unit.name}` },
                    { label: "Sewa 1 rumah", value: `sewa 1 rumah di ${unit.name}` }
                  ]}
                  actions={[
                    {
                      label: "Cek Ketersediaan",
                      template:
                        `Halo Admin Aqilla,\n\nSaya ingin tanya detail dan ketersediaan ${unit.name} dengan detail berikut:\n- Tipe booking: {mode}\n- Check-in: {checkIn}\n- Check-out: {checkOut}\n- Estimasi menginap: {nights} malam\n- Jumlah tamu: {guests} orang\n- Sarapan: {breakfast}\n- Catatan: {notes}\n\nMohon info ketersediaannya ya.`
                    },
                    {
                      label: "Tanya Sewa 1 Rumah",
                      template:
                        `Halo Admin Aqilla,\n\nSaya ingin tanya harga untuk ${unit.name} dengan detail berikut:\n- Tipe booking: {mode}\n- Check-in: {checkIn}\n- Check-out: {checkOut}\n- Estimasi menginap: {nights} malam\n- Jumlah tamu: {guests} orang\n- Sarapan: {breakfast}\n- Catatan: {notes}\n\nMohon informasinya ya.`,
                      variant: "secondary"
                    }
                  ]}
                />
                <Link
                  href="/#guest-house"
                  className="mt-4 inline-flex w-full items-center justify-center rounded-full border border-[#935116]/20 bg-[#FEF9E7] px-5 py-3 text-sm font-medium text-[#641E16] transition hover:bg-white sm:w-auto"
                >
                  Lihat unit lainnya
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-tangerine-700">Galeri Rumah</p>
              <h2 className="section-title mt-3 text-2xl sm:text-4xl">Foto rumah dan kamar {unit.name}.</h2>
            </div>
          </div>

          <GuestHouseGallery items={unit.gallery} />
        </section>

        <section className="mt-12">
          <div className="rounded-[1.6rem] border border-tangerine-100 bg-white p-5 shadow-soft sm:rounded-[2rem] sm:p-8">
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-5 w-5 text-tangerine-700" />
              <h2 className="text-xl font-semibold text-charcoal-900 sm:text-2xl">Fasilitas Lengkap</h2>
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {unit.amenities.map((amenity) => {
                const Icon = amenity.icon;
                return (
                  <div key={amenity.label} className="flex items-center gap-3 rounded-[1.25rem] bg-tangerine-50 px-4 py-3 text-sm text-charcoal-700">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-tangerine-700">
                      <Icon className="h-4 w-4" />
                    </span>
                    {amenity.label}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
