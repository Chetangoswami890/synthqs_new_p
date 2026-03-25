import { Mic, MessageSquare, CalendarCheck, Database, FileText, Workflow } from "lucide-react";

export interface Service {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  icon: any;
  color: string;
  features: string[];
  benefits: string[];
  stats: { label: string; value: string }[];
}

export const servicesData: Service[] = [
  {
    id: "voice-ai",
    title: "Voice AI Receptionist",
    shortDesc: "24/7 intelligent call handling for your firm.",
    fullDesc: "Our Voice AI Receptionist acts as your firm's first line of defense. It answers every call professionally, captures critical client information, and ensures no potential client is ever turned away due to missed calls.",
    icon: Mic,
    color: "text-red-500",
    features: [
      "Natural Language Processing for human-like conversation",
      "Custom greeting with your firm's name",
      "Intelligent call routing based on case type",
      "Multi-language support capabilities",
      "After-hours and holiday coverage",
      "Seamless escalation to human staff when needed"
    ],
    benefits: [
      "Never miss a lead, even at 3 AM",
      "Reduce staff workload by 40%",
      "Improve client satisfaction with instant responses",
      "Lower cost per acquisition compared to traditional receptionists"
    ],
    stats: [
      { label: "Response Time", value: "< 2s" },
      { label: "Accuracy", value: "99%" },
      { label: "Availability", value: "24/7" }
    ]
  },
  {
    id: "lead-management",
    title: "Smart Lead Management",
    shortDesc: "Automated capture and qualification of potential clients.",
    fullDesc: "Turn every call into a structured data point. Our system automatically captures names, phone numbers, case details, and urgency levels, then syncs them directly to your CRM or Google Sheets in real-time.",
    icon: MessageSquare,
    color: "text-blue-500",
    features: [
      "Automated data entry from phone calls",
      "Lead scoring based on case value and urgency",
      "Instant SMS/Email notifications to lawyers",
      "Daily lead summary reports",
      "Duplicate detection and merging",
      "Custom field mapping for your CRM"
    ],
    benefits: [
      "Eliminate manual data entry errors",
      "Follow up with hot leads instantly",
      "Keep your CRM always up-to-date",
      "Track marketing ROI accurately"
    ],
    stats: [
      { label: "Data Entry", value: "Auto" },
      { label: "Lead Score", value: "AI-Powered" },
      { label: "Sync Speed", value: "Real-time" }
    ]
  },
  {
    id: "appointment-booking",
    title: "Intelligent Booking",
    shortDesc: "Seamless calendar integration and scheduling.",
    fullDesc: "The AI checks your lawyers' calendars in real-time and offers available slots to clients. It handles rescheduling, cancellations, and sends confirmation reminders automatically.",
    icon: CalendarCheck,
    color: "text-green-500",
    features: [
      "Two-way Google Calendar & Outlook sync",
      "Conflict detection and resolution",
      "Automated SMS and Email reminders",
      "Buffer time management between appointments",
      "Client self-rescheduling portal",
      "Timezone intelligent scheduling"
    ],
    benefits: [
      "Reduce no-shows by 60%",
      "Eliminate back-and-forth scheduling emails",
      "Maximize lawyer utilization",
      "Provide a premium client experience"
    ],
    stats: [
      { label: "No-Show Reduction", value: "60%" },
      { label: "Booking Time", value: "< 30s" },
      { label: "Reminders", value: "Auto" }
    ]
  },
  {
    id: "crm-integration",
    title: "CRM Integration",
    shortDesc: "Connects with Clio, MyCase, and more.",
    fullDesc: "We don't just capture data; we put it where you need it. Seamless integration with all major legal practice management software ensures your workflow remains uninterrupted.",
    icon: Database,
    color: "text-purple-500",
    features: [
      "Native integration with Clio, MyCase, PracticePanther",
      "Custom API connections for proprietary systems",
      "Bi-directional data sync",
      "Matter creation automation",
      "Document attachment to client files",
      "Activity logging for compliance"
    ],
    benefits: [
      "Centralized client data",
      "No switching between apps",
      "Automated matter creation",
      "Complete audit trail"
    ],
    stats: [
      { label: "Platforms", value: "20+" },
      { label: "Sync Status", value: "Live" },
      { label: "Setup Time", value: "< 1 Day" }
    ]
  },
  {
    id: "transcription",
    title: "Call Transcription",
    shortDesc: "Full recording and text-to-speech of every call.",
    fullDesc: "Every client interaction is recorded, transcribed, and stored securely. Search through past conversations by keyword to review case details or ensure compliance.",
    icon: FileText,
    color: "text-orange-500",
    features: [
      "HD voice recording",
      "99.9% accurate transcription",
      "Speaker identification (Client vs. AI)",
      "Keyword search across all calls",
      "Secure cloud storage with encryption",
      "One-click export to PDF/Word"
    ],
    benefits: [
      "Review case details instantly",
      "Ensure compliance with legal regulations",
      "Train staff using real call examples",
      "Never forget a client instruction"
    ],
    stats: [
      { label: "Accuracy", value: "99.9%" },
      { label: "Search", value: "Full Text" },
      { label: "Storage", value: "Encrypted" }
    ]
  },
  {
    id: "custom-flows",
    title: "Custom AI Flows",
    shortDesc: "Tailored conversation scripts for your specific needs.",
    fullDesc: "Every law firm is different. We build custom conversation flows that match your firm's intake process, branding, and specific legal questions for different practice areas.",
    icon: Workflow,
    color: "text-cyan-500",
    features: [
      "Drag-and-drop flow builder",
      "A/B testing for scripts",
      "Dynamic logic based on user answers",
      "Multi-branch conversation paths",
      "Integration with internal knowledge bases",
      "Continuous learning and optimization"
    ],
    benefits: [
      "Perfectly aligned with your brand",
      "Handle complex intake scenarios",
      "Adapt to changing legal requirements",
      "Unique competitive advantage"
    ],
    stats: [
      { label: "Flexibility", value: "100%" },
      { label: "Logic", value: "Dynamic" },
      { label: "Updates", value: "Instant" }
    ]
  }
];