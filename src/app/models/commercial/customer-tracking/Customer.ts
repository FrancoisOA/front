import {ClientExtraData} from './ClientExtraData';

export interface Customer {
	id?: number;
	type?: string;
	name?: string;
	contact?: string;
	phone?: string;
	email?: string;
	address?: string;
	ruc?: string;
	user_id?: any;
	created_at?: string;
	extra_data?: ClientExtraData;
}