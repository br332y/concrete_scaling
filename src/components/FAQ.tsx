import React from 'react';

export default function FAQ() {
  const faqs = [
    {
      q: "How much does it cost?",
      a: "We’ll walk through pricing on the call based on your needs. Every site is custom built for businesses that want a site that actually generates revenue."
    },
    {
      q: "How long does it take?",
      a: "Normally days, not months. We build fast because any day you're invisible online is money left on the table."
    },
    {
      q: "What if I already have a website?",
      a: "Perfect. We’ll look at what you have, keep what works, and rewrite/rebuild what doesn't to get you more results."
    },
    {
      q: "Do I have to manage anything?",
      a: "Nope. We host, maintain, secure, update, and monitor your site behind the scenes. You focus on running your business."
    },
    {
      q: "What makes Concrete Scaling different?",
      a: "Most designers build pretty sites that don't convert. We build high-performing lead generation systems with trades industry expertise."
    },
    {
      q: "What kind of businesses do you work with?",
      a: "Local trade contractors (roofers, tree crews, custom builders, landscapers). If a single client is worth thousands, we're a fit."
    }
  ];

  return (
    <section className="bg-white py-16 sm:py-20 px-4 border-t border-gray-100">
      <div className="max-w-4xl mx-auto">
        <p className="text-xs font-bold text-[#ea580c] uppercase tracking-widest mb-3 text-center">
          FAQ
        </p>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-12 text-center">
          Everything you need to know
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-gray-50 rounded-xl border border-gray-200 p-5">
              <h3 className="text-sm font-extrabold text-gray-900 mb-1.5">
                {faq.q}
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
