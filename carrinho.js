const bancoDeDados = require("./dados");
const { validarQuantidade, validarCupom } = require("./validacao");
const { calcularTotal, aplicarDesconto, exibirCarrinho } = require("./utils");

function adicionarItem(produto, quantidade) {
    const validacao = validarQuantidade(quantidade, produto.estoque);
    if (!validacao.valido) {
        console.log("Erro: " + validacao.mensagem);
        return false;
    }
    const itemExistente = bancoDeDados.carrinho.find(i => i.id === produto.id);
    if (itemExistente) {
        itemExistente.quantidade += quantidade;
    } else {
        bancoDeDados.carrinho.push({
            id: produto.id,
            nome: produto.nome,
            preco: produto.preco,
            quantidade: quantidade
        });
    }
    console.log(`${produto.nome} adicionado ao carrinho.`);
    return true;
}

function removerItem(produtoId) {
    const index = bancoDeDados.carrinho.findIndex(i => i.id === produtoId);
    if (index === -1) {
        console.log("Item nao encontrado no carrinho.");
        return false;
    }
    const nome = bancoDeDados.carrinho[index].nome;
    bancoDeDados.carrinho.splice(index, 1);
    console.log(`${nome} removido do carrinho.`);
    return true;
}

function aplicarCupom(codigo) {
    const validacao = validarCupom(codigo, bancoDeDados.cupons);
    if (!validacao.valido) {
        console.log("Erro: " + validacao.mensagem);
        return null;
    }
    console.log(`Cupom ${codigo} aplicado! Desconto de ${validacao.cupom.percentual}%.`);
    return validacao.cupom;
}

function verCarrinho() {
    exibirCarrinho(bancoDeDados.carrinho);
}

function limparCarrinho() {
    bancoDeDados.carrinho = [];
    console.log("Carrinho limpo.");
}

module.exports = { adicionarItem, removerItem, aplicarCupom, verCarrinho, limparCarrinho };
