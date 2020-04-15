import { UserStatusPipe } from './user-status.pipe';
import { UserModel } from '../user.model';

describe('UserStatusPipe', () => {
  it('should return activate if user is deleted', () => {
    const pipe = new UserStatusPipe();
    let user: UserModel = {
      isDeleted: true,
      firstName: 'prashant',
      lastName: 'choudhary',
      login: 'pkc@123',
      id: '1',
      password: 'Pkc@123',
      age: 20
    };
    expect(pipe.transform(user)).toEqual('Activate');

});
