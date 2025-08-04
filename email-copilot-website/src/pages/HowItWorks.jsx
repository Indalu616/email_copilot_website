import { motion } from 'framer-motion';
import { Chrome, Mail, Zap, CheckCircle, ArrowRight } from 'lucide-react';
import CTAButton from '../components/CTAButton';

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: 'Install the Extension',
      description: 'Add Email Copilot to your Chrome browser from the Chrome Web Store. It takes just one click.',
      icon: <Chrome className="h-12 w-12" />,
      details: [
        'Visit Chrome Web Store',
        'Click "Add to Chrome"',
        'Grant necessary permissions',
        'Extension is ready to use'
      ]
    },
    {
      number: 2,
      title: 'Open Gmail',
      description: 'Navigate to Gmail in your browser. Email Copilot will automatically integrate with your compose window.',
      icon: <Mail className="h-12 w-12" />,
      details: [
        'Go to gmail.com',
        'Start composing a new email',
        'Notice the Copilot indicator',
        'Begin typing your message'
      ]
    },
    {
      number: 3,
      title: 'Get AI Suggestions',
      description: 'As you type, Email Copilot analyzes context and provides intelligent completions in real-time.',
      icon: <Zap className="h-12 w-12" />,
      details: [
        'Type your email naturally',
        'See suggestions appear',
        'Press Tab to accept',
        'Continue writing efficiently'
      ]
    },
    {
      number: 4,
      title: 'Send Professional Emails',
      description: 'Complete your emails faster with AI assistance and send professional communications every time.',
      icon: <CheckCircle className="h-12 w-12" />,
      details: [
        'Review your completed email',
        'Make any final adjustments',
        'Send with confidence',
        'Save time on every email'
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <div className="bg-white dark:bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center mb-20"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            How Email Copilot Works
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Get started in minutes and transform how you write emails. Our AI seamlessly integrates with Gmail to provide intelligent suggestions as you type.
          </motion.p>
        </motion.div>

        {/* Steps */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="space-y-20"
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              variants={itemVariants}
              className={`flex flex-col lg:flex-row items-center gap-12 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="flex-1">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold mr-4">
                    {step.number}
                  </div>
                  <div className="text-primary-600 dark:text-primary-400">
                    {step.icon}
                  </div>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  {step.title}
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  {step.description}
                </p>
                <ul className="space-y-2">
                  {step.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center text-gray-600 dark:text-gray-400">
                      <ArrowRight className="h-4 w-4 text-primary-600 mr-2 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex-1">
                <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-8 h-80 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-primary-600 dark:text-primary-400 mb-4">
                      {step.icon}
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">
                      Interactive demo placeholder for step {step.number}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Features Highlight */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mt-20 bg-gray-50 dark:bg-gray-800 rounded-2xl p-12"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12"
          >
            Why Email Copilot is different
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Context-Aware',
                description: 'Understands email context, recipient, and tone to provide relevant suggestions.',
                icon: '🧠'
              },
              {
                title: 'Privacy-First',
                description: 'Your emails stay private. Local processing with encrypted cloud assistance when needed.',
                icon: '🔒'
              },
              {
                title: 'Lightning Fast',
                description: 'Sub-second response times ensure your workflow is never interrupted.',
                icon: '⚡'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mt-20 text-center"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Ready to get started?
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-300 mb-8"
          >
            Install Email Copilot now and start writing better emails in minutes.
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <CTAButton size="lg" icon>
              Install Extension
            </CTAButton>
            <CTAButton variant="outline" size="lg">
              View Pricing
            </CTAButton>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HowItWorks;