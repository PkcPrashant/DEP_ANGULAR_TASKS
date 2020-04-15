import { UsernamePipe } from './username.pipe';
import { UserModel } from '../user.model';

describe('UsernamePipe', () => {
  it('create an instance', () => {
    const pipe = new UsernamePipe();
    let user: UserModel = {
      isDeleted: true,
      firstName: 'prashant',
      lastName: 'choudhary',
      login: 'pkc@123',
      id: '1',
      password: 'Pkc@123',
      age: 20
    };
    expect(pipe.transform(user)).toEqual('prashant choudhary');
  });
});
