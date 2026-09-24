"use client";

import React from "react";
import { Car } from "@/data/cars";
import { CarCard } from "./CarCard";
import { SearchX, RotateCcw } from "lucide-react";

interface CarGridProps {
  cars: Car[];
  onSelectCar: (car: Car) => void;
  onResetFilters: () => void;
}

export const CarGrid: React.FC<CarGridProps> = ({ cars, onSelectCar, onResetFilters }) => {
  if (cars.length === 0) {
    return (
      <div className="bg-[#FAF9F6] border border-[#E5E0D8] rounded-2xl p-10 text-center luxury-shadow my-8">
        <div className="w-16 h-16 bg-[#F5F2EB] border border-[#D6CEC2] rounded-2xl flex items-center justify-center mx-auto mb-4 text-[#C5A059]">
          <SearchX className="w-8 h-8" />
        </div>
        <h3 className="text-lg font-bold text-[#1F2421] mb-2 font-tajawal">
          لم نجد أي سيارة تطابق خيارات البحث الحالية
        </h3>
        <p className="text-xs text-[#5C625E] max-w-md mx-auto mb-6">
          حاول تغيير الماركة، سنة الصنع، أو زيادة نطاق السعر للوصول للنتائج المطلوبة.
        </p>
        <button
          onClick={onResetFilters}
          className="inline-flex items-center gap-2 bg-[#1F2421] hover:bg-[#2D312E] text-[#FAF9F6] px-5 py-2.5 rounded-xl text-xs font-bold transition-all active:scale-95"
        >
          <RotateCcw className="w-3.5 h-3.5 text-[#C5A059]" />
          <span>إعادة ضبط كافة الفلاتر</span>
        </button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-6">
      {cars.map((car) => (
        <CarCard key={car.id} car={car} onSelect={onSelectCar} />
      ))}
    </div>
  );
};
