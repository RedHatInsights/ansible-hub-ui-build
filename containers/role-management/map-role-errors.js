var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { t } from '@lingui/macro';
export function mapNetworkErrors(err) {
    var errors = __assign({}, err.response.data);
    for (var field in errors) {
        errors[field] = errors[field].toString().split(',').join(' ');
    }
    return errors;
}
export function validateInput(input, field, currentErrors) {
    var errors = __assign({}, currentErrors);
    if (input === '') {
        errors[field] = t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["This field may not be blank."], ["This field may not be blank."])));
    }
    else if (field === 'name' && !/^[ a-zA-Z0-9_.]+$/.test(input)) {
        errors[field] = t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["This field can only contain letters and numbers"], ["This field can only contain letters and numbers"])));
    }
    else if (input.length <= 2) {
        errors[field] = t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["This field must be longer than 2 characters"], ["This field must be longer than 2 characters"])));
    }
    else if (field === 'name' && !input.startsWith('galaxy.')) {
        errors[field] = t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["This field must start with 'galaxy.'."], ["This field must start with 'galaxy.'."])));
    }
    else {
        delete errors[field];
    }
    return errors;
}
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=map-role-errors.js.map