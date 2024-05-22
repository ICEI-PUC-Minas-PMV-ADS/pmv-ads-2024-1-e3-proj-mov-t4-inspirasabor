# Registro de Testes de Software

De acordo com os requisitos estabelecidos pela equipe para o desenvolvimento da aplicação Inspira Sabor
, foram feitos testes de software, conforme os casos de teste e a escala apresentados a seguir.

**ESCALA UTILIZADA NOS TESTES DE SOFTWARE:**

| **NÍVEL DA ESCALA**| **CONCLUSÃO** | 
|---|---|
| Nível 0	| Está adequado com relação à usabilidade. |
| Nível 1	| Problema estético que não tem necessidade que ser corrigido, a menos que haja tempo e recurso disponível. |
| Nível 2	| Problema pequeno, com baixa prioridade na correção. |
| Nível 3	| Problema grande, com alta prioridade de correção. |
| Nível 4	| Catástrofe de usabilidade. O produto só será liberado se a correção for realizada. |


**REGISTROS DE TESTES DE SOFTWARE:**
 
| **Caso de Teste** | **CT-01 - Sistema de Credenciais** |
|---|---|
|	Requisito Associado 	| RF_001 - Deve oferecer sistema de credenciais do usuário com login e senha. |
| Objetivo do Teste 	| Verificar se o usuário consegue criar seu cadastro na aplicação bem como realizar o seu login. |
|Resultado esperado | O cadastro é realizado com sucesso. |
|Resultado obtido | Observa-se que o teste em questão foi concluído com sucesso. É possível a criação de usuário que já aparece no banco de dados e login na aplicação. |
|Avaliação | Nível 0 |
|Evidência |<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t4-inspirasabor/assets/100796561/70013a8a-a209-4bfd-ba44-3d963a2aa110" width="300"/> <img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t4-inspirasabor/assets/100796561/bb1d4033-b262-4372-935e-00aaee107f74" width="300"/> <img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t4-inspirasabor/assets/100796561/46ca4cf0-b1c5-4cbf-889d-9e58dc3d9b0b" width="300"/> |


| **Caso de Teste** | **CT-02 - Sistema de Pesquisa** |
|---|---|
|	Requisito Associado 	| RF_002- Permitir que o usuário pesquise pelo nome específico da receita. |
| Objetivo do Teste 	| Verificar se o usuário consegue realizar buscas dentro da aplicação. |
|Resultado esperado | O usuário consegue buscar as receitas disponíveis. |
|Resultado obtido | Observa-se que a funcionalidade está implementada porém não há imagens em todas as receitas. Logo, isso deve ser concluído antes da apresentação final da aplicação. |
|Avaliação | 4|
|Evidência |<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t4-inspirasabor/assets/100796561/41eeddd5-52a0-47db-8bc3-c43b29e4e715" width="300"/> <img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t4-inspirasabor/assets/100796561/973cb060-072d-4c9e-9721-6f638697491e" width="300"/> 

| **Caso de Teste** | **CT-03 - Visualizar receitas** |
|---|---|
|	Requisito Associado 	| RF_003- Permitir que o usuário visualize a receita. |
| Objetivo do Teste 	| Verificar se o usuário visualizar receitas. |
|Resultado esperado | O usuário consegue visualizar as receitas disponíveis. |
|Resultado obtido | Observa-se que o teste em questão foi concluído com sucesso. |
|Avaliação | Nível 1 |
|Evidência |<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t4-inspirasabor/assets/100796561/dea21507-c891-47f1-a3a3-1147c11fe627" width="300"/>|

| **Caso de Teste** | **CT-04 - Cadastrar Receitas** |
|---|---|
|	Requisito Associado 	| RF_005- Permitir que o usuário adicione uma nova receita. |
| Objetivo do Teste 	| Verificar se o usuário consegue adicionar uma nova receita. |
|Resultado esperado | O usuário consegue inserir receitas. |
|Resultado obtido | Observa-se que a funcionalidade está implementada. Porém, a imagem fica salva apenas no dispositivo local em decorrência da API _fake_. |
|Avaliação | Nível 0 |
|Evidência |INSERIR|

| **Caso de Teste** | **CT-05 - Sistema de Filtro de Categoria** |
|---|---|
|	Requisito Associado 	| RF_005- Permitir que o usuário filtre as receitas por categoria (Massas, Doces e Sobremesas, Carnes). |
| Objetivo do Teste 	| Verificar se o usuário visualizar receitas de acordo com suas categoriais. |
|Resultado esperado | O usuário consegue visualizar as receitas disponíveis por filtro. |
|Resultado obtido | Observa-se que a funcionalidade está implementada porém não há imagens em todas as receitas. Logo, isso deve ser concluído antes da apresentação final da aplicação. |
|Avaliação | Nível 4 |
|Evidência |<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t4-inspirasabor/assets/100796561/48194321-98a8-4c0e-bb89-5ec877678e78)" width="300"/>|

