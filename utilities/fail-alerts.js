var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { t } from '@lingui/macro';
export function errorMessage(statusCode, statusText) {
    var messages = {
        500: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Error ", " - ", ": The server encountered an error and was unable to complete your request."], ["Error ", " - ", ": The server encountered an error and was unable to complete your request."])), statusCode, statusText),
        401: t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Error ", " - ", ": You do not have the required permissions to proceed with this request. Please contact the server administrator for elevated permissions."], ["Error ", " - ", ": You do not have the required permissions to proceed with this request. Please contact the server administrator for elevated permissions."])), statusCode, statusText),
        403: t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Error ", " - ", ": Forbidden: You do not have the required permissions to proceed with this request. Please contact the server administrator for elevated permissions."], ["Error ", " - ", ": Forbidden: You do not have the required permissions to proceed with this request. Please contact the server administrator for elevated permissions."])), statusCode, statusText),
        404: t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["Error ", " - ", ": The server could not find the requested URL."], ["Error ", " - ", ": The server could not find the requested URL."])), statusCode, statusText),
        400: t(templateObject_5 || (templateObject_5 = __makeTemplateObject(["Error ", " - ", ": The server was unable to complete your request."], ["Error ", " - ", ": The server was unable to complete your request."])), statusCode, statusText),
        default: t(templateObject_6 || (templateObject_6 = __makeTemplateObject(["Error ", " - ", ""], ["Error ", " - ", ""])), statusCode, statusText),
    };
    return messages[statusCode] || messages.default;
}
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
//# sourceMappingURL=fail-alerts.js.map