import {Concept} from '../../autocomplete/Concept';

export class ServiceQuote {
    id?: number;
    concept: Concept;
    currency?: number;
    factor?: number;
    quantity?: number;
    rate?: number;
    total_rate?: number;
    cost?: number;
    total_cost?: number;
    margin?: number;
    group_name: string;
    create_group_active: boolean;
    checked_active: boolean;
    color: string;
    constructor() {
        this.concept = new Concept();
        this.currency = 162;
        this.factor = 1;
        this.quantity = 1;
        this.rate = 0;
        this.total_rate = 0;
        this.cost = 0;
        this.total_cost = 0;
        this.margin = 0;
        this.group_name = '';
        this.create_group_active = false;
        this.checked_active = false;
        this.color = '';
    }
}