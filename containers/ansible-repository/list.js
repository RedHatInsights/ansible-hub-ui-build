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
import { Constants } from 'src/constants';
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
var AnsibleRepositoryList = ListPage({
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
        {
            id: 'status',
            title: t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Status"], ["Status"]))),
            inputType: 'select',
            options: [
                {
                    id: Constants.NOTCERTIFIED,
                    title: t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["Rejected"], ["Rejected"]))),
                },
                {
                    id: Constants.NEEDSREVIEW,
                    title: t(templateObject_5 || (templateObject_5 = __makeTemplateObject(["Needs Review"], ["Needs Review"]))),
                },
                {
                    id: Constants.APPROVED,
                    title: t(templateObject_6 || (templateObject_6 = __makeTemplateObject(["Approved"], ["Approved"]))),
                },
            ],
        },
    ],
    headerActions: [ansibleRepositoryCreateAction],
    listItemActions: listItemActions,
    noDataButton: ansibleRepositoryCreateAction.button,
    noDataDescription: t(templateObject_7 || (templateObject_7 = __makeTemplateObject(["Repositories will appear once created."], ["Repositories will appear once created."]))),
    noDataTitle: t(templateObject_8 || (templateObject_8 = __makeTemplateObject(["No repositories yet"], ["No repositories yet"]))),
    query: function (_a) {
        var params = _a.params;
        var queryParams = __assign({}, params);
        if (queryParams['status']) {
            var status_1 = queryParams['status'];
            delete queryParams['status'];
            queryParams['pulp_label_select'] = "pipeline=".concat(status_1);
        }
        return AnsibleRepositoryAPI.list(queryParams);
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
            title: t(templateObject_9 || (templateObject_9 = __makeTemplateObject(["Repository name"], ["Repository name"]))),
            type: 'alpha',
            id: 'name',
        },
        {
            title: t(templateObject_10 || (templateObject_10 = __makeTemplateObject(["Sync status"], ["Sync status"]))),
            type: 'none',
            id: 'lastSyncStatus',
        },
        {
            title: t(templateObject_11 || (templateObject_11 = __makeTemplateObject(["Last synced"], ["Last synced"]))),
            type: 'none',
            id: 'lastSynced',
        },
        {
            title: t(templateObject_12 || (templateObject_12 = __makeTemplateObject(["Created date"], ["Created date"]))),
            type: 'numeric',
            id: 'pulp_created',
        },
    ],
    title: t(templateObject_13 || (templateObject_13 = __makeTemplateObject(["Repositories"], ["Repositories"]))),
});
export default AnsibleRepositoryList;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13;
//# sourceMappingURL=list.js.map