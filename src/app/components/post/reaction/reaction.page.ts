/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/quotes */
import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';

@Component({
  selector: 'app-reaction',
  templateUrl: './reaction.page.html',
  styleUrls: ['./reaction.page.scss'],
})
export class ReactionPage implements OnInit {
  numComment: any;
  numLike: any;
  numShare: any;
  numReaction: any;
  imgLike = "../../../../assets/icon/post/inactive/like.png";
  imgShare = "../../../../assets/icon/post/inactive/share.png";
  imgTagImageRemove = "../../../../assets/icon/post/comment/button/tag-remove.png";
  ngStyleComment: any;
  ngStyleLike: any;
  ngStyleShare: any;
  ngStyleImgaeTag: any;

  ngStyleContentComment: any;
  ngStyleContentLike: any;
  ngStyleContentShare: any;

  imgSendButton: any;
  imgInputOption: any;

  options: string[]= ["comment", "like", "share"];

  inputComment: any;
  tagImages: Array<string>=[];
  tagImagesBackUp: Array<string>=[];
  toSendTagImages= "";

  comments:  Array<string>=["Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttito..."];

  //student avatar
  avatar = "../../../../assets/icon/default/default-avatar.png";
  commentContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttito...";
  commentAvatar ="../../../../assets/icon/default/default-user-avatar.png";
  imgContent: any;
  constructor(private camera: Camera) {
    this.imgContent = "";
    this.inputComment="";
  }

  ngOnInit() {
    this.numComment = 40;
    this.numLike = 40;
    this.numShare= 40;
    this.viewComment();
    this.imgSendButton="../../../../assets/icon/post/comment/button/trans-2.png";
    this.imgInputOption="../../../../assets/icon/main/image.svg";
  }

  onClickOption(option: any){
    switch(option){
      case this.options[0]:
        this.viewComment();
        break;
      case this.options[1]:
        this.viewLike();
        break;
      case this.options[2]:
        this.viewShare();
        break;
    }
  }

  onClickSendComment(){
    this.passChoseImgaeToDisplay();
    this.tagImagesBackUp=[];
    if(this.inputComment!=="" || this.tagImages.length!==0){
      this.comments.push(this.inputComment);
      this.inputComment="";
      this.imgSendButton="../../../../assets/icon/post/comment/button/trans-2.png";
    }
    this.ngStyleImgaeTag={
      display: "none"
    };
  }

  addTagImages(){
    this.getPhoto();
  }

  passChoseImgaeToDisplay(){
    this.clearTagImages();
    this.toSendTagImages="";
    this.tagImagesBackUp.forEach(element => {
      this.tagImages.push(element);
      this.toSendTagImages+=element+"!1409!";
    });
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
      this.imgSendButton="../../../../assets/icon/post/comment/button/trans-3.png";
      this.passChoseImgaeToDisplay();
      this.ngStyleImgaeTag={
        display: "flex"
      };
      return;
    }, (err) => {
    });
  }

  onInputComment(){
    if(this.inputComment!==""){
      this.imgSendButton = "../../../../assets/icon/post/comment/button/trans-3.png";
    }else{
      this.imgSendButton = "../../../../assets/icon/post/comment/button/trans-2.png";
    }
  }

  viewComment(){
    this.ngStyleComment={
      color: "white"
    };
    this.ngStyleContentComment={
      display: "block"
    };
    this.ngStyleLike={
      color: "var(--ion-color-app-gray-dark)"
    };
    this.ngStyleShare={
      color: "var(--ion-color-app-gray-dark)"
    };
    this.ngStyleContentLike={
      display: "none"
    };
    this.ngStyleContentShare={
      display: "none"
    };
    this.imgLike="../../../../assets/icon/post/inactive/like.png";
    this.imgShare="../../../../assets/icon/post/inactive/share.png";
  }
  viewLike(){
    this.ngStyleContentLike={
      display: "block"
    };
    this.ngStyleLike={
      color: "white"
    };
    this.imgLike = "../../../../assets/icon/post/like.png";
    this.ngStyleComment={
      color: "var(--ion-color-app-gray-dark)"
    };
    this.ngStyleShare={
      color: "var(--ion-color-app-gray-dark)"
    };
    this.ngStyleContentComment={
      display: "none"
    };
    this.ngStyleContentShare={
      display: "none"
    };
    this.imgShare="../../../../assets/icon/post/inactive/share.png";
  }
  viewShare(){
    this.ngStyleContentShare={
      display: "block"
    };
    this.ngStyleShare={
      color: "white"
    };
    this.imgShare = "../../../../assets/icon/post/share.png";
    this.ngStyleComment={
      color: "var(--ion-color-app-gray-dark)"
    };
    this.ngStyleLike={
      color: "var(--ion-color-app-gray-dark)"
    };
    this.ngStyleContentComment={
      display: "none"
    };
    this.ngStyleContentLike={
      display: "none"
    };
    this.imgLike="../../../../assets/icon/post/inactive/like.png";
  }

}
