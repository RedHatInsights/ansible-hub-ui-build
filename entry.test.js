/*global describe, it, expect*/
import getBaseName from './utilities/getBaseName';
describe('utilities/getBaseName', function () {
    it('should find the right base name on Stable ', function () {
        expect(getBaseName('/insights/foo/bar/baz')).toEqual('/insights/foo');
        expect(getBaseName('/rhcs/bar/bar/baz')).toEqual('/rhcs/bar');
    });
    it('should find the right base name on Beta ', function () {
        expect(getBaseName('/beta/insights/foo/bar/baz')).toEqual('/beta/insights/foo');
        expect(getBaseName('/beta/test/fff/bar/baz')).toEqual('/beta/test/fff');
    });
});
//# sourceMappingURL=entry.test.js.map