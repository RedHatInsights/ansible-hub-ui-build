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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { Trans, t } from '@lingui/macro';
import { Button, Card, CardBody, CardTitle } from '@patternfly/react-core';
import * as React from 'react';
import { ActiveUserAPI } from 'src/api';
import { AlertList, BaseHeader, ClipboardCopy, DateComponent, EmptyStateUnauthorized, LoadingPageSpinner, Main, closeAlertMixin, } from 'src/components';
import { AppContext } from 'src/loaders/app-context';
import { withRouter } from 'src/utilities';
import { errorMessage } from 'src/utilities';
import './token.scss';
var TokenStandalone = /** @class */ (function (_super) {
    __extends(TokenStandalone, _super);
    function TokenStandalone(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            token: undefined,
            alerts: [],
            loadingToken: false,
        };
        return _this;
    }
    TokenStandalone.prototype.render = function () {
        var _this = this;
        var _a = this.state, token = _a.token, alerts = _a.alerts, loadingToken = _a.loadingToken;
        var unauthorised = !this.context.user || this.context.user.is_anonymous;
        var expiration = this.context.settings.GALAXY_TOKEN_EXPIRATION;
        var expirationDate = new Date(Date.now() + 1000 * 60 * expiration);
        return (React.createElement(React.Fragment, null,
            React.createElement(AlertList, { alerts: alerts, closeAlert: function (i) { return _this.closeAlert(i); } }),
            React.createElement(BaseHeader, { title: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["API token"], ["API token"]))) }),
            React.createElement(Main, null, unauthorised ? (React.createElement(EmptyStateUnauthorized, null)) : (React.createElement(Card, null,
                React.createElement("section", { className: 'body pf-c-content' },
                    React.createElement(CardTitle, null,
                        React.createElement("h2", null, t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["API token"], ["API token"]))))),
                    React.createElement(CardBody, null,
                        React.createElement("p", null,
                            React.createElement(Trans, null,
                                "Use this token to authenticate the",
                                ' ',
                                React.createElement("code", null, "ansible-galaxy"),
                                " client.")),
                        !this.context.user.auth_provider.includes('django') && (React.createElement("div", null,
                            React.createElement("h2", null, t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Expiration"], ["Expiration"])))),
                            React.createElement("p", null,
                                React.createElement(Trans, null,
                                    "You are an SSO user. Your token will expire",
                                    ' ',
                                    React.createElement(DateComponent, { date: expirationDate.toISOString() }),
                                    ".")))),
                        React.createElement("div", { className: 'pf-c-content' },
                            React.createElement(Trans, null,
                                React.createElement("b", null, "WARNING"),
                                " loading a new token will delete your old token.")),
                        token ? (React.createElement("div", null,
                            React.createElement(CardBody, null,
                                React.createElement("div", { className: 'pf-c-content' },
                                    React.createElement(Trans, null,
                                        React.createElement("b", null, "WARNING"),
                                        " copy this token now. This is the only time you will ever see it."))),
                            React.createElement(ClipboardCopy, null, token))) : !token && !loadingToken ? (React.createElement("div", { className: 'load-token' },
                            React.createElement(Button, { onClick: function () { return _this.loadToken(); } }, t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["Load token"], ["Load token"])))))) : (React.createElement(LoadingPageSpinner, null)))))))));
    };
    TokenStandalone.prototype.loadToken = function () {
        var _this = this;
        this.setState({ loadingToken: true }, function () {
            ActiveUserAPI.getToken()
                .then(function (result) {
                return _this.setState({ token: result.data.token, loadingToken: false });
            })
                .catch(function (e) {
                var _a = e.response, status = _a.status, statusText = _a.statusText;
                _this.setState({
                    alerts: __spreadArray(__spreadArray([], _this.state.alerts, true), [
                        {
                            variant: 'danger',
                            title: t(templateObject_5 || (templateObject_5 = __makeTemplateObject(["Token could not be displayed."], ["Token could not be displayed."]))),
                            description: errorMessage(status, statusText),
                        },
                    ], false),
                    loadingToken: false,
                });
            });
        });
    };
    Object.defineProperty(TokenStandalone.prototype, "closeAlert", {
        get: function () {
            return closeAlertMixin('alerts');
        },
        enumerable: false,
        configurable: true
    });
    return TokenStandalone;
}(React.Component));
export default withRouter(TokenStandalone);
TokenStandalone.contextType = AppContext;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
//# sourceMappingURL=token-standalone.js.map