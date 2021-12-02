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
import * as React from 'react';
import { Button, Modal, Spinner } from '@patternfly/react-core';
var DeleteModal = /** @class */ (function (_super) {
    __extends(DeleteModal, _super);
    function DeleteModal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DeleteModal.prototype.render = function () {
        var _a = this.props, cancelAction = _a.cancelAction, children = _a.children, deleteAction = _a.deleteAction, isDisabled = _a.isDisabled, title = _a.title, spinner = _a.spinner;
        return (React.createElement(Modal, { actions: [
                React.createElement(Button, { key: 'delete', onClick: deleteAction, variant: 'danger', isDisabled: isDisabled }, t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Delete"], ["Delete"]))),
                    spinner && React.createElement(Spinner, { size: 'sm' })),
                React.createElement(Button, { key: 'cancel', onClick: cancelAction, variant: 'link' }, t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Cancel"], ["Cancel"])))),
            ], isOpen: true, onClose: cancelAction, title: title, titleIconVariant: 'warning', variant: 'small' }, children));
    };
    return DeleteModal;
}(React.Component));
export { DeleteModal };
var templateObject_1, templateObject_2;
//# sourceMappingURL=delete-modal.js.map