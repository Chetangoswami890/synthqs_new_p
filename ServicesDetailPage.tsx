import { ArrowRight, Mail, Shield, Calendar, Star, Check, Play } from "lucide-react";
import { Button } from "../components/ui/button";

interface ServicesDetailPageProps {
  onNavigate: (page: "home" | "about" | "services") => void;
}

export function ServicesDetailPage({ onNavigate }: ServicesDetailPageProps) {
  const services = [
    {
      id: 1,
      title: "Voice AI Intake",
      icon: Mail,
      color: "from-red-500 to-orange-500",
      description: "Revolutionary voice AI that handles initial client consultations with human-like conversation.",
      features: [
        "Natural language understanding",
        "Multi-language support (50+ languages)",
        "Sentiment analysis for urgency detection",
        "Automatic transcription & documentation",
        "CRM integration & data capture",
        "24/7 availability with zero wait time",
      ],
      benefits: [
        "Reduce intake costs by 80%",
        "Capture 3x more qualified leads",
        "Eliminate missed opportunities",
        "Free up staff for high-value tasks",
      ],
      stats: { calls: "50,000+", satisfaction: "98%", languages: "50+" },
    },
    {
      id: 2,
      title: "Document Intelligence",
      icon: Shield,
      color: "from-blue-500 to-cyan-500",
      description: "Advanced AI that reads, understands, and analyzes legal documents with unprecedented accuracy.",
      features: [
        "OCR with 99.9% accuracy",
        "Contract clause extraction",
        "Risk assessment & flagging",
        "Compliance verification",
        "Version comparison & diffing",
        "Bulk processing capabilities",
      ],
      benefits: [
        "Review documents 10x faster",
        "Reduce human error by 95%",
        "Standardize review processes",
        "Identify risks instantly",
      ],
      stats: { docs: "10M+", accuracy: "99.9%", timeSaved: "90%" },
    },
    {
      id: 3,
      title: "Autonomous Scheduling",
      icon: Calendar,
      color: "from-green-500 to-emerald-500",
      description: "Smart scheduling that coordinates across calendars, time zones, and availability automatically.",
      features: [
        "Multi-calendar synchronization",
        "Conflict detection & resolution",
        "Automated reminders & confirmations",
        "Client self-service booking",
        "Court date integration",
        "Buffer time management",
      ],
      benefits: [
        "Eliminate scheduling conflicts",
        "Reduce no-shows by 60%",
        "Save 5+ hours per week",
        "Improve client experience",
      ],
      stats: { bookings: "100K+", conflicts: "0%", timeSaved: "5hrs/week" },
    },
    {
      id: 4,
      title: "CRM Intelligence",
      icon: Star,
      color: "from-purple-500 to-pink-500",
      description: "Predictive CRM that identifies opportunities, tracks engagement, and automates follow-ups.",
      features: [
        "Lead scoring algorithms",
        "Engagement tracking",
        "Automated follow-up sequences",
        "Pipeline visualization",
        "Client lifetime value prediction",
        "Churn risk alerts",
      ],
      benefits: [
        "Increase conversion by 40%",
        "Never miss a follow-up",
        "Prioritize high-value prospects",
        "Data-driven decision making",
      ],
      stats: { leads: "1M+", conversion: "+40%", retention: "+25%" },
    },
    {
      id: 5,
      title: "Legal Research AI",
      icon: Check,
      color: "from-amber-500 to-yellow-500",
      description: "Instant legal research with contextual understanding and proper citation generation.",
      features: [
        "Case law search engine",
        "Statute interpretation",
        "Citation generation (Bluebook)",
        "Precedent analysis",
        "Brief drafting assistance",
        "Research history & organization",
      ],
      benefits: [
        "Research 5x faster",
        "Find relevant cases instantly",
        "Ensure citation accuracy",
        "Build stronger arguments",
      ],
      stats: { cases: "5M+", searches: "1M+", timeSaved: "75%" },
    },
    {
      id: 6,
      title: "Client Portal Automation",
      icon: Shield,
      color: "from-indigo-500 to-violet-500",
      description: "Self-service portal that empowers clients while reducing your administrative burden.",
      features: [
        "Secure document sharing",
        "Case status tracking",
        "Real-time messaging",
        "Payment processing",
        "Appointment management",
        "Document e-signature",
      ],
      benefits: [
        "Reduce client inquiries by 50%",
        "Improve client satisfaction",
        "Streamline document exchange",
        "Automate payments",
      ],
      stats: { users: "50K+", satisfaction: "96%", inquiries: "-50%" },
    },
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-red-500 font-mono text-sm mb-4 block">SERVICES</span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Complete AI
              <br />
              <span className="text-red-500">Automation Suite</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Six powerful AI solutions designed to transform every aspect of your legal practice. Each service integrates seamlessly with your existing workflows.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-red-500/50 transition-all duration-300 group"
                >
                  {/* Header */}
                  <div className={`bg-gradient-to-br ${service.color} p-6`}>
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-slate-400 mb-6">{service.description}</p>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {Object.entries(service.stats).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-lg font-bold text-white">{value}</div>
                          <div className="text-xs text-slate-500 capitalize">{key}</div>
                        </div>
                      ))}
                    </div>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-slate-300 mb-3">Key Features</h4>
                      <ul className="space-y-2">
                        {service.features.slice(0, 3).map((feature) => (
                          <li key={feature} className="flex items-center gap-2 text-sm text-slate-400">
                            <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA */}
                    <Button className="w-full bg-slate-800 hover:bg-slate-700 text-white group-hover:bg-red-500 group-hover:text-white transition-colors">
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-red-500 font-mono text-sm mb-4 block">INTEGRATIONS</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Works With Your
                <br />
                <span className="text-slate-500">Existing Stack</span>
              </h2>
              <p className="text-xl text-slate-400 mb-8">
                Seamless integration with 100+ legal tools and platforms. No migration required—start seeing results immediately.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {["Clio", "PracticePanther", "MyCase", "Rocket Matter", "Filevine", "Salesforce", "HubSpot", "Microsoft 365"].map((tool) => (
                  <div key={tool} className="bg-slate-950 border border-slate-800 rounded-lg p-4 text-center hover:border-red-500/50 transition-colors">
                    <span className="text-slate-300 font-medium">{tool}</span>
                  </div>
                ))}
              </div>

              <Button className="bg-red-500 hover:bg-red-600 text-white">
                View All Integrations
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl p-8 border border-slate-800">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96 flex items-center justify-center">
                  <span className="text-slate-500 font-semibold">Integration Diagram Placeholder</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Practice?
          </h2>
          <p className="text-xl text-slate-400 mb-8">
            Schedule a personalized demo and see how SynthQS can help your firm achieve more with less.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={() => onNavigate("home")} className="bg-red-500 hover:bg-red-600 text-white px-8 py-6 text-lg h-auto">
              <Play className="mr-2 w-5 h-5" />
              Schedule Demo
            </Button>
            <Button onClick={() => onNavigate("home")} variant="outline" className="border-slate-700 hover:bg-slate-900 text-white px-8 py-6 text-lg h-auto">
              Back to Home
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}