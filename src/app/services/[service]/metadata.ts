import { Metadata } from "next";
import { getServiceData } from "@/lib/services";

interface Props {
  params: {
    service: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = getServiceData(params.service);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.title} | VitaFlow`,
    description: service.description,
  };
}
