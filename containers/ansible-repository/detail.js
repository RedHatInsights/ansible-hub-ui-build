var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { Trans, t } from '@lingui/macro';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ansibleRepositoryCopyAction, ansibleRepositoryDeleteAction, ansibleRepositoryEditAction, ansibleRepositorySyncAction, } from 'src/actions';
import { AnsibleRemoteAPI, AnsibleRepositoryAPI, CollectionVersionAPI, } from 'src/api';
import { Details, LazyDistributions, PageWithTabs, PulpLabels, } from 'src/components';
import { Paths, formatPath } from 'src/paths';
import { isLoggedIn } from 'src/permissions';
import { handleHttpError, lastSyncStatus, lastSynced, parsePulpIDFromURL, } from 'src/utilities';
var wip = '🚧 ';
var tabs = [
    { id: 'details', name: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Details"], ["Details"]))) },
    { id: 'access', name: wip + t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Access"], ["Access"]))) },
    { id: 'collection-versions', name: wip + t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Collection versions"], ["Collection versions"]))) },
    { id: 'repository-versions', name: wip + t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["Versions"], ["Versions"]))) },
];
var DetailsTab = function (_a) {
    var _b;
    var item = _a.item;
    var _c = useState(null), remote = _c[0], setRemote = _c[1];
    useEffect(function () {
        var pk = item.remote && parsePulpIDFromURL(item.remote);
        if (pk) {
            AnsibleRemoteAPI.get(pk).then(function (_a) {
                var data = _a.data;
                return setRemote(data);
            });
        }
        else {
            setRemote(null);
        }
    }, [item.remote]);
    return (React.createElement(Details, { fields: [
            { label: t(templateObject_5 || (templateObject_5 = __makeTemplateObject(["Repository name"], ["Repository name"]))), value: item === null || item === void 0 ? void 0 : item.name },
            { label: t(templateObject_6 || (templateObject_6 = __makeTemplateObject(["Description"], ["Description"]))), value: (item === null || item === void 0 ? void 0 : item.description) || t(templateObject_7 || (templateObject_7 = __makeTemplateObject(["None"], ["None"]))) },
            {
                label: t(templateObject_8 || (templateObject_8 = __makeTemplateObject(["Retained version count"], ["Retained version count"]))),
                value: (_b = item === null || item === void 0 ? void 0 : item.retain_repo_versions) !== null && _b !== void 0 ? _b : t(templateObject_9 || (templateObject_9 = __makeTemplateObject(["None"], ["None"]))),
            },
            {
                label: t(templateObject_10 || (templateObject_10 = __makeTemplateObject(["Distribution"], ["Distribution"]))),
                value: React.createElement(LazyDistributions, { repositoryHref: item.pulp_href }),
            },
            {
                label: t(templateObject_11 || (templateObject_11 = __makeTemplateObject(["Labels"], ["Labels"]))),
                value: React.createElement(PulpLabels, { labels: item === null || item === void 0 ? void 0 : item.pulp_labels }),
            },
            {
                label: t(templateObject_12 || (templateObject_12 = __makeTemplateObject(["Remote"], ["Remote"]))),
                value: remote ? (React.createElement(Link, { to: formatPath(Paths.ansibleRemoteDetail, { name: remote.name }) }, remote.name)) : (t(templateObject_13 || (templateObject_13 = __makeTemplateObject(["None"], ["None"])))),
            },
        ] }));
};
var AccessTab = function (_a) {
    var item = _a.item;
    return React.createElement(Details, { item: item });
};
var CollectionVersionsTab = function (_a) {
    var item = _a.item, addAlert = _a.actionContext.addAlert;
    var _b = useState([]), versions = _b[0], setVersions = _b[1];
    useEffect(function () {
        CollectionVersionAPI.list({ repository: item.name })
            .then(function (_a) {
            var data = _a.data.data;
            return setVersions(data);
        })
            .catch(handleHttpError(t(templateObject_14 || (templateObject_14 = __makeTemplateObject(["Failed to load collection versions"], ["Failed to load collection versions"]))), function () { return setVersions([]); }, addAlert));
    }, []);
    return React.createElement(Details, { item: versions });
};
var RepositoryVersionsTab = function (_a) {
    var item = _a.item, addAlert = _a.actionContext.addAlert;
    var _b = useState([]), versions = _b[0], setVersions = _b[1];
    useEffect(function () {
        var pulpId = parsePulpIDFromURL(item.pulp_href);
        AnsibleRepositoryAPI.listVersions(pulpId)
            .then(function (_a) {
            var results = _a.data.results;
            return setVersions(results);
        })
            .catch(handleHttpError(t(templateObject_15 || (templateObject_15 = __makeTemplateObject(["Failed to load repository versions"], ["Failed to load repository versions"]))), function () { return setVersions([]); }, addAlert));
    }, []);
    return React.createElement(Details, { item: versions });
};
export var AnsibleRepositoryDetail = PageWithTabs({
    breadcrumbs: function (_a) {
        var name = _a.name, tab = _a.tab;
        return [
            { url: formatPath(Paths.ansibleRepositories), name: t(templateObject_16 || (templateObject_16 = __makeTemplateObject(["Repositories"], ["Repositories"]))) },
            { url: formatPath(Paths.ansibleRepositoryDetail, { name: name }), name: name },
            { name: tab.name },
        ];
    },
    condition: isLoggedIn,
    displayName: 'AnsibleRepositoryDetail',
    errorTitle: t(templateObject_17 || (templateObject_17 = __makeTemplateObject(["Repository could not be displayed."], ["Repository could not be displayed."]))),
    headerActions: [
        ansibleRepositoryEditAction,
        ansibleRepositorySyncAction,
        ansibleRepositoryCopyAction,
        ansibleRepositoryDeleteAction,
    ],
    headerDetails: function (item) { return (React.createElement(React.Fragment, null, (item === null || item === void 0 ? void 0 : item.last_sync_task) && (React.createElement("p", { className: 'hub-m-truncated' },
        React.createElement(Trans, null,
            "Last updated from registry ",
            lastSynced(item)),
        ' ',
        lastSyncStatus(item))))); },
    query: function (_a) {
        var name = _a.name;
        return AnsibleRepositoryAPI.list({ name: name }).then(function (_a) {
            var results = _a.data.results;
            return results[0];
        });
    },
    renderTab: function (tab, item, actionContext) {
        return ({
            details: React.createElement(DetailsTab, { item: item, actionContext: actionContext }),
            access: React.createElement(AccessTab, { item: item, actionContext: actionContext }),
            'collection-versions': (React.createElement(CollectionVersionsTab, { item: item, actionContext: actionContext })),
            'repository-versions': (React.createElement(RepositoryVersionsTab, { item: item, actionContext: actionContext })),
        }[tab]);
    },
    tabs: tabs,
});
export default AnsibleRepositoryDetail;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17;
//# sourceMappingURL=detail.js.map