"use client";

import React from "react";
import Link from "next/link";
import { Heart, X, Mail, Linkedin, Github, ArrowUp } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-t mt-auto"
      itemScope
      itemType="http://schema.org/Organization"
    >
      <div className="container mx-auto px-4 py-6 md:py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="space-y-4">
            <Link
              href="/"
              className="text-xl font-bold text-primary hover:opacity-90 transition-opacity"
            >
              VitaFlow
            </Link>
            <p className="text-sm text-muted-foreground">
              Your trusted healthcare partner, providing quality pharmaceutical
              services and wellness solutions since 2009.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { label: "Services", href: "/services" },
                { label: "About", href: "/about" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Contact
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span itemProp="email">info@vitaflow.com</span>
              </li>
              <li
                itemProp="address"
                itemScope
                itemType="http://schema.org/PostalAddress"
              >
                <span itemProp="streetAddress">123 Health Avenue</span>
              </li>
              <li>
                <span itemProp="addressLocality">Wellness City</span>,{" "}
                <span itemProp="postalCode">WC 12345</span>
              </li>
              <li className="font-medium">24/7 Support Available</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Follow Us
            </h3>
            <div className="flex space-x-4">
              {[
                {
                  icon: <X className="h-5 w-5" />,
                  href: "https://x.com/drake___alia",
                  label: "Twitter/X",
                },
                {
                  icon: <Github className="h-5 w-5" />,
                  href: "https://github.com/DrakeAlia",
                  label: "GitHub Profile",
                },
                {
                  icon: <Linkedin className="h-5 w-5" />,
                  href: "https://www.linkedin.com/in/drake-alia/",
                  label: "LinkedIn",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <span className="sr-only">{social.label}</span>
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Back to top button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 p-2 bg-primary text-primary-foreground rounded-full shadow-md hover:bg-primary/90 transition-all duration-200 md:opacity-80 hover:opacity-100"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-5 w-5" />
        </button>

        {/* Bottom Bar */}
        <div className="border-t mt-8 pt-6 flex flex-col md:flex-row items-center justify-between">
          <p
            className="text-sm text-muted-foreground mb-4 md:mb-0"
            itemScope
            itemType="http://schema.org/Organization"
          >
            <span itemProp="name">© {currentYear} VitaFlow</span>. All rights
            reserved.
            <meta itemProp="url" content="https://vitaflow.com" />
          </p>
          <div className="flex items-center text-sm text-muted-foreground">
            <span>Built with</span>
            <Heart className="h-4 w-4 mx-1 text-red-500" />
            <span>by</span>
            <a
              href="https://github.com/DrakeAlia"
              target="_blank"
              rel="noreferrer"
              className="ml-1 font-medium underline text-primary underline-offset-4"
            >
              DrakeAlia
            </a>
            <span className="ml-2">·</span>
            <a
              href="https://github.com/DrakeAlia/vitaflow"
              target="_blank"
              rel="noreferrer"
              className="ml-2 font-medium underline text-primary underline-offset-4"
            >
              Source code
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
