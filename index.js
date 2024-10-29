const prompt = require("prompt-sync")(); 
// const { alunos } = require("./alunos/aluno");
const { listarAluno } = require("./alunos/listarAluno");
const { criarAluno } = require("./alunos/criarAluno");
const { editarAluno } = require("./alunos/editarAluno");
const { excluirAlunos } = require("./alunos/excluirAluno");



// criarAluno("0001", "joaozinho", "joaozinho@email.com", "8499999-9999");
criarAluno("0002", "Mariazinha", "maria@email.com", "8499999-9998");
// criarAluno("0003", "Valtemir", "valtemir@email.com", "8499999-9997");
// // listarAluno();
// editarAluno("0001", "joaozão", "joaozao@email.com", "8499999-9990");
// listarAluno();
excluirAlunos("0002");
// listarAluno();
