import { Clock, TrendingUp, Heart, Shield } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    stat: "10+ Hours",
    description: "Saved per week on admin tasks",
  },
  {
    icon: TrendingUp,
    stat: "40%",
    description: "Increase in patient capacity",
  },
  {
    icon: Heart,
    stat: "98%",
    description: "Doctor satisfaction rate",
  },
];

export function Benefits() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-green-50">
      <div className="container mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-gray-900">
            Why healthcare providers choose DoctorBabu
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Measurable improvements in efficiency, patient care, and practice growth
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center space-y-3">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto">
                <benefit.icon className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-green-600">{benefit.stat}</div>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
