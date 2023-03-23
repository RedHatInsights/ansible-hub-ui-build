var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { Trans, t } from '@lingui/macro';
import React from 'react';
import { ansibleRepositoryCopyAction, ansibleRepositoryDeleteAction, ansibleRepositoryEditAction, ansibleRepositorySyncAction, } from 'src/actions';
import { AnsibleRepositoryAPI } from 'src/api';
import { PageWithTabs } from 'src/components';
import { Paths, formatPath } from 'src/paths';
import { isLoggedIn } from 'src/permissions';
import { lastSyncStatus, lastSynced } from 'src/utilities';
import { AccessTab } from './tab-access';
import { CollectionVersionsTab } from './tab-collection-versions';
import { DetailsTab } from './tab-details';
import { RepositoryVersionsTab } from './tab-repository-versions';
var wip = '🚧 ';
var tabs = [
    { id: 'details', name: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Details"], ["Details"]))) },
    { id: 'access', name: wip + t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Access"], ["Access"]))) },
    { id: 'collection-versions', name: wip + t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Collection versions"], ["Collection versions"]))) },
    { id: 'repository-versions', name: t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["Versions"], ["Versions"]))) },
];
export var AnsibleRepositoryDetail = PageWithTabs({
    breadcrumbs: function (_a) {
        var name = _a.name, tab = _a.tab, repositoryVersion = _a.params.repositoryVersion;
        return [
            { url: formatPath(Paths.ansibleRepositories), name: t(templateObject_5 || (templateObject_5 = __makeTemplateObject(["Repositories"], ["Repositories"]))) },
            { url: formatPath(Paths.ansibleRepositoryDetail, { name: name }), name: name },
            tab.id === 'repository-versions' && repositoryVersion
                ? {
                    url: formatPath(Paths.ansibleRepositoryDetail, { name: name }, { tab: tab.id }),
                    name: tab.name,
                }
                : null,
            tab.id === 'repository-versions' && repositoryVersion
                ? { name: t(templateObject_6 || (templateObject_6 = __makeTemplateObject(["Version ", ""], ["Version ", ""])), repositoryVersion) }
                : { name: tab.name },
        ].filter(Boolean);
    },
    condition: isLoggedIn,
    displayName: 'AnsibleRepositoryDetail',
    errorTitle: t(templateObject_7 || (templateObject_7 = __makeTemplateObject(["Repository could not be displayed."], ["Repository could not be displayed."]))),
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
    tabUpdateParams: function (p) {
        delete p.repositoryVersion;
        return p;
    },
});
export default AnsibleRepositoryDetail;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
//# sourceMappingURL=detail.js.map