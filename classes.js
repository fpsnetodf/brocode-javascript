class Animal{
    constructor(nome, patas, idade, sons){
        this.nome = nome
        this.patas = patas
        this.idade = idade
        this.sons = sons
    }

    som = ()=>{ console.log(`O ${this.nome} diz ${this.sons}`)}
}

const dog = new Animal("Cão", 4, 2, "au, au!")


console.log(dog.som())

class Gatos extends Animal{
    constructor(nome, patas, idade, sons){
        super(nome, patas, idade, sons)
    }
    som = () => {
        console.log("outro som qualquer")
    }

}

const gato = new Gatos("cat", 1, 4, "mil mil miau")
gato().sons