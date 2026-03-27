const bancoDeDados = {
    produtos: [],
    carrinho: [],
    pedidos: [],
    cupons: [
        { codigo: "DESCONTO10", percentual: 10 },
        { codigo: "DESCONTO20", percentual: 20 },
        { codigo: "DESCONTO50", percentual: 50 }
    ],
    proximoIdProduto: 1,
    proximoIdPedido: 1
};

module.exports = bancoDeDados;
