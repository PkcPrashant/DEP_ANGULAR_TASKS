import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUserComponent } from './create-user.component';
import { UserModel } from '../user.model';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

describe('CreateUserComponent', () => {
  let component: CreateUserComponent;
  let fixture: ComponentFixture<CreateUserComponent>;
  const userServiceSpy = jasmine.createSpyObj('UsersService', ['createUser']);
  userServiceSpy.createUser.and.returnValue(of([{}]));
  
  let router: Router;
  let user: UserModel;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateUserComponent ],
      providers: [
        { provide: UsersService, useValue: userServiceSpy }
      ],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUserComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create new user', () => {
    component.handleNewUser(user);
    expect(userServiceSpy.createUser).toHaveBeenCalled();
  })

  it('should call navigate', () => {
    spyOn(router, 'navigate');
    component.handleNewUser(user);
    expect(router.navigate).toHaveBeenCalledWith(['manage']);
  });

});
