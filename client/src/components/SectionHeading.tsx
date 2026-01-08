import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  alignment?: "left" | "center" | "right";
  className?: string;
  light?: boolean;
}

export function SectionHeading({ 
  title, 
  subtitle, 
  alignment = "left", 
  className = "",
  light = false 
}: SectionHeadingProps) {
  const alignClass = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right ml-auto"
  };

  return (
    <div className={`mb-12 max-w-3xl ${alignClass[alignment]} ${className}`}>
      {subtitle && (
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`block mb-3 text-sm font-bold uppercase tracking-widest ${light ? 'text-secondary' : 'text-secondary'}`}
        >
          {subtitle}
        </motion.span>
      )}
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={`text-3xl md:text-4xl lg:text-5xl font-bold font-display leading-tight ${light ? 'text-white' : 'text-primary'}`}
      >
        {title}
      </motion.h2>
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: 80 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className={`h-1.5 mt-6 rounded-full ${alignment === 'center' ? 'mx-auto' : ''} ${light ? 'bg-secondary' : 'bg-primary'}`} 
      />
    </div>
  );
}
