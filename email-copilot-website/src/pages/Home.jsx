import { motion } from 'framer-motion';
import { 
  Zap, 
  Shield, 
  Users, 
  Mail, 
  Brain, 
  Sparkles,
  Play,
  CheckCircle,
  ArrowRight,
  Code,
  Clock
} from 'lucide-react';
import CTAButton from '../components/CTAButton';

const Home = () => {
  const features = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: 'AI-Powered Suggestions',
      description: 'Advanced AI models trained on millions of professional emails provide contextual suggestions as you type.',
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Lightning Fast',
      description: 'Get instant suggestions with sub-second response times. No interruption to your workflow.',
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Privacy First',
      description: 'Your data stays secure. Local processing when possible, encrypted cloud processing when needed.',
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Team Collaboration',
      description: 'Share templates and maintain consistent communication across your entire organization.',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Marketing Director at TechCorp',
      content: 'Email Copilot has transformed how our team communicates. We save hours every week and our emails are more professional than ever.',
      avatar: '👩‍💼',
    },
    {
      name: 'Michael Rodriguez',
      role: 'Sales Manager at GrowthCo',
      content: 'The AI suggestions are incredibly accurate. It feels like having a professional writer helping me with every email.',
      avatar: '👨‍💼',
    },
    {
      name: 'Emily Johnson',
      role: 'CEO at StartupX',
      content: 'We rolled this out company-wide and saw immediate improvements in client communication. Highly recommended!',
      avatar: '👩‍💻',
    },
  ];

  const steps = [
    {
      number: '01',
      title: 'Install Extension',
      description: 'Add Email Copilot to Chrome in seconds',
    },
    {
      number: '02',
      title: 'Start Typing',
      description: 'Begin composing your email in Gmail',
    },
    {
      number: '03',
      title: 'Get Suggestions',
      description: 'See AI-powered completions as you type',
    },
    {
      number: '04',
      title: 'Send Perfect Emails',
      description: 'Professional emails in half the time',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
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
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="hero-gradient py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="text-center"
          >
            <motion.div variants={itemVariants} className="mb-8">
              <div className="inline-flex items-center bg-primary-100 dark:bg-primary-900/30 rounded-full px-4 py-2 text-sm font-medium text-primary-700 dark:text-primary-300 mb-6">
                <Sparkles className="h-4 w-4 mr-2" />
                Now available for Gmail
              </div>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6"
            >
              Write emails like a{' '}
              <span className="gradient-text">professional</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10"
            >
              Email Copilot is an AI-powered Chrome extension that suggests professional email completions as you type, just like GitHub Copilot does for code.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            >
              <CTAButton size="lg" icon>
                Install Extension
              </CTAButton>
              <CTAButton variant="secondary" size="lg">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </CTAButton>
            </motion.div>

            {/* Animated Email Demo */}
            <motion.div
              variants={itemVariants}
              className="relative max-w-4xl mx-auto"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                <div className="bg-gray-50 dark:bg-gray-700 px-6 py-4 border-b border-gray-200 dark:border-gray-600">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="ml-4 text-sm text-gray-600 dark:text-gray-400">
                      Gmail - Compose
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2 text-sm">
                      <span className="text-gray-500">To:</span>
                      <span className="text-gray-900 dark:text-white">client@company.com</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <span className="text-gray-500">Subject:</span>
                      <span className="text-gray-900 dark:text-white">Project Update</span>
                    </div>
                    <div className="border-t border-gray-200 dark:border-gray-600 pt-4">
                      <div className="text-left">
                        <p className="text-gray-900 dark:text-white mb-2">
                          Hi there,
                        </p>
                        <p className="text-gray-900 dark:text-white mb-2">
                          I wanted to follow up on
                          <span className="bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-1 rounded animate-pulse">
                            our recent discussion about the project timeline
                          </span>
                        </p>
                        <div className="bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-700 rounded-lg p-3 mt-4">
                          <div className="flex items-center text-sm text-primary-700 dark:text-primary-300">
                            <Code className="h-4 w-4 mr-2" />
                            <span>Email Copilot suggestion</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4"
            >
              Why developers love Email Copilot
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            >
              Just like GitHub Copilot revolutionized coding, Email Copilot transforms how you write professional emails.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-primary-600 dark:text-primary-400 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4"
            >
              Get started in minutes
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 dark:text-gray-300"
            >
              Install, type, and watch the magic happen
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4"
            >
              Trusted by professionals
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 dark:text-gray-300"
            >
              See what users are saying about Email Copilot
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700"
              >
                <p className="text-gray-600 dark:text-gray-400 mb-4 italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <div className="text-2xl mr-3">{testimonial.avatar}</div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4"
            >
              Ready to write better emails?
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
            >
              Join thousands of professionals who are already writing more effective emails with AI assistance.
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <CTAButton size="lg" icon>
                Get Started Free
              </CTAButton>
              <CTAButton variant="outline" size="lg">
                View Pricing
              </CTAButton>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;