const { alunos } = require("./aluno");

function excluirAlunos(matricula) {
    try {
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