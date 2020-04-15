import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ActiveComponent } from './active.component';
import { UserModel } from '../user.model';
import { UsersService } from '../users.service';
import { of } from 'rxjs';

describe('ActiveComponent', () => {
  let component: ActiveComponent;
  let fixture: ComponentFixture<ActiveComponent>;
  const userServiceSpy = jasmine.createSpyObj('UsersService', ['changeStatus', 'getActiveUsers']);
  userServiceSpy.changeStatus.and.returnValue(of([{}]));

  let user: UserModel;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveComponent ],
      providers: [
        { provide: UsersService, useValue: userServiceSpy }
      ],
      imports:[ HttpClientTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should call loadActiveUers on ngOnInit', () => {
    spyOn(component, 'loadActiveUsers');
    component.ngOnInit();
    expect(component.loadActiveUsers).toHaveBeenCalled();
  });

  it('should call changeStatus method on deActivate', () => {
    component.deActivateUser(user);
    expect(userServiceSpy.changeStatus).toHaveBeenCalledWith(user);
  })

  it('should call loadActiveUers on deActivate', () => {
    spyOn(component, 'loadActiveUsers');
    component.deActivateUser(user);
    expect(component.loadActiveUsers).toHaveBeenCalled();
  })

});
