# Plano de Testes de Software

De acordo com os requisitos estabelecidos pela equipe para o desenvolvimento da aplicação InspiraSabor, está prevista a realização dos testes, conforme os casos de teste apresentados a seguir.
 
| **Caso de Teste** | **CT-01 - Sistema de Credenciais** |
|---|---|
|	Requisito Associado 	| RF_001 - Deve oferecer sistema de credenciais do usuário com login e senha. |
| Objetivo do Teste 	| Verificar se o usuário consegue criar seu cadastro na aplicação bem como realizar o seu login. |
| Passos 	| Acessar a aplicação / Clicar em "Crie sua conta!" / Digitar o Nome, o Email e a Senha / Clicar em "Crie seu perfil"  |
|Critério de Êxito | O cadastro é realizado com sucesso e o usuário consegue realizar o login. |

| **Caso de Teste** | **CT-02 - Cadastro de Receitas** | - APRIMORAR BATER COM O FLUXOGRAMA RF-002

| **Caso de Teste** | **CT-03 - Sistema de Pesquisa** |
|---|---|
|	Requisito Associado 	| RF_003 - Permitir que o usuário pesquise pelo nome específico da receita. |
| Objetivo do Teste 	| Verificar se o usuário consegue buscar receitas. |
| Passos 	| Acessar a aplicação / Clicar em "Buscar receita" / Dar a entrada nas palavras de busca / Clicar em "Pesquisar"  |
|Critério de Êxito | O usuário consegue localizar a receita. |

| **Caso de Teste** | **CT-04 - Sistema de Filtro de Categoria** |
|---|---|
|	Requisito Associado 	| RF_004 - Permitir que o usuário filtre as receitas por categoria (Massas, Doces e Sobremesas, Carnes). |
| Objetivo do Teste 	| Verificar se o usuário consegue buscar receitas por categorias especifícas. |
| Passos 	| Acessar a aplicação / Clicar em "Filtrar por categoria" / Dar a entrada nas palavras de busca / Clicar em "Pesquisar"  |
|Critério de Êxito | O usuário consegue localizar a receita por categoria especifíca. |

| **Caso de Teste** | **CT-05 - Sistema de Avaliação** |
|---|---|
|	Requisitos Associados 	| RF_005 - Permitir que o usuário avalie as receitas e RF_007 - Permitir que o usuário adicionei comentários nas receitas. |
| Objetivo do Teste 	| Verificar se o usuário consegue buscar receitas por categorias especifícas. |
| Passos 	| Acessar a aplicação / Login aceito e usuário logado / Clicar em "Avaliar Receita" / Inserir dados / Usuário insere sua avaliação. |
|Critério de Êxito | O usuário consegue avaliar e comentar a receita desejada. |

| **Caso de Teste** | **CT-06 - Cadastro de Mídias** | - APRIMORAR BATER COM O FLUXOGRAMA - RF-006

| **Caso de Teste** | **CT-07 - Favoritar Receitas** | - APRIMORAR BATER COM O FLUXOGRAMA RF-008

| **Caso de Teste** | **CT-08 - Compartilhar Receitas** | - APRIMORAR BATER COM O FLUXOGRAMA RF-009

| **Caso de Teste** 	| **CT-09 – Responsividade**	|
|---|---|
|Requisito Associado | RNF_001	- O sistema deve ser responsivo para rodar em um dispositivos móvel. |
| Objetivo do Teste 	| Testar se a aplicação é responsiva em dispositivos móveis. |
| Passos 	|Inserir a publicação da aplicação em verificadores de responsividade / Verificar se a aplicação está responsiva em dispositivo móvel. |
|Critério de Êxito | A aplicação possui responsividade adequada para acesso em dispositivo móvel.|

| **Caso de Teste** 	| **CT-10 – Publicação**	|
|---|---|
|Requisitos Associado | RNF_002	- Deve ser compatível com os principais sistemas móveis do mercado - IOS e Android e RNF_003: O aplicativo deve ser publicado em ambiente acessível na internet - App Store e Google Play. |
| Objetivo do Teste 	| Checar se a aplicação está disponível para IOS e Android estando publicado na App Store e Google Play. |
| Passos 	| Verificar se a aplicação está publicada.  |
|Critério de Êxito | A aplicação está publicada e acessível.|

| **Caso de Teste** 	| **CT-11 – Usabilidade do site**	|
|---|---|
|Requisito Associado | RNF_004	- A aplicação deve ser fácil de usar e navegar, com interfaces claras e intuitivas. |
| Objetivo do Teste 	| Testar se a aplicação está fácil de usar, com interfaces claras e intuitivas. |
| Passos 	| Acessar o site / Verificar se a aplicação fornece interfaces claras e intuitivas.  |
|Critério de Êxito | O site se mostra com boa usabilidade.|

| **Caso de Teste** 	| **CT-12 – Elaboração com React Native**	|
|---|---|
|Requisito Associado | RNF_005	- O aplicativo deve ser elaborado com React Native. |
| Objetivo do Teste 	| Verificar a aplicação foi elaborada utilizando o React Native. |
| Passos 	| Verificar no código fonte se a aplicação foi construída com React Native. |
|Critério de Êxito | Aplicação elaborada com React Native.|
