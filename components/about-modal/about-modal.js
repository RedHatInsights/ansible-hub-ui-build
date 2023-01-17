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
import { AboutModal, TextContent, TextList, TextListItem, TextListItemVariants, TextListVariants, } from '@patternfly/react-core';
import { detect } from 'detect-browser';
import * as React from 'react';
import Logo from 'src/../static/images/logo_large.svg';
import { ApplicationInfoAPI } from 'src/api';
var Label = function (_a) {
    var children = _a.children;
    return (React.createElement(TextListItem, { component: TextListItemVariants.dt }, children));
};
var Value = function (_a) {
    var children = _a.children;
    return (React.createElement(TextListItem, { component: TextListItemVariants.dd }, children));
};
var AboutModalWindow = /** @class */ (function (_super) {
    __extends(AboutModalWindow, _super);
    function AboutModalWindow(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            applicationInfo: {
                galaxy_ng_commit: '',
                pulp_ansible_version: '',
                server_version: '',
                aap_version: '',
            },
        };
        return _this;
    }
    AboutModalWindow.prototype.componentDidMount = function () {
        var _this = this;
        ApplicationInfoAPI.get().then(function (result) {
            var _a;
            _this.setState({
                applicationInfo: {
                    galaxy_ng_commit: result.data.galaxy_ng_commit,
                    pulp_ansible_version: result.data.pulp_ansible_version,
                    server_version: result.data.server_version,
                    aap_version: (_a = result.data) === null || _a === void 0 ? void 0 : _a.aap_version,
                },
            });
        });
    };
    AboutModalWindow.prototype.render = function () {
        var _a;
        var _b = this.props, isOpen = _b.isOpen, onClose = _b.onClose, brandImageAlt = _b.brandImageAlt, productName = _b.productName, user = _b.user, userName = _b.userName;
        var browser = detect();
        return (React.createElement(AboutModal, { isOpen: isOpen, trademark: '', brandImageSrc: Logo, onClose: onClose, brandImageAlt: brandImageAlt, productName: productName },
            React.createElement(TextContent, null,
                React.createElement(TextList, { component: TextListVariants.dl },
                    React.createElement(Label, null, t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Server version"], ["Server version"])))),
                    React.createElement(Value, null,
                        this.state.applicationInfo.server_version,
                        React.createElement("br", null),
                        this.state.applicationInfo.galaxy_ng_commit),
                    React.createElement(Label, null, t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Pulp Ansible Version"], ["Pulp Ansible Version"])))),
                    React.createElement(Value, null, this.state.applicationInfo.pulp_ansible_version),
                    ((_a = this.state.applicationInfo) === null || _a === void 0 ? void 0 : _a.aap_version) && (React.createElement(React.Fragment, null,
                        React.createElement(Label, null, t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Ansible Automation Platform"], ["Ansible Automation Platform"])))),
                        React.createElement(Value, null, this.state.applicationInfo.aap_version))),
                    React.createElement(Label, null, t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["UI Version"], ["UI Version"])))),
                    React.createElement(Value, null, UI_COMMIT_HASH),
                    React.createElement(Label, null, t(templateObject_5 || (templateObject_5 = __makeTemplateObject(["Username"], ["Username"])))),
                    React.createElement(Value, null, userName),
                    React.createElement(Label, null, t(templateObject_6 || (templateObject_6 = __makeTemplateObject(["User Groups"], ["User Groups"])))),
                    React.createElement(Value, null, user.groups.map(function (group) { return group.name; }).join()),
                    React.createElement(Label, null, t(templateObject_7 || (templateObject_7 = __makeTemplateObject(["Browser Version"], ["Browser Version"])))),
                    React.createElement(Value, null, browser.name + ' ' + browser.version),
                    React.createElement(Label, null, t(templateObject_8 || (templateObject_8 = __makeTemplateObject(["Browser OS"], ["Browser OS"])))),
                    React.createElement(Value, null, browser.os)))));
    };
    return AboutModalWindow;
}(React.Component));
export { AboutModalWindow };
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;
//# sourceMappingURL=about-modal.js.map