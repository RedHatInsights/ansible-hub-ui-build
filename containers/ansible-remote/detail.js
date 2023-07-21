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
import { msg, t } from '@lingui/macro';
import React from 'react';
import { ansibleRemoteDeleteAction, ansibleRemoteDownloadCAAction, ansibleRemoteDownloadClientAction, ansibleRemoteDownloadRequirementsAction, ansibleRemoteEditAction, } from 'src/actions';
import { AnsibleRemoteAPI } from 'src/api';
import { PageWithTabs } from 'src/components';
import { Paths, formatPath } from 'src/paths';
import { canViewAnsibleRemotes } from 'src/permissions';
import { parsePulpIDFromURL } from 'src/utilities';
import { RemoteAccessTab } from './tab-access';
import { DetailsTab } from './tab-details';
var tabs = [
    { id: 'details', name: msg(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Details"], ["Details"]))) },
    { id: 'access', name: msg(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Access"], ["Access"]))) },
];
var AnsibleRemoteDetail = PageWithTabs({
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
    condition: canViewAnsibleRemotes,
    displayName: 'AnsibleRemoteDetail',
    errorTitle: msg(templateObject_5 || (templateObject_5 = __makeTemplateObject(["Remote could not be displayed."], ["Remote could not be displayed."]))),
    headerActions: [
        ansibleRemoteEditAction,
        ansibleRemoteDownloadRequirementsAction,
        ansibleRemoteDownloadClientAction,
        ansibleRemoteDownloadCAAction,
        ansibleRemoteDeleteAction,
    ],
    listUrl: formatPath(Paths.ansibleRemotes),
    query: function (_a) {
        var name = _a.name;
        return AnsibleRemoteAPI.list({ name: name })
            .then(function (_a) {
            var results = _a.data.results;
            return results[0];
        })
            .then(function (remote) {
            // using the list api, so an empty array is really a 404
            if (!remote) {
                return Promise.reject({ response: { status: 404 } });
            }
            return AnsibleRemoteAPI.myPermissions(parsePulpIDFromURL(remote.pulp_href))
                .then(function (_a) {
                var permissions = _a.data.permissions;
                return permissions;
            })
                .catch(function (e) {
                console.error(e);
                return [];
            })
                .then(function (my_permissions) { return (__assign(__assign({}, remote), { my_permissions: my_permissions })); });
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