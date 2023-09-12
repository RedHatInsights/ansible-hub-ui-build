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
import { msg, t } from '@lingui/macro';
import React from 'react';
import { Link } from 'react-router-dom';
import { ansibleRepositoryCopyAction, ansibleRepositoryCreateAction, ansibleRepositoryDeleteAction, ansibleRepositoryEditAction, ansibleRepositorySyncAction, } from 'src/actions';
import { AnsibleRemoteAPI, AnsibleRepositoryAPI, } from 'src/api';
import { DateComponent, ListItemActions, ListPage, PulpLabels, } from 'src/components';
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
var typeaheadQuery = function (_a) {
    var inputText = _a.inputText, selectedFilter = _a.selectedFilter, setState = _a.setState;
    if (selectedFilter !== 'remote') {
        return;
    }
    return AnsibleRemoteAPI.list({ name__icontains: inputText })
        .then(function (_a) {
        var results = _a.data.results;
        return results.map(function (_a) {
            var name = _a.name, pulp_href = _a.pulp_href;
            return ({ id: pulp_href, title: name });
        });
    })
        .then(function (remotes) { return setState({ remotes: remotes }); });
};
var AnsibleRepositoryList = ListPage({
    condition: canViewAnsibleRepositories,
    defaultPageSize: 10,
    defaultSort: '-pulp_created',
    displayName: 'AnsibleRepositoryList',
    errorTitle: msg(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Repositories could not be displayed."], ["Repositories could not be displayed."]))),
    filterConfig: function (_a) {
        var remotes = _a.state.remotes;
        return [
            {
                id: 'name__icontains',
                title: t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Repository name"], ["Repository name"]))),
            },
            {
                id: 'pulp_label_select',
                title: t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Pipeline"], ["Pipeline"]))),
                inputType: 'select',
                options: [
                    {
                        id: 'pipeline=rejected',
                        title: t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["Rejected"], ["Rejected"]))),
                    },
                    {
                        id: 'pipeline=staging',
                        title: t(templateObject_5 || (templateObject_5 = __makeTemplateObject(["Needs Review"], ["Needs Review"]))),
                    },
                    {
                        id: 'pipeline=approved',
                        title: t(templateObject_6 || (templateObject_6 = __makeTemplateObject(["Approved"], ["Approved"]))),
                    },
                ],
            },
            {
                id: 'remote',
                title: t(templateObject_7 || (templateObject_7 = __makeTemplateObject(["Remote"], ["Remote"]))),
                inputType: 'typeahead',
                options: __spreadArray([
                    {
                        id: 'null',
                        title: t(templateObject_8 || (templateObject_8 = __makeTemplateObject(["None"], ["None"]))),
                    }
                ], (remotes || []), true),
            },
        ];
    },
    headerActions: [ansibleRepositoryCreateAction],
    listItemActions: listItemActions,
    noDataButton: ansibleRepositoryCreateAction.button,
    noDataDescription: msg(templateObject_9 || (templateObject_9 = __makeTemplateObject(["Repositories will appear once created."], ["Repositories will appear once created."]))),
    noDataTitle: msg(templateObject_10 || (templateObject_10 = __makeTemplateObject(["No repositories yet"], ["No repositories yet"]))),
    query: function (_a) {
        var params = _a.params;
        return AnsibleRepositoryAPI.list(params);
    },
    typeaheadQuery: typeaheadQuery,
    renderTableRow: function (item, index, actionContext) {
        var last_sync_task = item.last_sync_task, name = item.name, isPrivate = item.private, pulp_created = item.pulp_created, pulp_href = item.pulp_href, pulp_labels = item.pulp_labels, remote = item.remote;
        var id = parsePulpIDFromURL(pulp_href);
        var kebabItems = listItemActions.map(function (action) {
            return action.dropdownItem(__assign(__assign({}, item), { id: id }), actionContext);
        });
        return (React.createElement("tr", { key: index },
            React.createElement("td", null,
                React.createElement(Link, { to: formatPath(Paths.ansibleRepositoryDetail, { name: name }) }, name)),
            React.createElement("td", null,
                React.createElement(PulpLabels, { labels: pulp_labels })),
            React.createElement("td", null, isPrivate ? t(templateObject_11 || (templateObject_11 = __makeTemplateObject(["Yes"], ["Yes"]))) : t(templateObject_12 || (templateObject_12 = __makeTemplateObject(["No"], ["No"])))),
            React.createElement("td", null, !remote ? (t(templateObject_13 || (templateObject_13 = __makeTemplateObject(["no remote"], ["no remote"])))) : !last_sync_task ? (t(templateObject_14 || (templateObject_14 = __makeTemplateObject(["never synced"], ["never synced"])))) : (React.createElement(React.Fragment, null,
                lastSyncStatus(item),
                " ",
                lastSynced(item)))),
            React.createElement("td", null,
                React.createElement(DateComponent, { date: pulp_created })),
            React.createElement(ListItemActions, { kebabItems: kebabItems })));
    },
    sortHeaders: [
        {
            title: msg(templateObject_15 || (templateObject_15 = __makeTemplateObject(["Repository name"], ["Repository name"]))),
            type: 'alpha',
            id: 'name',
        },
        {
            title: msg(templateObject_16 || (templateObject_16 = __makeTemplateObject(["Labels"], ["Labels"]))),
            type: 'none',
            id: 'pulp_labels',
        },
        {
            title: msg(templateObject_17 || (templateObject_17 = __makeTemplateObject(["Private"], ["Private"]))),
            type: 'none',
            id: 'private',
        },
        {
            title: msg(templateObject_18 || (templateObject_18 = __makeTemplateObject(["Sync status"], ["Sync status"]))),
            type: 'none',
            id: 'last_sync_task',
        },
        {
            title: msg(templateObject_19 || (templateObject_19 = __makeTemplateObject(["Created date"], ["Created date"]))),
            type: 'numeric',
            id: 'pulp_created',
        },
    ],
    title: msg(templateObject_20 || (templateObject_20 = __makeTemplateObject(["Repositories"], ["Repositories"]))),
});
export default AnsibleRepositoryList;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18, templateObject_19, templateObject_20;
//# sourceMappingURL=list.js.map