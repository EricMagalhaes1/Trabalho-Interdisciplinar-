# Informações do Projeto
`TÍTULO DO PROJETO`  

OurCa

`CURSO` 

Ciência da Computação


## Participantes
Os membros do grupo são:
 - Eric Magalhaes Graca Silva
 - Felipe Silva Faria
 - Guilherme Mafort Starling
 - Jean Carlos Lopes Lellis
 - Matheus Arantes Coimbra
 - Pedro Debs

# Estrutura do Documento

- [Informações do Projeto](#informações-do-projeto)
  - [Participantes](#participantes)
- [Estrutura do Documento](#estrutura-do-documento)
- [Introdução](#introdução)
  - [Problema](#problema)
  - [Objetivos](#objetivos)
  - [Justificativa](#justificativa)
  - [Público-Alvo](#público-alvo)
- [Especificações do Projeto](#especificações-do-projeto)
  - [Personas e Mapas de Empatia](#personas-e-mapas-de-empatia)
  - [Histórias de Usuários](#histórias-de-usuários)
  - [Requisitos](#requisitos)
    - [Requisitos Funcionais](#requisitos-funcionais)
    - [Requisitos não Funcionais](#requisitos-não-funcionais)
  - [Restrições](#restrições)
- [Projeto de Interface](#projeto-de-interface)
  - [User Flow](#user-flow)
  - [Wireframes](#wireframes)
- [Metodologia](#metodologia)
  - [Divisão de Papéis](#divisão-de-papéis)
  - [Ferramentas](#ferramentas)
  - [Controle de Versão](#controle-de-versão)
- [**############## SPRINT 1 ACABA AQUI #############**](#-sprint-1-acaba-aqui-)
- [Projeto da Solução](#projeto-da-solução)
  - [Tecnologias Utilizadas](#tecnologias-utilizadas)
  - [Arquitetura da solução](#arquitetura-da-solução)
- [Avaliação da Aplicação](#avaliação-da-aplicação)
  - [Plano de Testes](#plano-de-testes)
  - [Ferramentas de Testes (Opcional)](#ferramentas-de-testes-opcional)
  - [Registros de Testes](#registros-de-testes)
- [Referências](#referências)


# Introdução

## Problema

 O problema que nossa aplicação visa resolver é a dificuldade em criar e gerenciar rotinas eficientes. Esse problema é comum em muitos cenários, desde organizações que lidam com processos complexos até indivíduos que desejam organizar melhor seu tempo e tarefas diárias. A dificuldade em criar rotinas eficientes pode surgir da sobrecarga de informações, falta de organização pessoal ou dificuldade em priorizar tarefas. Essa aplicação visa proporcionar uma solução abrangente para a criação, gerenciamento e otimização de rotinas, seja no ambiente corporativo ou para uso pessoal. Ao oferecer recursos como definição de tarefas, agendamento, lembretes pretendemos ajudar os usuários a superarem as dificuldades relacionadas à organização e execução de suas atividades diárias.

## Objetivos

Objetivo geral:
- Auxiliar estudantes e trabalhadores a se organizar diariamente.

Objetivos Específicos:
- Organizar eventos da rotina
- Aplicar melhor visualização de tarefas
- Auxiliar na criação e manutenção de habitos saudaveis
- Esquematizar a prioridade de tarefas


## Justificativa

 A motivação para criar um software sobre organização de rotinas é devido à crescente demanda por ferramentas que ajudem as pessoas e empresas a lidar com a complexidade do mundo moderno. Com a vida cada vez mais agitada e a necessidade de equilibrar múltiplas responsabilidades, há uma oportunidade para oferecer soluções inovadoras que simplifiquem a gestão de tarefas, melhorem a produtividade e promovam o bem-estar dos usuários.

## Público-Alvo

Pessoas de 18 a 30 anos, estudantes e/ou trabalhadores, que por possuirem dficuldade em gerir sua rotina desejam um artefato para auxiliar na sua organização diaria. Moram e zona urbana e possuem aparelhos eletronicos com acesso a internet. Afim de apoiar na melhora da qualidade de vida e carreira proficional. 

 
# Especificações do Projeto

Abaixo iremos apresentar as técnicas e ferramentas utilizadas na concepção do projeto visando suas especificações para solucionarmos nosso problema. 


## Personas e Mapas de Empatia

![image](https://github.com/EricMagalhaes1/Trabalho-Interdisciplinar-/blob/main/documentacao/relatorio/imagens/Persona%20-%20Isabela.jpg)
![image](https://github.com/EricMagalhaes1/Trabalho-Interdisciplinar-/blob/main/documentacao/relatorio/imagens/Persona%20-%20%20Eduardo.jpg)
![image](https://github.com/EricMagalhaes1/Trabalho-Interdisciplinar-/blob/main/documentacao/relatorio/imagens/Persona%20-%20Maria.jpg)

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE`                                               |PARA ... `MOTIVO/VALOR`                               |
|--------------------|----------------------------------------------------------------------------------|------------------------------------------------------|
|Eduardo             | Visualizar e acompanhar o progresso das tarefas de desenvolvimento no aplicativo | Otimizar meu tempo e garantir a entrega de projetos. |
|Maria               | Receber lembretes e notificações sobre prazos de entrega de trabalhos acadêmicos | Gerenciar minha agenda de forma eficiente.           |
|Isabela             | Definir e priorizar tarefas no aplicativo de organização de rotinas              | Garantir a eficiência da equipe                      |


## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Permitir que o usuário cadastre tarefas | ALTA | 
|RF-002| Permitir que o usúario cadestre tarefas unicas | ALTA |
|RF-003| Interface que permita visualização de todas tarefas | MÉDIA |
|RF-004| Assinalar horario de tarefas | ALTA |
|RF-005| Assinalar datas de tarefas | ALTA |
|RF-006| Interface que permita visuialização de tarefas semanais | MÉDIA |
|RF-007| Interface que permita visuialização de tarefas mensais | MÉDIA |
|RF-008| Adicionar imagem de perfil | BAIXA |
|RF-009| Alterar dados do usuario | MÉDIA |
|RF-010| Possibilitar personalização de todo tipo de tarefas | BAIXA |
|RF-011| Possibilitar personalização de temas claro/escuro | BAIXA |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O site deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| O site deve possuir uma interface acesivel e interativa | ALTA |
|RNF-003| Deve garantir privacidade do usuario | MÉDIA |
|RNF-004| Deve se publicado na internet | ALTA |


## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |
|03| Deve ser um site                                      |
|04| O site só podera ser utilizado se tiver um cadastro   |
|05| O site não aceitara contas com email identico         |


# Projeto de Interface

A seguir, será apresentado o desenvolvimento do **User Flow** e **Wireframe** do projeto.


## User Flow

![image](https://github.com/EricMagalhaes1/Trabalho-Interdisciplinar-/blob/main/documentacao/relatorio/imagens/Screenshot%20(4).png)


## Wireframes

> **Tela de Login**
>
> ![image](https://github.com/EricMagalhaes1/Trabalho-Interdisciplinar-/blob/main/documentacao/relatorio/imagens/Desktop_1.png)
>
> **Tela de Registro**
>
> ![image](https://github.com/EricMagalhaes1/Trabalho-Interdisciplinar-/blob/main/documentacao/relatorio/imagens/Desktop_2b.png)
>
> **Tela Principal**
> 
> ![image](https://github.com/EricMagalhaes1/Trabalho-Interdisciplinar-/blob/main/documentacao/relatorio/imagens/Desktop_4.png)
>
> **Tela Semanal**
> 
> ![image](https://github.com/EricMagalhaes1/Trabalho-Interdisciplinar-/blob/main/documentacao/relatorio/imagens/Desktop_3.png)
>
> **Modal de Tarefa**
> 
> ![image](https://github.com/EricMagalhaes1/Trabalho-Interdisciplinar-/blob/main/documentacao/relatorio/imagens/Desktop_5.png)
>
> **Tela Mensal**
> 
> ![image](https://github.com/EricMagalhaes1/Trabalho-Interdisciplinar-/blob/main/documentacao/relatorio/imagens/Desktop_6.png)
>
> **Tela de Conta**
> 
> ![image](https://github.com/EricMagalhaes1/Trabalho-Interdisciplinar-/blob/main/documentacao/relatorio/imagens/Desktop_7.png)
>
> **Tela de Imagen**
> 
> ![image](https://github.com/EricMagalhaes1/Trabalho-Interdisciplinar-/blob/main/documentacao/relatorio/imagens/Desktop_8.png)
>
> **Tela de Trocar Nome**
> 
> ![image](https://github.com/EricMagalhaes1/Trabalho-Interdisciplinar-/blob/main/documentacao/relatorio/imagens/Desktop_9.png)
>
> **Tela de Trocar email**
> 
> ![image](https://github.com/EricMagalhaes1/Trabalho-Interdisciplinar-/blob/main/documentacao/relatorio/imagens/Desktop_10.png)
>
> **Esqueci Minha Senha**
> 
> ![image](https://github.com/EricMagalhaes1/Trabalho-Interdisciplinar-/blob/main/documentacao/relatorio/imagens/Desktop_11.png)
>
> **Tela de Logoff**
> 
> ![image](https://github.com/EricMagalhaes1/Trabalho-Interdisciplinar-/blob/main/documentacao/relatorio/imagens/Desktop_12.png)


# Metodologia

Nesse projeto utilizamos da metodologia ágil, como o Scrum e o Design Thinking, para garantir flexibilidade, comunicação eficiente, entrega contínua e adaptação às mudanças no desenvolvimento do software, resultando em maior qualidade e satisfação do cliente.

## Divisão de Papéis

| Nome                      | Função          |
|---------------------------|-----------------|
| Eric Magalhaes Graca Silva | Etapa de entendimento |
| Felipe Silva Faria | Documentação/Etapa de Exploração |
| Guilherme Mafort Starling | Etapa de entendimento/Wireframe |
| Jean Carlos Lopes Lellis | Etapa de entendimento/PPT |
| Matheus Arantes Coimbra | Documentação/Etapa de Exploração |
| Pedro Debs | Etapa de exploração |


## Ferramentas

| Ambiente  | Plataforma              |Link de Acesso |
|-----------|-------------------------|---------------|
|Processo de Design Thinkgin  | Miro |  [Miro](https://miro.com/app/board/uXjVKUWmBIc=/) | 
|Repositório de código | GitHub | [GitHub](https://github.com/EricMagalhaes1/Trabalho-Interdisciplinar-) | 
|Hospedagem do site | ------ |  https://XXXXXXX.xxxxxxxxx.com | 
|Protótipo Interativo | Figma | [figma](https://www.figma.com/file/u00fba8uNpozvfNuAMVv6R/Untitled?type=design&node-id=0%3A1&mode=design&t=psjXnv9e5CwXYq3v-1) | 


## Controle de Versão

A ferramenta de controle de versão adotada no projeto foi o [Git](https://git-scm.com/), sendo que o [Github](https://github.com) foi utilizado para hospedagem do repositório `upstream`.
O projeto segue a seguinte convenção para o nome de branchs:

> - `master`: versão estável já testada do software
> - `testing`: versão em testes do software
> - `dev`: versão de desenvolvimento do software

Quanto à gerência de issues, o projeto adota a seguinte convenção para etiquetas:
 
> - `bugfix`: uma funcionalidade encontra-se com problemas
> - `feature`: uma nova funcionalidade precisa ser introduzida


# **############## SPRINT 1 ACABA AQUI #############**


# Projeto da Solução

 O projeto da solução foi implementado com base nos requisitos definidos, na seleção de tecnologias adequadas e de acordo com as metodologias de design e desenvolvimento escolidas. Manutenção e suporte foram continuos durante o desenvolvimento para garantir a adaptabilidade e estabilidade da solução a longo prazo.

## Versão Final

> **Tela de Inicio**
> 
> **Tela de Login**
>
> **Tela Principal**
> 
> **Tela Mensal**
> 
> **Tela de Conta**
> 
> **Modal de Tarefa**
> 
> **Tela de Habitos de Sono**
>
> **Modal de Sono**
> 
> **Tela de FAQ**
> 
> **Tela de Relogio**
> 

## Tecnologias Utilizadas

- Linguagens de Desenvolvimento:
> - HTML, CSS, JavaScript
 
- Bibliotecas e Frameworks
> - Bootstrap

- Banco de Dados:
> - Local Storage

- Ferramentas de Desenvolvimento:
> - Visual Studio Code, NeoVim, LunarVim

- Controle de Versão:
> - GitHub

- Wireframe e Prototipo Interativo:
> - Figma

- Processo de Desing Thinkin:
> - Miro

- Ferramentas de Organização:
> - Jira, Discord, WhatsApp

......  COLOQUE AQUI O SEU TEXTO ......

> Descreva aqui qual(is) tecnologias você vai usar para resolver o seu
> problema, ou seja, implementar a sua solução. Liste todas as
> tecnologias envolvidas, linguagens a serem utilizadas, serviços web,
> frameworks, bibliotecas, IDEs de desenvolvimento, e ferramentas.
> Apresente também uma figura explicando como as tecnologias estão
> relacionadas ou como uma interação do usuário com o sistema vai ser
> conduzida, por onde ela passa até retornar uma resposta ao usuário.
> 
> Inclua os diagramas de User Flow, esboços criados pelo grupo
> (stoyboards), além dos protótipos de telas (wireframes). Descreva cada
> item textualmente comentando e complementando o que está apresentado
> nas imagens.

## Arquitetura da solução

......  COLOQUE AQUI O SEU TEXTO E O DIAGRAMA DE ARQUITETURA .......

> Inclua um diagrama da solução e descreva os módulos e as tecnologias
> que fazem parte da solução. Discorra sobre o diagrama.
> 
> **Exemplo do diagrama de Arquitetura**:
> 
> ![Exemplo de Arquitetura](images/arquitetura-exemplo.png)


# Avaliação da Aplicação

......  COLOQUE AQUI O SEU TEXTO ......

> Apresente os cenários de testes utilizados na realização dos testes da
> sua aplicação. Escolha cenários de testes que demonstrem os requisitos
> sendo satisfeitos.

## Plano de Testes

......  COLOQUE AQUI O SEU TEXTO ......

> Enumere quais cenários de testes foram selecionados para teste. Neste
> tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo
> de usuários que foi escolhido para participar do teste e as
> ferramentas utilizadas.
> 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Práticas e Técnicas de Testes Ágeis](http://assiste.serpro.gov.br/serproagil/Apresenta/slides.pdf)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)

## Ferramentas de Testes (Opcional)

......  COLOQUE AQUI O SEU TEXTO ......

> Comente sobre as ferramentas de testes utilizadas.
> 
> **Links Úteis**:
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)

## Registros de Testes

......  COLOQUE AQUI O SEU TEXTO ......

> Discorra sobre os resultados do teste. Ressaltando pontos fortes e
> fracos identificados na solução. Comente como o grupo pretende atacar
> esses pontos nas próximas iterações. Apresente as falhas detectadas e
> as melhorias geradas a partir dos resultados obtidos nos testes.


# Referências

......  COLOQUE AQUI O SEU TEXTO ......

> Inclua todas as referências (livros, artigos, sites, etc) utilizados
> no desenvolvimento do trabalho.
> 
> **Links Úteis**:
> - [Formato ABNT](https://www.normastecnicas.com/abnt/trabalhos-academicos/referencias/)
=======
