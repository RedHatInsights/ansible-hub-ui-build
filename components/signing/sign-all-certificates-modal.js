var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { t, Trans } from '@lingui/macro';
import { Button, ButtonVariant, Modal, ModalVariant, } from '@patternfly/react-core';
import React from 'react';
export var SignAllCertificatesModal = function (_a) {
    var name = _a.name, numberOfAffected = _a.numberOfAffected, isOpen = _a.isOpen, onSubmit = _a.onSubmit, onCancel = _a.onCancel;
    return (React.createElement(Modal, { variant: ModalVariant.medium, title: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Sign all collections"], ["Sign all collections"]))), isOpen: isOpen, onClose: onCancel, actions: [
            React.createElement(Button, { key: 'sign-all', variant: ButtonVariant.primary, onClick: onSubmit }, t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Sign all"], ["Sign all"])))),
            React.createElement(Button, { key: 'cancel', variant: ButtonVariant.link, onClick: onCancel }, t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Cancel"], ["Cancel"])))),
        ] },
        React.createElement("p", null,
            React.createElement(Trans, null,
                "You are about to sign ",
                React.createElement("strong", null, "all"),
                " versions under",
                ' ',
                React.createElement("strong", null, name),
                ".")),
        React.createElement("br", null),
        React.createElement("p", null,
            React.createElement(Trans, null,
                "This action will affect ",
                React.createElement("strong", null, numberOfAffected),
                " version(s)."))));
};
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=sign-all-certificates-modal.js.map