import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function TreasureSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"]
  });

  const opacity = useTransform(scrollYProgress, [0.5, 0.9], [0, 1]);
  const scale = useTransform(scrollYProgress, [0.5, 1], [0.8, 1]);
  const lightOpacity = useTransform(scrollYProgress, [0.8, 1], [0, 1]);

  return (
    <section ref={ref} className="h-screen w-full bg-ocean-900 relative flex items-center justify-center overflow-hidden">
      
      {/* Fog/Mist */}
      <div className="absolute inset-0 z-10 pointer-events-none opacity-40 mix-blend-screen bg-[url('https://images.unsplash.com/photo-1487621167305-5d248087c724?q=80&w=2000&auto=format&fit=crop')] bg-cover" />

      {/* Light Rays */}
      <motion.div 
        style={{ opacity: lightOpacity }}
        className="absolute inset-0 z-20 pointer-events-none flex justify-center items-end"
      >
        <div className="w-full h-full max-w-4xl bg-gradient-to-t from-gold-500/40 via-gold-500/10 to-transparent blur-3xl transform -translate-y-1/4 mix-blend-screen" />
      </motion.div>

      <motion.div 
        style={{ opacity, scale }}
        className="relative z-30 text-center flex flex-col items-center"
      >
        {/* The Chest Representation */}
        <motion.div 
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-64 h-48 mb-12 drop-shadow-[0_0_50px_rgba(222,175,36,0.6)]"
        >
          <div className="absolute bottom-0 w-64 h-32 bg-amber-900 border-4 border-gold-600 rounded-sm shadow-[inset_0_0_20px_rgba(0,0,0,0.8)]" />
          <div className="absolute top-4 w-64 h-16 bg-amber-800 border-4 border-gold-500 rounded-t-full origin-bottom transform rotate-12 shadow-[0_10px_20px_rgba(0,0,0,0.5)]" />
          
          {/* Glowing interior */}
          <div className="absolute top-16 left-4 right-4 h-12 bg-gold-400 blur-xl opacity-80" />
          
          {/* Lock */}
          <div className="absolute top-14 left-1/2 -translate-x-1/2 w-8 h-10 bg-gold-600 border-2 border-yellow-300 rounded shadow-lg flex items-center justify-center">
            <div className="w-2 h-4 bg-black rounded-full" />
          </div>
        </motion.div>

        <h2 className="font-sans text-5xl md:text-8xl font-light text-white drop-shadow-none tracking-[0.2em] mb-6 uppercase">
          THE ONE PIECE
        </h2>
        <p className="font-serif italic text-xl md:text-3xl text-white/60 font-light tracking-wide max-w-2xl">
          The Adventure Never Ends
        </p>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="mt-16 bg-sunset-600 text-black font-bold px-10 py-5 rounded-sm tracking-widest uppercase text-sm hover:scale-105 transition-transform flex items-center gap-3 border-none shadow-none"
        >
          Return to Start
        </motion.button>
      </motion.div>
    </section>
  );
}
