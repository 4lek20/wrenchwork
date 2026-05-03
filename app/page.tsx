import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">Wrenchwork</h1>
        <nav className="space-x-4">
          <Link href="/assessment" className="text-gray-600 hover:text-blue-600">
            Take Assessment
          </Link>
          <Link href="/counselors" className="text-gray-600 hover:text-blue-600">
            For Counselors
          </Link>
        </nav>
      </header>

      {/* Hero */}
      <main className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-5xl font-bold text-gray-900 mb-6">
          Skip the $100K Degree.<br />
          <span className="text-blue-600">Find Your Trade Career.</span>
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Take a 10-minute assessment to get matched with high-paying trade careers, 
          local programs, and apprenticeship timelines. Compare against the traditional 
          four-year degree path.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href="/assessment"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
          >
            Start Assessment →
          </Link>
          <Link
            href="/counselors"
            className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-50 transition"
          >
            I'm a Counselor
          </Link>
        </div>

        {/* Social Proof */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-16">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="text-3xl font-bold text-blue-600 mb-2">$65K+</div>
            <div className="text-gray-600">Average first-year salary for electricians</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="text-3xl font-bold text-blue-600 mb-2">0</div>
            <div className="text-gray-600">Student debt required</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="text-3xl font-bold text-blue-600 mb-2">6-24mo</div>
            <div className="text-gray-600">Time to start earning</div>
          </div>
        </div>
      </main>

      {/* Social Proof / Testimonials */}
      <section className="bg-white py-16 border-t">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">Why Choose Trade Careers?</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="text-4xl mb-4">🎓</div>
              <h4 className="text-xl font-semibold mb-2">Traditional Degree</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• 4+ years of study</li>
                <li>• $100K+ student debt</li>
                <li>• Uncertain job market</li>
                <li>• Delayed earning start</li>
              </ul>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-200">
              <div className="text-4xl mb-4">🔧</div>
              <h4 className="text-xl font-semibold mb-2 text-blue-600">Trade Career</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• 6mo-2yr training</li>
                <li>• $0 debt (get paid to learn)</li>
                <li>• High demand, job security</li>
                <li>• Start earning immediately</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

          {/* FAQ Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h3 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h3>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h4 className="text-lg font-semibold mb-2">How long does the assessment take?</h4>
              <p className="text-gray-600">Just 10 minutes! Answer 3 quick questions about your interests and preferences.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h4 className="text-lg font-semibold mb-2">Is it really debt-free?</h4>
              <p className="text-gray-600">Yes! Trade careers use apprenticeship models where you earn while you learn. No student loans needed.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h4 className="text-lg font-semibold mb-2">What's the earning potential?</h4>
              <p className="text-gray-600">Electricians start at $60K-$90K, plumbers at $55K-$85K, and many trades offer signing bonuses.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h4 className="text-lg font-semibold mb-2">How do I find local programs?</h4>
              <p className="text-gray-600">After your assessment, we'll show you matching trade schools and apprenticeship programs in your area.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Email Capture */}
      <section className="bg-blue-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Get Early Access for Your School
          </h3>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Join 10 pilot counselors using Wrenchwork to guide students toward 
            high-paying trade careers.
          </p>
          <form 
            action="https://formspree.io/f/mwpoknqv" 
            method="POST"
            className="max-w-md mx-auto flex gap-2"
          >
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
              Join Pilot
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 text-center text-gray-500">
        <p>© 2026 Wrenchwork. Built for zero-human company challenge.</p>
      </footer>
    </div>
  );
}
