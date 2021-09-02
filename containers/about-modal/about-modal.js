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
import { AboutModal, TextContent, TextList, TextListItem, TextListItemVariants, TextListVariants, } from '@patternfly/react-core';
import Logo from 'src/../static/images/logo_large.svg';
import { ApplicationInfoAPI } from 'src/api';
import { detect } from 'detect-browser';
var AboutModalWindow = /** @class */ (function (_super) {
    __extends(AboutModalWindow, _super);
    function AboutModalWindow(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            applicationInfo: { server_version: '', pulp_ansible_version: '' },
        };
        return _this;
    }
    AboutModalWindow.prototype.componentDidMount = function () {
        var _this = this;
        ApplicationInfoAPI.get('').then(function (result) {
            _this.setState({
                applicationInfo: {
                    server_version: result.data.server_version,
                    pulp_ansible_version: result.data.pulp_ansible_version,
                },
            });
        });
    };
    AboutModalWindow.prototype.render = function () {
        var _a = this.props, isOpen = _a.isOpen, onClose = _a.onClose, brandImageAlt = _a.brandImageAlt, productName = _a.productName, user = _a.user, userName = _a.userName;
        var browser = detect();
        return (React.createElement(AboutModal, { isOpen: isOpen, trademark: '', brandImageSrc: Logo, onClose: onClose, brandImageAlt: brandImageAlt, productName: productName },
            React.createElement(TextContent, null,
                React.createElement(TextList, { component: TextListVariants.dl },
                    React.createElement(TextListItem, { component: TextListItemVariants.dt }, "Server version"),
                    React.createElement(TextListItem, { component: TextListItemVariants.dd }, this.state.applicationInfo.server_version),
                    React.createElement(TextListItem, { component: TextListItemVariants.dt }, "Pulp Ansible Version"),
                    React.createElement(TextListItem, { component: TextListItemVariants.dd }, this.state.applicationInfo.pulp_ansible_version),
                    React.createElement(TextListItem, { component: TextListItemVariants.dt }, "Username"),
                    React.createElement(TextListItem, { component: TextListItemVariants.dd }, userName),
                    React.createElement(TextListItem, { component: TextListItemVariants.dt }, "User Groups"),
                    React.createElement(TextListItem, { component: TextListItemVariants.dd }, user.groups.map(function (group) { return group.name; }).join()),
                    React.createElement(TextListItem, { component: TextListItemVariants.dt }, "Browser Version"),
                    React.createElement(TextListItem, { component: TextListItemVariants.dd }, browser.name + ' ' + browser.version),
                    React.createElement(TextListItem, { component: TextListItemVariants.dt }, "Browser OS"),
                    React.createElement(TextListItem, { component: TextListItemVariants.dd }, browser.os)))));
    };
    return AboutModalWindow;
}(React.Component));
export { AboutModalWindow };
//# sourceMappingURL=about-modal.js.map