var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { t } from '@lingui/macro';
import React, { useState } from 'react';
import { SortTable } from 'src/components';
import { TableComposable, Tr, Tbody, Td, ExpandableRowContent, } from '@patternfly/react-table';
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
                id: 'name',
            },
            {
                title: t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Description"], ["Description"]))),
                type: 'none',
                id: 'description',
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
    var rowIndex = _a.rowIndex, children = _a.children, expandableRowContent = _a.expandableRowContent, colSpan = _a.colSpan;
    var _b = useState(false), isExpanded = _b[0], setIsExpanded = _b[1];
    return (React.createElement(Tbody, { isExpanded: isExpanded },
        React.createElement(Tr, null,
            React.createElement(Td, { expand: {
                    onToggle: function () { return setIsExpanded(!isExpanded); },
                    isExpanded: isExpanded,
                    rowIndex: rowIndex,
                } }),
            children),
        expandableRowContent && (React.createElement(Tr, { isExpanded: isExpanded },
            React.createElement(Td, { colSpan: colSpan !== null && colSpan !== void 0 ? colSpan : 4 },
                React.createElement(ExpandableRowContent, null, expandableRowContent))))));
};
export var CheckboxRow = function (_a) {
    var rowIndex = _a.rowIndex, children = _a.children, isSelected = _a.isSelected, onSelect = _a.onSelect;
    return (React.createElement(Tbody, null,
        React.createElement(Tr, null,
            React.createElement(Td, { select: {
                    variant: 'checkbox',
                    rowIndex: rowIndex,
                    onSelect: onSelect,
                    isSelected: isSelected,
                } }),
            children)));
};
export var RadioRow = function (_a) {
    var rowIndex = _a.rowIndex, children = _a.children, isSelected = _a.isSelected, onSelect = _a.onSelect;
    return (React.createElement(Tbody, null,
        React.createElement(Tr, null,
            React.createElement(Td, { select: {
                    variant: 'radio',
                    rowIndex: rowIndex,
                    onSelect: onSelect,
                    isSelected: isSelected,
                } }),
            children)));
};
var templateObject_1, templateObject_2;
//# sourceMappingURL=role-list-table.js.map