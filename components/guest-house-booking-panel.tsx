"use client";

import { useMemo, useRef, useState } from "react";
import { CalendarDays, ChevronDown, MoonStar, Users } from "lucide-react";

type Action = {
  label: string;
  template: string;
  variant?: "primary" | "secondary";
};

type BookingTypeOption = {
  label: string;
  value: string;
};

type UnitOption = {
  label: string;
  value: string;
};

type GuestHouseBookingPanelProps = {
  title?: string;
  description?: string;
  actions: Action[];
  compact?: boolean;
  bookingTypeOptions?: BookingTypeOption[];
  unitOptions?: UnitOption[];
};

const whatsappNumber = "628979143927";

function formatSelectedDate(value: string) {
  if (!value) {
    return "tanggal belum ditentukan";
  }

  const date = new Date(`${value}T00:00:00`);

  return new Intl.DateTimeFormat("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric"
  }).format(date);
}

export default function GuestHouseBookingPanel({
  title = "Pilih tanggal menginap",
  description = "Tanggal ini akan otomatis masuk ke pesan WhatsApp.",
  actions,
  compact = false,
  bookingTypeOptions = [
    { label: "Booking per kamar", value: "booking per kamar" },
    { label: "Sewa 1 rumah", value: "sewa 1 rumah" }
  ],
  unitOptions
}: GuestHouseBookingPanelProps) {
  const [selectedCheckIn, setSelectedCheckIn] = useState("");
  const [selectedCheckOut, setSelectedCheckOut] = useState("");
  const [guestCount, setGuestCount] = useState("2");
  const [bookingType, setBookingType] = useState(bookingTypeOptions[0]?.value ?? "booking per kamar");
  const [selectedUnit, setSelectedUnit] = useState(unitOptions?.[0]?.value ?? "Guest House Aqilla");
  const [breakfastOption, setBreakfastOption] = useState("optional");
  const [notes, setNotes] = useState("");
  const checkInInputRef = useRef<HTMLInputElement>(null);
  const checkOutInputRef = useRef<HTMLInputElement>(null);

  const today = useMemo(() => new Date().toISOString().split("T")[0], []);
  const formattedCheckIn = useMemo(() => formatSelectedDate(selectedCheckIn), [selectedCheckIn]);
  const formattedCheckOut = useMemo(() => formatSelectedDate(selectedCheckOut), [selectedCheckOut]);
  const stayNights = useMemo(() => {
    if (!selectedCheckIn || !selectedCheckOut) {
      return "";
    }

    const checkInDate = new Date(`${selectedCheckIn}T00:00:00`);
    const checkOutDate = new Date(`${selectedCheckOut}T00:00:00`);
    const diff = checkOutDate.getTime() - checkInDate.getTime();

    if (diff <= 0) {
      return "";
    }

    return String(Math.round(diff / (1000 * 60 * 60 * 24)));
  }, [selectedCheckIn, selectedCheckOut]);
  const dateError =
    selectedCheckIn && selectedCheckOut && selectedCheckOut <= selectedCheckIn
      ? "Check-out harus setelah check-in."
      : "";

  const openDatePicker = (input: HTMLInputElement | null) => {
    if (!input) {
      return;
    }

    input.focus();

    if ("showPicker" in input) {
      input.showPicker();
    }
  };

  const messageContext = useMemo(
    () => ({
      checkIn: formattedCheckIn,
      checkOut: formattedCheckOut,
      guests: guestCount || "belum ditentukan",
      mode: bookingType || "belum dipilih",
      unit: selectedUnit || "Guest House Aqilla",
      nights: stayNights || "belum ditentukan",
      breakfast: breakfastOption,
      notes: notes.trim() || "-"
    }),
    [bookingType, formattedCheckIn, formattedCheckOut, guestCount, selectedUnit, stayNights, breakfastOption, notes]
  );

  const replaceTemplate = (template: string) => {
    return template
      .replaceAll("{date}", formattedCheckIn)
      .replaceAll("{checkIn}", messageContext.checkIn)
      .replaceAll("{checkOut}", messageContext.checkOut)
      .replaceAll("{guests}", messageContext.guests)
      .replaceAll("{mode}", messageContext.mode)
      .replaceAll("{unit}", messageContext.unit)
      .replaceAll("{nights}", messageContext.nights)
      .replaceAll("{breakfast}", messageContext.breakfast)
      .replaceAll("{notes}", messageContext.notes);
  };

  const updateCheckIn = (value: string) => {
    setSelectedCheckIn(value);

    if (selectedCheckOut && value && selectedCheckOut < value) {
      setSelectedCheckOut(value);
    }
  };

  return (
    <div className={`rounded-[1.5rem] border border-tangerine-100 bg-white shadow-soft ${compact ? "p-4" : "p-4 sm:p-6"}`}>
      <div className="flex items-start gap-3">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-tangerine-50 text-tangerine-700">
          <CalendarDays className="h-4 w-4" />
        </span>
        <div>
          <h3 className="text-lg font-semibold text-charcoal-900 sm:text-xl">{title}</h3>
          <p className="mt-1.5 text-sm leading-6 text-charcoal-600">{description}</p>
        </div>
      </div>

      <div className="mt-4 grid gap-3 lg:grid-cols-2">
        <div>
          <label htmlFor="booking-checkin" className="mb-1.5 block text-sm font-medium text-charcoal-800">
            Tanggal check-in / kunjungan
          </label>
          <div className="booking-date-shell group">
            <button
              type="button"
              onClick={() => openDatePicker(checkInInputRef.current)}
              className="booking-date-button"
              aria-label="Buka kalender check-in"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#E67E22] text-[#FEF9E7] shadow-[0_8px_22px_rgba(230,126,34,0.18)]">
                <CalendarDays className="h-4 w-4" />
              </span>
              <span className="min-w-0 flex-1 text-left">
                <span className="block text-xs font-semibold uppercase tracking-[0.22em] text-[#935116]">
                  Check-in
                </span>
                <span className="mt-1 block truncate text-sm font-medium text-charcoal-900">
                  {selectedCheckIn ? formattedCheckIn : "Tap untuk atur tanggal masuk"}
                </span>
              </span>
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#935116]/15 bg-white text-[#935116] transition group-hover:border-[#E67E22]/40 group-hover:text-[#E67E22]">
                <ChevronDown className="h-4 w-4" />
              </span>
            </button>
            <input
              ref={checkInInputRef}
              id="booking-checkin"
              type="date"
              min={today}
              value={selectedCheckIn}
              onChange={(event) => updateCheckIn(event.target.value)}
              className="booking-date-input"
            />
          </div>
        </div>

        <div>
          <label htmlFor="booking-checkout" className="mb-1.5 block text-sm font-medium text-charcoal-800">
            Tanggal check-out
          </label>
          <div className="booking-date-shell group">
            <button
              type="button"
              onClick={() => openDatePicker(checkOutInputRef.current)}
              className="booking-date-button"
              aria-label="Buka kalender check-out"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#641E16] text-[#FEF9E7] shadow-[0_8px_22px_rgba(100,30,22,0.16)]">
                <MoonStar className="h-4 w-4" />
              </span>
              <span className="min-w-0 flex-1 text-left">
                <span className="block text-xs font-semibold uppercase tracking-[0.22em] text-[#935116]">
                  Check-out
                </span>
                <span className="mt-1 block truncate text-sm font-medium text-charcoal-900">
                  {selectedCheckOut ? formattedCheckOut : "Tap untuk atur tanggal keluar"}
                </span>
              </span>
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#935116]/15 bg-white text-[#935116] transition group-hover:border-[#E67E22]/40 group-hover:text-[#E67E22]">
                <ChevronDown className="h-4 w-4" />
              </span>
            </button>
            <input
              ref={checkOutInputRef}
              id="booking-checkout"
              type="date"
              min={selectedCheckIn || today}
              value={selectedCheckOut}
              onChange={(event) => setSelectedCheckOut(event.target.value)}
              className="booking-date-input"
            />
          </div>
        </div>
      </div>

      <div className={`mt-3 grid gap-3 ${unitOptions ? "md:grid-cols-2 xl:grid-cols-3" : "lg:grid-cols-2"}`}>
        {unitOptions ? (
          <div className="rounded-[1.25rem] border border-[#935116]/10 bg-[#fff9f3] p-3">
            <label htmlFor="booking-unit" className="mb-1.5 block text-sm font-medium text-charcoal-800">
              Pilih rumah
            </label>
            <div className="flex items-center gap-3 rounded-[1rem] border border-[#935116]/10 bg-white px-3 py-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#FEF9E7] text-[#E67E22]">
                <CalendarDays className="h-4 w-4" />
              </span>
              <select
                id="booking-unit"
                value={selectedUnit}
                onChange={(event) => setSelectedUnit(event.target.value)}
                className="w-full bg-transparent pr-2 text-sm font-medium text-charcoal-900 outline-none"
              >
                {unitOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        ) : null}

        <div className="rounded-[1.25rem] border border-[#935116]/10 bg-[#fff9f3] p-3">
          <label htmlFor="booking-mode" className="mb-1.5 block text-sm font-medium text-charcoal-800">
            Tipe booking
          </label>
          <div className="flex items-center gap-3 rounded-[1rem] border border-[#935116]/10 bg-white px-3 py-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#FEF9E7] text-[#E67E22]">
              <CalendarDays className="h-4 w-4" />
            </span>
            <select
              id="booking-mode"
              value={bookingType}
              onChange={(event) => setBookingType(event.target.value)}
              className="w-full bg-transparent pr-2 text-sm font-medium text-charcoal-900 outline-none"
            >
              {bookingTypeOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="rounded-[1.25rem] border border-[#935116]/10 bg-[#fff9f3] p-3">
          <label htmlFor="booking-guests" className="mb-1.5 block text-sm font-medium text-charcoal-800">
            Jumlah tamu
          </label>
          <div className="flex items-center gap-3 rounded-[1rem] border border-[#935116]/10 bg-white px-3 py-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#FEF9E7] text-[#E67E22]">
              <Users className="h-4 w-4" />
            </span>
            <input
              id="booking-guests"
              type="number"
              min="1"
              inputMode="numeric"
              value={guestCount}
              onChange={(event) => setGuestCount(event.target.value)}
              className="w-full bg-transparent text-sm font-medium text-charcoal-900 outline-none"
              placeholder="Contoh: 4"
            />
          </div>
          </div>
        </div>

      <div className="mt-3 grid gap-3 lg:grid-cols-2">
        <div className="rounded-[1.25rem] border border-[#935116]/10 bg-[#fff9f3] p-3">
          <label htmlFor="booking-breakfast" className="mb-1.5 block text-sm font-medium text-charcoal-800">
            Sarapan
          </label>
          <div className="flex items-center gap-3 rounded-[1rem] border border-[#935116]/10 bg-white px-3 py-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#FEF9E7] text-[#E67E22]">
              <MoonStar className="h-4 w-4" />
            </span>
            <select
              id="booking-breakfast"
              value={breakfastOption}
              onChange={(event) => setBreakfastOption(event.target.value)}
              className="w-full bg-transparent pr-2 text-sm font-medium text-charcoal-900 outline-none"
            >
              <option value="optional">Sarapan optional</option>
              <option value="ya">Ya, ingin sarapan</option>
              <option value="tidak">Tidak perlu sarapan</option>
            </select>
          </div>
        </div>

        <div className="rounded-[1.25rem] border border-[#935116]/10 bg-[#fff9f3] p-3">
          <label htmlFor="booking-notes" className="mb-1.5 block text-sm font-medium text-charcoal-800">
            Catatan tambahan
          </label>
          <textarea
            id="booking-notes"
            value={notes}
            onChange={(event) => setNotes(event.target.value)}
            rows={3}
            placeholder="Contoh: datang malam, butuh parkir 2 mobil, atau ingin kamar tertentu."
            className="w-full rounded-[1rem] border border-[#935116]/10 bg-white px-3 py-2.5 text-sm font-medium text-charcoal-900 outline-none transition focus:border-[#E67E22] focus:ring-2 focus:ring-[#E67E22]/10"
          />
        </div>
      </div>

      <div className="mt-3 rounded-[1.25rem] border border-[#935116]/10 bg-[#fff9f3] p-3 text-sm leading-6 text-charcoal-600 break-words">
        {unitOptions ? (
          <p>
            Rumah dipilih: <span className="font-medium text-charcoal-900">{selectedUnit}</span>
          </p>
        ) : null}
        <p>
          Ringkasan:{" "}
          <span className="font-medium text-charcoal-900">
            {bookingType}, {guestCount || "belum ditentukan"} tamu
          </span>
        </p>
        <p>
          Periode:{" "}
          <span className="font-medium text-charcoal-900">
            {formattedCheckIn} - {formattedCheckOut}
          </span>
        </p>
        <p>
          Estimasi menginap: <span className="font-medium text-charcoal-900">{stayNights ? `${stayNights} malam` : "belum ditentukan"}</span>
        </p>
        <p>
          Sarapan: <span className="font-medium text-charcoal-900">{breakfastOption}</span>
        </p>
        <p>
          Catatan: <span className="font-medium text-charcoal-900">{notes.trim() || "-"}</span>
        </p>
        {dateError ? <p className="text-[#C0392B]">{dateError}</p> : null}
      </div>

      <div className={`mt-4 flex ${compact ? "flex-col" : "flex-col sm:flex-row"} gap-3`}>
        {actions.map((action) => {
          const href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
            replaceTemplate(action.template)
          )}`;

          return (
            <a
              key={action.label}
              href={dateError ? undefined : href}
              className={
                action.variant === "secondary"
                  ? `inline-flex items-center justify-center rounded-full border border-[#935116]/20 bg-[#FEF9E7] px-4 py-2.5 text-sm font-medium text-[#641E16] transition hover:bg-white ${dateError ? "pointer-events-none opacity-60" : ""}`
                  : `inline-flex items-center justify-center rounded-full bg-[#E67E22] px-4 py-2.5 text-sm font-medium text-[#FEF9E7] transition hover:bg-[#D35400] ${dateError ? "pointer-events-none opacity-60" : ""}`
              }
              aria-disabled={Boolean(dateError)}
            >
              {action.label}
            </a>
          );
        })}
      </div>
    </div>
  );
}
