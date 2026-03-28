const bancoDeDados = require("./dados");
const { validarProduto } = require("./validacao");
const { gerarIdProduto } = require("./utils");

function cadastrarProduto(nome, preco, estoque) {
    const validacao = validarProduto(nome, preco, estoque);
    if (!validacao.valido) {
        console.log("Erro: " + validacao.mensagem);
        return null;
    }
    const produto = {
        id: gerarIdProduto(bancoDeDados),
        nome: nome.trim(),
        preco: preco,
        estoque: estoque
    };
    bancoDeDados.produtos.push(produto);
    console.log("Produto cadastrado: " + produto.nome);
    return produto;
}

function listarProdutos() {
    if (bancoDeDados.produtos.length === 0) {
        console.log("Nenhum produto cadastrado.");
        return [];
    }
    console.log("=== Produtos disponiveis ===");
    bancoDeDados.produtos.forEach(p => {
        console.log(`ID: ${p.id} | ${p.nome} | R$ ${p.preco.toFixed(2)} | Estoque: ${p.estoque}`);
    });
    return bancoDeDados.produtos;
}

function buscarProduto(id) {
    const produto = bancoDeDados.produtos.find(p => p.id === id);
    if (!produto) {
        console.log("Produto nao encontrado.");
        return null;
    }
    return produto;
}

module.exports = { cadastrarProduto, listarProdutos, buscarProduto };
