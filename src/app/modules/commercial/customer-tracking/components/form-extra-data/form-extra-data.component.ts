import { Component, OnInit } from '@angular/core';
import {ClientExtraData} from '../../../../../models/commercial/customer-tracking/ClientExtraData';
import {ClientExtraDataService} from '../../../../../services/commercial/customer-tracking/client-extra-data.service';
import {environment} from '../../../../../../environments/environment';

@Component({
  selector: 'app-form-extra-data',
  templateUrl: './form-extra-data.component.html',
  styleUrls: ['./form-extra-data.component.css']
})
export class FormExtraDataComponent implements OnInit {
	initExtraData: ClientExtraData = {
		ia_cnt_tn: null,
		ia_product: null,
		ia_origin: null,
		ia_airline: null,
		ia_customs: null,
		ea_cnt_tn: null,
		ea_product: null,
		ea_destiny: null,
		ea_airline: null,
		ea_customs: null,
		im_cnt_teus: null,
		im_product: null,
		im_origin: null,
		im_shipping_company: null,
		im_customs: null,
		em_cant_teus: null,
		em_product: null,
		em_destiny: null,
		em_shipping_company: null,
		em_customs: null,
		client_id: null,
		created_by: environment.user.code,
	};
	extraData = this.initExtraData;
	textButton = 'Guardar';

	constructor(private clientExtraDataService: ClientExtraDataService) { }

  ngOnInit() {
		this.clientExtraDataService.extraDataSource.subscribe(customer => {
			if (customer.extra_data) {
				this.textButton = 'Actualizar';
				this.extraData = customer.extra_data;
			} else {
				this.textButton = 'Guardar';
				this.extraData = this.initExtraData;
				this.extraData.client_id = customer.id;
			}
		});
  }

  close() {
  	document.getElementById('side-three').classList.remove('open-sidebar');
		document.getElementById('side-three').classList.add('close-sidebar');
  }

	saveData() {
		this.clientExtraDataService.save(this.extraData).subscribe(response => {
			if (response.status) {
				this.clientExtraDataService.updateExtraData(response.data);
				this.extraData = this.initExtraData;
				this.close();
			} else {
				console.log(response);
			}
		}, error => console.log(error));
	}
}
