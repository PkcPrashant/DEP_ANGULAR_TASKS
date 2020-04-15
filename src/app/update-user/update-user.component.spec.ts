import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { UpdateUserComponent } from './update-user.component';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { UserModel } from '../user.model';

describe('UpdateUserComponent', () => {
  let component: UpdateUserComponent;
  let fixture: ComponentFixture<UpdateUserComponent>;
  const userServiceSpy = jasmine.createSpyObj('UsersService', ['getUser', 'updateUser']);
  userServiceSpy.updateUser.and.returnValue(of([{}]));

  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateUserComponent ],
      providers: [
        { provide: UsersService, useValue: userServiceSpy}
      ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateUserComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should call updateUser', () => {
    let user: UserModel;
    component.handleExistingUser(user);
    expect(userServiceSpy.updateUser).toHaveBeenCalled();
  });

  it('should navigate to manage after updting', () => {
    let user: UserModel;
    spyOn(router, 'navigate');
    component.handleExistingUser(user);
    expect(router.navigate).toHaveBeenCalledWith(['manage']);
  });

  it('should call getUser on ngOnInit', () => {
    component.ngOnInit();
    expect(userServiceSpy.getUser).toHaveBeenCalled();
  });

});
