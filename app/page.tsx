import type { LucideIcon } from "lucide-react";
import {
  Activity,
  ArrowRight,
  BatteryCharging,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  Factory,
  Gauge,
  Home,
  LineChart,
  MessageCircle,
  Ruler,
  ShieldCheck,
  Store,
  Sun,
  Tractor
} from "lucide-react";
import { FAQ } from "@/components/FAQ";
import { Header } from "@/components/Header";
import { HeroGraphic } from "@/components/HeroGraphic";
import { LeadForm } from "@/components/LeadForm";
import { SectionHeading } from "@/components/SectionHeading";

type CardItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const audiences: CardItem[] = [
  {
    title: "Residencial",
    description:
      "Para casas com alto consumo que buscam reduzir custos, valorizar o imóvel e investir em energia com segurança técnica.",
    icon: Home
  },
  {
    title: "Comercial",
    description:
      "Para clínicas, restaurantes, lojas, escritórios e PMEs que querem reduzir custo fixo, melhorar previsibilidade e proteger a margem do negócio.",
    icon: Store
  },
  {
    title: "Industrial",
    description:
      "Para operações que precisam controlar demanda, fator de potência, faturas complexas, desperdícios e decisões com impacto financeiro.",
    icon: Factory
  },
  {
    title: "Rural",
    description:
      "Para propriedades que dependem de energia para irrigação, bombeamento, refrigeração, armazenagem, ordenha e continuidade da produção.",
    icon: Tractor
  }
];

const problemPoints = [
  "Consumo mal distribuído ao longo do dia",
  "Equipamentos operando em horários inadequados",
  "Demanda contratada fora do perfil real",
  "Fator de potência e cobranças técnicas",
  "Falta de monitoramento energético",
  "Sistema solar dimensionado sem estudo adequado",
  "Ausência de análise técnica antes do investimento"
];

const solutions: CardItem[] = [
  {
    title: "Gestão de Energia",
    description:
      "Transforma dados de consumo, demanda, faturas e indicadores em decisões para reduzir desperdícios, evitar surpresas e melhorar o controle dos custos.",
    icon: LineChart
  },
  {
    title: "Eficiência Energética",
    description:
      "Identifica perdas, desperdícios e oportunidades de melhoria em equipamentos, processos e rotinas de uso da energia.",
    icon: Gauge
  },
  {
    title: "Energia Solar Fotovoltaica",
    description:
      "Projetos dimensionados conforme consumo, tarifa, estrutura disponível e objetivo do cliente, com análise técnica antes da implantação.",
    icon: Sun
  },
  {
    title: "Soluções para Grupo A",
    description:
      "Análise de demanda contratada, modalidade tarifária, fator de potência, memória de massa e pontos críticos para grandes consumidores.",
    icon: Building2
  },
  {
    title: "Projetos de Engenharia Elétrica",
    description:
      "Projetos técnicos, adequações, laudos e soluções elétricas com responsabilidade, leitura normativa e visão integrada da instalação.",
    icon: Ruler
  },
  {
    title: "Baterias e Sistemas Híbridos",
    description:
      "Avaliação técnica para backup, autonomia, continuidade operacional e integração com geração solar, quando fizer sentido para a realidade analisada.",
    icon: BatteryCharging
  }
];

const methodSteps = [
  {
    title: "Você solicita a análise",
    description:
      "O primeiro contato coleta dados básicos para entender seu objetivo, tipo de unidade consumidora e perfil de necessidade."
  },
  {
    title: "Entendemos seu perfil de consumo",
    description:
      "Avaliamos rotina, histórico de consumo, tarifa, demanda, estrutura elétrica e características relevantes da instalação."
  },
  {
    title: "Identificamos oportunidades",
    description:
      "O diagnóstico aponta desperdícios, riscos, ajustes e soluções compatíveis com a realidade analisada."
  },
  {
    title: "Apresentamos uma solução viável",
    description:
      "A recomendação pode envolver solar, gestão de energia, eficiência, projetos elétricos, baterias ou uma combinação técnica."
  },
  {
    title: "Executamos e acompanhamos",
    description:
      "Quando há implantação, a Energys conduz as etapas com engenharia, segurança e acompanhamento técnico antes, durante e depois."
  }
];

