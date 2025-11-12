import React from 'react';
import Footer from '../components/Footer';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-800 antialiased">
      <header className="max-w-5xl mx-auto px-6 py-8 flex items-center justify-between">
        <div className="flex items-center gap-4">
<img src="/logo.png" alt="TITI Logo" className="object-cover w-24 h-24" />
          <div>
            <h1 className="text-2xl font-semibold">TITI App</h1>
            <p className="text-sm text-gray-500">Privacy Policy</p>
          </div>
        </div>
        <nav className="text-sm space-x-6 text-gray-600">
          <a href="/Home" className="hover:text-indigo-600">Home</a>
          <a href="/Terms&Conditions" className="hover:text-indigo-600">Terms and Conditions</a>
         
        </nav>
      </header>

      <main className="max-w-5xl mx-auto px-6 pb-24">
        {/* Hero */}
        <section className="bg-white shadow-md rounded-2xl p-8 mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="text-3xl font-bold">Privacy Policy : TITI App</h2>
              <p className="mt-2 text-sm text-gray-500">Effective Date: <span className="font-medium text-gray-700">13/10/2025</span></p>
              <p className="mt-4 text-gray-600">This policy applies to all TITI App users (Passengers and Drivers). Below we explain what data we collect, how we use it, and your rights.</p>
            </div>
            <div className="flex-shrink-0 text-sm text-gray-500">
              <div className="bg-indigo-50 border border-indigo-100 px-4 py-2 rounded-lg">
                <p className="font-medium text-indigo-700">Applies To</p>
                <p>All TITI App users : Passengers & Drivers</p>
              </div>
            </div>
          </div>
        </section>

        {/* Policy Content */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <nav className="md:col-span-1 sticky top-24 self-start">
            <ul className="space-y-2 text-sm">
              <li><a className="block px-3 py-2 rounded hover:bg-indigo-50" href="#data-we-collect">1. Data We Collect</a></li>
              <li><a className="block px-3 py-2 rounded hover:bg-indigo-50" href="#how-we-use-data">2. How We Use Data</a></li>
              <li><a className="block px-3 py-2 rounded hover:bg-indigo-50" href="#data-sharing">3. Data Sharing</a></li>
              <li><a className="block px-3 py-2 rounded hover:bg-indigo-50" href="#security">4. Security</a></li>
              <li><a className="block px-3 py-2 rounded hover:bg-indigo-50" href="#data-retention">5. Data Retention</a></li>
              <li><a className="block px-3 py-2 rounded hover:bg-indigo-50" href="#user-rights">6. User Rights</a></li>
              <li><a className="block px-3 py-2 rounded hover:bg-indigo-50" href="#international-transfers">7. International Data Transfers</a></li>
              <li><a className="block px-3 py-2 rounded hover:bg-indigo-50" href="#children">8. Children</a></li>
              <li><a className="block px-3 py-2 rounded hover:bg-indigo-50" href="#policy-updates">9. Policy Updates</a></li>
              <li><a className="block px-3 py-2 rounded hover:bg-indigo-50" href="#contact">10. Contact</a></li>
            </ul>
          </nav>

          <article className="md:col-span-2 space-y-8">
            {/* 1. Data We Collect */}
            <section id="data-we-collect" className="bg-white shadow rounded-lg p-6">
              <h3 className="text-xl font-semibold">1. Data We Collect</h3>
              <p className="mt-3 text-gray-600">We collect the following categories of information to operate the Service and provide a safe experience for users.</p>

              <ul className="mt-4 space-y-3 list-disc list-inside text-gray-700">
                <li><strong>Account:</strong> Name, phone number, email, profile picture (optional).</li>
                <li><strong>Location:</strong> GPS data for transportation and trip tracking (while using the service).</li>
                <li><strong>Device:</strong> Device type, operating system, crash logs, app usage metrics.</li>
                <li><strong>Payment:</strong> Card and payment information is processed by third-party providers; we only store transaction references and receipts.</li>
                <li><strong>Communication:</strong> Messages and chats exchanged within the app for coordination and support.</li>
              </ul>
            </section>

            {/* 2. How We Use Data */}
            <section id="how-we-use-data" className="bg-white shadow rounded-lg p-6">
              <h3 className="text-xl font-semibold">2. How We Use Data</h3>
              <p className="mt-3 text-gray-600">We use collected data for the following purposes:</p>
              <ul className="mt-4 space-y-2 list-disc list-inside text-gray-700">
                <li>To provide and improve the Service and calculate fares.</li>
                <li>To prevent fraud and ensure user safety (identity checks, ride confirmation).</li>
                <li>To communicate with users — notifications, invoices, updates, and support messages.</li>
              </ul>
            </section>

            {/* 3. Data Sharing */}
            <section id="data-sharing" className="bg-white shadow rounded-lg p-6">
              <h3 className="text-xl font-semibold">3. Data Sharing</h3>
              <p className="mt-3 text-gray-600">We may share data only as needed to provide the Service or when required by law.</p>
              <ul className="mt-4 space-y-2 list-disc list-inside text-gray-700">
                <li>With drivers and service partners to complete rides and deliveries.</li>
                <li>With payment processors and third-party service providers who help operate the Service.</li>
                <li>With law enforcement or authorities upon lawful request (subpoena or other legal process).</li>
              </ul>
            </section>

            {/* 4. Security */}
            <section id="security" className="bg-white shadow rounded-lg p-6">
              <h3 className="text-xl font-semibold">4. Security</h3>
              <p className="mt-3 text-gray-600">We implement technical and organizational safeguards to protect personal data.</p>
              <ul className="mt-4 space-y-2 list-disc list-inside text-gray-700">
                <li>Sensitive data is encrypted in transit and at rest where appropriate.</li>
                <li>Phone numbers between drivers and riders are masked to protect privacy.</li>
                <li>We follow industry practices for secure storage and processing of data.</li>
              </ul>
            </section>

            {/* 5. Data Retention */}
            <section id="data-retention" className="bg-white shadow rounded-lg p-6">
              <h3 className="text-xl font-semibold">5. Data Retention</h3>
              <p className="mt-3 text-gray-600">We retain information for as long as necessary to provide the Service or to comply with legal obligations.</p>
              <p className="mt-2 text-gray-700">Examples:</p>
              <ul className="mt-2 list-disc list-inside text-gray-700">
                <li>Account records while the account is active.</li>
                <li>Transaction and invoice records for financial and tax compliance.</li>
                <li>Crash logs and analytics for a limited time for debugging and product improvements.</li>
              </ul>
            </section>

            {/* 6. User Rights */}
            <section id="user-rights" className="bg-white shadow rounded-lg p-6">
              <h3 className="text-xl font-semibold">6. User Rights</h3>
              <p className="mt-3 text-gray-600">You have rights regarding your personal data. Where applicable law grants rights, you may:</p>
              <ul className="mt-4 space-y-2 list-disc list-inside text-gray-700">
                <li>Access the personal data we hold about you.</li>
                <li>Request correction or update of inaccurate data.</li>
                <li>Request deletion of your account and associated personal data.</li>
                <li>Manage location permissions from your device settings; if you revoke location access some features may be limited.</li>
              </ul>
              {/* <p className="mt-3 text-sm text-gray-500">To exercise these rights, contact us using the details in the Contact section below.</p> */}
            </section>

            {/* 7. International Transfers */}
            <section id="international-transfers" className="bg-white shadow rounded-lg p-6">
              <h3 className="text-xl font-semibold">7. International Data Transfers</h3>
              <p className="mt-3 text-gray-600">Your data may be processed or stored outside Iraq, where our service providers operate. When we transfer data internationally, we use appropriate safeguards such as contracts and standard contractual clauses where required.</p>
            </section>

            {/* 8. Children */}
            <section id="children" className="bg-white shadow rounded-lg p-6">
              <h3 className="text-xl font-semibold">8. Children</h3>
              <p className="mt-3 text-gray-600">The Service is not intended for individuals under 18 years old. If we learn that we have collected personal information from a child under 18 without proper consent, we will take steps to delete that information.</p>
            </section>

            {/* 9. Policy Updates */}
            <section id="policy-updates" className="bg-white shadow rounded-lg p-6">
              <h3 className="text-xl font-semibold">9. Policy Updates</h3>
              <p className="mt-3 text-gray-600">We may update this Privacy Policy from time to time. Any material changes will be announced within the app and the Effective Date above will be updated accordingly.</p>
            </section>

            {/* 10. Contact */}
            <section id="contact" className="bg-white shadow rounded-lg p-6">
              <h3 className="text-xl font-semibold">10. Contact</h3>
              <p className="mt-3 text-gray-600">If you have questions or would like to exercise your rights, contact us:</p>
              <div className="mt-4 text-gray-700">
                <p className="font-medium">Dream City</p>
                <p>Erbil, Kurdistan Region, Iraq</p>
               
              </div>
            </section>

          </article>
        </section>
      </main>

     <Footer/>
    </div>
  );
}
