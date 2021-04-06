import { ByNamePipe } from './by-name.pipe';

describe('ByNamePipe', () => {
  it('create an instance', () => {
    const pipe = new ByNamePipe();
    expect(pipe).toBeTruthy();
  });
});
