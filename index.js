function solucao(lista) {
    let soma = lista.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0)
    let dividir = soma / lista.length
    console.log(dividir)
}

let media = [1, 2, 3]
solucao(media)