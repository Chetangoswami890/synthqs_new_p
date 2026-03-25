import { useState, useRef, FormEvent } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Mail, Phone, MapPin, CheckCircle2, Send } from "lucide-react";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    firmType: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.firmType) {
      newErrors.firmType = "Please select a firm type";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1200));

    setIsSuccess(true);
    setIsSubmitting(false);

    // Reset form after success
    setTimeout(() => {
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        firmType: "",
        message: "",
      });
      setIsSuccess(false);
    }, 4000);
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  if (isSuccess) {
    return (
      <section id="contact" className="py-32 bg-slate-950 relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 className="w-10 h-10 text-green-500" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-['Space_Grotesk']">
            Message Sent!
          </h2>
          <p className="text-xl text-slate-400 mb-8">
            Thank you for reaching out. Our team will get back to you within 24 hours.
          </p>
          <Button
            onClick={() => setIsSuccess(false)}
            variant="outline"
            className="border-slate-700 text-slate-300 hover:bg-slate-900 hover:text-white"
          >
            Send Another Message
          </Button>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-32 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column - Info */}
          <div>
            <span className="text-red-500 font-mono text-sm mb-4 block tracking-widest uppercase">
              Get In Touch
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-['Space_Grotesk']">
              Let's Build Your Future.
            </h2>
            <p className="text-xl text-slate-400 mb-12 leading-relaxed">
              Ready to transform your firm with autonomous AI? Schedule a consultation to discuss your specific needs.
            </p>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Email Us</h3>
                  <p className="text-slate-400">contact@synthqs.ai</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Call Us</h3>
                  <p className="text-slate-400">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Visit Us</h3>
                  <p className="text-slate-400">San Francisco, CA</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Row */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-slate-300">
                    First Name *
                  </Label>
                  <Input
                    id="firstName"
                    placeholder="John"
                    value={formData.firstName}
                    onChange={(e) => handleChange("firstName", e.target.value)}
                    className={`bg-slate-950 border-slate-700 text-white placeholder:text-slate-600 ${
                      errors.firstName ? "border-red-500" : ""
                    }`}
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-sm">{errors.firstName}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-slate-300">
                    Last Name *
                  </Label>
                  <Input
                    id="lastName"
                    placeholder="Doe"
                    value={formData.lastName}
                    onChange={(e) => handleChange("lastName", e.target.value)}
                    className={`bg-slate-950 border-slate-700 text-white placeholder:text-slate-600 ${
                      errors.lastName ? "border-red-500" : ""
                    }`}
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-sm">{errors.lastName}</p>
                  )}
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-slate-300">
                  Email Address *
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@lawfirm.com"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  className={`bg-slate-950 border-slate-700 text-white placeholder:text-slate-600 ${
                    errors.email ? "border-red-500" : ""
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
              </div>

              {/* Firm Type */}
              <div className="space-y-2">
                <Label htmlFor="firmType" className="text-slate-300">
                  Firm Type *
                </Label>
                <Select
                  value={formData.firmType}
                  onValueChange={(value) => handleChange("firmType", value)}
                >
                  <SelectTrigger
                    id="firmType"
                    className={`bg-slate-950 border-slate-700 text-white ${
                      errors.firmType ? "border-red-500" : ""
                    }`}
                  >
                    <SelectValue placeholder="Select your firm type" />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-900 border-slate-700">
                    <SelectItem value="litigation">Litigation Firm</SelectItem>
                    <SelectItem value="corporate">Corporate Law</SelectItem>
                    <SelectItem value="family">Family Law</SelectItem>
                    <SelectItem value="criminal">Criminal Defense</SelectItem>
                    <SelectItem value="intellectual">Intellectual Property</SelectItem>
                    <SelectItem value="real-estate">Real Estate</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                {errors.firmType && (
                  <p className="text-red-500 text-sm">{errors.firmType}</p>
                )}
              </div>

              {/* Message */}
              <div className="space-y-2">
                <Label htmlFor="message" className="text-slate-300">
                  Message *
                </Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your automation needs..."
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  rows={5}
                  className={`bg-slate-950 border-slate-700 text-white placeholder:text-slate-600 resize-none ${
                    errors.message ? "border-red-500" : ""
                  }`}
                />
                {errors.message && (
                  <p className="text-red-500 text-sm">{errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-red-600 hover:bg-red-700 text-white rounded-xl h-12 text-base font-semibold transition-all"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    Send Message
                    <Send className="w-4 h-4" />
                  </span>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}