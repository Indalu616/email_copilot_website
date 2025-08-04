import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Introducing Email Copilot: AI-Powered Email Writing for Everyone',
      excerpt: 'Today we\'re excited to announce the public launch of Email Copilot, bringing GitHub Copilot-style AI assistance to email composition.',
      author: 'Alex Chen',
      date: '2024-01-15',
      category: 'Product',
      readTime: '3 min read',
      featured: true
    },
    {
      id: 2,
      title: 'How AI is Transforming Professional Communication',
      excerpt: 'Explore how artificial intelligence is revolutionizing the way we write emails, from tone analysis to content suggestions.',
      author: 'Sarah Kim',
      date: '2024-01-10',
      category: 'Technology',
      readTime: '5 min read',
      featured: false
    },
    {
      id: 3,
      title: 'Privacy-First AI: How We Keep Your Emails Secure',
      excerpt: 'Learn about our commitment to privacy and the measures we take to ensure your email data remains secure and private.',
      author: 'David Rodriguez',
      date: '2024-01-05',
      category: 'Security',
      readTime: '4 min read',
      featured: false
    },
    {
      id: 4,
      title: 'Pro Tips: Getting the Most Out of Email Copilot',
      excerpt: 'Discover advanced features and best practices to supercharge your email writing with AI assistance.',
      author: 'Emily Zhang',
      date: '2023-12-28',
      category: 'Tutorial',
      readTime: '6 min read',
      featured: false
    },
    {
      id: 5,
      title: 'The Science Behind Our AI Email Suggestions',
      excerpt: 'Deep dive into the natural language processing techniques that power Email Copilot\'s intelligent suggestions.',
      author: 'Sarah Kim',
      date: '2023-12-20',
      category: 'Technology',
      readTime: '8 min read',
      featured: false
    },
    {
      id: 6,
      title: 'Customer Success Story: How TechCorp Improved Team Communication',
      excerpt: 'Learn how one company used Email Copilot to standardize their communication and save hours every week.',
      author: 'Alex Chen',
      date: '2023-12-15',
      category: 'Case Study',
      readTime: '4 min read',
      featured: false
    }
  ];

  const categories = ['All', 'Product', 'Technology', 'Security', 'Tutorial', 'Case Study'];
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  const getCategoryColor = (category) => {
    const colors = {
      'Product': 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400',
      'Technology': 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
      'Security': 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400',
      'Tutorial': 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400',
      'Case Study': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400',
    };
    return colors[category] || 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400';
  };

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
            Email Copilot Blog
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Latest updates, insights, and tips from the Email Copilot team about AI-powered communication.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                index === 0
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Featured Post */}
        {featuredPost && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-16"
          >
            <div className="bg-gradient-to-r from-primary-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 md:p-12">
              <div className="flex items-center mb-4">
                <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Featured
                </span>
                <span className={`ml-3 px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(featuredPost.category)}`}>
                  {featuredPost.category}
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {featuredPost.title}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                {featuredPost.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <User className="h-4 w-4 mr-1" />
                  <span className="mr-4">{featuredPost.author}</span>
                  <Calendar className="h-4 w-4 mr-1" />
                  <span className="mr-4">{featuredPost.date}</span>
                  <span>{featuredPost.readTime}</span>
                </div>
                <button className="btn-primary">
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {/* Blog Posts Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {regularPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(post.category)}`}>
                    {post.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{post.date}</span>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {post.readTime}
                  </span>
                  <button className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium text-sm">
                    Read More →
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gray-50 dark:bg-gray-800 rounded-2xl p-12 text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Get the latest Email Copilot updates, tips, and insights delivered directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
            />
            <button className="btn-primary whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Blog;