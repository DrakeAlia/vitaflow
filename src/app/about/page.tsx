"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import MainNav from "@/components/MainNav";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface IconProps {
  className?: string;
}

export default function AboutPage() {
  return (
    <>
      <MainNav />
      <main className="min-h-screen pt-16 pb-20">
        {" "}
        <motion.section
          className="py-16 md:py-24 relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/storefront-1.png"
              alt="About our pharmacy"
              fill
              sizes="(max-width: 768px) 100vw, 300px"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 "></div>
          </div>
          <div className="container mx-auto px-4 text-center relative z-10">
            {/* <Badge variant="outline" className="mb-4">
              Our Story
            </Badge> */}
            <motion.h1
              className="text-4xl md:text-5xl text-white font-bold mb-4 "
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              About <span className="text-primary">VitaFlow</span>
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl font-semibold text-white max-w-2xl mx-auto"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Dedicated to your health and well-being for over 15 years
            </motion.p>
          </div>
        </motion.section>
        <Separator className="mx-auto" />
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <Badge variant="secondary" className="mb-2">
                  Est. 2009
                </Badge>
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <Tabs defaultValue="mission" className="w-full">
                  <TabsList className="mb-4">
                    <TabsTrigger value="mission">Mission</TabsTrigger>
                    <TabsTrigger value="vision">Vision</TabsTrigger>
                  </TabsList>
                  <TabsContent value="mission">
                    <p className="text-lg mb-4 text-muted-foreground">
                      At VitaFlow, our mission is to provide accessible,
                      personalized healthcare solutions that empower our
                      community to lead healthier lives. We believe in combining
                      modern pharmaceutical expertise with compassionate care.
                    </p>
                    <p className="text-lg mb-4 text-muted-foreground">
                      Founded in 2009, we&apos;ve grown from a small
                      neighborhood pharmacy to a comprehensive healthcare
                      provider serving thousands of patients across the region.
                    </p>
                  </TabsContent>
                  <TabsContent value="vision">
                    <p className="text-lg mb-4 text-muted-foreground">
                      Our vision is to revolutionize community healthcare by
                      creating a seamless experience that bridges traditional
                      pharmacy services with innovative health solutions.
                    </p>
                    <p className="text-lg mb-4 text-muted-foreground">
                      We aim to be the most trusted healthcare partner in every
                      community we serve, known for our expertise, compassion,
                      and commitment to preventative care.
                    </p>
                  </TabsContent>
                </Tabs>
              </motion.div>
              <motion.div
                className="relative h-96 rounded-lg overflow-hidden shadow-lg"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <Image
                  src="/images/team/meet-team.png"
                  alt="Our pharmacy team"
                  fill
                  sizes="(max-width: 768px) 100vw, 300px"
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>
        <Card className="max-w-2xl mx-auto my-8 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <blockquote className="text-xl italic font-semibold text-muted-foreground">
              &ldquo;Our goal is to make healthcare accessible, personalized,
              and effective for every member of our community.&rdquo;
            </blockquote>
            <div className="mt-4 text-right">
              <p className="text-sm font-medium">
                — Dr. Sarah Johnson, Lead Pharmacist
              </p>
            </div>
          </CardContent>
        </Card>
        <section className="py-16 ">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <motion.div
                className="p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h3 className="text-4xl font-bold text-primary mb-2">15+</h3>
                <p className="text-muted-foreground">Years of Service</p>
              </motion.div>
              <motion.div
                className="p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-4xl font-bold text-primary mb-2">5,000+</h3>
                <p className="text-muted-foreground">Happy Patients</p>
              </motion.div>
              <motion.div
                className="p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-4xl font-bold text-primary mb-2">12</h3>
                <p className="text-muted-foreground">Expert Staff</p>
              </motion.div>
              <motion.div
                className="p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h3 className="text-4xl font-bold text-primary mb-2">3</h3>
                <p className="text-muted-foreground">Locations</p>
              </motion.div>
            </div>
          </div>
        </section>
        <Separator className="mx-auto my-8" />
        <section className="py-12 ">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-2">
                What Drives Us
              </Badge>
              <h2 className="text-3xl font-bold">Our Values</h2>
              <Separator className="my-4 mx-auto w-16" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                >
                  <Card className="h-full">
                    <CardHeader>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                              <value.icon className="w-6 h-6 text-primary" />
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Core value of VitaFlow</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      <h3 className="text-xl font-semibold">{value.title}</h3>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <Badge variant="outline" className="mb-2">
                Our Journey
              </Badge>
              <h2 className="text-3xl font-bold">Timeline</h2>
              <Separator className="my-4 mx-auto w-16" />
            </div>
            <div className="max-w-xl mx-auto">
              {" "}
              <ScrollArea className="h-96 rounded border px-5 py-4">
                <div className="space-y-8 pr-4 pb-4 relative">
                  {/* Timeline vertical line */}
                  <div className="absolute left-3 top-0 bottom-0 w-[2px] bg-primary/20" />

                  {/* 2009 */}
                  <motion.div
                    className="pb-2 pl-10 relative hover:bg-accent/30 rounded-md transition-colors p-2 -ml-2"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    viewport={{ once: true }}
                  >
                    {/* Bullet point */}
                    <div className="absolute left-1 top-1 h-4 w-4 rounded-full bg-primary/20 flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                    </div>
                    <h4 className="text-md font-semibold text-primary">2009</h4>
                    <p className="text-sm text-muted-foreground">
                      VitaFlow was founded as a small community pharmacy.
                    </p>
                  </motion.div>

                  {/* 2012 */}
                  <motion.div
                    className="pb-2 pl-10 relative hover:bg-accent/30 rounded-md transition-colors p-2 -ml-2"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="absolute left-1 top-1 h-4 w-4 rounded-full bg-primary/20 flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                    </div>
                    <h4 className="text-md font-semibold text-primary">2012</h4>
                    <p className="text-sm text-muted-foreground">
                      Expanded services to include wellness consultations.
                    </p>
                  </motion.div>

                  {/* 2015 */}
                  <motion.div
                    className="pb-2 pl-10 relative hover:bg-accent/30 rounded-md transition-colors p-2 -ml-2"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="absolute left-1 top-1 h-4 w-4 rounded-full bg-primary/20 flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                    </div>
                    <h4 className="text-md font-semibold text-primary">2015</h4>
                    <p className="text-sm text-muted-foreground">
                      Opened our second location.
                    </p>
                  </motion.div>

                  {/* 2018 */}
                  <motion.div
                    className="pb-2 pl-10 relative hover:bg-accent/30 rounded-md transition-colors p-2 -ml-2"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <div className="absolute left-1 top-1 h-4 w-4 rounded-full bg-primary/20 flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                    </div>
                    <h4 className="text-md font-semibold text-primary">2018</h4>
                    <p className="text-sm text-muted-foreground">
                      Launched our digital health platform.
                    </p>
                  </motion.div>

                  {/* 2020 */}
                  <motion.div
                    className="pb-2 pl-10 relative hover:bg-accent/30 rounded-md transition-colors p-2 -ml-2"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <div className="absolute left-1 top-1 h-4 w-4 rounded-full bg-primary/20 flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                    </div>
                    <h4 className="text-md font-semibold text-primary">2020</h4>
                    <p className="text-sm text-muted-foreground">
                      Introduced virtual consultations and telehealth services.
                    </p>
                  </motion.div>

                  {/* 2023 */}
                  <motion.div
                    className="pb-2 pl-10 relative hover:bg-accent/30 rounded-md transition-colors p-2 -ml-2"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="absolute left-1 top-1 h-4 w-4 rounded-full bg-primary/20 flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                    </div>
                    <h4 className="text-md font-semibold text-primary">2023</h4>
                    <p className="text-sm text-muted-foreground">
                      Received regional award for healthcare excellence.
                    </p>
                  </motion.div>
                </div>
              </ScrollArea>
            </div>
          </div>
        </section>
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-2">
                Our Experts
              </Badge>
              <h2 className="text-3xl font-bold">Meet Our Team</h2>
              <Separator className="my-4 mx-auto w-16" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                >
                  <Card className="h-full overflow-hidden">
                    <CardContent className="p-4 text-center">
                      <HoverCard>
                        <HoverCardTrigger asChild>
                          <div className="relative w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden border-4 border-primary/20">
                            <Image
                              src={member.image}
                              alt={member.name}
                              fill
                              sizes="(max-width: 768px) 100vw, 300px"
                              className="object-cover"
                            />
                          </div>
                        </HoverCardTrigger>
                        <HoverCardContent className="w-80">
                          <div className="flex justify-between space-x-4">
                            <div>
                              <h4 className="text-sm font-semibold">
                                {member.name}
                              </h4>
                              <p className="text-sm">{member.description}</p>
                              <div className="flex items-center pt-2">
                                <span className="text-xs text-muted-foreground">
                                  Contact:{" "}
                                  {member.name.toLowerCase().replace(" ", ".")}
                                  @vitaflow.com
                                </span>
                              </div>
                            </div>
                          </div>
                        </HoverCardContent>
                      </HoverCard>

                      <h3 className="font-semibold mt-2">{member.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {member.role}
                      </p>
                      <div className="flex justify-center space-x-3 mt-2">
                        <button className="text-muted-foreground hover:text-primary transition-colors">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                            <rect x="2" y="9" width="4" height="12"></rect>
                            <circle cx="4" cy="4" r="2"></circle>
                          </svg>
                        </button>
                        <button className="text-muted-foreground hover:text-primary transition-colors">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                          </svg>
                        </button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-16 ">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Experience the VitaFlow Difference?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our team of healthcare professionals is ready to provide you with
              personalized care tailored to your needs.
            </p>
            <Link href="/services">
              <Button size="lg" className="rounded-full px-8">
                View Our Services
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Button>
            </Link>
          </div>
        </section>
        <Separator className="mx-auto my-8" />
        <section className="py-12 bg-muted/10">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="text-center mb-8">
              <Badge variant="outline" className="mb-2">
                FAQ
              </Badge>
              <h2 className="text-3xl font-bold">Common Questions</h2>
              <Separator className="my-4 mx-auto w-16" />
            </div>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  How long has VitaFlow been in business?
                </AccordionTrigger>
                <AccordionContent>
                  VitaFlow was founded in 2009 and has been serving the
                  community for over 15 years.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  What makes VitaFlow different?
                </AccordionTrigger>
                <AccordionContent>
                  Our commitment to personalized care, innovative health
                  solutions, and our team of highly qualified professionals sets
                  us apart.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  Do you offer online consultations?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, we provide secure virtual consultations with our
                  healthcare professionals for your convenience.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
      </main>
    </>
  );
}

// Sample data for values
const values = [
  {
    title: "Patient-Centered Care",
    description:
      "We put our patients first, tailoring our services to meet individual needs and ensuring the highest quality of care.",
    icon: ({ className }: IconProps) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className={className}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
        />
      </svg>
    ),
  },
  {
    title: "Excellence",
    description:
      "We strive for excellence in everything we do, from pharmaceutical services to customer interactions.",
    icon: ({ className }: IconProps) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className={className}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
        />
      </svg>
    ),
  },
  {
    title: "Innovation",
    description:
      "We embrace innovation and technology to improve healthcare delivery and patient outcomes.",
    icon: ({ className }: IconProps) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className={className}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
        />
      </svg>
    ),
  },
];

// Sample data for team members
const teamMembers = [
  {
    name: "Dr. Sarah Johnson",
    role: "Lead Pharmacist",
    description:
      "PharmD with 15+ years experience specializing in medication therapy management.",
    image: "/images/team/sarah-johnson.png",
  },
  {
    name: "Michael Chen",
    role: "Clinical Pharmacist",
    description:
      "Specializes in chronic disease management and patient education.",
    image: "/images/team/michael-chen.png",
  },
  {
    name: "Amara Patel",
    role: "Pharmacy Technician",
    description: "Certified technician with expertise in inventory management.",
    image: "/images/team/amara-patel.png",
  },
  {
    name: "James Wilson",
    role: "Health Consultant",
    description: "Nutritionist focused on integrative health approaches.",
    image: "/images/team/james-wilson.png",
  },
];
