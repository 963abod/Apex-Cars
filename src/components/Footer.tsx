"use client";

import React from "react";
import { Car, MapPin, Phone, Mail, Clock, ExternalLink, ShieldCheck, Heart } from "lucide-react";
import { PHONE_NUMBER } from "@/data/cars";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#1F2421] text-[#FAF9F6] border-t border-[#C5A059]/30 pt-12 pb-8 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-[#2D312E]">

          {/* Brand Info Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#2D312E] border border-[#C5A059]/40 flex items-center justify-center text-[#C5A059]">
                <Car className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold font-tajawal">
                أبيكس كارز <span className="text-[#C5A059] font-normal">| Apex Cars</span>
              </h2>
            </div>

            <p className="text-xs sm:text-sm text-[#D6CEC2] leading-relaxed max-w-md">
              قمة الفخامة والسيارات الحديثة في سورية. نقدم تجربة شراء شفافة ومميزة للراغبين في اقتناء أفخم السيارات الألمانية والأوروبية بأعلى معايير الجودة والتجهيز.
            </p>

            <div className="flex items-center gap-2 text-xs text-[#C5A059]">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>جميع السيارات مفحوصة ومضمونة 100% مع كامل أوراق التسجيل والترسيم</span>
            </div>
          </div>

          {/* Quick Showroom Contact Info */}
          <div className="md:col-span-4 space-y-3">
            <h3 className="text-sm font-bold text-[#C5A059] uppercase tracking-wider">
              معلومات المعرض والتواصل
            </h3>

            <ul className="space-y-2.5 text-xs text-[#E5E0D8]">
              <li className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>دمشق، المزة أوتوستراد - مقابل مدينة الشباب / معرض أبيكس</span>
              </li>

              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span dir="ltr">+963 911 223 344</span>
              </li>

              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>info@apexcars.sy</span>
              </li>

              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>يومياً من الساعة 10:00 صباحاً وحتى 9:00 مساءً</span>
              </li>
            </ul>
          </div>

          {/* Working Hours & Syria Services */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-sm font-bold text-[#C5A059] uppercase tracking-wider">
              خدماتنا المميزة
            </h3>
            <ul className="space-y-2 text-xs text-[#D6CEC2]">
              <li>• بيع وشراء السيارات الفاخرة الحديثة</li>
              <li>• استيراد حسب الطلب (زيرو وكالة)</li>
              <li>• تخليص معاملات الترخيص واللوحات</li>
              <li>• استشارات وتقييم السيارات بالدولار</li>
            </ul>
          </div>

        </div>

        {/* Mandatory Footer Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#D6CEC2]">

          <p>© {new Date().getFullYear()} أبيكس كارز | Apex Cars. جميع الحقوق محفوظة.</p>

          <div className="flex items-center gap-2 bg-[#2D312E] px-4 py-2 rounded-xl border border-[#C5A059]/20">
            <span>تصميم وتطوير بواسطة</span>
            <a
              href="https://aboudweb.onrender.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-[#C5A059] hover:text-[#FAF9F6] underline flex items-center gap-1 transition-colors"
            >
              Aboud Web
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
};
