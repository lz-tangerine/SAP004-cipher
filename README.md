# C1PH3R C3S4R ☠️

## Projeto

Grupos de resistência (ou de inteligencia), coordenam operações para livrar um povo ou uma cultura da tirania de governos totalitários. Essas operações necessitam de uma comunicação eficiente e sigilosa para que sejam eficazes. 

Levando esse sistema para internet (que é um espaço livre desde a sua concepção), **C1PH3R C3S4AR** nasceu para suprir essa necessidade de comunicação segura dessas minorias étnicas para coordenar suas operações.

## Como utilizar

Com uma interface simples, primeiro o usuário irá acessar uma página para inserir seu nome e após é redirecionado para a página de criptografia. 

Lá o usuário poderá: 

* Cifrar ou decifrar uma mensagem;
* Selecionar o offset (que é a chave de criptografia) que inicia em 2 e vai até 66.

<img src="/home/carol/Documentos/Laboratória/SAP004-cipher/src/C1PH3R.png" alt="Imagem do site">

**Importante:** A aplicação não usa offsets negativos e letras com acentuação, simbolos e numéros mantém suas posições originais.

## O Sistema de Codificação

A [cifra de César](https://pt.wikipedia.org/wiki/Cifra_de_C%C3%A9sar) é uma das primeiras técnicas usadas para cifrar mensagens e justamente por ser simples, se torna extremamente usual para essa tarefa. É um tipo de cifra por substituição, em que cada letra do texto original é substituida por outra que se encontra há um número fixo de posições (deslocamento) mais a frente do mesmo alfabeto.

Por exemplo se usarmos o deslocamento (_offset_) de 3 posições:

* Alfabeto sem cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* Alfabeto com cifra:  D E F G H I J K L M N O P Q R S T U V W X Y Z A B C
* A letra A será D
* A palavra CASA será FDVD

Atualmente todas as cifras de substituição alfabética simples, são decifradas
com facilidade e não oferecem muita segurança na comunição, mas a cifra de César
muitas vezes pode fazer parte de um sistema mais complexo de criptografia, como
a cifra de Vigenère, e tem aplicação no sistema ROT13.

## Linguagem

A lógica da aplicação foi feita em **JavaScript** que é uma linguagem de alto padrão e que a torna de fácil leitura em várias plataformas, inclusive mobile (que pode ser implementada no futuro). 

O **HTML** foi usado para estrutura e foi usado manipulação de dom para fazer a comunição do HTML com o JavaScrip. 

Foi usado o **CSS** para dar estilo e forma ao site o tornando mais agradavel visualmente e usual.

Foram usados testes unitários para garantir a funcionalidade.

Acesse aqui: [C1PHER_C3S4R](https://github.com/lz-tangerine/SAP004-cipher/src)


