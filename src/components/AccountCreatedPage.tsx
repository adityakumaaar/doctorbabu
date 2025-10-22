import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { CheckCircle, ArrowRight } from "lucide-react";

export function AccountCreatedPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white flex items-center justify-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto">
          <Card className="border-2 border-green-200">
            <CardContent className="p-12 text-center space-y-6">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-12 h-12 text-green-600" />
              </div>
              
              <div className="space-y-2">
                <h1 className="text-gray-900">Account Created!</h1>
                <p className="text-gray-600">
                  Your DoctorBabu account has been successfully created and is ready to use.
                </p>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4 space-y-2">
                <p className="text-sm text-gray-700">
                  <strong>What's Next?</strong>
                </p>
                <ul className="text-sm text-gray-600 space-y-1 text-left">
                  <li>✓ Set up your practice profile</li>
                  <li>✓ Import or add your patients</li>
                  <li>✓ Configure appointment schedules</li>
                  <li>✓ Start managing your practice</li>
                </ul>
              </div>

              <Button 
                size="lg" 
                className="w-full gap-2 bg-green-600 hover:bg-green-700"
              >
                Go to Dashboard
                <ArrowRight className="w-4 h-4" />
              </Button>

              <p className="text-sm text-gray-500">
                Need help? Check out our{" "}
                <a href="#" className="text-green-600 hover:underline">
                  Getting Started Guide
                </a>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
