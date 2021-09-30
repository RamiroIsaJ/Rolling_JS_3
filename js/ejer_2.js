// clase cuenta bancaria

class CuentaB {
    constructor(paramTitular){
        this.titular = paramTitular;
        this.saldo = 0;
    }

    ingresar(nSaldo){
        this.saldo += nSaldo;
        document.write(`<br> Se ha ingresado ${nSaldo} correctamente`);
    }

    extraer(eSaldo){
        if (this.saldo-eSaldo >= 0){
            this.saldo -= eSaldo;
            document.write(`<br> Se ha extraído ${eSaldo} correctamente`);
        }else{
            document.write(`<br> Su saldo es insuficiente para la operación`);
        }       
    }

    informar(){
        document.write(`<br> Nombre del titular:  ${this.titular}`);
        document.write(`<br> Saldo disponible:  ${this.saldo}`);
    }

}

let cuenta01 = new CuentaB('Alex');
cuenta01.ingresar(1000);
cuenta01.informar();

cuenta01.extraer(700);
cuenta01.informar();