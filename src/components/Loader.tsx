import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const colors = ['#ff2a4b', '#ff2e63', '#ff758c', '#e6193c', '#d90429', '#ff6a00', '#ff4500'];

class Petal {
  x: number;
  y: number;
  isForeground: boolean;
  size: number;
  speedX: number;
  speedY: number;
  rotation: number;
  spin: number;
  color: string;

  constructor(spawnX: number, spawnY: number) {
    this.x = spawnX;
    this.y = spawnY;
    
    this.isForeground = Math.random() > 0.85;
    this.size = this.isForeground ? (Math.random() * 35 + 25) : (Math.random() * 12 + 6);
    
    this.speedX = (Math.random() * 20 + 25);
    this.speedY = (Math.random() * 15 + 15);
    
    if (this.isForeground) {
      this.speedX *= 1.4; 
      this.speedY *= 1.4;
    }
    
    this.rotation = Math.random() * Math.PI * 2;
    this.spin = (Math.random() - 0.5) * 0.4;
    this.color = colors[Math.floor(Math.random() * colors.length)];
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    this.rotation += this.spin;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.rotation);
    
    ctx.beginPath();
    ctx.moveTo(0, -this.size);
    ctx.bezierCurveTo(this.size, -this.size / 2, this.size / 2, this.size, 0, this.size);
    ctx.bezierCurveTo(-this.size / 2, this.size, -this.size, -this.size / 2, 0, -this.size);
    
    ctx.fillStyle = this.color;
    
    if (this.isForeground) {
      ctx.shadowBlur = 20;
      ctx.shadowColor = this.color;
      ctx.globalAlpha = 0.9; 
    }
    
    ctx.fill();
    ctx.restore();
  }
}

export const Loader = ({ onComplete }: { onComplete: () => void }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const [isFullyDone, setIsFullyDone] = useState(false);
  const didCompleteRef = useRef(false);

  useEffect(() => {
    let triggered = false;
    const handleLoad = () => {
      if (triggered) return;
      triggered = true;
      setTimeout(() => {
        startStinger();
      }, 2000); 
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  const startStinger = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    gsap.to(logoRef.current, {
      opacity: 0,
      scale: 1.5,
      duration: 0.8,
      ease: "power2.in"
    });

    let particles: Petal[] = [];

    for (let i = 0; i < 1000; i++) {
      let spawnX = -Math.random() * 3500;
      let spawnY = -Math.random() * 3500;
      particles.push(new Petal(spawnX, spawnY));
    }

    // Fade out the opaque background progressively 
    // to reveal the site smoothly along with the petals 
    gsap.to(containerRef.current, {
      backgroundColor: "rgba(5, 5, 5, 0)",
      duration: 1.8,
      delay: 0.3,
      ease: "power2.inOut",
      onStart: () => {
        if (!didCompleteRef.current) {
          didCompleteRef.current = true;
          onComplete(); // Starts website visibility transition
        }
      },
      onComplete: () => {
        if (logoRef.current) {
          logoRef.current.style.display = 'none';
        }
      }
    });

    let animationFrameId: number;
    let keepAnimating = true;

    const animateLoop = () => {
      if (!keepAnimating) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      let stillAlive = false;
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw(ctx);
        if (particles[i].x < canvas.width + 300 && particles[i].y < canvas.height + 300) {
          stillAlive = true;
        }
      }

      if (stillAlive) {
        animationFrameId = requestAnimationFrame(animateLoop);
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        setIsFullyDone(true);
      }
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    handleResize(); 
    window.addEventListener('resize', handleResize);

    animateLoop();

    return () => {
      keepAnimating = false;
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  };

  if (isFullyDone) return null;

  return (
    <div ref={containerRef} style={{ backgroundColor: '#050505' }} className="fixed inset-0 z-[100] top-0 left-0 w-full h-full flex flex-col items-center justify-center pointer-events-none transition-colors duration-0">
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-[101]" />

      <div ref={logoRef} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center w-[100px] h-[100px] z-[50] pointer-events-auto">
        <svg className="w-full h-full overflow-visible" viewBox="0 0 200 200">
          <path className="fill-none stroke-[#1a1a1a] stroke-[4px] stroke-linejoin-round" d="
            M 130 80 L 130 140 L 70 80 L 70 130 L 20 180 L 20 20 L 70 20 Z 
            M 130 70 L 140 60 L 180 100 L 180 180 L 130 180 L 70 120 L 70 60 L 130 120 Z 
            M 180 80 L 120 20 L 180 20 Z" 
          />
          <path className="fill-none stroke-white stroke-[4px] stroke-linecap-round stroke-linejoin-round" 
                style={{
                  filter: 'drop-shadow(0 0 6px #ffffff) drop-shadow(0 0 12px rgba(255, 255, 255, 0.8))',
                  strokeDasharray: '100 3000',
                  animation: 'flowWhite 4s linear infinite'
                }}
                d="
            M 70 20 
            L 20 20 L 20 180 L 70 130 L 70 80 L 130 140 L 130 80 L 70 20 
            L 70 60 
            L 130 120 L 130 70 L 140 60 L 180 100 L 180 180 L 130 180 L 70 120 L 70 60" 
          />
          <path className="fill-none stroke-[#ff6a00] stroke-[4px] stroke-linecap-round stroke-linejoin-round"
                style={{
                  filter: 'drop-shadow(0 0 6px #ff6a00) drop-shadow(0 0 12px #ff4500)',
                  strokeDasharray: '40 800',
                  animation: 'flowOrange 2s linear infinite'
                }}
                d="
            M 120 20 
            L 180 20 L 180 80 L 120 20" 
          />
        </svg>
      </div>

      <style>{`
        @keyframes flowWhite {
            0% { stroke-dashoffset: 3100; }
            100% { stroke-dashoffset: 0; }
        }
        @keyframes flowOrange {
            0% { stroke-dashoffset: 840; }
            100% { stroke-dashoffset: 0; }
        }
      `}</style>
    </div>
  );
};
