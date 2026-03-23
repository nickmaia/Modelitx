# Modelitx

**Modelitx** é um aplicativo web responsivo desenvolvido para gerar funções matemáticas a partir de dados reais, com foco no apoio ao ensino e à aprendizagem de **Cálculo Diferencial e Integral**. O software foi concebido para reduzir o nível de abstração presente no estudo de funções, permitindo que estudantes e docentes transformem dados observados em modelos funcionais e representações gráficas de maneira simples, visual e interativa.

## Visão geral

O ensino de Cálculo Diferencial e Integral frequentemente apresenta dificuldades associadas à abstração dos conceitos de função, limite, derivada e integral. Nesse contexto, o Modelitx foi proposto como uma ferramenta computacional educacional capaz de aproximar dados reais de representações matemáticas, contribuindo para práticas pedagógicas mais contextualizadas.

A proposta do software dialoga com abordagens de ensino que valorizam a modelagem matemática e o uso de tecnologias digitais como apoio à aprendizagem. Em vez de exigir do usuário conhecimentos avançados sobre estimação de parâmetros ou ajuste de curvas, o sistema automatiza parte desse processo e apresenta o resultado em uma interface acessível.

## Objetivo do software

O objetivo do Modelitx é gerar funções matemáticas a partir de dados reais fornecidos pelo usuário, auxiliando professores e alunos no processo de ensino-aprendizagem de Cálculo Diferencial e Integral.

De modo mais específico, o software foi desenvolvido para:

- transformar dados reais em funções ajustadas;
- facilitar a visualização gráfica de relações entre variáveis;
- apoiar a interpretação de comportamentos funcionais;
- oferecer uma ferramenta web responsiva e intuitiva;
- contribuir para práticas pedagógicas baseadas em situações reais.

## Contribuição científica

A principal contribuição científica do Modelitx está na proposição de uma ferramenta computacional voltada especificamente para o ensino de cálculo por meio da geração de funções a partir de dados reais. O software não se limita à exibição de gráficos estáticos, pois implementa um fluxo de processamento no qual o usuário seleciona uma categoria funcional, fornece dados experimentais e recebe uma função ajustada acompanhada de visualização gráfica.

A contribuição metodológica do projeto pode ser descrita em três eixos:

1. **Integração entre dados reais e funções matemáticas**.
2. **Automatização do ajuste funcional em ambiente web**.
3. **Aplicação educacional no ensino de Cálculo Diferencial e Integral**.

Dessa forma, o Modelitx constitui uma ferramenta com caráter metodológico e educacional, distinguindo-se de repositórios compostos apenas por scripts simples, páginas estáticas ou materiais sem inovação algorítmica ou procedimental.

## Problema abordado

No contexto do ensino de cálculo, a determinação de uma função que represente adequadamente um conjunto de dados reais é um problema matemático relevante, mas geralmente tratado por técnicas que fogem ao escopo introdutório da disciplina. Isso torna necessária a existência de ferramentas que permitam explorar o comportamento funcional sem exigir do estudante domínio formal de métodos avançados de ajuste.

O Modelitx foi desenvolvido justamente para atuar nesse ponto de mediação entre os dados observados e a função matemática correspondente. Assim, o foco pedagógico pode permanecer na interpretação da curva gerada, na análise do gráfico e na relação com conceitos fundamentais do cálculo.

## Metodologia

O desenvolvimento do Modelitx foi realizado com base em uma arquitetura web composta por **Front-End** e **Back-End**, permitindo separação entre interface, processamento e comunicação de dados.

### Etapas metodológicas

O funcionamento geral do software segue as etapas abaixo:

1. Seleção da categoria de função desejada.
2. Envio de um arquivo `.csv` contendo dados reais.
3. Leitura e estruturação dos dados recebidos.
4. Processamento das informações no Back-End.
5. Geração da função ajustada segundo a categoria escolhida.
6. Plotagem do gráfico com os pontos observados e a curva gerada.
7. Exibição interativa dos resultados para o usuário.

### Categorias de funções implementadas

O Modelitx disponibiliza seis categorias de funções para ajuste:

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

Essa formulação expressa o problema clássico de ajuste de curva por minimização do erro quadrático.

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

A função ajustada pelo sistema pode ser explorada pedagogicamente em tópicos de cálculo, como taxa de variação, comportamento local e acumulação. Por exemplo, uma vez obtida a função \( f(x) \), podem ser discutidos conceitos como derivada e integral:

$$
f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h}
$$

$$
\int_a^b f(x)\,dx
$$

Essas expressões permitem relacionar o ajuste funcional com interpretações geométricas e analíticas relevantes no ensino de Cálculo Diferencial e Integral.

