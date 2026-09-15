"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, Phone, Mail, MapPin, Clock } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Enter a valid phone number"),
  email: z.string().email("Enter a valid email"),
  address: z.string().min(5, "Enter your address"),
  propertyType: z.enum(["residential", "commercial", "industrial"]),
  monthlyBill: z.string().min(1, "Enter your monthly bill"),
  message: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  async function onSubmit(data: FormData) {
    setStatus("loading");
    try {
      const res = await fetch("/api/consultations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-solar">
            Contact
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Get a Free Quote
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-navy-400">
            Tell us about your property. We will design the optimal solar
            system and provide a detailed savings report.
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_400px]">
          <FadeIn delay={0.15}>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-navy-300">
                    Full Name
                  </label>
                  <input
                    {...register("name")}
                    className="mt-2 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-navy-500 focus:border-solar focus:outline-none"
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy-300">
                    Phone
                  </label>
                  <input
                    {...register("phone")}
                    className="mt-2 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-navy-500 focus:border-solar focus:outline-none"
                    placeholder="+880 1XXXXXXXXX"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-xs text-red-400">{errors.phone.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-navy-300">
                  Email
                </label>
                <input
                  {...register("email")}
                  type="email"
                  className="mt-2 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-navy-500 focus:border-solar focus:outline-none"
                  placeholder="you@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-navy-300">
                  Property Address
                </label>
                <input
                  {...register("address")}
                  className="mt-2 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-navy-500 focus:border-solar focus:outline-none"
                  placeholder="Full address in Bangladesh"
                />
                {errors.address && (
                  <p className="mt-1 text-xs text-red-400">{errors.address.message}</p>
                )}
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-navy-300">
                    Property Type
                  </label>
                  <select
                    {...register("propertyType")}
                    className="mt-2 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white focus:border-solar focus:outline-none"
                  >
                    <option value="residential">Residential</option>
                    <option value="commercial">Commercial</option>
                    <option value="industrial">Industrial</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy-300">
                    Monthly Electricity Bill (BDT)
                  </label>
                  <input
                    {...register("monthlyBill")}
                    className="mt-2 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-navy-500 focus:border-solar focus:outline-none"
                    placeholder="e.g. 5000"
                  />
                  {errors.monthlyBill && (
                    <p className="mt-1 text-xs text-red-400">
                      {errors.monthlyBill.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-navy-300">
                  Additional Message (Optional)
                </label>
                <textarea
                  {...register("message")}
                  rows={4}
                  className="mt-2 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-navy-500 focus:border-solar focus:outline-none resize-none"
                  placeholder="Any specific requirements or questions..."
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-solar px-6 py-3 font-semibold text-navy-950 transition-all hover:bg-solar-dark hover:shadow-lg hover:shadow-solar/20 disabled:opacity-50"
              >
                {status === "loading" ? "Submitting..." : "Submit Request"}
                <Send className="h-4 w-4" />
              </button>

              {status === "success" && (
                <p className="text-sm text-accent-green">
                  Request submitted. We will contact you within 1 business day.
                </p>
              )}
              {status === "error" && (
                <p className="text-sm text-red-400">
                  Something went wrong. Please try again or call us directly.
                </p>
              )}
            </form>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="space-y-6">
              <div className="rounded-xl border border-white/5 bg-white/[0.02] p-6">
                <h3 className="font-semibold text-white">Contact Info</h3>
                <div className="mt-4 space-y-4">
                  <div className="flex items-start gap-3">
                    <Phone className="mt-0.5 h-5 w-5 shrink-0 text-solar" />
                    <div>
                      <div className="text-sm text-navy-400">Phone</div>
                      <div className="text-white">+880 1XXXXXXXXX</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="mt-0.5 h-5 w-5 shrink-0 text-solar" />
                    <div>
                      <div className="text-sm text-navy-400">Email</div>
                      <div className="text-white">info@solarisenergy.bd</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-solar" />
                    <div>
                      <div className="text-sm text-navy-400">Office</div>
                      <div className="text-white">Dhaka, Bangladesh</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="mt-0.5 h-5 w-5 shrink-0 text-solar" />
                    <div>
                      <div className="text-sm text-navy-400">Response Time</div>
                      <div className="text-white">Within 1 business day</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
