import leia = require("readline-sync");
import { colors } from "./src/util/Colors";
import { Conta } from "./src/model/Conta";
import { ContaCorrente } from "./src/model/ContaCorrente";
import { ContaPoupaca } from "./src/model/ContaPoupanca";
import { ContaController } from "./src/controller/ContaController";

export function main() {

let opcao, numero, agencia, tipo, saldo, limite, aniversario: number;
let titular: string;
const tiposConta = ['Conta Corrente', 'Conta Poupanca']
let continua: Boolean = true

let contas: ContaController = new ContaController();





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
        console.log(colors.fg.whitestrong, "\n\nCriar Conta\n\n", colors.reset);

        console.log("Digite o Número da agência: ");
        agencia = leia.questionInt("");

        console.log("Digite o Nome do Titular da conta: ");
        titular = leia.question("");

        console.log("\nDigite o tipo da Conta: ");
        tipo = leia.keyInSelect(tiposConta, "", {cancel: false}) + 1;

        console.log("\nDigite o Saldo da conta (R$): ");
        saldo = leia.questionFloat("");

        switch (tipo) {
            case 1:
                console.log("Digite o Limite da Conta (R$): ");
                limite = leia.questionFloat("");
                contas.cadastrar(
                new ContaCorrente(contas.gerarNumero(), agencia, tipo, titular, saldo, limite));
                break;

            case 2:
                console.log("Digite o Dia do aniversário da Conta Poupança: ");
                aniversario = leia.questionInt("");
                contas.cadastrar(new ContaPoupaca(contas.gerarNumero(), agencia, tipo, titular, saldo, aniversario));
                break;
    }
    keyPress()
    break;


    case 2:
        console.log("\n\nListar todas as Contas\n\n")
        contas.listarTodas();
        keyPress()
        break;

    case 3:
        console.log("\n\nConsultar dados da conta - por número\n\n")

        console.log("Digite o numero da Conta: ")
        numero = leia.questionInt("");
        contas.procurarPorNumero(numero);

        keyPress()
        break;
    
    case 4:
        console.log("\n\nAtualizar dados da Conta\n\n")

        console.log("Digite o número da Conta: ");
    numero = leia.questionInt("");

    let conta = contas.buscarNoArray(numero);

    if (conta != null) {

        console.log("Digite o Número da agência: ");
        agencia = leia.questionInt("");

        console.log("Digite o Nome do Titular da conta: ");
        titular = leia.question("");

        tipo = conta.tipo;

        console.log("\nDigite o Saldo da conta (R$): ");
        saldo = leia.questionFloat("");

        switch (tipo) {
            case 1:
                console.log("Digite o Limite da Conta (R$): ");
                limite = leia.questionFloat("");
                contas.atualizar(
                    new ContaCorrente(numero, agencia, tipo, titular, saldo, limite));
                break;
            case 2:
                console.log("Digite o Dia do aniversário da Conta Poupança: ");
                aniversario = leia.questionInt("");
                contas.atualizar(new ContaPoupaca(numero, agencia, tipo, titular, saldo,
                    aniversario));
                break;
        }

    } else {
        console.log(colors.fg.red, "\nA Conta numero: " + numero +
            " não foi encontrada!", colors.reset);
    }

    keyPress()
    break;
        
    case 5:
        console.log("\n\nApagar uma Conta\n\n");

        console.log("Digite o numero da Conta: ");
        numero = leia.questionInt("");
        contas.deletar(numero);

        keyPress()
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


function keyPress() {
  console.log("\nPressione ENTER para continuar...");
  leia.question(""); // espera o usuário apertar ENTER
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




