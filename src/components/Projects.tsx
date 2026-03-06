import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import segurosImg from "@/assets/seguros.jpg";

const projects = [
  {
    title: "Dashboard de Vendas Interativo",
    description:
      "Sistema de visualização de dados em tempo real com métricas de vendas, análise de tendências e previsões usando machine learning.",
    tech: ["Python", "Plotly", "SQL", "Scikit-learn"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    showGithub: true,
  },
  {
    title: "Análise de Churn de Seguros",
    description:
      "Esta análise investiga os principais fatores que influenciam a renovação de apólices de seguros, buscando compreender quais variáveis impactam a decisão dos clientes de permanecer ou não com uma seguradora.",
    tech: ["Python", "Excel"],
    image: segurosImg,
    link: "https://medium.com/@james.marco118/renova%C3%A7%C3%A3o-de-seguros-a75c6d216a25",
    showGithub: false,
  },
  {
    title: "ETL Pipeline Automatizado",
    description:
      "Pipeline de dados completo para extração, transformação e carga de dados de múltiplas fontes com processamento em lote.",
    tech: ["Apache Airflow", "PostgreSQL", "Python", "Docker"],
    image:
      "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&h=600&fit=crop",
    showGithub: true,
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projetos" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold mb-16 text-center text-gradient">Projetos</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2 }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="relative group perspective"
              >
                <motion.div
                  animate={{
                    rotateY: hoveredIndex === index ? 180 : 0,
                  }}
                  transition={{ duration: 0.6 }}
                  className="relative w-full h-[500px] preserve-3d"
                >
                  {/* Front */}
                  <div className="absolute inset-0 backface-hidden">
                    <div className="glass rounded-2xl overflow-hidden h-full flex flex-col">
                      <div className="h-48 overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover smooth-transition group-hover:scale-110"
                        />
                      </div>
                      <div className="p-6 flex-1 flex flex-col">
                        <h3 className="text-2xl font-bold mb-3 text-gradient">{project.title}</h3>
                        <p className="text-muted-foreground mb-4 flex-1">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Back */}
                  <div className="absolute inset-0 backface-hidden rotate-y-180">
                    <div className="glass rounded-2xl h-full flex flex-col items-center justify-center p-6 bg-primary/10">
                      <h3 className="text-2xl font-bold mb-6 text-gradient">
                        {project.title}
                      </h3>
                      <div className="flex gap-4">
                        {project.link ? (
                          <motion.a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="px-6 py-3 bg-primary text-primary-foreground rounded-full flex items-center gap-2 smooth-transition hover:glow-effect"
                          >
                            <ExternalLink size={18} />
                            Ver Projeto
                          </motion.a>
                        ) : (
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="px-6 py-3 bg-primary text-primary-foreground rounded-full flex items-center gap-2 smooth-transition hover:glow-effect"
                          >
                            <ExternalLink size={18} />
                            Ver Projeto
                          </motion.button>
                        )}
                        {project.showGithub && (
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="px-6 py-3 glass rounded-full flex items-center gap-2 smooth-transition"
                          >
                            <Github size={18} />
                            Código
                          </motion.button>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        .perspective {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
};

export default Projects;
