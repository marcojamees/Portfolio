import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Analytics Engineer",
    company: "Uoledtech",
    period: "2025 - Presente",
    description: "Minha responsabilidade é projetar e gerenciar modelos de dados para a BU Workforce, coletando, transformando e estruturando informações para análises avançadas. Desenvolvo pipelines de dados, mantenho documentação técnica atualizada e aplico práticas de engenharia de software, garantindo qualidade, confiabilidade e escalabilidade das soluções. Traduzo dados complexos em insights claros e acionáveis para clientes e equipes executivas, construindo dashboards estratégicos e relatórios que facilitam a tomada de decisão.",
  },
  {
    title: "Analista de Dados PL",
    company: "Uoledtech",
    period: "2024 - 2025",
    description: "Atuei como principal desenvolvedor de soluções analíticas para clientes da BU Workforce, liderando o desenvolvimento de pipelines ETL, integração de dados e automação de relatórios. Realizei análises exploratórias avançadas para identificar padrões, gerar insights acionáveis e apoiar decisões estratégicas. Criei dashboards interativos e relatórios customizados para diferentes áreas da empresa, garantindo qualidade e consistência dos dados. Colaborei com equipes multifuncionais para alinhar entregas às necessidades do cliente, promovendo melhorias operacionais e aumentando a eficiência na entrega dos dados.",
  },
  {
    title: "Analista de Dados Jr",
    company: "Uoledtech",
    period: "2022 - 2024",
    description: "Responsável pela análise de dados comerciais e construção de dashboards executivos em Power BI, apoiando decisões estratégicas e acompanhamento de KPIs. Contribuí para a estruturação de soluções de Business Intelligence, melhoria da qualidade dos dados e geração de insights orientados a performance e crescimento de receita.",
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experiencia" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold mb-16 text-center text-gradient">Experiência</h2>

          <div className="max-w-4xl mx-auto relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary-glow to-transparent hidden md:block" />

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="relative mb-12 ml-0 md:ml-20"
              >
                {/* Timeline Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: index * 0.2 + 0.3 }}
                  className="absolute -left-20 top-6 w-4 h-4 bg-primary rounded-full hidden md:block glow-effect"
                />

                <motion.div
                  whileHover={{ scale: 1.02, boxShadow: "var(--shadow-glow)" }}
                  className="glass p-6 rounded-2xl smooth-transition"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gradient mb-2">{exp.title}</h3>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Briefcase size={18} />
                        <span>{exp.company}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-primary mt-2 md:mt-0">
                      <Calendar size={18} />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
