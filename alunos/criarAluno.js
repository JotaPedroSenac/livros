const { alunos } = require("./aluno");
var validator = require('validator');

function criarAluno(matricula, nome, email, telefone) {
    try {
        const novoAluno = {
            matricula: matricula,
            nome: nome,
            email: email,
            telefone: telefone
        };
        if(!validator.isEmail(email)){
            console.error("O e-mail informado é inválido");
            return;
        }
        

        if (
            validator.isEmpty(nome) || 
            validator.isEmpty(matricula) ||
            validator.isEmpty(telefone)
        ){
            console.error("Os dados não podem estar em braco");
            return;
        }
    
        alunos.push(novoAluno);
        console.log(`Aluno ${novoAluno.nome} criado com sucesso`);
    } catch (error) {
        console.error("Erro ao cadastrar dados", error.message);
    }

}

module.exports = { criarAluno };