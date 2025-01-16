import { Component } from '@angular/core';
import { SignalRService } from './services/signalr.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private service: SignalRService) {
    this.service.startConnection('1');
  }
  title = 'sample_task_angular';
}
