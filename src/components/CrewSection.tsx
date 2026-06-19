import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Zap, Wind, Flame, Crosshair, HeartPulse, Flower2, Wrench, Music, Droplets } from "lucide-react";

const crew = [
  { name: "Luffy", image: "https://raw.githubusercontent.com/elitepunith/OnePiece-Book/main/images/luffy.jpg" },
  { name: "Zoro", image: "https://raw.githubusercontent.com/elitepunith/OnePiece-Book/main/images/zoro.jpg" },
  { name: "Nami", image: "https://raw.githubusercontent.com/elitepunith/OnePiece-Book/main/images/nami.jpg" },
  { name: "Usopp", image: "https://raw.githubusercontent.com/elitepunith/OnePiece-Book/main/images/ussop.jpg" },
  { name: "Sanji", image: "https://raw.githubusercontent.com/elitepunith/OnePiece-Book/main/images/sanji.jpg" },
  { name: "Chopper", image: "https://raw.githubusercontent.com/elitepunith/OnePiece-Book/main/images/chopper.jpg" },
  { name: "Robin", image: "https://raw.githubusercontent.com/elitepunith/OnePiece-Book/main/images/robin.jpg" },
  { name: "Franky", image: "https://raw.githubusercontent.com/elitepunith/OnePiece-Book/main/images/franky.jpg" },
  { name: "Brook", image: "https://raw.githubusercontent.com/elitepunith/OnePiece-Book/main/images/brook.jpg" },
  { name: "Jinbe", image: "https://raw.githubusercontent.com/elitepunith/OnePiece-Book/main/images/jinbe.jpg" },
];

function Card({ member, index }: { member: typeof crew[0], index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.2 1"]
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, y }}
      className="relative group h-[400px] sm:h-[460px] w-full shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-4"
    >
      {/* Wanted Poster Image */}
      <img 
        src={member.image} 
        alt={`${member.name} Wanted Poster`} 
        className="w-full h-full object-cover rounded-sm shadow-[0_0_15px_rgba(0,0,0,0.8)] filter sepia-[0.2] contrast-125 group-hover:sepia-0 group-hover:contrast-100 transition-all duration-500"
        referrerPolicy="no-referrer"
        onError={(e) => {
          // Fallback if image fails to load
          e.currentTarget.src = "https://images.unsplash.com/photo-1613320141235-90807b5a5e38?q=80&w=600&auto=format&fit=crop";
        }}
      />
      
      {/* Subtle overlay shadow to give a paper feel */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-sm"></div>
    </motion.div>
  );
}

export function CrewSection() {
  return (
    <section className="min-h-screen py-32 bg-ocean-900 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="font-sans text-4xl md:text-6xl font-light text-white tracking-[0.3em] uppercase mb-4"
          >
            THE STRAW HATS
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="h-1 w-32 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {crew.map((member, index) => (
            <Card key={member.name} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
