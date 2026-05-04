"use client"

     1|import Link from "next/link";
     2|import Script from "next/script";
     3|
     4|export default function Resources() {
     5|  const products = [
     6|    {
     7|      id: "trade-starter-pack",
     8|      title: "Trade Career Starter Pack",
     9|      price: 9,
    10|      description: "Your complete guide to skipping college debt. Includes top 5 trades, step-by-step getting started guide, and red flags to avoid.",
    11|      features: [
    12|        "Why choose trades over college",
    13|        "Top 5 trades for 2026 with salary data",
    14|        "Step-by-step apprenticeship guide",
    15|        "Questions to ask programs",
    16|        "Red flags to avoid",
    17|        "BLS resources and links"
    18|      ]
    19|    },
    20|    {
    21|      id: "electrician-guide",
    22|      title: "Electrician Apprenticeship Guide",
    23|      price: 7,
    24|      description: "Everything you need to know to become a licensed electrician. From starting pay to journeyman license.",
    25|      features: [
    26|        "What is an apprenticeship",
    27|        "Requirements to start",
    28|        "4-5 year journey breakdown",
    29|        "How to find apprenticeships",
    30|        "Interview preparation",
    31|        "Tools you'll need"
    32|      ]
    33|    },
    34|    {
    35|      id: "paid-to-learn",
    36|      title: "How to Get Paid to Learn a Trade",
    37|      price: 7,
    38|      description: "Earn while you learn: The apprenticeship advantage. Start at $15-25/hr with zero student debt.",
    39|      features: [
    40|        "The problem with college",
    41|        "The apprenticeship solution",
    42|        "Industries with paid programs",
    43|        "How to find apprenticeships",
    44|        "Application timeline",
    45|        "Success stories"
    46|      ]
    47|    }
    48|  ];
    49|
    50|  const handleBuyNow = async (productId: string, price: number) => {
    51|    try {
    52|      const response = await fetch('/api/checkout', {
    53|        method: 'POST',
    54|        headers: { 'Content-Type': 'application/json' },
    55|        body: JSON.stringify({ productId, price })
    56|      });
    57|      
    58|      const data = await response.json();
    59|      
    60|      if (data.checkout_url) {
    61|        window.location.href = data.checkout_url;
    62|      } else {
    63|        alert('Checkout initiated! You will receive the PDF via email after payment.');
    64|      }
    65|    } catch (error) {
    66|      console.error('Checkout error:', error);
    67|      alert('Please try again or contact support.');
    68|    }
    69|  };
    70|
    71|  return (
    72|    <div className="min-h-screen bg-gray-50">
    73|      <header className="bg-white border-b">
    74|        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
    75|          <Link href="/" className="text-2xl font-bold text-blue-600">
    76|            Wrenchwork
    77|          </Link>
    78|          <Link href="/" className="text-gray-600 hover:text-gray-900">
    79|            ← Back to Home
    80|          </Link>
    81|        </div>
    82|      </header>
    83|
    84|      <main className="container mx-auto px-4 py-12">
    85|        <div className="max-w-6xl mx-auto">
    86|          <h1 className="text-4xl font-bold mb-6">Trade Career Resources</h1>
    87|          <p className="text-xl text-gray-600 mb-12">
    88|            Essential resources for exploring skilled trade careers. Download our premium guides instantly.
    89|          </p>
    90|
    91|          {/* Digital Products */}
    92|          <div className="mb-16">
    93|            <h2 className="text-3xl font-bold mb-8">Premium Digital Guides</h2>
    94|            <div className="grid md:grid-cols-3 gap-8">
    95|              {products.map((product) => (
    96|                <div key={product.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-6 flex flex-col">
    97|                  <h3 className="text-2xl font-bold text-blue-600 mb-2">{product.title}</h3>
    98|                  <p className="text-3xl font-bold mb-4">${product.price}<span className="text-sm text-gray-500"> one-time</span></p>
    99|                  <p className="text-gray-600 mb-6 flex-grow">{product.description}</p>
   100|                  
   101|                  <ul className="mb-6 space-y-2">
   102|                    {product.features.map((feature, idx) => (
   103|                      <li key={idx} className="flex items-start">
   104|                        <span className="text-green-500 mr-2">✓</span>
   105|                        <span className="text-sm text-gray-600">{feature}</span>
   106|                      </li>
   107|                    ))}
   108|                  </ul>
   109|                  
   110|                  <button
   111|                    onClick={() => handleBuyNow(product.id, product.price)}
   112|                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
   113|                  >
   114|                    Buy Now - ${product.price}
   115|                  </button>
   116|                </div>
   117|              ))}
   118|            </div>
   119|          </div>
   120|
   121|          {/* Free Resources */}
   122|          <div className="mb-12">
   123|            <h2 className="text-3xl font-bold mb-8">Free Resources</h2>
   124|            <div className="grid md:grid-cols-2 gap-6 mb-12">
   125|              <a
   126|                href="https://www.bls.gov/ooh/"
   127|                target="_blank"
   128|                rel="noopener noreferrer"
   129|                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition block"
   130|              >
   131|                <h2 className="text-xl font-semibold text-blue-600 mb-2">
   132|                  Bureau of Labor Statistics →
   133|                </h2>
   134|                <p className="text-gray-600">
   135|                  Official salary data, job outlook, and career descriptions for all trades.
   136|                </p>
   137|              </a>
   138|
   139|              <a
   140|                href="https://www.trade-schools.net/"
   141|                target="_blank"
   142|                rel="noopener noreferrer"
   143|                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition block"
   144|              >
   145|                <h2 className="text-xl font-semibold text-blue-600 mb-2">
   146|                  Trade Schools Directory →
   147|                </h2>
   148|                <p className="text-gray-600">
   149|                  Find accredited trade schools and apprenticeship programs near you.
   150|                </p>
   151|              </a>
   152|
   153|              <a
   154|                href="https://www.apprenticeship.gov/"
   155|                target="_blank"
   156|                rel="noopener noreferrer"
   157|                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition block"
   158|              >
   159|                <h2 className="text-xl font-semibold text-blue-600 mb-2">
   160|                  Apprenticeship.gov →
   161|                </h2>
   162|                <p className="text-gray-600">
   163|                  Official US government site for apprenticeship programs and registration.
   164|                </p>
   165|              </a>
   166|
   167|              <a
   168|                href="https://www.skillsusa.org/"
   169|                target="_blank"
   170|                rel="noopener noreferrer"
   171|                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition block"
   172|              >
   173|                <h2 className="text-xl font-semibold text-blue-600 mb-2">
   174|                  SkillsUSA →
   175|                </h2>
   176|                <p className="text-gray-600">
   177|                  Career and technical student organization for trade skill development.
   178|                </p>
   179|              </a>
   180|            </div>
   181|          </div>
   182|
   183|          {/* Salary Guide */}
   184|          <div className="bg-white p-8 rounded-xl shadow-sm mb-12">
   185|            <h2 className="text-2xl font-bold mb-6">Quick Salary Guide (2026)</h2>
   186|            <div className="overflow-x-auto">
   187|              <table className="w-full text-left">
   188|                <thead>
   189|                  <tr className="border-b">
   190|                    <th className="py-2 pr-4">Career</th>
   191|                    <th className="py-2 pr-4">Starting Salary</th>
   192|                    <th className="py-2 pr-4">Mid-Career</th>
   193|                    <th className="py-2 pr-4">Training Time</th>
   194|                  </tr>
   195|                </thead>
   196|                <tbody>
   197|                  <tr className="border-b">
   198|                    <td className="py-2 pr-4 font-semibold">Electrician</td>
   199|                    <td className="py-2 pr-4">$60K-$90K</td>
   200|                    <td className="py-2 pr-4">$80K-$120K</td>
   201|                    <td className="py-2 pr-4">4-5 years</td>
   202|                  </tr>
   203|                  <tr className="border-b">
   204|                    <td className="py-2 pr-4 font-semibold">Plumber</td>
   205|                    <td className="py-2 pr-4">$55K-$85K</td>
   206|                    <td className="py-2 pr-4">$75K-$110K</td>
   207|                    <td className="py-2 pr-4">4-5 years</td>
   208|                  </tr>
   209|                  <tr className="border-b">
   210|                    <td className="py-2 pr-4 font-semibold">HVAC Tech</td>
   211|                    <td className="py-2 pr-4">$50K-$80K</td>
   212|                    <td className="py-2 pr-4">$70K-$100K</td>
   213|                    <td className="py-2 pr-4">6-24 months</td>
   214|                  </tr>
   215|                  <tr className="border-b">
   216|                    <td className="py-2 pr-4 font-semibold">Welder</td>
   217|                    <td className="py-2 pr-4">$45K-$75K</td>
   218|                    <td className="py-2 pr-4">$65K-$95K</td>
   219|                    <td className="py-2 pr-4">6-18 months</td>
   220|                  </tr>
   221|                  <tr>
   222|                    <td className="py-2 pr-4 font-semibold">Dental Hygienist</td>
   223|                    <td className="py-2 pr-4">$70K-$100K</td>
   224|                    <td className="py-2 pr-4">$85K-$120K</td>
   225|                    <td className="py-2 pr-4">2 years</td>
   226|                  </tr>
   227|                </tbody>
   228|              </table>
   229|            </div>
   230|          </div>
   231|
   232|          {/* CTA */}
   233|          <div className="bg-blue-600 text-white p-8 rounded-xl text-center">
   234|            <h2 className="text-3xl font-bold mb-4">Ready to Find Your Trade?</h2>
   235|            <p className="text-xl mb-6">
   236|              Take the 10-minute assessment and get matched today.
   237|            </p>
   238|            <Link
   239|              href="/assessment"
   240|              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
   241|            >
   242|              Start Assessment →
   243|            </Link>
   244|          </div>
   245|        </div>
   246|      </main>
   247|    </div>
   248|  );
   249|}
   250|