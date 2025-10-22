import { Button } from "./ui/button";
import { User, Building2, Check, ArrowRight } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const cohorts = [
  {
    icon: User,
    title: "Solo Practitioners",
    description: "Perfect for independent doctors who want to streamline their practice",
    features: [
      "Manage Patient Records",
      "AI voice documentation",
      "Automated billing & invoicing",
      "WhatsApp appointment reminders",
      "Mobile app access",
      "24/7 support",
    ],
    cta: "Start Free Trial",
    highlight: true,
  },
  {
    icon: Building2,
    title: "Clinics & Multi-Doctor Practices",
    description: "Comprehensive solution for growing practices and multi-location clinics",
    features: [
      "Everything in Solo plan",
      "Multiple doctor accounts",
      "Staff & role management",
      "Multi-location support",
      "Doctor and Clinic Revenue Management",
      "...and much more",
    ],
    cta: "Start Free Trial",
    highlight: false,
  },
];

export function Cohorts() {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-gray-900">
            Built for every type of practice
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Whether you're a solo practitioner or running a multi-location clinic, we have you covered
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {cohorts.map((cohort, index) => (
            <Card 
              key={index} 
              className={`relative ${
                cohort.highlight 
                  ? 'border-2 border-green-500 shadow-xl' 
                  : 'border border-gray-200'
              }`}
            >
              {cohort.highlight && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-green-600 text-white px-4 py-1 rounded-full text-sm">
                    Most Popular
                  </span>
                </div>
              )}
              
              <CardContent className="p-8 space-y-6">
                <div className="space-y-4">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                    cohort.highlight 
                      ? 'bg-green-100' 
                      : 'bg-gray-100'
                  }`}>
                    <cohort.icon className={`w-7 h-7 ${
                      cohort.highlight ? 'text-green-600' : 'text-gray-600'
                    }`} />
                  </div>
                  
                  <div>
                    <h3 className="text-gray-900 mb-2">{cohort.title}</h3>
                    <p className="text-gray-600">{cohort.description}</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {cohort.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  className={`w-full gap-2 ${
                    cohort.highlight 
                      ? 'bg-green-600 hover:bg-green-700' 
                      : ''
                  }`}
                  variant={cohort.highlight ? 'default' : 'outline'}
                  asChild
                >
                  <a href="/start-free-trial">
                    {cohort.cta}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
