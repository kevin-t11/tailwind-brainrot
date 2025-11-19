import { Check, Phone } from 'lucide-react';

const pricingTiers = [
  {
    name: 'Basic Tier',
    description: 'Perfect for startups and small businesses getting started with customer support.',
    price: 29,
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <rect width="18" height="18" rx="2" fill="#6B7280" />
        <rect x="22" width="18" height="18" rx="2" fill="#6B7280" />
        <rect y="22" width="18" height="18" rx="2" fill="#6B7280" />
        <rect x="22" y="22" width="18" height="18" rx="2" fill="#6B7280" />
      </svg>
    ),
    features: [
      '5,000 conversations/mo',
      'Basic ticket management',
      'Email support integration',
      'Standard response times',
      'Basic reporting',
      '3 user seats',
      'Community support'
    ],
    cta: 'Start with Basic',
    popular: false
  },
  {
    name: 'Professional Tier',
    description:
      'For scaling ecommerce businesses ready to offer smarter, more personalized customer support across channels.',
    price: 69,
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <rect width="18" height="18" rx="2" fill="#9CA3AF" />
        <rect x="22" width="18" height="18" rx="2" fill="#9CA3AF" />
        <rect y="22" width="18" height="18" rx="2" fill="#9CA3AF" />
        <rect x="22" y="22" width="18" height="18" rx="2" fill="#9CA3AF" />
      </svg>
    ),
    features: [
      '25,000 conversations/mo',
      'AI-assisted ticket triage and agent assist',
      'Ecommerce integrations (Amazon, eBay, Meta Shops)',
      'Smart escalation rules',
      'Custom domain & branding',
      '10 user seats',
      'Priority support'
    ],
    cta: 'Start with Pro',
    popular: true
  },
  {
    name: 'Enterprise Tier',
    description:
      'For large organizations requiring advanced features, unlimited scale, and dedicated support.',
    price: null,
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <rect width="18" height="18" rx="2" fill="#D1D5DB" />
        <rect x="22" width="18" height="18" rx="2" fill="#D1D5DB" />
        <rect y="22" width="18" height="18" rx="2" fill="#D1D5DB" />
        <rect x="22" y="22" width="18" height="18" rx="2" fill="#D1D5DB" />
      </svg>
    ),
    features: [
      'Unlimited conversations',
      'Advanced AI automation & workflows',
      'Custom integrations & API access',
      'Dedicated account manager',
      'White-label solutions',
      'Unlimited user seats',
      '24/7 premium support',
      'SLA guarantees'
    ],
    cta: 'Contact Sales',
    popular: false
  }
];

export const Pricing = () => {
  return (
    <div className="grid grid-cols-1 gap-6 font-sans md:grid-cols-2 lg:grid-cols-3">
      {pricingTiers.map((tier) => (
        <div
          key={tier.name}
          className={`relative overflow-hidden rounded-3xl ${
            tier.popular
              ? 'bg-gradient-to-br from-amber-800 via-amber-700/40 to-white/20'
              : 'bg-gradient-to-br from-neutral-800 to-neutral-700 backdrop-blur-xl'
          }`}>
          {/* Geometric circles background */}
          {tier.popular && (
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <div className="bg-gradient-radial absolute -top-20 -right-20 h-80 w-80 rounded-full from-orange-500/30 to-transparent opacity-30" />
              <div className="absolute top-10 right-10 h-60 w-60 rounded-full border-2 border-orange-500/30 opacity-20" />
              <div className="absolute top-32 right-32 h-40 w-40 rounded-full border-2 border-orange-400/20 opacity-15" />
            </div>
          )}

          <div className="relative p-8">
            {/* Popular badge */}
            {tier.popular && (
              <div className="absolute top-6 right-6">
                <span className="inline-flex items-center rounded-full border border-orange-500/30 bg-orange-500/20 px-3 py-1 text-xs font-medium text-orange-400">
                  Most Popular
                </span>
              </div>
            )}

            {/* Icon */}
            <div className="mb-4">{tier.icon}</div>

            {/* Tier name */}
            <h3 className="mb-2 text-lg font-bold text-white">{tier.name}</h3>

            {/* Description */}
            <p className="mb-4 text-sm leading-relaxed text-gray-400">{tier.description}</p>

            {/* Price */}
            <div className="mb-4">
              {tier.price ? (
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-white">${tier.price}.00</span>
                  <span className="ml-2 text-gray-400">/mo</span>
                </div>
              ) : (
                <div className="text-4xl font-bold text-white">Custom Pricing</div>
              )}
            </div>

            {/* Features */}
            <div className="mb-4">
              <h4 className="mb-4 font-semibold text-white">Core Features</h4>
              <ul className="space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                    <span className="text-sm text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="flex flex-col gap-3">
              {tier.price ? (
                <>
                  <button className="w-full cursor-pointer rounded-lg bg-orange-500 py-3 font-medium text-white transition-colors hover:bg-orange-600">
                    {tier.cta}
                  </button>
                  <button className="flex cursor-pointer items-center justify-center gap-2 text-sm text-neutral-300 transition-colors hover:text-neutral-200">
                    <Phone className="h-4 w-4" />
                    Contact For Custom
                  </button>
                </>
              ) : (
                <button className="w-full cursor-pointer rounded-lg bg-orange-500 py-3 font-medium text-white transition-colors hover:bg-orange-600">
                  {tier.cta}
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
