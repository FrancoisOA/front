import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Customer} from '../../../../../models/commercial/customer-tracking/Customer';
import {CustomerService} from '../../../../../services/commercial/customer-tracking/customer.service';
import {ClientExtraDataService} from '../../../../../services/commercial/customer-tracking/client-extra-data.service';
import {environment} from '../../../../../../environments/environment';

declare let $: any;

@Component({
	selector: 'app-list-clients',
	templateUrl: './list-clients.component.html',
	styleUrls: ['./list-clients.component.css']
})
export class ListClientsComponent implements OnInit, AfterViewInit {
	customer: Customer;
	customers: Customer[];
	filteredCustomers: Customer[];
	constructor(
		private customerService: CustomerService,
		private clientExtraDataService: ClientExtraDataService
	) {}

	ngOnInit() {
		this.getCustomers();
	}

	getCustomers() {
		this.customerService.getAllCustomers(environment.user.code).subscribe(response => {
			if (response.status) {
				this.customers = response.data;
				this.filteredCustomers = this.customers;
			}
		});
		this.customerService.newCustomerSubject.subscribe(data => {
			this.filteredCustomers = [data, ...this.filteredCustomers];
			this.customers = [data, ...this.customers];
		});
		this.clientExtraDataService.updateExtraDataSubject.subscribe(extraData => {
			this.filteredCustomers.find((customer: Customer) => {
				if (customer.id === extraData.client_id) {
					customer.extra_data = extraData;
				}
				return true;
			});
		});
	}

	selectedCustomer(id: number) {
		this.customer = this.customers.find( customer => customer.id === id );
		this.customerService.seeCommentsByCustomer(this.customer);
	}

	filterCustomer(event: any) {
		const search: string = event.target.value;
		this.filteredCustomers = this.customers.filter(customer => {
			return customer.ruc.toLowerCase().indexOf(search.toLowerCase()) !== -1 || customer.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
		});
	}
	extraData(customer: Customer) {
		this.clientExtraDataService.passExtraData(customer);
		document.getElementById('side-three').classList.remove('close-sidebar');
		document.getElementById('side-three').classList.add('open-sidebar');
	}

	openForm() {
		document.getElementById('side-two').classList.remove('close-sidebar');
		document.getElementById('side-two').classList.add('open-sidebar');
	}

	ngAfterViewInit() {
		$('#my-scroll').slimScroll({height: 'calc(100% - 60px)'});
	}
}
