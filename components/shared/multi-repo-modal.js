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
import { Button, Modal, Spinner } from '@patternfly/react-core';
import React, { useEffect, useState } from 'react';
import { CollectionVersionAPI, } from 'src/api';
import { AlertList, MultipleRepoSelector, closeAlert, } from 'src/components';
export var MultiRepoModal = function (_a) {
    var closeAction = _a.closeAction, collection_version = _a.collectionVersion.collection_version, pipeline = _a.pipeline, submitAction = _a.submitAction;
    var _b = useState([]), alerts = _b[0], setAlerts = _b[1];
    var _c = useState([]), disabledRepos = _c[0], setDisabledRepos = _c[1];
    var _d = useState(false), loading = _d[0], setLoading = _d[1];
    var _e = useState([]), selectedRepos = _e[0], setSelectedRepos = _e[1];
    function addAlert(alert) {
        setAlerts(function (prevAlerts) { return __spreadArray(__spreadArray([], prevAlerts, true), [alert], false); });
    }
    function queryDisabled() {
        // get repository list for selected collection
        // TODO: handle more pages
        var name = collection_version.name, namespace = collection_version.namespace, version = collection_version.version;
        CollectionVersionAPI.list(__assign({ namespace: namespace, name: name, version: version, page: 1, page_size: 100 }, (pipeline ? { repository_label: pipeline } : {})))
            .then(function (_a) {
            var _b = _a.data, data = _b.data, count = _b.meta.count;
            setDisabledRepos(data.map(function (_a) {
                var name = _a.repository.name;
                return name;
            }));
            if (count > 100) {
                addAlert({
                    variant: 'warning',
                    title: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["The collection exists in too many repositories. Some repositories may not be disabled and preselected correctly."], ["The collection exists in too many repositories. Some repositories may not be disabled and preselected correctly."]))),
                });
            }
        })
            .catch(function () {
            return addAlert({
                variant: 'danger',
                title: t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Failed to query repositories."], ["Failed to query repositories."]))),
            });
        });
    }
    useEffect(function () {
        // check for approval repos that are already in collection and select them in UI
        queryDisabled();
    }, []);
    return (React.createElement(Modal, { actions: [
            React.createElement(Button, { key: 'confirm', onClick: function () {
                    return submitAction({
                        addAlert: addAlert,
                        selectedRepos: selectedRepos,
                        setLoading: setLoading,
                    });
                }, variant: 'primary', isDisabled: !selectedRepos.length || loading }, t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Select"], ["Select"])))),
            React.createElement(Button, { key: 'cancel', onClick: closeAction, variant: 'link', isDisabled: loading }, t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["Cancel"], ["Cancel"])))),
        ], isOpen: true, onClose: closeAction, title: t(templateObject_5 || (templateObject_5 = __makeTemplateObject(["Select repositories"], ["Select repositories"]))), variant: 'large' },
        React.createElement("section", { className: 'modal-body', "data-cy": 'modal-body' },
            React.createElement(MultipleRepoSelector, { addAlert: addAlert, disabledRepos: disabledRepos, params: pipeline ? { pulp_label_select: pipeline } : null, selectedRepos: selectedRepos, setSelectedRepos: setSelectedRepos }),
            loading && React.createElement(Spinner, { size: 'lg' })),
        React.createElement(AlertList, { alerts: alerts, closeAlert: function (i) { return closeAlert(i, { alerts: alerts, setAlerts: setAlerts }); } })));
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
//# sourceMappingURL=multi-repo-modal.js.map