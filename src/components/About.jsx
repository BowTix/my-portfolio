// javascript
import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";

const About = () => {
    const containerRef = useRef(null);
    const imageRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const yText = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const yImage = useTransform(scrollYProgress, [0, 1], [-50, 50]);

    const rotX = useMotionValue(0);
    const rotY = useMotionValue(0);

    const springRotX = useSpring(rotX, { stiffness: 200, damping: 20 });
    const springRotY = useSpring(rotY, { stiffness: 200, damping: 20 });

    useEffect(() => {
        if (!imageRef.current) return;

        const handleMove = (e) => {
            const clientX = e.clientX ?? (e.touches && e.touches[0].clientX);
            const clientY = e.clientY ?? (e.touches && e.touches[0].clientY);
            if (clientX == null || clientY == null) return;

            const rect = imageRef.current.getBoundingClientRect();
            const x = clientX - rect.left;
            const y = clientY - rect.top;

            // normalisé -1 .. 1 (peut dépasser si la souris est loin)
            const px = (x - rect.width / 2) / (rect.width / 2);
            const py = (y - rect.height / 2) / (rect.height / 2);

            // réduction si la souris est en dehors (évite les valeurs gigantesques)
            const distance = Math.hypot(px, py);
            const scaleOutside = distance > 1 ? 1 / distance : 1;

            // clamp dans [-1, 1] puis applique la réduction
            const pxSafe = Math.max(-1, Math.min(1, px)) * scaleOutside;
            const pySafe = Math.max(-1, Math.min(1, py)) * scaleOutside;

            const maxDeg = 6; // réduit pour moins d'exagération
            rotY.set(pxSafe * maxDeg);
            rotX.set(-pySafe * maxDeg);
        };

        const handleLeave = () => {
            rotX.set(0);
            rotY.set(0);
        };

        window.addEventListener("pointermove", handleMove);
        window.addEventListener("touchmove", handleMove, { passive: true });
        window.addEventListener("blur", handleLeave);
        document.addEventListener("mouseleave", handleLeave);

        return () => {
            window.removeEventListener("pointermove", handleMove);
            window.removeEventListener("touchmove", handleMove);
            window.removeEventListener("blur", handleLeave);
            document.removeEventListener("mouseleave", handleLeave);
        };
    }, [rotX, rotY]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
    };

    const skills = [
        "JavaScript (ES6+)", "React.js", "Node.js",
        "TypeScript", "Tailwind CSS", "PostgreSQL",
        "Docker", "Git / GitHub"
    ];

    return (
        <section
            ref={containerRef}
            id="à-propos"
            className="relative min-h-screen md:sticky md:top-0 py-32 overflow-hidden bg-[#0a192f]"
        >
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                <motion.div
                    style={{ y: yText }}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <motion.div
                        initial={{ opacity: 0, x: -50 }} // Vient de la gauche
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="flex items-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white">
                            <span className="text-[#64ffda] font-mono mr-2">01.</span>
                            A propos
                        </h2>
                        <div className="h-[1px] bg-slate-700 w-1/3 ml-6"></div>
                    </motion.div>

                    <motion.div variants={itemVariants} className="text-slate-400 text-lg leading-relaxed space-y-4">
                        <p>
                            Hello ! Je m'appelle <span className="text-[#64ffda]">Mathis</span> et j'aime créer des choses qui vivent sur internet. Mon intérêt pour le développement web a commencé en 2021 quand j'ai développé mon premier site dans le cadre d'un petit projet étudiant.
                        </p>
                        <p>
                            Aujourd'hui, j'ai le privilège de développer des sites et applications pour <span className="text-[#64ffda]">des clients variés</span>, allant de la start-up au grand groupe.
                        </p>
                        <p>
                            Je suis obsédé par la performance et l'architecture propre. Voici les technos avec lesquelles j'ai pu travailler :
                        </p>
                    </motion.div>

                    <motion.ul
                        variants={itemVariants}
                        className="grid grid-cols-2 gap-2 mt-8 font-mono text-sm text-slate-400"
                    >
                        {skills.map((skill, i) => (
                            <li key={i} className="flex items-center hover:text-[#64ffda] transition-colors cursor-default">
                                <span className="text-[#64ffda] mr-2">▹</span> {skill}
                            </li>
                        ))}
                    </motion.ul>
                </motion.div>

                <div
                    className="relative group mx-auto md:mx-0 w-full max-w-sm"
                    style={{ perspective: 1200 }}
                >

                    <motion.div
                        className="absolute top-7 left-5 w-full h-full border-2 border-[#64ffda] rounded-lg z-0 transition-transform duration-500 pointer-events-none group-hover:-translate-x-2 group-hover:-translate-y-2"
                    ></motion.div>

                    <motion.div
                        ref={imageRef}
                        style={{
                            y: yImage,
                            rotateX: springRotX,
                            rotateY: springRotY,
                            transformStyle: "preserve-3d",
                            cursor: "pointer"
                        }}
                        className="relative z-10 rounded-lg overflow-hidden shadow-2xl bg-[#0a192f]"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
                            alt="Portrait"
                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 ease-in-out"
                        />
                    </motion.div>

                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -bottom-14 -right-12 bg-[#112240] p-4 rounded-lg shadow-xl border border-[#64ffda] z-20 hidden md:block"
                    >
                        <span className="text-[#64ffda] font-mono text-xs">Expérience</span>
                        <div className="text-white font-bold text-xl">5+ Ans</div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;
