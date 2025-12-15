import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const Navbar = () => {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);

    // Ce hook magique de Framer Motion détecte les changements de scroll
    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious();

        // Si on scrolle vers le bas ET qu'on a dépassé 150px
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    return (
        <motion.nav
            // L'animation de masquage
            variants={{
                visible: { y: 0 },
                hidden: { y: "-100%" },
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed w-full top-0 z-50 bg-[#0a192f]/90 backdrop-blur-sm border-b border-white/10 px-6 py-4"
        >
            <div className="max-w-6xl mx-auto flex justify-between items-center">

                {/* Logo / Nom */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-[#64ffda] font-mono text-xl font-bold cursor-pointer"
                >
                    &lt;TonNom /&gt;
                </motion.div>

                {/* Liens Desktop */}
                <div className="hidden md:flex items-center gap-8">
                    {["À Propos", "Projets", "Contact"].map((item, index) => (
                        <a
                            key={index}
                            href={`#${item.toLowerCase().replace(' ', '-')}`}
                            className="text-slate-300 hover:text-[#64ffda] text-sm font-mono transition-colors"
                        >
                            <span className="text-[#64ffda] mr-1">0{index + 1}.</span>
                            {item}
                        </a>
                    ))}

                    {/* Bouton CV */}
                    <button className="px-4 py-2 border border-[#64ffda] text-[#64ffda] rounded hover:bg-[#64ffda]/10 text-sm font-mono transition-all">
                        CV
                    </button>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;