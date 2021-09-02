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
import { withRouter, Redirect } from 'react-router-dom';
import { LoginForm, LoginPage as PFLoginPage } from '@patternfly/react-core';
import { ExclamationCircleIcon } from '@patternfly/react-icons';
import Logo from 'src/../static/images/logo_large.svg';
import { ParamHelper } from 'src/utilities/';
import { Paths } from 'src/paths';
import { ActiveUserAPI } from 'src/api';
var LoginPage = /** @class */ (function (_super) {
    __extends(LoginPage, _super);
    function LoginPage(props) {
        var _this = _super.call(this, props) || this;
        _this.handleUsernameChange = function (value) {
            _this.setState({ usernameValue: value });
        };
        _this.handlePasswordChange = function (passwordValue) {
            _this.setState({ passwordValue: passwordValue });
        };
        _this.onLoginButtonClick = function (event) {
            ActiveUserAPI.login(_this.state.usernameValue, _this.state.passwordValue)
                .then(function (result) {
                ActiveUserAPI.getUser()
                    .then(function () { return _this.setState({ redirect: _this.redirectPage }); })
                    .catch(function () {
                    return _this.setState({
                        passwordValue: '',
                        errorMessage: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Failed to retrieve user data."], ["Failed to retrieve user data."]))),
                    });
                });
            })
                .catch(function (result) {
                if (result.response.status.toString().startsWith('5')) {
                    _this.setState({
                        passwordValue: '',
                        errorMessage: t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Server error. Please come back later."], ["Server error. Please come back later."]))),
                    });
                }
                else {
                    _this.setState({
                        passwordValue: '',
                        errorMessage: t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Invalid login credentials."], ["Invalid login credentials."]))),
                    });
                }
            });
            event.preventDefault();
        };
        _this.state = {
            errorMessage: undefined,
            usernameValue: '',
            passwordValue: '',
        };
        var params = ParamHelper.parseParamString(_this.props.location.search);
        _this.redirectPage = params['next'] || Paths.search;
        return _this;
    }
    LoginPage.prototype.render = function () {
        if (this.state.redirect) {
            return React.createElement(Redirect, { to: this.state.redirect });
        }
        var helperText = (React.createElement("span", { style: { color: 'var(--pf-global--danger-color--100)' } },
            React.createElement(ExclamationCircleIcon, null),
            '   ',
            this.state.errorMessage));
        var loginForm = (React.createElement(LoginForm, { showHelperText: !!this.state.errorMessage, helperText: helperText, usernameLabel: t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["Username"], ["Username"]))), usernameValue: this.state.usernameValue, onChangeUsername: this.handleUsernameChange, passwordLabel: t(templateObject_5 || (templateObject_5 = __makeTemplateObject(["Password"], ["Password"]))), passwordValue: this.state.passwordValue, onChangePassword: this.handlePasswordChange, onLoginButtonClick: this.onLoginButtonClick }));
        return (React.createElement(PFLoginPage, { style: {
                backgroundColor: 'var(--pf-global--BackgroundColor--dark-100)',
            }, loginTitle: t(templateObject_6 || (templateObject_6 = __makeTemplateObject(["Log in to your account"], ["Log in to your account"]))), brandImgSrc: Logo }, loginForm));
    };
    return LoginPage;
}(React.Component));
export default withRouter(LoginPage);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
//# sourceMappingURL=login.js.map