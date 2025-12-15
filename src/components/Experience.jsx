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

const ExperienceCard = ({ experience, index }) => {
    return (
        <div className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} mb-12 w-full`}>
            <div className="hidden md:block w-1/2"></div>
            <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 pl-8 md:pl-0' : 'pl-12'} relative`}>
                <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.2, delay: 0.2 }}
                    className={`absolute top-8 w-4 h-4 rounded-full bg-[#64ffda] border-4 border-[#0a192f] z-20 
                        ${index % 2 === 0 ? 'left-[-9px] md:left-auto md:right-[-9px]' : 'left-[-9px]'}`}
                ></motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    className="relative z-10 p-6 bg-[#112240] rounded-lg shadow-xl border border-transparent hover:border-[#64ffda]/30 transition-colors group"
                >
                    <h3 className="text-xl font-bold text-white group-hover:text-[#64ffda] transition-colors">{experience.role}</h3>
                    <h4 className="text-slate-400 font-mono text-sm mb-4">@ {experience.company}</h4>
                    <p className="text-slate-400 text-sm mb-6">{experience.description}</p>
                    <div className="flex flex-wrap gap-2">
                        {experience.skills.map((skill, i) => (
                            <span key={i} className="text-xs font-mono text-slate-300 bg-[#233554] px-2 py-1 rounded">{skill}</span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

const Experience = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        // Ajusté pour que la barre finisse sa course pile quand on arrive en bas
        offset: ["start 60%", "end end"]
    });

    return (
        <section id="experience" className="relative py-20 bg-[#0a192f] overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 relative" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center mb-16"
                >
                    <h2 className="text-3xl font-bold text-white"><span className="text-[#64ffda] font-mono mr-2">03.</span> Mon Parcours</h2>
                    <div className="h-[1px] bg-slate-700 w-1/3 ml-6"></div>
                </motion.div>

                <div className="relative">
                    {/* BARRES QUI PRENNENT TOUTE LA HAUTEUR AUTOMATIQUEMENT */}
                    <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-slate-800 transform md:-translate-x-1/2"></div>
                    <motion.div
                        style={{ scaleY: scrollYProgress }}
                        className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-[#64ffda] origin-top transform md:-translate-x-1/2 z-10"
                    ></motion.div>

                    <div className="relative z-10 space-y-12">
                        {experiences.map((exp, index) => (
                            <ExperienceCard key={index} experience={exp} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;