const prompt = require("prompt-sync")(); 
// const { alunos } = require("./alunos/aluno");
const { listarAluno } = require("./alunos/listarAluno");
const { criarAluno } = require("./alunos/criarAluno");
const { editarAluno } = require("./alunos/editarAluno");
const { excluirAlunos } = require("./alunos/excluirAluno");



// criarAluno("0001", "joaozinho", "joaozinho@email.com", "8499999-9999");
// criarAluno("0002", "Mariazinha", "maria@email.com", "8499999-9998");
// criarAluno("0003", "Valtemir", "valtemir@email.com", "8499999-9997");
// // listarAluno();
// editarAluno("0001", "joaozão", "joaozao@email.com", "8499999-9990");
// listarAluno();
// excluirAlunos("0002");
// listarAluno();

function exibirMenu() {
    console.log("========================");
    console.log("1 - Criar Aluno");
    console.log("2 - Editar Aluno");
    console.log("3 - Excluir Aluno");
    console.log("4 - Listar Aluno");
    console.log("5 - Sair");
}

let opcao;
let matricula;

do {
    exibirMenu();
    opcao = parseInt(prompt("Digite uma opção:"));
    switch (opcao) {
        case 1:
            matricula = prompt("Digite a matricula:");
            let nome = prompt("Digite o nome:");
            let email = prompt("Digite o email:");
            let telefone = prompt("Digite o telefone:");

            criarAluno(matricula, nome, email, telefone);
            listarAluno();
            break;
        case 2:
            // console.log("Editando Aluno")
            matricula = prompt("Digite a matricula:");
            let novoNome = prompt("Digite o novo Nome");
            let novoEmail = prompt("Digite o novo Email");
            let novoTelefone = prompt("Digite o novo Telefone");

            editarAluno(matricula, novoNome, novoEmail, novoTelefone);
            listarAluno();
            break;
        case 3:
            // console.log("Excluindo Aluno")
            matricula = prompt("Digite a matricula:");
            excluirAlunos(matricula);
            break;
        case 4:
            listarAluno();
            break;
        case 5:
            console.log("Saindo do sistema")
            break;
        default:
            console.log("Valores inválidos");
            break;
    }
} while (opcao !== 5);

