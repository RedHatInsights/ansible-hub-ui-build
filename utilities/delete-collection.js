var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { Trans, t } from '@lingui/macro';
import { DropdownItem, Tooltip } from '@patternfly/react-core';
import React from 'react';
import { CollectionAPI, CollectionVersionAPI, } from 'src/api';
import { errorMessage } from './fail-alerts';
import { parsePulpIDFromURL } from './parse-pulp-id';
import { repositoryRemoveCollection } from './repository-remove-collection';
import { waitForTask } from './wait-for-task';
var DeleteCollectionUtils = /** @class */ (function () {
    function DeleteCollectionUtils() {
    }
    DeleteCollectionUtils.getUsedbyDependencies = function (collection) {
        var _a = collection.collection_version, name = _a.name, namespace = _a.namespace;
        return CollectionVersionAPI.getUsedDependenciesByCollection(namespace, name)
            .then(function (_a) {
            var data = _a.data;
            return data.data.length === 0;
        })
            .catch(function (err) {
            var _a = err.response, status = _a.status, statusText = _a.statusText;
            return Promise.reject({
                title: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Dependencies for collection \"", "\" could not be displayed."], ["Dependencies for collection \"", "\" could not be displayed."])), name),
                variant: 'danger',
                description: errorMessage(status, statusText),
            });
        });
    };
    DeleteCollectionUtils.deleteMenuOption = function (_a) {
        var canDeleteCollection = _a.canDeleteCollection, noDependencies = _a.noDependencies, onClick = _a.onClick, deleteAll = _a.deleteAll, display_repositories = _a.display_repositories;
        if (!canDeleteCollection) {
            return null;
        }
        if (!display_repositories && !deleteAll) {
            // cant display delete from repository when repositories are turned off
            return null;
        }
        var caption = deleteAll
            ? t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Delete entire collection from system"], ["Delete entire collection from system"]))) : t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Delete collection from repository"], ["Delete collection from repository"])));
        var key = deleteAll ? 'delete-collection' : 'remove-collection';
        if (noDependencies === false) {
            return (React.createElement(Tooltip, { key: key, position: 'left', content: React.createElement(Trans, null,
                    "Cannot delete until collections ",
                    React.createElement("br", null),
                    "that depend on this collection ",
                    React.createElement("br", null),
                    "have been deleted.") },
                React.createElement(DropdownItem, { isDisabled: true }, caption)));
        }
        return (React.createElement(DropdownItem, { "data-cy": key, key: key, onClick: onClick }, caption));
    };
    DeleteCollectionUtils.tryOpenDeleteModalWithConfirm = function (_a) {
        var addAlert = _a.addAlert, setState = _a.setState, collection = _a.collection, deleteAll = _a.deleteAll;
        DeleteCollectionUtils.getUsedbyDependencies(collection)
            .then(function (noDependencies) {
            return DeleteCollectionUtils.openDeleteModalWithConfirm({
                addAlert: addAlert,
                setState: setState,
                noDependencies: noDependencies,
                collection: collection,
                deleteAll: deleteAll,
            });
        })
            .catch(function (alert) { return addAlert(alert); });
    };
    DeleteCollectionUtils.openDeleteModalWithConfirm = function (_a) {
        var addAlert = _a.addAlert, setState = _a.setState, noDependencies = _a.noDependencies, collection = _a.collection, deleteAll = _a.deleteAll;
        if (noDependencies) {
            setState({
                deleteCollection: collection,
                confirmDelete: false,
                deleteAll: deleteAll,
            });
        }
        else {
            addAlert({
                title: (React.createElement(Trans, null,
                    "Cannot delete until collections ",
                    React.createElement("br", null),
                    "that depend on this collection ",
                    React.createElement("br", null),
                    "have been deleted.")),
                variant: 'warning',
            });
        }
    };
    DeleteCollectionUtils.deleteCollection = function (_a) {
        var collection = _a.collection, setState = _a.setState, load = _a.load, redirect = _a.redirect, addAlert = _a.addAlert, deleteFromRepo = _a.deleteFromRepo;
        var promise = null;
        if (deleteFromRepo) {
            promise = repositoryRemoveCollection(deleteFromRepo, collection.collection_version.pulp_href);
        }
        else {
            promise = CollectionAPI.deleteCollection(collection);
        }
        promise
            .then(function (res) {
            if (!deleteFromRepo) {
                var taskId = parsePulpIDFromURL(res.data.task);
                return waitForTask(taskId);
            }
        })
            .then(function () {
            addAlert({
                variant: 'success',
                title: (React.createElement(Trans, null,
                    "Collection \"",
                    collection.collection_version.name,
                    "\" has been successfully deleted.")),
            });
            if (redirect) {
                setState({ redirect: redirect });
            }
            if (load) {
                load();
            }
        })
            .catch(function (err) {
            var _a = err.response, status = _a.status, statusText = _a.statusText;
            addAlert({
                variant: 'danger',
                title: t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["Collection \"", "\" could not be deleted."], ["Collection \"", "\" could not be deleted."])), collection.collection_version.name),
                description: errorMessage(status, statusText),
            });
        })
            .finally(function () {
            return setState({
                deleteCollection: null,
                isDeletionPending: false,
            });
        });
    };
    return DeleteCollectionUtils;
}());
export { DeleteCollectionUtils };
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=delete-collection.js.map