const trustItems = [
  "Engenharia elétrica aplicada",
  "Análise antes da proposta",
  "Projetos com responsabilidade técnica",
  "Visão integrada entre energia solar, gestão energética e eficiência",
  "Respeito às normas, concessionárias e critérios técnicos",
  "Acompanhamento antes, durante e depois da implantação"
];

const heroHighlights = [
  {
    title: "Diagnóstico antes da proposta",
    description:
      "Antes de indicar solar, gestão, bateria ou adequação elétrica, avaliamos o perfil de consumo e a realidade da instalação."
  },
  {
    title: "Solar, gestão e eficiência no mesmo raciocínio",
    description:
      "A Energys conecta geração, consumo, tarifa e infraestrutura para orientar decisões mais seguras."
  },
  {
    title: "Residencial, comercial, industrial e rural",
    description:
      "Soluções analisadas conforme o uso da energia, o tipo de operação e o objetivo de cada cliente."
  }
];

function IconCard({ item }: { item: CardItem }) {
  const Icon = item.icon;

  return (
    <article className="rounded-lg border brand-border bg-white p-6 shadow-[0_18px_46px_rgba(0,48,109,0.08)] transition duration-200 hover:-translate-y-0.5 hover:shadow-soft">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-md bg-gradient-to-br from-energys-mist to-white text-energys-blue shadow-[inset_0_0_0_1px_rgba(13,86,192,0.10)]">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </div>
      <h3 className="text-xl font-bold text-energys-navy">{item.title}</h3>
      <p className="mt-3 leading-7 text-slate-700">{item.description}</p>
    </article>
  );
}

