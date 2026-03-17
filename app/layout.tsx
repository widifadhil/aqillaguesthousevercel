import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aqilla Sanjai & Guest House Payakumbuh",
  description:
    "Belanja oleh-oleh sanjai khas Minangkabau dan booking guest house nyaman di Payakumbuh dalam satu landing page yang elegan.",
  keywords: [
    "Sanjai Payakumbuh",
    "Guest House Payakumbuh",
    "Oleh-oleh Minangkabau",
    "Aqilla Sanjai"
  ],
  openGraph: {
    title: "Aqilla Sanjai & Guest House Payakumbuh",
    description:
      "Luxury hospitality meets local heritage: oleh-oleh sanjai premium dan guest house nyaman di Payakumbuh.",
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
