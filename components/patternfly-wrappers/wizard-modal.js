var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { t } from '@lingui/macro';
import { Modal, ModalVariant, Wizard as PFWizard, } from '@patternfly/react-core';
import React from 'react';
export var WizardModal = function (_a) {
    var steps = _a.steps, title = _a.title, onClose = _a.onClose, onSave = _a.onSave, variant = _a.variant;
    return (React.createElement(Modal, { isOpen: true, variant: variant !== null && variant !== void 0 ? variant : ModalVariant.large, showClose: false, "aria-label": title, hasNoBodyWrapper: true },
        React.createElement(PFWizard, { hasNoBodyPadding: true, navAriaLabel: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["", " steps"], ["", " steps"])), title), mainAriaLabel: t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["", " content"], ["", " content"])), title), backButtonText: t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Back"], ["Back"]))), cancelButtonText: t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["Cancel"], ["Cancel"]))), closeButtonAriaLabel: t(templateObject_5 || (templateObject_5 = __makeTemplateObject(["Close"], ["Close"]))), nextButtonText: t(templateObject_6 || (templateObject_6 = __makeTemplateObject(["Next"], ["Next"]))), titleId: 'wizard-modal-title', descriptionId: 'wizard-modal-description', title: title, steps: steps, onClose: onClose, onSave: onSave })));
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
//# sourceMappingURL=wizard-modal.js.map