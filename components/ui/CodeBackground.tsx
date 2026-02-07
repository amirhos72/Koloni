import React, { useEffect, useRef } from 'react';

const PixelBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = canvas.offsetWidth;
    let height = canvas.height = canvas.offsetHeight;
    let animationFrameId: number;

    // Configuration
    const gridSize = 30; // Spacing of the grid
    const pixelSize = 3; // Spacing of the grid - INCREASED FROM 1.5
    const mouseRadius = 200; // Interaction radius

    interface Pixel {
      x: number;
      y: number;
      offset: number; // For shimmering effect
      color: string;
    }

    let pixels: Pixel[] = [];
    const mouse = { x: -1000, y: -1000 };

    const init = () => {
      pixels = [];
      for (let y = 0; y < height + gridSize; y += gridSize) {
        for (let x = 0; x < width + gridSize; x += gridSize) {
          const isGold = Math.random() < 0.1; // Make gold pixels rarer
          pixels.push({
            x: x,
            y: y,
            offset: Math.random() * 100,
            color: isGold ? 'rgba(191, 166, 104,' : 'rgba(255, 255, 255,',
          });
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      const fadeZonePercentage = 0.3; // 30% fade at top and bottom
      const topFadeEnd = height * fadeZonePercentage;
      const bottomFadeStart = height * (1 - fadeZonePercentage);

      pixels.forEach(p => {
        // --- Vertical Fade Logic ---
        let fadeMultiplier = 1.0;

        if (p.y < topFadeEnd) {
          // Fade in at the top
          fadeMultiplier = p.y / topFadeEnd;
        } else if (p.y > bottomFadeStart) {
          // Fade out at the bottom
          const fadeDistance = height - bottomFadeStart;
          fadeMultiplier = Math.max(0, 1 - (p.y - bottomFadeStart) / fadeDistance);
        }
        
        // Use Math.pow to create a more gradual fade curve
        fadeMultiplier = Math.pow(fadeMultiplier, 1.5);

        // Optimization: if pixel is invisible, skip drawing
        if (fadeMultiplier <= 0.01) {
          return;
        }

        // --- Interaction Logic ---
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        let finalOpacity = 0;
        const baseOpacity = 0.1 + (Math.sin(Date.now() * 0.0005 + p.offset) + 1) * 0.1; // Slow shimmer

        if (dist < mouseRadius) {
          // Pixel is inside mouse radius
          const interactiveOpacity = (1 - dist / mouseRadius) * 0.7;
          finalOpacity = Math.max(baseOpacity, interactiveOpacity);
          
          // Draw connecting line to mouse
          let lineOpacity = (1 - dist / mouseRadius) * 0.2;
          lineOpacity *= fadeMultiplier; // Apply vertical fade to lines
          
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(191, 166, 104, ${lineOpacity})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();

        } else {
          finalOpacity = baseOpacity;
        }

        // Apply vertical fade to the final pixel opacity
        finalOpacity *= fadeMultiplier;

        // Draw Pixel
        ctx.fillStyle = `${p.color}${finalOpacity})`;
        ctx.fillRect(p.x - pixelSize / 2, p.y - pixelSize / 2, pixelSize, pixelSize);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
      init();
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    
    const handleMouseLeave = () => {
        mouse.x = -1000;
        mouse.y = -1000;
    }

    init();
    animate();

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full pointer-events-auto mix-blend-screen z-0 opacity-80"
    />
  );
};

export default PixelBackground;