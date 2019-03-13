import {Client} from '../../autocomplete/Client';
import {Port} from './Port';

export class Quote {
    id: number;
    language: number;
    payment_method: number;
    type_service: string;
    via: number;
    incoterm: string;
    type_incoterm: string;
    client: Client;
    contact: string;
    commercial: string;
    product: string;
    origin: Port;
    destination: Port;
    all_observations: string;
    /* totals */
    total_weight: number;
    total_volume: number;
    total_cbm: number;
    total_ton: number;
    total_international_transport: number;
    total_expenses_origin: number;
    total_expenses_destination: number;
    total_additional_services: number;
    total_profit: number;
    constructor() {
        this.via = 1;
        this.incoterm = '';
        this.type_service = 'IA';
        this.type_incoterm = '';
        this.commercial = '';
        this.product = '';
        this.client = new Client();
        this.origin = new Port();
        this.destination = new Port();
        /* Init Totals */
        this.total_weight = 0.00;
        this.total_volume = 0.00;
        this.total_cbm = 0.00;
        this.total_ton = 0.00;
        this.total_international_transport = 0.00;
        this.total_expenses_origin = 0.00;
        this.total_expenses_destination = 0.00;
        this.total_additional_services = 0.00;
        this.total_profit = 0.00;

        this.all_observations = JSON.stringify({
            'observation': '',
            'international_transport': {
                'es': '',
                'en': ''
            },
            'expenses_origin': {
                'es': '* Gastos Locales afectos al IGV (18%) - NO INCLUIDO',
                'en': '* Rates don\'t include 18% IVA TAX'
            },
            'expenses_destination': {
                'es': '* Gastos en Destino afectos al IGV (18%) - NO INCLUIDO',
                'en': '* Rates don\'t include 18% IVA TAX'
            },
            'additional_services': {
                'es': '* Servicios Adicionales afectos al IGV (18%) - NO INCLUIDO',
                'en': '* Rates don\'t include 18% IVA TAX'
            },
            'tax': {
                'es': '* La percepción del I.G.V. es 3.5% si es importador frecuente, 5% si la mercancía es usada y 10% si es su primera importación.',
                'en': '* The perception of I.G.V. it is 3.5% if it is a frequent importer, 5% if the merchandise is used and 10% if it is its first import.'
            }
        });
    }
}