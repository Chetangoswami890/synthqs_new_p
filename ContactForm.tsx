import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Clock, Check, ArrowRight } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    firmType: "",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // EmailJS Configuration
    const serviceId = "chetangoswami2006"; 
    const templateId = "YOUR_TEMPLATE_ID"; // REPLACE THIS
    const publicKey = "YOUR_PUBLIC_KEY";   // REPLACE THIS

    try {
      if ((window as any).emailjs && !(window as any).emailjs.init) {
        (window as any).emailjs.init(publicKey);
      }

      await (window as any).emailjs.send(serviceId, templateId, {
        from_name: formData.name,
        reply_to: formData.email,
        firm_type: formData.firmType,
        message: formData.message,
      });

      setStatus("success");
      setFormData({ name: "", email: "", firmType: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-950 relative">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-['Space_Grotesk'] mb-4">
            Start Your <span className="text-red-500">Transformation</span>
          </h2>
          <p className="text-slate-400 text-lg">
            Ready to automate your workflow? Get in touch with our team.
          </p>
        </div>

        <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 md:p-12 backdrop-blur-sm">
          {status === "success" ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mb-4">
                <Check className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
              <p className="text-slate-400">We'll get back to you at hello@synthqs.com shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-slate-300">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-slate-950 border-slate-700 focus:border-red-500 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-slate-300">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-slate-950 border-slate-700 focus:border-red-500 text-white"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="firmType" className="text-slate-300">Firm / Company Type</Label>
                <Select onValueChange={(value) => setFormData({ ...formData, firmType: value })}>
                  <SelectTrigger className="bg-slate-950 border-slate-700 focus:border-red-500 text-white">
                    <SelectValue placeholder="Select your industry" />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-900 border-slate-700">
                    <SelectItem value="law">Law Firm</SelectItem>
                    <SelectItem value="enterprise">Enterprise</SelectItem>
                    <SelectItem value="startup">Startup</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-slate-300">How can we help?</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your automation needs..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="bg-slate-950 border-slate-700 focus:border-red-500 text-white resize-none"
                />
              </div>

              <Button 
                type="submit" 
                disabled={status === "loading"}
                className="w-full bg-red-600 hover:bg-red-700 text-white h-12 text-lg font-semibold transition-all"
              >
                {status === "loading" ? (
                  <>
                    <Clock className="mr-2 h-5 w-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </>
                )}
              </Button>

              {status === "error" && (
                <p className="text-red-500 text-sm text-center mt-2">
                  Failed to send message. Please try again or email us directly at hello@synthqs.com
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}