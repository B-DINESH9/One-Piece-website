import { motion } from "motion/react";

const fruits = [
  { 
    name: "Gomu Gomu no Mi", 
    type: "Paramecia", 
    color: "from-purple-500 to-purple-900", 
    shadow: "rgba(168,85,247,0.5)", 
    desc: "Turns the user's body into rubber.",
    svg: (
      <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_10px_15px_rgba(168,85,247,0.5)]">
        {/* Main Fruit Body */}
        <circle cx="50" cy="55" r="35" fill="url(#gomu-grad)" />
        <defs>
          <radialGradient id="gomu-grad" cx="30%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#d8b4fe" />
            <stop offset="30%" stopColor="#9333ea" />
            <stop offset="100%" stopColor="#4c1d95" />
          </radialGradient>
        </defs>
        
        {/* Swirl Patterns (S-Shapes) */}
        {[
          "M 35 35 Q 40 30, 45 35 T 45 45",
          "M 60 30 Q 65 25, 70 30 T 70 40",
          "M 25 55 Q 30 50, 35 55 T 35 65",
          "M 50 60 Q 55 55, 60 60 T 60 70",
          "M 75 55 Q 80 50, 85 55 T 85 65",
          "M 35 75 Q 40 70, 45 75 T 45 85",
          "M 65 75 Q 70 70, 75 75 T 75 85",
        ].map((d, i) => (
          <path key={i} d={d} fill="none" stroke="#6b21a8" strokeWidth="2.5" strokeLinecap="round" opacity="0.8" />
        ))}
        
        {/* Stem T-shape */}
        <path d="M 50 20 L 50 10 Q 55 5, 65 10 Q 60 15, 55 10" fill="none" stroke="#15803d" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M 50 10 Q 40 5, 30 15 Q 35 20, 40 15" fill="none" stroke="#166534" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  },
  { 
    name: "Mera Mera no Mi", 
    type: "Logia", 
    color: "from-orange-500 to-red-900", 
    shadow: "rgba(239,68,68,0.5)", 
    desc: "Allows the user to create, control, and transform into fire.",
    svg: (
      <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_10px_15px_rgba(239,68,68,0.5)]">
        {/* Main Fruit Body */}
        <circle cx="50" cy="55" r="35" fill="url(#mera-grad)" />
        <defs>
          <radialGradient id="mera-grad" cx="30%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#fde047" />
            <stop offset="40%" stopColor="#f97316" />
            <stop offset="100%" stopColor="#991b1b" />
          </radialGradient>
        </defs>

        {/* Flame Scales */}
        {[
          "M 45 25 Q 50 20, 55 25 Q 50 28, 45 25",
          "M 35 30 Q 40 25, 45 30 Q 40 33, 35 30",
          "M 55 30 Q 60 25, 65 30 Q 60 33, 55 30",
          "M 25 40 Q 30 35, 35 40 Q 30 44, 25 40",
          "M 45 40 Q 50 35, 55 40 Q 50 44, 45 40",
          "M 65 40 Q 70 35, 75 40 Q 70 44, 65 40",
          "M 30 50 Q 35 45, 40 50 Q 35 55, 30 50",
          "M 50 50 Q 55 45, 60 50 Q 55 55, 50 50",
          "M 70 50 Q 75 45, 80 50 Q 75 55, 70 50",
          "M 35 60 Q 40 55, 45 60 Q 40 65, 35 60",
          "M 55 60 Q 60 55, 65 60 Q 60 65, 55 60",
          "M 45 70 Q 50 65, 55 70 Q 50 75, 45 70",
        ].map((d, i) => (
          <path key={i} d={d} fill="#ea580c" opacity="0.9" />
        ))}

        {/* Stem T-shape */}
        <path d="M 50 20 L 50 10 Q 55 5, 65 10 Q 60 15, 55 10" fill="none" stroke="#15803d" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M 50 10 Q 40 5, 30 15 Q 35 20, 40 15" fill="none" stroke="#166534" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  },
  { 
    name: "Ope Ope no Mi", 
    type: "Paramecia", 
    color: "from-pink-500 to-rose-900", 
    shadow: "rgba(236,72,153,0.5)", 
    desc: "Allows the user to modify anything within a specific spherical space.",
    svg: (
      <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_10px_15px_rgba(236,72,153,0.5)]">
        {/* Heart Fruit Body */}
        <path d="M 50 35 C 50 35, 40 20, 25 25 C 10 30, 10 50, 20 65 L 50 85 L 80 65 C 90 50, 90 30, 75 25 C 60 20, 50 35, 50 35 Z" fill="url(#ope-grad)" />
        <defs>
          <radialGradient id="ope-grad" cx="30%" cy="40%" r="70%">
            <stop offset="0%" stopColor="#fca5a5" />
            <stop offset="40%" stopColor="#e11d48" />
            <stop offset="100%" stopColor="#881337" />
          </radialGradient>
        </defs>

        {/* Swirl Patterns (Heart specific swirls) */}
        {[
          "M 30 45 Q 35 40, 40 45 T 40 55",
          "M 55 45 Q 60 40, 65 45 T 65 55",
          "M 45 60 Q 50 55, 55 60 T 55 70",
          "M 25 55 Q 30 50, 35 55 T 35 65",
          "M 70 55 Q 75 50, 80 55 T 80 65",
        ].map((d, i) => (
          <path key={i} d={d} fill="none" stroke="#be123c" strokeWidth="2.5" strokeLinecap="round" opacity="0.8" />
        ))}

        {/* Stem T-shape */}
        <path d="M 50 35 L 50 20 Q 55 10, 65 15 Q 60 20, 55 15" fill="none" stroke="#15803d" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M 50 20 Q 40 10, 30 20 Q 35 25, 40 20" fill="none" stroke="#166534" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  },
];

export function DevilFruitSection() {
  return (
    <section className="min-h-screen py-32 bg-[#050814] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="font-sans text-4xl md:text-6xl font-light text-white tracking-[0.3em] uppercase mb-4">
            DEVIL FRUITS
          </h2>
          <p className="font-sans text-xl text-gray-400 font-light max-w-2xl mx-auto">
            Mystical fruits that grant incredible powers at the cost of the user's ability to swim.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-16 lg:gap-24">
          {fruits.map((fruit, idx) => (
            <motion.div
              key={fruit.name}
              initial={{ opacity: 0, scale: 0.8, y: 100 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.8 }}
              className="relative group"
            >
              {/* Outer glow aura */}
              <div 
                className="absolute inset-0 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{ backgroundColor: fruit.shadow.replace('0.5', '0.2') }}
              />

              {/* The Fruit */}
              <motion.div 
                animate={{ y: [0, -20, 0], rotate: [0, 5, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity, delay: idx, ease: "easeInOut" }}
                className="relative cursor-pointer w-48 h-48 group-hover:scale-110 transition-transform duration-500"
              >
                {fruit.svg}
              </motion.div>

              {/* Info Card */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-8 w-64 text-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                <h3 className="font-sans font-bold text-xl text-white mb-2 uppercase tracking-widest">{fruit.name}</h3>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-gray-300 mb-3 border border-white/20">
                  {fruit.type}
                </span>
                <p className="font-sans text-sm text-gray-400 leading-relaxed font-light">
                  {fruit.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
