import { useState, useEffect, useRef } from "react";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { Button } from "./ui/button";

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX - innerWidth / 2) / innerWidth;
      const y = (e.clientY - innerHeight / 2) / innerHeight;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Calculate 3D rotation based on mouse
  const rotateY = mousePosition.x * 10; // Max 10deg rotation
  const rotateX = -mousePosition.y * 10;

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-slate-950 pt-20"
      style={{ perspective: "1000px" }}
    >
      {/* Background Grid with Perspective */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />
      
      {/* Radial Vignette */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-slate-950/50 to-slate-950 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content - Classic Typography */}
          <div className="space-y-8 relative z-20" style={{ transform: `translateZ(50px)` }}>
            <div className="inline-flex items-center gap-2 bg-slate-900/50 backdrop-blur-md border border-slate-800 rounded-full px-5 py-2.5 mb-6">
              <Sparkles className="w-4 h-4 text-red-500" />
              <span className="text-sm text-slate-300 font-medium tracking-wide uppercase">Next Gen Intelligence</span>
            </div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold font-['Space_Grotesk'] leading-[0.95] tracking-tight text-white">
              Sovereign <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-red-500 via-orange-400 to-red-600">
                Automation
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-400 leading-relaxed max-w-lg font-light border-l-2 border-red-500/30 pl-6">
              Architecting autonomous systems for the modern legal enterprise. Precision meets velocity.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4">
              <Button 
                onClick={() => scrollToSection("pricing")}
                className="bg-white text-slate-950 hover:bg-slate-200 rounded-full px-8 h-14 text-lg font-semibold transition-all hover:scale-105 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]"
              >
                Deploy System
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                onClick={() => scrollToSection("services")}
                variant="outline"
                className="border-slate-700 text-slate-300 hover:bg-slate-900 hover:text-white hover:border-slate-500 rounded-full px-8 h-14 text-lg font-medium transition-all backdrop-blur-sm"
              >
                <Play className="mr-2 w-5 h-5 fill-current" />
                View Architecture
              </Button>
            </div>
          </div>

          {/* Right Content - 3D Interactive Core */}
          <div className="relative h-[600px] flex items-center justify-center hidden lg:block">
            <div 
              className="relative w-full h-full flex items-center justify-center"
              style={{ 
                transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
                transformStyle: "preserve-3d",
                transition: "transform 0.1s ease-out"
              }}
            >
              {/* Core Glow */}
              <div className="absolute w-64 h-64 bg-red-600/20 rounded-full blur-[80px] animate-pulse" style={{ transform: "translateZ(0px)" }} />
              
              {/* Outer Ring - Rotating Slow */}
              <div 
                className="absolute w-96 h-96 border border-slate-700/50 rounded-full border-dashed animate-[spin_20s_linear_infinite]"
                style={{ transform: "translateZ(20px) rotateX(60deg)" }}
              />
              
              {/* Middle Ring - Rotating Reverse */}
              <div 
                className="absolute w-80 h-80 border border-red-500/30 rounded-full animate-[spin_15s_linear_infinite_reverse]"
                style={{ transform: "translateZ(40px) rotateX(-60deg) rotateY(20deg)" }}
              />

              {/* Inner Ring - Fast */}
              <div 
                className="absolute w-56 h-56 border border-slate-500/40 rounded-full animate-[spin_10s_linear_infinite]"
                style={{ transform: "translateZ(60px) rotateY(45deg)" }}
              />

              {/* Center Sphere */}
              <div 
                className="w-32 h-32 bg-gradient-to-br from-slate-900 to-slate-800 rounded-full border border-slate-700 shadow-2xl flex items-center justify-center relative"
                style={{ transform: "translateZ(80px)" }}
              >
                <div className="absolute inset-0 bg-red-500/10 rounded-full blur-md" />
                <div className="text-4xl font-bold text-white font-['Space_Grotesk']">AI</div>
              </div>

              {/* Floating Data Cards (3D Elements) */}
              <div 
                className="absolute top-10 right-10 bg-slate-900/80 backdrop-blur border border-slate-700 p-4 rounded-xl shadow-xl"
                style={{ transform: "translateZ(100px) translateX(50px)" }}
              >
                <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Processing</div>
                <div className="text-2xl font-bold text-white font-mono">99.9%</div>
              </div>

              <div 
                className="absolute bottom-20 left-0 bg-slate-900/80 backdrop-blur border border-slate-700 p-4 rounded-xl shadow-xl"
                style={{ transform: "translateZ(120px) translateX(-50px)" }}
              >
                <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Latency</div>
                <div className="text-2xl font-bold text-green-400 font-mono">&lt;12ms</div>
              </div>

              <div 
                className="absolute top-1/2 -right-8 bg-slate-900/80 backdrop-blur border border-slate-700 p-4 rounded-xl shadow-xl"
                style={{ transform: "translateZ(80px) translateY(-50%) rotateY(90deg)" }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm text-white font-medium">Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none" />
    </section>
  );
}