export class Tarefa {

    /**
     * Construtor da classe.
     * Quando definidos argumentos como public id: number por exemplo
     * já é criada na classe uma propriedade chamada id do tipo number
     * O ponto de interrogação indica que é um parâmetro opcional ao criar
     * o objeto tornando mais flexível a utilização do construtor.
     * 
     * @param id 
     * @param nome 
     * @param concluida 
     */
    constructor(
        public id?: number,
        public nome?: string,
        public concluida?: boolean
    ) {

    }

}