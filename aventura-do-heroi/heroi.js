class heroi {
    constructor(nome, level, tipo) {
        this.nome = nome;
        this.level = level;
        this.tipo = tipo.toUpperCase();
    }

    escreva() {
        let ataque;
        if (this.tipo == "MAGO") {
            this.ataque = "MAGIA"
        } else if (this.tipo == "GUERREIRO") {
            this.ataque = "ESPADA"
        } else if (this.tipo == "MONGE") {
            this.ataque = "Artes Marciais"
        } else if (this.tipo == "NINJA") {
            this.ataque = "SHURIKEN"
        }

        console.log(`O ${this.tipo} atacou usando ${this.ataque}`);
        console.log(`--- Dados do Jogador ---`);
        console.log(`Nome: ${this.nome}`);
        console.log(`Level: ${this.level}`);
    }   
}

let heroiCriado = new heroi("Marcos", "78", "Guerreiro");

heroiCriado.escreva();