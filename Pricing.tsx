import { useState } from "react";
import { Check, Star, Zap, ArrowRight } from "lucide-react";
import { Button } from "../components/ui/button";

type Currency = "USD" | "GBP";

export function Pricing() {
  const [currency, setCurrency] = useState<Currency>("USD");

  const toggleCurrency = () => {
    setCurrency((prev) => (prev === "USD" ? "GBP" : "USD"));
  };

  const plans = [
    {
      id: "basic",
      name: "Basic Plan",
      description: "Perfect for small firms starting with AI automation.",
      priceUSD: 1800,
      priceGBP: 1800,
      badge: "Essential",
      features: {
        core: [
          "Professional Greeting (Law Firm Name)",
          "Client Information Capture",
          "Basic FAQ Handling",
          "Google Sheet / Email Integration",
          "Appointment Booking",
          "Calendar Integration",
        ],
        growth: [],
        premium: [],
      },
      cta: "Get Started",
      variant: "outline" as const,
    },
    {
      id: "intermediate",
      name: "Intermediate Plan",
      description: "Scale your intake with intelligent lead management.",
      priceUSD: 3000,
      priceGBP: 2500,
      badge: "Most Popular",
      features: {
        core: true, // Indicates "Includes all Core features"
        growth: [
          "Lead Notification (Email/SMS)",
          "Call Summary (Directly sent to Lawyer)",
          "Case Type Classification",
          "Daily Lead Report",
          "Multiple Call Handling",
        ],
        premium: [],
      },
      cta: "Start Free Trial",
      variant: "default" as const,
    },
    {
      id: "advanced",
      name: "Advanced Plan",
      description: "Enterprise-grade automation for high-volume firms.",
      priceUSD: 4500,
      priceGBP: 3800,
      badge: "Enterprise",
      features: {
        core: true,
        growth: true, // Indicates "Includes all Growth features"
        premium: [
          "Call Transfer to Lawyer",
          "SMS Booking Confirmation",
          "AI Consultation Pre-Screening",
          "CRM Integration",
          "Outbound Call Reminders",
          "Call Recording & Transcription",
          "Multi-Location Support",
          "Custom AI Conversation Flows",
        ],
      },
      cta: "Contact Sales",
      variant: "outline" as const,
    },
  ];

  const formatPrice = (price: number) => {
    return currency === "USD" ? `$${price.toLocaleString()}` : `£${price.toLocaleString()}`;
  };

  return (
    <section id="pricing" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-red-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-red-500 font-mono text-sm mb-4 block">PRICING</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Simple, Transparent
            <br />
            <span className="text-slate-500">Pricing</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-8">
            Choose the plan that fits your firm's needs. No hidden fees, cancel anytime.
          </p>

          {/* Currency Toggle */}
          <div className="inline-flex items-center bg-slate-900 border border-slate-800 rounded-full p-1">
            <button
              onClick={() => setCurrency("USD")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                currency === "USD" ? "bg-red-500 text-white shadow-lg" : "text-slate-400 hover:text-white"
              }`}
            >
              USD ($)
            </button>
            <button
              onClick={() => setCurrency("GBP")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                currency === "GBP" ? "bg-red-500 text-white shadow-lg" : "text-slate-400 hover:text-white"
              }`}
            >
              GBP (£)
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative bg-slate-900 border rounded-2xl p-8 flex flex-col transition-all duration-300 hover:border-red-500/50 ${
                plan.id === "intermediate" ? "border-red-500/50 shadow-2xl shadow-red-500/10 scale-105" : "border-slate-800"
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className={`px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                    plan.id === "intermediate" ? "bg-red-500 text-white" : "bg-slate-800 text-slate-300"
                  }`}>
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Plan Name */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-slate-400 text-sm">{plan.description}</p>
              </div>

              {/* Price */}
              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-bold">{formatPrice(plan.id === "basic" ? plan.priceUSD : plan.id === "intermediate" ? plan.priceUSD : plan.priceUSD)}</span>
                  <span className="text-slate-500">/month</span>
                </div>
                {plan.id === "intermediate" && (
                  <div className="text-green-500 text-sm mt-2 flex items-center gap-1">
                    <Zap size={14} />
                    Best Value
                  </div>
                )}
              </div>

              {/* Features List */}
              <div className="flex-1 space-y-6 mb-8">
                
                {/* Core Features (All Plans) */}
                <div>
                  <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Included in All Plans</h4>
                  <ul className="space-y-3">
                    {plan.features.core === true ? (
                      <li className="flex items-start gap-3 text-sm text-slate-300">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Everything in Basic Plan</span>
                      </li>
                    ) : (
                      plan.features.core.map((feature) => (
                        <li key={feature} className="flex items-start gap-3 text-sm text-slate-300">
                          <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))
                    )}
                  </ul>
                </div>

                {/* Growth Features (Intermediate + Advanced) */}
                {plan.features.growth && plan.features.growth.length > 0 && (
                  <div className="pt-4 border-t border-slate-800">
                    <h4 className="text-xs font-semibold text-red-500 uppercase tracking-wider mb-3 flex items-center gap-2">
                      <Star size={12} />
                      Growth Features
                    </h4>
                    <ul className="space-y-3">
                      {plan.features.growth === true ? (
                        <li className="flex items-start gap-3 text-sm text-slate-300">
                          <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>Everything in Intermediate Plan</span>
                        </li>
                      ) : (
                        plan.features.growth.map((feature) => (
                          <li key={feature} className="flex items-start gap-3 text-sm text-slate-300">
                            <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))
                      )}
                    </ul>
                  </div>
                )}

                {/* Premium Features (Advanced Only) */}
                {plan.features.premium && plan.features.premium.length > 0 && (
                  <div className="pt-4 border-t border-slate-800">
                    <h4 className="text-xs font-semibold text-purple-500 uppercase tracking-wider mb-3 flex items-center gap-2">
                      <Zap size={12} />
                      Premium Features
                    </h4>
                    <ul className="space-y-3">
                      {plan.features.premium.map((feature) => (
                        <li key={feature} className="flex items-start gap-3 text-sm text-slate-300">
                          <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* CTA Button */}
              <Button
                className={`w-full h-12 text-base font-semibold ${
                  plan.variant === "default"
                    ? "bg-red-500 hover:bg-red-600 text-white"
                    : "bg-slate-800 hover:bg-slate-700 text-white border-slate-700"
                }`}
              >
                {plan.cta}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 text-center">
          <p className="text-slate-500 text-sm mb-6">Trusted by 500+ law firms worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
            {["Clio", "MyCase", "PracticePanther", "Filevine"].map((brand) => (
              <span key={brand} className="text-xl font-bold text-slate-400">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}