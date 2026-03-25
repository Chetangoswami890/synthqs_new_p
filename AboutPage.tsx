import { ArrowRight, Shield, Users, Target, Award } from "lucide-react";
import { Button } from "../components/ui/button";

interface AboutPageProps {
  onNavigate: (page: "home" | "about" | "services") => void;
}

export function AboutPage({ onNavigate }: AboutPageProps) {
  const stats = [
    { value: "500+", label: "Law Firms" },
    { value: "10M+", label: "Documents Processed" },
    { value: "99.9%", label: "Accuracy Rate" },
    { value: "24/7", label: "Support" },
  ];

  const values = [
    {
      icon: Shield,
      title: "Security First",
      description: "Bank-grade encryption and SOC 2 Type II compliance. Your data never leaves secure environments.",
    },
    {
      icon: Users,
      title: "Human-Centered",
      description: "AI augments your team, never replaces it. Built by lawyers, for lawyers.",
    },
    {
      icon: Target,
      title: "Precision Focused",
      description: "Every feature is battle-tested in real legal environments. No experimental tech.",
    },
    {
      icon: Award,
      title: "Proven Results",
      description: "Average ROI of 300% within first 6 months. Measurable impact on your bottom line.",
    },
  ];

  const team = [
    { name: "Alex Rivera", role: "CEO & Co-Founder", image: "AR" },
    { name: "Sarah Mitchell", role: "CTO", image: "SM" },
    { name: "David Chen", role: "Head of Legal AI", image: "DC" },
    { name: "Emily Watson", role: "VP of Product", image: "EW" },
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-red-500 font-mono text-sm mb-4 block">ABOUT US</span>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Building the Future of
                <br />
                <span className="text-red-500">Legal Practice</span>
              </h1>
              <p className="text-xl text-slate-400 mb-8 leading-relaxed">
                Founded in 2021, SynthQS emerged from a simple observation: lawyers spend 60% of their time on tasks that don't require legal expertise. We built AI to change that.
              </p>
              <div className="flex gap-4">
                <Button onClick={() => onNavigate("services")} className="bg-red-500 hover:bg-red-600 text-white">
                  Our Services
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button onClick={() => onNavigate("home")} variant="outline" className="border-slate-700 hover:bg-slate-900 text-white">
                  Back to Home
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-red-500/20 to-blue-500/20 rounded-3xl p-8 border border-slate-800">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-80 flex items-center justify-center">
                  <span className="text-slate-500 font-semibold">Team Photo Placeholder</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-900 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Our Mission
          </h2>
          <p className="text-2xl text-slate-300 leading-relaxed mb-12">
            "To democratize access to world-class legal technology, enabling every firm—regardless of size—to deliver exceptional client service while maintaining profitability and work-life balance."
          </p>
          <div className="bg-gradient-to-r from-red-500/10 to-blue-500/10 rounded-2xl p-8 border border-slate-800">
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-48 flex items-center justify-center">
              <span className="text-slate-500 font-semibold">Office/Workspace Image</span>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-red-500 font-mono text-sm mb-4 block">OUR VALUES</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What Drives Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.title} className="bg-slate-950 border border-slate-800 rounded-2xl p-8 hover:border-red-500/50 transition-colors">
                  <div className="w-14 h-14 bg-red-500/10 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-red-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-red-500 font-mono text-sm mb-4 block">TEAM</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Meet the Leadership
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.name} className="text-center group">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full aspect-square mb-4 flex items-center justify-center group-hover:border-red-500 transition-colors">
                  <span className="text-slate-500 font-semibold text-2xl">{member.image}</span>
                </div>
                <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                <p className="text-slate-500">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}