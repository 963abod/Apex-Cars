"use client";

import React, { useState, useMemo, useRef } from "react";
import { CARS_DATA, Car } from "@/data/cars";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { FilterBar } from "@/components/FilterBar";
import { CarGrid } from "@/components/CarGrid";
import { CarDetailModal } from "@/components/CarDetailModal";
import { Footer } from "@/components/Footer";
import { Sparkles, Car as CarIcon, Flame } from "lucide-react";

export default function HomePage() {
  const [selectedMake, setSelectedMake] = useState<string>("all");
  const [selectedYear, setSelectedYear] = useState<string>("all");
  const [selectedFuel, setSelectedFuel] = useState<string>("all");
  const [maxPrice, setMaxPrice] = useState<number>(300000);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeCarModal, setActiveCarModal] = useState<Car | null>(null);

  const inventoryRef = useRef<HTMLDivElement>(null);

  const handleScrollToInventory = () => {
    inventoryRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleResetFilters = () => {
    setSelectedMake("all");
    setSelectedYear("all");
    setSelectedFuel("all");
    setMaxPrice(300000);
    setSearchQuery("");
  };

  // Real-time filtering logic
  const filteredCars = useMemo(() => {
    return CARS_DATA.filter((car) => {
      // Filter by Make
      if (selectedMake !== "all" && car.make.toLowerCase() !== selectedMake.toLowerCase()) {
        return false;
      }

      // Filter by Year
      if (selectedYear !== "all" && car.year.toString() !== selectedYear) {
        return false;
      }

      // Filter by Fuel
      if (selectedFuel !== "all" && car.fuelType !== selectedFuel) {
        return false;
      }

      // Filter by Price
      if (car.priceUSD > maxPrice) {
        return false;
      }

      // Filter by Search Query
      if (searchQuery.trim() !== "") {
        const query = searchQuery.toLowerCase().trim();
        const fullText = `${car.make} ${car.makeAr} ${car.model} ${car.year} ${car.description} ${car.exteriorColor} ${car.statusCondition}`.toLowerCase();
        if (!fullText.includes(query)) {
          return false;
        }
      }

      return true;
    });
  }, [selectedMake, selectedYear, selectedFuel, maxPrice, searchQuery]);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-[#1F2421]">

      {/* Header / Navbar */}
      <Header />

      {/* Hero Section */}
      <HeroSection onExploreClick={handleScrollToInventory} />

      {/* Main Showroom Inventory Section */}
      <main ref={inventoryRef} className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* Section Title Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C5A059] uppercase tracking-wider mb-1">
              <Flame className="w-4 h-4 text-[#C5A059]" />
              <span>معرض السيارات المتاحة للبيع الفوري</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1F2421] font-tajawal">
              أسطول أبيكس الفاخر
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-[#5C625E] font-medium max-w-md">
            استعرض خياراتنا المنتقاة بعناية. اضغط على أي سيارة للاطلاع على صورها بزوايا مختلفة وإرسال طلب المعاينة عبر واتساب.
          </p>
        </div>

        {/* Custom Interactive Filter Bar (No native select elements) */}
        <FilterBar
          selectedMake={selectedMake}
          setSelectedMake={setSelectedMake}
          selectedYear={selectedYear}
          setSelectedYear={setSelectedYear}
          selectedFuel={selectedFuel}
          setSelectedFuel={setSelectedFuel}
          maxPrice={maxPrice}
          setMaxPrice={setMaxPrice}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onReset={handleResetFilters}
          totalResults={filteredCars.length}
        />

        {/* Cars Grid */}
        <CarGrid
          cars={filteredCars}
          onSelectCar={(car) => setActiveCarModal(car)}
          onResetFilters={handleResetFilters}
        />

      </main>

      {/* Car Detail Interactive Modal View */}
      <CarDetailModal
        car={activeCarModal}
        onClose={() => setActiveCarModal(null)}
      />

      {/* Luxury Footer */}
      <Footer />

    </div>
  );
}
