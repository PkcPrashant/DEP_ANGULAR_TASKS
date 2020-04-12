import { UserStatusPipe } from './user-status.pipe';

xdescribe('UserStatusPipe', () => {
  it('create an instance', () => {
    const pipe = new UserStatusPipe();
    expect(pipe).toBeTruthy();
  });
});
