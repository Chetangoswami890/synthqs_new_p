export function ProcessSteps() {
  const steps = [
    {
      num: "01",
      title: "Discovery Call",
      description: "We analyze your current workflows and identify automation opportunities.",
    },
    {
      num: "02",
      title: "Custom Setup",
      description: "Our engineers configure AI agents trained on your specific practice areas.",
    },
    {
      num: "03",
      title: "Integration",
      description: "Seamlessly connect with your existing CRM, calendar, and document systems.",
    },
    {
      num: "04",
      title: "Go Live",
      description: "Launch your AI workforce with 24/7 monitoring and continuous optimization.",
    },
  ];

  return (
    <section id="process" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <span className="text-red-500 font-mono text-sm mb-4 block">PROCESS</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            From Setup to
            <br />
            <span className="text-slate-500">Automation</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
          {steps.map((step, index) => (
            <div
              key={step.num}
              className={`relative p-8 ${index !== steps.length - 1 ? "border-r border-slate-800" : ""}`}
            >
              <div className="text-6xl font-bold text-slate-800 mb-4">{step.num}</div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-slate-400">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}