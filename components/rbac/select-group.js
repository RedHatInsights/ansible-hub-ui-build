var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { Trans, t } from '@lingui/macro';
import { Flex, FlexItem, Label } from '@patternfly/react-core';
import React, { useEffect, useState } from 'react';
import { GroupAPI } from 'src/api';
import { AppliedFilters, CompoundFilter, EmptyStateFilter, EmptyStateNoData, LoadingPageSpinner, Pagination, RadioRow, RoleListTable, } from 'src/components';
import { filterIsSet } from 'src/utilities';
export var SelectGroup = function (_a) {
    var assignedGroups = _a.assignedGroups, selectedGroup = _a.selectedGroup, updateGroup = _a.updateGroup;
    var _b = useState(''), inputText = _b[0], setInputText = _b[1];
    var _c = useState([]), groups = _c[0], setGroups = _c[1];
    var _d = useState(0), groupsCount = _d[0], setGroupsCount = _d[1];
    var _e = useState(true), loading = _e[0], setLoading = _e[1];
    var _f = useState({
        page: 1,
        page_size: 10,
    }), localParams = _f[0], setLocalParams = _f[1];
    useEffect(function () {
        queryGroups();
    }, [localParams]);
    var queryGroups = function () {
        setLoading(true);
        GroupAPI.list(localParams).then(function (_a) {
            var data = _a.data;
            setGroups(data.data);
            setGroupsCount(data.meta.count);
            setLoading(false);
        });
    };
    if (loading) {
        return (React.createElement("div", { className: 'hub-custom-wizard-layout hub-loading-wizard' },
            React.createElement(LoadingPageSpinner, null)));
    }
    var isSelected = function (_a) {
        var name = _a.name;
        return (selectedGroup === null || selectedGroup === void 0 ? void 0 : selectedGroup.name) === name;
    };
    var noData = groups.length === 0;
    if (noData && !filterIsSet(localParams, ['name__icontains'])) {
        return (React.createElement("div", { className: 'hub-custom-wizard-layout hub-no-data' },
            React.createElement(EmptyStateNoData, { title: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["No assignable groups."], ["No assignable groups."]))), description: t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["There are currently no groups that can be assigned ownership."], ["There are currently no groups that can be assigned ownership."]))) })));
    }
    var isAssigned = function (_a) {
        var name = _a.name;
        return assignedGroups.some(function (group) { return group.name === name; });
    };
    var tabHeader = {
        headers: [
            {
                title: '',
                type: 'none',
                id: 'expander',
            },
            {
                title: t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Group"], ["Group"]))),
                type: 'alpha',
                id: 'name',
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
                    selectedGroup ? (React.createElement(FlexItem, null,
                        React.createElement(Flex, null,
                            React.createElement(FlexItem, null,
                                React.createElement("strong", null,
                                    React.createElement(Trans, null, "Selected group"))),
                            React.createElement(FlexItem, { flex: { default: 'flex_1' } },
                                React.createElement(Flex, null,
                                    React.createElement(FlexItem, { key: selectedGroup.name, className: 'hub-permission' },
                                        React.createElement(Label, null, selectedGroup.name))))))) : null,
                    React.createElement(FlexItem, null,
                        React.createElement("div", { className: 'hub-filter' },
                            React.createElement(CompoundFilter, { inputText: inputText, onChange: function (inputText) { return setInputText(inputText); }, params: localParams, updateParams: function (p) { return setLocalParams(p); }, filterConfig: [
                                    {
                                        id: 'name__icontains',
                                        title: t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["Name"], ["Name"]))),
                                    },
                                ] })),
                        React.createElement(AppliedFilters, { updateParams: function (p) {
                                setLocalParams(p);
                                setInputText('');
                            }, params: localParams, niceNames: { name__icontains: t(templateObject_5 || (templateObject_5 = __makeTemplateObject(["Name"], ["Name"]))) }, ignoredParams: ['sort', 'page_size', 'page'], style: { marginTop: '8px' } })),
                    React.createElement(FlexItem, { style: { flexGrow: 1 } }, noData && filterIsSet(localParams, ['name__icontains']) ? (React.createElement("div", { className: 'hub-no-filter-data' },
                        React.createElement(EmptyStateFilter, null))) : (React.createElement("div", { className: 'hub-selected-roles-list' },
                        React.createElement(RoleListTable, { isStickyHeader: true, params: localParams, updateParams: function (p) {
                                setLocalParams(p);
                            }, tableHeader: tabHeader }, groups.map(function (group, i) { return (React.createElement(RadioRow, { rowIndex: i, key: group.name, isSelected: isSelected(group), onSelect: function () { return updateGroup(group); }, isDisabled: isAssigned(group), "data-cy": "GroupListTable-CheckboxRow-row-".concat(group.name) },
                            React.createElement("td", null, group.name))); }))))))),
            !noData && (React.createElement(FlexItem, null,
                React.createElement(Pagination, { params: localParams, updateParams: function (p) { return setLocalParams(p); }, count: groupsCount }))))));
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
//# sourceMappingURL=select-group.js.map