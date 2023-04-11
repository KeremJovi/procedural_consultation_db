import ListProcesses from "../src/app/services/ListProcesses"
import {IProcess} from "../src/typeConf"



export const makeSutList = (numProcess: string, court: string) => {
  const sut = new ListProcesses(numProcess, court)

  return {
    sut
  }
}



export const processMock = {
  numProcess: "1001234-56.2023.8.13.0123",
  court: 'TJMG',
  description: "A falência da empresa foi um golpe duro para todos os funcionários. Muitos de nós trabalhamos lá por anos e agora nos encontramos sem emprego e sem fonte de renda.",
  startDate: "2023-03-01",
  movements: [
    {
      updateDate: "2023-03-15",
      updateDescription: "Infelizmente, a falência é uma realidade para muitas empresas nos dias de hoje. A concorrência acirrada e as mudanças constantes no mercado tornam difícil manter um negócio lucrativo a longo prazo."
    },
    {
      updateDate: "2023-03-31",
      updateDescription: "A falência não afeta apenas os funcionários, mas também os clientes e fornecedores da empresa. Muitas pessoas podem perder dinheiro ou ter que lidar com problemas legais como resultado da falência."
    },
    {
      updateDate: "2023-04-05",
      updateDescription: "É importante lembrar que, embora a falência possa ser uma situação difícil de enfrentar, existem recursos e suporte disponíveis para ajudar aqueles que foram afetados. É importante procurar ajuda e orientação de profissionais qualificados para lidar com os aspectos legais e financeiros da situação."
    }
  ],
  statusProcess: [
    {
      status: "A falência da empresa foi um golpe duro para todos os funcionários."
    },
    {
      status: "Infelizmente, a falência é uma realidade para muitas empresas nos dias de hoje."
    },
    {
      status: "A falência não afeta apenas os funcionários, mas também os clientes e fornecedores da empresa."
    },
    {
      status: "É importante lembrar que, embora a falência possa ser uma situação difícil de enfrentar, existem recursos e suporte disponíveis para ajudar aqueles que foram afetados."
    }
  ],
  creditor: {
    name: "Maria Silva",
    link: "https://example.com/creditor/Maria"
  },
  appellant: {
    name: "Pedro Santos",
    link: "https://example.com/appellant/Pedro"
  },
  attorney: [
    {
      name: "Juliana Almeida",
      link: "https://example.com/attorney/Juliana"
    },
    {
      name: "Lucas Oliveira",
      link: "https://example.com/attorney/Lucas"
    }
  ]
}


export const arrayProcesses = [
  {
    numProcess: "1001234-56.2023.8.13.0123",
    court: 'TJMG',
    description: "A falência da empresa foi um golpe duro para todos os funcionários. Muitos de nós trabalhamos lá por anos e agora nos encontramos sem emprego e sem fonte de renda.",
    startDate: "2023-03-01",
    movements: [
      {
        updateDate: "2023-03-15",
        updateDescription: "Infelizmente, a falência é uma realidade para muitas empresas nos dias de hoje. A concorrência acirrada e as mudanças constantes no mercado tornam difícil manter um negócio lucrativo a longo prazo."
      },
      {
        updateDate: "2023-03-31",
        updateDescription: "A falência não afeta apenas os funcionários, mas também os clientes e fornecedores da empresa. Muitas pessoas podem perder dinheiro ou ter que lidar com problemas legais como resultado da falência."
      },
      {
        updateDate: "2023-04-05",
        updateDescription: "É importante lembrar que, embora a falência possa ser uma situação difícil de enfrentar, existem recursos e suporte disponíveis para ajudar aqueles que foram afetados. É importante procurar ajuda e orientação de profissionais qualificados para lidar com os aspectos legais e financeiros da situação."
      }
    ],
    statusProcess: [
      {
        status: "A falência da empresa foi um golpe duro para todos os funcionários."
      },
      {
        status: "Infelizmente, a falência é uma realidade para muitas empresas nos dias de hoje."
      },
      {
        status: "A falência não afeta apenas os funcionários, mas também os clientes e fornecedores da empresa."
      },
      {
        status: "É importante lembrar que, embora a falência possa ser uma situação difícil de enfrentar, existem recursos e suporte disponíveis para ajudar aqueles que foram afetados."
      }
    ],
    creditor: {
      name: "Maria Silva",
      link: "https://example.com/creditor/Maria"
    },
    appellant: {
      name: "Pedro Santos",
      link: "https://example.com/appellant/Pedro"
    },
    attorney: [
      {
        name: "Juliana Almeida",
        link: "https://example.com/attorney/Juliana"
      },
      {
        name: "Lucas Oliveira",
        link: "https://example.com/attorney/Lucas"
      }
    ]
  },
  {
    numProcess: "5001682-88.2020.8.13.0673",
    court: 'TJRJ',
    description: "Fui atropelado por um motorista bêbado enquanto caminhava pela rua. Fiquei gravemente ferido e precisei ser hospitalizado por várias semanas. Ainda estou em recuperação e enfrentando desafios físicos e emocionais",
    startDate: "2021-03-15",
    movements: [{
      updateDate: "2021-03-20",
      updateDescription: "Ser vítima de um acidente de trânsito é uma experiência traumática e devastadora. Além do impacto físico imediato, pode ter um impacto duradouro na vida da vítima. É importante buscar ajuda médica e jurídica imediatamente após um acidente para garantir a melhor recuperação possível."
    },
    {
      updateDate: "2021-03-30",
      updateDescription: "O motorista que me atropelou estava claramente em estado de embriaguez. É inaceitável que alguém coloque em risco a vida de outras pessoas dessa maneira. Espero que a justiça seja feita e que esse motorista seja responsabilizado por suas ações."
    },
    {
      updateDate: "2021-04-10",
      updateDescription: "Estou lutando para lidar com as consequências desse acidente. Minha vida mudou completamente e estou enfrentando desafios físicos e emocionais diários. É importante que as vítimas de acidentes de trânsito tenham acesso a recursos de suporte e tratamento para ajudar na recuperação."
    },
    {
      updateDate: "2021-04-20",
      updateDescription: "Em resumo, é importante que os motoristas ajam com responsabilidade e não coloquem em risco a vida de outras pessoas. E para as vítimas de acidentes de trânsito, é crucial buscar ajuda e apoio para se recuperar e seguir em frente."
    },
    ],
    statusProcess: [{
      status: "Ser vítima de um acidente de trânsito é uma experiência traumática e devastadora.",
    },
    {
      status: "O motorista que me atropelou estava claramente em estado de embriaguez.",
    },
    {
      status: "Estou lutando para lidar com as consequências desse acidente.",
    },
    {
      status: "Em resumo, é importante que os motoristas ajam com responsabilidade e não coloquem em risco a vida de outras pessoas.",
    },
    {
      status: "E para as vítimas de acidentes de trânsito, é crucial buscar ajuda e apoio para se recuperar e seguir em frente.",
    }
    ],
    creditor: {
      name: "Juliana Costa",
      link: "https://example.com/appellant/Juliana"
    },
    appellant: {
      name: "Pedro Rodrigues",
      link: "https://example.com/appellant/Pedro"
    },
    attorney: [
      {
        name: "Fernanda Silva",
        link: "https://example.com/appellant/Fernanda"
      },
      {
        name: "Rafael Santos",
        link: "https://example.com/appellant/Rafael"
      }
    ]
  }

]


