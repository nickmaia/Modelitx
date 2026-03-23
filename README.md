# Modelitx

**Modelitx** é um aplicativo web responsivo desenvolvido para gerar funções matemáticas a partir de dados reais, com foco no apoio ao ensino e à aprendizagem de **Cálculo Diferencial e Integral**. O sistema integra uma interface web para interação com o usuário e um serviço de processamento em **FastAPI**, permitindo a geração de funções e representações gráficas a partir de dados fornecidos em arquivos `.csv`.

## Visão geral

O ensino de Cálculo Diferencial e Integral frequentemente apresenta dificuldades associadas ao alto nível de abstração dos conceitos de função, limite, derivada e integral. Nesse contexto, o Modelitx foi desenvolvido como uma ferramenta computacional educacional capaz de aproximar dados reais de representações matemáticas, contribuindo para práticas pedagógicas mais contextualizadas.

A proposta do software consiste em permitir que estudantes e docentes forneçam dados observados, escolham uma categoria funcional e obtenham, como resultado, uma função ajustada e sua representação gráfica. Dessa forma, o sistema reduz a complexidade operacional do ajuste e desloca o foco para a interpretação matemática e pedagógica do resultado.

## Objetivo do software

O Modelitx tem como objetivo gerar funções matemáticas a partir de dados reais, auxiliando professores e alunos no processo de ensino-aprendizagem de Cálculo Diferencial e Integral.

De forma mais específica, o software foi desenvolvido para:

- transformar dados reais em funções ajustadas;
- facilitar a visualização gráfica de relações entre variáveis;
- apoiar a interpretação de comportamentos funcionais;
- oferecer uma ferramenta web responsiva, intuitiva e acessível;
- contribuir para práticas pedagógicas contextualizadas no ensino de cálculo.

## Contribuição científica

A principal contribuição científica do Modelitx está na proposição de uma ferramenta computacional educacional voltada à geração de funções matemáticas a partir de dados reais em ambiente web. O software organiza um fluxo metodológico em que o usuário seleciona uma categoria funcional, envia dados experimentais e recebe uma função ajustada acompanhada de visualização gráfica.

Sua contribuição metodológica pode ser descrita em três dimensões principais:

1. **Integração entre dados reais e funções matemáticas**;
2. **Automatização do ajuste funcional em arquitetura web**;
3. **Aplicação pedagógica no ensino de Cálculo Diferencial e Integral**.

Dessa forma, o Modelitx caracteriza-se como uma ferramenta com valor metodológico e educacional, distinguindo-se de repositórios compostos apenas por scripts simples ou materiais estáticos.

## Problema abordado

No ensino de cálculo, a determinação de uma função que represente adequadamente um conjunto de dados reais é um problema matemático relevante, mas normalmente tratado por técnicas que extrapolam o escopo introdutório da disciplina. Isso cria uma barreira entre os dados observados e a exploração pedagógica dos conceitos matemáticos.

O Modelitx foi desenvolvido para atuar como mediação computacional entre esses dois elementos. Assim, estudantes e docentes podem concentrar-se na interpretação da curva gerada, na análise gráfica e na relação com conceitos como derivada e integral.

## Metodologia

O desenvolvimento do Modelitx foi realizado em arquitetura web com separação entre **Front-End** e **Back-End**, permitindo modularidade, reuso e organização das responsabilidades do sistema.

### Etapas metodológicas

O funcionamento geral do software segue as etapas abaixo:

1. seleção da categoria de função desejada;
2. envio de um arquivo `.csv` contendo dados reais;
3. leitura e estruturação inicial dos dados no Front-End;
4. envio das informações ao Back-End via API;
5. processamento matemático da requisição;
6. geração da função ajustada;
7. retorno da resposta ao Front-End;
8. exibição da função e do gráfico correspondente ao usuário.

### Categorias de funções implementadas

O sistema disponibiliza seis categorias de funções para ajuste:

- Linear
- Exponencial
- Sigmoide
- Normal
- Polinomial de segunda ordem
- Polinomial de terceira ordem

