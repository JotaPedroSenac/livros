const prompt = require("prompt-sync")(); 
// const { alunos } = require("./alunos/aluno");
const { listarAluno } = require("./alunos/listarAluno");
const { criarAluno } = require("./alunos/criarAluno");
const { editarAluno } = require("./alunos/editarAluno");
const { excluirAlunos } = require("./alunos/excluirAluno");



listarAluno();
criarAluno("0001", "joaozinho", "joao@email", "8499999-9999");
criarAluno("0002", "Mariazinha", "maria@email", "8499999-9998");
criarAluno("0003", "Valtemir", "valtemir@email", "8499999-9997");
listarAluno();
editarAluno("0001", "joaozão", "joaozao@email", "8499999-9990");
// listarAluno();
excluirAlunos("0002");
listarAluno();
