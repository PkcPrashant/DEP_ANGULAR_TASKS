import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletedComponent } from './deleted.component';
import { UserModel } from '../user.model';
import { UsersService } from '../users.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

describe('DeletedComponent', () => {
  let component: DeletedComponent;
  let fixture: ComponentFixture<DeletedComponent>;
  const userServiceSpy = jasmine.createSpyObj('UsersService', ['changeStatus', 'getInActiveUsers']);
  userServiceSpy.changeStatus.and.returnValue(of([{}]));

  let user: UserModel;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletedComponent ],
      providers: [
        { provide: UsersService, useValue: userServiceSpy }
      ],
      imports:[ HttpClientTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should call loadDeletedUsers on ngOnInit', () => {
    spyOn(component, 'loadDeletedUsers');
    component.ngOnInit();
    expect(component.loadDeletedUsers).toHaveBeenCalled();
  });

  it('should call changeStatus method on activate', () => {
    component.activateUser(user);
    expect(userServiceSpy.changeStatus).toHaveBeenCalledWith(user);
  })

  it('should call loadDeletedUsers on deActivate', () => {
    spyOn(component, 'loadDeletedUsers');
    component.activateUser(user);
    expect(component.loadDeletedUsers).toHaveBeenCalled();
  })

});
