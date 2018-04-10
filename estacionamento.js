class Vagas{
    constructor(){
        this.vetor= new Array();
        this.topo=-1;
        this.tam=3;
    }
    isEmpty(){
        if (this.topo==-1){
            return true;
        }else{
            return false;
        }
    }
    isFull(){
        if (this.topo==this.tam-1){
            return true;
        }else{
            return false;
        }
    }
    getSize(){
        return this.topo+1;
    }
}
class Carro{
    constructor(p){
        this.placa=p;
        this.manobras=1;
    }
    efetuaManobra(){
        this.manobras++;
    }
    mostrar(){
        console.log("Veiculo : "+this.placa);
        console.log("Efetuou : "+this.manobras);
    }




}

var estacionamento = new Vagas();
var rua = new Vagas();
console.log("Digite 1 para adicionar o veiculo");
console.log("Digite 2 para remover o veiculo");
op=0;
do{
    op=parseInt(prompt("Digite 1 para adicionar o veiculo\n Digite 2 para remover o veiculo\n 99- Sair"));


    switch(op){
        case 1:{
            var a = new Carro(prompt("Qual a placa do veiculo?"));
            break;
        }

        case 2:{
            var a = new Carro(prompt("Qual a placa do veiculo?"));
            break;
        }
        case 99:{
            console.log("Obrigado por usar os nossos serviços")
            break;
        }
    }



}while(op!=99);




