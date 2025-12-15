import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Contact = () => {
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 60%", "end center"]
    });

    // --- SÉQUENCAGE DE L'ANIMATION ---
    // 1. Haut (du centre vers les coins) : de 0% à 30% du scroll
    const widthTop = useTransform(scrollYProgress, [0, 0.3], ["0%", "50%"]);

    // 2. Côtés (de haut en bas) : de 30% à 80% du scroll
    const heightSide = useTransform(scrollYProgress, [0.3, 0.8], ["0%", "100%"]);

    // 3. Bas (des coins vers le centre) : de 80% à 100% du scroll
    const widthBottom = useTransform(scrollYProgress, [0.8, 1], ["0%", "50%"]);

    return (
        <section
            ref={containerRef}
            id="contact"
            className="relative min-h-screen flex flex-col justify-center items-center py-20 bg-[#0a192f] overflow-hidden"
        >
            {/* --- CADRE ANIMÉ (DIVS) --- */}
            <div className="absolute inset-0 w-full h-full pointer-events-none">

                {/* HAUT GAUCHE (Part du centre, va à gauche) */}
                <motion.div
                    style={{ width: widthTop }}
                    className="absolute top-0 right-1/2 h-[4px] bg-[#64ffda] origin-right"
                />

                {/* HAUT DROITE (Part du centre, va à droite) */}
                <motion.div
                    style={{ width: widthTop }}
                    className="absolute top-0 left-1/2 h-[4px] bg-[#64ffda] origin-left"
                />

                {/* CÔTÉ GAUCHE (Descend) */}
                <motion.div
                    style={{ height: heightSide }}
                    className="absolute top-0 left-0 w-[4px] bg-[#64ffda] origin-top"
                />

                {/* CÔTÉ DROIT (Descend) */}
                <motion.div
                    style={{ height: heightSide }}
                    className="absolute top-0 right-0 w-[4px] bg-[#64ffda] origin-top"
                />

                {/* BAS GAUCHE (Revient vers le centre) */}
                <motion.div
                    style={{ width: widthBottom }}
                    className="absolute bottom-0 left-0 h-[4px] bg-[#64ffda] origin-left"
                />

                {/* BAS DROITE (Revient vers le centre) */}
                <motion.div
                    style={{ width: widthBottom }}
                    className="absolute bottom-0 right-0 h-[4px] bg-[#64ffda] origin-right"
                />
            </div>

            {/* CONTENU */}
            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-[#64ffda] font-mono mb-6"
                >
                    04. La suite ?
                </motion.p>

                <motion.h2
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-bold text-white mb-8"
                >
                    Travaillons Ensemble.
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-slate-400 text-lg max-w-xl mx-auto mb-12 leading-relaxed"
                >
                    Je suis actuellement à la recherche de nouvelles opportunités.
                    Mon inbox est toujours ouverte !
                </motion.p>

                <motion.a
                    href="mailto:ton.email@gmail.com"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block px-10 py-5 border-2 border-[#64ffda] text-[#64ffda] rounded font-mono text-lg hover:bg-[#64ffda]/10 transition-colors duration-300"
                >
                    Me Contacter
                </motion.a>
            </div>
        </section>
    );
};

export default Contact;