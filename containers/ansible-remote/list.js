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
import { t } from '@lingui/macro';
import React from 'react';
import { Link } from 'react-router-dom';
import { ansibleRemoteCreateAction, ansibleRemoteDeleteAction, ansibleRemoteDownloadCAAction, ansibleRemoteDownloadClientAction, ansibleRemoteDownloadRequirementsAction, ansibleRemoteEditAction, } from 'src/actions';
import { AnsibleRemoteAPI } from 'src/api';
import { CopyURL, ListItemActions, ListPage } from 'src/components';
import { Paths, formatPath } from 'src/paths';
import { canViewAnsibleRemotes } from 'src/permissions';
import { parsePulpIDFromURL } from 'src/utilities';
var listItemActions = [
    // Edit
    ansibleRemoteEditAction,
    // Download requirements.yaml
    ansibleRemoteDownloadRequirementsAction,
    // Download client certificate
    ansibleRemoteDownloadClientAction,
    // Download CA certificate
    ansibleRemoteDownloadCAAction,
    // Delete
    ansibleRemoteDeleteAction,
];
export var AnsibleRemoteList = ListPage({
    condition: canViewAnsibleRemotes,
    defaultPageSize: 10,
    defaultSort: '-pulp_created',
    displayName: 'AnsibleRemoteList',
    errorTitle: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Remotes could not be displayed."], ["Remotes could not be displayed."]))),
    extraState: {},
    filterConfig: [
        {
            id: 'name__icontains',
            title: t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Remote name"], ["Remote name"]))),
        },
    ],
    headerActions: [ansibleRemoteCreateAction],
    listItemActions: listItemActions,
    noDataButton: ansibleRemoteCreateAction.button,
    noDataDescription: t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Remotes will appear once created."], ["Remotes will appear once created."]))),
    noDataTitle: t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["No remotes yet"], ["No remotes yet"]))),
    query: function (_a) {
        var params = _a.params;
        return AnsibleRemoteAPI.list(params);
    },
    renderTableRow: function (item, index, actionContext) {
        var name = item.name, pulp_href = item.pulp_href, url = item.url;
        var id = parsePulpIDFromURL(pulp_href);
        var kebabItems = listItemActions.map(function (action) {
            return action.dropdownItem(__assign(__assign({}, item), { id: id }), actionContext);
        });
        return (React.createElement("tr", { key: index },
            React.createElement("td", null,
                React.createElement(Link, { to: formatPath(Paths.ansibleRemoteDetail, { name: name }) }, name)),
            React.createElement("td", null,
                React.createElement(CopyURL, { url: url })),
            React.createElement(ListItemActions, { kebabItems: kebabItems })));
    },
    sortHeaders: [
        {
            title: t(templateObject_5 || (templateObject_5 = __makeTemplateObject(["Remote name"], ["Remote name"]))),
            type: 'alpha',
            id: 'name',
        },
        {
            title: t(templateObject_6 || (templateObject_6 = __makeTemplateObject(["URL"], ["URL"]))),
            type: 'alpha',
            id: 'url',
        },
    ],
    title: t(templateObject_7 || (templateObject_7 = __makeTemplateObject(["Remotes"], ["Remotes"]))),
});
export default AnsibleRemoteList;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
//# sourceMappingURL=list.js.map