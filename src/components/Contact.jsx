import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Contact = () => {
    const containerRef = useRef(null);

    // On déclenche l'animation quand la section entre dans l'écran
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 75%", "center center"]
    });

    // Optionnel : On peut mapper la valeur pour qu'elle finisse un peu plus vite ou plus tard
    const pathLength = useTransform(scrollYProgress, [0, 0.8], [0, 1]);

    return (
        <section 
            ref={containerRef}
            id="contact" 
            className="relative min-h-screen md:sticky md:top-0 py-32 overflow-hidden bg-[#0a192f]"
        >
            {/* L'animation du cadre (SVG) */}
            <div className="absolute inset-0 pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <motion.path
                        // Le tracé : Part du haut centre (50% 0), va à droite, en bas, à gauche, en haut, et revient au centre.
                        d="M 50 0 L 100 0 L 100 100 L 0 100 L 0 0 L 50 0"
                        fill="none"
                        stroke="#64ffda"
                        strokeWidth="4" // Un peu plus épais que la timeline pour l'effet "cadre"
                        vectorEffect="non-scaling-stroke" // Garde l'épaisseur constante même si le SVG est étiré
                        style={{ pathLength }} // L'animation magique
                    />
                </svg>
            </div>

            <div className="max-w-4xl mx-auto px-6 text-center">

            {/* Petit surtitre style terminal */}
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-[#64ffda] font-mono mb-6"
            >
                04. La suite ?
            </motion.p>

            {/* Gros Titre */}
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-4xl md:text-6xl font-bold text-white mb-8"
            >
                Travaillons Ensemble.
            </motion.h2>

            {/* Texte descriptif */}
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-slate-400 text-lg max-w-xl mx-auto mb-12 leading-relaxed"
            >
                Je suis actuellement à la recherche de nouvelles opportunités (Freelance ou CDI).
                Que vous ayez une question ou juste envie de dire bonjour, ma boîte mail est toujours ouverte !
            </motion.p>

            {/* Le Bouton CTA avec effet Hover NÉON */}
            <motion.a
                href="mailto:ton.email@gmail.com"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-10 py-5 border-2 border-[#64ffda] text-[#64ffda] rounded font-mono text-lg hover:bg-[#64ffda]/10 transition-colors duration-300 relative group overflow-hidden"
            >
                <span className="relative z-10">Me Contacter</span>
                {/* Petit effet de brillance qui passe au survol */}
                <div className="absolute inset-0 h-full w-full scale-0 rounded transition-all duration-300 group-hover:scale-100 group-hover:bg-[#64ffda]/5"></div>
            </motion.a>

            </div>
        </section>
    );
};

export default Contact;