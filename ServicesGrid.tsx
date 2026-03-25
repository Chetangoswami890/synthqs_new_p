import { ArrowRight, Mail, Shield, Calendar, Star, Check } from "lucide-react";
import { useState } from "react";

export function ServicesGrid() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services = [
    {
      id: 1,
      num: "01 / 06",
      title: "Voice AI Intake",
      description: "Natural language processing that handles initial client calls, captures key information, and schedules consultations automatically.",
      icon: Mail,
      features: ["24/7 Availability", "Multi-language Support", "Sentiment Analysis", "Auto-transcription"],
      color: "from-red-500 to-orange-500",
    },
    {
      id: 2,
      num: "02 / 06",
      title: "Document Intelligence",
      description: "Advanced OCR and NLP that reviews contracts, briefs, and legal documents with 99.9% accuracy.",
      icon: Shield,
      features: ["Contract Review", "Risk Detection", "Clause Extraction", "Compliance Checks"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 3,
      num: "03 / 06",
      title: "Autonomous Scheduling",
      description: "AI-powered calendar management that coordinates with clients, court systems, and team members seamlessly.",
      icon: Calendar,
      features: ["Smart Scheduling", "Conflict Detection", "Automated Reminders", "Time Zone Sync"],
      color: "from-green-500 to-emerald-500",
    },
    {
      id: 4,
      num: "04 / 06",
      title: "CRM Intelligence",
      description: "Predictive analytics that identifies high-value leads, tracks engagement, and automates follow-ups.",
      icon: Star,
      features: ["Lead Scoring", "Predictive Analytics", "Automated Follow-ups", "Client Insights"],
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 5,
      num: "05 / 06",
      title: "Legal Research AI",
      description: "Instant case law research with contextual understanding and citation generation.",
      icon: Check,
      features: ["Case Law Search", "Citation Generation", "Precedent Analysis", "Brief Drafting"],
      color: "from-amber-500 to-yellow-500",
    },
    {
      id: 6,
      num: "06 / 06",
      title: "Client Portal Automation",
      description: "Self-service portal where clients can track cases, upload documents, and communicate securely.",
      icon: Shield,
      features: ["Document Upload", "Case Tracking", "Secure Messaging", "Payment Processing"],
      color: "from-indigo-500 to-violet-500",
    },
  ];

  return (
    <section id="services" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <span className="text-red-500 font-mono text-sm mb-4 block">SERVICES</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            AI-Powered
            <br />
            <span className="text-slate-500">Legal Solutions</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-lg">
            Comprehensive automation suite designed specifically for modern law firms. Each service is built to handle complex legal workflows with precision and compliance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group relative bg-slate-950 border border-slate-800 rounded-2xl p-8 hover:border-red-500/50 transition-all duration-300 overflow-hidden"
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Hover Glow Effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                />

                {/* Number Badge */}
                <div className="text-slate-600 font-mono text-sm mb-4">{service.num}</div>

                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>

                {/* Description */}
                <p className="text-slate-400 mb-6 leading-relaxed">{service.description}</p>

                {/* Features List */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-slate-300">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Arrow */}
                <div className={`flex items-center gap-2 text-red-500 transition-all duration-300 ${hoveredCard === service.id ? "translate-x-2" : ""}`}>
                  <span className="text-sm font-medium">Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}