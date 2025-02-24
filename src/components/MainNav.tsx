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
import { usePathname } from "next/navigation";
import Link from "next/link";
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
  active?: boolean;
}

const menuItems: MenuItem[] = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const NavItem = ({ href, children, mobile, active }: NavItemProps) => (
  <NavigationMenuItem>
    <Button
      variant="ghost"
      className={`w-full justify-start font-medium transition-colors
        ${mobile ? "text-lg p-4" : "px-3 py-2 hover:bg-transparent"}
        ${active ? "text-primary" : "hover:text-primary"}`}
      asChild
    >
      <NavigationMenuLink href={href}>{children}</NavigationMenuLink>
    </Button>
  </NavigationMenuItem>
);

const MobileNav = ({ currentPath }: { currentPath: string }) => (
  <Sheet>
    <SheetTrigger asChild>
      <Button variant="ghost" size="icon" className="md:hidden">
        <Menu className="h-5 w-5" />
        <span className="sr-only">Open menu</span>
      </Button>
    </SheetTrigger>
    <SheetContent side="right" className="p-0 flex flex-col">
      <div className="flex flex-col h-full">
        <SheetHeader className="p-4 border-b flex-none">
          <div className="flex items-center justify-between">
            <SheetTitle>
              <Link href="/" className="text-xl font-bold text-primary">
                VitaFlow
              </Link>
            </SheetTitle>
          </div>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto">
          <nav className="p-4">
            <NavigationMenu orientation="vertical">
              <NavigationMenuList className="flex flex-col">
                {menuItems.map((item) => (
                  <NavItem
                    key={item.label}
                    href={item.href}
                    mobile
                    active={currentPath === item.href}
                  >
                    {item.label}
                  </NavItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </nav>
        </div>

        <div className="p-4 mt-auto border-t">
          <BookingPopover buttonClassName="w-full mb-4" />
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
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <header className="fixed w-full top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <Link
              href="/"
              className="text-2xl font-bold text-primary hover:opacity-90 transition-opacity"
            >
              VitaFlow
            </Link>

            <NavigationMenu className="hidden md:block">
              <NavigationMenuList className="flex gap-2">
                {menuItems.map((item) => (
                  <NavItem
                    key={item.label}
                    href={item.href}
                    active={pathname === item.href}
                  >
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
              <span className="sr-only">Toggle theme</span>
            </Button>

            <div className="hidden md:block">
              <BookingPopover />
            </div>

            <MobileNav currentPath={pathname} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainNav;
