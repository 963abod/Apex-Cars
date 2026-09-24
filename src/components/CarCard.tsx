"use client";

import React from "react";
import Image from "next/image";
import { Car, PHONE_NUMBER } from "@/data/cars";
import { Fuel, Calendar, Gauge, MessageCircle, Eye, ShieldCheck, MapPin, Sparkles } from "lucide-react";

interface CarCardProps {
  car: Car;
  onSelect: (car: Car) => void;
}

export const CarCard: React.FC<CarCardProps> = ({ car, onSelect }) => {
  const currentUrl = typeof window !== "undefined" ? window.location.href : "https://apex-cars.sy";

  // Pre-filled Syrian colloquial WhatsApp message template
  const whatsappMessage = `مرحبا يعطيكم العافية، عم اتواصل معكم من موقع أبيكس كارز بخصوص سيارة ${car.makeAr} ${car.model} المعروضة عندكم:
- السعر: $${car.priceUSD.toLocaleString()} USD
- سنة الصنع: ${car.year}
- الممشى: ${car.mileage}
- رابط السيارة: ${currentUrl}
حابب اعرف تفاصيل اكتر اذا لسا متوفرة، وكيف طريقة المعاينة؟ شكراً إلكن!`;

  const whatsappUrl = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="group bg-[#FAF9F6] border border-[#E5E0D8] hover:border-[#C5A059] rounded-2xl overflow-hidden luxury-shadow hover:luxury-shadow-lg transition-all duration-300 flex flex-col h-full">

      {/* Top Image Stage Container */}
      <div className="relative aspect-[16/10] bg-[#EFECE6] overflow-hidden">
        <img
          src={car.images[0]?.url || "/placeholder.jpg"}
          alt={`${car.makeAr} ${car.model}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
        />

        {/* Status Badge Tag */}
        <div className="absolute top-3 right-3 flex flex-col gap-1.5 items-end z-10">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#FAF9F6]/90 backdrop-blur-md text-[#1F2421] border border-[#E5E0D8] luxury-shadow flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" />
            {car.statusCondition}
          </span>
          {car.featured && (
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-[#1F2421] text-[#C5A059] border border-[#C5A059]/30 flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              سيارة مميزة
            </span>
          )}
        </div>

        {/* Registration Location Tag */}
        <div className="absolute bottom-3 right-3 z-10">
          <span className="px-2.5 py-1 rounded-lg text-[11px] font-medium bg-[#1F2421]/80 backdrop-blur-sm text-[#FAF9F6] flex items-center gap-1">
            <MapPin className="w-3 h-3 text-[#C5A059]" />
            {car.registrationRegion}
          </span>
        </div>

        {/* Photos Count Badge */}
        <div className="absolute bottom-3 left-3 z-10">
          <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-[#FAF9F6]/80 text-[#5C625E] border border-[#E5E0D8]">
            {car.images.length} زوايا تصوير
          </span>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          {/* Make & Model Header */}
          <div className="flex justify-between items-start gap-2 mb-1">
            <div>
              <span className="text-xs font-bold text-[#C5A059] tracking-wider uppercase">
                {car.makeAr} ({car.make})
              </span>
              <h3 className="text-base sm:text-lg font-bold text-[#1F2421] leading-snug group-hover:text-[#C5A059] transition-colors">
                {car.model}
              </h3>
            </div>
            <div className="text-left shrink-0">
              <span className="text-xs text-[#5C625E] block font-medium">السعر</span>
              <span className="text-base sm:text-lg font-extrabold text-[#1F2421] font-tajawal">
                ${car.priceUSD.toLocaleString()}
              </span>
            </div>
          </div>

          {/* Key Specs Pills Grid */}
          <div className="grid grid-cols-3 gap-2 my-3 pt-2 border-t border-[#E5E0D8]/60">
            <div className="flex flex-col items-center justify-center p-2 rounded-xl bg-[#F5F2EB] border border-[#E5E0D8]">
              <Calendar className="w-3.5 h-3.5 text-[#C5A059] mb-0.5" />
              <span className="text-[10px] text-[#5C625E]">سنة الصنع</span>
              <span className="text-xs font-bold text-[#1F2421]">{car.year}</span>
            </div>

            <div className="flex flex-col items-center justify-center p-2 rounded-xl bg-[#F5F2EB] border border-[#E5E0D8]">
              <Gauge className="w-3.5 h-3.5 text-[#C5A059] mb-0.5" />
              <span className="text-[10px] text-[#5C625E]">الممشى</span>
              <span className="text-xs font-bold text-[#1F2421] truncate max-w-full">{car.mileage.split(" ")[0]}</span>
            </div>

            <div className="flex flex-col items-center justify-center p-2 rounded-xl bg-[#F5F2EB] border border-[#E5E0D8]">
              <Fuel className="w-3.5 h-3.5 text-[#C5A059] mb-0.5" />
              <span className="text-[10px] text-[#5C625E]">المحرك</span>
              <span className="text-xs font-bold text-[#1F2421]">{car.fuelType}</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[#E5E0D8]">
          <button
            onClick={() => onSelect(car)}
            className="flex items-center justify-center gap-1.5 bg-[#F5F2EB] hover:bg-[#EFECE6] text-[#1F2421] border border-[#D6CEC2] hover:border-[#C5A059] py-2.5 px-3 rounded-xl text-xs font-bold transition-all duration-150 active:scale-95"
          >
            <Eye className="w-3.5 h-3.5 text-[#5C625E]" />
            <span>التفاصيل والصور</span>
          </button>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 bg-[#1F2421] hover:bg-[#2D312E] text-[#FAF9F6] border border-[#C5A059]/40 py-2.5 px-3 rounded-xl text-xs font-bold transition-all duration-150 active:scale-95"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
            <span>طلب عبر واتساب</span>
          </a>
        </div>

      </div>
    </div>
  );
};
