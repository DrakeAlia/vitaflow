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
  slug?: string;
}

export const services: Service[] = [
  {
    id: "prescription-services",
    title: "Prescription Services",
    slug: "prescription-services",
    description: "Expert medication management with professional consultation",
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
    image: "/images/services/prescription-services.png",
  },
  {
    id: "medication-review",
    title: "Medication Review",
    slug: "medication-review",
    description: "Comprehensive review of your current medications",
    longDescription:
      "Our medication review service provides a detailed assessment of all your prescriptions, supplements, and over-the-counter medications to ensure they work effectively together and align with your health goals.",
    category: "prescriptions",
    price: 50,
    duration: "30 min",
    features: [
      "Complete medication assessment",
      "Identification of potential interactions",
      "Personalized recommendations",
      "Written summary report",
    ],
    image: "/images/services/medication-review.png",
  },
  {
    id: "consultation-services",
    title: "Consultation Services",
    slug: "consultation-services",
    description: "Professional advice and guidance from healthcare experts",
    longDescription:
      "Our consultation services offer expert advice on a wide range of health topics, including chronic conditions, lifestyle changes, and preventive care. Book a consultation today to get started on your health journey.",
    category: "consultations",
    price: 75,
    duration: "45 min",
    features: [
      "Personalized health assessment",
      "Customized care plan",
      "Follow-up support",
      "Referral to specialists if needed",
    ],
    image: "/images/services/consultation-services.png",
  },
  {
    id: "health-assessment",
    title: "Health Assessment",
    slug: "health-assessment",
    description: "Comprehensive evaluation of your health status",
    longDescription:
      "Our health assessment service includes a detailed review of your medical history, lifestyle factors, and current health concerns to create a personalized care plan tailored to your needs.",
    category: "consultations",
    price: 75,
    duration: "45 min",
    features: [
      "Medical history review",
      "Lifestyle evaluation",
      "Risk factor analysis",
      "Health goal setting",
    ],
    image: "/images/services/health-assessment.png",
  },
  {
    id: "vaccination-services",
    title: "Vaccination Services",
    slug: "vaccination-services",
    description: "Protect yourself and your loved ones with our vaccination services",
    longDescription:
      "Our vaccination services offer a wide range of vaccines to protect against common diseases, including influenza, pneumonia, and shingles. Stay up to date on your immunizations with our convenient and affordable service.",
    category: "wellness",
    price: 35,
    duration: "20 min",
    features: [
      "Flu shots",
      "Pneumonia vaccines",
      "Shingles vaccines",
      "Travel immunizations",
    ],
    image: "/images/services/vaccination-services.png",
  },
  {
    id: "blood-pressure-screening",
    title: "Blood Pressure Screening",
    slug: "blood-pressure-screening",
    description: "Quick and painless assessment of your blood pressure levels",
    longDescription:
      "Our blood pressure screening service provides a simple and effective way to monitor your cardiovascular health. Regular screenings can help detect high blood pressure early and reduce your risk of heart disease and stroke.",
    category: "wellness",
    price: 25,
    duration: "15 min",
    features: [
      "Blood pressure measurement",
      "Heart health assessment",
      "Risk factor evaluation",
      "Lifestyle recommendations",
    ],
    image: "/images/services/blood-pressure-screening.png",
  },
];

// Get filtered services by category
export const getFilteredServices = (category: string) => {
  return category === "all"
    ? services
    : services.filter((service) => service.category === category);
};

// Get a single service by ID/slug
export const getServiceData = (serviceId: string): Service | undefined => {
  return services.find(
    (service) => service.id === serviceId || service.slug === serviceId
  );
};
