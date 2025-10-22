import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Check, ArrowRight } from "lucide-react";

const soloPricing = [
  {
    name: "Basic",
    price: "₹999",
    period: "/month",
    description: "Perfect for starting your digital practice",
    features: [
      "Up to 100 patient records",
      "Basic appointment scheduling",
      "WhatsApp notifications",
      "Digital prescriptions",
      "Email support",
    ],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Standard",
    price: "₹2,499",
    period: "/month",
    description: "Most popular for solo practitioners",
    features: [
      "Unlimited patient records",
      "AI voice documentation",
      "Advanced scheduling with reminders",
      "Automated billing & invoicing",
      "WhatsApp integration",
      "Mobile app access",
      "Priority support",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Premium",
    price: "₹4,999",
    period: "/month",
    description: "For established practices",
    features: [
      "Everything in Standard",
      "Custom templates & workflows",
      "Advanced analytics & reports",
      "API access for integrations",
      "White-label patient portal",
      "Dedicated account manager",
      "24/7 phone support",
    ],
    cta: "Start Free Trial",
    popular: false,
  },
];

const clinicPricing = [
  {
    name: "Basic",
    price: "₹4,999",
    period: "/month",
    description: "For small clinics getting started",
    features: [
      "Up to 3 doctor accounts",
      "Up to 500 patient records",
      "Basic scheduling & billing",
      "WhatsApp notifications",
      "Email support",
    ],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Standard",
    price: "₹9,999",
    period: "/month",
    description: "Most popular for growing clinics",
    features: [
      "Up to 10 doctor accounts",
      "Unlimited patient records",
      "Staff & role management",
      "Multi-location support",
      "Doctor and Clinic Revenue Management",
      "Advanced analytics & reports",
      "Priority support",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Premium",
    price: "Custom",
    period: "",
    description: "For large multi-location practices",
    features: [
      "Unlimited doctor accounts",
      "Unlimited patient records",
      "Custom integrations",
      "Doctor and Clinic Revenue Management",
      "Dedicated infrastructure",
      "Custom training & onboarding",
      "...and much more",
    ],
    cta: "Start Free Trial",
    popular: false,
  },
];

export function PricingPage() {
  const [selectedTab, setSelectedTab] = useState("solo");

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-gray-900">Simple, Transparent Pricing</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the plan that's right for your practice. All plans include a 30-day free trial.
          </p>
        </div>

        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="max-w-6xl mx-auto">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
            <TabsTrigger value="solo">Solo Practitioners</TabsTrigger>
            <TabsTrigger value="clinic">Clinics & Multi-Doctor</TabsTrigger>
          </TabsList>

          <TabsContent value="solo" className="space-y-8">
            <div className="grid md:grid-cols-3 gap-8">
              {soloPricing.map((plan, index) => (
                <Card 
                  key={index}
                  className={`relative ${
                    plan.popular 
                      ? 'border-2 border-green-500 shadow-xl' 
                      : 'border border-gray-200'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-green-600 text-white px-4 py-1 rounded-full text-sm">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <CardHeader>
                    <CardTitle className="text-gray-900">{plan.name}</CardTitle>
                    <CardDescription>{plan.description}</CardDescription>
                    <div className="pt-4">
                      <span className="text-gray-900">{plan.price}</span>
                      <span className="text-gray-600">{plan.period}</span>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button 
                      className={`w-full gap-2 ${
                        plan.popular 
                          ? 'bg-green-600 hover:bg-green-700' 
                          : ''
                      }`}
                      variant={plan.popular ? 'default' : 'outline'}
                      asChild
                    >
                      <a href="/start-free-trial">
                        {plan.cta}
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="clinic" className="space-y-8">
            <div className="grid md:grid-cols-3 gap-8">
              {clinicPricing.map((plan, index) => (
                <Card 
                  key={index}
                  className={`relative ${
                    plan.popular 
                      ? 'border-2 border-green-500 shadow-xl' 
                      : 'border border-gray-200'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-green-600 text-white px-4 py-1 rounded-full text-sm">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <CardHeader>
                    <CardTitle className="text-gray-900">{plan.name}</CardTitle>
                    <CardDescription>{plan.description}</CardDescription>
                    <div className="pt-4">
                      <span className="text-gray-900">{plan.price}</span>
                      <span className="text-gray-600">{plan.period}</span>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button 
                      className={`w-full gap-2 ${
                        plan.popular 
                          ? 'bg-green-600 hover:bg-green-700' 
                          : ''
                      }`}
                      variant={plan.popular ? 'default' : 'outline'}
                      asChild
                    >
                      <a href="/start-free-trial">
                        {plan.cta}
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">
            All plans include a 30-day free trial. No credit card required.
          </p>
          <Button variant="outline" asChild>
            <a href="/">← Back to Home</a>
          </Button>
        </div>
      </div>
    </div>
  );
}
