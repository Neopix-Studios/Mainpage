import { useEffect } from 'react';
import { motion } from 'motion/react';

export function Loader({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    // Cinematic load time
    const timer = setTimeout(() => {
      onComplete();
    }, 4000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      className="fixed inset-0 z-[100] bg-[#000000] flex items-center justify-center pointer-events-none"
    >
      <style>
        {`
          .loader-logo-container {
              position: relative;
              width: 100px;  /* Dropped from 180px for a heavy zoom out */
              height: 100px;
              display: flex;
              justify-content: center;
              align-items: center;
          }

          .neopix-logo {
              width: 100%;
              height: 100%;
              overflow: visible; 
          }

          /* The faint dark-grey base outline */
          .base-logo {
              fill: none;
              stroke: #1a1a1a;
              stroke-width: 4;
              stroke-linejoin: round;
          }

          /* * TRACE 1: THE WHITE N-BODY LASER
           * Traces ONLY the two main blocks of the 'N'.
           */
          .white-trace {
              fill: none;
              stroke: #ffffff;
              stroke-width: 4;
              stroke-linecap: round;
              stroke-linejoin: round;
              
              /* Pure white bloom */
              filter: drop-shadow(0 0 6px #ffffff) drop-shadow(0 0 12px rgba(255, 255, 255, 0.8));
              
              /* 100px beam, massive 3000px gap to ensure it's the only one */
              stroke-dasharray: 100 3000;
              animation: flowWhite 4s linear infinite;
          }

          /* * TRACE 2: THE ORANGE TRIANGLE LASER
           * Traces ONLY the top right corner.
           */
          .orange-trace {
              fill: none;
              stroke: #ff6a00;
              stroke-width: 4;
              stroke-linecap: round;
              stroke-linejoin: round;
              
              /* Hot orange bloom */
              filter: drop-shadow(0 0 6px #ff6a00) drop-shadow(0 0 12px #ff4500);
              
              /* 40px beam, 800px gap */
              stroke-dasharray: 40 800;
              animation: flowOrange 2s linear infinite;
          }

          /* White line offset animation */
          @keyframes flowWhite {
              0% { stroke-dashoffset: 3100; }
              100% { stroke-dashoffset: 0; }
          }

          /* Orange line offset animation */
          @keyframes flowOrange {
              0% { stroke-dashoffset: 840; }
              100% { stroke-dashoffset: 0; }
          }
        `}
      </style>

      <div className="loader-logo-container">
          <svg className="neopix-logo" viewBox="0 0 200 200">
            <path className="base-logo" d="
              M 130 80 L 130 140 L 70 80 L 70 130 L 20 180 L 20 20 L 70 20 Z 
              M 130 70 L 140 60 L 180 100 L 180 180 L 130 180 L 70 120 L 70 60 L 130 120 Z 
              M 180 80 L 120 20 L 180 20 Z" 
            />
            <path className="white-trace" d="
              M 70 20 
              L 20 20 L 20 180 L 70 130 L 70 80 L 130 140 L 130 80 L 70 20 
              L 70 60 
              L 130 120 L 130 70 L 140 60 L 180 100 L 180 180 L 130 180 L 70 120 L 70 60" 
            />
            <path className="orange-trace" d="
              M 120 20 
              L 180 20 L 180 80 L 120 20" 
            />
          </svg>
      </div>
    </motion.div>
  );
}
