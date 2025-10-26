import type { Messages } from "../types";

const description =
  "Desenvolvedor web full-stack dedicado a transformar ideias em experiências digitais inovadoras. Com experiência em React, Next.js, Node.js, TypeScript, Python e Django, crio soluções web completas e robustas, do front-end ao back-end.";

export default {
  description,
  manifest: {
    description: "Site pessoal de Nicolas Contiero.",
  },
  pageError: {
    goBackToHome: "Voltar para a <link>página inicial</link>.",
  },
  pageNotFound: {
    title: "Página não encontrada",
    description: "A página solicitada não pode ser encontrada.",
  },
  navbar: {
    logoAlt: "Imagem de {name}",
    toggleMenu: "Alternar menu de navegação",
    toggleTheme: "Alternar tema",
    locale: {
      changeLocale: "Mudar idioma",
      currentLanguage: "Idioma atual: Português",
      langLabel: "Português",
    },
  },
  sections: {
    home: {
      id: "home",
      navbarLabel: "Início",
      title: "Olá, eu sou o Nicolas",
      description,
      btnSectionId: "projects",
      btnSectionLabel: "Projetos",
    },
    about: {
      id: "about",
      navbarLabel: "Sobre",
      title: "Sobre mim",
      description:
        "Aqui você encontrará mais informações sobre mim, o que faço e minhas habilidades atuais, principalmente em programação e tecnologia.",
      btnSectionId: "contact",
      btnSectionLabel: "Contato",
      content: {
        getToKnowMe: {
          title: "Conheça-me!",
          content: [
            "Sou um desenvolvedor web com experiência em tecnologias front-end como React, Next.js, HTML5, CSS3 e JavaScript. Explore alguns dos meus trabalhos na seção Projetos.",
            "Tenho experiência em desenvolvimento back-end, usando Node.js, TypeScript, Python e Django para criar aplicativos robustos e escaláveis.",
            "Gosto de criar sites e aplicativos funcionais, responsivos e fáceis de usar. Gosto de resolver problemas e encontrar soluções criativas para os desafios do desenvolvimento web. Sempre me esforço para me manter atualizado sobre as últimas novidades e tendências do mercado web.",
            "Sou um desenvolvedor orientado a resultados, apaixonado por aprender novas tecnologias e aplicá-las aos meus projetos para criar soluções eficientes.",
          ],
        },
        mySkills: {
          title: "Minhas Habilidades",
        },
      },
    },
    projects: {
      id: "projects",
      navbarLabel: "Projetos",
      title: "Projetos",
      description:
        "Aqui você encontrará alguns dos projetos pessoais que criei.",
      viewMore: "Ver mais projetos",
      viewProject: "Ver projeto",
      lastUpdated: "Última atualização: {date}",
      goToProjects: "Ir para a página de projetos",
    },
    contact: {
      id: "contact",
      navbarLabel: "Contato",
      title: "Contato",
      description:
        "Sinta-se à vontade para entrar em contato comigo enviando o formulário abaixo e entrarei em contato com você o mais breve possível.",
      form: {
        invalidData: "Dados inválidos",
        unknownError: "Um erro desconhecido ocorreu",
        somethingWentWrong:
          "Algo deu errado. Por favor, tente novamente mais tarde.",
        success: "Mensagem enviada com sucesso!",
        name: {
          label: "Nome",
          placeholder: "Digite seu nome",
          error: "O nome deve ter pelo menos 2 caracteres.",
        },
        email: {
          label: "E-mail",
          placeholder: "Digite seu e-mail",
          error: "Endereço de e-mail inválido.",
        },
        message: {
          label: "Mensagem",
          placeholder: "Digite sua mensagem",
          error: "A mensagem deve ter pelo menos 5 caracteres.",
        },
        submit: "Enviar",
      },
    },
  },
  footer: {
    rightsReserved: "Todos os direitos reservados.",
  },
} satisfies Messages;
