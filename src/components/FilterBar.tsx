"use client";

import React, { useState } from "react";
import * as Popover from "@radix-ui/react-popover";
import * as Slider from "@radix-ui/react-slider";
import { ChevronDown, Check, SlidersHorizontal, RotateCcw, Car, Calendar, Fuel, DollarSign, Search } from "lucide-react";
import { ALL_MAKES, ALL_YEARS, ALL_FUEL_TYPES } from "@/data/cars";

interface FilterBarProps {
  selectedMake: string;
  setSelectedMake: (make: string) => void;
  selectedYear: string;
  setSelectedYear: (year: string) => void;
  selectedFuel: string;
  setSelectedFuel: (fuel: string) => void;
  maxPrice: number;
  setMaxPrice: (price: number) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onReset: () => void;
  totalResults: number;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  selectedMake,
  setSelectedMake,
  selectedYear,
  setSelectedYear,
  selectedFuel,
  setSelectedFuel,
  maxPrice,
  setMaxPrice,
  searchQuery,
  setSearchQuery,
  onReset,
  totalResults,
}) => {
  const [makeOpen, setMakeOpen] = useState(false);
  const [yearOpen, setYearOpen] = useState(false);
  const [fuelOpen, setFuelOpen] = useState(false);
  const [priceOpen, setPriceOpen] = useState(false);

  const activeFiltersCount =
    (selectedMake !== "all" ? 1 : 0) +
    (selectedYear !== "all" ? 1 : 0) +
    (selectedFuel !== "all" ? 1 : 0) +
    (maxPrice < 300000 ? 1 : 0) +
    (searchQuery.trim() !== "" ? 1 : 0);

  const currentMakeLabel = ALL_MAKES.find((m) => m.value === selectedMake)?.label || "جميع الماركات";
  const currentYearLabel = ALL_YEARS.find((y) => y.value === selectedYear)?.label || "جميع السنوات";
  const currentFuelLabel = ALL_FUEL_TYPES.find((f) => f.value === selectedFuel)?.label || "جميع المحركات";

  return (
    <div className="w-full bg-[#FAF9F6] border border-[#E5E0D8] rounded-2xl p-4 md:p-6 luxury-shadow mb-8 space-y-4">
      {/* Top Search & Filter Bar Bar Header */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">

        {/* Quick Text Search Bar */}
        <div className="relative flex-1">
          <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5C625E]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="ابحث باسم السيارة، الموديل، أو المواصفات..."
            className="w-full pr-11 pl-4 py-3 bg-[#F5F2EB] hover:bg-[#EFECE6] focus:bg-[#FAF9F6] border border-[#E5E0D8] focus:border-[#C5A059] rounded-xl text-sm transition-all duration-200 outline-none placeholder-[#5C625E]/60 text-[#1F2421]"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-[#5C625E] hover:text-[#1F2421] bg-[#E5E0D8] px-2 py-0.5 rounded-md"
            >
              مسح
            </button>
          )}
        </div>

        {/* Action Info & Reset Button */}
        <div className="flex items-center justify-between md:justify-end gap-3">
          <div className="flex items-center gap-2 text-xs font-medium text-[#5C625E] bg-[#F5F2EB] px-3.5 py-2.5 rounded-xl border border-[#E5E0D8]">
            <SlidersHorizontal className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>النتائج:</span>
            <span className="font-bold text-[#1F2421] bg-[#FAF9F6] px-2 py-0.5 rounded-lg border border-[#E5E0D8]">
              {totalResults} سيارة
            </span>
          </div>

          {activeFiltersCount > 0 && (
            <button
              onClick={onReset}
              className="flex items-center gap-1.5 text-xs text-[#1F2421] bg-[#EFECE6] hover:bg-[#E5E0D8] px-3.5 py-2.5 rounded-xl transition-all duration-150 border border-[#D6CEC2] active:scale-95"
            >
              <RotateCcw className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>إعادة ضبط ({activeFiltersCount})</span>
            </button>
          )}
        </div>
      </div>

      {/* Custom Radix Popover Dropdown Filters Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 pt-2">

        {/* 1. Make Filter Dropdown */}
        <Popover.Root open={makeOpen} onOpenChange={setMakeOpen}>
          <Popover.Trigger asChild>
            <button
              type="button"
              className={`flex items-center justify-between w-full px-4 py-3 rounded-xl border text-xs sm:text-sm font-medium transition-all duration-200 ${
                selectedMake !== "all"
                  ? "bg-[#F5F2EB] border-[#C5A059] text-[#1F2421] shadow-sm"
                  : "bg-[#F5F2EB] hover:bg-[#EFECE6] border-[#E5E0D8] text-[#1F2421]"
              }`}
            >
              <div className="flex items-center gap-2 truncate">
                <Car className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span className="truncate">{selectedMake === "all" ? "الماركة" : currentMakeLabel}</span>
              </div>
              <ChevronDown className={`w-4 h-4 text-[#5C625E] transition-transform duration-200 shrink-0 ${makeOpen ? "rotate-180" : ""}`} />
            </button>
          </Popover.Trigger>
          <Popover.Portal>
            <Popover.Content
              align="start"
              sideOffset={6}
              className="z-50 w-64 bg-[#FAF9F6] border border-[#D6CEC2] rounded-2xl p-2 luxury-shadow-lg animate-in fade-in zoom-in-95 duration-150"
            >
              <div className="text-[11px] font-bold text-[#5C625E] px-3 py-2 border-b border-[#E5E0D8] mb-1">
                اختر الماركة
              </div>
              <div className="space-y-1 max-h-60 overflow-y-auto pr-1">
                {ALL_MAKES.map((item) => (
                  <button
                    key={item.value}
                    onClick={() => {
                      setSelectedMake(item.value);
                      setMakeOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition-colors ${
                      selectedMake === item.value
                        ? "bg-[#F5F2EB] text-[#1F2421] font-bold"
                        : "text-[#1F2421] hover:bg-[#F5F2EB]"
                    }`}
                  >
                    <span>{item.label}</span>
                    {selectedMake === item.value && <Check className="w-3.5 h-3.5 text-[#C5A059]" />}
                  </button>
                ))}
              </div>
            </Popover.Content>
          </Popover.Portal>
        </Popover.Root>

        {/* 2. Year Filter Dropdown */}
        <Popover.Root open={yearOpen} onOpenChange={setYearOpen}>
          <Popover.Trigger asChild>
            <button
              type="button"
              className={`flex items-center justify-between w-full px-4 py-3 rounded-xl border text-xs sm:text-sm font-medium transition-all duration-200 ${
                selectedYear !== "all"
                  ? "bg-[#F5F2EB] border-[#C5A059] text-[#1F2421] shadow-sm"
                  : "bg-[#F5F2EB] hover:bg-[#EFECE6] border-[#E5E0D8] text-[#1F2421]"
              }`}
            >
              <div className="flex items-center gap-2 truncate">
                <Calendar className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span className="truncate">{selectedYear === "all" ? "سنة الصنع" : currentYearLabel}</span>
              </div>
              <ChevronDown className={`w-4 h-4 text-[#5C625E] transition-transform duration-200 shrink-0 ${yearOpen ? "rotate-180" : ""}`} />
            </button>
          </Popover.Trigger>
          <Popover.Portal>
            <Popover.Content
              align="start"
              sideOffset={6}
              className="z-50 w-52 bg-[#FAF9F6] border border-[#D6CEC2] rounded-2xl p-2 luxury-shadow-lg animate-in fade-in zoom-in-95 duration-150"
            >
              <div className="text-[11px] font-bold text-[#5C625E] px-3 py-2 border-b border-[#E5E0D8] mb-1">
                اختر موديل السنة
              </div>
              <div className="space-y-1">
                {ALL_YEARS.map((item) => (
                  <button
                    key={item.value}
                    onClick={() => {
                      setSelectedYear(item.value);
                      setYearOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition-colors ${
                      selectedYear === item.value
                        ? "bg-[#F5F2EB] text-[#1F2421] font-bold"
                        : "text-[#1F2421] hover:bg-[#F5F2EB]"
                    }`}
                  >
                    <span>{item.label}</span>
                    {selectedYear === item.value && <Check className="w-3.5 h-3.5 text-[#C5A059]" />}
                  </button>
                ))}
              </div>
            </Popover.Content>
          </Popover.Portal>
        </Popover.Root>

        {/* 3. Fuel/Engine Type Dropdown */}
        <Popover.Root open={fuelOpen} onOpenChange={setFuelOpen}>
          <Popover.Trigger asChild>
            <button
              type="button"
              className={`flex items-center justify-between w-full px-4 py-3 rounded-xl border text-xs sm:text-sm font-medium transition-all duration-200 ${
                selectedFuel !== "all"
                  ? "bg-[#F5F2EB] border-[#C5A059] text-[#1F2421] shadow-sm"
                  : "bg-[#F5F2EB] hover:bg-[#EFECE6] border-[#E5E0D8] text-[#1F2421]"
              }`}
            >
              <div className="flex items-center gap-2 truncate">
                <Fuel className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span className="truncate">{selectedFuel === "all" ? "نوع الوقود" : currentFuelLabel}</span>
              </div>
              <ChevronDown className={`w-4 h-4 text-[#5C625E] transition-transform duration-200 shrink-0 ${fuelOpen ? "rotate-180" : ""}`} />
            </button>
          </Popover.Trigger>
          <Popover.Portal>
            <Popover.Content
              align="start"
              sideOffset={6}
              className="z-50 w-56 bg-[#FAF9F6] border border-[#D6CEC2] rounded-2xl p-2 luxury-shadow-lg animate-in fade-in zoom-in-95 duration-150"
            >
              <div className="text-[11px] font-bold text-[#5C625E] px-3 py-2 border-b border-[#E5E0D8] mb-1">
                اختر نوع المحرك
              </div>
              <div className="space-y-1">
                {ALL_FUEL_TYPES.map((item) => (
                  <button
                    key={item.value}
                    onClick={() => {
                      setSelectedFuel(item.value);
                      setFuelOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition-colors ${
                      selectedFuel === item.value
                        ? "bg-[#F5F2EB] text-[#1F2421] font-bold"
                        : "text-[#1F2421] hover:bg-[#F5F2EB]"
                    }`}
                  >
                    <span>{item.label}</span>
                    {selectedFuel === item.value && <Check className="w-3.5 h-3.5 text-[#C5A059]" />}
                  </button>
                ))}
              </div>
            </Popover.Content>
          </Popover.Portal>
        </Popover.Root>

        {/* 4. Price Range Popover Slider */}
        <Popover.Root open={priceOpen} onOpenChange={setPriceOpen}>
          <Popover.Trigger asChild>
            <button
              type="button"
              className={`flex items-center justify-between w-full px-4 py-3 rounded-xl border text-xs sm:text-sm font-medium transition-all duration-200 ${
                maxPrice < 300000
                  ? "bg-[#F5F2EB] border-[#C5A059] text-[#1F2421] shadow-sm"
                  : "bg-[#F5F2EB] hover:bg-[#EFECE6] border-[#E5E0D8] text-[#1F2421]"
              }`}
            >
              <div className="flex items-center gap-2 truncate">
                <DollarSign className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span className="truncate">
                  {maxPrice >= 300000 ? "نطاق السعر" : `حتى $${maxPrice.toLocaleString()}`}
                </span>
              </div>
              <ChevronDown className={`w-4 h-4 text-[#5C625E] transition-transform duration-200 shrink-0 ${priceOpen ? "rotate-180" : ""}`} />
            </button>
          </Popover.Trigger>
          <Popover.Portal>
            <Popover.Content
              align="end"
              sideOffset={6}
              className="z-50 w-72 bg-[#FAF9F6] border border-[#D6CEC2] rounded-2xl p-4 luxury-shadow-lg animate-in fade-in zoom-in-95 duration-150"
            >
              <div className="flex justify-between items-center pb-2 border-b border-[#E5E0D8] mb-3">
                <span className="text-xs font-bold text-[#1F2421]">حد السعر الأعلى</span>
                <span className="text-xs font-extrabold text-[#C5A059] bg-[#F5F2EB] px-2.5 py-1 rounded-lg border border-[#E5E0D8]">
                  ${maxPrice.toLocaleString()} USD
                </span>
              </div>

              <div className="py-2">
                <Slider.Root
                  className="relative flex items-center select-none touch-none w-full h-5"
                  value={[maxPrice]}
                  max={300000}
                  min={50000}
                  step={5000}
                  onValueChange={(val) => setMaxPrice(val[0])}
                >
                  <Slider.Track className="bg-[#E5E0D8] relative grow rounded-full h-2">
                    <Slider.Range className="absolute bg-[#C5A059] rounded-full h-full" />
                  </Slider.Track>
                  <Slider.Thumb
                    className="block w-5 h-5 bg-[#FAF9F6] border-2 border-[#C5A059] shadow-md rounded-full hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#C5A059] transition-transform cursor-pointer"
                    aria-label="Max Price"
                  />
                </Slider.Root>
              </div>

              <div className="flex justify-between text-[11px] text-[#5C625E] mt-1 font-medium">
                <span>$50,000</span>
                <span>$300,000+</span>
              </div>

              <button
                onClick={() => {
                  setMaxPrice(300000);
                }}
                className="w-full mt-3 py-1.5 bg-[#F5F2EB] hover:bg-[#EFECE6] text-[#5C625E] hover:text-[#1F2421] text-xs font-medium rounded-xl transition-colors border border-[#E5E0D8]"
              >
                إلغاء تحديد السعر
              </button>
            </Popover.Content>
          </Popover.Portal>
        </Popover.Root>

      </div>
    </div>
  );
};
