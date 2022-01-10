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
import { t, Trans } from '@lingui/macro';
import * as React from 'react';
import { ExecutionEnvironmentAPI } from 'src/api';
import { waitForTask } from 'src/utilities';
import { DeleteModal } from 'src/components/delete-modal/delete-modal';
import { Checkbox, Text } from '@patternfly/react-core';
var DeleteExecutionEnvironmentModal = /** @class */ (function (_super) {
    __extends(DeleteExecutionEnvironmentModal, _super);
    function DeleteExecutionEnvironmentModal(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            confirmDelete: false,
            isDeletionPending: false,
        };
        return _this;
    }
    DeleteExecutionEnvironmentModal.prototype.render = function () {
        var _this = this;
        var _a = this.props, selectedItem = _a.selectedItem, closeAction = _a.closeAction;
        var _b = this.state, isDeletionPending = _b.isDeletionPending, confirmDelete = _b.confirmDelete;
        return (React.createElement(DeleteModal, { spinner: isDeletionPending, title: 'Delete container?', cancelAction: function () { return closeAction(); }, deleteAction: function () { return _this.deleteContainer(selectedItem); }, isDisabled: !confirmDelete || isDeletionPending },
            React.createElement(Text, { className: 'delete-container-modal-message' },
                React.createElement(Trans, null,
                    "Deleting ",
                    React.createElement("b", null, selectedItem),
                    " and its data will be lost.")),
            React.createElement(Checkbox, { isChecked: confirmDelete, onChange: function (value) { return _this.setState({ confirmDelete: value }); }, label: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["I understand that this action cannot be undone."], ["I understand that this action cannot be undone."]))), id: 'delete_confirm' })));
    };
    DeleteExecutionEnvironmentModal.prototype.deleteContainer = function (selectedItem) {
        var _this = this;
        var _a = this.props, addAlert = _a.addAlert, closeAction = _a.closeAction, afterDelete = _a.afterDelete;
        this.setState({ isDeletionPending: true }, function () {
            return ExecutionEnvironmentAPI.deleteExecutionEnvironment(selectedItem)
                .then(function (result) {
                var taskId = result.data.task.split('tasks/')[1].replace('/', '');
                waitForTask(taskId).then(function () {
                    _this.setState({
                        confirmDelete: false,
                        isDeletionPending: false,
                    });
                    closeAction();
                    addAlert(t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Success: ", " was deleted"], ["Success: ", " was deleted"])), selectedItem), 'success', null);
                    afterDelete();
                });
            })
                .catch(function () {
                _this.setState({
                    confirmDelete: false,
                    isDeletionPending: false,
                });
                addAlert(t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Error: delete failed"], ["Error: delete failed"]))), 'danger', null);
                closeAction();
            });
        });
    };
    return DeleteExecutionEnvironmentModal;
}(React.Component));
export { DeleteExecutionEnvironmentModal };
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=delete-execution-environment-modal.js.map