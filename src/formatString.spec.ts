import { formatString } from './formatString';

describe('formatString test #formatString#', () => {
  it('should returns input string on not send params', () => {
    expect(formatString('any text')).toEqual('any text');
  });

  it('should returns input string on not send template, but send extra params', () => {
    expect(formatString('any text', 'param1')).toEqual('any text');
  });

  it('should format first param on only once param', () => {
    expect(formatString('any {} text', 'param1')).toEqual('any param1 text');
  });

  it('should format only first params, same with 2 templates but one param', () => {
    expect(formatString('any {} text {}', 'param1')).toEqual('any param1 text {}');
  });

  it('should format two params, on set two params', () => {
    expect(formatString('any {} text {}', 'param1', 'param2')).toEqual('any param1 text param2');
  });
});
