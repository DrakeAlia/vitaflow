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

interface ServiceGridProps {
  category: string;
}

const ServiceGrid = ({ category }: ServiceGridProps) => {
  // This would typically come from an API or database
  const services = [
    {
      id: "1",
      title: "Medication Review",
      description: "Comprehensive review of your current medications",
      category: "prescriptions",
      price: 50,
      duration: "30 min",
    },
    {
      id: "2",
      title: "Blood Pressure Check",
      description: "Check your blood pressure and provide advice",
      category: "vitals",
      price: 30,
      duration: "15 min",
    },
    {
      id: "3",
      title: "Flu Vaccination",
      description: "Protect yourself from the flu this season",
      category: "vaccinations",
      price: 40,
      duration: "20 min",
    },
    {
      id: "4",
      title: "Cholesterol Test",
      description: "Check your cholesterol levels and provide advice",
      category: "vitals",
      price: 40,
      duration: "20 min",
    },
    {
      id: "5",
      title: "Diabetes Check",
      description: "Check your blood sugar levels and provide advice",
      category: "vitals",
      price: 40,
      duration: "20 min",
    },
    {
      id: "6",
      title: "Weight Management",
      description: "Comprehensive review of your weight and provide advice",
      category: "lifestyle",
      price: 50,
      duration: "30 min",
    },
    {
      id: "7",
      title: "Smoking Cessation",
      description: "Support and advice to help you quit smoking",
      category: "lifestyle",
      price: 50,
      duration: "30 min",
    },
    {
      id: "8",
      title: "Asthma Review",
      description: "Comprehensive review of your asthma and provide advice",
      category: "chronic",
      price: 50,
      duration: "30 min",
    },
    {
      id: "9",
      title: "Diabetes Review",
      description: "Comprehensive review of your diabetes and provide advice",
      category: "chronic",
      price: 50,
      duration: "30 min",
    },
    {
      id: "10",
      title: "Blood Pressure Review",
      description:
        "Comprehensive review of your blood pressure and provide advice",
      category: "chronic",
      price: 50,
      duration: "30 min",
    },
  ];

  const filteredServices =
    category === "all"
      ? services
      : services.filter((service) => service.category === category);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {filteredServices.map((service) => (
        <motion.div
          key={service.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="group"
        >
          <Card className="h-full hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <Badge variant="secondary">{service.category}</Badge>
                <div className="flex items-center text-muted-foreground">
                  <Clock className="w-4 h-4 mr-1" />
                  <span className="text-sm">{service.duration}</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold">{service.title}</h3>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{service.description}</p>
              <p className="mt-4 text-lg font-semibold">${service.price}</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full group">
                Book Now
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export default ServiceGrid;
