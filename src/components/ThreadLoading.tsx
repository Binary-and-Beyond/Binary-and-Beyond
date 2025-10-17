import { useState, useEffect } from "react";
import "./ThreadLoading.css";

interface ThreadLoadingProps {
  onComplete: () => void;
}

const ThreadLoading = ({ onComplete }: ThreadLoadingProps) => {
  const [progress, setProgress] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const [showBouncingBall, setShowBouncingBall] = useState(false);

  useEffect(() => {
    // Simulate loading progress with faster, smoother increments
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          // Show bouncing ball for a moment before reveal
          setTimeout(() => {
            setShowBouncingBall(true);
            setTimeout(() => {
              setShowContent(true);
              // Complete loading after reveal animation
              setTimeout(() => {
                onComplete();
              }, 600);
            }, 1200); // Reduced from 1800ms to 1200ms
          }, 200); // Reduced from 400ms to 200ms
          return 100;
        }
        // Faster, smoother progress with better easing
        const increment =
          prev < 30 ? 2.5 : prev < 60 ? 2.0 : prev < 85 ? 1.5 : 1.0;
        return prev + increment;
      });
    }, 20); // Reduced from 35ms to 20ms for smoother animation

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-black overflow-hidden">
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `repeating-linear-gradient(
            90deg,
            transparent,
            transparent 1px,
            rgba(255,255,255,0.1) 1px,
            rgba(255,255,255,0.1) 2px
          )`,
          backgroundSize: "20px 20px",
        }}
      />

      {/* Main content container */}
      <div className="relative w-full h-full">
        {/* Thread line - only show when not bouncing */}
        {!showBouncingBall && (
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-full bg-gradient-to-b from-white/80 via-white/40 to-transparent">
            {/* Thread anchor */}
            <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-6 h-6">
              <div className="w-full h-full border-2 border-white/60 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-white/80 rounded-full"></div>
              </div>
              {/* Crosshair lines */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-px bg-white/40"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-px h-8 bg-white/40"></div>
            </div>

            {/* Pendulum bob */}
            <div
              className="absolute w-4 h-4 bg-white/90 rounded-full thread-bob"
              style={{
                top: `${20 + progress * 0.65}%`,
                left: "50%",
                transform: "translate(-50%, -50%)",
                transition: "top 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              }}
            />
          </div>
        )}

        {/* Bouncing ball - show when progress is complete */}
        {showBouncingBall && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="w-8 h-8 bg-gradient-to-br from-white via-gray-200 to-gray-400 rounded-full shadow-2xl bouncing-ball">
              <div className="w-full h-full bg-gradient-to-br from-white/80 to-transparent rounded-full"></div>
            </div>
          </div>
        )}

        {/* Progress indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="w-24 h-px bg-white/20 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-white/60 to-white/90 rounded-full transition-all duration-300 ease-out progress-bar"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Loading text - positioned over progress bar */}
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 z-20">
          <div className="text-center loading-text">
            <h2 className="text-white text-2xl md:text-3xl font-light mb-4 tracking-wider">
              One thread, infinite possibilities
            </h2>
            <div className="w-32 h-px bg-white/40 mx-auto"></div>
          </div>
        </div>

        {/* Reveal curtain effect */}
        {showContent && (
          <div
            className="absolute inset-0 bg-black reveal-curtain z-30"
            style={{
              clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            }}
          />
        )}
      </div>

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-white/20 rounded-full floating-particle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
            animationDuration: `${2 + Math.random() * 2}s`,
          }}
        />
      ))}
    </div>
  );
};

export default ThreadLoading;
