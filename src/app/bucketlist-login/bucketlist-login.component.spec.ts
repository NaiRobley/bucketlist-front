import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BucketlistLoginComponent } from './bucketlist-login.component';

describe('BucketlistLoginComponent', () => {
  let component: BucketlistLoginComponent;
  let fixture: ComponentFixture<BucketlistLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BucketlistLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BucketlistLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
