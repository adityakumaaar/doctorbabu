import { Button } from "./ui/button";
import { ArrowRight, Mic, ImageIcon } from "lucide-react";

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 rounded-full border border-green-200">
              <Mic className="w-4 h-4" />
              <span className="text-sm">AI Voice Assistant • Hands-Free Documentation</span>
            </div>
            
            <div className="space-y-4">
              <h1 className="text-gray-900">
                Focus on Care. We Handle the Rest.
              </h1>
              <p className="text-xl text-gray-600">
                <span className="text-green-600">DoctorBabu</span> is the all-in-one webapp that streamlines your appointments, records, and billing with a <span className="text-green-600">powerful AI voice assistant</span>, so you can focus entirely on your patients.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gap-2 bg-green-600 hover:bg-green-700" asChild>
                <a href="/start-free-trial">
                  Start Free Trial
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/book-demo">
                  Book demo
                </a>
              </Button>
            </div>
            
            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="text-gray-900">10,000+</div>
                <div className="text-sm text-gray-600">Healthcare Providers</div>
              </div>
              <div className="w-px h-12 bg-gray-200" />
              <div>
                <div className="text-gray-900">5M+</div>
                <div className="text-sm text-gray-600">Appointments Managed</div>
              </div>
              <div className="w-px h-12 bg-gray-200" />
              <div>
                <div className="text-gray-900">99.9%</div>
                <div className="text-sm text-gray-600">Uptime</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-green-600 to-blue-600 rounded-3xl blur-3xl opacity-20" />
            {/* Placeholder for hero image/illustration */}
            <div className="relative aspect-[4/3] bg-gradient-to-br from-green-100 to-blue-100 rounded-3xl shadow-2xl flex items-center justify-center border-2 border-dashed border-green-300">
              <div className="text-center space-y-2">
                <ImageIcon className="w-16 h-16 text-green-400 mx-auto" />
                <p className="text-green-600">Hero Image / Product Screenshot</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
