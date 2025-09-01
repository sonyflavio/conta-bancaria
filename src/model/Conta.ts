export class Conta{

    private _numero: number;
    private _agencia: number
    private _tipo: number;
    private _titular: string;
    private _saldo: number;

    constructor(numero: number, agencia: number, tipo: number, titular: string, saldo: number){
        this._numero = numero
        this._agencia = agencia
        this._tipo = tipo
        this._titular = titular
        this._saldo = saldo
    }

    public get numero(): number {
    return this._numero;
}

public set numero(numero: number) {
    this._numero = numero;
}

public get agencia(): number {
    return this._agencia;
}

public set agencia(agencia: number) {
    this._agencia = agencia;
}

public get tipo(): number {
    return this._tipo;
}

public set tipo(tipo: number) {
    this._tipo = tipo;
}

public get titular(): string {
    return this._titular;
}

public set titular(titular: string) {
    this._titular = titular;
}

public get saldo(): number {
    return this._saldo;
}

public set saldo(saldo: number) {
    this._saldo = saldo;
}

sacar(valor: number): boolean{

    if(this._saldo < valor){
        console.log("\n Saldo Insuficiente! ");
        return false;
    }

    this._saldo = this._saldo - valor;
    console.log(`Saque de R$ ${valor} efetuado com sucesso`)
    return true;

}

depositar(valor: number): void{
    this._saldo + valor

}

visualizar(): void{

    let tipo: string = "";

    switch(this.tipo){

        case 1:
            tipo = "Conta Corrente"
            break;

        case 2:
            tipo = "Conta Poupança"
            break;
        }

        console.log(`
******************************
Dados da Conta:
******************************
Numero da Conta: ${this._numero}
Agência: ${this._agencia}
Tipo da Conta: ${tipo}
Titular: ${this._titular}
Saldo: ${this._saldo.toFixed(2)}
`);

        
}





}