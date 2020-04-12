import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListComponent } from './user-list.component';
import { UserModel } from 'src/app/user.model';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should check if change status has been called from modifyStatus', () => {
    let user: UserModel;
    spyOn(component.changeStatus, 'emit');
    component.modifyStatus(user);
    expect(component.changeStatus.emit).toHaveBeenCalledWith(user);
  });

  it('should check if change status has been called from editUser', () => {
    let userId: string;
    spyOn(component.updateUser, 'emit');
    component.editUser(userId);
    expect(component.updateUser.emit).toHaveBeenCalledWith(userId);
  });

});
