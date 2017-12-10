import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentItemPreviewComponent } from './content-item-preview.component';

describe('ContentItemPreviewComponent', () => {
  let component: ContentItemPreviewComponent;
  let fixture: ComponentFixture<ContentItemPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentItemPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentItemPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
