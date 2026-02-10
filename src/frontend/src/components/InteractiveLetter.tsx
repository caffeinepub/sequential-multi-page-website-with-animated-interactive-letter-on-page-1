import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { storyContent } from '../content/storyContent';

interface InteractiveLetterProps {
  isOpen: boolean;
  onOpen: () => void;
  onNext: () => void;
}

export default function InteractiveLetter({ isOpen, onOpen, onNext }: InteractiveLetterProps) {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleLetterClick = () => {
    if (!isOpen && !isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        onOpen();
        setIsAnimating(false);
      }, 600);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if ((e.key === 'Enter' || e.key === ' ') && !isOpen && !isAnimating) {
      e.preventDefault();
      handleLetterClick();
    }
  };

  if (!isOpen) {
    return (
      <div
        role="button"
        tabIndex={0}
        onClick={handleLetterClick}
        onKeyDown={handleKeyDown}
        className={`
          cursor-pointer transition-all duration-500 focus:outline-none focus:ring-4 focus:ring-sage/50
          ${isAnimating ? 'scale-110 opacity-0' : 'scale-100 opacity-100 hover:scale-105'}
        `}
        aria-label={storyContent.letter.closedAriaLabel}
      >
        <img
          src="/assets/generated/letter-closed.dim_600x600.png"
          alt={storyContent.letter.closedAlt}
          className="h-48 w-48 drop-shadow-2xl md:h-64 md:w-64"
        />
      </div>
    );
  }

  return (
    <div className="animate-in fade-in zoom-in duration-700 w-full max-w-3xl">
      <div className="relative rounded-2xl bg-parchment/95 p-8 shadow-2xl backdrop-blur-sm md:p-12">
        {/* Letter Background Image */}
        <div
          className="absolute inset-0 rounded-2xl bg-cover bg-center opacity-10"
          style={{
            backgroundImage: 'url(/assets/generated/letter-open.dim_1200x800.png)'
          }}
        />

        {/* Letter Content */}
        <div className="relative z-10">
          <div className="mb-8 space-y-4 font-serif text-lg leading-relaxed text-ink md:text-xl">
            {storyContent.letter.paragraphs.map((paragraph, index) => (
              <p key={index} className="whitespace-pre-line">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Next Button */}
          <div className="flex justify-center pt-4">
            <Button
              onClick={onNext}
              size="lg"
              className="group bg-sage text-parchment shadow-lg transition-all hover:bg-sage-dark hover:shadow-xl"
            >
              {storyContent.letter.nextButton}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
