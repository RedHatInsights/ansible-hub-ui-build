var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { t } from '@lingui/macro';
import React from 'react';
import { ansibleRemoteDeleteAction, ansibleRemoteDownloadCAAction, ansibleRemoteDownloadClientAction, ansibleRemoteDownloadRequirementsAction, ansibleRemoteEditAction, } from 'src/actions';
import { AnsibleRemoteAPI } from 'src/api';
import { PageWithTabs } from 'src/components';
import { Paths, formatPath } from 'src/paths';
import { isLoggedIn } from 'src/permissions';
import { RemoteAccessTab } from './tab-access';
import { DetailsTab } from './tab-details';
var tabs = [
    { id: 'details', name: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Details"], ["Details"]))) },
    { id: 'access', name: t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Access"], ["Access"]))) },
];
export var AnsibleRemoteDetail = PageWithTabs({
    breadcrumbs: function (_a) {
        var name = _a.name, tab = _a.tab, group = _a.params.group;
        return [
            { url: formatPath(Paths.ansibleRemotes), name: t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Remotes"], ["Remotes"]))) },
            { url: formatPath(Paths.ansibleRemoteDetail, { name: name }), name: name },
            tab.id === 'access' && group
                ? {
                    url: formatPath(Paths.ansibleRepositoryDetail, { name: name }, { tab: tab.id }),
                    name: tab.name,
                }
                : null,
            tab.id === 'access' && group
                ? { name: t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["Group ", ""], ["Group ", ""])), group) }
                : { name: tab.name },
        ].filter(Boolean);
    },
    condition: isLoggedIn,
    displayName: 'AnsibleRemoteDetail',
    errorTitle: t(templateObject_5 || (templateObject_5 = __makeTemplateObject(["Remote could not be displayed."], ["Remote could not be displayed."]))),
    headerActions: [
        ansibleRemoteEditAction,
        ansibleRemoteDownloadRequirementsAction,
        ansibleRemoteDownloadClientAction,
        ansibleRemoteDownloadCAAction,
        ansibleRemoteDeleteAction,
    ],
    query: function (_a) {
        var name = _a.name;
        return AnsibleRemoteAPI.list({ name: name }).then(function (_a) {
            var results = _a.data.results;
            return results[0];
        });
    },
    renderTab: function (tab, item, actionContext) {
        return ({
            details: React.createElement(DetailsTab, { item: item, actionContext: actionContext }),
            access: React.createElement(RemoteAccessTab, { item: item, actionContext: actionContext }),
        }[tab]);
    },
    tabs: tabs,
    tabUpdateParams: function (p) {
        delete p.group;
        return p;
    },
});
export default AnsibleRemoteDetail;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
//# sourceMappingURL=detail.js.map