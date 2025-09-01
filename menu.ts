import leia = require("readline-sync");
import { colors } from "./src/util/Colors";
import { Conta } from "./src/model/Conta";
import { ContaCorrente } from "./src/model/ContaCorrente";
import { ContaPoupaca } from "./src/model/ContaPoupanca";

export function main() {

let opcao: number;
let continua: Boolean = true

const conta: Conta =  new Conta(11, 169, 1,'Maria', 1000);
const contaCorrente: ContaCorrente = new ContaCorrente(12, 169, 1,'Jose', 25000, 1000);
const contaPoupanca: ContaPoupaca = new ContaPoupaca(13, 169, 2, "Flavio", 2000, 15);

while(continua){
    console.log(colors.fg.yellow,`
**********************************************
*                                            *
*               SIERA BANK                   *
*                                            *
**********************************************

1 - Criar Conta
2 - Listar todas as Contas
3 - Buscar Conta por Numero
4 - Atualizar Dados da Conta
5 - Apagar Conta
6 - Sacar
7 - Depositar
8 - Transferir valores entre Contas
9 - Sair

**********************************************
`, colors.reset)

console.log("Entre com a opção desejada:");
opcao = leia.questionInt("");

if(opcao === 9 ){

    continua = false
    console.log(colors.fg.greenstrong, "\nSiera Bank - Seu patrimônio no ponto mais alto. ", colors.reset)
    sobre();
    process.exit(0)
 }



 switch(opcao){
    case 1:
        console.log(colors.fg.whitestrong, "\n\nCriar Conta\n\n", colors.reset)
        break;

    case 2:
        console.log("\n\nListar todas as Contas\n\n")
        break;

    case 3:
        console.log("\n\nConsultar dados da conta - por número\n\n")
        break;
    
    case 4:
        console.log("\n\nAtualizar dados da Conta\n\n")
        break;
        
    case 5:
        console.log("\n\nApagar uma Conta\n\n")
        break;
        
    case 6:
        console.log("\n\nSaque\n\n")
        break;
        
    case 7:
        console.log("\n\nDepósito\n\n")
        break;  
        
    case 8:
        console.log("\n\nTransferêcia entre Contas\n\n")
        break;
        
    default:
        console.log("\nOpção Inválida!")
        break;
    }

}
    
}

export function sobre(): void{

console.log(colors.fg.green,`
*****************************************************
Projeto Desenvolvido por:
Flávio Serra - sonyflavio@gmail.com
https://github.com/sonyflavio

*****************************************************
`, colors.reset);

}

main();




