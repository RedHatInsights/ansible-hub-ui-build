var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { t, Trans } from '@lingui/macro';
import { Button, ButtonVariant, Modal, ModalVariant, } from '@patternfly/react-core';
import React from 'react';
export var SignSingleCertificateModal = function (_a) {
    var name = _a.name, version = _a.version, isOpen = _a.isOpen, onSubmit = _a.onSubmit, onCancel = _a.onCancel;
    return (React.createElement(Modal, { variant: ModalVariant.medium, title: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Sign version ", ""], ["Sign version ", ""])), version), isOpen: isOpen, onClose: onCancel, actions: [
            React.createElement(Button, { key: 'sign', variant: ButtonVariant.primary, onClick: onSubmit }, t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Sign"], ["Sign"])))),
            React.createElement(Button, { key: 'cancel', variant: ButtonVariant.link, onClick: onCancel }, t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Cancel"], ["Cancel"])))),
        ] },
        React.createElement("p", null,
            React.createElement(Trans, null,
                "You are about to sign ",
                React.createElement("strong", null,
                    "version ",
                    version),
                " under",
                ' ',
                React.createElement("strong", null, name),
                "."))));
};
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=sign-single-certificate-modal.js.map