/* eslint-disable @typescript-eslint/quotes */
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';
@Component({
  selector: 'app-post-option-button',
  templateUrl: './post-option-button.component.html',
  styleUrls: ['./post-option-button.component.scss'],
})
export class PostOptionButtonComponent implements OnInit {
  imgOptionButton: string;
  hinInput: any;
  imgReplyOption: any;
  imgTagImageRemove = "../../../../assets/icon/post/comment/button/tag-remove.png";
  numReply: any;
  description: any;
  ngStyleOptionReply: any;
  ngStyleOptionView: any;
  ngStyleOptionButton: any;
  ngStyleImgaeTag: any;

  replyValue: any;
  tagImages: Array<string>=[];
  tagImagesBackUp: Array<string>=[];
  toSendTagImages: string;

  option= 0;
  viewReplies = 0;

  clickedReplyOption = false;

  // eslint-disable-next-line @typescript-eslint/member-ordering
  @Output() replyEmitter = new EventEmitter<string>();
  constructor(private camera: Camera) {
    this.numReply = 40;
    this.hinInput="Viết phản hồi ...";
    this.imgReplyOption="../../../../assets/icon/main/image.svg";
    this.description = "Người khác";
    this.imgOptionButton="../../../../assets/icon/post/comment/button/trans-1.png";
    this.replyValue="";
  }

  ngOnInit() {
    this.ngStyleOptionReply={
      display : "none"
    };
  }

  onClickOptionReply(){
    this.clickedReplyOption = true;
    this.getPhoto();
    document.getElementById("option-reply-ipnut").focus();
  }

  getPhoto() {
    const options: CameraOptions = {
      quality: 100,
      targetHeight: 300,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      sourceType: 0,
      saveToPhotoAlbum: false,
      allowEdit: false
    };

    this.camera.getPicture(options).then((imageData) => {
      const base64Image = 'data:image/jpeg;base64,' + imageData;
      this.tagImagesBackUp.push(base64Image);
      this.imgOptionButton="../../../../assets/icon/post/comment/button/trans-3.png";
      this.passChoseImgaeToDisplay();
      this.ngStyleImgaeTag={
        display: "flex"
      };
      return;
    }, (err) => {
    });
  }

  passChoseImgaeToDisplay(){
    this.clearTagImages();
    this.toSendTagImages = "";
    this.tagImagesBackUp.forEach(element => {
      this.tagImages.push(element);
      this.toSendTagImages+=element+"!1409!";
    });
    this.ngStyleOptionButton={
      "border-radius":"24px 24px 0 0",
      "background-color": "var(--ion-color-app-green-dark)"
    };
  }

  clearTagImages(){
    this.tagImages.splice(0, this.tagImages.length);
  }

  removeTagImage(image: string){
    let index=-1;
    for(let i=0; i<this.tagImagesBackUp.length; i++){
      if(this.tagImagesBackUp[i]===image){
        index = i;
        break;
      }
    }
    this.tagImagesBackUp.splice(index, 1);
    this.passChoseImgaeToDisplay();
  }

  cancelReply(){
    setTimeout(() => {
      if(this.clickedReplyOption === true){
        this.clickedReplyOption = false;
        return;
      }
      this.replyValue = "";
      this.option=0;
      this.viewDescription();
    }, 500);
  }

  onReply(){
    if(this.replyValue===""){
      this.imgOptionButton = "../../../../assets/icon/post/comment/button/trans-2.png";
    }else{
      this.imgOptionButton = "../../../../assets/icon/post/comment/button/trans-3.png";
    }
  }

  onClickOptionButton(){
    if(this.option===0){
      this.toReply();
    } else if(this.option===1){
      this.reply();
    }
  }

  reply(){
    this.passChoseImgaeToDisplay();
    this.tagImagesBackUp=[];
    if(this.replyValue!== "" || this.tagImages.length !==0){
      this.replyEmitter.emit(this.viewReplies+this.replyValue+"!1409@#"+this.toSendTagImages);
      this.numReply++;
      this.replyValue="";
      this.option=0;
      this.viewDescription();
    }else{
      this.option = 0;
    }
    this.ngStyleImgaeTag={
      display: "none"
    };
  }

  toReply(){
    this.option=1;
    this.ngStyleOptionReply={
      display: "block"
    };
    this.ngStyleOptionView={
      display: "none"
    };
    this.ngStyleOptionButton={
      "background-color": "var(--ion-color-app-green-dark)"
    };
    this.imgOptionButton="../../../../assets/icon/post/comment/button/trans-2.png";
    setTimeout(() => {
      document.getElementById("option-reply-ipnut").focus();
    }, 200);
  }

  onViewReply(){
    this.ngStyleOptionButton = {
      "background-color": "transparent"
    };
    this.ngStyleOptionView={
      display: "none"
    };
    this.viewReplies=1;
    this.replyEmitter.emit("1");
  }

  viewDescription(){
    document.getElementById("option-reply-ipnut").focus();
    this.ngStyleOptionReply={
      display: "none"
    };
    this.ngStyleOptionView={
      display: "block"
    };
    this.ngStyleOptionButton={
      "background-color": "var(--ion-color-app-white)"
    };
    this.imgOptionButton="../../../../assets/icon/post/comment/button/trans-1.png";
  }

}
