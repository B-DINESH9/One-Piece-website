import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Map as MapIcon, Anchor, Ship } from "lucide-react";

export function MapSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const pathProgress = useTransform(scrollYProgress, [0.2, 0.8], [0, 1]);
  const shipPos = useTransform(scrollYProgress, [0.2, 0.8], ["0%", "100%"]);

  return (
    <section ref={ref} className="min-h-[150vh] bg-ocean-800 relative py-32 overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #ffffff 2px, transparent 2px)', backgroundSize: '100px 100px' }} />

      <div className="container mx-auto px-6 relative z-10 h-full flex flex-col">
        <h2 className="font-sans text-4xl md:text-6xl font-light text-center text-white mb-20 tracking-[0.3em] uppercase">
          THE GRAND LINE
        </h2>

        <div className="relative flex-grow flex items-center justify-center min-h-[600px]">
          
          {/* Conceptual Map Path */}
          <div className="relative w-full max-w-5xl h-64 border-b-4 border-dashed border-gray-600/50">
            {/* The calm belts */}
            <div className="absolute top-0 w-full h-8 bg-blue-900/30 blur-sm rounded-full" />
            <div className="absolute bottom-[-32px] w-full h-8 bg-blue-900/30 blur-sm rounded-full" />

            {/* Islands */}
            {[0, 25, 50, 75, 100].map((pos, i) => (
              <motion.div 
                key={i}
                className="absolute transform -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${pos}%`, top: "100%" }}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: i * 0.2 }}
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-600 to-green-900 border-4 border-gold-600/50 shadow-[0_0_20px_rgba(34,197,94,0.3)] flex items-center justify-center text-white">
                  <MapIcon className="w-6 h-6 opacity-80" />
                </div>
              </motion.div>
            ))}

            {/* Animated Ship Path */}
            <motion.div 
              className="absolute h-1 bg-gradient-to-r from-red-600 to-gold-500 shadow-[0_0_15px_rgba(222,175,36,0.8)]"
              style={{ left: 0, top: "100%", width: useTransform(pathProgress, p => `${p * 100}%`) }}
            />

            {/* The Ship sliding across */}
            <motion.div 
              className="absolute transform -translate-y-[calc(100%+10px)] z-20"
              style={{ left: shipPos }}
            >
              <div className="text-4xl filter drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]">
                ⛵
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
