import { useEffect, useState } from 'react';

interface Tulip {
  id: number;
  left: number;
  delay: number;
  duration: number;
}

export default function TulipRainOverlay() {
  const [tulips, setTulips] = useState<Tulip[]>([]);

  useEffect(() => {
    // Generate initial tulips
    const initialTulips: Tulip[] = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 5 + Math.random() * 5,
    }));
    setTulips(initialTulips);

    // Continuously add new tulips
    const interval = setInterval(() => {
      setTulips((prev) => {
        const newTulip: Tulip = {
          id: Date.now(),
          left: Math.random() * 100,
          delay: 0,
          duration: 5 + Math.random() * 5,
        };
        // Keep only the last 30 tulips to avoid memory issues
        return [...prev.slice(-29), newTulip];
      });
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {tulips.map((tulip) => (
        <div
          key={tulip.id}
          className="tulip-fall absolute text-4xl"
          style={{
            left: `${tulip.left}%`,
            animationDelay: `${tulip.delay}s`,
            animationDuration: `${tulip.duration}s`,
          }}
        >
          🌷
        </div>
      ))}
    </div>
  );
}
