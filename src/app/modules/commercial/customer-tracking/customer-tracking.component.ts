import {Component, OnInit, ViewEncapsulation, ViewChild} from '@angular/core';
import {CustomerService} from '../../../services/commercial/customer-tracking/customer.service';
import {Customer} from '../../../models/commercial/customer-tracking/Customer';
import {Comment} from '../../../models/commercial/customer-tracking/Comment';
import {CalendarComponent} from 'ng-fullcalendar';
import {Options} from 'fullcalendar';
import {DataCalendarService} from '../../../services/commercial/customer-tracking/data-calendar.service';
import {DataCalendar} from '../../../models/commercial/customer-tracking/DataCalendar';
import * as moment from 'moment';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-customer-tracking',
  templateUrl: './customer-tracking.component.html',
  styleUrls: ['./customer-tracking.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CustomerTrackingComponent implements OnInit {
  calendarOptions: Options;
  @ViewChild(CalendarComponent) ucCalendar: CalendarComponent;
  visible: Boolean = false;
  private customer: Customer;
  name_customer = '';
  listDataCalendar: DataCalendar[] = [];
  constructor(private customerService: CustomerService, private dataCalendarService: DataCalendarService) { }

  ngOnInit() {
    this.initComponent();
    this.initFullCalendar();
  }
  showCalendar() {
    this.visible = false;
    this.ucCalendar.renderEvents(this.listDataCalendar);
  }
  initComponent() {
    this.customerService.seeCommentsSubject.subscribe((customer: Customer) => {
      this.customer = customer;
      this.name_customer = customer.name;
      this.visible = true;
    });
    this.dataCalendarService.newDataCalendar.subscribe((comment: Comment) => {
      console.log(comment);
      const id: number = Number(comment.id);
      const dataCalendar: DataCalendar = this.listDataCalendar.find(data => {
        if (data.id === id) {
          let date: string = moment(comment.date).format('YYYY-MM-DD');
          if (comment.hour != null) {
            date += 'T' + comment.hour
            data.allDay = false;
          }
          data.start = date;
        }
        return data.id === id;
      });
      if (!dataCalendar) {
        let color = '#d2d6de';
        let textColor = '#FFFFFF';
        if (comment.type === 'cite') { color = '#f39c12'; }
        if (comment.type === 'call') { color = '#00a65a'; }
        if (comment.type === 'comment') { textColor = '#000000'; }
        this.listDataCalendar.push({
          id: Number(comment.id),
          title: comment.comment,
          start: moment(comment.date).format('YYYY-MM-DD'),
          backgroundColor: color,
          borderColor: color,
          textColor: textColor,
          allDay: true,
        });
      }
    });
  }
  initFullCalendar() {
    this.dataCalendarService.getAllData(environment.user.code)
      .subscribe(response => {
        response.forEach((data: Comment) => {
          let color = '#d2d6de';
          let textColor = '#FFFFFF';
          let allDay = true;
          if (data.type === 'cite') { color = '#f39c12'; }
          if (data.type === 'call') { color = '#00a65a'; }
          if (data.type === 'comment') { textColor = '#000000'; }
          let date: string = data.date.toString();
          if (data.hour != null) {
            date += 'T' + data.hour
            allDay = false;
          }
          this.listDataCalendar.push({
            id: Number(data.id),
            title: data.comment,
            start: date,
            backgroundColor: color,
            borderColor: color,
            textColor: textColor,
            allDay: allDay,
          });
        });
        this.calendarOptions = {
          height: 'parent',
          defaultView: 'month',
          editable: false,
          eventLimit: false,
          header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
          },
          buttonText: {
            today: 'Hoy',
            month: 'Mes',
            week: 'Semana',
            day: 'Día',
          },
          selectable: false,
          events: this.listDataCalendar,
          timeFormat: 'H(:mm)',
          locale: 'es'
        };
      }, error => console.log(error));
  }
}
