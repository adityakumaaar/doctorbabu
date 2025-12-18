import { MessageCircle, FileText, Mic, Calendar, CreditCard, Bot, Clock, Sparkles, Zap, HeartHandshake, Shield, Users, Check } from "lucide-react";
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

      {/* AI Voice Integration */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: 'linear-gradient(to bottom right, #f3e8ff, #ede9fe, #ddd6fe)' }}>
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg" style={{ background: 'linear-gradient(to bottom right, #9333ea, #7c3aed)' }}>
              <Mic className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-gray-900">AI Voice Integration</h2>
              <p style={{ color: '#9333ea' }}>Document consultations hands-free in your local language</p>
            </div>
          </div>

          <div className="rounded-2xl p-8 md:p-12 space-y-6 shadow-xl" style={{ background: 'linear-gradient(to bottom right, #9333ea, #7c3aed)' }}>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center">
                  <Mic className="w-8 h-8 text-white" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-white">Speak, Don't Type</h3>
                  <p className="text-sm font-medium" style={{ color: '#e9d5ff' }}>Multi-Language Medical Transcription</p>
                  <p style={{ color: '#f3e8ff' }}>
                    Our AI understands medical terminology and context, making documentation effortless. Speak naturally in your preferred language and watch as your notes are automatically structured and formatted.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-white rounded-xl p-6 space-y-3">
                  <h4 className="font-medium" style={{ color: '#581c87' }}>Key Capabilities</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm text-gray-700">
                      <div className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: '#9333ea' }}>
                        <Check className="w-3.5 h-3.5 text-white" />
                      </div>
                      <span>Multi-language support including Hindi, Tamil, Telugu, and more</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-700">
                      <div className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: '#9333ea' }}>
                        <Check className="w-3.5 h-3.5 text-white" />
                      </div>
                      <span>Real-time transcription with medical vocabulary recognition</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-700">
                      <div className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: '#9333ea' }}>
                        <Check className="w-3.5 h-3.5 text-white" />
                      </div>
                      <span>Automatic note formatting and SOAP structure</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-700">
                      <div className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: '#9333ea' }}>
                        <Check className="w-3.5 h-3.5 text-white" />
                      </div>
                      <span>Voice-activated prescription dictation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Assistant */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: 'linear-gradient(to bottom right, #dbeafe, #e0e7ff, #c7d2fe)' }}>
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg" style={{ background: 'linear-gradient(to bottom right, #2563eb, #4f46e5)' }}>
              <Bot className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-gray-900">AI Assistant</h2>
              <p className="text-blue-600">Your intelligent helper for clinical decisions</p>
            </div>
          </div>

          <div className="rounded-2xl p-8 md:p-12 space-y-6 shadow-xl" style={{ background: 'linear-gradient(to bottom right, #2563eb, #4338ca)' }}>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center">
                  <Bot className="w-8 h-8 text-white" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-white">Clinical Decision Support</h3>
                  <p className="text-sm font-medium" style={{ color: '#bfdbfe' }}>AI That Works With You</p>
                  <p style={{ color: '#dbeafe' }}>
                    Let AI handle the routine so you can focus on care. Get intelligent suggestions for documentation, prescriptions, and follow-ups based on patient history and clinical guidelines.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-white rounded-xl p-6 space-y-3">
                  <h4 className="font-medium" style={{ color: '#1e3a8a' }}>Key Capabilities</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm text-gray-700">
                      <div className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: '#2563eb' }}>
                        <Check className="w-3.5 h-3.5 text-white" />
                      </div>
                      <span>Smart prescription recommendations based on patient history</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-700">
                      <div className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: '#2563eb' }}>
                        <Check className="w-3.5 h-3.5 text-white" />
                      </div>
                      <span>Drug interaction alerts and contraindication warnings</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-700">
                      <div className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: '#2563eb' }}>
                        <Check className="w-3.5 h-3.5 text-white" />
                      </div>
                      <span>Automated follow-up scheduling suggestions</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-700">
                      <div className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: '#2563eb' }}>
                        <Check className="w-3.5 h-3.5 text-white" />
                      </div>
                      <span>Intelligent auto-completion for clinical notes</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Integration */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-100 via-green-50 to-blue-50">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg bg-green-600">
              <MessageCircle className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-gray-900">WhatsApp Integration</h2>
              <p className="text-green-600">Stay connected with your patients effortlessly</p>
            </div>
          </div>

          <div className="rounded-2xl p-8 md:p-12 space-y-6 shadow-xl" style={{ background: 'linear-gradient(to bottom right, #16a34a, #15803d)' }}>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-white">Reach Patients Where They Are</h3>
                  <p className="text-sm font-medium text-green-100">WhatsApp-First Communication</p>
                  <p className="text-green-50">
                    Send appointment reminders, share prescriptions, and communicate with patients directly through WhatsApp—the platform they already use every day.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-white rounded-xl p-6 space-y-3">
                  <h4 className="text-green-700 font-medium">Key Capabilities</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm text-gray-700">
                      <div className="w-6 h-6 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Check className="w-3.5 h-3.5 text-white" />
                      </div>
                      <span>Automated appointment reminders 24 hours before</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-700">
                      <div className="w-6 h-6 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Check className="w-3.5 h-3.5 text-white" />
                      </div>
                      <span>Instant prescription sharing with digital signature</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-700">
                      <div className="w-6 h-6 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Check className="w-3.5 h-3.5 text-white" />
                      </div>
                      <span>Two-way communication for quick patient queries</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-700">
                      <div className="w-6 h-6 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Check className="w-3.5 h-3.5 text-white" />
                      </div>
                      <span>Payment collection links and digital receipts</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Prescriptions */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: 'linear-gradient(to bottom right, #cffafe, #e0f2fe, #bae6fd)' }}>
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg" style={{ background: 'linear-gradient(to bottom right, #0891b2, #0284c7)' }}>
              <FileText className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-gray-900">Digital Prescriptions</h2>
              <p style={{ color: '#0891b2' }}>Smart, professional, and instantly shareable</p>
            </div>
          </div>

          <div className="rounded-2xl p-8 md:p-12 space-y-6 shadow-xl" style={{ background: 'linear-gradient(to bottom right, #0891b2, #0369a1)' }}>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-white">Prescribe with Confidence</h3>
                  <p className="text-sm font-medium" style={{ color: '#a5f3fc' }}>Smart Templates & Safety Checks</p>
                  <p style={{ color: '#cffafe' }}>
                    Create digital prescriptions with smart templates, drug interaction checks, and instant sharing with patients. Professional-looking prescriptions with your clinic branding.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-white rounded-xl p-6 space-y-3">
                  <h4 className="font-medium" style={{ color: '#155e75' }}>Key Capabilities</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm text-gray-700">
                      <div className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: '#0891b2' }}>
                        <Check className="w-3.5 h-3.5 text-white" />
                      </div>
                      <span>Customizable prescription templates for common conditions</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-700">
                      <div className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: '#0891b2' }}>
                        <Check className="w-3.5 h-3.5 text-white" />
                      </div>
                      <span>Comprehensive drug database with dosage guidelines</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-700">
                      <div className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: '#0891b2' }}>
                        <Check className="w-3.5 h-3.5 text-white" />
                      </div>
                      <span>Digital signature and personalized clinic branding</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-700">
                      <div className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: '#0891b2' }}>
                        <Check className="w-3.5 h-3.5 text-white" />
                      </div>
                      <span>One-click sharing via WhatsApp or email</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Records */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: 'linear-gradient(to bottom right, #ccfbf1, #d1fae5, #a7f3d0)' }}>
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg" style={{ background: 'linear-gradient(to bottom right, #0d9488, #059669)' }}>
              <Users className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-gray-900">Digital Patient Records</h2>
              <p style={{ color: '#0d9488' }}>Complete medical history at your fingertips</p>
            </div>
          </div>

          <div className="rounded-2xl p-8 md:p-12 space-y-6 shadow-xl" style={{ background: 'linear-gradient(to bottom right, #0d9488, #047857)' }}>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-white">Know Your Patients Better</h3>
                  <p className="text-sm font-medium" style={{ color: '#99f6e4' }}>Comprehensive EMR System</p>
                  <p style={{ color: '#ccfbf1' }}>
                    Secure, searchable patient records with AI-assisted note-taking and instant access to complete medical histories. Never lose a patient's information again.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-white rounded-xl p-6 space-y-3">
                  <h4 className="font-medium" style={{ color: '#134e4a' }}>Key Capabilities</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm text-gray-700">
                      <div className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: '#0d9488' }}>
                        <Check className="w-3.5 h-3.5 text-white" />
                      </div>
                      <span>Complete medical history accessible in seconds</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-700">
                      <div className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: '#0d9488' }}>
                        <Check className="w-3.5 h-3.5 text-white" />
                      </div>
                      <span>Quick search across all patient records</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-700">
                      <div className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: '#0d9488' }}>
                        <Check className="w-3.5 h-3.5 text-white" />
                      </div>
                      <span>Attach reports, images, and test results</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-700">
                      <div className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: '#0d9488' }}>
                        <Check className="w-3.5 h-3.5 text-white" />
                      </div>
                      <span>Timeline view of all patient visits and treatments</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Smart Scheduling */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: 'linear-gradient(to bottom right, #ffedd5, #fed7aa, #fef3c7)' }}>
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg" style={{ background: 'linear-gradient(to bottom right, #ea580c, #d97706)' }}>
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-gray-900">Smart Scheduling</h2>
              <p style={{ color: '#ea580c' }}>AI-powered appointment management</p>
            </div>
          </div>

          <div className="rounded-2xl p-8 md:p-12 space-y-6 shadow-xl" style={{ background: 'linear-gradient(to bottom right, #ea580c, #c2410c)' }}>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-white">Never Double-Book Again</h3>
                  <p className="text-sm font-medium" style={{ color: '#fed7aa' }}>Intelligent Calendar Management</p>
                  <p style={{ color: '#ffedd5' }}>
                    AI-powered appointment booking that eliminates double-bookings and optimizes your daily schedule automatically. Reduce no-shows and maximize your time.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-white rounded-xl p-6 space-y-3">
                  <h4 className="font-medium" style={{ color: '#7c2d12' }}>Key Capabilities</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm text-gray-700">
                      <div className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: '#ea580c' }}>
                        <Check className="w-3.5 h-3.5 text-white" />
                      </div>
                      <span>Smart conflict detection prevents double-bookings</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-700">
                      <div className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: '#ea580c' }}>
                        <Check className="w-3.5 h-3.5 text-white" />
                      </div>
                      <span>Automated reminder system reduces no-shows by 70%</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-700">
                      <div className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: '#ea580c' }}>
                        <Check className="w-3.5 h-3.5 text-white" />
                      </div>
                      <span>Online booking for patients available 24/7</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-700">
                      <div className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: '#ea580c' }}>
                        <Check className="w-3.5 h-3.5 text-white" />
                      </div>
                      <span>Waitlist management for cancelled appointments</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Automated Billing */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: 'linear-gradient(to bottom right, #d1fae5, #a7f3d0, #bbf7d0)' }}>
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg" style={{ background: 'linear-gradient(to bottom right, #059669, #16a34a)' }}>
              <CreditCard className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-gray-900">Automated Billing</h2>
              <p style={{ color: '#059669' }}>Streamlined invoicing and payment collection</p>
            </div>
          </div>

          <div className="rounded-2xl p-8 md:p-12 space-y-6 shadow-xl" style={{ background: 'linear-gradient(to bottom right, #059669, #047857)' }}>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center">
                  <CreditCard className="w-8 h-8 text-white" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-white">Get Paid Faster</h3>
                  <p className="text-sm font-medium" style={{ color: '#a7f3d0' }}>Hassle-Free Payment Processing</p>
                  <p style={{ color: '#d1fae5' }}>
                    Streamlined invoicing and payment processing with multiple payment options. Send payment links, track outstanding dues, and manage your revenue effortlessly.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-white rounded-xl p-6 space-y-3">
                  <h4 className="font-medium" style={{ color: '#064e3b' }}>Key Capabilities</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm text-gray-700">
                      <div className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: '#059669' }}>
                        <Check className="w-3.5 h-3.5 text-white" />
                      </div>
                      <span>One-click invoice generation after consultations</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-700">
                      <div className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: '#059669' }}>
                        <Check className="w-3.5 h-3.5 text-white" />
                      </div>
                      <span>UPI, card, and net banking payment acceptance</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-700">
                      <div className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: '#059669' }}>
                        <Check className="w-3.5 h-3.5 text-white" />
                      </div>
                      <span>Automatic payment reminders for outstanding dues</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-700">
                      <div className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: '#059669' }}>
                        <Check className="w-3.5 h-3.5 text-white" />
                      </div>
                      <span>Revenue analytics and financial reports</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Time Savings */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: 'linear-gradient(to bottom right, #e0e7ff, #c7d2fe, #ddd6fe)' }}>
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg" style={{ background: 'linear-gradient(to bottom right, #4f46e5, #7c3aed)' }}>
              <Clock className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-gray-900">Save 10+ Hours Weekly</h2>
              <p style={{ color: '#4f46e5' }}>Automate repetitive tasks and paperwork</p>
            </div>
          </div>

          <div className="rounded-2xl p-8 md:p-12 space-y-6 shadow-xl" style={{ background: 'linear-gradient(to bottom right, #4f46e5, #6d28d9)' }}>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-white">More Time for Patients</h3>
                  <p className="text-sm font-medium" style={{ color: '#c7d2fe' }}>Less Admin, More Care</p>
                  <p style={{ color: '#e0e7ff' }}>
                    Automate repetitive tasks and paperwork, giving you more time with patients and less with administrative work. Focus on what matters most—providing excellent care.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-white rounded-xl p-6 space-y-3">
                  <h4 className="font-medium" style={{ color: '#312e81' }}>Key Capabilities</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm text-gray-700">
                      <div className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: '#4f46e5' }}>
                        <Check className="w-3.5 h-3.5 text-white" />
                      </div>
                      <span>Auto-generated consultation summaries</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-700">
                      <div className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: '#4f46e5' }}>
                        <Check className="w-3.5 h-3.5 text-white" />
                      </div>
                      <span>Batch processing for routine communications</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-700">
                      <div className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: '#4f46e5' }}>
                        <Check className="w-3.5 h-3.5 text-white" />
                      </div>
                      <span>One-click report generation for compliance</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-700">
                      <div className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: '#4f46e5' }}>
                        <Check className="w-3.5 h-3.5 text-white" />
                      </div>
                      <span>Smart templates for common workflows</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: 'linear-gradient(to bottom right, #f1f5f9, #e2e8f0, #cbd5e1)' }}>
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg" style={{ background: 'linear-gradient(to bottom right, #475569, #334155)' }}>
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-gray-900">Security & Compliance</h2>
              <p style={{ color: '#475569' }}>Enterprise-grade protection for patient data</p>
            </div>
          </div>

          <div className="rounded-2xl p-8 md:p-12 space-y-6 shadow-xl" style={{ background: 'linear-gradient(to bottom right, #475569, #1e293b)' }}>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-white">Your Data is Safe</h3>
                  <p className="text-sm font-medium" style={{ color: '#cbd5e1' }}>HIPAA-Ready Infrastructure</p>
                  <p style={{ color: '#e2e8f0' }}>
                    Built with healthcare compliance in mind. Your patient data is encrypted, secured, and protected with industry-leading security measures.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-white rounded-xl p-6 space-y-3">
                  <h4 className="font-medium" style={{ color: '#0f172a' }}>Key Capabilities</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm text-gray-700">
                      <div className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: '#475569' }}>
                        <Check className="w-3.5 h-3.5 text-white" />
                      </div>
                      <span>End-to-end encryption for all patient data</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-700">
                      <div className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: '#475569' }}>
                        <Check className="w-3.5 h-3.5 text-white" />
                      </div>
                      <span>Regular automated backups with disaster recovery</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-700">
                      <div className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: '#475569' }}>
                        <Check className="w-3.5 h-3.5 text-white" />
                      </div>
                      <span>Role-based access control for staff</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-700">
                      <div className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: '#475569' }}>
                        <Check className="w-3.5 h-3.5 text-white" />
                      </div>
                      <span>Comprehensive audit logs for compliance</span>
                    </li>
                  </ul>
                </div>
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
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 space-y-4 hover:bg-white/20 transition-colors">
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

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 space-y-4 hover:bg-white/20 transition-colors">
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

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 space-y-4 hover:bg-white/20 transition-colors">
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

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 space-y-4 hover:bg-white/20 transition-colors">
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
