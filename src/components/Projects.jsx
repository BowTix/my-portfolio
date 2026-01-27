import { motion } from "framer-motion";
import arthecaImg from '../assets/artheca.png';
import yinshImg from '../assets/yinsh.png';
import movieBoxImg from '../assets/movie-box.png';
import tactiQuatreImg from '../assets/TactiQuatre.png';
import dbsImg from '../assets/dbs.png';
import supemonImg from '../assets/supemon.png';

const projects = [
    {
        title: "Artheca",
        description: "Site vitrine pour une galerie d'art, avec gestion des œuvres et des artistes.",
        tech: ["React", "HTML/CSS"],
        githubLink: "https://github.com/BowTix/Artheca",
        demoLink: "https://artheca.vercel.app/",
        image: arthecaImg
    },
    {
        title: "Yinsh",
        description: "Jeu de société version numérique tiré du jeu de plateau Yinsh.",
        tech: ["Python"],
        githubLink: "https://github.com/BowTix/Yinsh",
        demoLink: "#",
        image: yinshImg
    },
    {
        title: "Movie Box",
        description: "Site permettant de rechercher et d'afficher des informations sur les films.",
        tech: ["JavaScript", "HTML/CSS"],
        githubLink: "https://github.com/BowTix/Movie-Box",
        demoLink: "#",
        image: movieBoxImg
    },
    {
        title: "Tacti'Quatre",
        description: "Jeu de stratégie mélangeant morpion, puissance 4 et échecs.",
        tech: ["Python"],
        githubLink: "https://github.com/BowTix/Tacti-Quatre",
        demoLink: "#",
        image: tactiQuatreImg
    },
    {
        title: "Drive By Silver",
        description: "Site de vente fictive de produits dérivés autour de l'écurie Mercedes.",
        tech: ["HtML/CSS"],
        githubLink: "https://github.com/BowTix/Drive-By-Silver",
        demoLink: "#",
        image: dbsImg
    },
    {
        title: "Supemon",
        description: "Jeu en mode console inspiré des jeux Pokémon.",
        tech: ["C"],
        githubLink: "https://github.com/BowTix/Supemon",
        demoLink: "#",
        image: supemonImg
    }
];

const Projects = () => {
    return (
        <section className="relative py-20 overflow-hidden bg-navy-dark" id="projets">
            <div className="max-w-6xl mx-auto px-6">

            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex items-center mb-16"
            >
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                    <span className="text-green font-mono mr-2">02.</span>
                    Quelques Projets
                </h2>
                <div className="h-[1px] bg-slate-700 w-1/3 ml-6"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, index) => {
                    const startX = index % 2 === 0 ? -200 : 200;

                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: startX }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true, amount: 0.3 }}
                            whileHover={{ y: -10 }}
                            className="bg-navy-light rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-shadow border border-transparent hover:border-green/30 group"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 group-hover:bg-transparent transition-colors duration-300"></div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-slate-400 text-sm mb-4 line-clamp-3">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="text-xs font-mono text-green">
                              {t}
                          </span>
                                    ))}
                                </div>
                                <div className="flex gap-4">
                                    <a href={project.githubLink} className="text-slate-300 hover:text-green transition-colors" title="Code Source">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                                    </a>
                                    {project.demoLink !== "#" && (
                                        <a href={project.demoLink} className="text-slate-300 hover:text-green transition-colors" title="Voir le site">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                        </a>
                                    )}
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
