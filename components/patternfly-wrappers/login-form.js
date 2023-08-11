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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
// this comes from @patternfly/react-core@4.276.11
// packages/react-core/src/components/LoginPage/LoginForm.tsx
// w/ fixed imports, prettier
// and added autocomplete="off" for username & password
import { ActionGroup, Button, Checkbox, Form, FormGroup, FormHelperText, InputGroup, TextInput, ValidatedOptions, } from '@patternfly/react-core';
import EyeIcon from '@patternfly/react-icons/dist/esm/icons/eye-icon';
import EyeSlashIcon from '@patternfly/react-icons/dist/esm/icons/eye-slash-icon';
import React from 'react';
export var LoginForm = function (_a) {
    var _b = _a.noAutoFocus, noAutoFocus = _b === void 0 ? false : _b, _c = _a.className, className = _c === void 0 ? '' : _c, _d = _a.showHelperText, showHelperText = _d === void 0 ? false : _d, _e = _a.helperText, helperText = _e === void 0 ? null : _e, _f = _a.helperTextIcon, helperTextIcon = _f === void 0 ? null : _f, _g = _a.usernameLabel, usernameLabel = _g === void 0 ? 'Username' : _g, _h = _a.usernameValue, usernameValue = _h === void 0 ? '' : _h, _j = _a.onChangeUsername, onChangeUsername = _j === void 0 ? function () { return undefined; } : _j, _k = _a.isValidUsername, isValidUsername = _k === void 0 ? true : _k, _l = _a.passwordLabel, passwordLabel = _l === void 0 ? 'Password' : _l, _m = _a.passwordValue, passwordValue = _m === void 0 ? '' : _m, _o = _a.onChangePassword, onChangePassword = _o === void 0 ? function () { return undefined; } : _o, _p = _a.isShowPasswordEnabled, isShowPasswordEnabled = _p === void 0 ? false : _p, _q = _a.hidePasswordAriaLabel, hidePasswordAriaLabel = _q === void 0 ? 'Hide password' : _q, _r = _a.showPasswordAriaLabel, showPasswordAriaLabel = _r === void 0 ? 'Show password' : _r, _s = _a.isValidPassword, isValidPassword = _s === void 0 ? true : _s, _t = _a.loginButtonLabel, loginButtonLabel = _t === void 0 ? 'Log In' : _t, _u = _a.isLoginButtonDisabled, isLoginButtonDisabled = _u === void 0 ? false : _u, _v = _a.onLoginButtonClick, onLoginButtonClick = _v === void 0 ? function () { return undefined; } : _v, _w = _a.rememberMeLabel, rememberMeLabel = _w === void 0 ? '' : _w, _x = _a.isRememberMeChecked, isRememberMeChecked = _x === void 0 ? false : _x, _y = _a.onChangeRememberMe, onChangeRememberMe = _y === void 0 ? function () { return undefined; } : _y, props = __rest(_a, ["noAutoFocus", "className", "showHelperText", "helperText", "helperTextIcon", "usernameLabel", "usernameValue", "onChangeUsername", "isValidUsername", "passwordLabel", "passwordValue", "onChangePassword", "isShowPasswordEnabled", "hidePasswordAriaLabel", "showPasswordAriaLabel", "isValidPassword", "loginButtonLabel", "isLoginButtonDisabled", "onLoginButtonClick", "rememberMeLabel", "isRememberMeChecked", "onChangeRememberMe"]);
    var _z = React.useState(true), passwordHidden = _z[0], setPasswordHidden = _z[1];
    var passwordInput = (React.createElement(TextInput, { isRequired: true, type: passwordHidden ? 'password' : 'text', id: 'pf-login-password-id', name: 'pf-login-password-id', validated: isValidPassword ? ValidatedOptions.default : ValidatedOptions.error, value: passwordValue, onChange: onChangePassword, autoComplete: 'off' }));
    return (React.createElement(Form, __assign({ className: className }, props),
        React.createElement(FormHelperText, { isError: !isValidUsername || !isValidPassword, isHidden: !showHelperText, icon: helperTextIcon }, helperText),
        React.createElement(FormGroup, { label: usernameLabel, isRequired: true, validated: isValidUsername ? ValidatedOptions.default : ValidatedOptions.error, fieldId: 'pf-login-username-id' },
            React.createElement(TextInput, { autoFocus: !noAutoFocus, id: 'pf-login-username-id', isRequired: true, validated: isValidUsername ? ValidatedOptions.default : ValidatedOptions.error, type: 'text', name: 'pf-login-username-id', value: usernameValue, onChange: onChangeUsername, autoComplete: 'off' })),
        React.createElement(FormGroup, { label: passwordLabel, isRequired: true, validated: isValidPassword ? ValidatedOptions.default : ValidatedOptions.error, fieldId: 'pf-login-password-id' },
            isShowPasswordEnabled && (React.createElement(InputGroup, null,
                passwordInput,
                React.createElement(Button, { variant: 'control', onClick: function () { return setPasswordHidden(!passwordHidden); }, "aria-label": passwordHidden ? showPasswordAriaLabel : hidePasswordAriaLabel }, passwordHidden ? React.createElement(EyeIcon, null) : React.createElement(EyeSlashIcon, null)))),
            !isShowPasswordEnabled && passwordInput),
        rememberMeLabel.length > 0 && (React.createElement(FormGroup, { fieldId: 'pf-login-remember-me-id' },
            React.createElement(Checkbox, { id: 'pf-login-remember-me-id', label: rememberMeLabel, isChecked: isRememberMeChecked, onChange: onChangeRememberMe }))),
        React.createElement(ActionGroup, null,
            React.createElement(Button, { variant: 'primary', type: 'submit', onClick: onLoginButtonClick, isBlock: true, isDisabled: isLoginButtonDisabled }, loginButtonLabel))));
};
LoginForm.displayName = 'LoginForm';
//# sourceMappingURL=login-form.js.map