import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ManageComponent } from './manage.component';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UserModel } from '../user.model';
import { stringify } from 'querystring';

describe('ManageComponent', () => {
  let component: ManageComponent;
  let fixture: ComponentFixture<ManageComponent>;
  const userServiceSpy = jasmine.createSpyObj('UsersService', ['getUsers']);
  const getQuoteSpy = userServiceSpy.getUsers.and.returnValue(of([{}]));

  let usersService: UsersService;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageComponent ],
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
    fixture = TestBed.createComponent(ManageComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    usersService = TestBed.inject(UsersService);
    fixture.detectChanges();
  });

  it('should call getUsers on ngOnInit', () => {
    spyOn(usersService, 'getUsers');
    component.ngOnInit();
    expect(usersService.getUsers).toHaveBeenCalledTimes(1);
  });

  it('should navigate to create page', () => {
    spyOn(router, 'navigate');
    component.createUser();
    expect(router.navigate).toHaveBeenCalledWith(['manage/create']);
  })

  it('should navigate to show details of particular user page', () => {
    let user: UserModel;
    spyOn(router, 'navigate');
    component.showDetails(user);
    expect(router.navigate).toHaveBeenCalledWith(['manage', user?.id]);
  })

  it('should navigate to update particular user page', () => {
    let userId: string;
    spyOn(router, 'navigate');
    component.updateUser(userId);
    expect(router.navigate).toHaveBeenCalledWith(['manage/update', userId]);
  })

});
