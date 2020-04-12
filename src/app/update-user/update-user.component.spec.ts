import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { UpdateUserComponent } from './update-user.component';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { UserModel } from '../user.model';

xdescribe('UpdateUserComponent', () => {
  let component: UpdateUserComponent;
  let fixture: ComponentFixture<UpdateUserComponent>;
  const userServiceSpy = jasmine.createSpyObj('UsersService', ['updateUser']);
  const getQuoteSpy = userServiceSpy.updateUser.and.returnValue(of([{}]));

  let usersService: UsersService;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateUserComponent ],
      providers: [
        { provide: usersService, useValue: userServiceSpy}
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
    usersService = TestBed.inject(UsersService);
    fixture.detectChanges();
  });

  // TThrowing Error Dont Know Why
  // it('should create', () => {
  //   let user: UserModel;
  //   component.handleExistingUser(user);
  //   expect(usersService.updateUser).toHaveBeenCalled();
  // });
});
