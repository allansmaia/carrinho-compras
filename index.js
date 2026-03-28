const { cadastrarProduto, listarProdutos, buscarProduto } = require("./produtos");
const { adicionarItem, removerItem, aplicarCupom, verCarrinho, limparCarrinho } = require("./carrinho");
const { finalizarPedido, listarPedidos } = require("./pedido");

console.log("=== Sistema de Carrinho de Compras ===\n");

// Cadastrando produtos
console.log("--- Cadastrando produtos ---");
cadastrarProduto("Notebook", 3500.00, 10);
cadastrarProduto("Mouse", 150.00, 50);
cadastrarProduto("Teclado", 300.00, 30);
cadastrarProduto("Monitor", 1200.00, 15);

// Listando produtos
console.log("\n--- Produtos disponiveis ---");
listarProdutos();

// Adicionando itens ao carrinho
console.log("\n--- Adicionando itens ao carrinho ---");
const notebook = buscarProduto(1);
const mouse = buscarProduto(2);
const teclado = buscarProduto(3);
adicionarItem(notebook, 1);
adicionarItem(mouse, 2);
adicionarItem(teclado, 1);

// Visualizando carrinho
console.log("\n--- Carrinho atual ---");
verCarrinho();

// Aplicando cupom
console.log("\n--- Aplicando cupom ---");
const cupom = aplicarCupom("DESCONTO10");

// Finalizando pedido
console.log("\n--- Finalizando pedido ---");
finalizarPedido(cupom);

// Testando novo pedido
console.log("\n--- Novo pedido ---");
const monitor = buscarProduto(4);
adicionarItem(monitor, 1);
verCarrinho();
finalizarPedido(null);

// Historico de pedidos
console.log("\n--- Historico de pedidos ---");
listarPedidos();

// Testando validacoes
console.log("\n--- Testando validacoes ---");
cadastrarProduto("Ab", -100, -5);
adicionarItem(notebook, 999);
aplicarCupom("CUPOM_INVALIDO");
finalizarPedido(null);
