import { useRef } from "react";
import { motion, useScroll } from "framer-motion";

const experiences = [
    {
        company: "Tech Solutions Inc.",
        role: "Développeur Full Stack Senior",
        date: "2023 - Présent",
        description: "Lead technique sur la refonte de l'architecture micro-services. Mentoring de 3 développeurs juniors et mise en place de CI/CD avec Docker et GitHub Actions.",
        skills: ["React", "Node.js", "AWS", "Docker"]
    },
    {
        company: "StartUp Creative",
        role: "Développeur Front-End",
        date: "2021 - 2023",
        description: "Développement de l'interface utilisateur d'une application SaaS utilisée par 10k+ utilisateurs. Optimisation des performances (Core Web Vitals) et accessibilité.",
        skills: ["Vue.js", "Tailwind", "Figma", "Jest"]
    },
    {
        company: "Web Agency Corp",
        role: "Développeur Web Junior",
        date: "2019 - 2021",
        description: "Intégration de maquettes pour divers clients e-commerce. Création de thèmes WordPress sur mesure et maintenance de sites existants.",
        skills: ["HTML/CSS", "JavaScript", "WordPress", "PHP"]
    },
    {
        company: "Projet Étudiant",
        role: "Stage Fin d'Études",
        date: "2019",
        description: "Premier pas dans le monde pro. Développement d'un outil interne de gestion de stocks.",
        skills: ["Python", "Django", "Bootstrap"]
    }
];

const ExperienceCard = ({ experience }) => {
    return (
        <div className="mb-12 relative pl-8 md:pl-0">
            {/* Contenu de la carte */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true, margin: "-50px" }}
                className="md:w-[45%] md:ml-auto relative z-10 p-6 bg-[#112240] rounded-lg shadow-xl border border-transparent hover:border-[#64ffda]/30 transition-colors group"
            >
                {/* Petite flèche décorative (Optionnel) */}
                <div className="hidden md:block absolute top-6 -left-2 w-4 h-4 bg-[#112240] rotate-45 transform origin-center"></div>

                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-[#64ffda] transition-colors">
                        {experience.role}
                    </h3>
                    <span className="text-xs font-mono text-[#64ffda] border border-[#64ffda] px-2 py-1 rounded">
                {experience.date}
            </span>
                </div>

                <h4 className="text-slate-400 font-mono text-sm mb-4">
                    @ {experience.company}
                </h4>

                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                    {experience.description}
                </p>

                <div className="flex flex-wrap gap-2">
                    {experience.skills.map((skill, i) => (
                        <span key={i} className="text-xs font-mono text-slate-300 bg-[#233554] px-2 py-1 rounded hover:text-[#64ffda] transition-colors cursor-default">
                    {skill}
                </span>
                    ))}
                </div>
            </motion.div>

            {/* Point sur la timeline (Mobile: Gauche / Desktop: Centre) */}
            <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.2, delay: 0.2 }}
                className="absolute left-[1px] md:left-1/2 top-8 w-4 h-4 rounded-full bg-[#64ffda] border-4 border-[#0a192f] transform -translate-x-1/2 z-20"
            ></motion.div>
        </div>
    );
};


const Experience = () => {
    const ref = useRef(null);

    // On track le scroll sur toute la hauteur du conteneur
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    return (
        <section id="experience" className="relative py-20 overflow-hidden bg-[#0a192f] min-h-screen">
            <div className="max-w-6xl mx-auto px-6">

            {/* Titre */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex items-center mb-16"
            >
                <h2 className="text-3xl font-bold text-white">
                    <span className="text-[#64ffda] font-mono mr-2">03.</span>
                    Mon Parcours
                </h2>
                <div className="h-[1px] bg-slate-700 w-1/3 ml-6"></div>
            </motion.div>

            {/* Container Timeline */}
            <div ref={ref} className="relative">

                {/* BARRE DE FOND (Gris statique) */}
                <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-slate-800 transform md:-translate-x-1/2"></div>

                {/* BARRE QUI DÉFILE (Néon animé) */}
                <motion.div
                    style={{ scaleY: scrollYProgress }} // C'est ici que la magie opère
                    className="absolute left-0 md:left-1/2 top-0 w-[2px] bg-[#64ffda] origin-top transform md:-translate-x-1/2 z-0 h-full"
                ></motion.div>

                {/* Liste des expériences */}
                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <div key={index} className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                            {/* Espace vide pour alterner gauche/droite sur Desktop */}
                            <div className="hidden md:block w-1/2"></div>

                            {/* La Carte (Je triche un peu sur les marges pour l'alternance) */}
                            <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} relative`}>
                                <ExperienceCard experience={exp} />
                            </div>
                        </div>
                    ))}
                </div>

            </div>
            </div>
        </section>
    );
};

export default Experience;