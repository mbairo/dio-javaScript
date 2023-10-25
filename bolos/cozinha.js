class formaDeBolo {
    constructor(saborDaMassa, saborDoRecheio) {
        this.saborDaMassa = saborDaMassa;
        this.saborDoRecheio = saborDoRecheio;
    }

    addPedido() {
        console.log(`Adicionando pedido na fila...`)    
    }

    assar() {
        console.log(`Assando um bolo de ${this.saborDaMassa} com recheio de ${this.saborDoRecheio}`)
    }

    escrever() {
        console.log(`Bolo pronto: Um delicioso bolo de ${this.saborDaMassa} com recheio de ${this.saborDoRecheio}`);
    }
}


let boloFesta = new formaDeBolo("Chocolate", "Nutella");
let boloPremium = new formaDeBolo("Baunilha", "Coco");


boloFesta.addPedido();
boloFesta.assar();
boloPremium.assar();
boloFesta.escrever();
boloPremium.escrever();

