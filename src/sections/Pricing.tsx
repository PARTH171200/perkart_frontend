import React, { useState } from 'react';
import { Check, X, Sparkles, Building2, Zap } from 'lucide-react';

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingPlan {
  id: string;
  name: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
  features: PricingFeature[];
  ctaText: string;
  isPopular?: boolean;
  isEnterprise?: boolean;
}

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans: PricingPlan[] = [
    {
      id: 'basic',
      name: 'Basic',
      description: 'Essential tools for casual explorers.',
      monthlyPrice: 0,
      yearlyPrice: 0,
      features: [
        { text: 'Up to 10 image uploads / captures', included: true },
        { text: 'Detailed AI analysis', included: true },
        { text: 'Analysis history', included: false },
        { text: 'Connection to corporate members', included: false },
        { text: 'Ad-free experience', included: false },
      ],
      ctaText: 'Get Started Free',
      isPopular: false,
    },
    {
      id: 'premium',
      name: 'Premium',
      description: 'Power features for serious innovators.',
      monthlyPrice: 899,
      yearlyPrice: 8599,
      features: [
        { text: 'Unlimited image uploads & captures', included: true },
        { text: 'Full analysis history archive', included: true },
        { text: 'Connect with corporate members', included: true },
        { text: 'Access investable opportunities', included: true },
        { text: '100% Ad-free experience', included: true },
      ],
      ctaText: 'Upgrade to Premium',
      isPopular: true,
    },
    {
      id: 'corporate',
      name: 'Corporate',
      description: 'Strategic access for enterprises.',
      monthlyPrice: 4599,
      yearlyPrice: 44999,
      features: [
        { text: 'All Premium features included', included: true },
        { text: 'Direct connection with Perkart team', included: true },
        { text: 'Investment guidance & advisory', included: true },
        { text: 'Priority VIP support', included: true },
        { text: 'Dedicated account manager', included: true },
      ],
      ctaText: 'Contact Sales',
      isPopular: false,
      isEnterprise: true,
    },
  ];

  return (
    <section className="relative w-full py-24 bg-[#050505] text-white font-sans overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[20%] w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px]" />
        <div className="absolute inset-0 opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Simple Pricing, <span className="text-amber-500">Infinite Potential</span>
          </h2>
          <p className="text-gray-400 text-lg mb-10">
            Choose the plan that fits your innovation journey. Scale as you grow.
          </p>

          {/* Toggle Switch */}
          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm font-medium transition-colors ${!isAnnual ? 'text-white' : 'text-gray-500'}`}>
              Monthly
            </span>
            
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative w-16 h-8 rounded-full bg-zinc-800 border border-zinc-700 p-1 transition-colors hover:border-zinc-600 focus:outline-none focus:ring-2 focus:ring-amber-500/50"
            >
              <div 
                className={`w-6 h-6 rounded-full bg-white shadow-md transform transition-transform duration-300 ${
                  isAnnual ? 'translate-x-8' : 'translate-x-0'
                }`} 
              />
            </button>

            <span className={`text-sm font-medium transition-colors ${isAnnual ? 'text-white' : 'text-gray-500'}`}>
              Yearly
            </span>
            
            <span className="ml-2 px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-500 text-xs font-bold uppercase tracking-wide border border-amber-500/20">
              Save 20%
            </span>
          </div>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start max-w-7xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative flex flex-col p-8 rounded-3xl transition-all duration-300 ${
                plan.isPopular
                  ? 'bg-zinc-900/80 border-2 border-amber-500/50 shadow-[0_0_40px_-10px_rgba(245,158,11,0.15)] md:-mt-4 md:mb-4 z-10'
                  : 'bg-black/40 border border-white/10 hover:border-white/20 hover:bg-zinc-900/30'
              }`}
            >
              {/* Most Popular Badge */}
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-500 to-orange-600 text-black font-bold text-xs px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 uppercase tracking-wider">
                  <Sparkles size={12} fill="black" />
                  Most Popular
                </div>
              )}

              {/* Plan Header */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  {plan.isEnterprise ? (
                    <div className="p-2 rounded-lg bg-zinc-800 text-gray-300"><Building2 size={20} /></div>
                  ) : plan.isPopular ? (
                    <div className="p-2 rounded-lg bg-amber-500/20 text-amber-500"><Zap size={20} /></div>
                  ) : (
                    <div className="p-2 rounded-lg bg-zinc-800 text-gray-300"><Sparkles size={20} /></div>
                  )}
                  <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                </div>
                
                <p className="text-sm text-gray-400 min-h-[40px] leading-relaxed">
                  {plan.description}
                </p>
              </div>

              {/* Price Display */}
              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-white tracking-tight">
                    ₹{isAnnual ? plan.yearlyPrice.toLocaleString('en-IN') : plan.monthlyPrice.toLocaleString('en-IN')}
                  </span>
                  <span className="text-gray-500 font-medium">
                    /{isAnnual ? 'year' : 'month'}
                  </span>
                </div>
                {isAnnual && plan.yearlyPrice > 0 && (
                  <p className="text-xs text-amber-500 mt-2 font-medium">
                    You save ₹{((plan.monthlyPrice * 12) - plan.yearlyPrice).toLocaleString('en-IN')} per year
                  </p>
                )}
              </div>

              {/* Features List */}
              <div className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className={`flex items-start gap-3 text-sm ${feature.included ? 'text-gray-300' : 'text-gray-600'}`}>
                    {feature.included ? (
                      <Check className="w-5 h-5 text-amber-500 shrink-0" />
                    ) : (
                      <X className="w-5 h-5 text-gray-700 shrink-0" />
                    )}
                    <span className={feature.included ? '' : 'line-through opacity-60'}>{feature.text}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button
                className={`w-full py-4 rounded-xl font-bold text-sm transition-all duration-300 ${
                  plan.isPopular
                    ? 'bg-amber-500 text-black hover:bg-amber-400 shadow-[0_4px_20px_rgba(245,158,11,0.2)]'
                    : 'bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-white/30'
                }`}
              >
                {plan.ctaText}
              </button>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="mt-16 text-center border-t border-white/5 pt-8">
          <p className="text-xs text-gray-600">
            Prices are subject to change. Taxes may apply. <br className="md:hidden"/>
            By subscribing, you agree to our Terms of Service.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Pricing;