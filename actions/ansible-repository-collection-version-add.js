var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { t } from '@lingui/macro';
import { Button, Modal, Radio } from '@patternfly/react-core';
import React, { useState } from 'react';
import { AnsibleRepositoryAPI, CollectionVersionAPI, } from 'src/api';
import { AlertList, DetailList, closeAlert } from 'src/components';
import { canEditAnsibleRepository } from 'src/permissions';
import { handleHttpError, parsePulpIDFromURL, taskAlert } from 'src/utilities';
import { Action } from './action';
var add = function (_a, _b, _c) {
    var repositoryHref = _a.repositoryHref, repositoryName = _a.repositoryName;
    var namespace = _b.namespace, name = _b.name, version = _b.version, collectionVersionHref = _b.pulp_href;
    var addAlert = _c.addAlert, setState = _c.setState, query = _c.query;
    var pulpId = parsePulpIDFromURL(repositoryHref);
    return AnsibleRepositoryAPI.addContent(pulpId, collectionVersionHref)
        .then(function (_a) {
        var data = _a.data;
        addAlert(taskAlert(data.task, t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Started adding ", ".", " v", " to repository \"", "\"."], ["Started adding ", ".", " v", " to repository \"", "\"."])), namespace, name, version, repositoryName)));
        setState(function (ms) { return (__assign(__assign({}, ms), { addCollectionVersionModal: null })); });
        query({});
    })
        .catch(handleHttpError(t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Failed to add ", ".", " v", " to repository \"", "\"."], ["Failed to add ", ".", " v", " to repository \"", "\"."])), namespace, name, version, repositoryName), function () { return setState(function (ms) { return (__assign(__assign({}, ms), { addCollectionVersionModal: null })); }); }, addAlert));
};
var AddCollectionVersionModal = function (_a) {
    var addAction = _a.addAction, closeAction = _a.closeAction;
    var _b = useState([]), alerts = _b[0], setAlerts = _b[1];
    var _c = useState(null), selected = _c[0], setSelected = _c[1];
    var addAlert = function (alert) {
        setAlerts(__spreadArray(__spreadArray([], alerts, true), [alert], false));
    };
    var query = function (_a) {
        var params = _a.params;
        var newParams = __assign({}, params);
        newParams.ordering = newParams.sort;
        delete newParams.sort;
        return CollectionVersionAPI.list(__assign({}, newParams)).then(function (_a) {
            var _b = _a.data, count = _b.meta.count, results = _b.data;
            return ({
                data: { count: count, results: results },
            });
        });
    };
    var _d = useState({}), modalState = _d[0], setModalState = _d[1];
    var renderTableRow = function (item, index) {
        var _a = item.collection_version, name = _a.name, namespace = _a.namespace, version = _a.version, description = _a.description;
        return (React.createElement("tr", { onClick: function () { return setSelected(item); }, key: index },
            React.createElement("td", null,
                React.createElement(Radio, { "aria-label": "".concat(namespace, ".").concat(name, " v").concat(version), id: "collection-".concat(index), isChecked: selected === item, name: "collection-".concat(index) })),
            React.createElement("td", null,
                namespace,
                ".",
                name,
                " v",
                version),
            React.createElement("td", null, description)));
    };
    return (React.createElement(Modal, { actions: [
            React.createElement(Button, { key: 'confirm', onClick: function () { return addAction(selected); }, variant: 'primary', isDisabled: !selected }, t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Select"], ["Select"])))),
            React.createElement(Button, { key: 'cancel', onClick: closeAction, variant: 'link' }, t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["Cancel"], ["Cancel"])))),
        ], isOpen: true, onClose: closeAction, title: t(templateObject_5 || (templateObject_5 = __makeTemplateObject(["Select a collection"], ["Select a collection"]))), variant: 'large' },
        React.createElement("section", { className: 'modal-body', "data-cy": 'modal-body' },
            React.createElement(DetailList, { actionContext: {
                    addAlert: addAlert,
                    state: modalState,
                    setState: setModalState,
                    query: query,
                    hasPermission: function () {
                        throw 'unused';
                    },
                }, defaultPageSize: 10, defaultSort: 'name', errorTitle: t(templateObject_6 || (templateObject_6 = __makeTemplateObject(["Collection versions could not be displayed."], ["Collection versions could not be displayed."]))), filterConfig: [
                    {
                        id: 'keywords',
                        title: t(templateObject_7 || (templateObject_7 = __makeTemplateObject(["Keywords"], ["Keywords"]))),
                    },
                    {
                        id: 'namespace',
                        title: t(templateObject_8 || (templateObject_8 = __makeTemplateObject(["Namespace"], ["Namespace"]))),
                    },
                ], noDataDescription: t(templateObject_9 || (templateObject_9 = __makeTemplateObject(["Collection versions will appear once a collection is uploaded."], ["Collection versions will appear once a collection is uploaded."]))), noDataTitle: t(templateObject_10 || (templateObject_10 = __makeTemplateObject(["No collection versions yet"], ["No collection versions yet"]))), query: query, renderTableRow: renderTableRow, sortHeaders: [
                    {
                        title: '',
                        type: 'none',
                        id: 'radio',
                    },
                    {
                        title: t(templateObject_11 || (templateObject_11 = __makeTemplateObject(["Collection"], ["Collection"]))),
                        type: 'none',
                        id: 'col1',
                    },
                    {
                        title: t(templateObject_12 || (templateObject_12 = __makeTemplateObject(["Description"], ["Description"]))),
                        type: 'none',
                        id: 'col2',
                    },
                ], title: t(templateObject_13 || (templateObject_13 = __makeTemplateObject(["Collection versions"], ["Collection versions"]))) })),
        React.createElement(AlertList, { alerts: alerts, closeAlert: function (i) { return closeAlert(i, { alerts: alerts, setAlerts: setAlerts }); } })));
};
export var ansibleRepositoryCollectionVersionAddAction = Action({
    condition: canEditAnsibleRepository,
    title: t(templateObject_14 || (templateObject_14 = __makeTemplateObject(["Add collection"], ["Add collection"]))),
    modal: function (_a) {
        var addAlert = _a.addAlert, state = _a.state, setState = _a.setState, query = _a.query;
        return state.addCollectionVersionModal ? (React.createElement(AddCollectionVersionModal, { addAction: function (collection) {
                return add(state.addCollectionVersionModal, collection.collection_version, {
                    addAlert: addAlert,
                    setState: setState,
                    query: query,
                });
            }, closeAction: function () {
                return setState(function (ms) { return (__assign(__assign({}, ms), { addCollectionVersionModal: null })); });
            } })) : null;
    },
    onClick: function (_item, _a) {
        var _b = _a.state.repository, repositoryName = _b.name, repositoryHref = _b.pulp_href, setState = _a.setState;
        return setState(function (ms) { return (__assign(__assign({}, ms), { addCollectionVersionModal: {
                repositoryHref: repositoryHref,
                repositoryName: repositoryName,
            } })); });
    },
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14;
//# sourceMappingURL=ansible-repository-collection-version-add.js.map