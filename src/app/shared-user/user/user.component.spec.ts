import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';
import { UserModel } from 'src/app/user.model';
import { UsernamePipe } from '../username.pipe';
import { UserStatusPipe } from '../user-status.pipe';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        UserComponent,
        UsernamePipe,
        UserStatusPipe
     ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
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
