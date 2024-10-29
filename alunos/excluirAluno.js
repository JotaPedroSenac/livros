const { alunos } = require("./aluno");
var validator = require('validator');

function excluirAlunos(matricula) {
    try {

        if(validator.isEmpty(matricula)){
            console.error("A matricula precisa estar preenchida")
            return;
        }

        const indice = alunos.findIndex(aluno => 
            aluno.matricula === matricula);
        
        if(indice === -1){
            console.log("Indice não encontrado");
        }else{
            const alunoRemovido = alunos.splice(indice, 1);
            console.log("O aluno foi removido!");
        }

    } catch (error) {
        console.error("Erro ao excluir aluno", error.message)
    }
    
}

module.exports = { excluirAlunos };