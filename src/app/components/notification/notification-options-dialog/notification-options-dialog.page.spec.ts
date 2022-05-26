import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NotificationOptionsDialogPage } from './notification-options-dialog.page';

describe('NotificationOptionsDialogPage', () => {
  let component: NotificationOptionsDialogPage;
  let fixture: ComponentFixture<NotificationOptionsDialogPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationOptionsDialogPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NotificationOptionsDialogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