| **Caso de Teste** | **CT-06 - Sistema de Avaliação de Receitas** |
|---|---|
|	Requisito Associado 	| RF_006- Permitir que o usuário avalie receitas. |
| Objetivo do Teste 	| Verificar se o usuário consegue avaliar as receitas. |
|Resultado esperado | O usuário consegue avaliar com estrelas as receitas da aplicação. |
|Resultado obtido | Observa-se que a funcionalidade está implementada. |
|Avaliação | Nível 0 |
|Evidência |INSERIR|

| **Caso de Teste** | **CT-07 - Permitir que o usuário adicione mídias referentes a receita** |
|---|---|
|	Requisito Associado 	| RF_007- Permitir que o usuário adicione mídias referentes a receita. |
| Objetivo do Teste 	| Verificar se o usuário consegue inserir mídias. |
|Resultado esperado | O usuário consegue inserir mídia quando cadastrar receita. |
|Resultado obtido | Observa-se que a funcionalidade está implementada. Porém, a imagem fica salva apenas no dispositivo local em decorrência da API _fake_. |
|Avaliação | Nível 0 |
|Evidência |INSERIR|

| **Caso de Teste** | **CT-08- Permitir que o usuário adicione comentários nas receitas** |
|---|---|
|	Requisito Associado 	| RF_008- Permitir que o usuário adicione comentários nas receitas. |
| Objetivo do Teste 	| Verificar se o usuário consegue inserir seus comentários nas receitas da aplicação. |
|Resultado esperado | O usuário consegue comentar nas receitas. |
|Resultado obtido | Observa-se que a funcionalidade está implementada. |
|Avaliação | Nível 0 |
|Evidência |INSERIR|

| **Caso de Teste** | **CT-09- Permitir que o usuário favorite as receitas** |
|---|---|
|	Requisito Associado 	| RF_009- Permitir que o usuário favorite as receitas. |
| Objetivo do Teste 	| Verificar se o usuário consegue favoritar receitas. |
|Resultado esperado | O usuário consegue comentar favoritar receitas de sua preferência. |
|Resultado obtido | FEATURE NÃO IMPLEMENTADA AINDA. |
|Avaliação | FEATURE NÃO IMPLEMENTADA AINDA. |
|Evidência |FEATURE NÃO IMPLEMENTADA AINDA.|

| **Caso de Teste** | **CT-10- Permitir que o usuário compartilhar as receitas** |
|---|---|
|	Requisito Associado 	| RF_010- Permitir que o usuário compatilhe as receitas nas redes sociais. |
| Objetivo do Teste 	| Verificar se o usuário consegue compartilhar as receitas. |
|Resultado esperado | O usuário consegue compartilhar as receitas. |
|Resultado obtido | Observa-se que a funcionalidade está implementada com a possibilidade de o usuário compartilhar a receita via e-mail. |
|Avaliação | Nível 1 |
|Evidência |INSERIR|

| **Caso de Teste** | **CT-11- Responsividade** |
|---|---|
|	Requisito Associado 	| RNF_001 - O sistema deve ser responsivo para rodar em um dispositivos móvel. |
| Objetivo do Teste 	| Verificar se a aplicação encontra-se responsiva para dispositivos móveis. |
|Resultado esperado | Aplicação responsiva. |
|Resultado obtido | Observa-se que a funcionalidade está implementada. |
|Avaliação | Nível 0 |
|Evidência |INSERIR|

| **Caso de Teste** | **CT-12- Publicação** |
|---|---|
|	Requisito Associado 	| RNF_002 - Deve ser compatível com os principais sistemas móveis do mercado - IOS e Android e RNF_003: O aplicativo deve ser publicado em ambiente acessível na internet - App Store e Google Play. |
| Objetivo do Teste 	| Verificar a publicação da aplicação. |
|Resultado esperado | A aplicação deve ser compatível com os principais sistemas móveis do mercado bem como estar publicada em ambiente acessível. |
|Resultado obtido | Observa-se que a funcionalidade está implementada. |
|Avaliação | Nível 0 |
|Evidência |INSERIR|

| **Caso de Teste** | **CT-13- Usabilidade** |
|---|---|
|	Requisito Associado 	| RNF_004 - A aplicação deve ser fácil de usar e navegar, com interfaces claras e intuitivas. |
| Objetivo do Teste 	| Verificar se a UX e UI da aplicação estão satisfatórias. |
|Resultado esperado | O usuário deve conseguir usar e navegar pela aplicação sem gargalos. |
|Resultado obtido | Observa-se que a funcionalidade está implementada. |
|Avaliação | Nível 0 |
|Evidência |INSERIR|

| **Caso de Teste** | **CT-14- Elaboração com React Native** |
|---|---|
|	Requisito Associado 	| RNF_005- O aplicativo deve ser elaborado com React Native. |
| Objetivo do Teste 	| Verificar se a aplicação foi implementada com a ferramenta desejada. |
|Resultado esperado | Aplicação desenvolvida com React Native. |
|Resultado obtido | Observa-se que a funcionalidade está implementada. |
|Avaliação | Nível 0 |
|Evidência |INSERIR|


## Avaliação

O trabalho desenvolvido pela equipe seguiu os planejamentos realizados e, em concordância com os requisitos e regras de negócios delimitadas, a equipe logrou exito em entregar as funcionalidades que foram acordadas.

