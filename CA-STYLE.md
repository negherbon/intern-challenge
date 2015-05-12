### Estilo ContaAzul

#### Introdução

Essas são as instruções básicas para você começar a conhecer o estilo ContaAzul de codar *Front-End*.
Através dessas instruções básicas, você deverá ser capaz de:
- Saber onde buscar informações a respeito de nossos padrões *Front-End*;
- Escrever uma marcação HTML que respeite o *Grid* que usamos na nossa aplicação;
- Saber o que é e usar o pré-compilador *LESS* para gerar CSS;
- Saber o que é e usar Grunt para compilar/minificar CSS;
- Abrir um *Pull Request* conforme as boas práticas que conservamos no ContaAzul.

#### Guia de Estilo
No ContaAzul temos um *Guia de Estilo* que documenta basicamente a maioria dos componentes que usamos nas telas: *Grade, Tipografia, Botões, Tabelas, Ícones, Elementos de Formulário*, etc.
Para acessá-lo, acesse o endereço: http://estilo.contaazul.local

#### Grid
O *Grid* (Grade) que usamos em nossa aplicação se baseia no Grid introduzido pelo *Bootstrap*. Na seção *Grade* do nosso Guia de Estilo você terá as informações básicas para começar a utilizá-lo. Caso preisa de uma maior documentação sobre, você pode visitar diretamente a documentação do Bootstrap: http://getbootstrap.com/2.3.2/scaffolding.html#gridSystem

#### LESS
O LESS é um pré-compilador de CSS mundialmente usado e conhecido e permite com que você escreva *menos* CSS fazendo usos de *features* que não existem na sintaxe nativa de CSS, como por exemplo *Funções* e *Mixins*.
Para conhecer mais sobre LESS, acesse http://lesscss.org/

#### Grunt
O Grunt é um automatizador de tarefas escrito e feito para *javascript* (é imprescindível que você tenha feito seu treinamento de javascript para poder usá-lo).
Com ele você poderá apenas se preocupar em escrever o código que interessa e ele faz o trabalho chato de deixar seu código otimizado para produção entre diversas outras coisas.
Para conhecê-lo melhor, acesse: http://gruntjs.com/

#### Pull Requests (Best Pratices)
Talvez o pessoal que revisou seu código até agora no *Github* tenha "pego no seu pé" a respeito do título/descrição ou algum outro detalhe do seu Pull Request. Para evitar as "pegadas no pé", você deverá abrir um Pull Request dessa tarefa de acordo com as melhores práticas que conservamos no ContaAzul.
Para conhecê-las, acesse: https://sites.google.com/a/contaazul.com/docs/padroes/pull-requests

### Requisitos dessa tarefa

1. A marcação HTML deve respeitar nosso grid e os componentes usados no formulário devem respeitar os padrões conforme descrito em: http://estilo.contaazul.local/#/formularios (Use a imagem [mockup-grided-with-cols](https://raw.githubusercontent.com/ContaAzul/intern-challenge/master/mockup/mockup-grided-with-cols.png) para medir a colunagem `<span="col*">` e os afastamentos `<span="offset*">`)
2. Você deverá usar o mesmo arquivo CSS usado na aplicação. Para tal, insira as seguintes tags `<link>` no `<head>`: 
```
<link rel="stylesheet" href="https://cdn.contaazul.com/static/dependencies/bootstrap/css/bootstrap.css">
<link rel="stylesheet" href="https://cdn.contaazul.com/static/css/contaazul.css">
```
3. Caso você precise escrever CSS adicionais (para a barra superior ou rodapé, por exemplo), deverá ser escrito utilizando LESS.
4. CSS adicionais deverão ter uma tag `<link>` exclusiva, estar minificados e nomeados como `prototype.min.css`
5. Boa sorte!
