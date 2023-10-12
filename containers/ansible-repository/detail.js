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
import { Trans, msg, t } from '@lingui/macro';
import React from 'react';
import { ansibleRepositoryCopyAction, ansibleRepositoryDeleteAction, ansibleRepositoryEditAction, ansibleRepositorySyncAction, } from 'src/actions';
import { AnsibleRemoteAPI, AnsibleRepositoryAPI, } from 'src/api';
import { PageWithTabs } from 'src/components';
import { Paths, formatPath } from 'src/paths';
import { canViewAnsibleRepositories } from 'src/permissions';
import { parsePulpIDFromURL, repositoryBasePath } from 'src/utilities';
import { lastSyncStatus, lastSynced } from 'src/utilities';
import { RepositoryAccessTab } from './tab-access';
import { CollectionVersionsTab } from './tab-collection-versions';
import { DetailsTab } from './tab-details';
import { RepositoryVersionsTab } from './tab-repository-versions';
var tabs = [
    { id: 'details', name: msg(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Details"], ["Details"]))) },
    { id: 'access', name: msg(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Access"], ["Access"]))) },
    { id: 'collection-versions', name: msg(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Collection versions"], ["Collection versions"]))) },
    { id: 'repository-versions', name: msg(templateObject_4 || (templateObject_4 = __makeTemplateObject(["Versions"], ["Versions"]))) },
];
var AnsibleRepositoryDetail = PageWithTabs({
    breadcrumbs: function (_a) {
        var name = _a.name, tab = _a.tab, _b = _a.params, repositoryVersion = _b.repositoryVersion, user = _b.user, group = _b.group;
        return [
            { url: formatPath(Paths.ansibleRepositories), name: t(templateObject_5 || (templateObject_5 = __makeTemplateObject(["Repositories"], ["Repositories"]))) },
            { url: formatPath(Paths.ansibleRepositoryDetail, { name: name }), name: name },
            (tab.id === 'access' && (group || user)) ||
                (tab.id === 'repository-versions' && repositoryVersion)
                ? {
                    url: formatPath(Paths.ansibleRepositoryDetail, { name: name }, { tab: tab.id }),
                    name: tab.name,
                }
                : null,
            tab.id === 'access' && group ? { name: t(templateObject_6 || (templateObject_6 = __makeTemplateObject(["Group ", ""], ["Group ", ""])), group) } : null,
            tab.id === 'access' && user ? { name: t(templateObject_7 || (templateObject_7 = __makeTemplateObject(["User ", ""], ["User ", ""])), user) } : null,
            tab.id === 'repository-versions' && repositoryVersion
                ? { name: t(templateObject_8 || (templateObject_8 = __makeTemplateObject(["Version ", ""], ["Version ", ""])), repositoryVersion) }
                : null,
            (tab.id === 'access' && !user && !group) ||
                (tab.id === 'repository-versions' && !repositoryVersion)
                ? { name: tab.name }
                : null,
        ].filter(Boolean);
    },
    condition: canViewAnsibleRepositories,
    displayName: 'AnsibleRepositoryDetail',
    errorTitle: msg(templateObject_9 || (templateObject_9 = __makeTemplateObject(["Repository could not be displayed."], ["Repository could not be displayed."]))),
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
    listUrl: formatPath(Paths.ansibleRepositories),
    query: function (_a) {
        var name = _a.name;
        return AnsibleRepositoryAPI.list({ name: name, page_size: 1 })
            .then(function (_a) {
            var results = _a.data.results;
            return results[0];
        })
            .then(function (repository) {
            // using the list api, so an empty array is really a 404
            if (!repository) {
                return Promise.reject({ response: { status: 404 } });
            }
            var err = function (val) { return function (e) {
                console.error(e);
                return val;
            }; };
            return Promise.all([
                repositoryBasePath(repository.name, repository.pulp_href).catch(err(null)),
                AnsibleRepositoryAPI.myPermissions(parsePulpIDFromURL(repository.pulp_href))
                    .then(function (_a) {
                    var permissions = _a.data.permissions;
                    return permissions;
                })
                    .catch(err([])),
                repository.remote
                    ? AnsibleRemoteAPI.get(parsePulpIDFromURL(repository.remote))
                        .then(function (_a) {
                        var data = _a.data;
                        return data;
                    })
                        .catch(function () { return null; })
                    : null,
            ]).then(function (_a) {
                var distroBasePath = _a[0], my_permissions = _a[1], remote = _a[2];
                return (__assign(__assign({}, repository), { distroBasePath: distroBasePath, my_permissions: my_permissions, remote: remote }));
            });
        });
    },
    renderTab: function (tab, item, actionContext) {
        return ({
            details: React.createElement(DetailsTab, { item: item, actionContext: actionContext }),
            access: React.createElement(RepositoryAccessTab, { item: item, actionContext: actionContext }),
            'collection-versions': (React.createElement(CollectionVersionsTab, { item: item, actionContext: actionContext })),
            'repository-versions': (React.createElement(RepositoryVersionsTab, { item: item, actionContext: actionContext })),
        })[tab];
    },
    tabs: tabs,
    tabUpdateParams: function (p) {
        delete p.repositoryVersion;
        delete p.group;
        delete p.user;
        return p;
    },
});
export default AnsibleRepositoryDetail;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9;
//# sourceMappingURL=detail.js.map