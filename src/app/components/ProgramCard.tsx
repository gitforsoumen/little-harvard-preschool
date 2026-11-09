import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface ProgramCardProps {
  icon: React.ReactNode;
  title: string;
  ageRange: string;
  outcomes: string[];
  color: string;
  onLearnMore?: () => void;
}

export function ProgramCard({ icon, title, ageRange, outcomes, color, onLearnMore }: ProgramCardProps) {
  return (
    <motion.div
      className="bg-white rounded-2xl p-6 card-shadow hover:-translate-y-1 transition-all duration-200 relative overflow-hidden group"
      whileHover={{ boxShadow: '0 12px 40px rgba(0,0,0,0.12)' }}
    >
      {/* Decorative gradient background on hover */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity"
        style={{ background: `linear-gradient(135deg, ${color} 0%, transparent 100%)` }}
      />
      
      <motion.div
        className="w-16 h-16 rounded-full flex items-center justify-center mb-4 relative z-10"
        style={{ backgroundColor: color + '20' }}
        whileHover={{ rotate: 360, scale: 1.1 }}
        transition={{ duration: 0.6 }}
      >
        <div style={{ color }}>{icon}</div>
      </motion.div>
      
      <h3 className="text-[var(--lh-neutral-gray-900)] mb-2 relative z-10">{title}</h3>
      <p className="text-[var(--lh-neutral-gray-600)] mb-4 relative z-10">Age: {ageRange}</p>
      
      <ul className="space-y-2 mb-6 relative z-10">
        {outcomes.map((outcome, index) => (
          <motion.li
            key={index}
            className="flex items-start gap-2 text-[var(--lh-neutral-gray-600)]"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <span className="mt-1" style={{ color }}>●</span>
            <span>{outcome}</span>
          </motion.li>
        ))}
      </ul>
      
      {onLearnMore && (
        <motion.button
          onClick={onLearnMore}
          className="flex items-center gap-2 hover:gap-3 transition-all relative z-10"
          style={{ color }}
          whileHover={{ x: 5 }}
        >
          <span>Learn more</span>
          <ArrowRight size={18} />
        </motion.button>
      )}
    </motion.div>
  );
}