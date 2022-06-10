import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-undefine',
  templateUrl: './error-undefine.component.html',
  styleUrls: ['./error-undefine.component.scss'],
})
export class ErrorUndefineComponent implements OnInit {
  imgError ='../../../assets/icon/error/error-undefine.png';
  title='Lỗi';
  description='Đã có một số lỗi xảy ra. Vui lòng ';
  constructor() { }

  ngOnInit() {}
  onTry(){
  }

}
