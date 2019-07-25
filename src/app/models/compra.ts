export class Compra {
    idCompra:number;
    idTarjeta: number;
    nombreTarjeta: String;
    nombreUsuario: String;
    apellidoUsuario: String;

    constructor (idCompra?: number, idTarjeta?: number, nombreTarjeta?: String, nombreUsuario?: String, apellidoUsuario?: String){
        this.idCompra = idCompra;
        this.idTarjeta = idTarjeta;
        this.nombreTarjeta = nombreTarjeta;
        this.nombreUsuario = nombreUsuario;
        this.apellidoUsuario = apellidoUsuario;
    }
}
