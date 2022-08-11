var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { t, Trans } from '@lingui/macro';
import { Button, ButtonVariant, Form, FormGroup, FormSelect, FormSelectOption, Grid, GridItem, Modal, ModalVariant, Split, SplitItem, } from '@patternfly/react-core';
import React from 'react';
export var SignAllCertificatesModal = function (_a) {
    var name = _a.name, isOpen = _a.isOpen, onSubmit = _a.onSubmit, onCancel = _a.onCancel;
    return (React.createElement(Modal, { variant: ModalVariant.medium, title: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Sign all collections"], ["Sign all collections"]))), isOpen: isOpen, onClose: onCancel, actions: [
            React.createElement(Button, { key: 'sign-all', "data-cy": 'modal-sign-button', variant: ButtonVariant.primary, onClick: onSubmit }, t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Sign all"], ["Sign all"])))),
            React.createElement(Button, { key: 'cancel', variant: ButtonVariant.link, onClick: onCancel }, t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Cancel"], ["Cancel"])))),
        ] },
        React.createElement(Grid, { hasGutter: true },
            React.createElement(GridItem, { span: 12 },
                React.createElement("p", null,
                    React.createElement(Trans, null,
                        "You are about to sign ",
                        React.createElement("strong", null, "all versions"),
                        " under",
                        ' ',
                        React.createElement("strong", null, name),
                        "."))),
            React.createElement(GridItem, { span: 12 },
                React.createElement(Split, { hasGutter: true },
                    React.createElement(SplitItem, null,
                        React.createElement(Trans, null, "Signed version(s)")),
                    React.createElement(SplitItem, null),
                    React.createElement(SplitItem, null,
                        React.createElement(Trans, null, "Unsigned version(s)")))),
            React.createElement(GridItem, { span: 12 },
                React.createElement(Form, null,
                    React.createElement(FormGroup, { fieldId: 'service-selector', label: t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["Signing service selector:"], ["Signing service selector:"]))) },
                        React.createElement(FormSelect, { value: 'ansible-default', id: 'service-selector' },
                            React.createElement(FormSelectOption, { value: 'ansible-default', label: 'ansible-default' }))))))));
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=sign-all-certificates-modal.js.map