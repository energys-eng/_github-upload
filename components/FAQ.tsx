import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "A análise energética serve para residência?",
    answer:
      "Sim. Residências com consumo relevante, equipamentos de maior potência ou interesse em energia solar podem se beneficiar de uma leitura técnica antes de decidir por qualquer investimento."
  },
  {
    question: "A Energys atende empresas e indústrias?",
    answer:
      "Sim. A análise pode considerar rotina de operação, demanda, tarifa, fator de potência, histórico de consumo e oportunidades de gestão energética para comércios, PMEs, indústrias e grandes consumidores."
  },
  {
    question: "A Energys atende propriedades rurais?",
    answer:
      "Sim. Propriedades rurais podem ter demandas específicas, como irrigação, bombeamento, refrigeração, armazenagem, ordenha e continuidade da produção. Cada caso precisa ser avaliado conforme consumo, estrutura e objetivo."
  },
  {
    question: "Energia solar elimina totalmente a conta de luz?",
    answer:
      "Não é correto tratar energia solar como eliminação total da conta. A viabilidade e os resultados dependem do consumo, da tarifa, das regras da distribuidora, da estrutura disponível e do dimensionamento técnico."
  },
  {
    question: "Preciso enviar minha conta de energia?",
    answer:
      "A conta de energia ajuda a tornar a avaliação mais precisa, principalmente quando há histórico de consumo, modalidade tarifária, demanda contratada ou cobranças específicas."
  },
  {
    question: "A Energys também faz projetos elétricos?",
    answer:
      "Sim. A atuação envolve engenharia elétrica, projetos técnicos, energia solar, gestão energética e eficiência, sempre considerando segurança, normas e contexto da instalação."
  },
  {
    question: "Bateria faz sentido para qualquer cliente?",
    answer:
      "Não necessariamente. Baterias e sistemas híbridos precisam ser avaliados conforme objetivo, criticidade da operação, perfil de consumo, infraestrutura e viabilidade técnica."
  },
  {
    question: "A análise energética tem custo?",
    answer:
      "A avaliação inicial pode ser feita para entender o perfil e direcionar o melhor caminho. Estudos técnicos mais detalhados podem depender de escopo, dados disponíveis e complexidade da análise."
  },
  {
    question: "A Energys atende somente energia solar?",
    answer:
      "Não. A Energys também atua com gestão de energia, eficiência energética, projetos elétricos, soluções para Grupo A, baterias e análise técnica para diferentes perfis de consumo."
  }
];

export function FAQ() {
  return (
    <div className="grid gap-4">
      {faqs.map((faq) => (
        <details
          key={faq.question}
          className="group rounded-lg border border-slate-200 bg-white/95 p-5 shadow-[0_16px_42px_rgba(0,48,109,0.07)]"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-sm text-left text-base font-semibold text-energys-navy focus:outline-none focus:ring-4 focus:ring-energys-blue/15">
            {faq.question}
            <ChevronDown
              className="h-5 w-5 shrink-0 text-energys-blue transition group-open:rotate-180"
              aria-hidden="true"
            />
          </summary>
          <p className="mt-4 leading-7 text-slate-700">{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}
