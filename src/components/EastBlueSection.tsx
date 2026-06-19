import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Compass } from "lucide-react";

export function EastBlueSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1.2]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <section ref={ref} className="relative min-h-[120vh] w-full bg-ocean-900 flex items-center justify-center overflow-hidden py-32">
      {/* Background with map texture */}
      <motion.div 
        className="absolute inset-0 z-0 opacity-10 bg-repeat bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2000&auto=format&fit=crop")',
          backgroundSize: '800px',
          y: useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
        }}
      />

      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.div style={{ opacity, y }} className="space-y-8">
          <h2 className="font-sans text-4xl md:text-5xl text-sunset-600 font-light tracking-[0.2em] uppercase">
            The Weakest Sea
          </h2>
          <div className="h-[1px] w-32 bg-gradient-to-r from-sunset-500 to-transparent" />
          <p className="font-sans text-lg text-white/60 leading-relaxed font-light">
            Every great journey has a humble beginning. Here in the East Blue, 
            a young boy in a straw hat sets out in a small boat, carrying nothing 
            but a grand dream: to find the legendary One Piece and become the Pirate King.
          </p>
          <div className="flex gap-4 pt-4">
            <div className="w-12 h-16 bg-blood-red flex flex-col items-center justify-end pb-2 rounded-b shadow-[0_4px_10px_rgba(0,0,0,0.5)] transform -rotate-12 transition-transform hover:rotate-0">
               <span className="text-white text-xs font-bold leading-none">PIRATE</span>
               <span className="text-white text-xl">☠️</span>
            </div>
            <div className="w-12 h-16 bg-ocean-800 flex flex-col items-center justify-end pb-2 rounded-b shadow-[0_4px_10px_rgba(0,0,0,0.5)] transform rotate-6 transition-transform hover:rotate-0">
               <span className="text-white text-xs font-bold leading-none">MARINE</span>
               <span className="text-white text-xl">⚓</span>
            </div>
          </div>
        </motion.div>

        <motion.div style={{ scale, opacity }} className="relative flex justify-center items-center h-full">
          {/* Decorative Compass */}
          <div className="relative w-64 h-64 md:w-96 md:h-96">
            <div className="absolute inset-0 border-4 border-gold-600/30 rounded-full" />
            <div className="absolute inset-4 border-2 border-dashed border-gold-500/50 rounded-full animate-[spin_60s_linear_infinite_reverse]" />
            <motion.div 
              style={{ rotate }}
              className="absolute inset-0 flex items-center justify-center text-gold-500 overflow-hidden"
            >
              <Compass className="w-48 h-48 md:w-64 md:h-64 drop-shadow-[0_0_15px_rgba(222,175,36,0.5)]" strokeWidth={1} />
            </motion.div>
            
            {/* Cardinal points */}
            <span className="absolute top-2 left-1/2 -translate-x-1/2 font-cinzel text-xl font-bold text-gold-500">N</span>
            <span className="absolute bottom-2 left-1/2 -translate-x-1/2 font-cinzel text-xl font-bold text-gold-500">S</span>
            <span className="absolute left-2 top-1/2 -translate-y-1/2 font-cinzel text-xl font-bold text-gold-500">W</span>
            <span className="absolute right-2 top-1/2 -translate-y-1/2 font-cinzel text-xl font-bold text-gold-500">E</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
