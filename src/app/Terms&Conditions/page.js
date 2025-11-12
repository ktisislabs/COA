'use client';
import React from 'react';
import Footer from '../components/Footer';

export default function TermsOfUse() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-800 antialiased">
      {/* Header */}
      <header className="max-w-5xl mx-auto px-6 py-8 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src="/logo.png" alt="TITI Logo" className="object-cover w-24 h-24" />
          <div>
            <h1 className="text-2xl font-semibold">TITI App</h1>
            <p className="text-sm text-gray-500">Terms of Use</p>
          </div>
        </div>
        <nav className="text-sm space-x-6 text-gray-600">
          <a href="/Home" className="hover:text-indigo-600">Home</a>
          <a href="/PnP" className="hover:text-indigo-600">Privacy Policy</a>
        </nav>
      </header>

      {/* Main */}
      <main className="max-w-5xl mx-auto px-6 pb-24">
        {/* Hero Section */}
        <section className="bg-white shadow-md rounded-2xl p-8 mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="text-3xl font-bold">Terms of Use : TITI App</h2>
              <p className="mt-2 text-sm text-gray-500">
                Effective Date: <span className="font-medium text-gray-700">13/10/2025</span>
              </p>
              <p className="mt-1 text-sm text-gray-500">
                Jurisdiction: <span className="font-medium text-gray-700">Republic of Iraq (Erbil Courts)</span>
              </p>
              <p className="mt-4 text-gray-600">
                These Terms govern your use of the TITI App (“Service”). Please read them carefully before using the platform.
              </p>
            </div>
            <div className="flex-shrink-0 text-sm text-gray-500">
              <div className="bg-indigo-50 border border-indigo-100 px-4 py-2 rounded-lg">
                <p className="font-medium text-indigo-700">Applies To</p>
                <p>All TITI App Users : Passengers & Drivers</p>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Sidebar */}
          <nav className="md:col-span-1 sticky top-24 self-start">
            <ul className="space-y-2 text-sm">
              <li><a className="block px-3 py-2 rounded hover:bg-indigo-50" href="#acceptance">1. Acceptance of Terms</a></li>
              <li><a className="block px-3 py-2 rounded hover:bg-indigo-50" href="#service-nature">2. Nature of the Service</a></li>
              <li><a className="block px-3 py-2 rounded hover:bg-indigo-50" href="#eligibility">3. Eligibility</a></li>
              <li><a className="block px-3 py-2 rounded hover:bg-indigo-50" href="#accounts">4. Accounts</a></li>
              <li><a className="block px-3 py-2 rounded hover:bg-indigo-50" href="#rides">5. Rides & Payments</a></li>
              <li><a className="block px-3 py-2 rounded hover:bg-indigo-50" href="#prohibited">6. Prohibited Conduct</a></li>
              <li><a className="block px-3 py-2 rounded hover:bg-indigo-50" href="#safety">7. Safety</a></li>
              <li><a className="block px-3 py-2 rounded hover:bg-indigo-50" href="#promotions">8. Promotions</a></li>
              <li><a className="block px-3 py-2 rounded hover:bg-indigo-50" href="#ip">9. Intellectual Property</a></li>
              <li><a className="block px-3 py-2 rounded hover:bg-indigo-50" href="#liability">10. Limitation of Liability</a></li>
              <li><a className="block px-3 py-2 rounded hover:bg-indigo-50" href="#suspension">11. Suspension & Termination</a></li>
              <li><a className="block px-3 py-2 rounded hover:bg-indigo-50" href="#law">12. Governing Law & Jurisdiction</a></li>
              <li><a className="block px-3 py-2 rounded hover:bg-indigo-50" href="#updates">13. Updates</a></li>
              <li><a className="block px-3 py-2 rounded hover:bg-indigo-50" href="#contact">14. Contact</a></li>
            </ul>
          </nav>

          {/* Main Content */}
          <article className="md:col-span-2 space-y-8">
            <section id="acceptance" className="bg-white shadow rounded-lg p-6">
              <h3 className="text-xl font-semibold">1. Acceptance of Terms</h3>
              <p className="mt-3 text-gray-600">
                By using the TITI App (“Service”) or creating an account, you agree to these Terms. If you do not agree, you must stop using the Service immediately.
              </p>
            </section>

            <section id="service-nature" className="bg-white shadow rounded-lg p-6">
              <h3 className="text-xl font-semibold">2. Nature of the Service</h3>
              <p className="mt-3 text-gray-600">
                TITI is a technology platform that connects drivers with users. TITI does not own any vehicles and does not provide transportation services itself. Drivers operate as independent contractors and are not employees of TITI.
              </p>
            </section>

            <section id="eligibility" className="bg-white shadow rounded-lg p-6">
              <h3 className="text-xl font-semibold">3. Eligibility</h3>
              <p className="mt-3 text-gray-600">
                You must be at least 18 years old to use the Service. You must provide accurate information and comply with all applicable transportation laws.
              </p>
            </section>

            <section id="accounts" className="bg-white shadow rounded-lg p-6">
              <h3 className="text-xl font-semibold">4. Accounts</h3>
              <p className="mt-3 text-gray-600">
                You are responsible for maintaining the confidentiality of your login credentials and account information. Any fraud or misuse may result in account suspension.
              </p>
            </section>

            <section id="rides" className="bg-white shadow rounded-lg p-6">
              <h3 className="text-xl font-semibold">5. Rides and Payments</h3>
              <p className="mt-3 text-gray-600">
                Estimated fares may vary due to traffic, weather, or route changes. Payments are processed by third-party providers, and TITI does not store full payment details.
              </p>
            </section>

            <section id="prohibited" className="bg-white shadow rounded-lg p-6">
              <h3 className="text-xl font-semibold">6. Prohibited Conduct</h3>
              <ul className="mt-3 list-disc list-inside text-gray-700 space-y-2">
                <li>Harassment, discrimination, violence, or illegal activity.</li>
                <li>Carrying weapons or prohibited materials.</li>
                <li>Using fake payment methods or accounts.</li>
              </ul>
            </section>

            <section id="safety" className="bg-white shadow rounded-lg p-6">
              <h3 className="text-xl font-semibold">7. Safety</h3>
              <p className="mt-3 text-gray-600">
                Drivers must hold valid licenses and documents. Passengers should verify driver identity before boarding. In emergencies, contact local authorities immediately.
              </p>
            </section>

            <section id="promotions" className="bg-white shadow rounded-lg p-6">
              <h3 className="text-xl font-semibold">8. Promotions</h3>
              <p className="mt-3 text-gray-600">
                Promo codes and offers are subject to TITI’s discretion. Any misuse may result in cancellation.
              </p>
            </section>

            <section id="ip" className="bg-white shadow rounded-lg p-6">
              <h3 className="text-xl font-semibold">9. Intellectual Property</h3>
              <p className="mt-3 text-gray-600">
                All logos, trademarks, and software belong to TITI. Copying, redistributing, or modifying without authorization is prohibited.
              </p>
            </section>

            <section id="liability" className="bg-white shadow rounded-lg p-6">
              <h3 className="text-xl font-semibold">10. Limitation of Liability</h3>
              <p className="mt-3 text-gray-600">
                TITI is not liable for indirect damages, delays, or service interruptions, except to the extent required by Iraqi law.
              </p>
            </section>

            <section id="suspension" className="bg-white shadow rounded-lg p-6">
              <h3 className="text-xl font-semibold">11. Suspension & Termination</h3>
              <p className="mt-3 text-gray-600">
                Accounts may be suspended or terminated for violating these Terms, engaging in unsafe behavior, or other risks.
              </p>
            </section>

            <section id="law" className="bg-white shadow rounded-lg p-6">
              <h3 className="text-xl font-semibold">12. Governing Law & Jurisdiction</h3>
              <p className="mt-3 text-gray-600">
                These Terms are governed by the laws of the Republic of Iraq. All disputes shall be exclusively handled by the courts of Erbil.
              </p>
            </section>

            <section id="updates" className="bg-white shadow rounded-lg p-6">
              <h3 className="text-xl font-semibold">13. Updates</h3>
              <p className="mt-3 text-gray-600">
                TITI reserves the right to modify these Terms at any time. Users will be notified of changes within the app.
              </p>
            </section>

            <section id="contact" className="bg-white shadow rounded-lg p-6">
              <h3 className="text-xl font-semibold">14. Contact</h3>
              <p className="mt-3 text-gray-600">If you have questions, contact us at:</p>
              <div className="mt-4 text-gray-700">
                <p className="font-medium">Dream City</p>
                <p>Erbil, Kurdistan Region, Iraq</p>
              </div>
            </section>
          </article>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
