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
import { ansibleRepositoryCopyAction, ansibleRepositoryCreateAction, ansibleRepositoryDeleteAction, ansibleRepositoryEditAction, ansibleRepositorySyncAction, } from 'src/actions';
import { AnsibleRepositoryAPI } from 'src/api';
import { DateComponent, ListItemActions, ListPage } from 'src/components';
import { Paths, formatPath } from 'src/paths';
import { canViewAnsibleRepositories } from 'src/permissions';
import { lastSyncStatus, lastSynced, parsePulpIDFromURL } from 'src/utilities';
var listItemActions = [
    // Edit
    ansibleRepositoryEditAction,
    // Sync
    ansibleRepositorySyncAction,
    // Copy CLI configuration
    ansibleRepositoryCopyAction,
    // Delete
    ansibleRepositoryDeleteAction,
];
export var AnsibleRepositoryList = ListPage({
    condition: canViewAnsibleRepositories,
    defaultPageSize: 10,
    defaultSort: '-pulp_created',
    displayName: 'AnsibleRepositoryList',
    errorTitle: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Repositories could not be displayed."], ["Repositories could not be displayed."]))),
    extraState: {},
    filterConfig: [
        {
            id: 'name__icontains',
            title: t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Repository name"], ["Repository name"]))),
        },
    ],
    headerActions: [ansibleRepositoryCreateAction],
    listItemActions: listItemActions,
    noDataButton: ansibleRepositoryCreateAction.button,
    noDataDescription: t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Repositories will appear once created."], ["Repositories will appear once created."]))),
    noDataTitle: t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["No repositories yet"], ["No repositories yet"]))),
    query: function (_a) {
        var params = _a.params;
        return AnsibleRepositoryAPI.list(params);
    },
    renderTableRow: function (item, index, actionContext) {
        var name = item.name, pulp_created = item.pulp_created, pulp_href = item.pulp_href;
        var id = parsePulpIDFromURL(pulp_href);
        var kebabItems = listItemActions.map(function (action) {
            return action.dropdownItem(__assign(__assign({}, item), { id: id }), actionContext);
        });
        return (React.createElement("tr", { key: index },
            React.createElement("td", null,
                React.createElement(Link, { to: formatPath(Paths.ansibleRepositoryDetail, { name: name }) }, name)),
            React.createElement("td", null, lastSyncStatus(item) || '---'),
            React.createElement("td", null, lastSynced(item) || '---'),
            React.createElement("td", null,
                React.createElement(DateComponent, { date: pulp_created })),
            React.createElement(ListItemActions, { kebabItems: kebabItems })));
    },
    sortHeaders: [
        {
            title: t(templateObject_5 || (templateObject_5 = __makeTemplateObject(["Repository name"], ["Repository name"]))),
            type: 'alpha',
            id: 'name',
        },
        {
            title: t(templateObject_6 || (templateObject_6 = __makeTemplateObject(["Sync status"], ["Sync status"]))),
            type: 'none',
            id: 'lastSyncStatus',
        },
        {
            title: t(templateObject_7 || (templateObject_7 = __makeTemplateObject(["Last synced"], ["Last synced"]))),
            type: 'none',
            id: 'lastSynced',
        },
        {
            title: t(templateObject_8 || (templateObject_8 = __makeTemplateObject(["Created date"], ["Created date"]))),
            type: 'numeric',
            id: 'pulp_created',
        },
    ],
    title: t(templateObject_9 || (templateObject_9 = __makeTemplateObject(["Repositories"], ["Repositories"]))),
});
export default AnsibleRepositoryList;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9;
//# sourceMappingURL=list.js.map