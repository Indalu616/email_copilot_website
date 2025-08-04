import { motion } from 'framer-motion';
import { Target, Users, Lightbulb, Globe } from 'lucide-react';

const About = () => {
  const team = [
    {
      name: 'Alex Chen',
      role: 'CEO & Co-founder',
      bio: 'Former AI researcher at Google, passionate about making AI accessible to everyone.',
      avatar: '👨‍💼',
    },
    {
      name: 'Sarah Kim',
      role: 'CTO & Co-founder',
      bio: 'Ex-Microsoft engineer with 10+ years in natural language processing.',
      avatar: '👩‍💻',
    },
    {
      name: 'David Rodriguez',
      role: 'Head of Product',
      bio: 'Product leader from Slack, focused on building intuitive user experiences.',
      avatar: '👨‍🎨',
    },
    {
      name: 'Emily Zhang',
      role: 'Lead Engineer',
      bio: 'Full-stack developer and Chrome extension expert from Mozilla.',
      avatar: '👩‍🔧',
    },
  ];

  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: 'User-Centric',
      description: 'Every feature we build is designed with our users\' needs and workflows in mind.',
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Privacy First',
      description: 'We believe your communications should remain private and secure.',
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: 'Innovation',
      description: 'We constantly push the boundaries of what\'s possible with AI assistance.',
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: 'Accessibility',
      description: 'Making powerful AI tools accessible to professionals everywhere.',
    },
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
            About Email Copilot
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We're on a mission to transform professional communication through intelligent AI assistance.
          </p>
        </motion.div>

        {/* Mission Section */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                Just as GitHub Copilot revolutionized how developers write code, we're transforming how professionals write emails. Our AI understands context, tone, and intent to help you communicate more effectively.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                We believe that great communication shouldn't be limited by time constraints or writing skills. Email Copilot empowers everyone to write clear, professional, and impactful emails.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8">
              <div className="text-center">
                <div className="text-6xl mb-4">🚀</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Launched in 2024
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Already helping thousands of professionals communicate better
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-primary-600 dark:text-primary-400 mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 text-center"
              >
                <div className="text-4xl mb-4">{member.avatar}</div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-primary-600 dark:text-primary-400 text-sm mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="mb-20">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
              Our Impact
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {[
                { number: '50K+', label: 'Active Users' },
                { number: '1M+', label: 'Emails Enhanced' },
                { number: '40%', label: 'Time Saved on Average' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Us CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Join Our Journey
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals who share our vision of making communication more effective through AI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">
              View Open Positions
            </button>
            <button className="btn-secondary">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;