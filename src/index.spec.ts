import { render } from '.';

jest.mock('./container', () => ({ get: () => false }));

describe('dummy', () => {
  it('test', () => expect(render({})).toBeTruthy());
});
