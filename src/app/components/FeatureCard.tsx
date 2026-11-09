import { motion } from 'motion/react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description?: string;
  color: string;
}

export function FeatureCard({ icon, title, description, color }: FeatureCardProps) {
  return (
    <motion.div
      className="bg-white rounded-2xl p-6 card-shadow hover:-translate-y-1 transition-all"
      whileHover={{ boxShadow: '0 12px 40px rgba(0,0,0,0.12)' }}
    >
      <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: color + '20' }}>
        <div style={{ color }}>{icon}</div>
      </div>
      <h3 className="text-[var(--lh-neutral-gray-900)] mb-2">{title}</h3>
      {description && <p className="text-[var(--lh-neutral-gray-600)]">{description}</p>}
    </motion.div>
  );
}