"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const formatString_1 = require("./formatString");
describe('formatString test #formatString#', () => {
    it('should returns input string on not send params', () => {
        expect((0, formatString_1.formatString)('any text')).toEqual('any text');
    });
    it('should returns input string on not send template, but send extra params', () => {
        expect((0, formatString_1.formatString)('any text', 'param1')).toEqual('any text');
    });
    it('should format first param on only once param', () => {
        expect((0, formatString_1.formatString)('any {} text', 'param1')).toEqual('any param1 text');
    });
    it('should format only first params, same with 2 templates but one param', () => {
        expect((0, formatString_1.formatString)('any {} text {}', 'param1')).toEqual('any param1 text {}');
    });
    it('should format two params, on set two params', () => {
        expect((0, formatString_1.formatString)('any {} text {}', 'param1', 'param2')).toEqual('any param1 text param2');
    });
});
