import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  parentName: string;
  childClass: string;
  imageUrl?: string;
}

export function TestimonialCard({ quote, parentName, childClass, imageUrl }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 md:p-8 card-shadow h-full flex flex-col">
      <Quote className="text-[var(--lh-accent-teal)] mb-4" size={40} />
      
      <p className="text-[var(--lh-neutral-gray-900)] mb-6 flex-1 italic">
        "{quote}"
      </p>
      
      <div className="flex items-center gap-4">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={parentName}
            className="w-12 h-12 rounded-full object-cover"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-[var(--lh-background-green-tint)] flex items-center justify-center text-[var(--lh-primary-green)]">
            {parentName.charAt(0)}
          </div>
        )}
        <div>
          <p className="text-[var(--lh-neutral-gray-900)]">{parentName}</p>
          <p className="text-[var(--lh-neutral-gray-600)]">Parent of {childClass}</p>
        </div>
      </div>
    </div>
  );
}
