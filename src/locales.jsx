import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, Cpu, Eye, Layout, Terminal, Cloud, Compass, Wind, Dices, Layers } from 'lucide-react';

const AnimatedLink = ({ to, text }) => {
  return (
    <span className="inline-flex mx-1">
      <Link
        to={to}
        className="group relative inline-flex font-bold transition-transform duration-300 hover:scale-105"
      >
        <span className="relative inline-flex text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-fuchsia-500 to-amber-400 animate-rainbow" style={{ backgroundSize: '200% auto' }}>
          {text}
        </span>
        <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-gradient-to-r from-blue-400 via-fuchsia-500 to-amber-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 rounded-full"></span>
      </Link>
    </span>
  );
};

export const translations = {
  pt: {
    hero: {
      role: "Desenvolvedor Full-stack & Web Design",
      desc: "Do planejamento de interface à integração de sistemas. Eu construo ideias e código que funciona.",
      btnPrimary: "Contato",
      btnSecondary: "Projetos"
    },
    nav: {
      about: "Sobre",
      projects: "Projetos",
      contact: "Contato"
    },
    about: {
      titleLine1: "Sobre mim",
      titleLine2: "",
      intro1: "Ei!",
      intro2: "Iai, tudo bem? Como você está? Espero que bem!",
      p1: "Então, desde cedo sempre fui atraído não só pelo uso dos computadores, mas por querer entender exatamente o que acontecia por trás da tela. Mais interessado pela lógica e pelos fundamentos do que pelos resultados superficiais, acabei me aprofundando na ciência da computação e na arte de estruturar sistemas.",
      p2: "Profissionalmente, tornei-me conhecido por construir arquiteturas sólidas. Seja projetando o fluxo de dados em um back-end ou desenhando interfaces limpas no front-end, meu foco é sempre em criar aplicações previsíveis, eficientes e fáceis de manter.",
      p3: <>Para mim, o stack importa bem menos que a solução. Quando algo precisa ser de fato construído, das ideias iniciais à produção final, o que eu entrego é um código que resolve seu problema. De uma olhada nos meus<AnimatedLink to="/projects" text="projetos" />para você ter uma ideia melhor. E quase sempre, estou disponível para construir a sua ideia!</>
    },
    tools: {
      title1: "Stack",
      title2: "Avançado.",
      desc: "Estas representam meu ecosistema de desenvolvimento diário.",
      list: [
        { icon: <Code2 />, text: "React", desc: "Biblioteca UI Principal" },
        { icon: <Terminal />, text: "TypeScript", desc: "Tipagem Segura" },
        { icon: <Layout />, text: "TailwindCSS", desc: "Estilização Rápida" },
        { icon: <Eye />, text: "UI/UX Design", desc: "Criação de Experiências" },
        { icon: <Cpu />, text: "Performance", desc: "Otimização Extrema" },
        { icon: <Code2 />, text: "Node.js", desc: "Back-end Engine" },
        { icon: <Layers />, text: "Framer Motion", desc: "Animações Fluidas" },
        { icon: <Terminal />, text: "Python", desc: "Scripts e Dados" }
      ]
    },
    projects: {
      title1: "Projetos",
      title2: "em Destaque.",
      desc: "Uma seleção dos meus melhores trabalhos e cases de estudo.",
      list: [
        {
          name: "Lumen",
          desc: "Uma rede social para sonhadores. Aplicação full-stack que conecta usuários através de postagens, perfis e interações comunitárias.",
          tech: "JavaScript",
          repo: "https://github.com/joaoportolan93/Lumen",
          icon: <Cloud className="w-8 h-8 md:w-10 md:h-10 text-cyan-400 stroke-[1.5]" />,
          gradient: "from-cyan-400 to-orange-400",
          slides: [
            { type: 'image', src: '/Lumen 2.png' },
            { type: 'image', src: '/lumen_comunidade.png' },
            { type: 'image', src: '/lumen_explorar.png' },
            { type: 'video', src: '/lumen.mp4' }
          ]
        },
        {
          name: "Needle",
          desc: "Plataforma de reviews musicais focada na comunidade de áudio. Permite aos usuários avaliar, descobrir e catalogar álbuns.",
          tech: "TypeScript",
          repo: "https://github.com/joaoportolan93/Needle",
          icon: <Compass className="w-8 h-8 md:w-10 md:h-10 text-indigo-400 stroke-[1.5]" />,
          gradient: "from-blue-500  to-indigo-500",
          slides: [
            { type: 'image', src: '/Needle.png' },
            { type: 'image', src: '/avaliacao.png' },
            { type: 'image', src: '/lists.png' },
            { type: 'image', src: '/Explorar.png' },
            { type: 'image', src: '/teste_user.png' }
          ]
        },
        {
          name: "Stream",
          desc: "Ferramenta para download contínuo de conteúdos e mídias, com foco em alta performance e design minimalista em multiplataforma.",
          tech: "Python",
          repo: "https://github.com/joaoportolan93/Offstream",
          icon: <Wind className="w-8 h-8 md:w-10 md:h-10 text-pink-400 stroke-[1.5]" />,
          gradient: "from-pink-500 to-orange-400",
          slides: [
            { type: 'image', src: '/Offstream.png' }
          ]
        },
        {
          name: "CRM-Gamificado",
          desc: "Sistema web com lógicas aplicadas de progressão para facilitar o aprendizado e testes relacionados a banco de dados.",
          tech: "PHP",
          repo: "https://github.com/joaoportolan93/CRUD-Gamificado",
          icon: <Dices className="w-8 h-8 md:w-10 md:h-10 text-green-400 stroke-[1.5]" />,
          gradient: "from-green-400 to-purple-500",
          slides: [
            { type: 'image', src: '/crud gamificado.png' }
          ]
        }
      ]
    },
    process: {
      titleLine1: "Engenharia &",
      titleLine2: "Metodologia.",
      steps: [
        { step: '01', title: 'Pesquisa & UX', desc: 'Mapeio a jornada do usuário e estruturo as necessidades reais antes de focar no código.', icon: <Eye className="w-8 h-8 text-cyan-400" /> },
        { step: '02', title: 'Design de Interface', desc: 'Moldo layouts focados em usabilidade, com atenção máxima ao design system e aos detalhes da interface.', icon: <Layout className="w-8 h-8 text-blue-500" /> },
        { step: '03', title: 'Engenharia Front-end', desc: 'Construo projetos com código limpo e otimizado, garantindo sistemas rápidos, escaláveis e de fácil manutenção.', icon: <Cpu className="w-8 h-8 text-fuchsia-500" /> }
      ]
    },
    faq: {
      title: "FAQ's",
      list: [
        { q: "Quem é você e o que você faz?", a: "Sou o João Vitor Portolan, um desenvolvedor Full-stack e UX/UI Designer apaixonado por criar experiências digitais através da programação e do design visualmente limpo." },
        { q: "Com quais tecnologias você trabalha?", a: "Meu arsenal principal inclui React, TypeScript, TailwindCSS no front-end, e Node.js e Python para back-end, dados e scripts. Também utilizo ferramentas de design para UX/UI." },
        { q: "Você está aberto a freelances ou colaborações?", a: "Sim, estou sempre aberto a discutir novos projetos, freelances ou oportunidades de colaboração que sejam desafiadoras construtivas." },
        { q: "Que tipo de projetos você gosta de construir?", a: "Gosto de construir sistemas que unam um design visualmente impactante a uma lógica robusta, desde sites, sistemas e plataformas de conteúdo até ferramentas de alta performance." },
        { q: "Você trabalha sozinho ou em equipe?", a: "Atualmente, estou em uma agência, porém estamos parados por um tempo para uma 'reforma' do site e da forma como vendemos os nossos programas/serviços. Enquanto não voltarmos, estou trabalhando de forma independente!" },
        { q: "Como você aborda um novo projeto?", a: "Começo sempre com pesquisa focada na UX e modelagem das necessidades. Depois, desenvolvo a interface detalhada com atenção ao design system antes de focar na engenharia front-end e no back-end." },
        { q: "O que te torna diferente de outros desenvolvedores?", a: "Minha capacidade de transitar intimamente entre engenharia de software e design de interface. Para mim, uma forte otimização estrutural e uma estética altamente apurada devem e podem sempre andar sempre de mãos dadas." },
        { q: "Você está disponível no momento para trabalho?", a: "Para confirmar a minha disponibilidade atual, a melhor forma com certeza é entrar em contato através do meu LinkedIn, e-mail ou mandando uma DM nas redes sociais." },
        { q: "Qual o seu objetivo a longo prazo?", a: "O meu grande objetivo é continuar criando e lançando produtos digitais inovadores que impactem positivamente a vida das pessoas, e me consolidar ainda mais como referência em unir uma ótima UX/UI com arquiteturas perfeitamente limpas." }
      ]
    },
    footer: {
      titleLine1: "O Próximo",
      titleLine2: "Grande Produto.",
      btnPrimary: "Iniciar Conversa",
      ctaMessage: "Gostou do que viu? Então clique no botão abaixo e vamos planejar algo!"
    },
    universalFooter: {
      terminalLine: "~ jvp_portfolio > npm run dev --status=\"Disponível para novos projetos\"",
      musicLine: "🎵 Ouvindo agora: Lo-fi beats to code to",
      catDesc: "Meow..."
    },
    contact: {
      title: "Contato",
      desc: "Se você tem um projeto em mente ou quer apenas bater um papo, me mande uma mensagem.",
      email: "E-mail",
      github: "GitHub",
      linkedin: "LinkedIn",
      twitter: "Twitter"
    }
  },
  en: {
    hero: {
      role: "Full-stack Developer & Web Design",
      desc: "From interface planning to systems integration. I build ideas and code that just works.",
      btnPrimary: "Contact",
      btnSecondary: "Projects"
    },
    nav: {
      about: "About",
      projects: "Projects",
      contact: "Contact"
    },
    about: {
      titleLine1: "About me",
      titleLine2: "",
      intro1: "Hey there!",
      intro2: "How are you doing? I hope you're doing well!",
      p1: "So, from a young age, I was drawn to computers not just to use them, but to understand what was happening behind the screen. More interested in the logic and fundamentals than just surface-level results, I dove deep into computer science and system architecture.",
      p2: "Professionally, I became known for building solid architectures. Whether designing data flows in the backend or crafting clean interfaces on the frontend, my focus is always on creating predictable, efficient, and easy-to-maintain applications.",
      p3: <>To me, the stack matters much less than the solution. From early ideation to final production, what I deliver is code that solves the problem. Take a look at my<AnimatedLink to="/projects" text="projects" />to get a better idea. And I'm almost always available to build your next idea.</>
    },
    tools: {
      title1: "Core",
      title2: "Tech Stack.",
      desc: "Robust technologies for building applications.",
      list: [
        { icon: <Code2 />, text: "React", desc: "Main UI Library" },
        { icon: <Terminal />, text: "TypeScript", desc: "Safe Typing" },
        { icon: <Layout />, text: "TailwindCSS", desc: "Rapid Styling" },
        { icon: <Eye />, text: "UI/UX Design", desc: "Experience Creation" },
        { icon: <Cpu />, text: "Performance", desc: "Extreme Optimization" },
        { icon: <Code2 />, text: "Node.js", desc: "Back-end Engine" },
        { icon: <Layers />, text: "Framer Motion", desc: "Fluid Animations" },
        { icon: <Terminal />, text: "Python", desc: "Scripts & Data" }
      ]
    },
    projects: {
      title1: "Featured",
      title2: "Projects.",
      desc: "A selection of my best works and case studies.",
      list: [
        {
          name: "Lumen",
          desc: "A social network for dreamers. Full-stack application connecting users through posts, profiles, and community interactions.",
          tech: "JavaScript",
          repo: "https://github.com/joaoportolan93/Lumen",
          icon: <Cloud className="w-8 h-8 md:w-10 md:h-10 text-cyan-400 stroke-[1.5]" />,
          gradient: "from-cyan-400 to-orange-400",
          slides: [
            { type: 'image', src: '/Lumen 2.png' },
            { type: 'image', src: '/lumen_comunidade.png' },
            { type: 'image', src: '/lumen_explorar.png' },
            { type: 'video', src: '/lumen.mp4' }
          ]
        },
        {
          name: "Needle",
          desc: "Music review platform focused on the audio community. Allows users to rate, discover, and catalog albums.",
          tech: "TypeScript",
          repo: "https://github.com/joaoportolan93/Needle",
          icon: <Compass className="w-8 h-8 md:w-10 md:h-10 text-indigo-400 stroke-[1.5]" />,
          gradient: "from-blue-500  to-indigo-500",
          slides: [
            { type: 'image', src: '/Needle.png' },
            { type: 'image', src: '/avaliacao.png' },
            { type: 'image', src: '/lists.png' },
            { type: 'image', src: '/Explorar.png' },
            { type: 'image', src: '/teste_user.png' }
          ]
        },
        {
          name: "Stream",
          desc: "Tool for seamless content and media downloading, focusing on high performance and minimalist cross-platform design.",
          tech: "Python",
          repo: "https://github.com/joaoportolan93/Offstream",
          icon: <Wind className="w-8 h-8 md:w-10 md:h-10 text-pink-400 stroke-[1.5]" />,
          gradient: "from-pink-500 to-orange-400",
          slides: [
            { type: 'image', src: '/Offstream.png' }
          ]
        },
        {
          name: "CRM-Gamified",
          desc: "Web system with applied progression logic to facilitate learning and testing related to databases.",
          tech: "PHP",
          repo: "https://github.com/joaoportolan93/CRUD-Gamificado",
          icon: <Dices className="w-8 h-8 md:w-10 md:h-10 text-green-400 stroke-[1.5]" />,
          gradient: "from-green-400 to-purple-500",
          slides: [
            { type: 'image', src: '/crud gamificado.png' }
          ]
        }
      ]
    },
    process: {
      titleLine1: "Engineering &",
      titleLine2: "Methodology.",
      steps: [
        { step: '01', title: 'Research & UX', desc: 'I map the user journey and structure real needs before focusing on code.', icon: <Eye className="w-8 h-8 text-cyan-400" /> },
        { step: '02', title: 'Interface Design', desc: 'I mold layouts focused on usability, paying maximum attention to the design system and interface details.', icon: <Layout className="w-8 h-8 text-blue-500" /> },
        { step: '03', title: 'Front-end Engineering', desc: 'I build projects with clean, optimized code, ensuring fast, scalable, and easy-to-maintain systems.', icon: <Cpu className="w-8 h-8 text-fuchsia-500" /> }
      ]
    },
    faq: {
      title: "FAQ's",
      list: [
        { q: "Who are you and what do you do?", a: "I'm João Vitor Portolan, a Full-stack developer and UX/UI Designer passionate about crafting digital experiences through code and clean design." },
        { q: "What technologies do you work with?", a: "My main stack includes React, TypeScript, and TailwindCSS on the front-end, along with Node.js and Python for back-end and data tasks. I also use modern design tools for UX/UI." },
        { q: "Are you open to freelance or collaboration?", a: "Yes, I'm always open to discussing new freelance projects or challenging collaboration opportunities." },
        { q: "What type of projects do you enjoy building?", a: "I enjoy building systems that combine visually striking design with robust logic—from, web sites, applications and content platforms to high-performance tools." },
        { q: "Do you work alone or in a team?", a: "Currently, I'm at an agency, but we're on a temporary break to revamp our website and the way we sell our programs/services. Until we return, I'm working independently!" },
        { q: "How do you approach a new project?", a: "I start with UX research and mapping out needs. Then, I craft the interface paying close attention to the design system before moving into front-end and back-end engineering." },
        { q: "What makes you different from other developers?", a: "My ability to seamlessly bridge between engineering and interface design. I believe extreme optimization and refined aesthetics must always go hand-in-hand." },
        { q: "Are you currently available for work?", a: "To check my current availability, the best way is to reach out via LinkedIn, email, or my social media." },
        { q: "What is your long-term goal?", a: "My goal is to keep creating innovative digital products that positively impact people's lives, and to further establish myself as a reference in uniting UX/UI with clean architectures." }
      ]
    },
    footer: {
      badge: "End of Visual Journey",
      titleLine1: "The Next",
      titleLine2: "Great Product.",
      btnPrimary: "Start Conversation",
      ctaMessage: "Liked what you saw? Click the button below and let's plan something!"
    },
    universalFooter: {
      terminalLine: "~ jvp_portfolio > npm run start --status=\"Available for new projects\"",
      musicLine: "🎵 Listening to: Lo-fi beats to code to",
      catDesc: "Meow..."
    },
    contact: {
      title: "Contact",
      desc: "If you have a project in mind or just want to chat, send me a message.",
      email: "E-mail",
      github: "GitHub",
      linkedin: "LinkedIn",
      twitter: "Twitter"
    }
  }
};
