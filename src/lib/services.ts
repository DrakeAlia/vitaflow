export interface Service {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  category: string;
  price: number;
  duration: string;
  features: string[];
  image: string;
}

export const getServiceData = (serviceId: string): Service | undefined => {
  const services = {
    "prescription-services": {
      id: "prescription-services",
      title: "Prescription Services",
      description:
        "Expert medication management with professional consultation",
      longDescription:
        "Our comprehensive prescription services include medication review, dosage optimization, and ongoing monitoring to ensure the best outcomes for your health.",
      category: "prescriptions",
      price: 50,
      duration: "30 min",
      features: [
        "Medication review and optimization",
        "Drug interaction checks",
        "Prescription renewal service",
        "Medication synchronization",
      ],
      image: "/images/services/prescription-services.jpg",
    },
  };

  return services[serviceId as keyof typeof services];
};
