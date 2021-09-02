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
import * as React from 'react';
import { Section } from '@redhat-cloud-services/frontend-components';
import { BaseHeader, Main, Breadcrumbs, UserForm } from 'src/components';
var UserFormPage = /** @class */ (function (_super) {
    __extends(UserFormPage, _super);
    function UserFormPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UserFormPage.prototype.render = function () {
        var _a = this.props, user = _a.user, breadcrumbs = _a.breadcrumbs, title = _a.title, updateUser = _a.updateUser, errorMessages = _a.errorMessages, saveUser = _a.saveUser, isReadonly = _a.isReadonly, extraControls = _a.extraControls, onCancel = _a.onCancel, isNewUser = _a.isNewUser, isMe = _a.isMe;
        return (React.createElement(React.Fragment, null,
            React.createElement(BaseHeader, { breadcrumbs: React.createElement(Breadcrumbs, { links: breadcrumbs }), pageControls: extraControls, title: title }),
            React.createElement(Main, null,
                React.createElement(Section, { className: 'body' },
                    React.createElement(UserForm, { isMe: isMe, isReadonly: isReadonly, user: user, updateUser: updateUser, errorMessages: errorMessages, saveUser: saveUser, onCancel: onCancel, isNewUser: isNewUser })))));
    };
    UserFormPage.defaultProps = {
        extraControls: null,
    };
    return UserFormPage;
}(React.Component));
export { UserFormPage };
//# sourceMappingURL=user-form-page.js.map