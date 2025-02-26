"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import ServiceFilter from "@/components/services/ServiceFilter";
import ServiceGrid from "@/components/services/ServiceGrid";
import MainNav from "@/components/MainNav";
import { getFilteredServices } from "@/lib/services";

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredServices = getFilteredServices(activeCategory);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
  };

  return (
    <>
      <MainNav />
      <main className="min-h-screen pt-8 pb-20">
        <motion.section
          className="py-16 md:py-24 relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/services/service-1.png"
              alt="Healthcare services"
              fill
              className="object-cover "
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, 80vw"
              priority
            />
            <div className="absolute inset-0 "></div>
          </div>
          <div className="container mx-auto px-4 text-center">
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <span className="text-primary">It Starts Here</span>
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl font-semibold text-white drop-shadow-lg max-w-2xl mx-auto"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Comprehensive healthcare solutions tailored to your needs
            </motion.p>
          </div>
        </motion.section>
        <Separator className="mx-auto" />

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="md:col-span-1">
                <ServiceFilter
                  activeCategory={activeCategory}
                  onCategoryChange={handleCategoryChange}
                  filteredServicesCount={filteredServices.length}
                />
              </div>

              <div className="md:col-span-3">
                <ServiceGrid services={filteredServices} />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
