import { motion } from 'framer-motion';
import { Book, Download, Code, HelpCircle } from 'lucide-react';
import FAQAccordion from '../components/FAQAccordion';
import { faqData } from '../data/faq';

const Docs = () => {
  const quickstartSteps = [
    'Install the Email Copilot extension from Chrome Web Store',
    'Open Gmail and start composing a new email',
    'Begin typing and watch AI suggestions appear',
    'Press Tab to accept suggestions or continue typing',
    'Send your professionally crafted email'
  ];

  const apiFeatures = [
    'RESTful API endpoints for integration',
    'Webhook support for real-time notifications',
    'SDKs for popular programming languages',
    'Comprehensive API documentation'
  ];

  return (
    <div className="bg-white dark:bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Documentation
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Everything you need to get started with Email Copilot, from installation to advanced features.
          </p>
        </motion.div>

        {/* Quick Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { icon: <Download className="h-6 w-6" />, title: 'Installation', id: 'installation' },
            { icon: <Book className="h-6 w-6" />, title: 'Quickstart', id: 'quickstart' },
            { icon: <Code className="h-6 w-6" />, title: 'API Reference', id: 'api' },
            { icon: <HelpCircle className="h-6 w-6" />, title: 'FAQ', id: 'faq' },
          ].map((item, index) => (
            <motion.a
              key={index}
              href={`#${item.id}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow duration-200"
            >
              <div className="text-primary-600 dark:text-primary-400 mb-2">
                {item.icon}
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white">
                {item.title}
              </h3>
            </motion.a>
          ))}
        </div>

        {/* Installation Section */}
        <section id="installation" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Installation Guide
          </h2>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Chrome Extension
            </h3>
            <ol className="list-decimal list-inside space-y-3 text-gray-600 dark:text-gray-300">
              <li>Visit the Chrome Web Store</li>
              <li>Search for "Email Copilot" or use our direct link</li>
              <li>Click "Add to Chrome" button</li>
              <li>Accept the required permissions</li>
              <li>Look for the Email Copilot icon in your browser toolbar</li>
            </ol>
            <div className="mt-6">
              <button className="btn-primary">
                Install from Chrome Web Store
              </button>
            </div>
          </div>
        </section>

        {/* Quickstart Section */}
        <section id="quickstart" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Quickstart Guide
          </h2>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Get Started in 5 Minutes
            </h3>
            <div className="space-y-4">
              {quickstartSteps.map((step, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-0.5 flex-shrink-0">
                    {index + 1}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* API Reference Section */}
        <section id="api" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            API Reference
          </h2>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Coming Soon: Developer API
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              We're working on a comprehensive API that will allow developers to integrate Email Copilot's AI capabilities into their own applications.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                  Planned Features:
                </h4>
                <ul className="space-y-2">
                  {apiFeatures.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600 dark:text-gray-300">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-900 dark:bg-gray-700 rounded-lg p-4">
                <h4 className="text-white font-mono text-sm mb-2">Example API Call:</h4>
                <pre className="text-green-400 text-xs overflow-x-auto">
{`curl -X POST \\
  https://api.emailcopilot.com/v1/suggest \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "context": "email_compose",
    "text": "Hi John, I wanted to follow up on",
    "tone": "professional"
  }'`}
                </pre>
              </div>
            </div>
            <div className="mt-6">
              <button className="btn-secondary mr-4">
                Request API Access
              </button>
              <button className="btn-outline">
                View Full Documentation
              </button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Frequently Asked Questions
          </h2>
          <FAQAccordion faqs={faqData} />
        </section>

        {/* Support CTA */}
        <div className="mt-16 bg-primary-50 dark:bg-primary-900/20 rounded-2xl p-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Need More Help?
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Can't find what you're looking for? Our support team is here to help you get the most out of Email Copilot.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">
              Contact Support
            </button>
            <button className="btn-secondary">
              Join Community Discord
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Docs;