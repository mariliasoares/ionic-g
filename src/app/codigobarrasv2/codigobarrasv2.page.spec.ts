import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Codigobarrasv2Page } from './codigobarrasv2.page';

describe('Codigobarrasv2Page', () => {
  let component: Codigobarrasv2Page;
  let fixture: ComponentFixture<Codigobarrasv2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Codigobarrasv2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Codigobarrasv2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
