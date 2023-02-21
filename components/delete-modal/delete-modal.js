var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { t } from '@lingui/macro';
import { Button, Modal, Spinner } from '@patternfly/react-core';
import * as React from 'react';
export var DeleteModal = function (_a) {
    var cancelAction = _a.cancelAction, children = _a.children, deleteAction = _a.deleteAction, isDisabled = _a.isDisabled, title = _a.title, spinner = _a.spinner, _b = _a.variant, variant = _b === void 0 ? 'small' : _b;
    return (React.createElement(Modal, { actions: [
            React.createElement("div", { "data-cy": 'delete-button', key: 'delete' },
                React.createElement(Button, { key: 'delete', onClick: deleteAction, variant: 'danger', isDisabled: isDisabled }, t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Delete"], ["Delete"]))),
                    spinner && React.createElement(Spinner, { size: 'sm' }))),
            React.createElement(Button, { key: 'cancel', onClick: cancelAction, variant: 'link' }, t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Cancel"], ["Cancel"])))),
        ], isOpen: true, onClose: cancelAction, title: title, titleIconVariant: 'warning', variant: variant, "data-cy": 'modal_checkbox' }, children));
};
var templateObject_1, templateObject_2;
//# sourceMappingURL=delete-modal.js.map