const { alunos } = require("./aluno");

function editarAluno(matricula, novoNome, novoEmail, novoTelefone) {
    const aluno = alunos.find(aluno => 
        aluno.matricula === matricula
    );

    try {
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