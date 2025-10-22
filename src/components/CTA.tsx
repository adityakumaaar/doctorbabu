import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="bg-gradient-to-br from-green-600 to-blue-600 rounded-3xl p-12 md:p-16 text-center text-white">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-white">
              Ready to transform your practice?
            </h2>
            <p className="text-xl text-green-100">
              Join thousands of healthcare providers who've already made the switch to smarter practice management
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="gap-2" asChild>
                <a href="/start-free-trial">
                  Start Free Trial
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10" asChild>
                <a href="/book-demo">
                  Book demo
                </a>
              </Button>
            </div>
            
            <p className="text-sm text-green-100">
              No credit card required • Setup in minutes • Cancel anytime
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
