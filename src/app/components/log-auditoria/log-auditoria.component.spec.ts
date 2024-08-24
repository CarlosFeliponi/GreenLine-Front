import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogAuditoriaComponent } from './log-auditoria.component';

describe('LogAuditoriaComponent', () => {
  let component: LogAuditoriaComponent;
  let fixture: ComponentFixture<LogAuditoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogAuditoriaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LogAuditoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
