import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-teacher-profile',
  templateUrl: './teacher-profile.component.html',
  styleUrls: ['./teacher-profile.component.scss'],
})
export class TeacherProfileComponent implements OnInit {
  @Input() title: any;
  @Input() description: any;
  @Input() imgAvatar: any;
  constructor() { }

  ngOnInit() {
    this.title='Tên giảng viên';
    this.description='Chức vụ';
    this.imgAvatar='../../../../assets/icon/department/male.png';
  }

}
