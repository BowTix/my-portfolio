import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
    const ref = useRef(null);

    // On récupère la position du scroll
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    // --- REGLAGES PARALLAXE ---
    // L'arrière-plan bouge moins vite (0% -> 50%)
    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    // Le texte descend plus vite (0% -> 100%)
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <div
            ref={ref}
            className="relative w-full h-screen overflow-hidden grid place-items-center"
        >

            {/* 1. ARRIÈRE-PLAN (Image Tech) */}
            <motion.div
                style={{ y: backgroundY }}
                className="absolute inset-0 z-0"
            >
                {/* Image de fond (Unsplash) */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop')`,
                        opacity: 0.4 // On baisse l'opacité pour voir le texte
                    }}
                />
                {/* Dégradé pour fondre l'image vers le bas */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a192f]/50 to-[#0a192f]"></div>
            </motion.div>


            {/* 2. CONTENU (Ton texte) */}
            <motion.div
                style={{ y: textY }}
                className="relative z-10 text-center px-4"
            >
                <h2 className="text-[#64ffda] font-mono text-xl mb-4 tracking-widest">
                    BONJOUR, JE SUIS
                </h2>

                <h1 className="text-5xl md:text-8xl font-bold text-white mb-6 tracking-tight">
                    Mathis Maureau
                </h1>

                <p className="text-slate-400 text-lg md:text-2xl max-w-2xl mx-auto mb-10 leading-relaxed">
                    Développeur Full Stack.
                </p>

                <button className="px-8 py-4 border border-[#64ffda] text-[#64ffda] rounded hover:bg-[#64ffda]/10 transition-all font-mono">
                    Voir mes projets ↓
                </button>
            </motion.div>
        </div>
    );
};

export default Hero;