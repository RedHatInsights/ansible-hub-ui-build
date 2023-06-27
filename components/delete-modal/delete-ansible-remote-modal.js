var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { Trans, t } from '@lingui/macro';
import { Text } from '@patternfly/react-core';
import React, { useState } from 'react';
import { DeleteModal } from 'src/components';
export var DeleteAnsibleRemoteModal = function (_a) {
    var closeAction = _a.closeAction, deleteAction = _a.deleteAction, name = _a.name;
    var _b = useState(false), pending = _b[0], setPending = _b[1];
    if (!name) {
        return null;
    }
    return (React.createElement(DeleteModal, { spinner: pending, cancelAction: function () {
            setPending(false);
            closeAction();
        }, deleteAction: function () {
            setPending(false);
            deleteAction();
        }, isDisabled: pending, title: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Delete remote?"], ["Delete remote?"]))) },
        React.createElement(Text, null,
            React.createElement(Trans, null,
                "Are you sure you want to delete the remote ",
                React.createElement("b", null, name),
                "?",
                React.createElement("br", null),
                React.createElement("b", null, "Note:"),
                " This will also delete all associated resources under this remote."))));
};
var templateObject_1;
//# sourceMappingURL=delete-ansible-remote-modal.js.map