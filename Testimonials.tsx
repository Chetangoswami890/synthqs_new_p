import { Star } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export function Testimonials() {
  const testimonials = [
    {
      name: "Michael Roberts",
      role: "Managing Partner, Roberts & Associates",
      content: "SynthQS transformed our intake process. We're handling 3x more leads without adding staff.",
      rating: 5,
    },
    {
      name: "Sarah Chen",
      role: "Director of Operations, Chen Legal",
      content: "The AI agents are incredibly accurate. They've reduced our response time from hours to seconds.",
      rating: 5,
    },
    {
      name: "David Park",
      role: "Founder, Park Law Group",
      content: "Best investment we've made this year. The ROI was visible within the first month.",
      rating: 5,
    },
  ];

  return (
    <section className="py-32 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-red-500 font-mono text-sm mb-4 block tracking-widest uppercase">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-['Space_Grotesk']">
            Trusted by Leading Firms
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            See what our clients have to say about transforming their practice with AI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <Card
              key={idx}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-red-500/30 transition-all duration-300 hover:-translate-y-2"
            >
              <CardContent className="p-0">
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-slate-300 text-lg leading-relaxed mb-8">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  {/* Placeholder Image */}
                  <div className="bg-gray-200 border-2 border-dashed border-slate-600 rounded-xl w-16 h-16 flex items-center justify-center flex-shrink-0">
                    <span className="text-slate-500 font-bold text-lg">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-slate-500">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}