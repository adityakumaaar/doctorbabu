import { MessageCircle, FileText, Mic } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

const features = [
  {
    icon: MessageCircle,
    title: "WhatsApp Integration",
    description: "Send appointment reminders, share prescriptions, and communicate with patients directly through WhatsApp.",
  },
  {
    icon: FileText,
    title: "Rx Prescription",
    description: "Create digital prescriptions with smart templates, drug interaction checks, and instant sharing with patients.",
  },
  {
    icon: Mic,
    title: "AI Voice Integration (in your local language)",
    description: "Document consultations hands-free using voice commands in your preferred local language.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-gray-900">
            Everything you need to run your practice
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Powerful features designed specifically for private healthcare providers
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-gray-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" asChild>
            <a href="/features">View All Features</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
