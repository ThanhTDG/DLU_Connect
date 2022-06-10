/* eslint-disable @typescript-eslint/quotes */
import { AfterViewInit, ChangeDetectorRef, Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-search-bar-advance',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarAdvanceComponent implements OnInit, AfterViewInit {
  imgBtnBack: any;
  imgBtnSearch: any;
  hint: any;
  imgRemoveText: any;
  ngStyleBtnRemoveText: any;
  searchValue: string;
  previousUrl = null;
  // eslint-disable-next-line @typescript-eslint/member-ordering
  @Output() searchEmitter = new EventEmitter<string>();
  constructor(private router: Router, private cdr: ChangeDetectorRef, private route: ActivatedRoute, private navCtrl: NavController) { }
  ngAfterViewInit(): void {
    this.cdr.detectChanges();
  }

  ngOnInit() {
    this.imgBtnBack = "../../../../assets/icon/main/back.png";
    this.imgBtnSearch = "../../../../assets/icon/main/search.png";
    this.hint = "Tìm kiếm sinh viên...";
    this.imgRemoveText = "../../../../assets/icon/main/close.png";
    this.ngStyleBtnRemoveText={
      display: 'none'
    };
    this.searchValue = "";
    this.getExtras();
  }
  onSearch(){
    this.cdr.detectChanges();
    this.ngStyleBtnRemoveText = {
      display : 'block'
    };
    this.searchEmitter.emit(this.searchValue);
  }
  onRemoveText(){
    this.ngStyleBtnRemoveText = {
      display : 'none'
    };
    this.searchValue = "";
    this.searchEmitter.emit("#1409!:null:");
  }
  onPressBack(){
    this.router.navigateByUrl(this.previousUrl);
  }
  getExtras() {
    this.route.queryParams.subscribe((params) => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.previousUrl =
          this.router.getCurrentNavigation().extras.state.prvUrl;
      }
    });
  }

}
