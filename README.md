# Validador de Cartão de crédito

Esta biblioteca verifica se números de cartão de crédito são válidos ou inválidos, devendo retornar *true* para válidos e *false* para inválidos.

A aplicação foi desenvolvida em javaScript utilizando a logica do <a href="http://www.datagenetics.com/blog/july42013/index.html"> Algoritmo de Luhn</a> para fazer a validacao.

### Instalação:
```
Para instalar a biblioteca é necessario digitar o comando:
$  npm install cardvalidatorfabi
```

### Utilização:
```
Para utilizar a biblioteca é necessário chamar a função cardValidator() utilizando os comandos abaixo:

//Criar const e requisitar a biblioteca para acessa-la:
> const enterCard = require("cardvalidatorfabi");

//Chamar a função cardValidator() através da const:
> enterCard.cardValidator("digitar número do cartão aqui")
```

### Roadmap oficial do projeto

#### versão 1.0.0 (released)

**Funcionalidade:** Verificar se números de cartão de crédito são válidos ou inválidos através de uma função em JavaScript, esta função deve retornar *true* para números de cartão válidos e *false* para números de cartão inválidos.
