import { Card, CardContent } from "./ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Dr. Priya Sharma",
    role: "General Practitioner",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya",
    content: "DoctorBabu has transformed my practice. I've reduced my admin time by 60% and can now see more patients without feeling overwhelmed.",
    rating: 5,
  },
  {
    name: "Dr. Rajesh Kumar",
    role: "Pediatrician",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rajesh",
    content: "The AI assistant is incredible. It helps me with clinical notes and even suggests relevant treatment options based on symptoms.",
    rating: 5,
  },
  {
    name: "Dr. Anjali Desai",
    role: "Dermatologist",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Anjali",
    content: "Best investment for my clinic. The billing automation alone has paid for itself. Highly recommend to any private practitioner.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-gray-900">
            Trusted by healthcare professionals
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See what doctors are saying about DoctorBabu
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-gray-200">
              <CardContent className="p-6 space-y-4">
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700">{testimonial.content}</p>
                <div className="flex items-center gap-3 pt-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <div className="text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
