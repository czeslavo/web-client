import { Component } from '@angular/core';
import { MonitorsService } from './monitors.service';
import { Observable } from 'rxjs';
import { Monitor } from './shared/monitor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'web-client';

  monitors: Observable<Monitor[]> = this._monitorService.list();
  
  constructor(private _monitorService: MonitorsService){

  }
}
