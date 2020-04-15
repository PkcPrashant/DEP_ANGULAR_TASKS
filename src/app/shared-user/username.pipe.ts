import { Pipe, PipeTransform } from '@angular/core';
import { UserModel } from '../user.model';

@Pipe({
  name: 'username'
})
export class UsernamePipe implements PipeTransform {

  transform(user: UserModel): unknown {
    return `${user?.firstName} ${user?.lastName}`;
  }

}
