import React from 'react';
import { X, Check } from 'lucide-react';

interface ProblemSolutionProps {
  onBookClick: () => void;
}

export default function ProblemSolution({ onBookClick }: ProblemSolutionProps) {
  const compareItems = [
    {
      category: "Visibility",
      problemTitle: "Invisible on Google",
      problemDesc: "Referral-reliant and invisible. Your current site doesn't rank when local prospects search for your services, forcing you to chase cold leads.",
      solutionTitle: "Rank search automatically",
      solutionDesc: "SEO is baked in from day one. Clean code, structured data schema, and local Google Maps optimization so your ideal clients find you on autopilot.",
    },
    {
      category: "Cost",
      problemTitle: "High upfront build fees",
      problemDesc: "Agencies charge $5,000+ upfront and keep billing you professional hours for security plugins, domain hosting, or simple spelling fixes.",
      solutionTitle: "$0 upfront, simple flat rate",
      solutionDesc: "We design and launch your custom high-converting website for $0 upfront. You pay a clean, flat monthly subscription for unlimited changes.",
    },
    {
      category: "Design",
      problemTitle: "Cheap stock-photo look",
      problemDesc: "Amateur layouts and generic stock imagery make your business look low-end. Prospects judge your quality and click away in under five seconds.",
      solutionTitle: "Command premium rates",
      solutionDesc: "Bespoke high-end designs crafted with generous negative space and professional formatting that reflects the real quality of your craftsmanship.",
    },
    {
      category: "Copywriting",
      problemTitle: "You have to write the text",
      problemDesc: "Most designers force you to draft your own copy — leading to dry paragraphs about your 'Mission' instead of texts that convert visitors.",
      solutionTitle: "Marketer-written sales copy",
      solutionDesc: "Our marketing specialists write every single word, utilizing proven sales psychology designed to capture interest and drive inquiries.",
    },
    {
      category: "Maintenance",
      problemTitle: "Wasting weekend hours",
      problemDesc: "Managing server downtime, plugin security warnings, software updates, spam, and broken layouts cuts directly into your personal family time.",
      solutionTitle: "100% fully managed",
      solutionDesc: "Schedulers, alerts, routing, and hosting security are on complete autopilot. We handle 100% of updates so you never touch the backend again.",
    },
  ];

  return (
    <section id="problem-solution-section" className="border-y border-neutral-100 bg-gray-50/50 py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-4xl text-center mx-auto mb-12 sm:mb-16">
          <p className="text-xs font-bold text-[#ea580c] uppercase tracking-widest mb-3 text-center">
            How we compare
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight tracking-tight">
            We build it. We manage it. <br className="hidden sm:block" />
            <span className="relative inline-block mt-2 sm:mt-1">
              <span className="relative z-10 text-[#ea580c]">You close deals.</span>
              <span className="absolute inset-x-0 bottom-1.5 h-3.5 bg-[#ea580c]/10 -rotate-1 z-0"></span>
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-base sm:text-lg leading-relaxed text-gray-500">
            Most business owners end up with either a frustrated DIY project or an overpriced, static agency brochure site. See how Concrete Scaling compares.
          </p>
        </div>

        {/* Mobile cards (layout hidden on desktop) */}
        <div className="grid gap-6 md:hidden">
          {compareItems.map((item, index) => (
            <div key={index} className="rounded-lg border border-neutral-200 overflow-hidden bg-white shadow-sm transition-all duration-200 hover:shadow-md">
              {/* Category Header Badge */}
              <div className="border-b border-neutral-100 bg-neutral-50 px-4 py-2 flex items-center justify-between">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  Category
                </span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wide uppercase bg-neutral-200/50 text-neutral-700">
                  {item.category}
                </span>
              </div>

              {/* The Problem Part */}
              <div className="p-5 border-b border-gray-100 bg-white">
                <div className="flex items-start gap-2.5 mb-2">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-red-50 text-red-500">
                    <X className="size-3.5 stroke-[3]" />
                  </span>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">
                      {item.problemTitle}
                    </h4>
                    <p className="text-xs text-gray-500 leading-relaxed mt-1">
                      {item.problemDesc}
                    </p>
                  </div>
                </div>
              </div>

              {/* SiteRabbits Part */}
              <div className="p-5 bg-[#ea580c]/[0.03]">
                <div className="flex items-start gap-2.5">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-[#ea580c] text-white shadow-sm">
                    <Check className="size-3.5 stroke-[3]" />
                  </span>
                  <div>
                    <h4 className="font-bold text-[#ea580c] text-sm">
                      {item.solutionTitle}
                    </h4>
                    <p className="text-xs text-gray-700 leading-relaxed mt-1 font-semibold">
                      {item.solutionDesc}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>        {/* Desktop Table (layout hidden on mobile) */}
        <div className="hidden overflow-x-auto rounded-lg border border-neutral-200 bg-white shadow-[0_22px_60px_rgba(234,88,12,0.03)] md:block max-w-6xl mx-auto">
          <table className="w-full table-fixed text-left text-sm border-collapse">
            <colgroup>
              <col className="w-[46%]" />
              <col className="w-[54%]" />
            </colgroup>
            <thead>
              <tr className="border-b border-neutral-200">
                <th className="px-10 py-6 bg-neutral-50/70 text-neutral-400 font-extrabold text-[11px] uppercase tracking-[0.2em]">
                  The Problem
                </th>
                <th className="border-l border-neutral-200 bg-[#ea580c]/[0.05] px-10 py-6 font-extrabold text-[11px] uppercase tracking-[0.2em] text-[#ea580c]">
                  <div className="flex items-center justify-between">
                    <span>Concrete Scaling Advantage</span>
                    <span className="inline-flex items-center bg-[#ea580c] text-white text-[9px] uppercase tracking-[0.15em] px-3 py-1 rounded font-black shadow-sm">
                      Recommended
                    </span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {compareItems.map((item, index) => (
                <tr key={index} className="border-b border-neutral-100 last:border-0 hover:bg-neutral-50/20 transition-all duration-150">
                  {/* Problem Column */}
                  <td className="px-10 py-8 align-top">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded text-[9px] font-extrabold tracking-wider uppercase bg-red-50 text-red-600">
                          {item.category}
                        </span>
                        <div className="flex size-5 shrink-0 items-center justify-center rounded-full bg-red-50 text-red-500">
                          <X className="size-3 stroke-[3]" />
                        </div>
                      </div>
                      <p className="font-extrabold text-neutral-900 text-lg tracking-tight">
                        {item.problemTitle}
                      </p>
                      <p className="text-sm text-neutral-500 leading-relaxed font-sans">
                        {item.problemDesc}
                      </p>
                    </div>
                  </td>
                  {/* SiteRabbits (Highlighted) Column */}
                  <td className="border-l border-neutral-200 bg-[#ea580c]/[0.015] px-10 py-8 align-top">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded text-[9px] font-extrabold tracking-wider uppercase bg-[#ea580c]/10 text-[#ea580c]">
                          {item.category}
                        </span>
                        <div className="flex size-5 shrink-0 items-center justify-center rounded-full bg-[#ea580c] text-white shadow-sm">
                          <Check className="size-3 stroke-[3]" />
                        </div>
                      </div>
                      <p className="font-extrabold text-[#ea580c] text-lg tracking-tight">
                        {item.solutionTitle}
                      </p>
                      <p className="text-sm text-neutral-800 leading-relaxed font-semibold font-sans">
                        {item.solutionDesc}
                      </p>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* CTA Button Block */}
        <div className="mt-12 sm:mt-16 text-center">
          <button 
            onClick={onBookClick}
            className="inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#f97d11] to-[#ea580c] text-white font-extrabold px-10 py-4.5 rounded-2xl shadow-xl shadow-orange-500/10 hover:brightness-110 transition-all text-base cursor-pointer hover:scale-[1.02] active:scale-[0.98] group"
          >
            <span>Book a Call</span>
            <svg className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
