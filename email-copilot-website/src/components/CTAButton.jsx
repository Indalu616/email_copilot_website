import { ArrowRight } from 'lucide-react';

const CTAButton = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  href, 
  onClick, 
  className = '', 
  icon = false,
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-primary-600 hover:bg-primary-700 text-white focus:ring-primary-500 hover:scale-105',
    secondary: 'bg-white hover:bg-gray-50 text-gray-900 border border-gray-300 focus:ring-primary-500 hover:scale-105',
    outline: 'border border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white focus:ring-primary-500',
    ghost: 'text-primary-600 hover:bg-primary-50 dark:hover:bg-primary-900/20 focus:ring-primary-500',
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };
  
  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;
  
  const content = (
    <>
      {children}
      {icon && <ArrowRight className="ml-2 h-4 w-4" />}
    </>
  );
  
  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {content}
      </a>
    );
  }
  
  return (
    <button onClick={onClick} className={classes} {...props}>
      {content}
    </button>
  );
};

export default CTAButton;