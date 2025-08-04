# Email Copilot Website

A fully responsive, production-grade marketing website for Email Copilot - an AI-powered Chrome extension that provides intelligent email completion suggestions, similar to GitHub Copilot for code.

## 🚀 Features

### Pages
- **Home**: Hero section with animated email demo, features, testimonials, and CTAs
- **How It Works**: Step-by-step walkthrough with visual demonstrations
- **Pricing**: Tiered plans with billing toggle, feature comparison, and FAQ
- **Documentation**: Installation guides, quickstart, API reference, and FAQ
- **About**: Company mission, team, values, and impact metrics
- **Contact**: Contact form and multiple support channels
- **Blog**: Announcement-style blog with categorized posts
- **Privacy & Terms**: Legal pages with proper formatting

### Components
- **Navbar**: Responsive navigation with dark mode toggle
- **Footer**: Comprehensive footer with links and newsletter signup
- **PricingCard**: Reusable pricing cards with hover effects
- **FAQAccordion**: Expandable FAQ component
- **CTAButton**: Versatile call-to-action button with multiple variants

### Features
- ✅ Fully responsive design (mobile-first)
- ✅ Dark mode support with system preference detection
- ✅ Smooth scroll animations with Framer Motion
- ✅ Professional GitHub Copilot-inspired design
- ✅ SEO-optimized structure
- ✅ Modular and scalable codebase
- ✅ TypeScript-ready (using JSX with prop types)

## 🛠️ Tech Stack

- **Framework**: React 19 + Vite
- **Styling**: Tailwind CSS 4
- **Animation**: Framer Motion
- **Routing**: React Router v7
- **Icons**: Lucide React
- **Build Tool**: Vite with HMR

## 📁 Project Structure

```
email-copilot-website/
├── public/
│   ├── images/          # Static images
│   ├── videos/          # Demo videos
│   └── favicon.ico
├── src/
│   ├── assets/          # Static assets
│   ├── components/      # Reusable UI components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── PricingCard.jsx
│   │   ├── FAQAccordion.jsx
│   │   └── CTAButton.jsx
│   ├── pages/           # Page-level components
│   │   ├── Home.jsx
│   │   ├── HowItWorks.jsx
│   │   ├── Pricing.jsx
│   │   ├── Docs.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Blog.jsx
│   │   ├── Privacy.jsx
│   │   └── Terms.jsx
│   ├── data/           # Static data
│   │   ├── navigation.js
│   │   ├── pricing.js
│   │   └── faq.js
│   ├── router/         # Routing configuration
│   │   └── AppRoutes.jsx
│   ├── styles/         # Global styles
│   │   └── index.css
│   ├── App.jsx
│   └── main.jsx
├── tailwind.config.js
├── vite.config.js
└── package.json
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd email-copilot-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
# Build the project
npm run build

# Preview the build
npm run preview
```

## 🎨 Design System

### Colors
- **Primary**: Blue scale (50-900)
- **Secondary**: Gray scale (50-900)
- **Accent**: Purple for gradients and highlights

### Typography
- **Font**: Inter (Google Fonts)
- **Sizes**: Responsive scale from text-sm to text-6xl

### Components
- **Buttons**: Primary, secondary, outline, and ghost variants
- **Cards**: Elevated with hover effects
- **Forms**: Consistent styling with focus states

## 🔧 Customization

### Adding New Pages
1. Create a new component in `src/pages/`
2. Add route to `src/router/AppRoutes.jsx`
3. Update navigation in `src/data/navigation.js`

### Modifying Pricing
Edit `src/data/pricing.js` to update plans, features, and pricing.

### Adding Blog Posts
Add new posts to the `blogPosts` array in `src/pages/Blog.jsx`.

### Customizing Theme
Modify `tailwind.config.js` to adjust colors, fonts, and spacing.

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## ⚡ Performance

- **Vite**: Fast build tool with HMR
- **Code Splitting**: Automatic route-based splitting
- **Image Optimization**: Optimized asset loading
- **Animation**: Smooth 60fps animations with Framer Motion

## 🌙 Dark Mode

Dark mode is implemented with:
- System preference detection
- Manual toggle in navigation
- Persistent localStorage setting
- Tailwind's built-in dark mode support

## 📊 SEO Features

- Semantic HTML structure
- Meta tags ready for React Helmet
- Proper heading hierarchy
- Alt text for images
- Structured navigation

## 🚀 Deployment

The website is ready for deployment to:
- **Vercel**: `vercel --prod`
- **Netlify**: `netlify deploy --prod`
- **Static Hosting**: Use `npm run build` output

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For questions or support:
- Email: support@emailcopilot.com
- Discord: [Join our community](https://discord.gg/emailcopilot)
- Documentation: [docs.emailcopilot.com](https://docs.emailcopilot.com)

---

Built with ❤️ by the Email Copilot Team
