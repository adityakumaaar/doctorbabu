import { Button } from "./ui/button";

export function SecurityPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-20 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-3xl space-y-6 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Data Privacy &amp; Security Assurance
          </h1>
          <p className="text-lg text-gray-600">
            Doctor Babu (doctorbabu.co.in) by Benevolent Software Technologies
            Pvt. Ltd. is committed to protecting medical, personal, and
            operational data through industry-standard controls and transparent
            practices.
          </p>
        </div>

        {/* Content */}
        <div className="mx-auto max-w-3xl space-y-8 leading-7 text-gray-700">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900">
              1. Introduction
            </h2>
            <p className="mt-2 text-gray-600">
              Doctor Babu provides a secure cloud platform for doctors, clinics,
              and small hospitals to manage medical operations. The software is
              hosted in Tier IV data centers with manless operations and
              automated monitoring, minimizing physical access risk and ensuring
              high availability (99.995% uptime).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900">
              2. What Data We Collect
            </h2>
            <ul className="mt-2 list-disc space-y-2 pl-6">
              <li>
                Patient records: Diagnoses, prescriptions, test
                results, and doctor notes entered through the platform.
              </li>
              <li>
                Personal information: Name, gender, birth date,
                contact (internally masked for staff), and address.
              </li>
              <li>
                Clinic data: Doctor profiles, appointments, and
                billing information.
              </li>
              <li>
                System logs: Access logs and activity metadata,
                anonymized for analysis and troubleshooting.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900">
              3. Hosting &amp; Infrastructure
            </h2>
            <ul className="mt-2 list-disc space-y-2 pl-6">
              <li>
                Tier IV Data Centers: ISO-certified facilities
                with redundant power, cooling, and 24x7 surveillance.
              </li>
              <li>
                Manless operation: Automated infrastructure with
                biometric entry restrictions to eliminate unauthorized physical
                access.
              </li>
              <li>
                Firewalls &amp; intrusion prevention:{" "}
                Multi-layer firewalls and continuous intrusion detection.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900">
              4. Encryption, SSL Layers &amp; Data Integrity
            </h2>
            <ul className="mt-2 list-disc space-y-2 pl-6">
              <li>
                End-to-end encryption: All communication uses
                SSL/TLS 1.3.
              </li>
              <li>
                Encryption at rest: Databases encrypted with
                AES-256 and independent key management.
              </li>
              <li>
                Data integrity: Checksum verification,
                dual-write, and backup validation to prevent corruption or
                tampering.
              </li>
              <li>
                Redundancy: Real-time replication across servers
                for continuous availability.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900">
              5. Access Control &amp; Confidentiality
            </h2>
            <ul className="mt-2 list-disc space-y-2 pl-6">
              <li>
                Role-based access: Access limited to authorized
                roles (doctor, admin, staff) with least-privilege principles.
              </li>
              <li>
                Mobile number masking: Internal staff see masked
                contact numbers (e.g., 98******23).
              </li>
              <li>
                MFA &amp; authentication: Multi-factor
                authentication and strong password policies.
              </li>
              <li>
                Session controls: Auto-logout and session
                timeouts for idle devices.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900">
              6. Staff Training &amp; Confidentiality Agreements
            </h2>
            <p className="mt-2 text-gray-600">
              All employees are trained in healthcare data handling, privacy
              compliance, and cybersecurity. Every team member signs a strict
              confidentiality agreement prior to system access.
            </p>
            <ul className="mt-2 list-disc space-y-2 pl-6">
              <li>Regular security training and compliance workshops.</li>
              <li>
                Role-specific permissions ensuring least-privilege access.
              </li>
              <li>
                Continuous background verification for sensitive roles.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900">
              7. Backup, Retention &amp; Recovery
            </h2>
            <ul className="mt-2 list-disc space-y-2 pl-6">
              <li>
                Automatic encrypted backups taken daily and stored in
                geographically diverse locations.
              </li>
              <li>Checksum-verified snapshots enable fast restores (minutes).</li>
              <li>
                Retention policies align with healthcare recordkeeping
                requirements.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900">
              8. Monitoring &amp; Breach Management
            </h2>
            <ul className="mt-2 list-disc space-y-2 pl-6">
              <li>
                Real-time monitoring for unusual access patterns and anomalies.
              </li>
              <li>
                Immediate escalation to the Data Protection Officer on suspected
                breaches.
              </li>
              <li>
                Transparent communication to clinics in the unlikely event of a
                confirmed incident.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900">
              9. Compliance &amp; Security Commitment
            </h2>
            <p className="mt-2 text-gray-600">
              While Doctor Babu is not yet certified under ISO/IEC 27001 or
              HIPAA, our architecture and practices closely align with these
              standards. A formal third-party audit is in progress.
            </p>
            <ul className="mt-2 list-disc space-y-2 pl-6">
              <li>
                Regular internal penetration testing and vulnerability analysis.
              </li>
              <li>
                Independent security assessments for every major release.
              </li>
              <li>
                Documented improvements shared transparently with partner
                clinics.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900">
              10. Contact &amp; Support
            </h2>
            <ul className="mt-2 list-disc space-y-2 pl-6 text-gray-600">
              <li>
                Sales Enquiries:{" "}
                <a
                  className="text-green-600"
                  href="mailto:sales@doctorbabu.co.in"
                >
                  sales@doctorbabu.co.in
                </a>
              </li>
              <li>
                Support &amp; Privacy:{" "}
                <a
                  className="text-green-600"
                  href="mailto:support@doctorbabu.co.in"
                >
                  support@doctorbabu.co.in
                </a>
              </li>
              <li>
                Data Protection Officer:{" "}
                <a
                  className="text-green-600"
                  href="mailto:privacy@doctorbabu.co.in"
                >
                  privacy@doctorbabu.co.in
                </a>
              </li>
              <li>
                Developer: Benevolent Software Technologies
                Private Limited, Saharsa, Bihar, India.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900">
              11. Our Assurance Statement
            </h2>
            <div className="mt-4 rounded-lg border-l-4 border-green-600 bg-green-50 p-6">
              <p className="italic text-gray-800">
                "Doctor Babu, powered by Benevolent Software Technologies Pvt.
                Ltd., ensures that every byte of medical data remains private,
                encrypted, and accessible only to authorized users. With Tier IV
                infrastructure, SSL encryption, data masking, and
                corruption-prevention mechanisms, we deliver unmatched
                reliability and confidentiality."
              </p>
            </div>
          </section>

          <div className="mt-8 text-center">
            <Button variant="ghost" asChild>
              <a href="/">← Back to Home</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecurityPage;