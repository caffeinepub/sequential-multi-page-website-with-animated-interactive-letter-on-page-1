import { useEffect, useState } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertCircle, Wand2 } from 'lucide-react';
import TulipRainOverlay from '@/components/TulipRainOverlay';
import { storyContent } from '../content/storyContent';

export default function Page3() {
  const navigate = useNavigate();
  const [hasVisitedPage2, setHasVisitedPage2] = useState(false);
  const [isCasting, setIsCasting] = useState(false);
  const [showFinalScreen, setShowFinalScreen] = useState(false);

  useEffect(() => {
    const visited = sessionStorage.getItem('visited-page2') === 'true';
    setHasVisitedPage2(visited);
  }, []);

  const handleCastSpell = () => {
    setIsCasting(true);
    
    // Play spell animation for 2 seconds, then show final screen
    setTimeout(() => {
      setIsCasting(false);
      setShowFinalScreen(true);
    }, 2000);
  };

  if (!hasVisitedPage2) {
    const hasVisitedPage1 = sessionStorage.getItem('visited-page1') === 'true';
    
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-sage-light to-moss-light p-4">
        <div className="max-w-md">
          <Alert variant="default" className="border-2 border-sage bg-parchment/95 shadow-xl">
            <AlertCircle className="h-5 w-5 text-sage-dark" />
            <AlertTitle className="text-lg font-semibold text-sage-dark">
              {storyContent.page3.gating.title}
            </AlertTitle>
            <AlertDescription className="mt-2 text-sage-dark/90">
              {storyContent.page3.gating.description}
            </AlertDescription>
            <div className="mt-4">
              <Button
                onClick={() => navigate({ to: hasVisitedPage1 ? '/page2' : '/' })}
                className="w-full bg-sage hover:bg-sage-dark"
              >
                {hasVisitedPage1 
                  ? storyContent.page3.gating.buttonLabelPage2 
                  : storyContent.page3.gating.buttonLabelPage1}
              </Button>
            </div>
          </Alert>
        </div>
      </div>
    );
  }

  // Final black screen with message and falling tulips
  if (showFinalScreen) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
        <TulipRainOverlay />
        <div className="relative z-10 max-w-3xl px-8 text-center">
          <pre className="whitespace-pre-wrap font-serif text-xl text-white md:text-2xl lg:text-3xl leading-relaxed">
            {storyContent.page3.finalMessage}
          </pre>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-sage-light via-moss-light to-sage-light">
      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-12">
        <div className="max-w-4xl w-full text-center">
          {/* Title */}
          <h1 className="font-serif text-4xl font-bold text-sage-dark md:text-5xl mb-12 animate-fade-in">
            {storyContent.page3.title}
          </h1>

          {/* Magician Container */}
          <div className="relative mb-12">
            {/* Magician Image */}
            <div className="relative inline-block">
              <img
                src="/assets/generated/magician.dim_900x900.png"
                alt="Magician"
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
              />
              
              {/* Spell Sparkles Overlay - shown during casting */}
              {isCasting && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src="/assets/generated/spell-sparkles.dim_1200x800.png"
                    alt="Spell Sparkles"
                    className="w-full h-full object-contain animate-spell-cast"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Cast Spell Button */}
          <div className="flex justify-center">
            <Button
              onClick={handleCastSpell}
              disabled={isCasting}
              size="lg"
              className="bg-sage hover:bg-sage-dark text-parchment font-bold text-xl px-12 py-8 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Wand2 className="mr-3 h-6 w-6" />
              {isCasting ? storyContent.page3.castingButton : storyContent.page3.castButton}
            </Button>
          </div>

          {isCasting && (
            <p className="mt-6 text-lg font-semibold text-sage-dark animate-pulse">
              {storyContent.page3.magicInProgress}
            </p>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 pb-6 text-center text-sm text-sage-dark/70">
        {storyContent.page3.footer.split('caffeine.ai')[0]}
        <a
          href="https://caffeine.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-sage-dark"
        >
          caffeine.ai
        </a>
      </footer>
    </div>
  );
}
