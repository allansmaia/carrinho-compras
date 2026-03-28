// validacoes dos dados do carrinho
function validarProduto(nome, preco, estoque) {
    if (!nome || nome.trim().length < 3) {
        return { valido: false, mensagem: "Nome do produto deve conter pelo menos 3 caracteres." };
    }
    if (!preco || preco <= 0) {
        return { valido: false, mensagem: "Preco do produto deve ser um valor positivo." };
    }
    if (!estoque || estoque < 0) {
        return { valido: false, mensagem: "Estoque do produto deve ser um valor nao negativo." };
    }
    return { valido: true, mensagem: "Produto valido." };
}
function validarQuantidade(quantidade, estoqueDisponivel) {
    if (!quantidade || quantidade <= 0) {
        return { valido: false, mensagem: "Quantidade deve ser um valor positivo." };
    }
    if (quantidade > estoqueDisponivel) {
        return { valido: false, mensagem: "Quantidade solicitada excede o estoque disponivel." };
    }
    return { valido: true };
}
function validarCupom(codigo, cupons) {
    const cupom = cupons.find(c => c.codigo === codigo);
    if (!cupom) {
        return { valido: false, mensagem: "Cupom '" + codigo + "' nao encontrado. Verifique o codigo do cupom e tente novamente." };
    }
    return { valido: true, cupom: cupom };
}
module.exports = {
    validarProduto,
    validarQuantidade,
    validarCupom
};
