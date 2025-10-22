import { ImageIcon } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Quick Setup",
    description: "Sign up in minutes and import your existing patient data. Our team helps you get started with personalized onboarding.",
  },
  {
    number: "02",
    title: "Configure your practice",
    description: "Configure appointment types, billing rates, and templates to match your practice's unique needs.",
  },
  {
    number: "03",
    title: "Start Practicing Smarter",
    description: "Book patient appointments and start consultancy",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            {/* Placeholder for product screenshot/demo */}
            <div className="aspect-[4/3] bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl shadow-2xl flex items-center justify-center border-2 border-dashed border-green-300">
              <div className="text-center space-y-2">
                <ImageIcon className="w-16 h-16 text-green-400 mx-auto" />
                <p className="text-green-600">Dashboard Screenshot / Demo</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-8 order-1 lg:order-2">
            <div className="space-y-4">
              <h2 className="text-gray-900">
                Get started in three simple steps
              </h2>
              <p className="text-xl text-gray-600">
                From setup to seamless practice management in less than a day
              </p>
            </div>
            
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-green-600 text-white rounded-lg flex items-center justify-center">
                      {step.number}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-gray-900">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
