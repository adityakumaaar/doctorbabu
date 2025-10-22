import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { toast } from "sonner@2.0.3";
import { Video, ArrowRight } from "lucide-react";

export function BookDemoPage() {
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    email: "",
    practiceName: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success("We got your request for a demo", {
      description: "Our team will reach out to you on WhatsApp shortly.",
    });
    
    setIsSubmitting(false);
    setFormData({
      name: "",
      whatsapp: "",
      email: "",
      practiceName: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h1 className="text-gray-900">Book a Demo</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See DoctorBabu in action. Schedule a personalized walkthrough with our team.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Demo Video Placeholder */}
            <Card className="border-2 border-dashed border-green-300 bg-gradient-to-br from-green-50 to-blue-50">
              <CardContent className="p-8 flex flex-col items-center justify-center min-h-[400px] space-y-4">
                <Video className="w-16 h-16 text-green-500" />
                <div className="text-center space-y-2">
                  <h3 className="text-gray-900">Product Walkthrough Video</h3>
                  <p className="text-gray-600 text-sm">
                    Placeholder for Loom video demonstration
                  </p>
                </div>
                <Button variant="outline" className="gap-2">
                  <Video className="w-4 h-4" />
                  Watch Demo Video
                </Button>
              </CardContent>
            </Card>

            {/* Demo Request Form */}
            <Card>
              <CardHeader>
                <CardTitle>Request a Demo</CardTitle>
                <CardDescription>
                  Fill in your details and we'll get back to you on WhatsApp
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Dr. John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="whatsapp">WhatsApp Number *</Label>
                    <Input
                      id="whatsapp"
                      name="whatsapp"
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.whatsapp}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="doctor@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="practiceName">Practice/Clinic Name</Label>
                    <Input
                      id="practiceName"
                      name="practiceName"
                      type="text"
                      placeholder="ABC Medical Clinic"
                      value={formData.practiceName}
                      onChange={handleChange}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full gap-2 bg-green-600 hover:bg-green-700"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Request Demo"}
                    <ArrowRight className="w-4 h-4" />
                  </Button>

                  <p className="text-sm text-gray-500 text-center">
                    We'll respond within 24 hours on your WhatsApp number
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Button variant="ghost" asChild>
              <a href="/">← Back to Home</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
