export function Marquee() {
  const items = [
    "VOICE AI",
    "DOCUMENT REVIEW",
    "AUTONOMOUS SCHEDULING",
    "CRM INTELLIGENCE",
    "CLIENT PORTALS",
    "COMPLIANCE CHECKS",
    "LEGAL RESEARCH",
    "CONTRACT ANALYSIS",
  ];

  return (
    <div className="border-y border-slate-800 bg-slate-900/50 overflow-hidden py-4">
      <div className="flex whitespace-nowrap animate-marquee-fast">
        {[...items, ...items, ...items, ...items].map((item, index) => (
          <div key={index} className="inline-flex items-center mx-8">
            <span className="text-red-500 font-mono text-sm">//</span>
            <span className="text-slate-300 font-semibold ml-2">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}