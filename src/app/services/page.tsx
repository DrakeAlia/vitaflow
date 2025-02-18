"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
// import { Separator } from "@/components/ui/separator";
import ServiceFilter from "@/components/services/ServiceFilter";
import ServiceGrid from "@/components/services/ServiceGrid";
import MainNav from "@/components/MainNav";

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
  };

  return (
    <>
      <MainNav />
      <main className="min-h-screen pb-20">
        <motion.section
          className="py-16 md:py-24"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="container mx-auto px-4 text-center">
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Our Services
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Comprehensive healthcare solutions tailored to your needs
            </motion.p>
          </div>
        </motion.section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="md:col-span-1">
                <ServiceFilter
                  activeCategory={activeCategory}
                  onCategoryChange={handleCategoryChange}
                />
              </div>

              <div className="md:col-span-3">
                <ServiceGrid category={activeCategory} />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
