import type { Metadata } from "next";
import { Home, Building2, Zap, Wrench, CheckCircle } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Services — Solaris Energy",
  description:
    "Residential, commercial, and industrial solar panel installation and maintenance in Bangladesh.",
};

const services = [
  {
    id: "residential",
    icon: Home,
    title: "Residential Solar",
    description:
      "Rooftop solar systems for homes across Bangladesh. Reduce your electricity bill by up to 70% with a custom-designed system.",
    features: [
      "Free site assessment",
      "Custom rooftop design",
      "Grid-tied and hybrid options",
      "Net metering setup",
      "25-year panel warranty",
      "Real-time monitoring app",
    ],
  },
  {
    id: "commercial",
    icon: Building2,
    title: "Commercial Solar",
    description:
      "Large-scale solar for offices, shopping centers, hotels, and commercial buildings. Maximize self-consumption and reduce operational costs.",
    features: [
      "Load profile analysis",
      "Rooftop and ground-mount options",
      "Battery storage integration",
      "Grid interconnection support",
      "ROI-focused design",
      "Ongoing maintenance plans",
    ],
  },
  {
    id: "industrial",
    icon: Zap,
    title: "Industrial Solar",
    description:
      "High-capacity solar for factories, textile mills, ceramic plants, and heavy industry. Meet ESG targets and cut energy costs.",
    features: [
      "Megawatt-scale design",
      "Process-specific energy modeling",
      "Power purchase agreements",
      "Captive power plant setup",
      "Carbon credit guidance",
      "Dedicated project manager",
    ],
  },
  {
    id: "maintenance",
    icon: Wrench,
    title: "Maintenance & Monitoring",
    description:
      "Keep your solar system performing at peak efficiency. Professional cleaning, repair, and 24/7 monitoring.",
    features: [
      "Panel cleaning services",
      "Inverter maintenance",
      "Performance monitoring",
      "Fault diagnosis and repair",
      "Warranty claims support",
      "Annual health checkups",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-solar">
            Our Services
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Solar Solutions for Every Need
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-navy-400">
            From homes to factories, we design, install, and maintain solar
            systems optimized for Bangladesh.
          </p>
        </FadeIn>

        <div className="mt-16 space-y-24">
          {services.map((service, i) => (
            <FadeIn key={service.id}>
              <div
                id={service.id}
                className="scroll-mt-24 rounded-xl border border-white/5 bg-white/[0.02] p-8 lg:p-12"
              >
                <div className="grid gap-8 lg:grid-cols-2">
                  <div>
                    <service.icon className="h-12 w-12 text-solar" />
                    <h2 className="mt-4 text-2xl font-bold text-white">
                      {service.title}
                    </h2>
                    <p className="mt-4 text-navy-400">{service.description}</p>
                    <div className="mt-6">
                      <Button href="/contact">Get Free Quote</Button>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-navy-500">
                      What&apos;s Included
                    </h3>
                    <ul className="mt-4 space-y-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-solar" />
                          <span className="text-navy-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}
