/* eslint-disable @typescript-eslint/quotes */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-department',
  templateUrl: './department.page.html',
  styleUrls: ['./department.page.scss'],
})
export class DepartmentPage implements OnInit {
  departmentName='CNTT';
  previousUrl='';
  imgBackground: any;
  classNumber: any;
  studentNumber: any;
  imgMore: any;
  departmentContentHot="Đáng lưu ý";
  departmentContent="Bài viết";
  btnFollowStatus="Theo dõi";
  departmentContentTeachers="Đội ngũ giảng viên";
  ngStyleBtnFollow: any;
  followed = false;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.imgBackground="../../../../assets/icon/group/default-background.png";
    this.imgMore = "../../../../assets/icon/group/more.png";
    this.classNumber=40;
    this.studentNumber=400;
  }
  getExtras(){
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.previousUrl= this.router.getCurrentNavigation().extras.state.prvUrl;
        if(this.previousUrl.includes('/')){
          this.previousUrl = this.previousUrl.slice(1, this.previousUrl.length);
        }
      }
    });
  }
  toBack() {
    this.router.navigateByUrl(this.previousUrl);
  }
  follow(){
    if(this.followed===true){
      this.ngStyleBtnFollow={
        'background-color': 'var(--ion-color-app-orange-dark)'
      };
      this.followed=false;
    }else{
      this.ngStyleBtnFollow={
        'background-color': 'var(--ion-color-app-green-dark)'
      };
      this.followed=true;
    }
  }

}
