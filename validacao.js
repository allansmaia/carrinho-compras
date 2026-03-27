// validaçoes dos dados do carrinho

function validarProduto(nome, preco, estoque) {
    if (!nome || nome.trim().length < 3) {
<<<<<<< HEAD
        return { valido: false, mensagem: "Nome do produto deve conter pelo menos 3 caracteres." };
=======
        return { valido false, mensagem: "Nome do produto deve conter pelo menos 3 caracteres." };
>>>>>>> feature/validacao
    }
    if (!preco || preco <= 0) {
        return { valido: false, mensagem: "Preco do produto deve ser um valor positivo." };
    }
    if (!estoque || estoque < 0) {
        return { valido: false, mensagem: "Estoque do produto deve ser um valor nao negativo." };
    }
<<<<<<< HEAD
    return { valido: true, mensagem: "Produto vlido." };
=======
    return { valido: true, mensagem: "Produto valido." };
>>>>>>> feature/validacao
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
        return { valido: false, mensagem: "Codigo de cupom invalido." };
    }
    return { valido: true, cupom: cupom };
}

module.exports = {
    validarProduto,
    validarQuantidade,
    validarCupom
};
