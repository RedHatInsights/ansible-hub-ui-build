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
import { t, Trans } from '@lingui/macro';
import React from 'react';
import { Navigate } from 'react-router-dom';
import { Button } from '@patternfly/react-core';
import { withRouter } from 'src/utilities';
import { LoadingPageWithHeader, UserFormPage, AlertList, closeAlertMixin, } from 'src/components';
import { ActiveUserAPI } from 'src/api';
import { Paths, formatPath } from 'src/paths';
import { mapErrorMessages } from 'src/utilities';
import { AppContext } from 'src/loaders/app-context';
var UserProfile = /** @class */ (function (_super) {
    __extends(UserProfile, _super);
    function UserProfile(props) {
        var _this = _super.call(this, props) || this;
        _this.saveUser = function () {
            var _a = _this.state, user = _a.user, username = _a.user.username, alerts = _a.alerts;
            ActiveUserAPI.saveUser(user)
                .then(function (result) {
                _this.setState({
                    inEditMode: false,
                    alerts: alerts.concat([
                        {
                            variant: 'success',
                            title: (React.createElement(Trans, null,
                                "Saved changes to user \"",
                                username,
                                "\".")),
                        },
                    ]),
                }, function () { return _this.context.setUser(result.data); });
                // redirect to login page when password is changed
                // SSO not relevant, user edit disabled
                if (user.password) {
                    _this.setState({ redirect: formatPath(Paths.login) });
                }
            })
                .catch(function (err) {
                _this.setState({ errorMessages: mapErrorMessages(err) });
            });
        };
        _this.state = {
            user: undefined,
            errorMessages: {},
            inEditMode: false,
            alerts: [],
        };
        return _this;
    }
    UserProfile.prototype.componentDidMount = function () {
        var _this = this;
        ActiveUserAPI.getUser()
            .then(function (result) {
            // The api doesn't return a value for the password, so set a blank one here
            // to keep react from getting confused
            var extendedResult = __assign(__assign({}, result), { password: '' });
            _this.initialState = __assign({}, extendedResult);
            _this.setState({ user: extendedResult });
        })
            .catch(function () { return _this.setState({ redirect: formatPath(Paths.notFound) }); });
    };
    UserProfile.prototype.render = function () {
        var _this = this;
        if (this.state.redirect) {
            return React.createElement(Navigate, { to: this.state.redirect });
        }
        var _a = this.state, user = _a.user, errorMessages = _a.errorMessages, inEditMode = _a.inEditMode, alerts = _a.alerts;
        var featureFlags = this.context.featureFlags;
        var isUserMgmtDisabled = featureFlags.external_authentication;
        if (!user) {
            return React.createElement(LoadingPageWithHeader, null);
        }
        return (React.createElement(React.Fragment, null,
            React.createElement(AlertList, { alerts: alerts, closeAlert: function (i) { return _this.closeAlert(i); } }),
            React.createElement(UserFormPage, { isMe: true, user: user, breadcrumbs: [{ name: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Settings"], ["Settings"]))) }, { name: t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["My profile"], ["My profile"]))) }], title: t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["My profile"], ["My profile"]))), errorMessages: errorMessages, updateUser: function (user) { return _this.setState({ user: user }); }, saveUser: this.saveUser, isReadonly: !inEditMode, onCancel: function () {
                    return _this.setState({
                        user: _this.initialState,
                        inEditMode: false,
                        errorMessages: {},
                    });
                }, extraControls: !inEditMode &&
                    !isUserMgmtDisabled && (React.createElement("div", { style: { display: 'flex', justifyContent: 'flex-end' } },
                    React.createElement("div", null,
                        React.createElement(Button, { onClick: function () { return _this.setState({ inEditMode: true }); } }, t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["Edit"], ["Edit"]))))))) })));
    };
    Object.defineProperty(UserProfile.prototype, "closeAlert", {
        get: function () {
            return closeAlertMixin('alerts');
        },
        enumerable: false,
        configurable: true
    });
    return UserProfile;
}(React.Component));
export default withRouter(UserProfile);
// For some reason react complains about setting context type in the class itself.
// I think that it happens because withRouter confuses react into thinking that the
// component is a functional compent when it's actually a class component.
UserProfile.contextType = AppContext;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=user-profile.js.map