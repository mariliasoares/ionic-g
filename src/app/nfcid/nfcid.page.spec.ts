import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NFCIdPage } from './nfcid.page';

describe('NFCIdPage', () => {
  let component: NFCIdPage;
  let fixture: ComponentFixture<NFCIdPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NFCIdPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NFCIdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
