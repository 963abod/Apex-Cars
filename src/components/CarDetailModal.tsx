"use client";

import React, { useState, useEffect } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Car, PHONE_NUMBER } from "@/data/cars";
import {
  X,
  MessageCircle,
  Calendar,
  Gauge,
  Fuel,
  CheckCircle2,
  Share2,
  Copy,
  Check,
  Zap,
  Palette,
  MapPin,
  Sparkles,
  Phone,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

interface CarDetailModalProps {
  car: Car | null;
  onClose: () => void;
}

export const CarDetailModal: React.FC<CarDetailModalProps> = ({ car, onClose }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setActiveImageIndex(0);
  }, [car]);

  if (!car) return null;

  const currentUrl = typeof window !== "undefined" ? window.location.href : "https://apex-cars.sy";

  // Strict pre-filled Syrian dialect WhatsApp message
  const whatsappMessage = `مرحبا يعطيكم العافية، عم اتواصل معكم من موقع أبيكس كارز بخصوص سيارة ${car.makeAr} ${car.model} المعروضة عندكم:
- السعر: $${car.priceUSD.toLocaleString()} USD
- سنة الصنع: ${car.year}
- الممشى: ${car.mileage}
- رابط السيارة: ${currentUrl}
حابب اعرف تفاصيل اكتر اذا لسا متوفرة، وكيف طريقة المعاينة؟ شكراً إلكن!`;

  const whatsappUrl = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;

  const handleCopyLink = () => {
    if (typeof navigator !== "undefined") {
      navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleNextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % car.images.length);
  };

  const handlePrevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + car.images.length) % car.images.length);
  };

  return (
    <Dialog.Root open={!!car} onOpenChange={(open) => !open && onClose()}>
      <Dialog.Portal>
        {/* Semi-transparent Light Backdrop */}
        <Dialog.Overlay className="fixed inset-0 z-50 bg-[#1F2421]/60 backdrop-blur-md animate-in fade-in duration-200" />

        <Dialog.Content className="fixed left-[50%] top-[50%] z-50 max-h-[92vh] w-[95vw] max-w-5xl translate-x-[-50%] translate-y-[-50%] overflow-y-auto bg-[#FAF9F6] border border-[#D6CEC2] rounded-3xl p-5 sm:p-8 luxury-shadow-lg focus:outline-none animate-in zoom-in-95 fade-in duration-200">

          {/* Header Bar */}
          <div className="flex items-center justify-between pb-4 border-b border-[#E5E0D8] mb-6">
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold bg-[#F5F2EB] text-[#C5A059] px-3 py-1 rounded-full border border-[#D6CEC2]">
                {car.makeAr}
              </span>
              <Dialog.Title className="text-lg sm:text-2xl font-black text-[#1F2421] font-tajawal">
                {car.model} ({car.year})
              </Dialog.Title>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyLink}
                className="p-2 rounded-full bg-[#F5F2EB] hover:bg-[#EFECE6] text-[#5C625E] hover:text-[#1F2421] border border-[#E5E0D8] transition-colors"
                title="مشاركة رابط السيارة"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              </button>

              <Dialog.Close asChild>
                <button
                  className="p-2 rounded-full bg-[#F5F2EB] hover:bg-[#EFECE6] text-[#1F2421] border border-[#E5E0D8] transition-colors"
                  aria-label="إغلاق"
                >
                  <X className="w-5 h-5" />
                </button>
              </Dialog.Close>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

            {/* Left/Main Column: High-Res Interactive Multi-Angle Gallery */}
            <div className="lg:col-span-7 space-y-4">

              {/* Main Hero Stage Image */}
              <div className="relative aspect-[16/10] bg-[#EFECE6] rounded-2xl overflow-hidden border border-[#E5E0D8] luxury-shadow group">
                <img
                  src={car.images[activeImageIndex]?.url || car.images[0].url}
                  alt={car.images[activeImageIndex]?.label || car.model}
                  className="w-full h-full object-cover transition-all duration-300 ease-out"
                />

                {/* Angle Label Pill */}
                <div className="absolute top-3 right-3 bg-[#FAF9F6]/90 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold text-[#1F2421] border border-[#E5E0D8] luxury-shadow flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>{car.images[activeImageIndex]?.label || "زاوية العرض"}</span>
                </div>

                {/* Image Navigation Arrows */}
                {car.images.length > 1 && (
                  <>
                    <button
                      onClick={handlePrevImage}
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#FAF9F6]/80 hover:bg-[#FAF9F6] text-[#1F2421] flex items-center justify-center border border-[#E5E0D8] luxury-shadow opacity-90 group-hover:opacity-100 transition-all active:scale-90"
                      aria-label="الزاوية السابقة"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                    <button
                      onClick={handleNextImage}
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#FAF9F6]/80 hover:bg-[#FAF9F6] text-[#1F2421] flex items-center justify-center border border-[#E5E0D8] luxury-shadow opacity-90 group-hover:opacity-100 transition-all active:scale-90"
                      aria-label="الزاوية التالية"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                  </>
                )}

                {/* Active Counter Indicator */}
                <div className="absolute bottom-3 left-3 bg-[#1F2421]/80 backdrop-blur-sm text-[#FAF9F6] px-2.5 py-1 rounded-md text-[11px] font-bold">
                  {activeImageIndex + 1} / {car.images.length}
                </div>
              </div>

              {/* Thumbnails Carousel Grid */}
              <div className="grid grid-cols-4 sm:grid-cols-6 gap-2 pt-1">
                {car.images.map((img, idx) => (
                  <button
                    key={img.id || idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative aspect-[16/11] rounded-xl overflow-hidden border-2 transition-all duration-200 ${
                      activeImageIndex === idx
                        ? "border-[#C5A059] ring-2 ring-[#C5A059]/20 scale-105"
                        : "border-[#E5E0D8] opacity-70 hover:opacity-100"
                    }`}
                  >
                    <img src={img.url} alt={img.label} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>

              {/* Description Box */}
              <div className="bg-[#F5F2EB] border border-[#E5E0D8] rounded-2xl p-4 sm:p-5 mt-4">
                <h4 className="text-xs font-bold text-[#5C625E] uppercase tracking-wider mb-2">
                  عن السيارة
                </h4>
                <p className="text-sm text-[#1F2421] leading-relaxed font-medium">
                  {car.description}
                </p>
              </div>

            </div>

            {/* Right Column: Detailed Specs Grid & Direct WhatsApp Order */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">

              <div className="space-y-5">
                {/* Price Display Block */}
                <div className="bg-[#F5F2EB] border border-[#D6CEC2] rounded-2xl p-4 sm:p-5 flex justify-between items-center luxury-shadow">
                  <div>
                    <span className="text-xs font-semibold text-[#5C625E]">السعر المطلوب</span>
                    <div className="text-2xl sm:text-3xl font-black text-[#1F2421] font-tajawal">
                      ${car.priceUSD.toLocaleString()} <span className="text-xs font-bold text-[#5C625E]">USD</span>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#FAF9F6] text-[#C5A059] border border-[#D6CEC2]">
                    {car.statusCondition}
                  </span>
                </div>

                {/* Key Technical Specs Table Grid */}
                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-[#5C625E] uppercase tracking-wider mb-3">
                    المواصفات والبيانات الفنية
                  </h4>

                  <div className="grid grid-cols-2 gap-2 text-xs">

                    <div className="flex items-center justify-between p-3 bg-[#FAF9F6] border border-[#E5E0D8] rounded-xl">
                      <span className="text-[#5C625E] flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-[#C5A059]" />
                        سنة الصنع
                      </span>
                      <span className="font-bold text-[#1F2421]">{car.year}</span>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-[#FAF9F6] border border-[#E5E0D8] rounded-xl">
                      <span className="text-[#5C625E] flex items-center gap-1.5">
                        <Gauge className="w-3.5 h-3.5 text-[#C5A059]" />
                        المممشه
                      </span>
                      <span className="font-bold text-[#1F2421]">{car.mileage}</span>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-[#FAF9F6] border border-[#E5E0D8] rounded-xl">
                      <span className="text-[#5C625E] flex items-center gap-1.5">
                        <Zap className="w-3.5 h-3.5 text-[#C5A059]" />
                        سعة المحرك
                      </span>
                      <span className="font-bold text-[#1F2421]">{car.engineCapacity}</span>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-[#FAF9F6] border border-[#E5E0D8] rounded-xl">
                      <span className="text-[#5C625E] flex items-center gap-1.5">
                        <Fuel className="w-3.5 h-3.5 text-[#C5A059]" />
                        نوع الوقود
                      </span>
                      <span className="font-bold text-[#1F2421]">{car.fuelType}</span>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-[#FAF9F6] border border-[#E5E0D8] rounded-xl">
                      <span className="text-[#5C625E] flex items-center gap-1.5">
                        <Palette className="w-3.5 h-3.5 text-[#C5A059]" />
                        اللون الخارجي
                      </span>
                      <span className="font-bold text-[#1F2421] truncate max-w-[110px]" title={car.exteriorColor}>
                        {car.exteriorColor}
                      </span>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-[#FAF9F6] border border-[#E5E0D8] rounded-xl">
                      <span className="text-[#5C625E] flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                        التسجيل واللوحات
                      </span>
                      <span className="font-bold text-[#1F2421]">{car.registrationRegion}</span>
                    </div>

                  </div>
                </div>

                {/* Key Features Bullet List */}
                {car.keyFeatures && car.keyFeatures.length > 0 && (
                  <div className="space-y-2 pt-1">
                    <h4 className="text-xs font-bold text-[#5C625E] uppercase tracking-wider mb-2">
                      أبرز المزايا والتجهيزات
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {car.keyFeatures.map((feat, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs font-medium text-[#1F2421]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </div>

              {/* Direct WhatsApp Call-to-Action Block */}
              <div className="pt-4 border-t border-[#E5E0D8] space-y-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-[#1F2421] hover:bg-[#2D312E] text-[#FAF9F6] border border-[#C5A059]/50 py-3.5 px-6 rounded-2xl font-bold text-sm transition-all duration-200 active:scale-95 luxury-shadow"
                >
                  <MessageCircle className="w-5 h-5 text-[#25D366]" />
                  <span>استفسر أو اطلب المعاينة عبر واتساب</span>
                </a>

                <p className="text-[11px] text-center text-[#5C625E] font-medium">
                  سيتم توجيهك مباشرة لمراسلة المعرض بالرسالة المجهزة مع كافة التفاصيل.
                </p>
              </div>

            </div>

          </div>

        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
