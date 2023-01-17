var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { t } from '@lingui/macro';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from 'src/loaders/app-context';
import { Paths, formatPath } from 'src/paths';
var LoginLink = /** @class */ (function (_super) {
    __extends(LoginLink, _super);
    function LoginLink() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LoginLink.prototype.render = function () {
        var _a = this.props, button = _a.button, next = _a.next;
        var featureFlags = this.context.featureFlags;
        var className = button ? 'pf-c-button pf-m-primary' : '';
        // NOTE: also update AuthHandler#render (src/loaders/standalone/routes.tsx) when changing this
        if ((featureFlags === null || featureFlags === void 0 ? void 0 : featureFlags.external_authentication) && UI_EXTERNAL_LOGIN_URI) {
            return (React.createElement("a", { className: className, href: UI_EXTERNAL_LOGIN_URI }, t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Login"], ["Login"])))));
        }
        else {
            return (React.createElement(Link, { className: className, to: formatPath(Paths.login, {}, { next: next }) }, t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Login"], ["Login"])))));
        }
    };
    LoginLink.contextType = AppContext;
    return LoginLink;
}(React.Component));
export { LoginLink };
var templateObject_1, templateObject_2;
//# sourceMappingURL=login-link.js.map