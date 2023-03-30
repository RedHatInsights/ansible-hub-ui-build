var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { Trans, t } from '@lingui/macro';
import { Button, Modal, Spinner } from '@patternfly/react-core';
import React, { useState } from 'react';
import { AnsibleRepositoryAPI } from 'src/api';
import { canRevertAnsibleRepositoryVersion } from 'src/permissions';
import { handleHttpError, parsePulpIDFromURL, taskAlert } from 'src/utilities';
import { Action } from './action';
var RevertModal = function (_a) {
    var version = _a.version, cancelAction = _a.cancelAction, revertAction = _a.revertAction;
    var _b = useState(false), pending = _b[0], setPending = _b[1];
    return (React.createElement(Modal, { actions: [
            React.createElement("div", { "data-cy": 'delete-button', key: 'delete' },
                React.createElement(Button, { key: 'delete', onClick: function () {
                        setPending(true);
                        revertAction();
                    }, variant: 'danger', isDisabled: pending }, t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Revert"], ["Revert"]))),
                    pending && React.createElement(Spinner, { size: 'sm' }))),
            React.createElement(Button, { key: 'cancel', onClick: cancelAction, variant: 'link' }, t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Cancel"], ["Cancel"])))),
        ], isOpen: true, onClose: cancelAction, title: t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Revert repository"], ["Revert repository"]))), titleIconVariant: 'warning', variant: 'small', "data-cy": 'modal_checkbox' },
        React.createElement(Trans, null, "Are you sure you want to revert this repository to the version below?"),
        React.createElement("br", null),
        React.createElement("b", null, version)));
};
function revert(_a, _b) {
    var repositoryName = _a.repositoryName, pulp_href = _a.pulp_href, number = _a.number;
    var addAlert = _b.addAlert, setState = _b.setState, query = _b.query;
    // the uuid in version href is the reposotory uuid
    var pulpId = parsePulpIDFromURL(pulp_href);
    return AnsibleRepositoryAPI.revert(pulpId, pulp_href)
        .then(function (_a) {
        var data = _a.data;
        addAlert(taskAlert(data.task, t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["Revert started for repository \"", "\"."], ["Revert started for repository \"", "\"."])), repositoryName)));
        setState({ revertModal: null });
        query();
    })
        .catch(handleHttpError(t(templateObject_5 || (templateObject_5 = __makeTemplateObject(["Failed to revert repository \"", "\" to version \"", "\""], ["Failed to revert repository \"", "\" to version \"", "\""])), repositoryName, number), function () { return setState({ revertModal: null }); }, addAlert));
}
export var ansibleRepositoryVersionRevertAction = Action({
    condition: canRevertAnsibleRepositoryVersion,
    title: t(templateObject_6 || (templateObject_6 = __makeTemplateObject(["Revert to this version"], ["Revert to this version"]))),
    modal: function (_a) {
        var addAlert = _a.addAlert, state = _a.state, setState = _a.setState, query = _a.query;
        return state.revertModal ? (React.createElement(RevertModal, { cancelAction: function () { return setState({ revertModal: null }); }, revertAction: function () {
                return revert(state.revertModal, { addAlert: addAlert, setState: setState, query: query });
            }, version: state.revertModal.number })) : null;
    },
    onClick: function (_a, _b) {
        var repositoryName = _a.repositoryName, number = _a.number, pulp_href = _a.pulp_href;
        var setState = _b.setState;
        return setState({ revertModal: { repositoryName: repositoryName, number: number, pulp_href: pulp_href } });
    },
    disabled: function (_a) {
        var isLatest = _a.isLatest;
        if (isLatest) {
            return t(templateObject_7 || (templateObject_7 = __makeTemplateObject(["Already the current version"], ["Already the current version"])));
        }
        return null;
    },
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
//# sourceMappingURL=ansible-repository-version-revert.js.map