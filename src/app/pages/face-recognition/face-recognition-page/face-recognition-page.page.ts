/* eslint-disable max-len */
import { Component, OnInit } from '@angular/core';
import { CameraPreview, CameraPreviewPictureOptions, CameraPreviewOptions, CameraPreviewDimensions } from '@awesome-cordova-plugins/camera-preview/ngx';
@Component({
  selector: 'app-face-recognition-page',
  templateUrl: './face-recognition-page.page.html',
  styleUrls: ['./face-recognition-page.page.scss'],
})
export class FaceRecognitionPagePage implements OnInit {
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
    storeToFile: false
  };
  imgGuide = '../../../assets/icon/face-recognition/imgGuide.png';
  ngStyleGuide: any;
  ngStyleContainer: any;
  ngStyleTitleGuide: any;
  ngStyleError: any;
  ngStylePageName: any;
  tg01='Nhìn trực tiếp vào Camera';
  tg02='Giữa cho khuôn mặt của bạn bên trong vùng được đánh dấu';

  imgBack='../../../../assets/icon/chat-bot/back.png';
  pageName='Đăng nhập';
  constructor(private cameraPreview: CameraPreview) { }

  ngOnInit() {
    this.startCamera();
  }
  startCamera(){
    this.cameraPreview.startCamera(this.cameraPreviewOpts).then(
      (res)=>{
      this.ngStyleGuide={
        display: 'block'
      };
      this.ngStyleError={
        display:'none'
      };
    }, (err)=>{
      this.ngStyleError={
        display:'block'
      };
      this.ngStyleTitleGuide={
        display: 'none'
      };
      this.ngStyleContainer={
        background:'white'
      };
      this.imgBack='../../../../assets/icon/main/back.png';
      this.ngStylePageName={
        color: 'var(--ion-color-app-green-darker)'
      };
    }
    );
  }
  onBack(){}
}
