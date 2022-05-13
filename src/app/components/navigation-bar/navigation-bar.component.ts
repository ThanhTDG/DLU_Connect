import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss'],
})
export class NavigationBarComponent implements OnInit, AfterViewInit {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  ic_notification: any;
  objActive: any;
  constructor() { }

  ngOnInit() {}
  ngAfterViewInit(){
    this.ic_notification = document.getElementById('ic-notification');
  }
  clickItem(){
    this.objActive = {
      'margin-top': '4px',
      width: '40px',
      height: '40px',
      padding: '8px',
      'background-color': 'var(--ion-color-app-primary)',
      'border-radius': '20px'
    };
  }

}
