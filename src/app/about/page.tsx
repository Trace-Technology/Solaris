import type { Metadata } from "next";
import { Sun, Target, Users, Award } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "About — Solaris Energy",
  description:
    "Solaris Energy is a leading solar company in Bangladesh. We make clean energy accessible for homes and businesses.",
};

const values = [
  {
    icon: Target,
    title: "Mission",
    description:
      "Accelerate Bangladesh transition to clean energy. Make solar accessible and affordable for every home and business.",
  },
  {
    icon: Users,
    title: "Community",
    description:
      "Empower local communities through job creation, training, and reliable energy solutions.",
  },
  {
    icon: Award,
    title: "Quality",
    description:
      "Engineer-certified designs, Tier-1 panels, and certified installation teams. No shortcuts.",
  },
];

export default function AboutPage() {
  return (
    <div className="py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-solar">
            About Us
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Powering Bangladesh
            <br />
            <span className="text-solar">With Clean Energy</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-navy-400">
            Solaris Energy is a Bangladesh-based solar company. We design,
            install, and maintain solar systems for homes, businesses, and
            industries across the country.
          </p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="mt-16 grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-white">Our Story</h2>
              <p className="mt-4 text-navy-400 leading-relaxed">
                Bangladesh has abundant sunshine — over 300 sunny days per year.
                Yet millions face unreliable grid power and rising electricity
                costs. Solaris Energy was founded to bridge this gap.
              </p>
              <p className="mt-4 text-navy-400 leading-relaxed">
                We combine international solar expertise with deep local
                knowledge. Every system we install is engineered for Bangladesh
                climate, grid conditions, and building standards.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Why Bangladesh</h2>
              <div className="mt-4 space-y-4">
                {[
                  "300+ sunny days per year",
                  "Rising electricity tariffs",
                  "Government net metering policy",
                  "Growing industrial energy demand",
                  "Abundant rooftop space",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <Sun className="h-5 w-5 shrink-0 text-solar" />
                    <span className="text-navy-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="mt-24">
            <h2 className="text-2xl font-bold text-white">Our Values</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="rounded-xl border border-white/5 bg-white/[0.02] p-6"
                >
                  <v.icon className="h-10 w-10 text-solar" />
                  <h3 className="mt-4 text-lg font-semibold text-white">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-sm text-navy-400">{v.description}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
