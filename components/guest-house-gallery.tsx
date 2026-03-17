"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

type GalleryItem = {
  label: string;
  image: string;
};

type GuestHouseGalleryProps = {
  items: GalleryItem[];
};

export default function GuestHouseGallery({ items }: GuestHouseGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const thumbnailRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const openImage = (index: number) => setActiveIndex(index);
  const closeImage = () => setActiveIndex(null);

  const showPrev = () => {
    if (activeIndex === null) {
      return;
    }

    setActiveIndex((activeIndex - 1 + items.length) % items.length);
  };

  const showNext = () => {
    if (activeIndex === null) {
      return;
    }

    setActiveIndex((activeIndex + 1) % items.length);
  };

  useEffect(() => {
    if (activeIndex === null) {
      return;
    }

    thumbnailRefs.current[activeIndex]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center"
    });
  }, [activeIndex]);

  useEffect(() => {
    if (activeIndex === null) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeImage();
      }

      if (event.key === "ArrowLeft") {
        showPrev();
      }

      if (event.key === "ArrowRight") {
        showNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex]);

  return (
    <>
      <div className="mt-8 grid gap-4 sm:gap-6 md:grid-cols-2 xl:grid-cols-4">
        {items.map((item, index) => (
          <button
            key={item.image}
            type="button"
            onClick={() => openImage(index)}
            className="rounded-[1.35rem] border border-tangerine-100 bg-white p-4 text-left shadow-soft transition duration-300 hover:-translate-y-1 sm:rounded-[1.75rem] sm:p-5"
          >
            <div className="relative aspect-square overflow-hidden rounded-[1.25rem]">
              <Image
                src={item.image}
                alt={item.label}
                fill
                className="object-cover transition duration-500 hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
              />
            </div>
            <p className="mt-4 text-sm font-medium text-charcoal-900">{item.label}</p>
            <p className="mt-1 text-xs text-charcoal-500">Klik untuk lihat lebih besar</p>
          </button>
        ))}
      </div>

      {activeIndex !== null ? (
        <div
          className="animate-modal-fade-in fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={closeImage}
        >
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              closeImage();
            }}
            className="absolute right-3 top-3 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-charcoal-900 transition hover:bg-white sm:right-4 sm:top-4 sm:h-11 sm:w-11"
            aria-label="Tutup galeri"
          >
            <X className="h-5 w-5" />
          </button>

          {items.length > 1 ? (
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showPrev();
              }}
              className="absolute left-2 top-1/2 z-10 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-charcoal-900 transition hover:bg-white sm:left-4 sm:h-11 sm:w-11"
              aria-label="Foto sebelumnya"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
          ) : null}

          <div
            className="animate-modal-scale-in flex max-h-[90vh] w-full max-w-5xl flex-col"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative min-h-0 flex-1 overflow-hidden rounded-[2rem] bg-white/5">
              <div className="relative aspect-[4/3] h-full min-h-[260px] w-full">
              {items.map((item, index) => (
                <img
                  key={item.image}
                  src={item.image}
                  alt={item.label}
                  className={`absolute inset-0 h-full w-full object-contain transition-all duration-300 ease-out ${
                    activeIndex === index
                      ? "scale-100 opacity-100"
                      : "pointer-events-none scale-[1.02] opacity-0"
                  }`}
                />
              ))}
              </div>
            </div>
            <div className="mt-4 text-center text-white">
              <p className="text-base font-semibold">{items[activeIndex].label}</p>
              <p className="mt-1 text-sm text-white/75">
                {activeIndex + 1} / {items.length}
              </p>
            </div>
            <div className="styled-scrollbar mt-4 shrink-0 overflow-x-auto px-1 pb-3">
              <div className="flex min-w-max gap-3">
                {items.map((item, index) => (
                  <button
                    key={`${item.image}-thumb`}
                    type="button"
                    ref={(node) => {
                      thumbnailRefs.current[index] = node;
                    }}
                    onClick={(event) => {
                      event.stopPropagation();
                      setActiveIndex(index);
                    }}
                    className={`relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl border transition sm:h-24 sm:w-24 ${
                      activeIndex === index
                        ? "border-[#E67E22] ring-2 ring-[#E67E22]/35"
                        : "border-white/15 opacity-75 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={item.image}
                      alt={item.label}
                      fill
                      className="object-cover"
                      sizes="96px"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {items.length > 1 ? (
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showNext();
              }}
              className="absolute right-2 top-1/2 z-10 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-charcoal-900 transition hover:bg-white sm:right-4 sm:h-11 sm:w-11"
              aria-label="Foto berikutnya"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          ) : null}
        </div>
      ) : null}
    </>
  );
}
