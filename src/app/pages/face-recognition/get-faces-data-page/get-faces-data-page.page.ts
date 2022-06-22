/* eslint-disable max-len */
import { AfterViewInit, Component, OnInit } from '@angular/core';
import {
  CameraPreview,
  CameraPreviewOptions,
  CameraPreviewPictureOptions,
} from '@awesome-cordova-plugins/camera-preview/ngx';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-get-faces-data-page',
  templateUrl: './get-faces-data-page.page.html',
  styleUrls: ['./get-faces-data-page.page.scss'],
})
export class GetFacesDataPagePage implements OnInit, AfterViewInit {

  cameraPreviewOpts: CameraPreviewOptions = {
    x: 0,
    y: 0,
    width: window.screen.width,
    height: window.screen.height,
    camera: 'front',
    tapPhoto: true,
    previewDrag: false,
    toBack: true,
    alpha: 1,
    storeToFile: false,
  };
  pictureOpts: CameraPreviewPictureOptions = {
    width: 1280,
    height: 1280,
    quality: 85,
  };
  ngStyleGuide: any;
  ngStyleContainer: any;
  ngStyleTitleGuide: any;
  ngStyleError: any;
  ngStylePageName: any;
  ngStyleCameraResult: any;
  ngStyleBouder: any;
  ngStyleTitle: any;
  ngStyleCountDown: any;
  ngStyleDone: any;
  tg01 = 'Nhìn trực tiếp vào Camera';
  tg02 = 'Làm theo hướng dẫn để hoàn thành việc thiết lập';

  imgBack = '../../../../assets/icon/chat-bot/back.png';
  pageName = 'Nhận diện khuôn mặt';

  picture= '';
  takedPictures: Array<string> = [];
  pictureDescriptions: Array<number> = [1,2,3,4,5];
  isDes=0;

  countDownNumber = 5;
  tg03 = '';
  tg03s: Array<string> =['Vui lòng nhìn thẳng vào camera', 'Vui lòng nhìn sang trái', 'Vui lòng nhìn sang phải', 'Vui lòng nhìn lên trên', 'Vui lòng nhìn xuống dưới'];
  successfulImg = '../../../../assets/icon/face-recognition/success.gif';
  constructor(private cameraPreview: CameraPreview, private navtrl: NavController) {}
  ngAfterViewInit(): void {
    this.startTakePicture();
  }
  startTakePicture(){
    setTimeout(() => {
      this.takePicture();
    }, 5000);
    setTimeout(() => {
      this.takePicture();
    }, 10000);
    setTimeout(() => {
      this.takePicture();
    }, 15000);
    setTimeout(() => {
      this.takePicture();
    }, 20000);
    setTimeout(() => {
      this.takePicture();
    }, 30000);
  }
  ngOnInit() {
    this.startCamera();
    this.setGuideContent();
  }
  onGetFaceDone(){
  }
  startCamera() {
    this.cameraPreview.startCamera(this.cameraPreviewOpts).then(
      (res) => {
        this.ngStyleGuide = {
          display: 'block',
        };
        this.ngStyleError = {
          display: 'none',
        };
      },
      (err) => {
        this.ngStyleCountDown ={
          display: 'none'
        };
        this.ngStyleDone={
          display: 'none'
        };
        this.ngStyleError = {
          display: 'block',
        };
        this.ngStyleTitleGuide = {
          display: 'none',
        };
        this.ngStyleContainer = {
          background: 'white',
        };
        this.imgBack = '../../../../assets/icon/main/back.png';
        this.ngStylePageName = {
          color: 'var(--ion-color-app-green-darker)',
        };
      }
    );
  }
  setGuideContent(){
    let i = 0;
    this.tg03 = this.tg03s[i];
    setInterval(() => {
      if(this.countDownNumber <=1)
      {
        this.countDownNumber=5;
        if(i >=4){
          this.ngStyleCountDown = {
            display: 'none'
          };
          this.ngStyleDone={
            display: 'flex'
          };
        }else{
          i+=1;
          this.tg03 = this.tg03s[i];
        }
      }
      else{
        this.countDownNumber -= 1;
      }
    }, 1000);
  }
  takePicture() {
    this.cameraPreview.takePicture(this.pictureOpts).then(
      (imageData) => {
        this.picture = 'data:image/jpeg;base64,' + imageData;
        this.takedPictures.push(this.picture);
      },
      (err) => {
        this.picture = '';
        this.tg02 = err;
      }
    );
  }
  displayResult() {
    this.cameraPreview.stopCamera();
    this.ngStyleCameraResult = {
      display: 'block',
    };
    this.ngStyleError = {
      display: 'none',
    };
    this.ngStyleTitleGuide = {
      display: 'block',
    };
    this.ngStyleBouder ={
      'padding-top':'0'
    };
    this.ngStyleTitle={
      'padding-top':'12px',
      position: 'absolute'
    };
  }
  onBack() {
    this.navtrl.back();
  }
}
