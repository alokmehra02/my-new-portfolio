'use client'

import { motion, useScroll, useTransform, useSpring, useVelocity } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'

export function AnimatedBackground() {
  const { scrollYProgress } = useScroll()
  const scrollVelocity = useVelocity(scrollYProgress)
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  })

  const [isClient, setIsClient] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    setIsClient(true)
  }, [])

  // Parallax transforms for blobs
  const blob1Y = useTransform(scrollYProgress, [0, 1], [0, -200])
  const blob2Y = useTransform(scrollYProgress, [0, 1], [0, -400])
  const blob3Y = useTransform(scrollYProgress, [0, 1], [0, -150])

  // Scale and opacity shifts based on scroll
  const scrollOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8])
  const particleScale = useTransform(smoothVelocity, [-1, 0, 1], [1.5, 1, 1.5])

  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    delay: i * 0.1,
    duration: 10 + Math.random() * 10,
    left: Math.random() * 100,
    size: 4 + Math.random() * 6,
  }))

  // Tech symbols parallax and rotation
  const symbol1Y = useTransform(scrollYProgress, [0, 1], [0, -100])
  const symbol1Rotate = useTransform(scrollYProgress, [0, 1], [0, 45])
  const symbol2Y = useTransform(scrollYProgress, [0, 1], [0, -150])
  const symbol2Rotate = useTransform(scrollYProgress, [0, 1], [0, -30])
  const symbol3Y = useTransform(scrollYProgress, [0, 1], [0, -120])
  const symbol3Rotate = useTransform(scrollYProgress, [0, 1], [0, 60])
  
  // Binary rain parallax
  const binary1Y = useTransform(scrollYProgress, [0, 1], [0, 100])
  const binary2Y = useTransform(scrollYProgress, [0, 1], [0, 150])

  // Canvas Neural Network Effect
  useEffect(() => {
    if (!isClient || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let networkParticles: { x: number, y: number, vx: number, vy: number, size: number }[] = [];
    let animationFrameId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      networkParticles = [];
      const numParticles = Math.min(Math.floor((window.innerWidth * window.innerHeight) / 15000), 80); // Responsive particle count
      for (let i = 0; i < numParticles; i++) {
        networkParticles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.6,
          vy: (Math.random() - 0.5) * 0.6,
          size: Math.random() * 1.5 + 1
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update & Draw Particles
      for (let i = 0; i < networkParticles.length; i++) {
        const p = networkParticles[i];
        p.x += p.vx;
        p.y += p.vy;

        // Bounce off edges smoothly
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(59, 130, 246, 0.6)'; // Primary blue
        ctx.fill();

        // Connect nearby network particles
        for (let j = i + 1; j < networkParticles.length; j++) {
          const p2 = networkParticles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.2 - dist / 150 * 0.2})`; // Fade out by distance
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', resize);
    resize();
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isClient]);

  if (!isClient) return null

  return (
    <div className="fixed inset-0 -z-10 bg-background overflow-hidden pointer-events-none">
      {/* Base Tech Pattern Texture - Subtle overlay */}
      <div 
        className="absolute inset-0 opacity-[0.25] z-0"
        style={{
          backgroundImage: `url('/assets/images/tech-pattern.png')`,
          backgroundSize: '800px',
          backgroundRepeat: 'repeat',
          mixBlendMode: 'screen',
        }}
      />

      <motion.div style={{ opacity: scrollOpacity }} className="absolute inset-0">
        {/* Large Parallax Blobs for ambient glow */}
        <motion.div 
          className="absolute top-20 left-1/4 w-[700px] h-[700px] rounded-full blur-3xl opacity-40"
          style={{ 
            y: blob1Y,
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.5) 0%, transparent 70%)',
            animation: 'moveBlob1 22s ease-in-out infinite',
          }} 
        />

        <motion.div 
          className="absolute top-1/3 right-1/4 w-[650px] h-[650px] rounded-full blur-3xl opacity-30"
          style={{ 
            y: blob2Y,
            background: 'radial-gradient(circle, rgba(34, 197, 234, 0.4) 0%, transparent 70%)',
            animation: 'moveBlob2 26s ease-in-out infinite',
          }} 
        />

        <motion.div 
          className="absolute bottom-1/4 left-1/3 w-[600px] h-[600px] rounded-full blur-3xl opacity-25"
          style={{ 
            y: blob3Y,
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, transparent 70%)',
            animation: 'moveBlob3 24s ease-in-out infinite',
          }} 
        />

        {/* AI Neural Network Canvas */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 z-0 opacity-70"
        />

        {/* AI Core Hologram Detail */}
        <div 
          className="absolute bottom-20 right-20 w-[400px] h-[400px] opacity-[0.7] transition-all duration-1000 z-20"
          style={{
            backgroundImage: `url('/assets/images/ai-core.png')`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            animation: 'floatCore 10s ease-in-out infinite',
          }}
        />

        {/* Scanning Line Effect */}
        <div className="absolute inset-0 z-10">
          <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-primary/30 to-transparent shadow-[0_0_15px_rgba(59,130,246,0.5)] animate-scan" />
        </div>

        {/* Floating reactive particles (Orbs) */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full z-10"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              left: `${particle.left}%`,
              top: '-20px',
              scale: particleScale,
              background: `radial-gradient(circle at 30% 30%, rgba(59, 130, 246, 0.9), rgba(34, 197, 234, 0.6))`,
              boxShadow: '0 0 15px rgba(59, 130, 246, 0.5)',
              animation: `floatUp ${particle.duration}s linear infinite`,
              animationDelay: `${particle.delay}s`,
            }}
          />
        ))}

        {/* Floating tech symbols */}
        <div className="absolute inset-0 overflow-hidden font-mono text-primary/20 select-none z-10">
          <motion.div 
            style={{ y: symbol1Y, rotate: symbol1Rotate }}
            className="absolute top-[15%] left-[10%] text-6xl font-bold"
          >
            {'</>'}
          </motion.div>
          <motion.div 
            style={{ y: symbol2Y, rotate: symbol2Rotate }}
            className="absolute top-[40%] right-[15%] text-5xl font-bold"
          >
            {'{ }'}
          </motion.div>
          <motion.div 
            style={{ y: symbol3Y, rotate: symbol3Rotate }}
            className="absolute bottom-[20%] left-[20%] text-5xl font-bold"
          >
            {'( )'}
          </motion.div>
          
          {/* Binary Rain Snippets */}
          <motion.div 
            style={{ y: binary1Y }}
            className="absolute top-[30%] left-[80%] text-xs opacity-40 font-mono flex flex-col items-center"
          >
            <span>01001</span>
            <span>10110</span>
            <span>00111</span>
            <span>11000</span>
          </motion.div>

          <motion.div 
            style={{ y: binary2Y }}
            className="absolute top-[60%] left-[5%] text-xs opacity-30 font-mono flex flex-col items-center"
          >
            <span>101</span>
            <span>010</span>
            <span>111</span>
          </motion.div>
        </div>
      </motion.div>

      <style jsx global>{`
        @keyframes scan {
          0% { transform: translateY(-100px); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(110vh); opacity: 0; }
        }

        .animate-scan {
          animation: scan 8s linear infinite;
        }

        @keyframes floatCore {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-30px) scale(1.05); }
        }

        @keyframes floatUp {
          0% {
            transform: translateY(110vh) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-10vh) translateX(40px);
            opacity: 0;
          }
        }

        @keyframes moveBlob1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        @keyframes moveBlob2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-40px, 30px) scale(1.1); }
          66% { transform: translate(20px, -20px) scale(0.9); }
        }
        @keyframes moveBlob3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(20px, -30px) scale(1.1); }
          66% { transform: translate(-30px, 40px) scale(0.9); }
        }
      `}</style>
    </div>
  )
}