### Formulação matemática

De forma geral, o problema tratado pelo software pode ser representado como o ajuste de uma função \( f(x;\theta) \) a um conjunto de dados observados \( (x_i, y_i) \), buscando parâmetros \( \theta \) que minimizem o erro entre os valores observados e os valores estimados:

$$
\hat{\theta} = \arg\min_{\theta} \sum_{i=1}^{n} \left( y_i - f(x_i;\theta) \right)^2
$$

Essa formulação representa o problema geral de ajuste de curva por minimização do erro quadrático.

#### Função linear

$$
f(x) = ax + b
$$

#### Função exponencial

$$
f(x) = a e^{bx}
$$

#### Função sigmoide

$$
f(x) = \frac{L}{1 + e^{-k(x - x_0)}}
$$

#### Função normal

$$
f(x) = \frac{1}{\sigma \sqrt{2\pi}} \exp\left( -\frac{(x-\mu)^2}{2\sigma^2} \right)
$$

#### Polinômio de segunda ordem

$$
f(x) = ax^2 + bx + c
$$

#### Polinômio de terceira ordem

$$
f(x) = ax^3 + bx^2 + cx + d
$$

### Relação com o ensino de cálculo

Uma vez obtida a função ajustada, o software permite discutir conceitos importantes do cálculo, como taxa de variação, comportamento local e acumulação. Assim, uma função \( f(x) \) estimada a partir dos dados pode ser explorada em termos de derivada e integral:

$$
f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h}
$$

$$
\int_a^b f(x)\,dx
$$

Essas expressões permitem relacionar o ajuste funcional com interpretações geométricas e analíticas importantes no ensino de Cálculo Diferencial e Integral.

## Arquitetura do sistema

O Modelitx foi estruturado em duas camadas principais.

### Front-End

A camada de interface foi desenvolvida para oferecer interação simples e visual ao usuário. Ela é responsável por:

- seleção do tipo de função;
- leitura de arquivos `.csv`;
- envio dos dados para o serviço de API;
- exibição da função retornada;
- visualização do gráfico correspondente;
- adaptação responsiva para diferentes dispositivos.

### Back-End

A camada de processamento foi implementada com **FastAPI**, responsável por:

- receber os dados enviados pela interface;
- processar a solicitação;
- executar a lógica de geração e ajuste funcional;
- devolver os resultados estruturados ao Front-End.

### Comunicação entre camadas

A comunicação entre Front-End e Back-End ocorre por meio de uma **API HTTP**, permitindo que a interface envie dados e consuma as respostas produzidas pelo serviço de processamento.

## Tecnologias utilizadas

As principais tecnologias do projeto incluem:

### Front-End
- JavaScript
- HTML
- CSS
- React
- react-papaparse

### Back-End
- Python
- FastAPI

### Ferramentas complementares
- Figma
- Visual Studio Code
- Vercel

## Funcionalidades

O Modelitx oferece as seguintes funcionalidades principais:

- seleção da categoria funcional;
- upload de arquivos `.csv`;
- leitura de dados reais;
- envio dos dados para processamento;
- geração automática de função;
- exibição da função ajustada;
- plotagem e visualização do gráfico;
- interface responsiva.

## Estrutura do projeto

A estrutura atual do repositório está organizada da seguinte forma:

```txt
MODELITX/
├── backend/
│   ├── api/
│   └── requirements.txt
├── frontend/
│   ├── public/
│   └── src/
│   ├── package.json
│   └── yarn.lock
├── .gitignore
├── README.md

```

## Instalação

### 1. Clonagem do repositório

```bash
git clone https://github.com/nickmaia/Modelitx.git
cd Frontend-Modelitx
```

### 2. Instalação do Front-End

```bash
npm install
```

ou

```bash
yarn install
```

### 3. Instalação do Back-End

