import { useState } from "react";
import { ArrowRight, ArrowLeft, Check, Zap, BarChart3, X, Activity, Cpu, Shield, Globe } from "lucide-react";
import { Button } from "./ui/button";
import { servicesData, Service } from "../data/servicesData";
import { useTilt } from "../hooks/useTilt";

export function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  if (selectedService) {
    return <ServiceDetail service={selectedService} onBack={() => setSelectedService(null)} />;
  }

  // Extract icons to valid component variables
  const VoiceIcon = servicesData[0].icon;
  const LeadIcon = servicesData[1].icon;
  const BookingIcon = servicesData[2].icon;
  const CRMIcon = servicesData[3].icon;

  return (
    <section id="services" className="py-32 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-red-500 font-mono text-sm mb-4 block tracking-widest uppercase">What We Build</span>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 font-['Space_Grotesk'] tracking-tight">
            Elite Systems.
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Every deployment is custom-engineered for your workflow. We don't install software — we build autonomous agents.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {/* Large Card - Voice AI */}
          <div 
            onClick={() => setSelectedService(servicesData[0])}
            className="md:col-span-2 md:row-span-2 group relative bg-slate-900 border border-slate-800 rounded-3xl p-10 overflow-hidden cursor-pointer hover:border-red-500/50 transition-all duration-300"
          >
            <TiltCard>
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <VoiceIcon className="w-8 h-8 text-red-500" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4 font-['Space_Grotesk'] group-hover:text-red-400 transition-colors">{servicesData[0].title}</h3>
                  <p className="text-slate-400 text-lg leading-relaxed max-w-md">{servicesData[0].shortDesc}</p>
                </div>
                <div className="flex items-center gap-2 text-red-500 font-semibold group-hover:gap-4 transition-all">
                  <span>Explore Intelligence</span>
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/10 rounded-full blur-[100px] group-hover:bg-red-500/20 transition-all duration-500" />
            </TiltCard>
          </div>

          {/* Small Card - Lead Management */}
          <div 
            onClick={() => setSelectedService(servicesData[1])}
            className="group relative bg-slate-900 border border-slate-800 rounded-3xl p-8 overflow-hidden cursor-pointer hover:border-blue-500/50 transition-all duration-300"
          >
            <TiltCard>
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <LeadIcon className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 font-['Space_Grotesk'] group-hover:text-blue-400 transition-colors">{servicesData[1].title}</h3>
                  <p className="text-slate-400 text-sm">{servicesData[1].shortDesc}</p>
                </div>
              </div>
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] group-hover:bg-blue-500/20 transition-all duration-500" />
            </TiltCard>
          </div>

          {/* Small Card - Booking */}
          <div 
            onClick={() => setSelectedService(servicesData[2])}
            className="group relative bg-slate-900 border border-slate-800 rounded-3xl p-8 overflow-hidden cursor-pointer hover:border-green-500/50 transition-all duration-300"
          >
            <TiltCard>
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <BookingIcon className="w-6 h-6 text-green-500" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 font-['Space_Grotesk'] group-hover:text-green-400 transition-colors">{servicesData[2].title}</h3>
                  <p className="text-slate-400 text-sm">{servicesData[2].shortDesc}</p>
                </div>
              </div>
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-green-500/10 rounded-full blur-[80px] group-hover:bg-green-500/20 transition-all duration-500" />
            </TiltCard>
          </div>

          {/* Wide Card - CRM */}
          <div 
            onClick={() => setSelectedService(servicesData[3])}
            className="md:col-span-2 group relative bg-slate-900 border border-slate-800 rounded-3xl p-8 overflow-hidden cursor-pointer hover:border-purple-500/50 transition-all duration-300"
          >
            <TiltCard>
              <div className="relative z-10 h-full flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <CRMIcon className="w-7 h-7 text-purple-500" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-1 font-['Space_Grotesk'] group-hover:text-purple-400 transition-colors">{servicesData[3].title}</h3>
                    <p className="text-slate-400 text-sm">{servicesData[3].shortDesc}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-purple-500 font-semibold group-hover:gap-4 transition-all">
                  <span>View Integration</span>
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] group-hover:bg-purple-500/20 transition-all duration-500" />
            </TiltCard>
          </div>
        </div>
      </div>
    </section>
  );
}

function TiltCard({ children }: { children: React.ReactNode }) {
  const { ref, style } = useTilt();
  return (
    <div ref={ref} style={style} className="h-full w-full">
      {children}
    </div>
  );
}

