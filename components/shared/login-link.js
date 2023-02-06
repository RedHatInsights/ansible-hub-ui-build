var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { t } from '@lingui/macro';
import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'src/loaders/app-context';
import { Paths, formatPath } from 'src/paths';
export var LoginLink = function (_a) {
    var button = _a.button, next = _a.next;
    var featureFlags = useContext().featureFlags;
    var className = button ? 'pf-c-button pf-m-primary' : '';
    // NOTE: also update AuthHandler#render (src/loaders/standalone/routes.tsx) when changing this
    if ((featureFlags === null || featureFlags === void 0 ? void 0 : featureFlags.external_authentication) && UI_EXTERNAL_LOGIN_URI) {
        return React.createElement("a", { className: className, href: UI_EXTERNAL_LOGIN_URI }, t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Login"], ["Login"]))));
    }
    else {
        return (React.createElement(Link, { className: className, to: formatPath(Paths.login, {}, { next: next }) }, t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Login"], ["Login"])))));
    }
};
var templateObject_1, templateObject_2;
//# sourceMappingURL=login-link.js.map