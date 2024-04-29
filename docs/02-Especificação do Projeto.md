# Especificações do Projeto

Este projeto foi elaborado pela equipe após a detecção da necessidade de alguns possíveis usuários. O grupo realizou pesquisas e observação de pessoas, suas rotinas diárias e suas necessidades para sugestão de como melhor atendê-los. Com isso, foram estabelecidas as personas, as histórias e os requisitos do projeto, conforme detalhado a seguir.

## Personas

A seguir são apresentadas as personas que estão envolvidas no desenvolvimento desse projeto, criadoras de histórias que guiarão o estabelecimento de requisitos e a  construção das funcionalidades desse sistema. 

|<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t4-inspirasabor/assets/75648729/4f8a4a4c-0b7e-4559-99f6-dfd8c84b0fca" width="278"/>| Maria Luísa Silva | 
|-----------------------------------------|---------------------------------|
|**Idade** |49  anos
|**Ocupação** | Dona de Casa
|**Histórico** | Maria sempre desempenhou o papel de cozinheira em sua família. Sua busca por praticidade e agilidade, especialmente durante as refeições cotidianas, reflete seu apreço por soluções simples. Criada em um ambiente onde a culinária caseira era reverenciada, ela nutre um amor especial por experimentar novas receitas e pratos. Seus hobbies além de cozinhar  incluem jardinagem e assistir novelas.
|**Desafios** |-  Encontrar boas  receitas . <br> -  Lidar com aplicativos de forma mais eficaz e organizados, já que não possui grande habilidade com tecnologia.

|<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t4-inspirasabor/assets/75648729/7aa4d646-7ad6-4091-a533-bd16738cf78b" width="230"/>| Ricardo Bastos  | 
|-----------------------------------------|---------------------------------|
|**Idade** |30 anos
|**Ocupação** |Engenheiro de Automação
|**Histórico** |Ricardo é um entusiasta da culinária que adora cozinhar e compartilhar suas receitas favoritas, especialmente as fitness, pois também se preocupa com a saúde. Nas horas vagas, ele gosta de pedalar, o que complementa sua busca por um estilo de vida saudável e ativo. Sua habilidade com aplicativos é notável, e ele está constantemente em busca de novas maneiras de interagir socialmente.  Criado em um ambiente urbano, ele sempre esteve conectado à tecnologia desde jovem, explorando diferentes formas de uso em seu tempo livre.
|**Desafios** |- Ele tem o desejo de compartilhar suas receitas em uma plataforma especializada, optando por um aplicativo específico em vez do Instagram.<br>- Encontrar receitas saudáveis.

|<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t4-inspirasabor/assets/75648729/4380128d-6417-4359-8e42-25314e7c4148" width="600"/>|  Manoela Carlos  | 
|-----------------------------------------|---------------------------------|
|**Idade** |25  anos
|**Ocupação** | Estudante de Medicina
|**Histórico** |Ela procura por receitas simples e práticas para preparar enquanto equilibra os estudos e o trabalho de meio período no hospital. Vindo de uma família com habilidades culinárias excepcionais, onde a comida sempre ocupou um lugar importante, Manoela lamenta não ter tido tempo para aprender a cozinhar antes de sair de casa.
|**Desafios** |- Encontrar receitas simples que se encaixem em seu estilo de vida agitado.<br>- Ela está em busca de receitas que possam ser congeladas sem perder o sabor, já que costuma preparar marmitas para a semana toda.

