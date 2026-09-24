"use client";

import React from "react";
import { Sparkles, ShieldCheck, Award, ChevronDown } from "lucide-react";

interface HeroSectionProps {
  onExploreClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreClick }) => {
  return (
    <section className="relative overflow-hidden py-12 sm:py-16 bg-gradient-to-b from-[#F5F2EB] via-[#FAF9F6] to-[#FAF9F6] border-b border-[#E5E0D8]">

      {/* Subtle Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none overflow-hidden opacity-30">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#C5A059]/10 blur-3xl" />
        <div className="absolute top-1/2 -left-24 w-80 h-80 rounded-full bg-[#D6CEC2]/20 blur-2xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-6">

          {/* Top Pill Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF9F6] border border-[#D6CEC2] luxury-shadow text-xs font-semibold text-[#1F2421]">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>المعرض الأوّل للسيارات الفاخرة والحديثة في سورية</span>
          </div>

          {/* Main Title Header */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1F2421] tracking-tight leading-tight font-tajawal">
            تجربة اقتناء استثنائية لأحدث <br />
            <span className="text-[#C5A059]">السيارات الفاخرة العالمية</span>
          </h1>

          {/* Subtitle Description */}
          <p className="text-sm sm:text-base text-[#5C625E] leading-relaxed max-w-2xl mx-auto font-medium">
            في <span className="font-bold text-[#1F2421]">أبيكس كارز</span>، نضمن لك أرقى الأسطول من السيارات الحديثة زيرو وكالة
            وبحالة فنية فائقة الجودة. تسليم فوري وتخليص معاملة التسجيل والترسيم بكل سلاسة.
          </p>

          {/* Action Button */}
          <div className="pt-2 flex flex-wrap justify-center items-center gap-4">
            <button
              onClick={onExploreClick}
              className="group flex items-center gap-2 bg-[#1F2421] hover:bg-[#2D312E] text-[#FAF9F6] px-6 py-3.5 rounded-xl font-bold text-sm transition-all duration-200 active:scale-95 luxury-shadow border border-[#C5A059]/30"
            >
              <span>تصفح السيارات المتاحة</span>
              <ChevronDown className="w-4 h-4 text-[#C5A059] group-hover:translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Key Value Badges */}
          <div className="pt-8 grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 max-w-2xl mx-auto text-right">

            <div className="flex items-center gap-3 p-3 bg-[#FAF9F6] border border-[#E5E0D8] rounded-xl luxury-shadow">
              <div className="p-2 rounded-lg bg-[#F5F2EB] text-[#C5A059] shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-bold text-[#1F2421]">فحص فني شامل</p>
                <p className="text-[11px] text-[#5C625E]">ضمان خلو العلام 100%</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-[#FAF9F6] border border-[#E5E0D8] rounded-xl luxury-shadow">
              <div className="p-2 rounded-lg bg-[#F5F2EB] text-[#C5A059] shrink-0">
                <Award className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-bold text-[#1F2421]">تجهيز وتسليم فوري</p>
                <p className="text-[11px] text-[#5C625E]">جاهزة للتسجيل والترسيم</p>
              </div>
            </div>

            <div className="col-span-2 sm:col-span-1 flex items-center gap-3 p-3 bg-[#FAF9F6] border border-[#E5E0D8] rounded-xl luxury-shadow">
              <div className="p-2 rounded-lg bg-[#F5F2EB] text-[#C5A059] shrink-0">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-bold text-[#1F2421]">أسعار منافسة</p>
                <p className="text-[11px] text-[#5C625E]">تقييم شفاف بالدولار</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
