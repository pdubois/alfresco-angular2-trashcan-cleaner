import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { AlfrescoAuthenticationService } from 'ng2-alfresco-core';
import 'rxjs/Rx';

@Injectable()
export class TrashcanService {

    constructor(private http: Http, private authService: AlfrescoAuthenticationService){}

    getStatus () {
        //return this.http.get('http://time.jsontest.com').map((response: Response) => response.json());
        return this.http.get('http://172.24.0.2:8080/alfresco/s/trashcan/getstatus?alf_ticket=' + this.authService.getTicketEcm()).map((response: Response) => response.json());
    }
}
