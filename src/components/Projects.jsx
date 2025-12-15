import { motion } from "framer-motion";

// --- TES DONNÉES PROJETS ---
const projects = [
    {
        title: "E-Commerce Dashboard",
        description: "Une application complète de gestion de stocks avec graphiques en temps réel et authentification sécurisée.",
        tech: ["React", "Node.js", "MongoDB", "Tailwind"],
        githubLink: "#",
        demoLink: "#",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
    },
    {
        title: "Chat App WebSocket",
        description: "Messagerie instantanée avec support des salons privés et notifications push.",
        tech: ["Socket.io", "Express", "Redis", "Docker"],
        githubLink: "#",
        demoLink: "#",
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop"
    },
    {
        title: "Portfolio v1",
        description: "Mon ancien portfolio réalisé en HTML/CSS pur. Une bonne base pour comprendre le responsive.",
        tech: ["HTML5", "SASS", "JavaScript"],
        githubLink: "#",
        demoLink: "#",
        image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2055&auto=format&fit=crop"
    },
    {
        title: "Projet 4 (Test)",
        description: "Juste pour voir l'effet sur plusieurs lignes.",
        tech: ["Vue.js", "Firebase"],
        githubLink: "#",
        demoLink: "#",
        image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=2070&auto=format&fit=crop"
    }
];

const Projects = () => {
    return (
        // Ajout de overflow-hidden sur la section pour éviter que les cartes ne créent
        // une barre de défilement horizontale pendant leur animation depuis les côtés.
        <section className="relative md:sticky md:top-0 py-20 overflow-hidden bg-[#081221]" id="projects">
            <div className="max-w-6xl mx-auto px-6">

            {/* Titre de section (Lui aussi peut venir du côté !) */}
            <motion.div
                initial={{ opacity: 0, x: -50 }} // Vient de la gauche
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex items-center mb-16"
            >
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                    <span className="text-[#64ffda] font-mono mr-2">02.</span>
                    Quelques Projets
                </h2>
                <div className="h-[1px] bg-slate-700 w-1/3 ml-6"></div>
            </motion.div>

            {/* Grille des projets */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, index) => {
                    // C'est ICI que la magie opère :
                    // Si l'index est pair (0, 2...), on part de -100px (gauche).
                    // Sinon, on part de 100px (droite).
                    const startX = index % 2 === 0 ? -100 : 100;

                    return (
                        <motion.div
                            key={index}
                            // État initial : invisible et décalé sur le côté
                            initial={{ opacity: 0, x: startX }}
                            // État final (quand visible) : visible et centré (x: 0)
                            whileInView={{ opacity: 1, x: 0 }}
                            // La transition est un peu plus longue pour un effet latéral fluide
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true, amount: 0.3 }} // amount: déclenche quand 30% de la carte est visible
                            whileHover={{ y: -10 }}
                            className="bg-[#112240] rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-shadow border border-transparent hover:border-[#64ffda]/30 group"
                        >
                            {/* Image du projet */}
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-[#64ffda]/20 group-hover:bg-transparent transition-colors duration-300"></div>
                            </div>

                            {/* Contenu de la carte */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#64ffda] transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-slate-400 text-sm mb-4 line-clamp-3">
                                    {project.description}
                                </p>

                                {/* Tags Techno */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="text-xs font-mono text-[#64ffda]">
                              {t}
                          </span>
                                    ))}
                                </div>

                                {/* Liens */}
                                <div className="flex gap-4">
                                    <a href={project.githubLink} className="text-slate-300 hover:text-[#64ffda] transition-colors" title="Code Source">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                                    </a>
                                    <a href={project.demoLink} className="text-slate-300 hover:text-[#64ffda] transition-colors" title="Voir le site">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                    </a>
                                 </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
            </div>
        </section>
    );
};

export default Projects;
