import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "How It Works — Solaris Energy",
  description:
    "Simple 4-step process from consultation to clean energy. We handle everything.",
};

const steps = [
  {
    step: "01",
    title: "Free Consultation",
    description:
      "Our solar consultant visits your property. We assess roof space, shading, and current electricity usage. Review your latest bill to size the system accurately.",
    timeline: "Day 1",
  },
  {
    step: "02",
    title: "Custom Design",
    description:
      "Engineering team creates a detailed system design optimized for your property. We present the proposal with pricing, savings projections, and financing options.",
    timeline: "Week 1-2",
  },
  {
    step: "03",
    title: "Permits & Installation",
    description:
      "We handle all permits, grid interconnection, and net metering paperwork. Certified technicians install your system with minimal disruption.",
    timeline: "Week 3-6",
  },
  {
    step: "04",
    title: "Activation & Support",
    description:
      "System goes live after final inspection. We set up your monitoring app. Ongoing performance tracking, warranty support, and maintenance available.",
    timeline: "Week 6-8",
  },
];

export default function HowItWorksPage() {
  return (
    <div className="py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-solar">
            Process
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            From Consultation to Clean Energy
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-navy-400">
            Simple 4-step process. We handle everything from design to
            installation. Most residential systems live in 6-8 weeks.
          </p>
        </FadeIn>

        <div className="mt-16 space-y-12">
          {steps.map((s, i) => (
            <FadeIn key={s.step} delay={i * 0.1}>
              <div className="grid gap-8 lg:grid-cols-[120px_1fr] lg:gap-16">
                <div className="flex items-start gap-4 lg:flex-col lg:items-center lg:gap-2">
                  <div className="text-5xl font-bold text-solar">{s.step}</div>
                  <span className="text-sm text-navy-500 lg:mt-2">{s.timeline}</span>
                </div>
                <div className="rounded-xl border border-white/5 bg-white/[0.02] p-8">
                  <h2 className="text-2xl font-bold text-white">{s.title}</h2>
                  <p className="mt-4 text-navy-400 leading-relaxed">
                    {s.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4}>
          <div className="mt-24 text-center">
            <h2 className="text-3xl font-bold text-white">Ready to Start?</h2>
            <p className="mt-4 text-navy-400">
              Book your free consultation today. No obligations.
            </p>
            <div className="mt-8">
              <Button href="/contact" size="lg">
                Get Free Quote
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
