import type { Metadata } from "next";
import { Tajawal, Readex_Pro } from "next/font/google";
import "./globals.css";

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "700", "800"],
  variable: "--font-tajawal",
  display: "swap",
});

const readexPro = Readex_Pro({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-readex",
  display: "swap",
});

export const metadata: Metadata = {
  title: "أبيكس كارز | Apex Cars - قمة الفخامة والسيارات الحديثة في سورية",
  description: "معرض أبيكس كارز لبيع وأحدث السيارات الفاخرة والحديثة في سورية. مرسيدس، بي إم دبليو، رينج روفر، بورش، لكزس وأودي بأفضل الأسعار.",
  keywords: ["سيارات سورية", "أبيكس كارز", "سيارات فاخرة دمشق", "Apex Cars Syria", "رينج روفر دمشق", "مرسيدس سورية"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className={`${tajawal.variable} ${readexPro.variable}`}>
      <body className="min-h-screen flex flex-col bg-[#FAF9F6] text-[#1F2421] selection:bg-[#EFECE6] selection:text-[#1F2421] antialiased">
        {children}
      </body>
    </html>
  );
}
