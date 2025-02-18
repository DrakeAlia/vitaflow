import Image from "next/image";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Clock, ArrowLeft } from "lucide-react";
import { getServiceData } from "@/lib/services";
import BookingPopover from "@/components/BookingPopover";

export default function Page(props: { params: { service: string } }) {
  const { params } = props;
  const service = getServiceData(params.service);

  if (!service) {
    notFound();
  }

  return <ServiceContent service={service} />;
}

interface ServiceContentProps {
  service: NonNullable<ReturnType<typeof getServiceData>>;
}
function ServiceContent({ service }: ServiceContentProps) {
  return (
    <main className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Button
            variant="ghost"
            className="mb-6"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Services
          </Button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative h-64 md:h-full rounded-lg overflow-hidden">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-6">
              <div>
                <Badge className="mb-4">{service.category}</Badge>
                <h1 className="text-4xl font-bold mb-4">{service.title}</h1>
                <div className="flex items-center text-muted-foreground mb-4">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{service.duration}</span>
                </div>
                <Separator className="my-4" />
              </div>

              <div>
                <p className="text-lg text-muted-foreground mb-6">
                  {service.longDescription}
                </p>
                <h2 className="text-xl font-semibold mb-4">Features</h2>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <Card className="mt-8">
                <CardHeader>
                  <h3 className="text-2xl font-bold">${service.price}</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Professional consultation and service
                  </p>
                </CardContent>
                <CardFooter>
                  <BookingPopover
                    buttonText="Book Appointment"
                    buttonClassName="w-full"
                  />
                </CardFooter>
              </Card>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
