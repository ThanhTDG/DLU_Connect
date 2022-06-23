/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable quote-props */
/* eslint-disable max-len */
import { AfterViewInit, Component, OnInit } from '@angular/core';
import {
  CameraPreview,
  CameraPreviewOptions,
  CameraPreviewPictureOptions,
} from '@awesome-cordova-plugins/camera-preview/ngx';
import { HttpClient } from '@angular/common/http';
import { VisionApiService } from 'src/app/services/api/vision-api.service';
import { QueryConstraint } from 'firebase/firestore';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-face-recognition-page',
  templateUrl: './face-recognition-page.page.html',
  styleUrls: ['./face-recognition-page.page.scss'],
})
export class FaceRecognitionPagePage implements OnInit, AfterViewInit {
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
  tg02 = 'Giữa cho khuôn mặt của bạn bên trong vùng được đánh dấu';

  imgBack = '../../../../assets/icon/chat-bot/back.png';
  pageName = 'Đăng nhập';

  picture= '';
  detectedPicture = '';

  detectedSuccess = false;

  countDownNumber = 5;
  tg03 = '';
  errorImg = '../../../../assets/icon/face-recognition/error.gif';
  constructor(private cameraPreview: CameraPreview, private http: HttpClient, private visionApi: VisionApiService, private navCtrl: NavController) {}
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.takePicture();
    }, 5000);
  }
  ngOnInit() {
    this.startCamera();
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
        this.ngStyleCountDown = {
          display: 'block'
        };
        this.setGuideContent();
      },
      (err) => {
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
  takePicture() {
    this.cameraPreview.takePicture(this.pictureOpts).then(
      (imageData) => {
        this.displayResult(imageData);
        this.detectFace(''+imageData);
      },
      (err) => {
        this.tg02 = err;
      }
    );
  }
  displayResult(base64) {
    this.picture ='data:image/jpeg;base64,' +  base64;
    this.cameraPreview.stopCamera();
    this.ngStyleContainer = {
      background: 'black',
    };
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
  detectFace(base64: string){
    this.visionApi.getFace(base64).subscribe(
      (result)=>{
        const label = result['responses'][0]['labelAnnotations'];
              if (label === undefined || label === null) {
                this.ngStyleDone={
                  display: 'flex'
                };
              } else {
                label.forEach((lb) =>{
                  //to view respone
                  this.tg02 = lb.description;
                    const kq = ''+lb.description;
                    if(kq === 'Forehead'){
                      this.detectedSuccess = true;
                      this.onDetectSuccess();
                    }else{
                      this.ngStyleDone={
                        display: 'flex'
                      };
                      this.ngStyleCameraResult ={
                        display: 'none'
                      };
                      this.ngStyleTitle={
                        'padding-top':'12px',
                      };
                    }
                }
                );
              }
      },
      (err)=>{this.tg02 =err['error']['error']['message'];}
    );
  }
  setGuideContent(){
    const i = 1;
    this.tg03 = 'Vui lòng hướng khuôn mặt của bạn về camera';
    setInterval(() => {
      if(this.countDownNumber <=1)
      {
        this.countDownNumber=5;
        if(i >=1){
          this.ngStyleCountDown = {
            display: 'none'
          };
        }
      }
      else{
        this.countDownNumber -= 1;
      }
    }, 1000);
  }
  onBack() {
    this.navCtrl.back();
  }
  onDetectSuccess(){
    //banj hieu su ly o day hes
  }
  onRetry(){
    this.ngStyleCameraResult ={
      display: 'none'
    };
    this.ngStyleDone={
      display: 'none'
    };
    this.ngStyleContainer = {
      '--background': 'transparent'
    };
    this.startCamera();
    setTimeout(() => {
      this.takePicture();
    }, 5000);
  }
}
