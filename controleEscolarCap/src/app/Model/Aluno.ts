export class Aluno{
    codAluno: number = 0;
    nomeAluno: String = '';
    cpfAluno: String = '';
    dataNascimento!: Date;
    dataMatricula!: Date;
    nomePai: String = '';
    nomeMae: String = '';
    responsavel: String = '';
    foneResponsavel: String = '';
    matriculado!: boolean;

    constructor(nomeAluno: String, cpfAluno: String, dataNascimento: Date,
        dataMatricula: Date, nomePai: String, nomeMae: String, responsavel: String,
        foneResponsavel: String, matriculado: boolean){
            this.nomeAluno = nomeAluno;
            this.cpfAluno = cpfAluno;
            this.dataNascimento = dataNascimento;
            this.dataMatricula = dataMatricula;
            this.nomePai = nomePai;
            this.nomeMae = nomeMae;
            this.responsavel = responsavel;
            this.foneResponsavel = foneResponsavel;
            this.matriculado = matriculado;
    }
}
