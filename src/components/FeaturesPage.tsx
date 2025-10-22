import { MessageCircle, FileText, Mic, Calendar, CreditCard, Bot, Clock } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

const allFeatures = [
  {
    icon: MessageCircle,
    title: "WhatsApp Integration",
    description: "Send appointment reminders, share prescriptions, and communicate with patients directly through WhatsApp.",
    category: "Communication",
  },
  {
    icon: FileText,
    title: "Rx Prescription",
    description: "Create digital prescriptions with smart templates, drug interaction checks, and instant sharing with patients.",
    category: "Clinical",
  },
  {
    icon: Mic,
    title: "AI Voice Integration (in your local language)",
    description: "Document consultations hands-free using voice commands in your preferred local language.",
    category: "AI-Powered",
  },
  {
    icon: Calendar,
    title: "Smart Scheduling",
    description: "AI-powered appointment booking that eliminates double-bookings and optimizes your daily schedule automatically.",
    category: "Scheduling",
  },
  {
    icon: FileText,
    title: "Digital Records",
    description: "Secure, searchable patient records with AI-assisted note-taking and instant access to medical histories.",
    category: "Clinical",
  },
  {
    icon: CreditCard,
    title: "Automated Billing",
    description: "Streamlined invoicing and payment processing with insurance claim management built right in.",
    category: "Finance",
  },
  {
    icon: Bot,
    title: "AI Assistant",
    description: "Your intelligent helper for documentation, prescription suggestions, and clinical decision support.",
    category: "AI-Powered",
  },
  {
    icon: Clock,
    title: "Save 10+ Hours Weekly",
    description: "Automate repetitive tasks and paperwork, giving you more time with patients and less with admin.",
    category: "Productivity",
  },
];

export function FeaturesPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header Section */}
        <div className="text-center space-y-6 mb-16 max-w-3xl mx-auto">
          <h1 className="text-gray-900">
            Powerful Features for Modern Healthcare
          </h1>
          <p className="text-xl text-gray-600">
            Everything you need to streamline your practice, save time, and provide better patient care—all in one place.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {allFeatures.map((feature, index) => (
            <Card key={index} className="border-gray-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-8 space-y-4">
                <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center">
                  <feature.icon className="w-7 h-7 text-green-600" />
                </div>
                <div className="space-y-2">
                  <div className="inline-block px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs">
                    {feature.category}
                  </div>
                  <h3 className="text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Feature Highlights Section */}
        <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-3xl p-12 mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-gray-900 text-center mb-12">
              Why DoctorBabu Stands Out
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white">1</span>
                  </div>
                  <div>
                    <h4 className="text-gray-900 mb-2">Local Language Support</h4>
                    <p className="text-gray-600">
                      Work in your preferred language with our AI voice assistant that understands regional languages and medical terminology.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white">2</span>
                  </div>
                  <div>
                    <h4 className="text-gray-900 mb-2">WhatsApp-First Approach</h4>
                    <p className="text-gray-600">
                      Reach patients where they are. Send reminders, share prescriptions, and manage appointments via WhatsApp.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white">3</span>
                  </div>
                  <div>
                    <h4 className="text-gray-900 mb-2">AI-Powered Efficiency</h4>
                    <p className="text-gray-600">
                      Let AI handle documentation, scheduling, and billing while you focus on providing excellent patient care.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white">4</span>
                  </div>
                  <div>
                    <h4 className="text-gray-900 mb-2">All-in-One Platform</h4>
                    <p className="text-gray-600">
                      No need for multiple tools. Everything from scheduling to billing to patient records in one place.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center space-y-8 max-w-2xl mx-auto">
          <div className="space-y-4">
            <h2 className="text-gray-900">
              Ready to experience these features?
            </h2>
            <p className="text-xl text-gray-600">
              Start your free 30-day trial today. No credit card required.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gap-2 bg-green-600 hover:bg-green-700" asChild>
              <a href="/start-free-trial">
                Start Free Trial
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="/book-demo">
                Book demo
              </a>
            </Button>
          </div>

          <div className="pt-8">
            <Button variant="ghost" asChild>
              <a href="/">← Back to Home</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
