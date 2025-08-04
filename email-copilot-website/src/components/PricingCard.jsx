import { Check, Star } from 'lucide-react';

const PricingCard = ({ plan, isAnnual }) => {
  const price = isAnnual ? plan.price.annual : plan.price.monthly;
  const monthlyPrice = isAnnual ? Math.round(plan.price.annual / 12) : plan.price.monthly;
  
  return (
    <div className={`relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg border ${
      plan.popular 
        ? 'border-primary-500 ring-2 ring-primary-500 ring-opacity-20' 
        : 'border-gray-200 dark:border-gray-700'
    } p-8 transition-all duration-300 hover:shadow-xl hover:scale-105`}>
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className="inline-flex items-center bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-medium">
            <Star className="h-4 w-4 mr-1" />
            Most Popular
          </div>
        </div>
      )}
      
      <div className="text-center">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          {plan.name}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          {plan.description}
        </p>
        
        <div className="mb-6">
          <div className="flex items-baseline justify-center">
            <span className="text-5xl font-bold text-gray-900 dark:text-white">
              ${price === 0 ? '0' : monthlyPrice}
            </span>
            {price > 0 && (
              <span className="text-lg text-gray-600 dark:text-gray-400 ml-1">
                /month
              </span>
            )}
          </div>
          {isAnnual && price > 0 && (
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Billed annually (${price}/year)
            </p>
          )}
        </div>
        
        <button className={`w-full py-3 px-6 rounded-lg font-medium transition-colors duration-200 mb-8 ${
          plan.popular
            ? 'bg-primary-600 hover:bg-primary-700 text-white'
            : 'bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white'
        }`}>
          {plan.cta}
        </button>
      </div>
      
      <div className="space-y-4">
        <h4 className="font-semibold text-gray-900 dark:text-white">
          What's included:
        </h4>
        <ul className="space-y-3">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
              <span className="text-gray-600 dark:text-gray-400 text-sm">
                {feature}
              </span>
            </li>
          ))}
        </ul>
        
        {plan.limitations && (
          <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
            <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-3">
              Limitations:
            </h4>
            <ul className="space-y-2">
              {plan.limitations.map((limitation, index) => (
                <li key={index} className="text-gray-500 dark:text-gray-500 text-sm">
                  • {limitation}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default PricingCard;