import Link from "next/link";
import Image from "next/image";
import { Sun, Zap, Building2, Home, Wrench, ArrowRight, CheckCircle } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import Button from "@/components/ui/Button";
import heroImg from "./hero.png";

const services = [
  {
    icon: Home,
    title: "Residential Solar",
    description: "Rooftop solar systems for homes. Cut electricity bills by up to 70%.",
    href: "/services#residential",
  },
  {
    icon: Building2,
    title: "Commercial Solar",
    description: "Large-scale solar for offices, malls, and commercial buildings.",
    href: "/services#commercial",
  },
  {
    icon: Zap,
    title: "Industrial Solar",
    description: "High-capacity solar for factories, mills, and industrial operations.",
    href: "/services#industrial",
  },
  {
    icon: Wrench,
    title: "Maintenance",
    description: "Panel cleaning, repair, and performance monitoring services.",
    href: "/services#maintenance",
  },
];

const steps = [
  {
    step: "01",
    title: "Free Consultation",
    description: "We assess your energy needs, roof space, and electricity bills.",
  },
  {
    step: "02",
    title: "Custom Design",
    description: "Engineers design an optimized solar system for your property.",
  },
  {
    step: "03",
    title: "Installation",
    description: "Certified technicians install your system with minimal disruption.",
  },
  {
    step: "04",
    title: "Start Saving",
    description: "System goes live. Monitor production and savings in real time.",
  },
];

const stats = [
  { value: "500+", label: "Installations" },
  { value: "70%", label: "Avg. Bill Savings" },
  { value: "25yr", label: "Panel Warranty" },
  { value: "24/7", label: "Monitoring" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-24 px-6 min-h-[600px] flex items-center">
        <Image
          src={heroImg}
          alt="Solar panel installation"
          fill
          preload
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-navy-900" />
        <div className="relative mx-auto max-w-7xl z-10">
          <FadeIn>
            <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-solar">
              Solar Energy for Bangladesh
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Power Your Home
              <br />
              <span className="text-solar">With the Sun</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/80">
              Residential and commercial solar panel installation across Bangladesh.
              Custom-designed systems that cut electricity bills by up to 70%.
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/contact" size="lg">
                Get Free Quote
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/how-it-works" variant="secondary" size="lg">
                How It Works
              </Button>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-bold text-solar">{stat.value}</div>
                  <div className="mt-1 text-sm text-white/60">{stat.label}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-solar">
              Our Services
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Solar Solutions for Every Need
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-white/70">
              From homes to factories, we design and install solar systems
              optimized for Bangladesh climate and energy needs.
            </p>
          </FadeIn>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, i) => (
              <FadeIn key={service.href} delay={i * 0.1}>
                <Link
                  href={service.href}
                  className="group block rounded-xl border border-white/5 bg-white/[0.02] p-6 transition-all hover:border-solar/20 hover:bg-white/[0.04]"
                >
                  <service.icon className="h-10 w-10 text-solar" />
                  <h3 className="mt-4 text-lg font-semibold text-white">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-white/70">{service.description}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-solar group-hover:gap-2 transition-all">
                    Learn More <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-6 bg-navy-950/50">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-solar">
              How It Works
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              From Consultation to Clean Energy
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-navy-400">
              Simple 4-step process. We handle everything from design to installation.
            </p>
          </FadeIn>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <FadeIn key={s.step} delay={i * 0.1}>
                <div className="relative">
                  <div className="text-6xl font-bold text-white/5">{s.step}</div>
                  <h3 className="-mt-8 text-lg font-semibold text-white">{s.title}</h3>
                  <p className="mt-2 text-sm text-white/70">{s.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Why Solaris */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-solar">
              Why Solaris
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Trusted Solar Partner in Bangladesh
            </h2>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "Engineer-certified system design",
                "Net metering support",
                "25-year panel warranty",
                "Real-time monitoring app",
                "Government subsidy assistance",
                "Nationwide installation network",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-solar" />
                  <span className="text-white/70">{item}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-gradient-to-b from-solar/5 to-transparent">
        <div className="mx-auto max-w-3xl text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Go Solar?
            </h2>
            <p className="mt-4 text-lg text-white/80">
              Get a free consultation. No obligations. We assess your
              property and design the optimal system.
            </p>
            <div className="mt-8">
              <Button href="/contact" size="lg">
                Get Free Quote
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
