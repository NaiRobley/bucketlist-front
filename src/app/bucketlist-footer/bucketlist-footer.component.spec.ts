import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BucketlistFooterComponent } from './bucketlist-footer.component';

describe('BucketlistFooterComponent', () => {
  let component: BucketlistFooterComponent;
  let fixture: ComponentFixture<BucketlistFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BucketlistFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BucketlistFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
