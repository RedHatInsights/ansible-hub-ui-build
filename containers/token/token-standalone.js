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
import { t, Trans } from '@lingui/macro';
import * as React from 'react';
import { withRouter } from 'react-router-dom';
import { Button, ClipboardCopy } from '@patternfly/react-core';
import { BaseHeader, Main } from 'src/components';
import { ActiveUserAPI } from 'src/api';
var TokenPage = /** @class */ (function (_super) {
    __extends(TokenPage, _super);
    function TokenPage(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            token: undefined,
        };
        return _this;
    }
    TokenPage.prototype.render = function () {
        var _this = this;
        var token = this.state.token;
        return (React.createElement(React.Fragment, null,
            React.createElement(BaseHeader, { title: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Token management"], ["Token management"]))) }),
            React.createElement(Main, null,
                React.createElement("section", { className: 'body pf-c-content' },
                    React.createElement("h2", null, t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["API token"], ["API token"])))),
                    React.createElement("p", null,
                        React.createElement(Trans, null,
                            "Use this token to authenticate the ",
                            React.createElement("code", null, "ansible-galaxy"),
                            ' ',
                            "client.")),
                    React.createElement("div", { className: 'pf-c-content' },
                        React.createElement(Trans, null,
                            React.createElement("b", null, "WARNING"),
                            " loading a new token will delete your old token.")),
                    token ? (React.createElement("div", null,
                        React.createElement("div", { className: 'pf-c-content' },
                            React.createElement(Trans, null,
                                React.createElement("b", null, "WARNING"),
                                " copy this token now. This is the only time you will ever see it.")),
                        React.createElement(ClipboardCopy, null, token))) : (React.createElement("div", null,
                        React.createElement(Button, { onClick: function () { return _this.loadToken(); } }, t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Load token"], ["Load token"]))))))))));
    };
    TokenPage.prototype.loadToken = function () {
        var _this = this;
        ActiveUserAPI.getToken().then(function (result) {
            return _this.setState({ token: result.data.token });
        });
    };
    return TokenPage;
}(React.Component));
export default withRouter(TokenPage);
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=token-standalone.js.map