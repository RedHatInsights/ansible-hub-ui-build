var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { t } from '@lingui/macro';
import { mapErrorMessages } from 'src/utilities';
export function errorMessage(statusCode, statusText, customMessage) {
    var messages = {
        500: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Error ", " - ", ": The server encountered an error and was unable to complete your request."], ["Error ", " - ", ": The server encountered an error and was unable to complete your request."])), statusCode, statusText),
        401: t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Error ", " - ", ": You do not have the required permissions to proceed with this request. Please contact the server administrator for elevated permissions."], ["Error ", " - ", ": You do not have the required permissions to proceed with this request. Please contact the server administrator for elevated permissions."])), statusCode, statusText),
        403: t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Error ", " - ", ": Forbidden: You do not have the required permissions to proceed with this request. Please contact the server administrator for elevated permissions."], ["Error ", " - ", ": Forbidden: You do not have the required permissions to proceed with this request. Please contact the server administrator for elevated permissions."])), statusCode, statusText),
        404: t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["Error ", " - ", ": The server could not find the requested URL."], ["Error ", " - ", ": The server could not find the requested URL."])), statusCode, statusText),
        400: t(templateObject_5 || (templateObject_5 = __makeTemplateObject(["Error ", " - ", ": The server was unable to complete your request."], ["Error ", " - ", ": The server was unable to complete your request."])), statusCode, statusText),
        default: t(templateObject_6 || (templateObject_6 = __makeTemplateObject(["Error ", " - ", ""], ["Error ", " - ", ""])), statusCode, statusText),
        custom: t(templateObject_7 || (templateObject_7 = __makeTemplateObject(["Error ", " - ", ": ", ""], ["Error ", " - ", ": ", ""])), statusCode, statusText, customMessage),
    };
    if (customMessage) {
        return messages.custom;
    }
    return messages[statusCode] || messages.default;
}
export var handleHttpError = function (title, callback, addAlert) { return function (e) {
    var _a = e.response, status = _a.status, statusText = _a.statusText;
    console.log(typeof e.response.data);
    var message = '';
    var err_detail = mapErrorMessages(e);
    for (var msg in err_detail) {
        message = message + err_detail[msg] + ' ';
    }
    var description;
    if (message !== '') {
        description = errorMessage(status, statusText, message);
    }
    else {
        description = errorMessage(status, statusText);
    }
    addAlert({
        title: title,
        variant: 'danger',
        description: description,
    });
    callback();
}; };
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
//# sourceMappingURL=fail-alerts.js.map