import { render } from '.';
import { EnhancedResume } from '~/entities/enhanced';

const mockHandle = jest.fn<Promise<Buffer>, EnhancedResume[]>(async input =>
  Buffer.from(JSON.stringify(input))
);
jest.mock('./container', () => ({ get: () => ({ handle: mockHandle }) }));

describe('render() method: mock container.get() => { handle: async input => toBuffer(input) }', () => {
  describe.each<EnhancedResume>([
    { basics: { name: 'foo' } },
    { basics: { name: 'bar' } }
  ])('input: %o', input => {
    beforeEach(() => mockHandle.mockClear());
    it('The method bypasses an argument to the handle inner method.', () => {
      render(input);
      expect(mockHandle).toBeCalledWith(input);
    });
    it('The handle inner method gets buffered object.', async () => {
      const expected = Buffer.from(JSON.stringify(input));
      expect(expected.equals(await render(input)));
    });
  });
});
