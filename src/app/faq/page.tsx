import type { Metadata } from "next";
import FadeIn from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "FAQ — Solaris Energy",
  description: "Frequently asked questions about solar energy in Bangladesh.",
};

const faqs = [
  {
    q: "How much can I save with solar?",
    a: "Most residential customers save 50-70% on their electricity bills. Exact savings depend on system size, energy usage, and grid tariff. We provide a detailed savings report during consultation.",
  },
  {
    q: "How long does installation take?",
    a: "Residential systems install in 2-3 days. Full process from consultation to activation takes 6-8 weeks, including permits and grid interconnection.",
  },
  {
    q: "Do I need battery storage?",
    a: "Not required. Grid-tied systems with net metering let you export excess power. Battery storage adds backup during outages. We recommend based on your needs.",
  },
  {
    q: "What warranty do you offer?",
    a: "25-year warranty on solar panels. 10-year warranty on inverters. 5-year workmanship warranty on installation. Extended maintenance plans available.",
  },
  {
    q: "Does solar work during monsoon?",
    a: "Yes. Panels generate power from daylight, not direct sun. Reduced output during cloudy days, but annual production remains strong with 300+ sunny days in Bangladesh.",
  },
  {
    q: "How do I apply for net metering?",
    a: "We handle the entire net metering application process with your local utility. This is included in our installation service.",
  },
  {
    q: "What maintenance is needed?",
    a: "Minimal. Panel cleaning 2-4 times per year. Inverter check annually. We offer maintenance plans that handle everything for you.",
  },
  {
    q: "Are there government subsidies?",
    a: "Bangladesh offers various incentives for solar adoption. We help you navigate available programs and maximize your savings.",
  },
];

export default function FAQPage() {
  return (
    <div className="py-24 px-6">
      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-solar">
            FAQ
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-lg text-navy-400">
            Common questions about solar energy and our services.
          </p>
        </FadeIn>

        <div className="mt-12 space-y-6">
          {faqs.map((faq, i) => (
            <FadeIn key={i} delay={i * 0.05}>
              <div className="rounded-xl border border-white/5 bg-white/[0.02] p-6">
                <h3 className="font-semibold text-white">{faq.q}</h3>
                <p className="mt-3 text-navy-400 leading-relaxed">{faq.a}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}
