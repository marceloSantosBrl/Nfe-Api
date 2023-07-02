import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisorVendasComponent } from './visor-vendas.component';

describe('VisorVendasComponent', () => {
  let component: VisorVendasComponent;
  let fixture: ComponentFixture<VisorVendasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [VisorVendasComponent]
    });
    fixture = TestBed.createComponent(VisorVendasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
