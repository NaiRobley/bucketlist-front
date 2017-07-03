import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BucketlistAccountComponent } from './bucketlist-account.component';

describe('BucketlistAccountComponent', () => {
  let component: BucketlistAccountComponent;
  let fixture: ComponentFixture<BucketlistAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BucketlistAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BucketlistAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
