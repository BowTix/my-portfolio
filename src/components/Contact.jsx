import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const Contact = () => {
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end end"]
    });

    const scrollSmooth = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const widthTop = useTransform(scrollSmooth, [0, 0.3], ["0%", "50%"]);

    const heightSide = useTransform(scrollSmooth, [0.3, 0.8], ["0%", "100%"]);

    const widthBottom = useTransform(scrollSmooth, [0.8, 1], ["0%", "50%"]);

    return (
        <section
            ref={containerRef}
            id="contact"
            className="relative min-h-screen flex flex-col justify-center items-center py-20 bg-navy overflow-hidden"
        >
            {/* --- CADRE ANIMÉ --- */}
            <div className="absolute inset-0 w-full h-full pointer-events-none">

                {/* HAUT GAUCHE */}
                <motion.div
                    style={{ width: widthTop }}
                    className="absolute top-0 right-1/2 h-[2px] bg-green origin-right"
                />

                {/* HAUT DROITE */}
                <motion.div
                    style={{ width: widthTop }}
                    className="absolute top-0 left-1/2 h-[2px] bg-green origin-left"
                />

                {/* CÔTÉ GAUCHE */}
                <motion.div
                    style={{ height: heightSide }}
                    className="absolute top-0 left-0 w-[2px] bg-green origin-top"
                />

                {/* CÔTÉ DROIT */}
                <motion.div
                    style={{ height: heightSide }}
                    className="absolute top-0 right-0 w-[2px] bg-green origin-top"
                />

                {/* BAS GAUCHE */}
                <motion.div
                    style={{ width: widthBottom }}
                    className="absolute bottom-0 left-0 h-[2px] bg-green origin-left"
                />

                {/* BAS DROITE */}
                <motion.div
                    style={{ width: widthBottom }}
                    className="absolute bottom-0 right-0 h-[2px] bg-green origin-right"
                />
            </div>

            {/* CONTENU */}
            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-green font-mono mb-6"
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
                    href="https://mathis-maureau.carrd.co/"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block px-10 py-5 border-2 border-green text-green rounded font-mono text-lg hover:bg-green/10 transition-colors duration-300"
                >
                    Me Contacter
                </motion.a>
            </div>
        </section>
    );
};

export default Contact;