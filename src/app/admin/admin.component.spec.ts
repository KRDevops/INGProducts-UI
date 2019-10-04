import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminComponent } from './admin.component';
import { HeadingComponent } from '../core/heading/heading.component';

describe('AdminComponent', () => {
  let component: AdminComponent;
  let fixture: ComponentFixture<AdminComponent>;
  let mockEnvironment = {
    production: false,
    // apiUrl: 'http://13.233.178.107:8090/ing'
    apiUrl: 'http://10.117.189.108:8090/ing'
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdminComponent, HeadingComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fileUploadUrl have url', () => {
    let fileUploadUrl = `${mockEnvironment.apiUrl}/products`;
    const fixture = TestBed.createComponent(AdminComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.fileUploadUrl).toBeDefined();
    expect(app.fileUploadUrl).toEqual(fileUploadUrl);
  });
});
