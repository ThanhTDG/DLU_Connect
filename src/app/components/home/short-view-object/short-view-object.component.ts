import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-short-view-object',
  templateUrl: './short-view-object.component.html',
  styleUrls: ['./short-view-object.component.scss'],
})
export class ShortViewObjectComponent implements OnInit, AfterViewInit{
  title: string;
  fTitle: string;
  constructor() { }
  ngAfterViewInit(){
    this.title='CNTT';
    try{
      this.fTitle = this.title.charAt(0);
    }catch(ex){

    }
  }

  ngOnInit() {
  }

}
