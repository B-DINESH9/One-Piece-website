import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Ship, Cloud, Bird, Music2, VolumeX } from "lucide-react";

export function HeroSection({ isMuted, toggleMute }: { isMuted: boolean, toggleMute: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "150%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const shipX = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-gradient-to-b from-ocean-800 via-sunset-500 to-sunset-600">
      {/* Background Parallax */}
      <motion.div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-40 mix-blend-overlay"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1505118380757-91f5f5632de0?q=80&w=2000&auto=format&fit=crop")',
          y: backgroundY,
        }}
      />

      {/* Sun */}
      <motion.div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-64 h-64 bg-yellow-400 rounded-full blur-3xl opacity-50 z-0"
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "300%"]) }}
      />

      {/* Clouds Animation */}
      <div className="absolute top-20 left-0 w-full h-40 z-10 opacity-60">
        <motion.div
          animate={{ x: ["-10%", "100%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="relative text-white/50"
        >
          <Cloud className="w-32 h-32 absolute top-0 -left-64" />
          <Cloud className="w-48 h-48 absolute top-10 left-[20%]" />
          <Cloud className="w-24 h-24 absolute top-5 left-[50%]" />
          <Cloud className="w-64 h-64 absolute -top-10 left-[80%]" />
        </motion.div>
      </div>

      {/* Birds */}
      <div className="absolute top-32 left-0 w-full h-20 z-10">
        <motion.div
          animate={{ x: ["-10%", "100%"], y: [0, -20, 0, 20, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="flex gap-4 text-black/40"
        >
          <Bird className="w-6 h-6" />
          <Bird className="w-8 h-8 -mt-4 opacity-80" />
          <Bird className="w-5 h-5 mt-2 opacity-60" />
        </motion.div>
      </div>

      {/* Foreground Sea */}
      <motion.div 
        className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-ocean-900 to-transparent z-20"
      />

      {/* Ship */}
      <motion.div
        className="absolute bottom-1/4 left-32 z-20"
        style={{ x: shipX }}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="relative">
          {/* Main Ship Body representation */}
          <div className="w-64 h-24 bg-amber-900 rounded-b-full rounded-tr-lg relative shadow-2xl overflow-visible">
            <div className="absolute -top-16 left-16 w-4 h-32 bg-amber-800" />
            <div className="absolute -top-24 left-6 w-24 h-28 bg-white/90 border border-gray-300 rounded-sm transform origin-left shadow-md flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center">
                    <span className="text-white text-[10px]">☠️</span>
                </div>
            </div>
            {/* Front head representation */}
            <div className="absolute -right-6 top-0 w-16 h-16 rounded-full bg-yellow-500 flex items-center justify-center shadow-lg">
                <span className="text-xl">🦁</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Title & CTA */}
      <motion.div 
        className="relative z-30 flex flex-col items-center text-center px-4 max-w-2xl"
        style={{ y: textY, opacity: textOpacity }}
      >
        <span className="inline-block text-sunset-600 text-sm tracking-[0.4em] uppercase mb-4 font-bold">Episode 01: The Beginning</span>
        <h1 className="font-sans text-5xl md:text-7xl lg:text-8xl font-light leading-[0.95] text-white drop-shadow-none tracking-tighter mb-8 shadow-none">
          BEGIN YOUR ADVENTURE<br/>
          <span className="italic font-serif font-black">ACROSS THE GRAND LINE</span>
        </h1>
        <p className="font-sans text-lg text-white/60 leading-relaxed mb-10 max-w-lg tracking-normal shadow-none drop-shadow-none text-center">
          Wealth, fame, power. The man who had everything in this world, the Pirate King Gold Roger. Set out on an immersive journey to find the legendary treasure.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-sunset-600 text-black font-bold px-10 py-5 rounded-sm tracking-widest uppercase text-sm hover:scale-105 transition-transform flex items-center gap-3 border-none shadow-none"
        >
          <Ship size={20} />
          Set Sail
        </motion.button>
      </motion.div>

      {/* Audio Control */}
      <div className="absolute top-8 right-8 z-50">
        <button 
          onClick={toggleMute}
          className="w-12 h-12 rounded-full bg-black/30 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-black/50 transition-colors"
        >
          {isMuted ? <VolumeX /> : <Music2 />}
        </button>
      </div>
    </section>
  );
}
