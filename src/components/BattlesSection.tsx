import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Zap, Skull } from "lucide-react";

export function BattlesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const x1 = useTransform(scrollYProgress, [0, 1], ["50%", "-50%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["-50%", "50%"]);

  return (
    <section ref={ref} className="min-h-screen bg-black relative py-32 overflow-hidden flex flex-col justify-center">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542281286-9e0a16bb7366?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-luminosity grayscale" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/80 to-black z-10" />

      <div className="container mx-auto px-6 relative z-20">
        <h2 className="font-sans text-4xl md:text-6xl font-light text-sunset-600 text-center mb-16 tracking-[0.3em] drop-shadow-none uppercase">
          LEGENDARY CLASHES
        </h2>
        
        <div className="space-y-24">
          {/* Battle 1 */}
          <div className="relative">
            <motion.div 
              style={{ x: x1 }}
              className="flex items-center gap-8 md:w-3/4"
            >
              <div className="w-1/2 h-64 bg-gradient-to-r from-red-900 to-black border-l-4 border-red-500 rounded-lg p-8 shadow-[0_0_30px_rgba(220,38,38,0.3)] relative overflow-hidden group">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1501686637-b7aa9c48a882?q=80&w=1000&auto=format&fit=crop')] bg-cover opacity-30 mix-blend-overlay group-hover:scale-110 transition-transform duration-10000" />
                <h3 className="relative z-10 font-sans text-2xl tracking-widest uppercase font-bold text-white mb-2">Marineford</h3>
                <p className="relative z-10 font-sans text-gray-300">The War of the Best. A clash that shattered the world and ended an era.</p>
              </div>
              <div className="text-blood-red">
                <Skull className="w-16 h-16 opacity-50" />
              </div>
            </motion.div>
          </div>

          {/* Battle 2 */}
          <div className="relative">
            <motion.div 
              style={{ x: x2 }}
              className="flex items-center gap-8 md:w-3/4 ml-auto justify-end text-right"
            >
              <div className="text-yellow-500">
                <Zap className="w-16 h-16 opacity-50 filter drop-shadow-[0_0_10px_rgba(234,179,8,0.8)]" />
              </div>
              <div className="w-1/2 h-64 bg-gradient-to-l from-purple-900 to-black border-r-4 border-purple-500 rounded-lg p-8 shadow-[0_0_30px_rgba(168,85,247,0.3)] relative overflow-hidden group">
                 <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1000&auto=format&fit=crop')] bg-cover opacity-30 mix-blend-overlay group-hover:scale-110 transition-transform duration-10000" />
                <h3 className="relative z-10 font-sans text-2xl tracking-widest uppercase font-bold text-white mb-2">Onigashima</h3>
                <p className="relative z-10 font-sans text-gray-300">The raid that challenged two Emperors. The dawn of a new world order.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
