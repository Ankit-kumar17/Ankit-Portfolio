import { useEffect, useState } from "react";

const Loader = ({ onLoadingComplete }: { onLoadingComplete: () => void }) => {
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setIsFadingOut(true);
    }, 1500);

    const removeTimer = setTimeout(() => {
      onLoadingComplete();
    }, 2000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, [onLoadingComplete]);

  return (
    <div
      className={`fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center transition-opacity duration-500 ease-in-out ${
        isFadingOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="relative flex flex-col items-center">
        {/* Animated Ak Logo */}
        <div className="relative w-32 h-32 mb-4 flex items-center justify-center">
          {/* Glowing background ring */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-accent/20 animate-pulse-glow blur-2xl" />
          
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full relative z-10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="ak-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(var(--primary))" />
                <stop offset="100%" stopColor="hsl(var(--accent))" />
              </linearGradient>
            </defs>
            <text
              x="50%"
              y="55%"
              textAnchor="middle"
              dominantBaseline="middle"
              className="font-bold text-5xl"
              stroke="url(#ak-grad)"
              fill="transparent"
              strokeWidth="2"
              strokeDasharray="200"
              strokeDashoffset="200"
              style={{
                animation: "draw-text 1.5s ease-in-out forwards, fill-text 0.5s ease-in-out 1s forwards",
              }}
            >
              Ak
            </text>
          </svg>
        </div>

        {/* Loading dots */}
        <div className="flex gap-1.5 items-center mt-2">
          <span className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: "0ms" }}></span>
          <span className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: "150ms" }}></span>
          <span className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: "300ms" }}></span>
        </div>
      </div>
    </div>
  );
};

export default Loader;
