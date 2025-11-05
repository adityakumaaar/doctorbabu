import { Button } from "./ui/button";
import { Shield, Lock, Server, Eye, Database, AlertCircle, CheckCircle, Mail, ShieldCheck, KeyRound, Cloud, Users, FileCheck, ActivitySquare } from "lucide-react";

export function SecurityPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-blue-50 to-white opacity-60" />
        <div className="container mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Left Column: Text Content */}
            <div className="text-center lg:text-left space-y-8">
              {/* Shield Icon Visual */}
              <div className="relative inline-flex">
                <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-blue-400 rounded-full blur-3xl opacity-20 animate-pulse" />
                <div className="relative w-32 h-32 bg-gradient-to-br from-green-600 to-blue-600 rounded-3xl flex items-center justify-center rotate-6 hover:rotate-0 transition-transform duration-500">
                  <Shield className="w-16 h-16 text-white" strokeWidth={1.5} />
                </div>
              </div>

              <div className="space-y-4">
                <h1 className="text-gray-900">
                  Bank-Grade Security for Your Medical Data
                </h1>
                <p className="text-xl text-gray-600">
                  Enterprise-level protection with <span className="text-green-600">Tier IV data centers</span>, end-to-end encryption, and <span className="text-blue-600">99.995% uptime</span> guarantee.
                </p>
              </div>

              {/* Key Security Stats */}
              <div className="grid grid-cols-3 gap-6 pt-4">
                <div className="text-center lg:text-left">
                  <div className="text-green-600 mb-2">SSL/TLS 1.3</div>
                  <div className="text-sm text-gray-600">Encryption</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-blue-600 mb-2">AES-256</div>
                  <div className="text-sm text-gray-600">At Rest</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-green-600 mb-2">24/7</div>
                  <div className="text-sm text-gray-600">Monitoring</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                <Button size="lg" className="gap-2 bg-green-600 hover:bg-green-700" asChild>
                  <a href="/start-free-trial">Start Free Trial</a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="/book-demo">Book demo</a>
                </Button>
              </div>
            </div>

            {/* Right Column: Placeholder Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-green-600 to-blue-600 rounded-3xl blur-3xl opacity-20" />
              <div className="relative aspect-[4/3] bg-gradient-to-br from-green-100 via-blue-100 to-green-50 rounded-3xl shadow-2xl flex items-center justify-center border-2 border-dashed border-green-300 overflow-hidden">
                <div className="text-center space-y-3 p-8">
                  <div className="w-20 h-20 bg-white/80 rounded-2xl flex items-center justify-center mx-auto">
                    <Shield className="w-12 h-12 text-green-600" />
                  </div>
                  <p className="text-green-700 font-medium">Security Infrastructure Visualization</p>
                  <p className="text-green-600 text-sm">Protected Data Centers & Encryption</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Features Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">
              How We Protect Your Data
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Multiple layers of security ensure your medical data remains private, encrypted, and accessible only to authorized users.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Infrastructure */}
            <div className="text-center space-y-4 p-6 rounded-2xl hover:bg-green-50 transition-colors">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto">
                <Server className="w-8 h-8 text-green-600" />
              </div>
              <div>
                <h3 className="text-gray-900 mb-2">Tier IV Data Centers</h3>
                <p className="text-gray-600 text-sm">ISO-certified facilities with redundant power, 24×7 surveillance, and biometric access control.</p>
              </div>
            </div>

            {/* Encryption */}
            <div className="text-center space-y-4 p-6 rounded-2xl hover:bg-blue-50 transition-colors">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto">
                <Lock className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <h3 className="text-gray-900 mb-2">End-to-End Encryption</h3>
                <p className="text-gray-600 text-sm">SSL/TLS 1.3 for data in transit and AES-256 encryption at rest with independent key management.</p>
              </div>
            </div>

            {/* Access Control */}
            <div className="text-center space-y-4 p-6 rounded-2xl hover:bg-green-50 transition-colors">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto">
                <KeyRound className="w-8 h-8 text-green-600" />
              </div>
              <div>
                <h3 className="text-gray-900 mb-2">Multi-Factor Authentication</h3>
                <p className="text-gray-600 text-sm">Role-based access with MFA, session timeouts, and mobile number masking for staff.</p>
              </div>
            </div>

            {/* Backups */}
            <div className="text-center space-y-4 p-6 rounded-2xl hover:bg-blue-50 transition-colors">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto">
                <Cloud className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <h3 className="text-gray-900 mb-2">Automated Backups</h3>
                <p className="text-gray-600 text-sm">Daily encrypted backups stored across geographically diverse locations with instant recovery.</p>
              </div>
            </div>

            {/* Monitoring */}
            <div className="text-center space-y-4 p-6 rounded-2xl hover:bg-green-50 transition-colors">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto">
                <ActivitySquare className="w-8 h-8 text-green-600" />
              </div>
              <div>
                <h3 className="text-gray-900 mb-2">Real-Time Monitoring</h3>
                <p className="text-gray-600 text-sm">24/7 automated monitoring with anomaly detection and immediate incident escalation.</p>
              </div>
            </div>

            {/* Compliance */}
            <div className="text-center space-y-4 p-6 rounded-2xl hover:bg-blue-50 transition-colors">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto">
                <ShieldCheck className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <h3 className="text-gray-900 mb-2">Compliance Ready</h3>
                <p className="text-gray-600 text-sm">Architecture aligned with ISO/IEC 27001 and HIPAA standards. Third-party audit in progress.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data We Collect */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">What We Collect & How We Use It</h2>
            <p className="text-gray-600">Transparent data practices for complete peace of mind.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 space-y-3">
              <div className="flex items-start gap-3">
                <Database className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-gray-900 mb-1">Patient Records</h4>
                  <p className="text-gray-600 text-sm">Diagnoses, prescriptions, test results, and medical notes.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 space-y-3">
              <div className="flex items-start gap-3">
                <Users className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-gray-900 mb-1">Personal Information</h4>
                  <p className="text-gray-600 text-sm">Name, gender, birth date, masked contact details, and address.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 space-y-3">
              <div className="flex items-start gap-3">
                <FileCheck className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-gray-900 mb-1">Clinic Data</h4>
                  <p className="text-gray-600 text-sm">Doctor profiles, appointments, and billing information.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 space-y-3">
              <div className="flex items-start gap-3">
                <Eye className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-gray-900 mb-1">System Logs</h4>
                  <p className="text-gray-600 text-sm">Anonymized access logs for troubleshooting and security analysis.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-br from-green-600 to-blue-600 rounded-3xl p-8 md:p-12 text-white text-center">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h2 className="mb-4">Our Security Promise</h2>
            <p className="text-lg text-green-50 max-w-2xl mx-auto mb-8">
              Every byte of medical data remains private, encrypted, and accessible only to authorized users. With Tier IV infrastructure, enterprise encryption, and automated monitoring, we deliver unmatched reliability and confidentiality.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>Staff Confidentiality Agreements</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>Regular Penetration Testing</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>Independent Security Audits</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Support */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">Questions About Security?</h2>
            <p className="text-gray-600">Our team is here to help. Reach out anytime.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Mail className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="text-gray-900 mb-2">Sales Enquiries</h4>
              <a href="mailto:sales@doctorbabu.co.in" className="text-green-600 hover:underline text-sm">
                sales@doctorbabu.co.in
              </a>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <AlertCircle className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="text-gray-900 mb-2">Technical Support</h4>
              <a href="mailto:support@doctorbabu.co.in" className="text-blue-600 hover:underline text-sm">
                support@doctorbabu.co.in
              </a>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <ShieldCheck className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="text-gray-900 mb-2">Data Protection</h4>
              <a href="mailto:privacy@doctorbabu.co.in" className="text-green-600 hover:underline text-sm">
                privacy@doctorbabu.co.in
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-gray-900 mb-4">
            Ready to Experience Secure Healthcare Management?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of healthcare professionals who trust DoctorBabu with their practice data.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gap-2 bg-green-600 hover:bg-green-700" asChild>
              <a href="/start-free-trial">Start Free Trial</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="/book-demo">Book demo</a>
            </Button>
          </div>
          <div className="mt-8">
            <Button variant="ghost" asChild>
              <a href="/">← Back to Home</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
