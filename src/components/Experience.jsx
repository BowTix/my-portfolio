import { useRef } from "react";
import { motion, useScroll } from "framer-motion";

const experiences = [
    {
        company: "Lycée Saint Gatien La Salle, Joué-lès-Tours",
        role: "Baccalauréat",
        date: "2023",
        description: "Sciences et technologies de l’industrie et du développement durable spécialité systèmes d’information et du numérique (STI2D SIN)",
        skills: ["HTML/CSS", "JavaScript", "C++"]
    },
    {
        company: "Parc des Mini-Chateaux, Amboise",
        role: "Opérateur d'attraction",
        date: "Juillet/août 2023 puis missions ponctuelles",
        description: "Accueil de visiteurs et gestion de l'attraction",
        skills: []
    },
    {
        company: "SVI Prosis, Joué-lès-Tours",
        role: "Technicien  Informatique (stage)",
        date: "Août/septembre 2024",
        description: "Montages d’ordinateurs, diagnostics et tests matériels, clonage et nettoyage de disques durs, réparation et maintenance de matériel informatique",
        skills: []
    },
    {
        company: "Hutchinson, Joué-lès-Tours",
        role: "Technicien  Informatique (stage)",
        date: "Juillet/septembre 2025",
        description: "Migration du parc informatique, travaux systèmes sur l'infrastructure serveurs et réseaux.",
        skills: []
    },
    {
        company: "Boreal Business, Bourges",
        role: "Développeur Fullstack",
        date: "Octobre 2025 - Aujourd'hui",
        description: "Développement et maintien de fonctionnalités critiques pour des plateformes d'entreprises.",
        skills: ["Php", "Javascript", "Vue.js"]
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
                    transition={{ duration: 0.3, delay: 0.2 }}
                    className={`absolute top-8 w-5 h-5 rounded-full bg-green border-4 border-navy z-20 
                        ${index % 2 === 0 ? 'left-[-9px] md:left-auto md:right-[-11px]' : 'left-[-9px]'}`}
                ></motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    className="relative z-10 p-6 bg-navy-light rounded-lg shadow-xl border border-transparent hover:border-green/30 transition-colors group"
                >
                    <h3 className="text-xl font-bold text-white group-hover:text-green transition-colors">{experience.role}</h3>
                    <h4 className="text-slate-400 font-mono text-sm">@ {experience.company}</h4>
                    <span className="text-slate-500 font-mono text-xs mb-4 block">{experience.date}</span>
                    <p className="text-slate-400 text-sm mb-6">{experience.description}</p>
                    <div className="flex flex-wrap gap-2">
                        {experience.skills.map((skill, i) => (
                            <span key={i} className="text-xs font-mono text-slate-300 bg-navy-lighter px-2 py-1 rounded">{skill}</span>
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
        offset: ["start center", "end center"]
    });

    return (
        <section ref={ref} id="experience" className="relative py-20 bg-navy overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 relative">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center mb-16"
                >
                    <h2 className="text-3xl font-bold text-white"><span className="text-green font-mono mr-2">03.</span> Mon Parcours</h2>
                    <div className="h-[1px] bg-slate-700 w-1/3 ml-6"></div>
                </motion.div>

                <div className="relative">
                    {/* BARRES QUI PRENNENT TOUTE LA HAUTEUR AUTOMATIQUEMENT */}
                    <div className="absolute left-6 md:left-1/2 top-0 -bottom-20 w-[2px] bg-slate-800 transform md:-translate-x-1/2"></div>
                    <motion.div
                        style={{ scaleY: scrollYProgress }}
                        className="absolute left-6 md:left-1/2 top-0 -bottom-20 w-[2px] bg-green origin-top transform md:-translate-x-1/2 z-10"
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