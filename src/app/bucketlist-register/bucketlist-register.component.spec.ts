import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BucketlistRegisterComponent } from './bucketlist-register.component';

describe('BucketlistRegisterComponent', () => {
  let component: BucketlistRegisterComponent;
  let fixture: ComponentFixture<BucketlistRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BucketlistRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BucketlistRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
