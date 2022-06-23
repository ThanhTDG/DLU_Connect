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
  tg01 = 'Nhìn trực tiếp vào Camera';
  tg02 = 'Giữa cho khuôn mặt của bạn bên trong vùng được đánh dấu';

  imgBack = '../../../../assets/icon/chat-bot/back.png';
  pageName = 'Đăng nhập';

  picture= '';
  detectedPicture = '';
  dectectType = 'LABEL_DETECTION';
  apiKey = 'AIzaSyATnIDSpxoABIUxqqnGB16K9eKbJ8eCTYI';
  visionAPIServer = 'https://vision.googleapis.com/v1/images:annotate?key=' + this.apiKey;
  visionAPIJson: any;
  fileContents: any;
  constructor(private cameraPreview: CameraPreview, private http: HttpClient) {}
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
        this.picture = 'data:image/jpeg;base64,' + imageData;
        this.tg02 = this.picture;
        this.displayResult();
        this.detectFace();
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
    //this.imgBack = '../../../../assets/icon/main/back.png';
  }
  setVisionAPI(){
    this.visionAPIJson= {
      "requests":[
        {
          "image":{
            "content": this.picture
          },
          "features":[
            {
              "type": this.dectectType,
              "maxResults": 1
            }
          ]
        }
      ]
    };
  }
  detectFace(){
    this.setVisionAPI();
    this.http.post('https://vision.googleapis.com/v1/images:annotate?key=' + this.apiKey, this.visionAPIJson).subscribe(
      (result)=>{
        this.tg01 = result.toString();
      },
      (err)=>{
        this.tg01 = 'error';
        this.tg02 = err.toString();
      }
    );
  }
  // detectFace(){
  //   this.setVisionAPIJson();
  //   this.file.writeFile(this.file.applicationStorageDirectory, 'file.json', this.fileContents).then(
  //     (result)=>{
  //       const filePath = this.file.applicationStorageDirectory+'file.json';
  //       const options: FileUploadOptions = {
  //         headers: {
  //           // eslint-disable-next-line @typescript-eslint/naming-convention
  //           'Content-Type': 'application/json'
  //         }
  //      };
  //       this.fileTransfer.create().upload(this.visionAPIServer, filePath, options,true).then(
  //         (res)=>{
  //           const jsonResult = JSON.parse(result.response);
  //           const key = 'labelAnnotations';
  //           this.picture = res.response[key][0].description;
  //         },
  //         (error)=>{
  //           this.tg01 = 'error upload';
  //         }
  //       );
  //     },
  //     (err)=>{
  //       this.tg01 = 'error write';
  //     }
  //   );
  // }
  onBack() {}
}
