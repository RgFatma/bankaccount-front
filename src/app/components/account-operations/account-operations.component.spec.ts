import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { OperationService } from 'src/app/services/operarion/operation.service';
import { AccountOperationsComponent } from './account-operations.component';


describe('AccountOperationsComponent', () => {
  let component: AccountOperationsComponent;
  let fixture: ComponentFixture<AccountOperationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountOperationsComponent ],
      imports: [HttpClientModule, RouterTestingModule, NgbAccordionModule],
      providers: [OperationService]

    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
