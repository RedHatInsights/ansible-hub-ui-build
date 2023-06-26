var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { t } from '@lingui/macro';
import { ExpandableRowContent, TableComposable, Tbody, Td, Tr, } from '@patternfly/react-table';
import React, { useState } from 'react';
import { SortTable } from 'src/components';
export var RoleListTable = function (_a) {
    var children = _a.children, params = _a.params, updateParams = _a.updateParams, isCompact = _a.isCompact, tableHeader = _a.tableHeader, _b = _a.isStickyHeader, isStickyHeader = _b === void 0 ? false : _b;
    var defaultTableHeader = {
        headers: [
            {
                title: '',
                type: 'none',
                id: 'expander',
            },
            {
                title: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Role"], ["Role"]))),
                type: 'alpha',
                id: 'role',
            },
            {
                title: t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Description"], ["Description"]))),
                type: 'none',
                id: 'description',
            },
            {
                title: t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Editable"], ["Editable"]))),
                type: 'none',
                id: 'locked',
            },
            {
                title: '',
                type: 'none',
                id: 'kebab',
            },
        ],
    };
    return (React.createElement(TableComposable, { "aria-label": 'role-list-table', "data-cy": 'RoleListTable', variant: isCompact ? 'compact' : undefined, isStickyHeader: isStickyHeader },
        React.createElement(SortTable, { options: tableHeader !== null && tableHeader !== void 0 ? tableHeader : defaultTableHeader, params: params, updateParams: updateParams }),
        children));
};
export var ExpandableRow = function (_a) {
    var rowIndex = _a.rowIndex, children = _a.children, expandableRowContent = _a.expandableRowContent, colSpan = _a.colSpan, props = __rest(_a, ["rowIndex", "children", "expandableRowContent", "colSpan"]);
    var _b = useState(false), isExpanded = _b[0], setIsExpanded = _b[1];
    return (React.createElement(Tbody, { isExpanded: isExpanded },
        React.createElement(Tr, { "data-cy": props['data-cy'] },
            React.createElement(Td, { expand: {
                    onToggle: function () { return setIsExpanded(!isExpanded); },
                    isExpanded: isExpanded,
                    rowIndex: rowIndex,
                } }),
            children),
        expandableRowContent && (React.createElement(Tr, { isExpanded: isExpanded },
            React.createElement(Td, { colSpan: colSpan !== null && colSpan !== void 0 ? colSpan : 4 }, isExpanded && (React.createElement(ExpandableRowContent, null, expandableRowContent)))))));
};
export var CheckboxRow = function (_a) {
    var rowIndex = _a.rowIndex, children = _a.children, isSelected = _a.isSelected, onSelect = _a.onSelect, isDisabled = _a.isDisabled, props = __rest(_a, ["rowIndex", "children", "isSelected", "onSelect", "isDisabled"]);
    return (React.createElement(Tbody, null,
        React.createElement(Tr, { "data-cy": props['data-cy'] },
            React.createElement(Td, { select: {
                    disable: isDisabled,
                    variant: 'checkbox',
                    rowIndex: rowIndex,
                    onSelect: onSelect,
                    isSelected: isSelected,
                } }),
            children)));
};
export var RadioRow = function (_a) {
    var rowIndex = _a.rowIndex, children = _a.children, isSelected = _a.isSelected, onSelect = _a.onSelect, isDisabled = _a.isDisabled, props = __rest(_a, ["rowIndex", "children", "isSelected", "onSelect", "isDisabled"]);
    return (React.createElement(Tbody, null,
        React.createElement(Tr, { "data-cy": props['data-cy'] },
            React.createElement(Td, { select: {
                    disable: isDisabled,
                    variant: 'radio',
                    rowIndex: rowIndex,
                    onSelect: onSelect,
                    isSelected: isSelected,
                } }),
            children)));
};
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=role-list-table.js.map