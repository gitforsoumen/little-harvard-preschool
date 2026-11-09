import { motion } from 'motion/react';

export function FloatingCircles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 rounded-full bg-[var(--lh-accent-yellow)] opacity-10"
        animate={{
          y: [0, 30, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-40 right-20 w-24 h-24 rounded-full bg-[var(--lh-accent-pink)] opacity-10"
        animate={{
          y: [0, -20, 0],
          x: [0, -15, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-40 left-1/4 w-40 h-40 rounded-full bg-[var(--lh-accent-teal)] opacity-10"
        animate={{
          y: [0, 25, 0],
          x: [0, -20, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
}

export function ColorfulDots() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            backgroundColor: [
              'var(--lh-accent-yellow)',
              'var(--lh-accent-pink)',
              'var(--lh-accent-teal)',
              'var(--lh-accent-orange)',
              'var(--lh-primary-green)'
            ][i % 5],
            opacity: 0.2,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
}

export function WavyBackground({ color = 'var(--lh-background-green-tint)' }: { color?: string }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg className="absolute bottom-0 w-full" viewBox="0 0 1440 200" fill="none">
        <motion.path
          d="M0,100 C480,150 960,50 1440,100 L1440,200 L0,200 Z"
          fill={color}
          initial={{ d: "M0,100 C480,150 960,50 1440,100 L1440,200 L0,200 Z" }}
          animate={{
            d: [
              "M0,100 C480,150 960,50 1440,100 L1440,200 L0,200 Z",
              "M0,100 C480,50 960,150 1440,100 L1440,200 L0,200 Z",
              "M0,100 C480,150 960,50 1440,100 L1440,200 L0,200 Z",
            ],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </svg>
    </div>
  );
}

export function StarBurst({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute ${className}`}>
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
        {[...Array(8)].map((_, i) => {
          const angle = (i * 45 * Math.PI) / 180;
          const x1 = 30;
          const y1 = 30;
          const x2 = 30 + Math.cos(angle) * 25;
          const y2 = 30 + Math.sin(angle) * 25;
          return (
            <motion.line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="currentColor"
              strokeWidth="2"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            />
          );
        })}
        <motion.circle
          cx="30"
          cy="30"
          r="8"
          fill="currentColor"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        />
      </svg>
    </div>
  );
}

export function PlayfulSquiggle({ className = '', color = 'currentColor' }: { className?: string; color?: string }) {
  return (
    <svg className={className} width="120" height="80" viewBox="0 0 120 80" fill="none">
      <motion.path
        d="M10,40 Q30,10 50,40 T90,40 Q110,70 110,40"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
    </svg>
  );
}
