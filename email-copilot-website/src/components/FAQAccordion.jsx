import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQAccordion = ({ faqs }) => {
  const [openItems, setOpenItems] = useState(new Set());

  const toggleItem = (id) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq) => (
        <div
          key={faq.id}
          className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-200 hover:shadow-md"
        >
          <button
            className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
            onClick={() => toggleItem(faq.id)}
          >
            <span className="font-medium text-gray-900 dark:text-white">
              {faq.question}
            </span>
            {openItems.has(faq.id) ? (
              <ChevronUp className="h-5 w-5 text-gray-500 dark:text-gray-400 flex-shrink-0 ml-4" />
            ) : (
              <ChevronDown className="h-5 w-5 text-gray-500 dark:text-gray-400 flex-shrink-0 ml-4" />
            )}
          </button>
          
          {openItems.has(faq.id) && (
            <div className="px-6 pb-4">
              <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;