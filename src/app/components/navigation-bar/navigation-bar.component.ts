/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/naming-convention */
import { AfterViewInit, Component, Input, NgModule, OnInit } from '@angular/core';
import { NativePageTransitions, NativeTransitionOptions } from '@awesome-cordova-plugins/native-page-transitions/ngx';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss'],
})
export class NavigationBarComponent implements OnInit, AfterViewInit {
  nav_contents: any;
  ic_notification: any;
  ic_home: any;
  ic_follow: any;
  ic_group: any;
  ic_person: any;

  srcHome: any;
  srcNotification: any;
  srcFollow: any;
  srcGroup: any;
  srcPerson: any;

  ntfNumberContainer: any;
  ngStyleHome: any;
  ngStyleNotification: any;
  ngStyleFollow: any;
  ngStyleGroup: any;
  ngStylePerson: any;
  ngStyleNavContents: any;
  ngStypleNtfNumber: any;

  imgBot='../../../assets/icon/chat-bot/bot.png';

  // eslint-disable-next-line @typescript-eslint/member-ordering
  @Input() location: any;
  // eslint-disable-next-line @typescript-eslint/member-ordering
  @Input() ntfNumber: any;

  options: NativeTransitionOptions = {
    direction: 'left',
    duration: 500,
    slowdownfactor: 3,
    slidePixels: 20,
    iosdelay: 100,
    androiddelay: 150,
    fixedPixelsTop: 0,
    fixedPixelsBottom: 60
  };

  constructor(private navCtrl: NavController, private nativePageTransitions: NativePageTransitions) {}

  ngOnInit(){
    this.setSrc();
    this.initView();
  }
  ngAfterViewInit() {
  }
  initView(){
    this.ic_notification = document.getElementById('ic-notification');
    this.ic_home = document.getElementById('ic-home');
    this.ic_follow = document.getElementById('ic-follow');
    this.ic_group = document.getElementById('ic-group');
    this.ic_person = document.getElementById('ic-personal');
    this.ntfNumberContainer = document.getElementById('ntf-number');

    this.nav_contents = document.getElementById('nav-contents');
    const locationSelected = parseInt(this.location, 10);

    if (locationSelected === 1) {
      this.setNotificationToClicked();
    }
    if (locationSelected === 2) {
      this.setFollowToClicked();
    }
    if (locationSelected === 3) {
      this.setGroupToClicked();
    }
    if (locationSelected === 4) {
      this.setPersonalToClicked();
    }
    if (locationSelected === 0)
    {
      this.setHomeToClicked();
    }
    this.ntfNumber='10';

    if(parseInt(this.ntfNumber, 10)===0){
      this.ngStypleNtfNumber = {
        display: 'none',
      };
    }
  }

  toToChatBot(){
    this.nativePageTransitions.fade(this.options);
    this.navCtrl.navigateRoot('chatbot-get-start');
  }

  clickHomeItem() {
    this.nativePageTransitions.slide(this.options);
    this.navCtrl.navigateRoot('home');
  }
  clickNotificationItem() {
    this.nativePageTransitions.slide(this.options);
    this.navCtrl.navigateRoot('notification');
    //this.router.navigateByUrl('notification');
  }
  clickFollowItem() {
    this.nativePageTransitions.slide(this.options);
    this.navCtrl.navigateRoot('follow');
  }
  clickGroup() {
    this.nativePageTransitions.slide(this.options);
    this.navCtrl.navigateRoot('group');
  }
  clickPerson() {
    this.nativePageTransitions.slide(this.options);
    this.navCtrl.navigateRoot('personal');
  }

  setHomeToClicked(){
    this.setItemsToNoneClick();
    this.srcHome = "../../../assets/icon/navigation-bar/active/home.svg";
    this.ngStyleHome = {
      'margin-top': '4px',
      width: '40px',
      height: '40px',
      padding: '8px',
      'background-color': 'var(--ion-color-app-primary)',
      'border-radius': '20px',
    };
    this.ngStyleNavContents = {
      'padding-inline-start': '4px',
    };
  }
  setNotificationToClicked(){
    this.setItemsToNoneClick();
    this.srcNotification = "../../../assets/icon/navigation-bar/active/notification.svg";
    this.ngStyleNotification = {
      'margin-top': '4px',
      width: '40px',
      height: '40px',
      padding: '8px',
      'background-color': 'var(--ion-color-app-primary)',
      'border-radius': '20px',
    };
  }
  setFollowToClicked(){
    this.setItemsToNoneClick();
    // this.ic_follow.src =
    //   '../../../assets/icon/navigation-bar/active/follow.svg';
    this.srcFollow ="../../../assets/icon/navigation-bar/active/follow.svg";
    this.ngStyleFollow = {
      'margin-top': '4px',
      width: '40px',
      height: '40px',
      padding: '8px',
      'background-color': 'var(--ion-color-app-primary)',
      'border-radius': '20px',
    };
  }
  setGroupToClicked(){
    this.setItemsToNoneClick();
    // this.ic_group.src = '../../../assets/icon/navigation-bar/active/group.svg';
    this.srcGroup = "../../../assets/icon/navigation-bar/active/group.svg";
    this.ngStyleGroup = {
      'margin-top': '4px',
      width: '40px',
      height: '40px',
      padding: '8px',
      'background-color': 'var(--ion-color-app-primary)',
      'border-radius': '20px',
    };
  }
  setPersonalToClicked(){
    this.setItemsToNoneClick();
    // this.ic_person.src =
    //   '../../../assets/icon/navigation-bar/active/person.svg';
    this.srcPerson = "../../../assets/icon/navigation-bar/active/person.svg";
    this.ngStylePerson = {
      'margin-top': '4px',
      width: '40px',
      height: '40px',
      padding: '8px',
      'background-color': 'var(--ion-color-app-primary)',
      'border-radius': '20px',
    };
    this.ngStyleNavContents = {
      'padding-inline-end': '4px',
    };
  }

  setSrc(){
    this.srcHome = "../../../assets/icon/navigation-bar/home.svg";
    this.srcNotification = "../../../assets/icon/navigation-bar/notification.svg";
    this.srcFollow = "../../../assets/icon/navigation-bar/follow.svg";
    this.srcGroup = "../../../assets/icon/navigation-bar/group.svg";
    this.srcPerson="../../../assets/icon/navigation-bar/person.svg";
  }
  setItemsToNoneClick() {
    this.ic_home.src = '../../../assets/icon/navigation-bar/home.svg';
    this.ic_notification.src =
      '../../../assets/icon/navigation-bar/notification.svg';
    this.ic_group.src = '../../../assets/icon/navigation-bar/group.svg';
    this.ic_follow.src = '../../../assets/icon/navigation-bar/follow.svg';
    this.ic_person.src = '../../../assets/icon/navigation-bar/person.svg';

    this.ngStyleHome = '';
    this.ngStyleNotification = '';
    this.ngStyleFollow = '';
    this.ngStyleGroup = '';
    this.ngStylePerson = '';
    this.ngStyleNavContents = '';
  }
}
