"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import MainNav from "@/components/MainNav";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
  // Form submission handler
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Add form submission logic here
    console.log("Form submitted");
  };

  return (
    <>
      <MainNav />
      <main className="min-h-screen pt-20 pb-20">
        <motion.section
          className="py-16 md:py-24 relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/contact/contact-hero.png"
              alt="Contact VitaFlow"
              fill
              className="object-cover opacity-50"
              priority
            />
            <div className="absolute inset-0"></div>
          </div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <Badge variant="outline" className="mb-4">
              Get In Touch
            </Badge>
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-4 text-foreground drop-shadow-lg"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Contact <span className="text-primary">Us</span>
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              We&apos;re here to answer your questions and provide support
            </motion.p>
          </div>
        </motion.section>
        <Separator className="mx-auto" />

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Contact Form */}
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <Card>
                  <CardHeader>
                    <h2 className="text-2xl font-bold">Send Us a Message</h2>
                    <p className="text-muted-foreground">
                      Fill out the form and we&apos;ll get back to you shortly
                    </p>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label
                            htmlFor="firstName"
                            className="text-sm font-medium"
                          >
                            First Name
                          </label>
                          <Input id="firstName" placeholder="First Name" />
                        </div>
                        <div className="space-y-2">
                          <label
                            htmlFor="lastName"
                            className="text-sm font-medium"
                          >
                            Last Name
                          </label>
                          <Input id="lastName" placeholder="Last Name" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your@email.com"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium">
                          Phone (Optional)
                        </label>
                        <Input id="phone" placeholder="Your phone number" />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="message"
                          className="text-sm font-medium"
                        >
                          Message
                        </label>
                        <Textarea
                          id="message"
                          placeholder="How can we help you?"
                          rows={5}
                        />
                      </div>
                      <Button type="submit" className="w-full">
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="space-y-6"
              >
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <MapPin className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h3 className="font-medium">Our Location</h3>
                        <p className="text-muted-foreground">
                          123 Health Avenue, San Francisco, CA 94103
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <Phone className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h3 className="font-medium">Phone</h3>
                        <p className="text-muted-foreground">(555) 123-4567</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <Mail className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h3 className="font-medium">Email</h3>
                        <p className="text-muted-foreground">
                          info@vitaflow.com
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <Clock className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h3 className="font-medium">Hours of Operation</h3>
                        <p className="text-muted-foreground">
                          Monday - Friday: 8:00 AM - 8:00 PM
                        </p>
                        <p className="text-muted-foreground">
                          Saturday: 9:00 AM - 6:00 PM
                        </p>
                        <p className="text-muted-foreground">
                          Sunday: 10:00 AM - 4:00 PM
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* You could add a map section here if desired */}
      </main>
    </>
  );
}
