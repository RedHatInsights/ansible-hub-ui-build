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
import { withRouter, Link } from 'react-router-dom';
import { ClipboardCopy, ClipboardCopyVariant, Button, } from '@patternfly/react-core';
import { Paths } from 'src/paths';
import { BaseHeader, Main } from 'src/components';
import { getRepoUrl } from 'src/utilities';
import { AppContext } from 'src/loaders/app-context';
var TokenPage = /** @class */ (function (_super) {
    __extends(TokenPage, _super);
    function TokenPage(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            tokenData: undefined,
        };
        return _this;
    }
    TokenPage.prototype.componentDidMount = function () {
        var _this = this;
        // this function will fail if chrome.auth.doOffline() hasn't been called
        window.insights.chrome.auth.getOfflineToken().then(function (result) {
            _this.setState({ tokenData: result.data });
        });
    };
    TokenPage.prototype.render = function () {
        var _this = this;
        var _a;
        var user = this.context.user;
        var tokenData = this.state.tokenData;
        var renewTokenCmd = "curl https://sso.redhat.com/auth/realms/redhat-external/protocol/openid-connect/token -d grant_type=refresh_token -d client_id=\"" + user.username + "\" -d refresh_token=\"" + ((_a = tokenData === null || tokenData === void 0 ? void 0 : tokenData.refresh_token) !== null && _a !== void 0 ? _a : '{{ user_token }}') + "\" --fail --silent --show-error --output /dev/null";
        return (React.createElement(React.Fragment, null,
            React.createElement(BaseHeader, { title: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Connect to Hub"], ["Connect to Hub"]))) }),
            React.createElement(Main, null,
                React.createElement("section", { className: 'body pf-c-content' },
                    React.createElement("h2", null, t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Connect Private Automation Hub"], ["Connect Private Automation Hub"])))),
                    React.createElement("p", null,
                        "Use the",
                        ' ',
                        React.createElement(Link, { to: Paths.repositories }, t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Repository Management"], ["Repository Management"])))),
                        ' ',
                        "page to sync collections curated by your organization to the Red Hat Certified repository in your private Automation Hub. Users with the correct permissions can use the sync toggles on the",
                        ' ',
                        React.createElement(Link, { to: Paths.search }, t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["Collections"], ["Collections"])))),
                        " page to control which collections are added to their organization's sync repository.")),
                React.createElement("section", { className: 'body pf-c-content' },
                    React.createElement("h2", null, t(templateObject_5 || (templateObject_5 = __makeTemplateObject(["Connect the ansible-galaxy client"], ["Connect the ansible-galaxy client"])))),
                    React.createElement("p", null,
                        "Documentation on how to configure the ",
                        React.createElement("code", null, "ansible-galaxy"),
                        ' ',
                        "client can be found",
                        ' ',
                        React.createElement("a", { href: 'https://access.redhat.com/documentation/en-us/red_hat_ansible_automation_platform/', target: '_blank' }, "here"),
                        ". Use the following parameters to configure the client.")),
                React.createElement("section", { className: 'body pf-c-content' },
                    React.createElement("h2", null, t(templateObject_6 || (templateObject_6 = __makeTemplateObject(["Offline token"], ["Offline token"])))),
                    React.createElement("p", null, t(templateObject_7 || (templateObject_7 = __makeTemplateObject(["Use this token to authenticate clients that need to download"], ["Use this token to authenticate clients that need to download"]))),
                        "content from Automation Hub. This is a secret token used to protect your content. Store your API token in a secure location."),
                    tokenData ? (React.createElement("div", null,
                        React.createElement(ClipboardCopy, null, tokenData.refresh_token))) : (React.createElement(Button, { onClick: function () { return _this.loadToken(); } }, t(templateObject_8 || (templateObject_8 = __makeTemplateObject(["Load token"], ["Load token"]))))),
                    React.createElement("div", { className: 'pf-c-content', style: { paddingTop: 'var(--pf-global--spacer--md)' } },
                        React.createElement("span", null, "The token will expire after 30 days of inactivity. Run the command below periodically to prevent your token from expiring."),
                        React.createElement(ClipboardCopy, { isCode: true, isReadOnly: true, variant: ClipboardCopyVariant.expansion }, renewTokenCmd)),
                    React.createElement("h2", null, t(templateObject_9 || (templateObject_9 = __makeTemplateObject(["Manage tokens"], ["Manage tokens"])))),
                    "To revoke a token or see all of your tokens, visit the",
                    ' ',
                    React.createElement("a", { href: 'https://sso.redhat.com/auth/realms/redhat-external/account/applications', target: '_blank' }, "offline API token management"),
                    ' ',
                    "page."),
                React.createElement("section", { className: 'body pf-c-content' },
                    React.createElement("h2", null, t(templateObject_10 || (templateObject_10 = __makeTemplateObject(["Server URL"], ["Server URL"])))),
                    React.createElement("p", null, t(templateObject_11 || (templateObject_11 = __makeTemplateObject(["Use this URL to configure the API endpoints that clients need to"], ["Use this URL to configure the API endpoints that clients need to"]))),
                        "download content from Automation Hub."),
                    React.createElement(ClipboardCopy, { isReadOnly: true }, getRepoUrl('')),
                    React.createElement("p", null, t(templateObject_12 || (templateObject_12 = __makeTemplateObject(["Note: this URL contains all collections in Hub. To connect to your"], ["Note: this URL contains all collections in Hub. To connect to your"]))),
                        "organization's sync repository use the URL found on",
                        ' ',
                        React.createElement(Link, { to: Paths.repositories }, t(templateObject_13 || (templateObject_13 = __makeTemplateObject(["Repository Management"], ["Repository Management"])))),
                        ".")),
                React.createElement("section", { className: 'body pf-c-content' },
                    React.createElement("h2", null, t(templateObject_14 || (templateObject_14 = __makeTemplateObject(["SSO URL"], ["SSO URL"])))),
                    React.createElement("p", null, t(templateObject_15 || (templateObject_15 = __makeTemplateObject(["Use this URL to configure the authentication URLs that clients"], ["Use this URL to configure the authentication URLs that clients"]))),
                        "need to download content from Automation Hub."),
                    React.createElement(ClipboardCopy, { isReadOnly: true }, "https://sso.redhat.com/auth/realms/redhat-external/protocol/openid-connect/token")))));
    };
    TokenPage.prototype.loadToken = function () {
        window.insights.chrome.auth
            // doOffline causes the page to refresh and will make the data
            // available to getOfflineToken() when the component mounts after
            // the reload
            .doOffline();
    };
    return TokenPage;
}(React.Component));
export default withRouter(TokenPage);
TokenPage.contextType = AppContext;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15;
//# sourceMappingURL=token-insights.js.map