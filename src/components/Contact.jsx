import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Contact = () => {
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        // On commence l'animation un peu avant que la section n'arrive
        // et on la finit quand le centre de la section est au centre de l'écran
        offset: ["start 85%", "center center"]
    });

    // L'animation va de 0 à 1
    const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <section
            ref={containerRef}
            id="contact"
            // min-h-screen : Prend toute la hauteur
            // overflow-hidden : Empêche le scroll horizontal si le SVG dépasse un peu
            className="relative min-h-screen flex flex-col justify-center items-center py-20 bg-[#0a192f] overflow-hidden"
        >
            {/* --- L'ANIMATION BORDER SPLIT --- */}
            <div className="absolute inset-0 w-full h-full pointer-events-none">
                <svg
                    className="w-full h-full overflow-visible"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                >
                    {/* Chemin GAUCHE : Haut Centre (50,0) -> Coin Haut Gauche (0,0) -> Coin Bas Gauche (0,100) -> Bas Centre (50,100) */}
                    <motion.path
                        d="M 50 0 L 0 0 L 0 100 L 50 100"
                        fill="none"
                        stroke="#64ffda"
                        strokeWidth="4"
                        strokeLinecap="square"
                        vectorEffect="non-scaling-stroke" // Garde l'épaisseur du trait constante (4px) même si le SVG est étiré
                        style={{ pathLength }}
                    />

                    {/* Chemin DROITE : Haut Centre (50,0) -> Coin Haut Droit (100,0) -> Coin Bas Droit (100,100) -> Bas Centre (50,100) */}
                    <motion.path
                        d="M 50 0 L 100 0 L 100 100 L 50 100"
                        fill="none"
                        stroke="#64ffda"
                        strokeWidth="4"
                        strokeLinecap="square"
                        vectorEffect="non-scaling-stroke"
                        style={{ pathLength }}
                    />
                </svg>
            </div>

            {/* Contenu de la section (Reste inchangé) */}
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
                    Mon inbox est toujours ouverte, que ce soit pour une mission ou juste pour dire bonjour !
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