"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Heart, Beaker } from "lucide-react";
import MainNav from "@/components/MainNav";

const HomePage = () => {
  const fadeInSlideUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const services = [
    {
      icon: <Beaker className="w-8 h-8" />,
      title: "Prescription Services",
      description:
        "Expert medication management with professional consultation",
      image: "/images/programs/service-1.png",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Quick Turnaround",
      description: "Fast and accurate prescription filling when you need it",
      image: "/images/programs/service-2.png",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Wellness Programs",
      description: "Personalized health and wellness consultation programs",
      image: "/images/programs/service-3.png",
    },
  ];

  return (
    <>
      <MainNav />
      <main className="flex flex-col min-h-screen pt-16">
        {/* Mobile-First Hero Section */}
        <section className="relative min-h-[90vh] md:min-h-screen grid grid-cols-1 md:grid-cols-2 pt-16 md:pt-0">
          <motion.div
            className="relative h-[50vh] md:h-full bg-teal-500 order-2 md:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/images/hero/storefront-1.png"
              alt="Modern pharmacy interior"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0" />
          </motion.div>

          <motion.div
            className="relative flex items-center p-6 md:p-16 bg-white order-1 md:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="w-full max-w-xl mx-auto">
              <motion.div
                variants={staggerChildren}
                initial="hidden"
                animate="visible"
              >
                <motion.h1
                  className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6"
                  variants={fadeInSlideUp}
                >
                  Your Health Journey{" "}
                  <span className="text-teal-600">Starts Here</span>
                </motion.h1>
                <motion.p
                  className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8"
                  variants={fadeInSlideUp}
                >
                  Experience modern healthcare solutions with personalized
                  service and expert care.
                </motion.p>
                <motion.div
                  className="flex flex-col sm:flex-row gap-4"
                  variants={fadeInSlideUp}
                >
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white h-14 text-lg"
                  >
                    Book Consultation
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto border-teal-600 text-teal-600 hover:bg-teal-50"
                  >
                    View Services
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Responsive Statistics Section */}
        <motion.section
          className="py-12 md:py-16 bg-gradient-to-r from-teal-50 to-orange-50 dark:from-teal-900/20 dark:to-orange-900/20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="container mx-auto px-4">
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
              variants={staggerChildren}
            >
              {[
                { number: "15+", label: "Years Experience" },
                { number: "50k+", label: "Happy Customers" },
                { number: "24/7", label: "Support Available" },
                { number: "100%", label: "Satisfaction Rate" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm"
                  variants={fadeInSlideUp}
                >
                  <h3 className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">
                    {stat.number}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Responsive Services Grid */}
        <motion.section
          className="py-12 md:py-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12 md:mb-16"
              variants={fadeInSlideUp}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                Our Services
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                Comprehensive healthcare solutions for your wellbeing
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
              variants={staggerChildren}
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  variants={fadeInSlideUp}
                  whileHover={{ y: -10 }}
                  className="relative group"
                >
                  <Card className="h-full overflow-hidden border-none shadow-lg dark:bg-gray-800">
                    <div className="relative h-48 w-full">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-6 md:p-8">
                      <div className="mb-4 md:mb-6 text-teal-600 group-hover:scale-110 transition-transform">
                        {service.icon}
                      </div>
                      <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-gray-900">
                        {service.title}
                      </h3>
                      <p className="text-gray-600">{service.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Responsive Consultation Section */}
        <section className="py-12 md:py-20 bg-gradient-to-br from-teal-50 via-white to-orange-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="order-2 md:order-1"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-gray-900">
                  Expert Consultation
                </h2>
                <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8">
                  Our experienced pharmacists provide personalized consultation
                  to help you understand your medications and improve your
                  health outcomes.
                </p>
                <Button className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white">
                  Schedule Consultation
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative h-64 md:h-96 order-1 md:order-2 rounded-lg overflow-hidden shadow-xl"
              >
                <Image
                  src="/images/testimonials/staff-1.png"
                  alt="Pharmacist consultation"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default HomePage;
