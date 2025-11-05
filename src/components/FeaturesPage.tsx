import { MessageCircle, FileText, Mic, Calendar, CreditCard, Bot, Clock, Sparkles, Zap, HeartHandshake } from "lucide-react";
import { Button } from "./ui/button";

export function FeaturesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 via-blue-50 to-white">
        <div className="container mx-auto">
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full border border-green-200">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm">Complete Practice Management Solution</span>
            </div>
            <h1 className="text-gray-900">
              Powerful Features for Modern Healthcare
            </h1>
            <p className="text-xl text-gray-600">
              Everything you need to streamline your practice, save time, and provide better patient care—all in one integrated platform.
            </p>
          </div>
        </div>
      </section>

      {/* AI-Powered Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl flex items-center justify-center">
              <Bot className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <h2 className="text-gray-900">AI-Powered Intelligence</h2>
              <p className="text-gray-600">Work smarter with intelligent automation</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 space-y-4 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center">
                <Mic className="w-8 h-8 text-purple-600" />
              </div>
              <div className="space-y-2">
                <h3 className="text-gray-900">AI Voice Integration</h3>
                <p className="text-sm text-purple-600 font-medium">In Your Local Language</p>
                <p className="text-gray-600">
                  Document consultations hands-free using voice commands in your preferred local language. Our AI understands medical terminology and context, making documentation effortless.
                </p>
                <ul className="space-y-2 pt-2">
                  <li className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="text-purple-600">•</span>
                    <span>Multi-language support including Hindi, Tamil, Telugu, and more</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="text-purple-600">•</span>
                    <span>Real-time transcription with medical vocabulary</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="text-purple-600">•</span>
                    <span>Automatic note formatting and structure</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 space-y-4 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center">
                <Bot className="w-8 h-8 text-blue-600" />
              </div>
              <div className="space-y-2">
                <h3 className="text-gray-900">AI Assistant</h3>
                <p className="text-sm text-blue-600 font-medium">Your Intelligent Helper</p>
                <p className="text-gray-600">
                  Your intelligent helper for documentation, prescription suggestions, and clinical decision support. Let AI handle the routine so you can focus on care.
                </p>
                <ul className="space-y-2 pt-2">
                  <li className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="text-blue-600">•</span>
                    <span>Smart prescription recommendations based on patient history</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="text-blue-600">•</span>
                    <span>Drug interaction alerts and contraindication warnings</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="text-blue-600">•</span>
                    <span>Automated follow-up scheduling suggestions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Communication Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-blue-100 rounded-xl flex items-center justify-center">
              <MessageCircle className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h2 className="text-gray-900">Patient Communication</h2>
              <p className="text-gray-600">Stay connected with your patients effortlessly</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12 space-y-6 shadow-lg">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center">
                  <MessageCircle className="w-8 h-8 text-green-600" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-gray-900">WhatsApp Integration</h3>
                  <p className="text-sm text-green-600 font-medium">Reach Patients Where They Are</p>
                  <p className="text-gray-600">
                    Send appointment reminders, share prescriptions, and communicate with patients directly through WhatsApp—the platform they already use every day.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-green-50 rounded-xl p-6 space-y-3">
                  <h4 className="text-gray-900 font-medium">Key Capabilities</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <div className="w-6 h-6 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <span>Automated appointment reminders 24 hours before</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <div className="w-6 h-6 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <span>Instant prescription sharing with digital signature</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <div className="w-6 h-6 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <span>Two-way communication for quick queries</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <div className="w-6 h-6 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <span>Payment collection links and receipts</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Tools Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-green-100 rounded-xl flex items-center justify-center">
              <FileText className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h2 className="text-gray-900">Clinical Documentation</h2>
              <p className="text-gray-600">Professional tools for efficient healthcare delivery</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-blue-50 rounded-2xl p-8 space-y-4">
              <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center">
                <FileText className="w-8 h-8 text-blue-600" />
              </div>
              <div className="space-y-2">
                <h3 className="text-gray-900">Digital Prescriptions</h3>
                <p className="text-sm text-blue-600 font-medium">Smart & Professional</p>
                <p className="text-gray-600">
                  Create digital prescriptions with smart templates, drug interaction checks, and instant sharing with patients.
                </p>
                <ul className="space-y-2 pt-2">
                  <li className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="text-blue-600">•</span>
                    <span>Customizable prescription templates</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="text-blue-600">•</span>
                    <span>Drug database with dosage guidelines</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="text-blue-600">•</span>
                    <span>Digital signature and clinic branding</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-green-50 rounded-2xl p-8 space-y-4">
              <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center">
                <FileText className="w-8 h-8 text-green-600" />
              </div>
              <div className="space-y-2">
                <h3 className="text-gray-900">Digital Records</h3>
                <p className="text-sm text-green-600 font-medium">Complete Patient History</p>
                <p className="text-gray-600">
                  Secure, searchable patient records with AI-assisted note-taking and instant access to complete medical histories.
                </p>
                <ul className="space-y-2 pt-2">
                  <li className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="text-green-600">•</span>
                    <span>Comprehensive medical history at your fingertips</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="text-green-600">•</span>
                    <span>Quick search across all patient records</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="text-green-600">•</span>
                    <span>Attach reports, images, and test results</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Management Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-yellow-100 rounded-xl flex items-center justify-center">
              <Calendar className="w-6 h-6 text-orange-600" />
            </div>
            <div>
              <h2 className="text-gray-900">Practice Management</h2>
              <p className="text-gray-600">Streamline operations and save time</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 space-y-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center">
                <Calendar className="w-7 h-7 text-orange-600" />
              </div>
              <div className="space-y-2">
                <h3 className="text-gray-900">Smart Scheduling</h3>
                <p className="text-gray-600 text-sm">
                  AI-powered appointment booking that eliminates double-bookings and optimizes your daily schedule automatically.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 space-y-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center">
                <CreditCard className="w-7 h-7 text-green-600" />
              </div>
              <div className="space-y-2">
                <h3 className="text-gray-900">Automated Billing</h3>
                <p className="text-gray-600 text-sm">
                  Streamlined invoicing and payment processing with insurance claim management built right in.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 space-y-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center">
                <Clock className="w-7 h-7 text-blue-600" />
              </div>
              <div className="space-y-2">
                <h3 className="text-gray-900">Save 10+ Hours Weekly</h3>
                <p className="text-gray-600 text-sm">
                  Automate repetitive tasks and paperwork, giving you more time with patients and less with admin work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why DoctorBabu Stands Out */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-600 to-blue-600">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-white mb-4">
              Why DoctorBabu Stands Out
            </h2>
            <p className="text-green-50 text-lg">
              Built specifically for Indian healthcare providers with unique features you won't find elsewhere
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 space-y-4 hover:bg-white/20 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mic className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white mb-2 font-semibold">Local Language Support</h4>
                  <p className="text-green-50">
                    Work in your preferred language with our AI voice assistant that understands regional languages and medical terminology.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 space-y-4 hover:bg-white/20 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white mb-2 font-semibold">WhatsApp-First Approach</h4>
                  <p className="text-green-50">
                    Reach patients where they are. Send reminders, share prescriptions, and manage appointments via WhatsApp.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 space-y-4 hover:bg-white/20 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white mb-2 font-semibold">AI-Powered Efficiency</h4>
                  <p className="text-green-50">
                    Let AI handle documentation, scheduling, and billing while you focus on providing excellent patient care.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 space-y-4 hover:bg-white/20 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <HeartHandshake className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white mb-2 font-semibold">All-in-One Platform</h4>
                  <p className="text-green-50">
                    No need for multiple tools. Everything from scheduling to billing to patient records in one place.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="text-center space-y-8 max-w-2xl mx-auto">
            <div className="space-y-4">
              <h2 className="text-gray-900">
                Ready to Experience These Features?
              </h2>
              <p className="text-xl text-gray-600">
                Start your free 30-day trial today. No credit card required.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gap-2 bg-green-600 hover:bg-green-700" asChild>
                <a href="/start-free-trial">
                  Start Free Trial
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/book-demo">
                  Book demo
                </a>
              </Button>
            </div>

            <div className="pt-8">
              <Button variant="ghost" asChild>
                <a href="/">← Back to Home</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
