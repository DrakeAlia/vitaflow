"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface ServiceFilterProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  filteredServicesCount: number;
}

const ServiceFilter = ({
  activeCategory,
  onCategoryChange,
  filteredServicesCount,
}: ServiceFilterProps) => {
  const categories = [
    { value: "all", label: "All Services" },
    { value: "prescriptions", label: "Prescriptions" },
    { value: "consultations", label: "Consultations" },
    { value: "wellness", label: "Wellness Programs" },
  ];

  return (
    <>
      <Card className="sticky top-24 border overflow-hidden">
        <div className="absolute inset-0 z-0"></div>
        <CardContent className="p-6 relative z-10">
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="h-6 w-1 bg-primary rounded-full"></div>
              <h3 className="text-lg font-semibold">Filter by Category</h3>
            </div>

            <RadioGroup
              defaultValue={activeCategory}
              onValueChange={onCategoryChange}
              className="space-y-4"
            >
              {categories.map((category) => (
                <div
                  key={category.value}
                  className="flex items-center space-x-3 p-2 rounded-md hover:bg-accent/50 transition-colors"
                >
                  <RadioGroupItem
                    value={category.value}
                    id={category.value}
                    className="text-primary"
                  />
                  <Label
                    htmlFor={category.value}
                    className="text-sm font-medium w-full cursor-pointer"
                  >
                    {category.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        </CardContent>
      </Card>

      <Card className="sticky top-[calc(24rem+1.5rem)] border bg-gradient-to-br from-background to-muted/10">
        <CardContent className="p-6">
          <h4 className="text-md font-medium mb-4">At a Glance</h4>
          <div className="space-y-3">
            <div className="flex justify-between items-center text-sm">
              <span className="text-muted-foreground">Available Services</span>
              <span className="font-semibold">{filteredServicesCount}</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-muted-foreground">Price Range</span>
              <span className="font-semibold">$30-$50</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-muted-foreground">Booking Available</span>
              <span className="font-semibold text-green-500">Yes</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default ServiceFilter;
