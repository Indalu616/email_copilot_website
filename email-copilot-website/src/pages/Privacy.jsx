import { motion } from 'framer-motion';

const Privacy = () => {
  return (
    <div className="bg-white dark:bg-gray-900 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="prose prose-lg dark:prose-invert max-w-none"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
            Privacy Policy
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Last updated: January 15, 2024
          </p>

          <h2>Information We Collect</h2>
          <p>
            Email Copilot collects minimal data necessary to provide our AI-powered email assistance service. This includes:
          </p>
          <ul>
            <li>Email text context for generating suggestions (processed locally when possible)</li>
            <li>Usage analytics to improve our service</li>
            <li>Account information when you sign up for paid plans</li>
          </ul>

          <h2>How We Use Your Information</h2>
          <p>
            We use the collected information to:
          </p>
          <ul>
            <li>Provide AI-powered email suggestions</li>
            <li>Improve our machine learning models</li>
            <li>Process payments for premium features</li>
            <li>Send important service updates</li>
          </ul>

          <h2>Data Security</h2>
          <p>
            We implement industry-standard security measures to protect your data:
          </p>
          <ul>
            <li>End-to-end encryption for all data transmission</li>
            <li>Local processing whenever possible to minimize data exposure</li>
            <li>Regular security audits and penetration testing</li>
            <li>Compliance with SOC 2 Type II standards</li>
          </ul>

          <h2>Data Retention</h2>
          <p>
            We retain your data only as long as necessary to provide our services. Email content used for suggestions is processed in real-time and not stored permanently on our servers.
          </p>

          <h2>Your Rights</h2>
          <p>
            You have the right to:
          </p>
          <ul>
            <li>Access your personal data</li>
            <li>Correct inaccurate information</li>
            <li>Delete your account and associated data</li>
            <li>Export your data in a portable format</li>
          </ul>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at{' '}
            <a href="mailto:privacy@emailcopilot.com" className="text-primary-600 dark:text-primary-400">
              privacy@emailcopilot.com
            </a>.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Privacy;