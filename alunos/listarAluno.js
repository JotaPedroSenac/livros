const { alunos } = require("./aluno");

function listarAluno() {
    try {
        alunos.forEach(aluno => 
            // console.table(alunos)
            console.log(aluno)
        );
    } catch (error) {
        console.error("Erro ao listar alunos");
    }
}

module.exports = { listarAluno };