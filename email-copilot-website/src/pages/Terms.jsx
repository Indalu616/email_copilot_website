import { motion } from 'framer-motion';

const Terms = () => {
  return (
    <div className="bg-white dark:bg-gray-900 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="prose prose-lg dark:prose-invert max-w-none"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
            Terms of Service
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Last updated: January 15, 2024
          </p>

          <h2>Acceptance of Terms</h2>
          <p>
            By using Email Copilot, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our service.
          </p>

          <h2>Description of Service</h2>
          <p>
            Email Copilot is an AI-powered Chrome extension that provides intelligent email completion suggestions. Our service helps users write professional emails more efficiently.
          </p>

          <h2>User Responsibilities</h2>
          <p>
            You agree to:
          </p>
          <ul>
            <li>Use the service only for lawful purposes</li>
            <li>Not attempt to reverse engineer or hack our systems</li>
            <li>Respect intellectual property rights</li>
            <li>Maintain the security of your account credentials</li>
          </ul>

          <h2>Subscription and Payment</h2>
          <p>
            Premium features require a paid subscription. By subscribing, you agree to:
          </p>
          <ul>
            <li>Pay all applicable fees</li>
            <li>Automatic renewal unless cancelled</li>
            <li>No refunds for partial periods</li>
          </ul>

          <h2>Intellectual Property</h2>
          <p>
            Email Copilot and its technology are protected by intellectual property laws. You may not copy, modify, or distribute our software without permission.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            Email Copilot is provided "as is" without warranties. We are not liable for any damages arising from the use of our service, including but not limited to data loss or service interruptions.
          </p>

          <h2>Termination</h2>
          <p>
            We may terminate your access to the service at any time for violation of these terms. You may cancel your subscription at any time through your account settings.
          </p>

          <h2>Changes to Terms</h2>
          <p>
            We may update these terms from time to time. Continued use of the service constitutes acceptance of the updated terms.
          </p>

          <h2>Contact Information</h2>
          <p>
            For questions about these Terms of Service, contact us at{' '}
            <a href="mailto:legal@emailcopilot.com" className="text-primary-600 dark:text-primary-400">
              legal@emailcopilot.com
            </a>.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Terms;