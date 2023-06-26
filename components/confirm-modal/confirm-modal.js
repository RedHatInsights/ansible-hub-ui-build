var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { t } from '@lingui/macro';
import { Button, Modal, Spinner } from '@patternfly/react-core';
import React from 'react';
export var ConfirmModal = function (props) {
    var cancelAction = props.cancelAction, children = props.children, confirmAction = props.confirmAction, isDisabled = props.isDisabled, title = props.title, spinner = props.spinner, confirmButtonTitle = props.confirmButtonTitle;
    return (React.createElement(Modal, { actions: [
            React.createElement(Button, { key: 'confirm', onClick: confirmAction, variant: 'primary', isDisabled: isDisabled },
                confirmButtonTitle ? confirmButtonTitle : t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Yes"], ["Yes"]))),
                spinner && React.createElement(Spinner, { size: 'sm' })),
            React.createElement(Button, { key: 'cancel', onClick: cancelAction, variant: 'link' }, t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Cancel"], ["Cancel"])))),
        ], isOpen: true, onClose: cancelAction, title: title, titleIconVariant: 'warning', variant: 'small' }, children));
};
var templateObject_1, templateObject_2;
//# sourceMappingURL=confirm-modal.js.map