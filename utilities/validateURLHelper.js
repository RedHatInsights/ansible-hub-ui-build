var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { t } from '@lingui/macro';
export function validateURLHelper(outsideError, url) {
    if (outsideError) {
        return { validated: 'error', helperTextInvalid: outsideError };
    }
    try {
        var protocol = new URL(url).protocol;
        if (protocol === 'http:') {
            return {
                validated: 'warning',
                helperText: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Consider using a secure URL (https://)."], ["Consider using a secure URL (https://)."]))),
            };
        }
        if (protocol === 'https:') {
            return { validated: 'default' };
        }
    }
    catch (_) {
        // fallthrough
    }
    return {
        validated: 'error',
        helperTextInvalid: t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["The URL needs to be in 'http(s)://' format."], ["The URL needs to be in 'http(s)://' format."]))),
    };
}
var templateObject_1, templateObject_2;
//# sourceMappingURL=validateURLHelper.js.map