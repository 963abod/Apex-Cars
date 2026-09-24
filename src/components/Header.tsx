"use client";

import React from "react";
import { Phone, Sparkles, Car, ShieldCheck, MapPin } from "lucide-react";
import { PHONE_NUMBER } from "@/data/cars";

export const Header: React.FC = () => {
  const directPhoneUrl = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent("مرحبا، أود الاستفسار عن المعرض والسيارات المتوفرة لديكم في أبيكس كارز.")}`;

  return (
    <header className="sticky top-0 z-40 w-full luxury-glass border-b border-[#E5E0D8]">
      {/* Top micro banner */}
      <div className="bg-[#1F2421] text-[#FAF9F6] text-xs py-1.5 px-4 hidden sm:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center font-medium">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-[#C5A059]">
              <Sparkles className="w-3.5 h-3.5" />
              أحدث موديلات 2024 - 2026 بأفضل الأسعار
            </span>
            <span className="text-[#D6CEC2]/40">|</span>
            <span className="flex items-center gap-1 text-[#E5E0D8]">
              <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
              دمشق - المزة أوتوستراد / معرض أبيكس الفاخر
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 text-[#E5E0D8]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" />
              ضمان خلو العلامة والجاهزية التامة
            </span>
          </div>
        </div>
      </div>

      {/* Main Header Nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 sm:py-4">
        <div className="flex items-center justify-between gap-4">

          {/* Logo & Showroom Title */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-[#1F2421] to-[#2D312E] flex items-center justify-center text-[#C5A059] shadow-md border border-[#C5A059]/30 shrink-0">
              <Car className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl sm:text-2xl font-black tracking-tight text-[#1F2421] font-tajawal">
                  أبيكس كارز <span className="text-[#C5A059] font-normal text-lg sm:text-xl">| Apex Cars</span>
                </h1>
                <span className="text-[10px] font-bold bg-[#F5F2EB] text-[#C5A059] border border-[#D6CEC2] px-2 py-0.5 rounded-full uppercase tracking-widest hidden sm:inline-block">
                  Luxury
                </span>
              </div>
              <p className="text-xs text-[#5C625E] font-medium hidden sm:block">
                قمة الفخامة والسيارات الحديثة في سورية
              </p>
            </div>
          </div>

          {/* Quick CTA Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={directPhoneUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#F5F2EB] hover:bg-[#EFECE6] text-[#1F2421] border border-[#D6CEC2] hover:border-[#C5A059] px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl font-medium text-xs sm:text-sm transition-all duration-200 active:scale-95 luxury-shadow"
            >
              <Phone className="w-4 h-4 text-[#C5A059]" />
              <span className="hidden xs:inline">تواصل مباشر</span>
              <span className="xs:hidden">اتصل</span>
            </a>
          </div>

        </div>

        {/* Mobile Tagline */}
        <p className="text-[11px] text-[#5C625E] font-medium mt-1 text-center sm:hidden border-t border-[#E5E0D8] pt-1.5">
          قمة الفخامة والسيارات الحديثة في سورية
        </p>
      </div>
    </header>
  );
};
