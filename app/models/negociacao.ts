export class Negociacao {
   
    constructor(
        private _data: Date, 
        public quantidade: number, 
        public valor: number
    ) {}
        
    get volume(): number {
        return  this.quantidade * this.valor;
    }

    get data(): Date {
        // evito que na chamada seja modificado a data com o setDate
        const data = new Date(this._data.getTime())
        return data;
    }
}