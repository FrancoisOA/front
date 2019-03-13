export class AirCase {
    id?: number;
    product?: string;
    quantity?: number;
    large?: number;
    height?: number;
    width?: number;
    weight?: number;
    volume?: number;
    cbm?: number;
    constructor() {
        this.product = '';
        this.quantity = 1;
        this.large = null;
        this.height = null;
        this.width = null;
        this.weight = 0;
        this.volume = 0;
        this.cbm = 0;
    }
}
