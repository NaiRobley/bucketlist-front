import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BucketlistHomeComponent } from './bucketlist-home.component';

describe('BucketlistHomeComponent', () => {
  let component: BucketlistHomeComponent;
  let fixture: ComponentFixture<BucketlistHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BucketlistHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BucketlistHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