|<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t4-inspirasabor/assets/75648729/33b0e01a-439e-411b-b277-92b0a34c538f" width="756"/>| Carlos Augusto| 
|-----------------------------------------|---------------------------------|
|**Idade** |50  anos
|**Ocupação** |  Gerente de Vendas
|**Histórico** |Carlos, recentemente divorciado e sem experiência na cozinha, nunca demonstrou interesse em cozinhar. No entanto, agora que está morando sozinho e precisa adquirir habilidades básicas para se sustentar, ele está aberto a aprender os fundamentos culinários. No entanto, ele deseja garantir que essa nova responsabilidade não consuma muito tempo de sua recém-descoberta vida de solteiro.
|**Desafios** |- Aprender a cozinhar partindo do zero, sem experiência prévia.<br>- Devido à falta de experiência na cozinha, Carlos precisa de receitas claras e com um passo a passo detalhado.<br>- Uma plataforma de fácil uso é essencial para Carlos, que não quer perder tempo aprendendo a utilizá-lo. Ele quer pesquisar uma massa fácil e achar. 

|<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t4-inspirasabor/assets/75648729/ac24f6f4-bc3c-4ad0-9c32-d8fd2da8b8dd" width="1100"/>| Lúcia Helena| 
|-----------------------------------------|---------------------------------|
|**Idade** |64  anos 
|**Ocupação** |Aposentada
|**Histórico** |Lúcia adora cozinhar e quer compartilhar as receitas da sua avó com o mundo. Deseja uma plataforma fácil de usar para preservar tradições familiares. Além disso, ela tem uma paixão por escrever e valoriza muito suas raízes italianas. Com uma vida dedicada à família e à culinária, ela busca uma maneira simples de compartilhar os tesouros culinários de sua família com outras pessoas.
|**Desafios** |- Encontrar uma plataforma simples para compartilhar receitas antigas.<br>- É importante que a plataforma valorize a forma como as receitas são escritas e organizadas, garantindo que a essência e a tradição de cada prato sejam preservadas de maneira clara e acessível.<br>- Ela adoraria receber feedback das pessoas que experimentassem suas receitas.

|<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t4-inspirasabor/assets/75648729/be2b2344-181c-4651-97a2-89878e8b7e4a" width="1100"/>| Paulo Ribeiro| 
|-----------------------------------------|---------------------------------|
|**Idade** |47  anos 
|**Ocupação** |Professor Universitário
|**Histórico** |Paulo é um professor universitário de 47 anos que, embora tenha alguma habilidade na cozinha, muitas vezes prefere evitar o trabalho árduo de cozinhar. Ele sempre foi acostumado com uma rotina agitada e dependia bastante da comida preparada por sua esposa. No entanto, recentemente, sua esposa deu à luz um bebê, o que aumentou as responsabilidades domésticas de Paulo. Ele sente a necessidade de ajudar mais em casa, especialmente na preparação das refeições, mas sua falta de motivação e disposição o leva a procurar por soluções que sejam rápidas e fáceis.
|**Desafios** |- Paulo precisa começar a cozinhar para ajudar mais em casa após o nascimento do bebê, mas sua falta de motivação e disposição o tornam preguiçoso em relação à tarefa.<br>- Ele deseja encontrar receitas que sejam extremamente simples e de rápida preparação, para que ele possa contribuir na preparação das refeições sem gastar muito tempo ou esforço.<br>- Como é preguiçoso quando se trata de cozinhar, ele procura por uma plataforma que ofereça receitas extremamente fáceis e rápidas, com o mínimo de passos possível.





## Histórias de Usuários

Com base na análise das personas foram identificadas as seguintes histórias de usuários:

