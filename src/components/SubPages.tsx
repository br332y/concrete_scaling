import { motion } from 'motion/react';
import { ArrowLeft, Sparkles, CheckCircle2, ShieldCheck, HelpCircle, Lock, Undo, Building, Landmark, Scale, TreePine } from 'lucide-react';
import { ActiveSection } from '../types';

interface SubPagesProps {
  section: ActiveSection;
  onBackToHome: () => void;
  onBookClick: () => void;
}

export default function SubPages({ section, onBackToHome, onBookClick }: SubPagesProps) {
  
  if (section === 'home') return null;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="bg-white min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-72px)] py-12 px-4"
    >
      <div className="max-w-4xl mx-auto space-y-10">
        
        {/* Navigation Return Header */}
        <button
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-700 hover:text-orange-900 bg-orange-50 hover:bg-orange-100 px-4 py-2.5 rounded-xl transition-all cursor-pointer shadow-sm border border-orange-100"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Landing Page</span>
        </button>

        {/* 1. ABOUT PAGE SECTION */}
        {section === 'about' && (
          <div className="space-y-8 text-left">
            <div className="space-y-3">
              <span className="bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                Our Story & Vision
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight leading-none">
                Websites built for callers,<br />not just casual swipers.
              </h1>
              <p className="text-base sm:text-lg text-gray-500 leading-relaxed">
                Concrete Scaling is founded with one single objective—eliminating complex, non-performing agency overhead and building websites that rapidly convert local searches into real paying clients.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
              <div className="border border-gray-200/80 p-5 rounded-2xl bg-gray-50/50 space-y-2 hover:border-orange-300 transition-colors">
                <Sparkles className="w-6 h-6 text-orange-500" />
                <h3 className="font-bold text-gray-900 text-base">Marketer-Led Design</h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  We write high-impact structural templates backed by local marketing psychology, visual anchors, and conversion funnels.
                </p>
              </div>

              <div className="border border-gray-200/80 p-5 rounded-2xl bg-gray-50/50 space-y-2 hover:border-orange-300 transition-colors">
                <CheckCircle2 className="w-6 h-6 text-orange-500" />
                <h3 className="font-bold text-gray-900 text-base">Unmatched Velocity</h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Most design houses take months of delayed messaging. We program, polish, configure, and launch custom pages in days.
                </p>
              </div>

              <div className="border border-gray-200/80 p-5 rounded-2xl bg-gray-50/50 space-y-2 hover:border-orange-300 transition-colors">
                <ShieldCheck className="w-6 h-6 text-orange-500" />
                <h3 className="font-bold text-gray-900 text-base">100% Full Management</h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  We handle server loads, DNS routing, secure certificates, and daily content updates so you can focus entirely on your physical projects.
                </p>
              </div>
            </div>

            <div className="p-6 bg-orange-950 text-white rounded-3xl space-y-4 shadow-xl">
              <h3 className="text-lg font-black">Our Simple Promise</h3>
              <p className="text-xs sm:text-sm text-orange-200 leading-relaxed">
                We believe a landing website is the digital front-door of your hard-earned local business. If it doesn't represent the immense premium caliber of your service catalog, you lose critical client trust instantly. We make you the dominant name in your service area.
              </p>
              <button 
                onClick={onBookClick}
                className="bg-white text-gray-950 font-black text-xs px-5 py-3 rounded-xl hover:bg-orange-100 transition-all cursor-pointer"
              >
                Schedule Direct Audit
              </button>
            </div>
          </div>
        )}

        {/* 2. WORK (PORTFOLIO) PAGE SECTION */}
        {section === 'work' && (
          <div className="space-y-8 text-left">
            <div className="space-y-3">
              <span className="bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                Recent Case Transformations
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight leading-none">
                Transformations that drive high-ticket calls.
              </h1>
              <p className="text-base text-gray-500 leading-relaxed">
                Review verified Concrete Scaling construction and service enterprise website overhauls across Dallas and Austin.
              </p>
            </div>

            {/* Case Studies */}
            <div className="space-y-6 pt-4">
              
              {/* Case Study 1 */}
              <div className="border border-gray-200 rounded-3xl p-6 hover:shadow-lg transition-all space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-gray-150">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center">
                      <Building className="w-4 h-4 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-extrabold text-sm sm:text-base text-gray-900">Hugo Builders LLC</h3>
                      <p className="text-[10px] text-gray-500 font-mono">Dallas custom contractor</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">
                    +185% Phone Conversions
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                  Hugo Builders needed an authoritative, premium portfolio system to display custom $250k residential additions. We replaced an ancient forum-looking host template with a blazing-fast media gallery, fully secure estimating forms, and mapped schema integrations.
                </p>
              </div>

              {/* Case Study 2 */}
              <div className="border border-gray-200 rounded-3xl p-6 hover:shadow-lg transition-all space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-gray-150">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center">
                      <TreePine className="w-4 h-4 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-extrabold text-sm sm:text-base text-gray-900">Modern Living Landscaping</h3>
                      <p className="text-[10px] text-gray-500 font-mono">Austin hardscape design crew</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">
                    No. 1 Spot Google Search
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                  Raymond had zero search presence in highly competitive central Austin. We structured optimized geographical local landers matching Austin structural parameters and configured smart SEO content loops. Now, they index on Google's top map spots for primary design keywords on auto-pilot.
                </p>
              </div>

              {/* Case Study 3 */}
              <div className="border border-gray-200 rounded-3xl p-6 hover:shadow-lg transition-all space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-gray-150">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center">
                      <Scale className="w-4 h-4 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-extrabold text-sm sm:text-base text-gray-900">Law Office of Robert Kuhn</h3>
                      <p className="text-[10px] text-gray-500 font-mono">Local civil service firm</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">
                    +210% Consult Bookings
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                  Kuhn Law Office suffered from high click abandonment. We developed a clear, rapid consult scheduler widget, simplified client onboarding questionnaires, and boosted mobile responsiveness. Leads are locked down instantly.
                </p>
              </div>

            </div>
          </div>
        )}

        {/* 3. TERMS OF SERVICE */}
        {section === 'terms' && (
          <div className="space-y-6 text-left">
            <div className="flex items-center gap-2">
              <Scale className="w-5 h-5 text-orange-650" />
              <h1 className="text-2xl sm:text-3xl font-black text-gray-900">Terms of Service</h1>
            </div>
            <p className="text-[10px] uppercase font-mono tracking-widest text-gray-400">Published: May 20, 2026</p>
            <div className="text-xs sm:text-sm text-gray-500 space-y-4 leading-relaxed font-sans">
              <p>Welcome to Concrete Scaling. By accessing our platform, utilizing our design loops, scheduling calls, or requesting website builds, you explicitly state compliance with these following terms:</p>
              <h3 className="font-bold text-gray-900 pt-2">1. Scope of Work</h3>
              <p>Concrete Scaling executes custom landing site design, configuration, speed polishes, and management. All estimates, features, and release times are walk-through parameters details discussed on call. We do not provide illegal content or secure malware hosting setups.</p>
              <h3 className="font-bold text-gray-900 pt-2">2. Management and Server Fees</h3>
              <p>Monthly hosting, secure certificate maintenance, DNS monitoring, content strategy updates, and geographical local lander maintenance are charged under subscription parameters. Interruption or cancellation stops server allocation instantly.</p>
              <h3 className="font-bold text-gray-900 pt-2">3. Trademark and Content Licenses</h3>
              <p>Concrete Scaling holds full rights of our design templates, structure styles, and customized logic systems. The localized content and business logos uploaded remain intellectual properties of our respective clients.</p>
            </div>
          </div>
        )}

        {/* 4. PRIVACY POLICY */}
        {section === 'privacy' && (
          <div className="space-y-6 text-left">
            <div className="flex items-center gap-2">
              <Lock className="w-5 h-5 text-orange-650" />
              <h1 className="text-2xl sm:text-3xl font-black text-gray-900">Privacy Policy</h1>
            </div>
            <p className="text-[10px] uppercase font-mono tracking-widest text-gray-400">Published: May 20, 2026</p>
            <div className="text-xs sm:text-sm text-gray-500 space-y-4 leading-relaxed font-sans">
              <p>At Concrete Scaling, we protect your business parameters and contact details securely. Our compliance standards are described below:</p>
              <h3 className="font-bold text-gray-900 pt-2">1. Collected Information</h3>
              <p>We receive your business contact details (name, email, phone) and project goals purely via our integrated scheduler form or Call bookings. This data is handled safely internally to prepare your customized layout study.</p>
              <h3 className="font-bold text-gray-900 pt-2">2. Cookies & Tracker Pixels</h3>
              <p>We may deploy limited diagnostic cookie indicators or secure tracker pixels (like Meta pixel mentioned in headers) purely to optimized our Google ads allocation and user scrolling patterns across our official landers.</p>
              <h3 className="font-bold text-gray-900 pt-2">3. Zero Selling Policy</h3>
              <p>We absolutely never sell, lease, target, distribute, or share your structural credentials, business metrics, or emails to secondary marketing brokers.</p>
            </div>
          </div>
        )}

        {/* 5. REFUND POLICY */}
        {section === 'refunds' && (
          <div className="space-y-6 text-left">
            <div className="flex items-center gap-2">
              <Undo className="w-5 h-5 text-orange-650" />
              <h1 className="text-2xl sm:text-3xl font-black text-gray-900">Refund Policy</h1>
            </div>
            <p className="text-[10px] uppercase font-mono tracking-widest text-gray-400">Published: May 20, 2026</p>
            <div className="text-xs sm:text-sm text-gray-500 space-y-4 leading-relaxed font-sans">
              <p>We execute premium site design strategy loops that translate into real local customers. To maintain complete developer allocation integrity, we respect our simple transparency rules:</p>
              <h3 className="font-bold text-gray-900 pt-2">1. Strategic Scope Clearances</h3>
              <p>Every phase of code building, geographical positioning, local copy optimization, and platform setup requires client sign-offs. This rules out accidental expectations.</p>
              <h3 className="font-bold text-gray-900 pt-2">2. Clear Mutual Alignment</h3>
              <p>If we fail to reach design expectations during the initial design study phase, we refund our initial setups fully. Once a site is finalized, deployed, registered on DNS, and indexed on Google, we cover maintenance costs and can't release previous hour codes.</p>
            </div>
          </div>
        )}

      </div>
    </motion.div>
  );
}