## Arquitetura do sistema

O Modelitx foi desenvolvido em arquitetura web, com divisão entre camadas de interface e processamento.

### Front-End

A camada de interface foi desenvolvida com:

- JavaScript
- HTML
- CSS

Essa camada é responsável pela experiência do usuário, pela responsividade e pela interação com os elementos da aplicação.

### Back-End

A camada de processamento foi implementada com:

- Python
- Django

O Back-End realiza o tratamento dos dados recebidos, executa o processamento necessário para geração da função e devolve os resultados para a interface.

### Comunicação entre as camadas

A integração entre as partes externa e interna do sistema ocorre por meio de uma **API**, permitindo o compartilhamento estruturado de dados entre Front-End e Back-End.

## Tecnologias utilizadas

Segundo a documentação do projeto, as principais tecnologias utilizadas foram:

- Python
- Django
- JavaScript
- HTML
- CSS
- NumPy
- SciPy
- Figma
- Visual Studio Code
- Vercel
- Heroku
- react-papaparse

## Funcionalidades

O Modelitx oferece as seguintes funcionalidades principais:

- seleção do tipo de função a ser ajustada;
- upload de arquivos `.csv`;
- leitura e estruturação de dados reais;
- geração automática de função;
- plotagem do gráfico correspondente;
- visualização interativa da curva e dos pontos;
- interface responsiva para diferentes dispositivos.

## Instalação
### 1. Clonagem do repositório

```bash
git clone https://github.com/nickmaia/Frontend-Modelitx.git
cd Frontend-Modelitx
```

### 2. Instalação das dependências do Front-End

```bash
npm install
```

### 3. Execução do Front-End

```bash
npm start
```

### 4. Configuração do Back-End

Caso o Back-End esteja em repositório separado, a execução pode seguir uma estrutura como:

```bash
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
python manage.py runserver
```

### 5. Variáveis de ambiente

Se necessário, devem ser configuradas variáveis relacionadas a:

- URL da API;
- ambiente de desenvolvimento;
- credenciais ou chaves do Django;
- endereços de serviços externos.

## Exemplo de uso

O fluxo de uso do Modelitx pode ser descrito da seguinte forma:

1. O usuário acessa a aplicação web.
2. O usuário seleciona a categoria de função desejada.
3. Um arquivo `.csv` é enviado para a plataforma.
4. Os dados são processados no Back-End.
5. A função gerada é exibida juntamente com o gráfico correspondente.
6. O usuário pode interagir com a visualização produzida.

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

- Função ajustada dentro da categoria selecionada;
- gráfico contendo os pontos experimentais;
- curva correspondente ao modelo estimado.

## Interface do sistema

A interface foi desenvolvida com foco em clareza, organização lógica das etapas e facilidade de uso. As telas foram estruturadas de modo a tornar compreensível o fluxo de seleção de função, envio de dados e visualização do resultado.

Também foi prevista adaptação responsiva para diferentes dispositivos, incluindo notebooks, tablets e smartphones.

## Resultados

O aplicativo encontra-se operacional, sendo capaz de gerar gráficos e funções a partir da inserção de arquivos `.csv`. O relatório também destaca a finalização do design e o bom funcionamento do fluxo de versionamento e sincronização entre as camadas do sistema.

Além disso, o projeto apresenta potencial para futuras pesquisas comparativas com outras plataformas voltadas à geração de funções a partir de dados reais.

## Potencial de aplicação

O Modelitx pode ser utilizado em contextos como:

- ensino de Cálculo Diferencial e Integral;
- modelagem matemática;
- estudo de funções reais;
- visualização gráfica de dados;
- práticas pedagógicas contextualizadas.

## Limitações

Entre as limitações observadas, destacam-se:

- uso de categorias funcionais previamente definidas;
- dependência da qualidade dos dados fornecidos;
- necessidade de documentação adicional sobre detalhes numéricos da implementação;
- possibilidade de expansão da validação pedagógica em estudos futuros.

## Trabalhos futuros

As extensões possíveis para o projeto incluem:

- ampliação do conjunto de funções disponíveis;
- comparação automática entre modelos;
- exportação de gráficos e resultados;
- geração de relatórios didáticos;
- novas investigações sobre impacto pedagógico no ensino de cálculo.

## Estrutura sugerida do projeto

```txt
Modelitx/
├── public/
├── src/
├── .gitignore
├── README.md
├── package.json
├── yarn.lock
└── LICENSE
```

## Repositórios e acesso

- Aplicação web: https://modelitx.vercel.app
- Repositório do Front-End: https://github.com/nickmaia/Frontend-Modelitx

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
