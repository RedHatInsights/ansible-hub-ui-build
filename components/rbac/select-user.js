var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { Trans, t } from '@lingui/macro';
import { Flex, FlexItem, Label } from '@patternfly/react-core';
import React, { useEffect, useState } from 'react';
import { UserAPI } from 'src/api';
import { AppliedFilters, CompoundFilter, EmptyStateFilter, EmptyStateNoData, LoadingPageSpinner, Pagination, RadioRow, RoleListTable, } from 'src/components';
import { filterIsSet } from 'src/utilities';
export var SelectUser = function (_a) {
    var assignedUsers = _a.assignedUsers, selectedUser = _a.selectedUser, updateUser = _a.updateUser;
    var _b = useState(''), inputText = _b[0], setInputText = _b[1];
    var _c = useState([]), users = _c[0], setUsers = _c[1];
    var _d = useState(0), usersCount = _d[0], setUsersCount = _d[1];
    var _e = useState(true), loading = _e[0], setLoading = _e[1];
    var _f = useState({
        page: 1,
        page_size: 10,
    }), localParams = _f[0], setLocalParams = _f[1];
    useEffect(function () {
        queryUsers();
    }, [localParams]);
    var queryUsers = function () {
        setLoading(true);
        UserAPI.list(localParams).then(function (_a) {
            var data = _a.data;
            setUsers(data.data);
            setUsersCount(data.meta.count);
            setLoading(false);
        });
    };
    if (loading) {
        return (React.createElement("div", { className: 'hub-custom-wizard-layout hub-loading-wizard' },
            React.createElement(LoadingPageSpinner, null)));
    }
    var isSelected = function (_a) {
        var username = _a.username;
        return (selectedUser === null || selectedUser === void 0 ? void 0 : selectedUser.username) === username;
    };
    var noData = users.length === 0;
    if (noData && !filterIsSet(localParams, ['username__contains'])) {
        return (React.createElement("div", { className: 'hub-custom-wizard-layout hub-no-data' },
            React.createElement(EmptyStateNoData, { title: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["No assignable users."], ["No assignable users."]))), description: t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["There are currently no users that can be assigned ownership."], ["There are currently no users that can be assigned ownership."]))) })));
    }
    var isAssigned = function (_a) {
        var username = _a.username;
        return assignedUsers.some(function (user) { return user.username === username; });
    };
    var tabHeader = {
        headers: [
            {
                title: '',
                type: 'none',
                id: 'expander',
            },
            {
                title: t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["User"], ["User"]))),
                type: 'alpha',
                id: 'username',
            },
        ],
    };
    return (React.createElement("div", { className: 'hub-custom-wizard-layout' },
        React.createElement(Flex, { justifyContent: {
                default: noData
                    ? 'justifyContentFlexStart'
                    : 'justifyContentSpaceBetween',
            }, direction: { default: 'column' } },
            React.createElement(FlexItem, { className: 'hub-select-roles-content' },
                React.createElement(Flex, { justifyContent: {
                        default: noData
                            ? 'justifyContentFlexStart'
                            : 'justifyContentSpaceBetween',
                    }, direction: { default: 'column' } },
                    selectedUser ? (React.createElement(FlexItem, null,
                        React.createElement(Flex, null,
                            React.createElement(FlexItem, null,
                                React.createElement("strong", null,
                                    React.createElement(Trans, null, "Selected user"))),
                            React.createElement(FlexItem, { flex: { default: 'flex_1' } },
                                React.createElement(Flex, null,
                                    React.createElement(FlexItem, { key: selectedUser.username, className: 'hub-permission' },
                                        React.createElement(Label, null, selectedUser.username))))))) : null,
                    React.createElement(FlexItem, null,
                        React.createElement("div", { className: 'hub-filter' },
                            React.createElement(CompoundFilter, { inputText: inputText, onChange: function (inputText) { return setInputText(inputText); }, params: localParams, updateParams: function (p) { return setLocalParams(p); }, filterConfig: [
                                    {
                                        id: 'username__contains',
                                        title: t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["Name"], ["Name"]))),
                                    },
                                ] })),
                        React.createElement(AppliedFilters, { updateParams: function (p) {
                                setLocalParams(p);
                                setInputText('');
                            }, params: localParams, niceNames: { username__contains: t(templateObject_5 || (templateObject_5 = __makeTemplateObject(["Name"], ["Name"]))) }, ignoredParams: ['sort', 'page_size', 'page'], style: { marginTop: '8px' } })),
                    React.createElement(FlexItem, { style: { flexGrow: 1 } }, noData && filterIsSet(localParams, ['username__contains']) ? (React.createElement("div", { className: 'hub-no-filter-data' },
                        React.createElement(EmptyStateFilter, null))) : (React.createElement("div", { className: 'hub-selected-roles-list' },
                        React.createElement(RoleListTable, { isStickyHeader: true, params: localParams, updateParams: function (p) {
                                setLocalParams(p);
                            }, tableHeader: tabHeader }, users.map(function (user, i) { return (React.createElement(RadioRow, { rowIndex: i, key: user.username, isSelected: isSelected(user), onSelect: function () { return updateUser(user); }, isDisabled: isAssigned(user), "data-cy": "UserListTable-CheckboxRow-row-".concat(user.username) },
                            React.createElement("td", null, user.username))); }))))))),
            !noData && (React.createElement(FlexItem, null,
                React.createElement(Pagination, { params: localParams, updateParams: function (p) { return setLocalParams(p); }, count: usersCount }))))));
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
//# sourceMappingURL=select-user.js.map