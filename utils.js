// Funcoes utilitarias do carrinho

function gerarIdProduto(bancoDeDados) {
    return bancoDeDados.proximoIdProduto++;
}

function gerarIdPedido(bancoDeDados) {
    return bancoDeDados.proximoIdPedido++;
}

function formatarPreco(preco) {
    return "R$ " + preco.toFixed(2);
}

function calcularTotal(carrinho) {
    return carrinho.reduce((total, item) => {
        return total + (item.preco * item.quantidade);
    }, 0);
}

function aplicarDesconto(total, percentual) {
    const desconto = total * (percentual / 100);
    return total - desconto;
}

function exibirCarrinho(carrinho) {
    if (carrinho.length === 0) {
        console.log("Carrinho vazio.");
        return;
    }
    console.log("=== Carrinho ===");
    carrinho.forEach(item => {
        console.log(`- ${item.nome} x${item.quantidade} = ${formatarPreco(item.preco * item.quantidade)}`);
    });
    console.log(`Total: ${formatarPreco(calcularTotal(carrinho))}`);
    console.log("================");
}

function calcularFrete(total) {
    if (total >= 500) {
        return 0; // Frete grátis para pedidos acima de R$ 500
    } else if (total >= 200) {
        return 20; // Frete de R$ 20 para pedidos entre R$ 200 e R$ 499.99
    } else {
        return 40.00; // Frete de R$ 40 para pedidos abaixo de R$ 200
    }
}

module.exports = { gerarIdProduto, gerarIdPedido, formatarPreco, calcularTotal, aplicarDesconto, exibirCarrinho, calcularFrete };
