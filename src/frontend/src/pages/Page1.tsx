import { useState } from 'react';
import { useNavigate } from '@tanstack/react-router';
import InteractiveLetter from '../components/InteractiveLetter';
import { storyContent } from '../content/storyContent';

export default function Page1() {
  const navigate = useNavigate();
  const [isLetterOpen, setIsLetterOpen] = useState(false);

  const handleLetterOpen = () => {
    setIsLetterOpen(true);
  };

  const handleNext = () => {
    // Set flag in sessionStorage to indicate user came from Page 1
    sessionStorage.setItem('visited-page1', 'true');
    navigate({ to: '/page2' });
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/assets/generated/garden-scene.dim_1920x1080.png)'
        }}
      />
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-8">
        {/* Instruction Prompt */}
        {!isLetterOpen && (
          <div className="mb-8 animate-pulse">
            <p className="text-center text-xl font-medium text-parchment drop-shadow-lg md:text-2xl">
              {storyContent.page1.prompt}
            </p>
          </div>
        )}

        {/* Interactive Letter */}
        <InteractiveLetter
          isOpen={isLetterOpen}
          onOpen={handleLetterOpen}
          onNext={handleNext}
        />
      </div>
    </div>
  );
}