export default function HomePage() {
  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-white focus:px-4 focus:py-3 focus:text-sm focus:font-bold focus:text-energys-navy focus:shadow-soft focus:outline-none focus:ring-4 focus:ring-energys-yellow/40"
      >
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <section id="inicio" className="brand-dark relative overflow-hidden text-white">
          <div className="absolute inset-0 technical-grid opacity-20" aria-hidden="true" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-energys-mist/20 to-transparent" />
          <div className="relative mx-auto grid max-w-7xl gap-8 px-5 pb-16 pt-10 sm:pt-14 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:pb-20 lg:pt-16">
            <div className="flex flex-col justify-center">
              <p className="mb-5 w-fit rounded-md border border-white/15 bg-white/10 px-3 py-2 text-sm font-bold uppercase text-energys-yellow backdrop-blur">
                Engenharia e inteligência energética
              </p>
              <h1 className="max-w-4xl text-4xl font-extrabold leading-[1.08] text-white sm:text-5xl xl:text-6xl">
                Energia sob controle. Decisão com dados.
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-blue-50/90 sm:text-lg sm:leading-8">
                A Energys ajuda residências, empresas, indústrias e propriedades rurais a
                entender onde a energia pesa mais, identificar desperdícios e escolher
                soluções com engenharia, dados e segurança técnica.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#lead-form-hero"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-energys-yellow px-5 text-sm font-bold text-energys-deep shadow-[0_18px_42px_rgba(253,176,42,0.28)] transition hover:bg-[#f5a414] focus:outline-none focus:ring-4 focus:ring-energys-yellow/35"
                >
                  Solicitar análise energética
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href="#contato"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-white/20 bg-white/10 px-5 text-sm font-bold text-white backdrop-blur transition hover:border-white/35 hover:bg-white/16 focus:outline-none focus:ring-4 focus:ring-white/15"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  Falar com um especialista
                </a>
              </div>

              <p className="mt-4 max-w-xl text-sm leading-6 text-blue-50/75">
                Sem promessa pronta. Primeiro entendemos seu consumo, sua estrutura e seus
                objetivos.
              </p>
            </div>

            <div className="lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:self-start lg:pt-2 xl:sticky xl:top-28">
              <LeadForm
                id="lead-form-hero"
                formLocation="hero"
                title="Receba uma avaliação inicial para o seu perfil de consumo"
                description="Preencha seus dados e nossa equipe entra em contato para entender sua realidade antes de indicar qualquer solução."
              />
            </div>

            <div className="grid gap-3 sm:grid-cols-3 lg:col-start-1 lg:row-start-2">
              {heroHighlights.map((item) => (
                <div
                  key={item.title}
                  className="min-h-32 rounded-md border border-white/12 bg-white/10 p-4 shadow-[0_16px_38px_rgba(0,0,0,0.16)] backdrop-blur"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-energys-yellow" />
                    <h3 className="text-sm font-bold leading-5 text-blue-50">{item.title}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-blue-50/75">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="lg:col-start-1 lg:row-start-3">
              <HeroGraphic />
            </div>
          </div>
        </section>

        <section id="para-quem" className="bg-energys-paper py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionHeading
              eyebrow="Para quem é"
              title="A energia pesa de formas diferentes para cada cliente"
              description="Cada unidade consumidora tem uma realidade própria. Por isso, a análise considera consumo, rotina, tarifa, demanda, infraestrutura elétrica e objetivos antes de indicar qualquer solução."
            />
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {audiences.map((item) => (
                <IconCard key={item.title} item={item} />
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <SectionHeading
              eyebrow="Problema"
              title="A conta de luz mostra o resultado. Mas nem sempre mostra onde está o problema."
              description="Quando a energia pesa no orçamento, o problema nem sempre está apenas no consumo. Pode estar na demanda contratada, nos horários de operação, no fator de potência, em equipamentos pouco eficientes, em um sistema solar mal dimensionado ou simplesmente na falta de monitoramento."
            />
            <div className="rounded-lg border brand-border bg-energys-paper p-6 shadow-soft">
              <p className="mb-6 leading-7 text-slate-700">
                Por isso, antes de propor uma solução, a Energys analisa a realidade de cada
                cliente. O objetivo é entender o cenário completo para indicar um caminho
                tecnicamente viável, economicamente coerente e adequado ao perfil de uso.
              </p>
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-md bg-energys-navy text-white">
                  <Activity className="h-5 w-5" aria-hidden="true" />
                </div>
                <p className="font-semibold text-energys-navy">
                  Onde a análise técnica costuma procurar oportunidades
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {problemPoints.map((point) => (
                  <div
                    key={point}
                    className="flex gap-3 rounded-md border border-slate-200 bg-white p-4"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-energys-blue" />
                    <span className="text-sm leading-6 text-slate-700">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="solucoes" className="bg-energys-paper py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionHeading
              eyebrow="Soluções"
              title="Engenharia e inteligência energética para orientar melhores decisões"
              description="A Energys não parte de uma solução única. Cada recomendação nasce da leitura dos dados, da estrutura elétrica, da tarifa, da operação e do objetivo de cada cliente."
            />
            <div className="mt-8 rounded-lg border border-energys-blue/10 bg-white p-5 text-sm leading-6 text-slate-700 shadow-[0_12px_36px_rgba(0,48,109,0.06)]">
              <strong className="text-energys-navy">Ponto de partida:</strong> antes de
              propor solar, bateria, gestão ou adequação elétrica, avaliamos se a solução
              faz sentido para o perfil de consumo, a infraestrutura disponível e o
              resultado esperado.
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {solutions.map((item) => (
                <IconCard key={item.title} item={item} />
              ))}
            </div>
          </div>
        </section>

        <section id="metodo" className="brand-dark py-20 text-white lg:py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase text-energys-yellow">
                Como funciona
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">
                Como funciona a análise da Energys
              </h2>
              <p className="mt-4 text-xl font-semibold text-white">
                A Energys não começa pelo orçamento. Começa pela análise.
              </p>
              <p className="mt-4 text-base leading-7 text-blue-100 sm:text-lg">
                Um método consultivo para transformar dados de energia em decisões mais
                claras, responsáveis e alinhadas à realidade do cliente.
              </p>
            </div>

            <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
              {methodSteps.map((step, index) => (
                <article
                  key={step.title}
                  className="rounded-lg border border-white/12 bg-white/[0.075] p-5 shadow-[0_20px_58px_rgba(0,0,0,0.18)] backdrop-blur"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-md bg-energys-yellow text-sm font-bold text-energys-navy">
                    {index + 1}
                  </span>
                  <h3 className="mt-5 text-lg font-bold">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-blue-100">{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.92fr_1.08fr] lg:px-8">
            <SectionHeading
              eyebrow="Confiança"
              title="Por que escolher a Energys para orientar sua decisão energética?"
              description="Porque energia envolve investimento, segurança elétrica, regras da concessionária, perfil de consumo e impacto financeiro. A Energys analisa esses fatores antes de recomendar qualquer caminho."
            />
            <p className="max-w-3xl leading-7 text-slate-700 lg:col-start-1 lg:row-start-2">
              A proposta é entregar mais do que uma solução pronta. É ajudar o cliente a
              entender sua energia, comparar possibilidades e avançar com mais segurança
              técnica.
            </p>

            <div className="grid gap-4 sm:grid-cols-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
              {trustItems.map((item) => (
                <div
                  key={item}
                  className="flex gap-3 rounded-lg border brand-border bg-energys-paper p-5"
                >
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-energys-blue" />
                  <span className="font-medium leading-6 text-slate-800">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="duvidas" className="bg-energys-paper py-20 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
            <SectionHeading
              eyebrow="Dúvidas"
              title="Perguntas comuns antes de uma decisão energética"
              description="As respostas abaixo mantêm uma abordagem conservadora: energia precisa de análise, contexto e responsabilidade técnica."
            />
            <FAQ />
          </div>
        </section>

        <section id="contato" className="relative overflow-hidden bg-white py-20 lg:py-24">
          <div className="absolute inset-0 technical-grid opacity-50" aria-hidden="true" />
          <div className="relative mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[1fr_0.82fr] lg:px-8">
            <div className="flex flex-col justify-center">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-energys-navy text-white">
                <ClipboardCheck className="h-7 w-7" aria-hidden="true" />
              </div>
              <h2 className="max-w-3xl text-4xl font-semibold leading-tight text-energys-navy sm:text-5xl">
                Quer entender onde sua energia pode estar pesando mais?
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
                Envie seu contato e a Energys avalia o seu perfil para indicar o melhor
                caminho com segurança técnica, seja para residência, comércio, indústria ou
                propriedade rural.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {["Dados de consumo", "Tarifa", "Estrutura elétrica", "Objetivo do cliente"].map(
                  (item) => (
                    <span
                      key={item}
                      className="rounded-md border border-energys-blue/15 bg-energys-mist px-3 py-2 text-sm font-semibold text-energys-navy"
                    >
                      {item}
                    </span>
                  )
                )}
              </div>
              <a
                href="#lead-form-final"
                className="mt-8 inline-flex h-12 w-fit items-center justify-center gap-2 rounded-md bg-energys-yellow px-5 text-sm font-bold text-energys-deep shadow-[0_18px_42px_rgba(253,176,42,0.24)] transition hover:bg-[#f5a414] focus:outline-none focus:ring-4 focus:ring-energys-yellow/35"
              >
                Quero uma análise da minha energia
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <p className="mt-4 max-w-xl text-sm leading-6 text-slate-600">
                A análise inicial depende das informações de consumo, tarifa, estrutura
                elétrica e objetivo de cada cliente.
              </p>
            </div>

            <LeadForm
              id="lead-form-final"
              formLocation="final"
              title="Fale com a Energys"
              description="Preencha seus dados para iniciar uma conversa técnica e consultiva."
            />
          </div>
        </section>
      </main>

      <footer className="brand-dark text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 lg:grid-cols-[1fr_auto] lg:px-8">
          <div>
            <p className="text-lg font-bold">ENERGYS</p>
            <p className="mt-2 font-semibold text-blue-100">
              Energys | Gestão Inteligente de Energia
            </p>
            <p className="mt-3 text-sm text-blue-100">
              Energia sob controle. Decisão com dados.
            </p>
            <p className="mt-5 max-w-3xl text-xs leading-5 text-blue-100/85">
              Aviso: A análise inicial depende das informações de consumo, tarifa,
              estrutura elétrica e objetivo de cada cliente.
            </p>
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold uppercase text-energys-yellow">
              Links rápidos
            </p>
            <div className="grid gap-2 text-sm text-blue-100">
              <a
                href="#para-quem"
                className="rounded-sm transition hover:text-white focus:outline-none focus:ring-4 focus:ring-white/20"
              >
                Para quem é
              </a>
              <a
                href="#solucoes"
                className="rounded-sm transition hover:text-white focus:outline-none focus:ring-4 focus:ring-white/20"
              >
                Soluções
              </a>
              <a
                href="#metodo"
                className="rounded-sm transition hover:text-white focus:outline-none focus:ring-4 focus:ring-white/20"
              >
                Como funciona
              </a>
              <a
                href="#duvidas"
                className="rounded-sm transition hover:text-white focus:outline-none focus:ring-4 focus:ring-white/20"
              >
                Dúvidas
              </a>
              <a
                href="#contato"
                className="rounded-sm transition hover:text-white focus:outline-none focus:ring-4 focus:ring-white/20"
              >
                Contato
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
