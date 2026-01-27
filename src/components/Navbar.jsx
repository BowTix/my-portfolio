import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import cv from "../assets/cv_mathis_maureau.pdf"

const Navbar = () => {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious();

        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    return (
        <motion.nav
            variants={{
                visible: { y: 0 },
                hidden: { y: "-100%" },
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed w-full top-0 z-50 bg-navy/90 backdrop-blur-sm border-b border-white/10 px-6 py-4"
        >
            <div className="max-w-6xl mx-auto flex justify-between items-center">

                {/* Logo / Nom */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-green font-mono text-xl font-bold cursor-pointer"
                >
                    &lt;Mathis Maureau/&gt;
                </motion.div>

                {/* Liens Desktop */}
                <div className="hidden md:flex items-center gap-8">
                    {["À Propos", "Projets", "Contact"].map((item, index) => (
                        <a
                            key={index}
                            href={`#${item.toLowerCase().replace(' ', '-')}`}
                            className="text-slate-300 hover:text-green text-sm font-mono transition-colors"
                        >
                            <span className="text-green mr-1">0{index + 1}.</span>
                            {item}
                        </a>
                    ))}

                    {/* Bouton CV */}
                    <a className="px-4 py-2 border border-green text-green rounded hover:bg-green/10 text-sm font-mono transition-all" href={cv} download="cv_mathis_maureau.pdf">
                        CV
                    </a>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;