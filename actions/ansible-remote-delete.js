var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { t } from '@lingui/macro';
import React from 'react';
import { AnsibleRemoteAPI } from 'src/api';
import { DeleteAnsibleRemoteModal } from 'src/components';
import { handleHttpError, parsePulpIDFromURL, taskAlert } from 'src/utilities';
import { Action } from './action';
export var ansibleRemoteDeleteAction = Action({
    title: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Delete"], ["Delete"]))),
    modal: function (_a) {
        var addAlert = _a.addAlert, query = _a.query, setState = _a.setState, state = _a.state;
        return state.deleteModalOpen ? (React.createElement(DeleteAnsibleRemoteModal, { closeAction: function () { return setState({ deleteModalOpen: null }); }, deleteAction: function () {
                return deleteRemote(state.deleteModalOpen, { addAlert: addAlert, setState: setState, query: query });
            }, name: state.deleteModalOpen.name })) : null;
    },
    onClick: function (_a, _b) {
        var name = _a.name, id = _a.id, pulp_href = _a.pulp_href;
        var setState = _b.setState;
        return setState({
            deleteModalOpen: { pulpId: id || parsePulpIDFromURL(pulp_href), name: name },
        });
    },
});
function deleteRemote(_a, _b) {
    var name = _a.name, pulpId = _a.pulpId;
    var addAlert = _b.addAlert, setState = _b.setState, query = _b.query;
    return AnsibleRemoteAPI.delete(pulpId)
        .then(function (_a) {
        var data = _a.data;
        addAlert(taskAlert(data.task, t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Removal started for remote ", ""], ["Removal started for remote ", ""])), name)));
        setState({ deleteModalOpen: null });
        query();
    })
        .catch(handleHttpError(t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Failed to remove remote ", ""], ["Failed to remove remote ", ""])), name), function () { return null; }, addAlert));
}
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=ansible-remote-delete.js.map