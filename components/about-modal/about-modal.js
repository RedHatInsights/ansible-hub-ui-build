var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { t } from '@lingui/macro';
import { AboutModal, TextContent, TextList, TextListItem, TextListItemVariants, TextListVariants, } from '@patternfly/react-core';
import { detect } from 'detect-browser';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from 'src/../static/images/logo_large.svg';
import { ApplicationInfoAPI } from 'src/api';
import { ExternalLink } from 'src/components';
import { Paths, formatPath } from 'src/paths';
var Label = function (_a) {
    var children = _a.children;
    return (React.createElement(TextListItem, { component: TextListItemVariants.dt }, children));
};
var Value = function (_a) {
    var children = _a.children;
    return (React.createElement(TextListItem, { component: TextListItemVariants.dd }, children));
};
export var AboutModalWindow = function (_a) {
    var isOpen = _a.isOpen, onClose = _a.onClose, user = _a.user, userName = _a.userName;
    var _b = useState({}), applicationInfo = _b[0], setApplicationInfo = _b[1];
    useEffect(function () {
        ApplicationInfoAPI.get().then(function (_a) {
            var data = _a.data;
            return setApplicationInfo(data);
        });
    }, []);
    var browser = detect();
    var server_version = applicationInfo.server_version, // 4.8.0dev
    galaxy_ng_version = applicationInfo.galaxy_ng_version, // 4.8.0dev | 4.8.1
    galaxy_ng_commit = applicationInfo.galaxy_ng_commit, // origin/master:1234567 | master:12345678 | ""
    galaxy_importer_version = applicationInfo.galaxy_importer_version, // 0.4.13
    pulp_core_version = applicationInfo.pulp_core_version, // 3.28.12
    pulp_ansible_version = applicationInfo.pulp_ansible_version, // 0.19.0
    pulp_container_version = applicationInfo.pulp_container_version, // 2.15.2
    aap_version = applicationInfo.aap_version;
    var galaxy_ng_sha = galaxy_ng_commit === null || galaxy_ng_commit === void 0 ? void 0 : galaxy_ng_commit.split(':')[1];
    var ui_sha = UI_COMMIT_HASH === null || UI_COMMIT_HASH === void 0 ? void 0 : UI_COMMIT_HASH.slice(0, 7);
    return (React.createElement(AboutModal, { brandImageAlt: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Galaxy Logo"], ["Galaxy Logo"]))), brandImageSrc: Logo, isOpen: isOpen, onClose: onClose, productName: APPLICATION_NAME },
        React.createElement(TextContent, null,
            React.createElement(TextList, { component: TextListVariants.dl },
                React.createElement(Label, null, t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Server version"], ["Server version"])))),
                React.createElement(Value, null,
                    server_version !== galaxy_ng_version ? (React.createElement(React.Fragment, null,
                        server_version,
                        React.createElement("br", null))) : null,
                    (galaxy_ng_version === null || galaxy_ng_version === void 0 ? void 0 : galaxy_ng_version.includes('dev')) ? (galaxy_ng_version) : (React.createElement(ExternalLink, { href: "https://github.com/ansible/galaxy_ng/releases/tag/".concat(galaxy_ng_version), title: galaxy_ng_version })),
                    galaxy_ng_commit ? (React.createElement(React.Fragment, null,
                        React.createElement("br", null),
                        galaxy_ng_sha ? (React.createElement(ExternalLink, { href: "https://github.com/ansible/galaxy_ng/commit/".concat(galaxy_ng_sha), title: galaxy_ng_commit })) : (galaxy_ng_commit))) : null),
                React.createElement(Label, null, t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Pulp Ansible Version"], ["Pulp Ansible Version"])))),
                React.createElement(Value, null,
                    React.createElement(ExternalLink, { href: "https://github.com/pulp/pulp_ansible/releases/tag/".concat(pulp_ansible_version), title: pulp_ansible_version })),
                React.createElement(Label, null, t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["Pulp Container Version"], ["Pulp Container Version"])))),
                React.createElement(Value, null,
                    React.createElement(ExternalLink, { href: "https://github.com/pulp/pulp_container/releases/tag/".concat(pulp_container_version), title: pulp_container_version })),
                React.createElement(Label, null, t(templateObject_5 || (templateObject_5 = __makeTemplateObject(["Pulp Core Version"], ["Pulp Core Version"])))),
                React.createElement(Value, null,
                    React.createElement(ExternalLink, { href: "https://github.com/pulp/pulpcore/releases/tag/".concat(pulp_core_version), title: pulp_core_version })),
                React.createElement(Label, null, t(templateObject_6 || (templateObject_6 = __makeTemplateObject(["Galaxy Importer"], ["Galaxy Importer"])))),
                React.createElement(Value, null,
                    React.createElement(ExternalLink, { href: "https://github.com/ansible/galaxy-importer/releases/tag/v".concat(galaxy_importer_version), title: galaxy_importer_version })),
                aap_version && (React.createElement(React.Fragment, null,
                    React.createElement(Label, null, t(templateObject_7 || (templateObject_7 = __makeTemplateObject(["Ansible Automation Platform"], ["Ansible Automation Platform"])))),
                    React.createElement(Value, null, aap_version))),
                React.createElement(Label, null, t(templateObject_8 || (templateObject_8 = __makeTemplateObject(["UI Version"], ["UI Version"])))),
                React.createElement(Value, null,
                    React.createElement(ExternalLink, { href: "https://github.com/ansible/ansible-hub/ui/commit/".concat(ui_sha), title: ui_sha })),
                React.createElement(Label, null, t(templateObject_9 || (templateObject_9 = __makeTemplateObject(["Username"], ["Username"])))),
                React.createElement(Value, null,
                    React.createElement(Link, { to: formatPath(Paths.userDetail, { userID: user.id }), title: user.username }, userName)),
                React.createElement(Label, null, t(templateObject_10 || (templateObject_10 = __makeTemplateObject(["User Groups"], ["User Groups"])))),
                React.createElement(Value, null, user.groups.map(function (_a, index) {
                    var group = _a.id, name = _a.name;
                    return (React.createElement(React.Fragment, null,
                        index ? ', ' : null,
                        React.createElement(Link, { key: group, to: formatPath(Paths.groupDetail, { group: group }) }, name)));
                })),
                React.createElement(Label, null, t(templateObject_11 || (templateObject_11 = __makeTemplateObject(["Browser Version"], ["Browser Version"])))),
                React.createElement(Value, null, browser.name + ' ' + browser.version),
                React.createElement(Label, null, t(templateObject_12 || (templateObject_12 = __makeTemplateObject(["Browser OS"], ["Browser OS"])))),
                React.createElement(Value, null, browser.os)))));
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12;
//# sourceMappingURL=about-modal.js.map