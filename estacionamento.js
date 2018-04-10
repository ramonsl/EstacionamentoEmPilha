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

    push(carro){
        if(this.isFull()){
            console.log("Impossivel adicionar")
            return false;
        }else{
            this.topo++;
            this.vetor[this.topo]=carro;
            return true;
        }
    }
    pop(){
        if(this.isEmpty()){
            console.log("Estamos vazio! Galera usa UBER!");
        }else{
            var c = this.vetor[this.topo];
            this.topo--;
            return c;
        }
    }
    listar(){
        if(this.isEmpty()){
            console.log("Estamos vazio! Galera usa UBER!");
        }else{
            for(var i=0;i<=this.topo;i++){
                this.vetor[i].mostrar();
            }
        }
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
        console.log("Veiculo : "+this.placa+ " manobras : "+this.manobras);
      
    }




}

var estacionamento = new Vagas();
var rua = new Vagas();
op=0;
do{
    op=parseInt(prompt("Digite 1 para adicionar o veiculo\
     \nDigite 2 para remover o veiculo\
     \nDigite 3 para ver os veiculos no estacionamento\
     \nDigite 4 para ver os veiculos no rua\
     \n 99- Sair"));


    switch(op){
        case 1:{
            var a = new Carro(prompt("Qual a placa do veiculo?"));
            if(estacionamento.push(a)){
                a.mostrar();
                console.log("Adicionando com sucesso!")
            }else{
                console.log("Lotado!")
            }
           
            
            break;
        }

        case 2:{
            var a = new Carro(prompt("Qual a placa do veiculo?"));
            
            do{
                var rem= estacionamento.pop();
                if(rem.placa===a.placa){
                    rem.mostrar();
                    console.log("Veiculo deixando o estacionamento ");
                    rem.efetuaManobra();
                }else{
                    console.log("Veiculo movido para a rua "+rem.placa);
                    rem.efetuaManobra();
                    rua.push(rem);
                }
            }while(rem.placa!=a.placa)
       
            for(var i=0;i<=rua.topo+1;i++){
            
                add=rua.pop();
                console.log("Veiculo movido para a estacionamento "+add.placa);
                add.efetuaManobra();
                estacionamento.push(add);
            }



            break;
        }
        case 3:{
            console.log("Veiculos no estacionamento:")
            estacionamento.listar();
            break;
        }
        case 4:{
            console.log("Veiculos na rua:")
            rua.listar();
            break;
        }
        case 99:{
            console.log("Obrigado por usar os nossos serviços")
            break;
        }
    }



}while(op!=99);




