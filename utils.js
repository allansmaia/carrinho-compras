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

module.exports = { gerarIdProduto, gerarIdPedido, formatarPreco, calcularTotal, aplicarDesconto, exibirCarrinho };
