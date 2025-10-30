import { Button } from "./ui/button";
import { Shield, Lock, Server, Eye, UserCheck, Database, AlertCircle, FileCheck, CheckCircle, Mail } from "lucide-react";

export function SecurityPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center">
              <Shield className="w-8 h-8 text-green-600" />
            </div>
          </div>
          <h1 className="text-gray-900 text-center mb-4">
            Data Privacy & Security Assurance
          </h1>
          <p className="text-xl text-gray-600 text-center">
            Doctor Babu (doctorbabu.co.in) is a trusted web-based clinic management software by Benevolent Software Technologies Private Limited, Saharsa, Bihar.
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Introduction */}
          <section>
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white">1</span>
              </div>
              <div className="flex-1">
                <h2 className="text-gray-900 mb-4">Introduction</h2>
                <p className="text-gray-600 leading-relaxed">
                  Doctor Babu provides a secure and reliable cloud-based platform for doctors, clinics, and small hospitals to manage their medical operations efficiently. This page explains how we protect all medical, personal, and operational data. The software is hosted in Tier IV data centers with manless operations and automated monitoring, eliminating physical access risk and ensuring 99.995% uptime.
                </p>
              </div>
            </div>
          </section>

          {/* What Data We Collect */}
          <section>
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white">2</span>
              </div>
              <div className="flex-1">
                <h2 className="text-gray-900 mb-4">What Data We Collect</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Database className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-gray-900 mb-1">Patient records</h4>
                      <p className="text-gray-600">Diagnoses, prescriptions, test results, and doctor notes entered through the platform.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <UserCheck className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-gray-900 mb-1">Personal information</h4>
                      <p className="text-gray-600">Name, gender, birth date, contact (internally masked for staff), and address.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FileCheck className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-gray-900 mb-1">Clinic data</h4>
                      <p className="text-gray-600">Doctor profiles, appointments, and billing information.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Eye className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-gray-900 mb-1">System logs</h4>
                      <p className="text-gray-600">Access logs and activity metadata, anonymized for analysis and troubleshooting.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Hosting & Infrastructure */}
          <section>
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white">3</span>
              </div>
              <div className="flex-1">
                <h2 className="text-gray-900 mb-4">Hosting & Infrastructure</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Server className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-gray-900 mb-1">Tier IV Data Centers</h4>
                      <p className="text-gray-600">Hosted in top-tier, ISO-certified facilities with redundant power, cooling, and 24×7 surveillance.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Lock className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-gray-900 mb-1">Manless operation</h4>
                      <p className="text-gray-600">Automated infrastructure with biometric entry restrictions ensures zero unauthorized human access.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-gray-900 mb-1">Firewalls & intrusion prevention</h4>
                      <p className="text-gray-600">Multi-layer firewalls and continuous intrusion detection prevent unauthorized access attempts.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Encryption, SSL Layers & Data Integrity */}
          <section>
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white">4</span>
              </div>
              <div className="flex-1">
                <h2 className="text-gray-900 mb-4">Encryption, SSL Layers & Data Integrity</h2>
                <div className="space-y-4">
                  <div className="pl-6 border-l-2 border-green-200">
                    <h4 className="text-gray-900 mb-2">End-to-end encryption</h4>
                    <p className="text-gray-600">All communication between users and servers is protected using SSL/TLS 1.3.</p>
                  </div>
                  <div className="pl-6 border-l-2 border-green-200">
                    <h4 className="text-gray-900 mb-2">Encryption at rest</h4>
                    <p className="text-gray-600">All databases are encrypted using AES-256 standards with independent key management.</p>
                  </div>
                  <div className="pl-6 border-l-2 border-green-200">
                    <h4 className="text-gray-900 mb-2">Data corruption prevention</h4>
                    <p className="text-gray-600">Automated checksum verification, dual-write, and backup validation mechanisms protect against corruption or unauthorized tampering.</p>
                  </div>
                  <div className="pl-6 border-l-2 border-green-200">
                    <h4 className="text-gray-900 mb-2">Redundancy</h4>
                    <p className="text-gray-600">Real-time replication across servers ensures continuous data availability.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Access Control & Confidentiality */}
          <section>
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white">5</span>
              </div>
              <div className="flex-1">
                <h2 className="text-gray-900 mb-4">Access Control & Confidentiality</h2>
                <div className="space-y-4">
                  <div className="pl-6 border-l-2 border-blue-200">
                    <h4 className="text-gray-900 mb-2">Role-based access</h4>
                    <p className="text-gray-600">Only authorized users (doctor, admin, staff) can view relevant sections.</p>
                  </div>
                  <div className="pl-6 border-l-2 border-blue-200">
                    <h4 className="text-gray-900 mb-2">Mobile number masking</h4>
                    <p className="text-gray-600">Internal staff can see only masked numbers (e.g., 98******23) to prevent misuse.</p>
                  </div>
                  <div className="pl-6 border-l-2 border-blue-200">
                    <h4 className="text-gray-900 mb-2">MFA & authentication</h4>
                    <p className="text-gray-600">Multi-factor authentication and strong password policies are implemented.</p>
                  </div>
                  <div className="pl-6 border-l-2 border-blue-200">
                    <h4 className="text-gray-900 mb-2">Session control</h4>
                    <p className="text-gray-600">Auto-logout and session timeout prevent unauthorized access from idle devices.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Staff Training & Confidentiality Agreements */}
          <section>
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white">6</span>
              </div>
              <div className="flex-1">
                <h2 className="text-gray-900 mb-4">Staff Training & Confidentiality Agreements</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Every employee of Benevolent Software Technologies is trained in healthcare data handling, privacy compliance, and cybersecurity protocols. Each has signed a strict confidentiality agreement before gaining system access.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Regular security training and compliance workshops.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Role-specific permissions ensuring least-privilege access.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Continuous background verification for sensitive roles.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Backup, Retention & Recovery */}
          <section>
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white">7</span>
              </div>
              <div className="flex-1">
                <h2 className="text-gray-900 mb-4">Backup, Retention & Recovery</h2>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Automatic encrypted backups are taken daily and stored in geographically diverse locations.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Data can be restored within minutes using checksum-verified snapshots.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Retention policies comply with healthcare recordkeeping requirements.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Monitoring & Breach Management */}
          <section>
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white">8</span>
              </div>
              <div className="flex-1">
                <h2 className="text-gray-900 mb-4">Monitoring & Breach Management</h2>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Real-time monitoring for unusual access patterns or data anomalies.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Immediate escalation to the Data Protection Officer upon any suspected breach.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Transparent communication to clinics in the unlikely event of a confirmed incident.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Compliance & Security Commitment */}
          <section>
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white">9</span>
              </div>
              <div className="flex-1">
                <h2 className="text-gray-900 mb-4">Compliance & Security Commitment</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  While Doctor Babu is not yet certified under ISO/IEC 27001 or HIPAA, its architecture and operating practices align closely with these standards. A formal third-party audit is in progress for certification readiness.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Regular internal penetration testing and vulnerability analysis.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Independent security assessments for every major release.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">All improvements are documented and shared transparently with partner clinics.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Contact & Support */}
          <section>
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white">10</span>
              </div>
              <div className="flex-1">
                <h2 className="text-gray-900 mb-4">Contact & Support</h2>
                <div className="space-y-6">
                  <div>
                      <div className="flex items-center gap-2">
                        <span className="text-gray-600">Website:</span>
                        <a href="https://doctorbabu.co.in" className="text-green-600 hover:underline">doctorbabu.co.in</a>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-gray-600">Sales Enquiries:</span>
                        <a href="mailto:sales@doctorbabu.co.in" className="text-green-600 hover:underline">sales@doctorbabu.co.in</a>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-gray-600">Email:</span>
                        <a href="mailto:support@doctorbabu.co.in" className="text-green-600 hover:underline">support@doctorbabu.co.in</a>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-gray-600">Data Protection Officer:</span>
                        <a href="mailto:privacy@doctorbabu.co.in" className="text-green-600 hover:underline">privacy@doctorbabu.co.in</a>
                      </div>
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-gray-600 text-sm">
                      <span className="text-gray-900">Developer:</span> Benevolent Software Technologies Private Limited, Saharsa, Bihar, India.
                    </p>
                    <p className="text-gray-600 text-sm mt-2">
                      We have strong domain understanding in medical data management, hospital workflows, compliance obligations, and modern security threats — ensuring your data remains protected under all circumstances.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Our Assurance Statement */}
          <section>
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white">11</span>
              </div>
              <div className="flex-1">
                <h2 className="text-gray-900 mb-4">Our Assurance Statement</h2>
                <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8">
                  <p className="text-gray-900 leading-relaxed italic">
                    "Doctor Babu, powered by Benevolent Software Technologies Pvt. Ltd., ensures that every byte of medical data remains private, encrypted, and accessible only to authorized users. With Tier IV infrastructure, SSL encryption, data masking, and corruption-prevention mechanisms, we deliver unmatched reliability and confidentiality."
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Back to Home Button */}
        <div className="max-w-4xl mx-auto mt-16 text-center">
          <Button variant="ghost" asChild>
            <a href="/">← Back to Home</a>
          </Button>
        </div>
      </div>
    </div>
  );
}
