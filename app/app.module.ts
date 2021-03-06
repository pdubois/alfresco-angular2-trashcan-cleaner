
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CoreModule } from 'ng2-alfresco-core';
import { DataTableModule } from 'ng2-alfresco-datatable';
import { SearchModule } from 'ng2-alfresco-search';
import { DocumentListModule } from 'ng2-alfresco-documentlist';
import { UploadModule } from 'ng2-alfresco-upload';
import { ActivitiFormModule } from 'ng2-activiti-form';
import { ActivitiTaskListModule } from 'ng2-activiti-tasklist';
import { ActivitiProcessListModule } from 'ng2-activiti-processlist';
import { AnalyticsModule } from 'ng2-activiti-analytics';
import { LoginModule } from 'ng2-alfresco-login';
import { UserInfoComponentModule } from 'ng2-alfresco-userinfo';
import { ViewerModule } from 'ng2-alfresco-viewer';
import { AppComponent } from './app.component';
import { routing } from './app.routes';
import { HttpModule , JsonpModule} from '@angular/http';
import { FormsModule  }   from '@angular/forms';

import {
  HomeComponent,
  SearchComponent,
  SearchBarComponent,
  ActivitiDemoComponent,
  ActivitiAppsView,
  FormViewer,
  FormNodeViewer,
  FilesComponent,
  AboutComponent,
    GetStatusComponent,
  LoginDemoComponent,
  SettingComponent
} from './components/index';

@NgModule({
    imports: [
        BrowserModule,
        routing,
        CoreModule.forRoot(),
        DataTableModule.forRoot(),
        SearchModule.forRoot(),

        DocumentListModule.forRoot(),
        UploadModule.forRoot(),
        ViewerModule.forRoot(),
        ActivitiFormModule.forRoot(),
        ActivitiTaskListModule.forRoot(),
        ActivitiProcessListModule.forRoot(),
        AnalyticsModule.forRoot(),
        LoginModule.forRoot(),
        UserInfoComponentModule.forRoot(),
        BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule

    ],
    declarations: [
        AppComponent,
        HomeComponent,
        SearchBarComponent,
        SearchComponent,
        ActivitiDemoComponent,
        ActivitiAppsView,
        FormViewer,
        FormNodeViewer,
        FilesComponent,
        AboutComponent,
        GetStatusComponent,
        LoginDemoComponent,
        SettingComponent
    ],
    providers: [],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
