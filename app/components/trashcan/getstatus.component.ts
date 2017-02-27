

import {Component, OnInit, OnDestroy} from '@angular/core';
import {Http, Response} from '@angular/http';
import { ObjectDataTableAdapter } from 'ng2-alfresco-datatable';
import { LogService } from 'ng2-alfresco-core';
import { TrashcanService} from '../../jobservices/trashcan.services';
import {TimerObservable} from "rxjs/observable/TimerObservable";


@Component({
  selector: 'about-page2',
  templateUrl: './getstatus.component.html',
    providers: [TrashcanService]
})
export class GetStatusComponent implements OnInit, OnDestroy {

  data: ObjectDataTableAdapter;
  status : any;
    subscription : any;
  constructor(private http: Http,
              private logService: LogService,
              private trashcanService: TrashcanService)  {
  }

  ngOnInit() {
      let timer = TimerObservable.create(2000, 5000);
      this.subscription = timer.subscribe(t => {
          this.refreshStatus();
      });
  }

  refreshStatus(){
      this.trashcanService.getStatus().subscribe(
          (data: any) =>  this.status = data.STATUS
      )
  }

  ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
