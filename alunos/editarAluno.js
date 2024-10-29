const { alunos } = require("./aluno");
var validator = require('validator');

function editarAluno(matricula, novoNome, novoEmail, novoTelefone) {
    const aluno = alunos.find(aluno => 
        aluno.matricula === matricula
    );

    try {
        if(
            validator.isEmpty(matricula) ||
            validator.isEmpty(novoNome) ||
            !validator.isEmail(novoEmail) ||
            validator.isEmpty(novoTelefone)
        
        ){
            console.error("Todos os dados precisam estar preenchidos");
            return;
            
        }
        

        if(aluno){
            aluno.nome = novoNome;
            aluno.email = novoEmail;
            aluno.telefone = novoTelefone;
            console.log(`Aluno atualizado com sucesso`)
        }else{
            console.log("Aluno não existe ou não encontrado");
        }
        
    } catch (error) {
        console.error("Erro ao editar aluno", error.message);
    }
}

module.exports = { editarAluno };