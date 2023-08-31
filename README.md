# Média aritmética 

O projeto é uma função em JavaScript que calcula a média aritmética dos valores. Ele recebe a lista de números como entrada, calcula a soma de todos os números na lista e, em seguida, divide essa soma pelo número de elementos na lista para obter a média. O resultado é impresso no console.




## Uso/Exemplos

```javascript
function solucao(lista) {
    let soma = lista.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0)
    let dividir = soma / lista.length
    console.log(dividir)
}

let media = [1, 2, 3] //valores de entrada
solucao(media)
```


## Rodando os testes

Para rodar os testes, rode o seguinte comando no terminal

```bash
node .\index.js
```


## Demonstração

![demonstracao](https://imgur.com/TyM7EMy.png)

![teste](https://imgur.com/ysGgAUw.png)


## Stack utilizada



**Back-end:** Node.js
