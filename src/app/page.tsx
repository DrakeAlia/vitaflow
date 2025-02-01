"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import { Clock, Heart, Beaker, ArrowRight, Star, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "@/components/ui/hover-card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
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
      features: ["24/7 Support", "Quick Refills", "Expert Advice"],
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Quick Turnaround",
      description: "Fast and accurate prescription filling when you need it",
      image: "/images/programs/service-2.png",
      features: ["Same Day Service", "Online Tracking", "SMS Updates"],
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Wellness Programs",
      description: "Personalized health and wellness consultation programs",
      image: "/images/programs/service-3.png",
      features: ["Custom Plans", "Regular Check-ins", "Progress Tracking"],
    },
  ];

  return (
    <>
      <MainNav />
      <main className="flex flex-col min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] md:min-h-screen grid grid-cols-1 md:grid-cols-2">
          <motion.div
            className="relative h-[50vh] md:h-full order-2 md:order-1 bg-muted"
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
          </motion.div>

          <motion.div
            className="relative flex items-center p-6 md:p-16 bg-background order-1 md:order-2"
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
                <Badge className="mb-4" variant="secondary">
                  Trusted Healthcare Partner
                </Badge>
                <motion.h1
                  className="text-3xl md:text-5xl font-bold text-foreground mb-4 md:mb-6"
                  variants={fadeInSlideUp}
                >
                  Your Health Journey{" "}
                  <span className="text-primary">Starts Here</span>
                </motion.h1>
                <motion.p
                  className="text-lg md:text-xl text-muted-foreground mb-6 md:mb-8"
                  variants={fadeInSlideUp}
                >
                  Experience modern healthcare solutions with personalized
                  service and expert care.
                </motion.p>
                <motion.div
                  className="flex flex-col sm:flex-row gap-4"
                  variants={fadeInSlideUp}
                >
                  <Button size="lg" className="w-full h-12 text-lg">
                    Book Consultation
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full h-12 text-lg group"
                  >
                    View Services
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Statistics Section */}
        <motion.section
          className="py-12 md:py-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-foreground">Our Impact</h2>
              <Separator className="my-4 mx-auto w-16" />
            </div>
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
              variants={staggerChildren}
            >
              {[
                {
                  number: "15+",
                  label: "Years Experience",
                  icon: <Star className="w-5 h-5" />,
                },
                {
                  number: "50k+",
                  label: "Happy Customers",
                  icon: <Users className="w-5 h-5" />,
                },
                {
                  number: "24/7",
                  label: "Support Available",
                  icon: <Clock className="w-5 h-5" />,
                },
                {
                  number: "100%",
                  label: "Satisfaction Rate",
                  icon: <Heart className="w-5 h-5" />,
                },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center p-6 bg-card rounded-lg border shadow-sm"
                  variants={fadeInSlideUp}
                >
                  <div className="text-primary mb-3">{stat.icon}</div>
                  <h3 className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    {stat.number}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Services Grid */}
        <motion.section
          className="py-12 md:py-20 bg-muted/30"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12 md:mb-16"
              variants={fadeInSlideUp}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Our Services
              </h2>
              <Separator className="my-4 mx-auto w-16" />
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
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
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <Card className="h-full overflow-hidden">
                        <div className="relative h-48 w-full bg-muted">
                          <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <CardHeader>
                          <div className="mb-4 md:mb-6 text-primary group-hover:scale-110 transition-transform">
                            {service.icon}
                          </div>
                          <h3 className="text-xl md:text-2xl font-semibold text-card-foreground">
                            {service.title}
                          </h3>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground">
                            {service.description}
                          </p>
                        </CardContent>
                        <CardFooter>
                          <Button variant="ghost" className="w-full group">
                            Learn More
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </CardFooter>
                      </Card>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80">
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold">
                          {service.title} Features:
                        </h4>
                        <ul className="text-sm space-y-1">
                          {service.features.map((feature, i) => (
                            <li key={i} className="flex items-center">
                              <ArrowRight className="mr-2 h-3 w-3" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Consultation Section */}
        <section className="py-12 md:py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="order-2 md:order-1"
              >
                <Badge variant="outline" className="mb-4">
                  Professional Care
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-foreground">
                  Expert Consultation
                </h2>
                <Separator className="my-4" />
                <Tabs defaultValue="consultation" className="w-full mb-6">
                  <TabsList>
                    <TabsTrigger value="consultation">Consultation</TabsTrigger>
                    <TabsTrigger value="process">Process</TabsTrigger>
                  </TabsList>
                  <TabsContent value="consultation">
                    <p className="text-lg text-muted-foreground mb-6">
                      Our experienced pharmacists provide personalized
                      consultation to help you understand your medications and
                      improve your health outcomes.
                    </p>
                  </TabsContent>
                  <TabsContent value="process">
                    <p className="text-lg text-muted-foreground mb-6">
                      Book an appointment, meet with our experts, and receive a
                      personalized care plan tailored to your needs.
                    </p>
                  </TabsContent>
                </Tabs>
                <Button
                  size="lg"
                  className="w-full sm:w-auto h-12 text-lg group"
                >
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative h-64 md:h-96 order-1 md:order-2 rounded-lg overflow-hidden bg-muted"
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