import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-5xl font-bold mb-8 text-gradient">Sobre Mim</h2>
          
          <div className="glass p-8 rounded-2xl">
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground leading-relaxed mb-6"
            >
              Sou entusiasta dos Dados, focado em transformar dados brutos em insights estratégicos que apoiam decisões de negócio. Tenho experiência na coleta, processamento e análise de grandes volumes de dados, utilizando ferramentas analíticas e linguagens de programação para gerar informações que impulsionam crescimento, eficiência e performance organizacional.
              Atuo na construção de dashboards e relatórios dinâmicos que oferecem visibilidade clara dos principais indicadores de desempenho, sempre com foco em gerar impacto real e acionável para as áreas de negócio.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
              className="text-lg text-muted-foreground leading-relaxed"
            >
             Atuo na estruturação de pipelines analíticos e modelagem de dados com foco em escalabilidade e confiabilidade. Trabalho na organização das camadas de dados, padronização de métricas e definição clara de regras de negócio, garantindo uma fonte única de verdade para a tomada de decisão.
             Aplico boas práticas de transformação, versionamento, documentação e testes de qualidade, conectando engenharia e negócio para sustentar análises e dashboards sobre uma base consistente e performática.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
