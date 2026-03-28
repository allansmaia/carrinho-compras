const bancoDeDados = require("./dados");
const { calcularTotal, aplicarDesconto, gerarIdPedido } = require("./utils");

function finalizarPedido(cupom) {
    if (bancoDeDados.carrinho.length === 0) {
        console.log("Erro: Carrinho vazio. Adicione produtos antes de finalizar.");
        return null;
    }

    let total = calcularTotal(bancoDeDados.carrinho);
    let desconto = 0;

    if (cupom) {
        desconto = cupom.percentual;
        total = aplicarDesconto(total, desconto);
    }

    // Atualiza o estoque de cada produto
    bancoDeDados.carrinho.forEach(item => {
        const produto = bancoDeDados.produtos.find(p => p.id === item.id);
        if (produto) {
            produto.estoque -= item.quantidade;
        }
    });

    const pedido = {
        id: gerarIdPedido(bancoDeDados),
        itens: [...bancoDeDados.carrinho],
        desconto: desconto,
        total: total
    };

    bancoDeDados.pedidos.push(pedido);
    bancoDeDados.carrinho = [];

    console.log(`Pedido #${pedido.id} finalizado com sucesso!`);
    console.log(`Desconto aplicado: ${desconto}%`);
    console.log(`Total: R$ ${total.toFixed(2)}`);
    return pedido;
}

function listarPedidos() {
    if (bancoDeDados.pedidos.length === 0) {
        console.log("Nenhum pedido realizado.");
        return [];
    }
    console.log("=== Historico de Pedidos ===");
    bancoDeDados.pedidos.forEach(pedido => {
        console.log(`Pedido #${pedido.id} | Desconto: ${pedido.desconto}% | Total: R$ ${pedido.total.toFixed(2)}`);
    });
    return bancoDeDados.pedidos;
}

module.exports = { finalizarPedido, listarPedidos };
