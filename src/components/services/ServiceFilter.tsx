import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface ServiceFilterProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const ServiceFilter = ({
  activeCategory,
  onCategoryChange,
}: ServiceFilterProps) => {
  const categories = [
    { value: "all", label: "All Services" },
    { value: "prescriptions", label: "Prescriptions" },
    { value: "consultations", label: "Consultations" },
    { value: "wellness", label: "Wellness Programs" },
  ];

  return (
    <Card>
      <CardContent className="p-6">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Filter by Category</h3>
          <RadioGroup
            defaultValue={activeCategory}
            onValueChange={onCategoryChange}
          >
            <div className="space-y-3">
              {categories.map((category) => (
                <div
                  key={category.value}
                  className="flex items-center space-x-2"
                >
                  <RadioGroupItem
                    value={category.value}
                    id={category.value}
                    className="text-primary"
                  />
                  <Label
                    htmlFor={category.value}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {category.label}
                  </Label>
                </div>
              ))}
            </div>
          </RadioGroup>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceFilter;
