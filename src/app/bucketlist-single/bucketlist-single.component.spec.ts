import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BucketlistSingleComponent } from './bucketlist-single.component';

describe('BucketlistSingleComponent', () => {
  let component: BucketlistSingleComponent;
  let fixture: ComponentFixture<BucketlistSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BucketlistSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BucketlistSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
