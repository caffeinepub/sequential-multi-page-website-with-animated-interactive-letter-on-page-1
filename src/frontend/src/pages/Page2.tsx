import { useEffect, useState } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertCircle, Sparkles } from 'lucide-react';
import { storyContent } from '../content/storyContent';

export default function Page2() {
  const navigate = useNavigate();
  const [hasVisitedPage1, setHasVisitedPage1] = useState(false);

  useEffect(() => {
    const visited = sessionStorage.getItem('visited-page1') === 'true';
    setHasVisitedPage1(visited);
  }, []);

  const handleNext = () => {
    // Set flag in sessionStorage to indicate user came from Page 2
    sessionStorage.setItem('visited-page2', 'true');
    navigate({ to: '/page3' });
  };

  if (!hasVisitedPage1) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-sage-light to-moss-light p-4">
        <div className="max-w-md">
          <Alert variant="default" className="border-2 border-sage bg-parchment/95 shadow-xl">
            <AlertCircle className="h-5 w-5 text-sage-dark" />
            <AlertTitle className="text-lg font-semibold text-sage-dark">
              {storyContent.page2.gating.title}
            </AlertTitle>
            <AlertDescription className="mt-2 text-sage-dark/90">
              {storyContent.page2.gating.description}
            </AlertDescription>
            <div className="mt-4">
              <Button
                onClick={() => navigate({ to: '/' })}
                className="w-full bg-sage hover:bg-sage-dark"
              >
                {storyContent.page2.gating.buttonLabel}
              </Button>
            </div>
          </Alert>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/assets/generated/birthday-bg.dim_1920x1080.png)'
        }}
      />
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-12">
        <div className="max-w-3xl w-full rounded-3xl bg-parchment/95 p-8 shadow-2xl backdrop-blur-sm md:p-12 border-4 border-sage/30">
          {/* Birthday Message */}
          <div className="space-y-6 text-center">
            <h1 className="font-serif text-3xl font-bold text-sage-dark md:text-4xl mb-8">
              {storyContent.page2.heading}
            </h1>
            
            <div className="space-y-4 text-left font-serif text-lg text-ink leading-relaxed md:text-xl">
              {storyContent.page2.paragraphs.slice(0, -1).map((paragraph, index) => (
                <p key={index} className="whitespace-pre-line">
                  {paragraph}
                </p>
              ))}
              
              <p className="text-center font-bold text-sage-dark text-2xl">
                {storyContent.page2.paragraphs[storyContent.page2.paragraphs.length - 1]}
              </p>
            </div>
          </div>

          {/* Next Button */}
          <div className="mt-10 flex justify-center">
            <Button
              onClick={handleNext}
              size="lg"
              className="bg-sage hover:bg-sage-dark text-parchment font-semibold text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Sparkles className="mr-2 h-5 w-5" />
              {storyContent.page2.nextButton}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="relative z-10 pb-6 text-center text-sm text-parchment/80">
        {storyContent.page2.footer.split('caffeine.ai')[0]}
        <a
          href="https://caffeine.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-parchment"
        >
          caffeine.ai
        </a>
      </footer>
    </div>
  );
}
