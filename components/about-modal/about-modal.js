var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { t } from '@lingui/macro';
import { AboutModal, TextContent, TextList, TextListItem, TextListItemVariants, TextListVariants, } from '@patternfly/react-core';
import { detect } from 'detect-browser';
import React, { useEffect, useState } from 'react';
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
export var AboutModalWindow = function (_a) {
    var isOpen = _a.isOpen, onClose = _a.onClose, brandImageAlt = _a.brandImageAlt, productName = _a.productName, user = _a.user, userName = _a.userName;
    var _b = useState({
        galaxy_ng_commit: '',
        pulp_ansible_version: '',
        server_version: '',
        aap_version: '',
    }), applicationInfo = _b[0], setApplicationInfo = _b[1];
    useEffect(function () {
        ApplicationInfoAPI.get().then(function (result) {
            var _a;
            setApplicationInfo({
                galaxy_ng_commit: result.data.galaxy_ng_commit,
                pulp_ansible_version: result.data.pulp_ansible_version,
                server_version: result.data.server_version,
                aap_version: (_a = result.data) === null || _a === void 0 ? void 0 : _a.aap_version,
            });
        });
    }, []);
    var browser = detect();
    return (React.createElement(AboutModal, { isOpen: isOpen, trademark: '', brandImageSrc: Logo, onClose: onClose, brandImageAlt: brandImageAlt, productName: productName },
        React.createElement(TextContent, null,
            React.createElement(TextList, { component: TextListVariants.dl },
                React.createElement(Label, null, t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Server version"], ["Server version"])))),
                React.createElement(Value, null,
                    applicationInfo.server_version,
                    React.createElement("br", null),
                    applicationInfo.galaxy_ng_commit),
                React.createElement(Label, null, t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Pulp Ansible Version"], ["Pulp Ansible Version"])))),
                React.createElement(Value, null, applicationInfo.pulp_ansible_version),
                (applicationInfo === null || applicationInfo === void 0 ? void 0 : applicationInfo.aap_version) && (React.createElement(React.Fragment, null,
                    React.createElement(Label, null, t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Ansible Automation Platform"], ["Ansible Automation Platform"])))),
                    React.createElement(Value, null, applicationInfo.aap_version))),
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
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;
//# sourceMappingURL=about-modal.js.map