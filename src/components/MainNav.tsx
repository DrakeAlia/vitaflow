"use client";

import React, { useEffect, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { MoonIcon, SunIcon, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const NavItems = () => (
  <>
    <NavigationMenuLink className="px-3 py-2 hover:text-teal-600 dark:hover:text-teal-400">
      Home
    </NavigationMenuLink>
    <NavigationMenuLink className="px-3 py-2 hover:text-teal-600 dark:hover:text-teal-400">
      Services
    </NavigationMenuLink>
    <NavigationMenuLink className="px-3 py-2 hover:text-teal-600 dark:hover:text-teal-400">
      About
    </NavigationMenuLink>
    <NavigationMenuLink className="px-3 py-2 hover:text-teal-600 dark:hover:text-teal-400">
      Contact
    </NavigationMenuLink>
  </>
);

const MainNav = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <header className="fixed w-full top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <h1 className="text-2xl font-bold text-teal-600 dark:text-teal-400">
              VitaFlow
            </h1>
            {/* Desktop Navigation */}
            <NavigationMenu className="hidden md:block">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavItems />
                </NavigationMenuItem>
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

            {/* Book Now button - hidden on mobile */}
            <Button className="hidden md:block bg-orange-500 hover:bg-orange-600 text-white">
              Book Now
            </Button>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle className="text-left text-teal-600 dark:text-teal-400">
                    VitaFlow
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-4 mt-6">
                  <NavigationMenu
                    orientation="vertical"
                    className="flex flex-col gap-2"
                  >
                    <NavigationMenuList className="flex flex-col items-start gap-2">
                      <NavigationMenuItem className="w-full">
                        <Button
                          variant="ghost"
                          className="w-full justify-start"
                          asChild
                        >
                          <NavigationMenuLink>Home</NavigationMenuLink>
                        </Button>
                      </NavigationMenuItem>
                      <NavigationMenuItem className="w-full">
                        <Button
                          variant="ghost"
                          className="w-full justify-start"
                          asChild
                        >
                          <NavigationMenuLink>Services</NavigationMenuLink>
                        </Button>
                      </NavigationMenuItem>
                      <NavigationMenuItem className="w-full">
                        <Button
                          variant="ghost"
                          className="w-full justify-start"
                          asChild
                        >
                          <NavigationMenuLink>About</NavigationMenuLink>
                        </Button>
                      </NavigationMenuItem>
                      <NavigationMenuItem className="w-full">
                        <Button
                          variant="ghost"
                          className="w-full justify-start"
                          asChild
                        >
                          <NavigationMenuLink>Contact</NavigationMenuLink>
                        </Button>
                      </NavigationMenuItem>
                    </NavigationMenuList>
                  </NavigationMenu>
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white mt-4">
                    Book Now
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainNav;