"use client";

import React, { useEffect, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { MoonIcon, SunIcon, Menu, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import BookingPopover from "@/components/BookingPopover";

type MenuItem = {
  label: string;
  href: string;
};

interface NavItemProps {
  href: string;
  children: React.ReactNode;
  mobile?: boolean;
}

const menuItems: MenuItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const NavItem = ({ href, children, mobile }: NavItemProps) => (
  <NavigationMenuItem>
    <Button
      variant="ghost"
      className={`w-full justify-start font-medium hover:text-primary transition-colors
        ${mobile ? "text-lg p-4" : "px-3 py-2 hover:bg-transparent"}`}
      asChild
    >
      <NavigationMenuLink href={href}>{children}</NavigationMenuLink>
    </Button>
  </NavigationMenuItem>
);

<BookingPopover buttonClassName="w-full" />;

const MobileNav = () => (
  <Sheet>
    <SheetTrigger asChild>
      <Button variant="ghost" size="icon" className="md:hidden">
        <Menu className="h-5 w-5" />
      </Button>
    </SheetTrigger>
    <SheetContent side="right" className="p-0">
      <div className="flex flex-col h-full">
        <SheetHeader className="p-4 border-b">
          <div className="flex items-center justify-between">
            <SheetTitle className="text-xl font-bold text-primary">
              VitaFlow
            </SheetTitle>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              asChild
            ></Button>
          </div>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto">
          <nav className="p-4">
            <NavigationMenu orientation="vertical">
              <NavigationMenuList className="flex flex-col">
                {menuItems.map((item) => (
                  <NavItem key={item.label} href={item.href} mobile>
                    {item.label}
                  </NavItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </nav>
        </div>

        <div className="p-4 border-t space-y-4">
          <BookingPopover />
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Phone className="h-4 w-4" />
            <span>24/7 Support</span>
          </div>
        </div>
      </div>
    </SheetContent>
  </Sheet>
);

const MainNav = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <header className="fixed w-full top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <h1 className="text-2xl font-bold text-primary cursor-pointer">
              VitaFlow
            </h1>

            <NavigationMenu className="hidden md:block">
              <NavigationMenuList className="flex gap-2">
                {menuItems.map((item) => (
                  <NavItem key={item.label} href={item.href}>
                    {item.label}
                  </NavItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full"
            >
              {theme === "dark" ? (
                <SunIcon className="h-5 w-5" />
              ) : (
                <MoonIcon className="h-5 w-5" />
              )}
            </Button>

            <div className="hidden md:block">
              <BookingPopover />
            </div>

            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainNav;
