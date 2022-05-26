/* eslint-disable @typescript-eslint/quotes */
import {Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-options',
  templateUrl: './search-options.component.html',
  styleUrls: ['./search-options.component.scss'],
})
export class SearchOptionsComponent implements OnInit {
  @Input() ipDatas: string[];
  @Input() radius: string;
  @Output() choseOptionEmitter = new EventEmitter<any>();

  datas: string[] = ["Tất cả", "Khoa", "Sinh Viên", "Bài viết", "CLB"];
  options: any;
  chosedOption: any;
  ngStyleContainer: any;
  constructor() { }

  ngOnInit() {
    this.setData();
    this.options = document.getElementById('search-option-container');
    this.initOptions();
    if(this.radius==="false"){
      this.ngStyleContainer={
        "background-color": "transparent"
      };
    }
  }
  initOptions(){
    this.datas.forEach(element => {
      // eslint-disable-next-line max-len
      this.options.innerHTML+="<div class=\"so-options\" id=\""+element+"\">"+element+"</div>";
    });
    this.initClickOption();
  }
  initClickOption(){
    this.datas.forEach(element => {
      // eslint-disable-next-line no-var
      var option = document.getElementById(element);
      option.addEventListener('click', ()=>{
        if(option.style.color==="white"){
          option.setAttribute('style','color: black');
          this.markChossedOption(option.id, "0");
        }else{
          option.setAttribute('style','color: white');
          this.markChossedOption(option.id, "1");
        }
        if(element!==this.datas[0]){
          document.getElementById(this.datas[0]).setAttribute('style', 'color: black');
          this.markChossedOption(this.datas[0], "0");
        }else{
          for(let i=1; i<this.datas.length; i++){
            document.getElementById(this.datas[i]).setAttribute('style','color: black');
            this.markChossedOption(this.datas[i], "0");
          }
        }
        this.choseOptionEmitter.emit(this.chosedOption);
      });
    });
    document.getElementById(this.datas[0]).click();
  }
  setData(){
    this.datas = this.ipDatas;
    this.chosedOption = Object.entries(this.datas).map(([k,v])=>`0`);
  }
  markChossedOption(option, mark){
    for(let i=0; i<this.datas.length; i++){
      if(this.datas[i] === option){
        this.chosedOption[i] = mark;
      }
    }
  }

}
