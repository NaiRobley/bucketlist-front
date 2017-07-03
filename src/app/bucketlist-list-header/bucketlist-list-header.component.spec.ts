import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BucketlistListHeaderComponent } from './bucketlist-list-header.component';

describe('BucketlistListHeaderComponent', () => {
  let component: BucketlistListHeaderComponent;
  let fixture: ComponentFixture<BucketlistListHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BucketlistListHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BucketlistListHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
