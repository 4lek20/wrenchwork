import Link from "next/link";

export default function Resources() {
  return (
    <div className="min-h-screen bg-gray-50">
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
          <h1 className="text-4xl font-bold mb-6">Trade Career Resources</h1>
          <p className="text-xl text-gray-600 mb-12">
            Essential links and data sources for exploring skilled trade careers.
          </p>

          {/* Quick Links */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <a
              href="https://www.bls.gov/ooh/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition block"
            >
              <h2 className="text-xl font-semibold text-blue-600 mb-2">
                Bureau of Labor Statistics →
              </h2>
              <p className="text-gray-600">
                Official salary data, job outlook, and career descriptions for all trades.
              </p>
            </a>

            <a
              href="https://www.trade-schools.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition block"
            >
              <h2 className="text-xl font-semibold text-blue-600 mb-2">
                Trade Schools Directory →
              </h2>
              <p className="text-gray-600">
                Find accredited trade schools and apprenticeship programs near you.
              </p>
            </a>

            <a
              href="https://www.apprenticeship.gov/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition block"
            >
              <h2 className="text-xl font-semibold text-blue-600 mb-2">
                Apprenticeship.gov →
              </h2>
              <p className="text-gray-600">
                Official US government site for apprenticeship programs and registration.
              </p>
            </a>

            <a
              href="https://www.skillsharesuccess.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition block"
            >
              <h2 className="text-xl font-semibold text-blue-600 mb-2">
                SkillsUSA →
              </h2>
              <p className="text-gray-600">
                Career and technical student organization for trade skill development.
              </p>
            </a>
          </div>

          {/* Trade Salary Guide */}
          <div className="bg-white p-8 rounded-xl shadow-sm mb-12">
            <h2 className="text-2xl font-bold mb-6">Quick Salary Guide (2026)</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b">
                    <th className="py-2 pr-4">Career</th>
                    <th className="py-2 pr-4">Starting Salary</th>
                    <th className="py-2 pr-4">Mid-Career</th>
                    <th className="py-2 pr-4">Training Time</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-2 pr-4 font-semibold">Electrician</td>
                    <td className="py-2 pr-4">$60K-$90K</td>
                    <td className="py-2 pr-4">$80K-$120K</td>
                    <td className="py-2 pr-4">4-5 years</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 pr-4 font-semibold">Plumber</td>
                    <td className="py-2 pr-4">$55K-$85K</td>
                    <td className="py-2 pr-4">$75K-$110K</td>
                    <td className="py-2 pr-4">4-5 years</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 pr-4 font-semibold">HVAC Tech</td>
                    <td className="py-2 pr-4">$50K-$80K</td>
                    <td className="py-2 pr-4">$70K-$100K</td>
                    <td className="py-2 pr-4">6-24 months</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 pr-4 font-semibold">Welder</td>
                    <td className="py-2 pr-4">$45K-$75K</td>
                    <td className="py-2 pr-4">$65K-$95K</td>
                    <td className="py-2 pr-4">6-18 months</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-semibold">Dental Hygienist</td>
                    <td className="py-2 pr-4">$70K-$100K</td>
                    <td className="py-2 pr-4">$85K-$120K</td>
                    <td className="py-2 pr-4">2 years</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-blue-600 text-white p-8 rounded-xl text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Find Your Trade?</h2>
            <p className="text-xl mb-6">
              Take the 10-minute assessment and get matched today.
            </p>
            <Link
              href="/assessment"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
            >
              Start Assessment →
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
