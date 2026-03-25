import { useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Marquee } from "./components/Marquee";
import { ServicesGrid } from "./components/ServicesGrid";
import { ProcessSteps } from "./components/ProcessSteps";
import { Pricing } from "./components/Pricing";
import { Testimonials } from "./components/Testimonials";
import { ContactForm } from "./components/ContactForm";
import { Footer } from "./components/Footer";

function App() {
  // Load Watson Assistant Chatbot
  useEffect(() => {
    // Check if window is defined (client-side)
    if (typeof window !== "undefined") {
      // @ts-ignore - Watson types are not standard
      window.watsonAssistantChatOptions = {
        integrationID: "e1c920c2-9a1f-4b66-8ef8-4c49b7b02bf6",
        region: "au-syd",
        serviceInstanceID: "b51a64b8-8d3d-444a-acc8-68b17bc7f3f1",
        onLoad: function(instance: any) {
          instance.render();
        }
      };

      setTimeout(function () {
        const script = document.createElement("script");
        script.src = "https://web-chat.global.assistant.watson.appdomain.cloud/versions/latest/WatsonAssistantChatEntry.js";
        script.async = true;
        document.body.appendChild(script);
      }, 1000);
    }
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-red-500/30">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <ServicesGrid />
        <ProcessSteps />
        <Pricing />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;