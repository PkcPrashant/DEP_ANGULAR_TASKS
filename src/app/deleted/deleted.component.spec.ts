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
  const getQuoteSpy = userServiceSpy.changeStatus.and.returnValue(of([{}]));

  let usersService: UsersService;

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
    usersService = TestBed.inject(UsersService);
    fixture.detectChanges();
  });

  it('should call loadDeletedUsers on ngOnInit', () => {
    spyOn(component, 'loadDeletedUsers');
    component.ngOnInit();
    expect(component.loadDeletedUsers).toHaveBeenCalled();
  });

  it('should call changeStatus method on activate', () => {
    let user: UserModel;
    component.activateUser(user);
    expect(usersService.changeStatus).toHaveBeenCalledWith(user);
  })

  it('should call loadDeletedUsers on deActivate', () => {
    let user: UserModel;
    spyOn(component, 'loadDeletedUsers');
    component.activateUser(user);
    expect(component.loadDeletedUsers).toHaveBeenCalled();
  })

});
