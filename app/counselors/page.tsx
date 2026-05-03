import Link from "next/link";

export default function Counselors() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            Wrenchwork
          </Link>
          <Link href="/" className="text-gray-600 hover:text-gray-900">
            ← Back to Home
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">For School Counselors</h1>
          <p className="text-xl text-gray-600 mb-12">
            Help your students discover high-paying trade careers with data-driven 
            assessments and local program matching.
          </p>

          {/* Features */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">Student Assessment</h2>
              <p className="text-gray-600 mb-4">
                10-minute assessment matches students to trade careers based on interests, 
                aptitudes, and local market demand.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Career interest profiling</li>
                <li>✓ Aptitude matching</li>
                <li>✓ Local salary data</li>
                <li>✓ Apprenticeship timelines</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">Counselor Dashboard</h2>
              <p className="text-gray-600 mb-4">
                Track student progress, view career matches, and monitor program 
                enrollment conversions.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Student matching analytics</li>
                <li>✓ Program enrollment tracking</li>
                <li>✓ Referral conversion rates</li>
                <li>✓ Export reports</li>
              </ul>
            </div>
          </div>

          {/* Pricing */}
          <div className="bg-white p-8 rounded-xl shadow-sm mb-12">
            <h2 className="text-3xl font-bold text-center mb-8">Simple Pricing</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border rounded-lg p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">Pilot</h3>
                <div className="text-3xl font-bold text-blue-600 mb-4">$0</div>
                <p className="text-gray-600 mb-4">For 10 counselors</p>
                <button className="w-full bg-gray-200 text-gray-800 py-2 rounded-lg">
                  Apply for Pilot
                </button>
              </div>
              <div className="border-2 border-blue-600 rounded-lg p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">School</h3>
                <div className="text-3xl font-bold text-blue-600 mb-4">$2,000</div>
                <p className="text-gray-600 mb-4">Per year</p>
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg">
                  Get Started
                </button>
              </div>
              <div className="border rounded-lg p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">District</h3>
                <div className="text-3xl font-bold text-blue-600 mb-4">$8,000</div>
                <p className="text-gray-600 mb-4">Per year</p>
                <button className="w-full bg-gray-200 text-gray-800 py-2 rounded-lg">
                  Contact Us
                </button>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-blue-600 text-white p-8 rounded-xl text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Pilot Wrenchwork?</h2>
            <p className="text-xl mb-6">
              Join 10 counselors helping students skip debt and start earning.
            </p>
            <form 
              action="https://formspree.io/f/mwpoknqv" 
              method="POST"
              className="max-w-md mx-auto"
            >
              <input type="hidden" name="form-type" value="counselor-pilot" />
              <div className="flex gap-2">
                <input
                  type="email"
                  name="email"
                  placeholder="your@school.edu"
                  required
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900"
                />
                <button
                  type="submit"
                  className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
                >
                  Apply Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