```bash
cd backend
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

No Windows:

```bash
cd backend
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
```

## Execução

### 1. Executar o Back-End

A execução do serviço FastAPI pode seguir o padrão abaixo:

```bash
cd backend
uvicorn api.main:app --reload
```

### 2. Executar o Front-End

Em outro terminal:

```bash
cd frontend
npm install
npm start
```

ou

```bash
cd frontend
yarn install
yarn start
```

## Exemplo de uso

O uso do sistema pode ser descrito da seguinte forma:

1. o usuário acessa a interface web;
2. seleciona a categoria funcional desejada;
3. envia um arquivo `.csv` com os dados observados;
4. a interface encaminha os dados ao serviço FastAPI;
5. o Back-End processa a requisição;
6. a função ajustada e o gráfico são exibidos na aplicação;
7. o usuário interage com a visualização obtida.

### Exemplo de entrada

```csv
x,y
1,2.0
2,3.9
3,6.1
4,8.0
5,10.2
```

### Exemplo de saída esperada

- função ajustada dentro da categoria selecionada;
- gráfico com os pontos experimentais;
- curva correspondente ao modelo estimado;
- visualização interativa do resultado.

## Interface do sistema

A interface foi desenvolvida com foco em clareza, organização lógica das etapas e facilidade de uso. As telas foram estruturadas para guiar o usuário desde a seleção da função até a visualização do resultado final.

Também foi prevista adaptação responsiva para notebooks, tablets e smartphones.

<img width="579" height="271" alt="{D8B6B106-EF2F-4E45-896E-C8FF0CC65841}" src="https://github.com/user-attachments/assets/99658048-d544-40a7-a3b9-e9ba0482610a" />

<img width="580" height="269" alt="{82FCCA65-DBC2-48C2-8B3A-06E71E3F2560}" src="https://github.com/user-attachments/assets/b5625ccc-fc22-4110-88fe-b4fed66facda" />

<img width="581" height="270" alt="{4608705B-2BED-41E9-86F5-77487738B8FD}" src="https://github.com/user-attachments/assets/c40884ba-dc68-4999-a65b-fd59edbd9579" />

<img width="577" height="272" alt="{9D94F27A-58BA-43C1-86E0-EA86C30A99BC}" src="https://github.com/user-attachments/assets/8fa859f8-be51-43ce-aef0-c97589ba29cd" />


## Resultados

O sistema encontra-se estruturado para operar em arquitetura integrada entre interface web e API de processamento. Essa organização permite separar responsabilidades, melhorar a manutenção do código e sustentar a proposta metodológica de geração de funções a partir de dados reais em ambiente educacional.

## Potencial de aplicação

O Modelitx pode ser utilizado em contextos como:

- ensino de Cálculo Diferencial e Integral;
- modelagem matemática;
- estudo de funções reais;
- visualização gráfica de dados;
- práticas pedagógicas contextualizadas;
- demonstrações educacionais em ambiente web.

## Limitações

Entre as limitações observadas, destacam-se:

- dependência da qualidade dos dados enviados pelo usuário;
- uso de categorias funcionais previamente definidas;
- necessidade de documentação adicional sobre os detalhes numéricos da implementação;
- possibilidade de ampliação da validação pedagógica em estudos futuros.

## Trabalhos futuros

As extensões possíveis para o projeto incluem:

- ampliação do conjunto de funções disponíveis;
- melhorias na experiência do usuário;
- exportação de resultados;
- comparação automática entre modelos;
- geração de relatórios didáticos;
- ampliação da documentação técnica da API.

## Acesso

- Aplicação web: https://modelitx.vercel.app
- Repositório: https://github.com/nickmaia/Modelitx

## Autores

- **Nicole Maia Argondizzi** — autora principal / bolsista
- **Leandro Cruvinel Lemes** — orientador

## Como citar

```txt
ARGONDIZZI, Nicole Maia; LEMES, Leandro Cruvinel. Modelitx: um aplicativo web
gerador de funções a partir de dados reais para o uso no ensino de Cálculo
Diferencial e Integral. Projeto de pesquisa, 2022.
Disponível em: https://modelitx.vercel.app
```

## Licença

```txt
MIT License
```
