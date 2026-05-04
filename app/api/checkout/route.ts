import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

// Paddle credentials (Merchant of Record - no US entity needed)
// Set these in .env.local (not committed to git)
const PADDLE_API_KEY = process.env.PADDLE_API_KEY || '';
const PADDLE_VENDOR_ID = process.env.PADDLE_VENDOR_ID || '';

// Product mapping
const products = {
  'trade-starter-pack': {
    name: 'Trade Career Starter Pack',
    price: 900, // $9.00 in cents
    pdf: '/pdfs/trade_starter_pack.pdf'
  },
  'electrician-guide': {
    name: 'Electrician Apprenticeship Guide',
    price: 700, // $7.00 in cents
    pdf: '/pdfs/electrician_guide.pdf'
  },
  'paid-to-learn': {
    name: 'How to Get Paid to Learn a Trade',
    price: 700, // $7.00 in cents
    pdf: '/pdfs/paid_to_learn.pdf'
  }
};

export async function POST(request: Request) {
  try {
    const { productId, customerEmail } = await request.json();
    
    const product = products[productId as keyof typeof products];
    if (!product) {
      return NextResponse.json(
        { error: 'Invalid product ID' },
        { status: 400 }
      );
    }
    
    // For now, return a simulated checkout response
    // In production, you would call Paddle API:
    /*
    const paddleResponse = await fetch('https://vendors.paddle.com/api/2.0/checkout/open', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Bearer ${PADDLE_API_KEY}`
      },
      body: new URLSearchParams({
        vendor_id: PADDLE_VENDOR_ID,
        product_id: productId,
        product_name: product.name,
        product_price: (product.price / 100).toFixed(2),
        currency: 'USD',
        customer_email: customerEmail,
        return_url: `${request.headers.get('origin')}/resources?success=true`,
        cancel_url: `${request.headers.get('origin')}/resources?canceled=true`
      }).toString()
    });
    
    const paddleData = await paddleResponse.json();
    */
    
    // Simulated response for now
    return NextResponse.json({ 
      message: 'Paddle checkout initiated',
      product: product.name,
      price: `$${product.price / 100}`,
      checkout_url: `${request.headers.get('origin')}/resources?checkout=${productId}`,
      pdf_url: product.pdf,
      // In production: paddleData.checkout_url
    });
  } catch (error) {
    console.error('Checkout error:', error);
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    );
  }
}
