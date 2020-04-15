import { Pipe, PipeTransform } from '@angular/core';
import { UserModel } from '../user.model';

@Pipe({
  name: 'userStatus'
})
export class UserStatusPipe implements PipeTransform {

  transform(user: UserModel): unknown {
    return user?.isDeleted ? 'Activate' : 'Deactivate';
  }

}
