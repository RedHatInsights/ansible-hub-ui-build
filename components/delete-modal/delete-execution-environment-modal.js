var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { Trans, t } from '@lingui/macro';
import { Checkbox, Text } from '@patternfly/react-core';
import React, { useState } from 'react';
import { ExecutionEnvironmentAPI } from 'src/api';
import { waitForTask } from 'src/utilities';
import { errorMessage } from 'src/utilities';
import { DeleteModal } from './delete-modal';
export var DeleteExecutionEnvironmentModal = function (props) {
    var _a = useState(false), confirmDelete = _a[0], setConfirmDelete = _a[1];
    var _b = useState(false), isDeletionPending = _b[0], setIsDeletionPending = _b[1];
    var selectedItem = props.selectedItem, closeAction = props.closeAction;
    return (React.createElement(DeleteModal, { spinner: isDeletionPending, title: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Delete container?"], ["Delete container?"]))), cancelAction: function () { return closeAction(); }, deleteAction: function () {
            return deleteContainer(selectedItem, props, setConfirmDelete, setIsDeletionPending);
        }, isDisabled: !confirmDelete || isDeletionPending },
        React.createElement(Text, { className: 'delete-container-modal-message' },
            React.createElement(Trans, null,
                "Deleting ",
                React.createElement("b", null, selectedItem),
                " and its data will be lost.")),
        React.createElement(Checkbox, { isChecked: confirmDelete, onChange: function (value) { return setConfirmDelete(value); }, label: t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["I understand that this action cannot be undone."], ["I understand that this action cannot be undone."]))), id: 'delete_confirm' })));
};
function deleteContainer(selectedItem, props, setConfirmDelete, setIsDeletionPending) {
    var addAlert = props.addAlert, closeAction = props.closeAction, afterDelete = props.afterDelete;
    setIsDeletionPending(true);
    ExecutionEnvironmentAPI.deleteExecutionEnvironment(selectedItem)
        .then(function (result) {
        var taskId = result.data.task.split('tasks/')[1].replace('/', '');
        waitForTask(taskId).then(function () {
            setConfirmDelete(false);
            setIsDeletionPending(false);
            closeAction();
            addAlert(React.createElement(Trans, null,
                "Execution environment \"",
                selectedItem,
                "\" has been successfully deleted."), 'success');
            afterDelete();
        });
    })
        .catch(function (e) {
        var _a = e.response, status = _a.status, statusText = _a.statusText;
        setConfirmDelete(false);
        setIsDeletionPending(false);
        addAlert(t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Execution environment \"", "\" could not be deleted."], ["Execution environment \"", "\" could not be deleted."])), selectedItem), 'danger', errorMessage(status, statusText));
        closeAction();
    });
}
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=delete-execution-environment-modal.js.map