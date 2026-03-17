import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aqilla Sanjai & Guest House Payakumbuh",
  description:
    "Booking guest house nyaman dan pesan oleh-oleh sanjai khas Payakumbuh dalam satu website Aqilla.",
  keywords: [
    "Sanjai Payakumbuh",
    "Guest House Payakumbuh",
    "Oleh-oleh Minangkabau",
    "Aqilla Sanjai"
  ],
  openGraph: {
    title: "Aqilla Sanjai & Guest House Payakumbuh",
    description:
      "Guest house nyaman dan oleh-oleh sanjai khas Payakumbuh dalam satu website Aqilla.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
