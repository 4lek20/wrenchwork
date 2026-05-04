"use client"

import Link from "next/link";
import Script from "next/script";

export default function Resources() {
  const products = [
    {
      id: "trade-starter-pack",
      name: "Trade Career Starter Pack",
      price: 9,
      description: "Complete PDF guide with 50+ trade career profiles, salary data, training paths, and career-matching quiz.",
      pdf: "/pdfs/trade_starter_pack.pdf"
    },
    {
      id: "electrician-guide",
      name: "Electrician Apprenticeship Guide",
      price: 7,
      description: "Step-by-step guide to becoming an electrician apprentice: requirements, applications, and interview prep.",
      pdf: "/pdfs/electrician_guide.pdf"
    },
    {
      id: "paid-to-learn",
      name: "How to Get Paid to Learn a Trade",
      price: 7,
      description: "Discover paid apprenticeship programs, union training, and how to earn while you learn a trade.",
      pdf: "/pdfs/paid_to_learn.pdf"
    }
  ];

  const handleBuy = async (product: typeof products[0]) => {
    const res = await fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ productId: product.id, amount: product.price })
    });
    const data = await res.json();
    if (data.url) window.location.href = data.url;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Trade Career Resources
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Premium digital guides to accelerate your trade career journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {product.name}
                </h2>
                <p className="text-gray-600 mb-6 min-h-[80px]">
                  {product.description}
                </p>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-4xl font-bold text-blue-600">
                    ${product.price}
                  </span>
                  <span className="text-sm text-gray-500">one-time</span>
                </div>
                <button
                  onClick={() => handleBuy(product)}
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Buy Now — ${product.price}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/assessment" className="text-blue-600 hover:text-blue-700 font-medium">
            ← Back to Career Assessment
          </Link>
        </div>
      </div>

      <Script
        src="https://cdn.paddle.com/paddle/v2/paddle.js"
        strategy="lazyOnload"
      />
      <Script id="paddle-init" strategy="lazyOnload">
        {`Paddle.Setup({ vendor: ${process.env.NEXT_PUBLIC_PADDLE_VENDOR_ID || 330230} });`}
      </Script>
    </div>
  );
}
