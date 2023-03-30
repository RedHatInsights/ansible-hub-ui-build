var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { t } from '@lingui/macro';
import React from 'react';
import { AnsibleRepositoryAPI } from 'src/api';
import { DeleteAnsibleRepositoryModal } from 'src/components';
import { canDeleteAnsibleRepository } from 'src/permissions';
import { handleHttpError, parsePulpIDFromURL, taskAlert } from 'src/utilities';
import { Action } from './action';
export var ansibleRepositoryDeleteAction = Action({
    condition: canDeleteAnsibleRepository,
    title: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Delete"], ["Delete"]))),
    modal: function (_a) {
        var addAlert = _a.addAlert, query = _a.query, setState = _a.setState, state = _a.state;
        return state.deleteModalOpen ? (React.createElement(DeleteAnsibleRepositoryModal, { closeAction: function () { return setState({ deleteModalOpen: null }); }, deleteAction: function () {
                return deleteRepository(state.deleteModalOpen, { addAlert: addAlert, setState: setState, query: query });
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
function deleteRepository(_a, _b) {
    var name = _a.name, pulpId = _a.pulpId;
    var addAlert = _b.addAlert, setState = _b.setState, query = _b.query;
    return AnsibleRepositoryAPI.delete(pulpId)
        .then(function (_a) {
        var data = _a.data;
        addAlert(taskAlert(data.task, t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Removal started for repository ", ""], ["Removal started for repository ", ""])), name)));
        setState({ deleteModalOpen: null });
        query();
    })
        .catch(handleHttpError(t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Failed to remove repository ", ""], ["Failed to remove repository ", ""])), name), function () { return null; }, addAlert));
}
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=ansible-repository-delete.js.map