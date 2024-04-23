export class Negociacao {
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get volume() {
        return this.quantidade * this.valor;
    }
    get data() {
        // evito que na chamada seja modificado a data com o setDate
        const data = new Date(this._data.getTime());
        return data;
    }
}
