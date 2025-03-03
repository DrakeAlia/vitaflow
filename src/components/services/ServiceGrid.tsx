"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Service } from "@/lib/services";

interface ServiceGridProps {
  services: Service[];
}

const ServiceGrid = ({ services }: ServiceGridProps) => {
  const serviceRows = [];
  for (let i = 0; i < services.length; i += 2) {
    serviceRows.push(services.slice(i, i + 2));
  }

  return (
    <div className="space-y-8">
      {serviceRows.map((row, rowIndex) => (
        <div
          key={`row-${rowIndex}`}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {row.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: (rowIndex * 2 + index) * 0.1,
                duration: 0.5,
              }}
              exit={{ opacity: 0, y: -20 }}
              className="group h-full"
            >
              <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 border border-muted/40 flex flex-col">
                <div className="relative h-48 w-full from-primary/10 to-secondary/10">
                  <Image
                    src={
                      service.image || `/images/services/${service.slug}.png`
                    }
                    alt={service.title}
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, 80vw"
                    fill
                    priority={rowIndex === 0 && index === 0}
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="backdrop-blur-sm">
                      {service.category}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center text-foreground rounded-full px-2 py-1 text-xs backdrop-blur-sm">
                      <Clock className="w-3 h-3 mr-1" />
                      <span>{service.duration}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col flex-grow">
                  <CardHeader>
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                  </CardHeader>

                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground line-clamp-3 h-[72px]">
                      {service.description}
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <p className="text-lg font-semibold text-primary">
                        ${service.price}
                      </p>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Clock className="w-3 h-3 mr-1" />
                        <span>{service.duration}</span>
                      </div>
                    </div>
                  </CardContent>

                  <CardFooter className="mt-auto">
                    <Link
                      href={`/services/${service.slug || service.id}`}
                      className="w-full"
                    >
                      <Button className="w-full group hover:from-primary/90 hover:to-primary">
                        Book Now
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardFooter>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ServiceGrid;
