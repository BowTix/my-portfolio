import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import profil from '../assets/profil.jpg';

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

            const px = (x - rect.width / 2) / (rect.width / 2);
            const py = (y - rect.height / 2) / (rect.height / 2);

            const distance = Math.hypot(px, py);
            const scaleOutside = distance > 1 ? 1 / distance : 1;

            const pxSafe = Math.max(-1, Math.min(1, px)) * scaleOutside;
            const pySafe = Math.max(-1, Math.min(1, py)) * scaleOutside;

            const maxDeg = 6;
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
        "JavaScript / TypeScript", "ReactJS / NodeJS", "Php / Symphony",
        "Python", "C / C++ / C#", "MySQL / MongoDB",
        "Docker", "Git / GitHub"
    ];

    return (
        <>
        {}
        <div id="à-propos"/>

        <section
            ref={containerRef}
            className="relative min-h-screen md:sticky md:top-0 py-32 overflow-hidden bg-navy flex items-center"
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
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="flex items-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white">
                            <span className="text-green font-mono mr-2">01.</span>
                            A propos
                        </h2>
                        <div className="h-[1px] bg-slate-700 w-1/3 ml-6"></div>
                    </motion.div>

                    <motion.div variants={itemVariants} className="text-slate-400 text-lg leading-relaxed space-y-4">
                        <p>
                            Salut ! Moi c'est <span className="text-green">Mathis</span>. Tout a commencé en 2021 avec un simple projet étudiant, et depuis, le web est devenu mon terrain de jeu favori. J'adore décortiquer le fonctionnement des choses pour créer des expériences numériques fluides et performantes.
                        </p>
                        <p>
                            Mon profil ne s'arrête pas au code : je suis un véritable passionné d'informatique, aussi à l'aise avec le <span className="text-green">hardware</span> que le <span className="text-green">software</span>. Je suis constamment en veille technologique, cherchant toujours à optimiser mes compétences.
                        </p>
                        <p>
                            Quand je ne suis pas devant mon IDE, je vis au rythme des moteurs. Fan inconditionnel de <span className="text-green">sports mécaniques</span> (F1, MotoGP, WEC...) je retrouve dans le développement la même exigence de précision et de performance que dans les paddocks.
                        </p>
                    </motion.div>

                    <motion.ul
                        variants={itemVariants}
                        className="grid grid-cols-2 gap-2 mt-8 font-mono text-sm text-slate-400"
                    >
                        {skills.map((skill, i) => (
                            <li key={i} className="flex items-center hover:text-green transition-colors cursor-default">
                                <span className="text-green mr-2">▹</span> {skill}
                            </li>
                        ))}
                    </motion.ul>
                </motion.div>

                <div
                    className="relative group mx-auto md:mx-0 w-full max-w-sm"
                    style={{ perspective: 1200 }}
                >

                    <motion.div
                        className="absolute top-7 left-5 w-full h-full border-2 border-green rounded-lg z-0 transition-transform duration-500 pointer-events-none group-hover:-translate-x-2 group-hover:-translate-y-2"
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
                        className="relative z-10 rounded-lg overflow-hidden shadow-2xl bg-navy"
                    >
                        <img
                            src={profil}
                            alt="Portrait"
                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 ease-in-out"
                        />
                    </motion.div>

                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -bottom-14 -right-12 bg-navy-light p-4 rounded-lg shadow-xl border border-green z-20 hidden md:block"
                    >
                        <span className="text-green font-mono text-xs">Expérience</span>
                        <div className="text-white font-bold text-xl">3+ Ans</div>
                    </motion.div>

                </div>
            </div>
        </section>
        </>
    );
};

export default About;