| EU COMO ... `PERSONA` | QUERO/PRECISO ... `FUNCIONALIDADE` | PARA ... `MOTIVO/VALOR` |
|:---:|---|---|
| Maria Luísa Silva       | Encontrar boas receitas.                                        | Ampliar meu repertório culinário e proporcionar refeições saborosas e variadas para minha família.        |
| Maria Luísa Silva       | Lidar com aplicativos de forma mais eficaz e organizada.        | Facilitar minha experiência ao buscar e seguir receitas, tornando meu tempo na cozinha mais produtivo.   |
| Ricardo Bastos          | Compartilhar minhas receitas em uma plataforma especializada. | Compartilhar minhas criações culinárias com outras pessoas que tenham interesse em receitas fitness.    |
| Ricardo Bastos          | Encontrar receitas saudáveis.                                   | Manter um estilo de vida saudável e contribuir para a saúde da comunidade compartilhando opções saudáveis. |
| Manoela Carlos          | Encontrar receitas simples e práticas.                          | Facilitar a preparação de refeições enquanto gerencio minha rotina agitada de estudos e trabalho no hospital. |
| Manoela Carlos          | Receitas que possam ser congeladas sem perder o sabor.          | Preparar marmitas para a semana toda, economizando tempo e garantindo refeições saudáveis durante a semana. |
| Carlos Augusto          | Aprender a cozinhar partindo do zero, sem experiência prévia.   | Adquirir habilidades culinárias básicas para se sustentar, agora que está morando sozinho.               |
| Carlos Augusto         | Receitas claras e com um passo a passo detalhado.               | Facilitar o aprendizado na cozinha, garantindo que possa seguir as receitas com precisão e confiança.    |
| Carlos Augusto         | Uma plataforma de fácil uso.                                    | Poupar tempo e esforço ao encontrar e seguir receitas, tornando a experiência culinária mais agradável.  |
| Lúcia Helena           | Uma plataforma simples para compartilhar receitas antigas.      | Preservar tradições familiares e compartilhar o legado culinário de sua família com outras pessoas.      |
| Lúcia Helena           |  Valorizar a forma como as receitas são escritas e organizadas.  | Garantir que as receitas compartilhadas reflitam a essência e a tradição de cada prato de forma clara.  |
| Lúcia Helena        | Receber feedback das pessoas que experimentarem suas receitas.   | Estimular a interação e o compartilhamento de experiências culinárias com outros entusiastas da cozinha. |
| Paulo Ribeiro| Encontrar receitas fáceis e muito práticas. |Começar a cozinhar sem sentir sobrecarga, ajudando mais em casa após o nascimento do bebê e sem perder muito tempo na preparação das refeições. | 
| Paulo Ribeiro| Encontrar uma plataforma de receitas que ofereça receitas que exijam o mínimo esforço possível na preparação.| Contribuir mais nas tarefas domésticas, especialmente na preparação das refeições, de uma forma que se adapte ao seu estilo de vida preguiçoso e pouco inclinado à culinária.



## Modelagem do Processo de Negócio 

### Análise da Situação Atual

Atualmente, os aplicativos disponíveis no mercado para pesquisa e compartilhamento de receitas não apresentam um layout de fácil navegação e possuem muitos anúncios, que dificultam a navegação.

<!-- Apresente aqui os problemas existentes que viabilizam sua proposta. Apresente o modelo do sistema como ele funciona hoje. Caso sua proposta seja inovadora e não existam processos claramente definidos, apresente como as tarefas que o seu sistema pretende implementar são executadas atualmente, mesmo que não se utilize tecnologia computacional. -->

### Descrição Geral da Proposta

O aplicativo InspiraSabor se propõe a ter uma fácil navegação, bastante intuitivo e sem a presença de anúncios, conforme descrito no modelo do processo a seguir, no padrão BPMN.

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t4-inspirasabor/blob/main/docs/img/BPM_InspiraSabor.png)

<!-- Apresente aqui uma descrição da sua proposta abordando seus limites e suas ligações com as estratégias e objetivos do negócio. Apresente aqui as oportunidades de melhorias.
### Processo 1 – NOME DO PROCESSO
Apresente aqui o nome e as oportunidades de melhorias para o processo 1. Em seguida, apresente o modelo do processo 1, descrito no padrão BPMN. 
Processo 1
### Processo 2 – NOME DO PROCESSO
Apresente aqui o nome e as oportunidades de melhorias para o processo 2. Em seguida, apresente o modelo do processo 2, descrito no padrão BPMN.
Processo 2 -->

## Indicadores de Desempenho

À luz do entendimento da equipe, esses são os indicadores de desempenho da aplicação:

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t4-inspirasabor/assets/100796561/9da040d3-3387-4888-8f31-f122c0404c71)


## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Deve oferecer sistema de credenciais do usuário com login e senha | ALTA |
|RF-002| Permitir que o usuário pesquise pelo nome específico da receita. | ALTA | 
|RF-003| Permitir que o usuário visualize a receita. | ALTA |
|RF-004| Permitir que o usuário adicione uma nova receita. | MÉDIA |
|RF-005| Permitir que o usuário filtre as receitas por categoria (Massas, Doces e Sobremesas, Carnes) | MÉDIA |
|RF-006| Permitir que o usuário avalie as receitas | MÉDIA |
|RF-007| Permitir que o usuário adicione mídias referentes a receita (Foto e vídeos) | MÉDIA |
|RF-008| Permitir que o usuário adicione comentários nas receitas | BAIXA | 
|RF-009| Permitir que o usuário favorite as receitas | BAIXA |
|RF-010| Permitir que o usuário compartilhe as receitas nas redes sociais | BAIXA |

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | ALTA | 
|RNF-002| Deve ser compatível com os principais sistemas móveis do mercado - IOS e Android | ALTA | 
|RNF-003| O aplicativo deve ser publicado em ambiente acessível na internet - App Store e Google Play | ALTA | 
|RNF-004| O aplicativo deve ser fácil de usar e navegar, com interfaces claras e intuitivas | ALTA | 
|RNF-005| O aplicativo deve ser elaborado com React Native | ALTA | 


## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre no dia 23 de junho de 2024 |
|02| O projeto deve ser elaborado apenas pelos membros do grupo |
|03| A aplicação deve ser fácil de manter e atualizar, com código limpo e documentado para que os desenvolvedores possam entender e modificar facilmente o sistema |
|04| Toda comunicação inerente à aplicação será realizada com o uso de metodologia ágil |


## Diagrama de Casos de Uso

![DiagramaUso](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t4-inspirasabor/assets/125419720/9985e3ae-5180-48cc-a42d-84bbc6e3ed85)



# Matriz de Rastreabilidade
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t4-inspirasabor/assets/127675409/3c32202c-f429-428b-ac60-400d4ba5c895)

# Gerenciamento de Projeto

De acordo com o PMBoK v6 as dez áreas que constituem os pilares para gerenciar projetos, e que caracterizam a multidisciplinaridade envolvida, são: Integração, Escopo, Cronograma (Tempo), Custos, Qualidade, Recursos, Comunicações, Riscos, Aquisições, Partes Interessadas. A seguir são apresentados dados importantes relacionados ao gerenciamento deste projeto.

## Gerenciamento de Tempo

Utilizando-se a ferramenta Project Libre, o grupo fez uma previsão de cronograma de atividades para o semestre 2024/1, tempo de duração do projeto deste eixo, gerando o diagrama de Gantt apresentado abaixo. O cronograma e o diagrama estão apresentados em 3 imagens, sendo: (1) etapa 1, (2) etapas 2 e 3 e (3) etapas 4 e 5.  

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t4-inspirasabor/blob/main/docs/img/cronograma3.1.PNG)
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t4-inspirasabor/blob/main/docs/img/cronograma3.2.PNG)
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t4-inspirasabor/blob/main/docs/img/cronograma3.3.PNG)

## Gerenciamento de Equipe

O gerenciamento adequado de tarefas contribuirá para que o projeto alcance altos níveis de produtividade. Por isso, é fundamental que ocorra a gestão de tarefas e de pessoas, de modo que os times envolvidos no projeto possam ser facilmente gerenciados. A seguir é apresentada, portanto, uma imagem que demonstra o gerenciamento da equipe de trabalho através do método Kanban. 

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t4-inspirasabor/blob/main/docs/img/kanban1.png)

## Gestão de Orçamento

Conforme o escopo do projeto e o cronograma de atividades, é apresentada abaixo a previsão de orçamento para execução do projeto.

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t4-inspirasabor/blob/main/docs/img/Orcamento3.PNG)
