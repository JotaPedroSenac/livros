const { alunos } = require("./aluno");

function criarAluno(matricula, nome, email, telefone) {
    try {
        const novoAluno = {
            matricula: matricula,
            nome: nome,
            email: email,
            telefone: telefone
        };
    
        alunos.push(novoAluno);
        console.log(`Aluno ${novoAluno.nome} criado com sucesso`);
    } catch (error) {
        console.error("Erro ao cadastrar dados", error.message);
    }

}

module.exports = { criarAluno };