function ServiceDetail({ service, onBack }: { service: Service; onBack: () => void }) {
  const Icon = service.icon;

  return (
    <div className="fixed inset-0 bg-slate-950 z-50 overflow-y-auto">
      {/* Close Button */}
      <button
        onClick={onBack}
        className="fixed top-6 right-6 z-50 w-12 h-12 bg-slate-900 border border-slate-800 rounded-full flex items-center justify-center hover:bg-red-500 hover:border-red-500 transition-all group"
      >
        <X className="w-6 h-6 text-slate-400 group-hover:text-white" />
      </button>

      <div className="max-w-7xl mx-auto px-6 py-24">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-slate-400 hover:text-white mb-12 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Services
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Left Column */}
          <div>
            <div className={`inline-flex items-center gap-2 bg-slate-900 border border-slate-800 rounded-full px-4 py-2 mb-8`}>
              <Icon className={`w-4 h-4 ${service.color}`} />
              <span className="text-sm font-medium text-slate-300 tracking-wider uppercase">{service.title}</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-8 font-['Space_Grotesk'] leading-tight">{service.title}</h1>
            <p className="text-xl text-slate-400 leading-relaxed mb-12">{service.fullDesc}</p>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4 mb-16">
              {service.stats.map((stat, idx) => (
                <div key={idx} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center">
                  <div className={`text-3xl font-bold ${service.color} mb-2 font-['Space_Grotesk']`}>{stat.value}</div>
                  <div className="text-xs text-slate-500 uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Features */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 font-['Space_Grotesk']">
                <Zap className="w-6 h-6 text-yellow-500" />
                Key Features
              </h3>
              <ul className="space-y-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-5 h-5 text-green-500" />
                    </div>
                    <span className="text-slate-300 text-lg leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div>
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 font-['Space_Grotesk']">
                <BarChart3 className="w-6 h-6 text-blue-500" />
                Benefits
              </h3>
              <ul className="space-y-6">
                {service.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full bg-red-500 mt-3 flex-shrink-0" />
                    <span className="text-slate-300 text-lg leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column - Decent Dashboard Preview (No Phone) */}
          <div className="relative">
            <div className="sticky top-24">
              <div className="bg-slate-900 border border-slate-800 rounded-[2.5rem] p-8 h-full min-h-[600px] flex flex-col relative overflow-hidden">
                {/* Header */}
                <div className="flex items-center justify-between mb-8 border-b border-slate-800 pb-6">
                  <div>
                    <div className="text-sm text-slate-500 font-mono mb-1">SYSTEM STATUS</div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      <span className="text-white font-semibold">Operational</span>
                    </div>
                  </div>
                  <div className="bg-slate-950 px-4 py-2 rounded-lg border border-slate-800">
                    <span className="text-green-500 font-mono text-sm">v2.4.0</span>
                  </div>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                        <Activity className="w-5 h-5 text-blue-500" />
                      </div>
                      <span className="text-slate-400 text-sm">Processing</span>
                    </div>
                    <div className="text-3xl font-bold text-white font-['Space_Grotesk']">12.4k</div>
                    <div className="text-xs text-green-500 mt-1">+24% this week</div>
                  </div>

                  <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center">
                        <Cpu className="w-5 h-5 text-purple-500" />
                      </div>
                      <span className="text-slate-400 text-sm">AI Agents</span>
                    </div>
                    <div className="text-3xl font-bold text-white font-['Space_Grotesk']">8</div>
                    <div className="text-xs text-slate-500 mt-1">Active now</div>
                  </div>

                  <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center">
                        <Shield className="w-5 h-5 text-green-500" />
                      </div>
                      <span className="text-slate-400 text-sm">Accuracy</span>
                    </div>
                    <div className="text-3xl font-bold text-white font-['Space_Grotesk']">99.9%</div>
                    <div className="text-xs text-slate-500 mt-1">Last 30 days</div>
                  </div>

                  <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center">
                        <Globe className="w-5 h-5 text-red-500" />
                      </div>
                      <span className="text-slate-400 text-sm">Uptime</span>
                    </div>
                    <div className="text-3xl font-bold text-white font-['Space_Grotesk']">24/7</div>
                    <div className="text-xs text-green-500 mt-1">No downtime</div>
                  </div>
                </div>

                {/* Activity Feed */}
                <div className="flex-1 bg-slate-950 border border-slate-800 rounded-2xl p-6">
                  <h4 className="text-sm font-semibold text-slate-400 mb-4 uppercase tracking-wider">Recent Activity</h4>
                  <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex items-center gap-4">
                        <div className="w-2 h-2 bg-slate-700 rounded-full" />
                        <div className="flex-1">
                          <div className="h-3 bg-slate-800 rounded w-3/4 mb-2" />
                          <div className="h-2 bg-slate-800/50 rounded w-1/2" />
                        </div>
                        <span className="text-xs text-slate-600 font-mono">{i * 5}m ago</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Decorative Glow */}
                <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-red-500/5 rounded-full blur-[100px]" />
              </div>

              {/* CTA Card */}
              <div className="mt-8 bg-slate-900 border border-slate-800 rounded-2xl p-8 flex items-center justify-between">
                <div>
                  <div className="font-bold text-white text-lg">Ready to deploy?</div>
                  <div className="text-sm text-slate-500">Setup takes less than 24 hours</div>
                </div>
                <Button className="bg-red-600 hover:bg-red-700 text-white rounded-full px-8 h-auto py-3">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}