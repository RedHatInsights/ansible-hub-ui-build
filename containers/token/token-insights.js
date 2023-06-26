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
import { Button, ClipboardCopyVariant } from '@patternfly/react-core';
import React from 'react';
import { MyDistributionAPI } from 'src/api';
import { AlertList, BaseHeader, ClipboardCopy, Main, closeAlertMixin, } from 'src/components';
import { AppContext } from 'src/loaders/app-context';
import { withRouter } from 'src/utilities';
import { errorMessage, getRepoURL } from 'src/utilities';
var TokenInsights = /** @class */ (function (_super) {
    __extends(TokenInsights, _super);
    function TokenInsights(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            tokenData: undefined,
            alerts: [],
            repoUrl: '',
        };
        return _this;
    }
    TokenInsights.prototype.getMyDistributionPath = function () {
        var _this = this;
        MyDistributionAPI.list()
            .then(function (_a) {
            var _b;
            var data = _a.data;
            var syncDistro = ((_b = data.data.find(function (_a) {
                var base_path = _a.base_path;
                return base_path.includes('synclist');
            })) === null || _b === void 0 ? void 0 : _b.base_path) || '';
            _this.setState({
                repoUrl: syncDistro,
            });
        })
            .catch(function (e) {
            var _a = e.response, status = _a.status, statusText = _a.statusText;
            _this.setState({
                repoUrl: '',
                alerts: __spreadArray(__spreadArray([], _this.state.alerts, true), [
                    {
                        variant: 'danger',
                        title: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Server URL could not be displayed."], ["Server URL could not be displayed."]))),
                        description: errorMessage(status, statusText),
                    },
                ], false),
            });
        });
    };
    TokenInsights.prototype.componentDidMount = function () {
        var _this = this;
        // this function will fail if chrome.auth.doOffline() hasn't been called
        // so it never works the first time .. loadToken() causes a reload and then it works => no error handling
        window.insights.chrome.auth.getOfflineToken().then(function (result) {
            _this.setState({ tokenData: result.data });
        });
        this.getMyDistributionPath();
    };
    TokenInsights.prototype.render = function () {
        var _this = this;
        var _a;
        var _b = this.state, tokenData = _b.tokenData, alerts = _b.alerts;
        var renewTokenCmd = "curl https://sso.redhat.com/auth/realms/redhat-external/protocol/openid-connect/token -d grant_type=refresh_token -d client_id=\"cloud-services\" -d refresh_token=\"".concat((_a = tokenData === null || tokenData === void 0 ? void 0 : tokenData.refresh_token) !== null && _a !== void 0 ? _a : '{{ user_token }}', "\" --fail --silent --show-error --output /dev/null");
        return (React.createElement(React.Fragment, null,
            React.createElement(AlertList, { alerts: alerts, closeAlert: function (i) { return _this.closeAlert(i); } }),
            React.createElement(BaseHeader, { title: t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Connect to Hub"], ["Connect to Hub"]))) }),
            React.createElement(Main, null,
                React.createElement("section", { className: 'body pf-c-content' },
                    React.createElement("h2", null, t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Connect Private Automation Hub"], ["Connect Private Automation Hub"])))),
                    React.createElement("p", null,
                        React.createElement(Trans, null, "Use the Server URL below to sync certified collections to the Red Hat Certified repository in your private Automation Hub. If you wish to sync validated content, you can add a remote with a server url pointed to the validated repo."))),
                React.createElement("section", { className: 'body pf-c-content' },
                    React.createElement("h2", null, t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["Connect the ansible-galaxy client"], ["Connect the ansible-galaxy client"])))),
                    React.createElement("p", null,
                        React.createElement(Trans, null,
                            "Documentation on how to configure the",
                            ' ',
                            React.createElement("code", null, "ansible-galaxy"),
                            " client can be found",
                            ' ',
                            React.createElement("a", { href: 'https://access.redhat.com/documentation/en-us/red_hat_ansible_automation_platform/', target: '_blank', rel: 'noreferrer' }, "here"),
                            ". Use the following parameters to configure the client."))),
                React.createElement("section", { className: 'body pf-c-content' },
                    React.createElement("h2", null, t(templateObject_5 || (templateObject_5 = __makeTemplateObject(["Offline token"], ["Offline token"])))),
                    React.createElement("p", null,
                        React.createElement(Trans, null, "Use this token to authenticate clients that need to download content from Automation Hub. This is a secret token used to protect your content. Store your API token in a secure location.")),
                    tokenData ? (React.createElement("div", null,
                        React.createElement(ClipboardCopy, null, tokenData.refresh_token))) : (React.createElement("div", null,
                        React.createElement(Button, { onClick: function () { return _this.loadToken(); } }, t(templateObject_6 || (templateObject_6 = __makeTemplateObject(["Load token"], ["Load token"])))))),
                    React.createElement("div", { className: 'pf-c-content', style: { paddingTop: 'var(--pf-global--spacer--md)' } },
                        React.createElement("span", null,
                            React.createElement(Trans, null, "The token will expire after 30 days of inactivity. Run the command below periodically to prevent your token from expiring.")),
                        React.createElement(ClipboardCopy, { isCode: true, isReadOnly: true, variant: ClipboardCopyVariant.expansion }, renewTokenCmd)),
                    React.createElement("h2", null, t(templateObject_7 || (templateObject_7 = __makeTemplateObject(["Manage tokens"], ["Manage tokens"])))),
                    React.createElement(Trans, null,
                        "To revoke a token or see all of your tokens, visit the",
                        ' ',
                        React.createElement("a", { href: 'https://sso.redhat.com/auth/realms/redhat-external/account', target: '_blank', rel: 'noreferrer' }, "offline API token management"),
                        ' ',
                        "page.")),
                React.createElement("section", { className: 'body pf-c-content' },
                    React.createElement("h2", null, t(templateObject_8 || (templateObject_8 = __makeTemplateObject(["Server URL"], ["Server URL"])))),
                    React.createElement("p", null,
                        React.createElement(Trans, null, "Use this URL to configure the API endpoints that clients need to download certified content from Automation Hub. Synclists are deprecated in AAP 2.4 and will be removed in a future release, instead use client-side requirements.yml, see AAP 2.4 documentation.")),
                    React.createElement(ClipboardCopy, { isReadOnly: true }, getRepoURL('published', true))),
                React.createElement("section", { className: 'body pf-c-content' },
                    React.createElement("h2", null, t(templateObject_9 || (templateObject_9 = __makeTemplateObject(["SSO URL"], ["SSO URL"])))),
                    React.createElement("p", null,
                        React.createElement(Trans, null, "Use this URL to configure the authentication URLs that clients need to download content from Automation Hub.")),
                    React.createElement(ClipboardCopy, { isReadOnly: true }, "https://sso.redhat.com/auth/realms/redhat-external/protocol/openid-connect/token")),
                React.createElement("section", { className: 'body pf-c-content' },
                    React.createElement("h2", null, t(templateObject_10 || (templateObject_10 = __makeTemplateObject(["CRC public key"], ["CRC public key"])))),
                    React.createElement("p", null,
                        React.createElement(Trans, null,
                            "We use a number of keys to sign our software packages. The necessary public keys are included in the relevant products and are used to automatically verify software updates. You can also verify the packages manually using the keys on this page. More information can be found",
                            ' ',
                            React.createElement("a", { href: 'https://access.redhat.com/security/team/key', target: '_blank', rel: 'noreferrer' }, "here.")))))));
    };
    TokenInsights.prototype.loadToken = function () {
        // doOffline causes the page to refresh and will make the data
        // available to getOfflineToken() when the component mounts after
        // the reload
        window.insights.chrome.auth.doOffline();
    };
    Object.defineProperty(TokenInsights.prototype, "closeAlert", {
        get: function () {
            return closeAlertMixin('alerts');
        },
        enumerable: false,
        configurable: true
    });
    return TokenInsights;
}(React.Component));
export default withRouter(TokenInsights);
TokenInsights.contextType = AppContext;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10;
//# sourceMappingURL=token-insights.js.map