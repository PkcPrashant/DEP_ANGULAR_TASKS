import { UsernamePipe } from './username.pipe';

xdescribe('UsernamePipe', () => {
  it('create an instance', () => {
    const pipe = new UsernamePipe();
    expect(pipe).toBeTruthy();
  });
});
