import {Component, OnInit} from '@angular/core';
import {StaticDataService} from './services/static-data.service';

@Component({
  selector: 'app-root',
  template: `
    <div class="app-container">
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private staticDataService: StaticDataService) {}

  ngOnInit(): void {
    this.staticDataService.getStaticSesso();
  }
}
