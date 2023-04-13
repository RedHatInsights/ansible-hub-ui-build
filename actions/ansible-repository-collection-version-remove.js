var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { Trans, t } from '@lingui/macro';
import { Text } from '@patternfly/react-core';
import React, { useState } from 'react';
import { AnsibleRepositoryAPI } from 'src/api';
import { DeleteModal } from 'src/components';
import { canEditAnsibleRepository } from 'src/permissions';
import { handleHttpError, parsePulpIDFromURL, taskAlert } from 'src/utilities';
import { Action } from './action';
var remove = function (_a, _b) {
    var _c = _a.collection, namespace = _c.namespace, name = _c.name, version = _c.version, collectionVersionHref = _a.collectionVersionHref, repositoryHref = _a.repositoryHref, repositoryName = _a.repositoryName;
    var addAlert = _b.addAlert, setState = _b.setState, query = _b.query;
    var pulpId = parsePulpIDFromURL(repositoryHref);
    return AnsibleRepositoryAPI.removeContent(pulpId, collectionVersionHref)
        .then(function (_a) {
        var data = _a.data;
        addAlert(taskAlert(data.task, t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Removal of ", ".", " v", " from repository \"", "\" started."], ["Removal of ", ".", " v", " from repository \"", "\" started."])), namespace, name, version, repositoryName)));
        setState({ removeCollectionVersionModal: null });
        query();
    })
        .catch(handleHttpError(t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Failed to remove ", ".", " v", " from repository \"", "\"."], ["Failed to remove ", ".", " v", " from repository \"", "\"."])), namespace, name, version, repositoryName), function () { return setState({ removeCollectionVersionModal: null }); }, addAlert));
};
var RemoveCollectionVersionModal = function (_a) {
    var name = _a.name, namespace = _a.namespace, repositoryName = _a.repositoryName, version = _a.version, closeAction = _a.closeAction, deleteAction = _a.deleteAction;
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
        }, isDisabled: pending, isRemove: true, title: t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Remove collection version?"], ["Remove collection version?"]))) },
        React.createElement(Text, null,
            React.createElement(Trans, null,
                "Are you sure you want to remove the collection version",
                ' ',
                React.createElement("b", null,
                    namespace,
                    ".",
                    name,
                    " v",
                    version),
                ' ',
                "from the ",
                React.createElement("b", null, repositoryName),
                " repository?"))));
};
export var ansibleRepositoryCollectionVersionRemoveAction = Action({
    condition: canEditAnsibleRepository,
    title: t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["Remove"], ["Remove"]))),
    modal: function (_a) {
        var addAlert = _a.addAlert, state = _a.state, setState = _a.setState, query = _a.query;
        return state.removeCollectionVersionModal ? (React.createElement(RemoveCollectionVersionModal, { closeAction: function () { return setState({ removeCollectionVersionModal: null }); }, deleteAction: function () {
                return remove(state.removeCollectionVersionModal, {
                    addAlert: addAlert,
                    setState: setState,
                    query: query,
                });
            }, name: state.removeCollectionVersionModal.collection.name, namespace: state.removeCollectionVersionModal.collection.namespace, repositoryName: state.removeCollectionVersionModal.repositoryName, version: state.removeCollectionVersionModal.collection.version })) : null;
    },
    onClick: function (_a, _b) {
        var _c = _a.collection_version, namespace = _c.namespace, name = _c.name, version = _c.version, collectionVersionHref = _c.pulp_href, _d = _a.repository, repositoryName = _d.name, repositoryHref = _d.pulp_href;
        var setState = _b.setState;
        return setState({
            removeCollectionVersionModal: {
                collection: { namespace: namespace, name: name, version: version },
                repositoryName: repositoryName,
                repositoryHref: repositoryHref,
                collectionVersionHref: collectionVersionHref,
            },
        });
    },
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=ansible-repository-collection-version-remove.js.map