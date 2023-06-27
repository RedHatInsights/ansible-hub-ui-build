var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
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
import { t } from '@lingui/macro';
import { Dropdown, DropdownItem, DropdownSeparator, DropdownToggle, DropdownToggleCheckbox, Flex, FlexItem, Label, LabelGroup, Spinner, Toolbar, ToolbarGroup, ToolbarItem, } from '@patternfly/react-core';
import React, { useEffect, useState } from 'react';
import 'src/api';
import { AppliedFilters, CheckboxRow, CompoundFilter, Pagination, RadioRow, SortTable, } from 'src/components';
export var MultipleRepoSelector = function (props) {
    var _a = useState(false), isSelectorChecked = _a[0], setIsSelectorChecked = _a[1];
    var _b = useState(false), isSelectorOpen = _b[0], setIsSelectorOpen = _b[1];
    var _c = useState(''), inputText = _c[0], setInputText = _c[1];
    var _d = useState([]), repositoryList = _d[0], setRepositoryList = _d[1];
    var _e = useState(0), itemsCount = _e[0], setItemsCount = _e[1];
    var _f = useState(false), loading = _f[0], setLoading = _f[1];
    var _g = useState({
        page: 1,
        page_size: 10,
        sort: 'name',
    }), params = _g[0], setParams = _g[1];
    function changeSelection(name) {
        if (props.fixedRepos.includes(name)) {
            return;
        }
        var checked = props.selectedRepos.includes(name);
        if (checked) {
            // remove
            props.setSelectedRepos(props.selectedRepos.filter(function (element) { return element != name; }));
        }
        else {
            // add
            props.setSelectedRepos(__spreadArray(__spreadArray([], props.selectedRepos, true), [name], false));
        }
    }
    function renderLabels() {
        var labels = (React.createElement(React.Fragment, null,
            React.createElement(LabelGroup, null, props.selectedRepos.map(function (name) {
                var label = null;
                if (props.fixedRepos.includes(name)) {
                    if (!props.hideFixedRepos) {
                        label = React.createElement(Label, null, name);
                    }
                }
                else {
                    label = (React.createElement(Label, { onClose: function () { return changeSelection(name); } }, name));
                }
                return React.createElement(React.Fragment, null,
                    label,
                    " ");
            }))));
        return (React.createElement(React.Fragment, null,
            React.createElement(Flex, null,
                React.createElement(FlexItem, null,
                    React.createElement("b", null, t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Selected"], ["Selected"]))))),
                React.createElement(FlexItem, null, labels))));
    }
    useEffect(function () {
        props.loadRepos(params, setRepositoryList, setLoading, setItemsCount);
    }, [params, props.allRepositories]);
    function renderMultipleSelector() {
        function onToggle(isOpen) {
            setIsSelectorOpen(isOpen);
        }
        function onFocus() {
            var element = document.getElementById('toggle-split-button');
            element.focus();
        }
        function onSelect() {
            setIsSelectorOpen(false);
            onFocus();
        }
        function selectAll() {
            props.setSelectedRepos(props.allRepositories.map(function (a) { return a.name; }));
            setIsSelectorChecked(true);
        }
        function selectPage() {
            var newRepos = __spreadArray([], props.selectedRepos, true);
            repositoryList.forEach(function (repo) {
                if (!props.selectedRepos.includes(repo.name)) {
                    newRepos.push(repo.name);
                }
            });
            props.setSelectedRepos(newRepos);
            setIsSelectorChecked(true);
        }
        function deselectAll() {
            props.setSelectedRepos(props.fixedRepos);
            setIsSelectorChecked(false);
        }
        function deselectPage() {
            var newSelectedRepos = props.selectedRepos.filter(function (repo) {
                return props.fixedRepos.includes(repo) ||
                    !repositoryList.find(function (repo2) { return repo2.name == repo; });
            });
            props.setSelectedRepos(newSelectedRepos);
            setIsSelectorChecked(false);
        }
        function onToggleCheckbox() {
            setIsSelectorChecked(!isSelectorChecked);
            if (isSelectorChecked) {
                deselectPage();
            }
            else {
                selectPage();
            }
        }
        var dropdownItems = [
            React.createElement(DropdownItem, { onClick: selectPage, key: 'select-page' }, t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Select page (", " items)"], ["Select page (", " items)"])), repositoryList.length)),
            React.createElement(DropdownItem, { onClick: selectAll, key: 'select-all' }, t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Select all (", " items)"], ["Select all (", " items)"])), props.allRepositories.length)),
            React.createElement(DropdownSeparator, { key: 'separator' }),
            React.createElement(DropdownItem, { onClick: deselectPage, key: 'deselect-page' }, t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["Deselect page (", " items)"], ["Deselect page (", " items)"])), repositoryList.length)),
            React.createElement(DropdownItem, { onClick: deselectAll, key: 'deselect-all' }, t(templateObject_5 || (templateObject_5 = __makeTemplateObject(["Deselect all (", " items)"], ["Deselect all (", " items)"])), props.allRepositories.length)),
        ];
        return (React.createElement(Dropdown, { onSelect: onSelect, toggle: React.createElement(DropdownToggle, { splitButtonItems: [
                    React.createElement(DropdownToggleCheckbox, { id: 'split-button-toggle-checkbox', key: 'split-checkbox', "aria-label": 'Select all', checked: isSelectorChecked, onChange: onToggleCheckbox }),
                ], onToggle: onToggle, id: 'toggle-split-button' }), isOpen: isSelectorOpen, dropdownItems: dropdownItems }));
    }
    function renderTable() {
        var sortTableOptions = {
            headers: [
                {
                    title: t(templateObject_6 || (templateObject_6 = __makeTemplateObject(["Name"], ["Name"]))),
                    type: 'alpha',
                    id: 'name',
                },
            ],
        };
        return (React.createElement(React.Fragment, null,
            React.createElement("table", { "aria-label": t(templateObject_7 || (templateObject_7 = __makeTemplateObject(["Collection versions"], ["Collection versions"]))), className: 'hub-c-table-content pf-c-table' },
                React.createElement(SortTable, { options: sortTableOptions, params: params, updateParams: function (p) { return setParams(p); } }),
                React.createElement("tbody", null, repositoryList.map(function (repo, i) { return (React.createElement(React.Fragment, null,
                    !props.singleSelectionOnly && (React.createElement(CheckboxRow, { rowIndex: i, key: repo.name, isSelected: props.selectedRepos.includes(repo.name), onSelect: function () {
                            changeSelection(repo.name);
                        }, isDisabled: props.fixedRepos.includes(repo.name), "data-cy": "ApproveModal-CheckboxRow-row-".concat(repo.name) },
                        React.createElement("td", null,
                            React.createElement("div", null, repo.name),
                            React.createElement("div", null, repo.description)))),
                    props.singleSelectionOnly && (React.createElement(React.Fragment, null,
                        React.createElement(RadioRow, { rowIndex: i, key: repo.name, isSelected: props.selectedRepos.includes(repo.name), onSelect: function () {
                                props.setSelectedRepos([repo.name]);
                            }, isDisabled: props.fixedRepos.includes(repo.name), "data-cy": "ApproveModal-RadioRow-row-".concat(repo.name) },
                            React.createElement("td", null,
                                React.createElement("div", null, repo.name),
                                React.createElement("div", null, repo.description))))))); })))));
    }
    return (React.createElement(React.Fragment, null,
        renderLabels(),
        React.createElement("div", { className: 'toolbar hub-toolbar' },
            React.createElement(Toolbar, null,
                React.createElement(ToolbarGroup, null,
                    !props.singleSelectionOnly && (React.createElement(ToolbarItem, null, renderMultipleSelector())),
                    React.createElement(ToolbarItem, null,
                        React.createElement(CompoundFilter, { inputText: inputText, onChange: function (text) {
                                setInputText(text);
                            }, updateParams: function (p) { return setParams(p); }, params: params, filterConfig: [
                                {
                                    id: 'name__icontains',
                                    title: t(templateObject_8 || (templateObject_8 = __makeTemplateObject(["Repository"], ["Repository"]))),
                                },
                            ] })))),
            React.createElement(Pagination, { params: params, updateParams: function (p) { return setParams(p); }, count: itemsCount, isTop: true })),
        React.createElement("div", null,
            React.createElement(AppliedFilters, { updateParams: function (p) {
                    setParams(p);
                    setInputText('');
                }, params: params, ignoredParams: ['page_size', 'page', 'sort'], niceNames: {
                    name__icontains: t(templateObject_9 || (templateObject_9 = __makeTemplateObject(["Name"], ["Name"]))),
                } })),
        loading ? React.createElement(Spinner, null) : renderTable(),
        React.createElement("div", { className: 'footer' },
            React.createElement(Pagination, { params: params, updateParams: function (p) { return setParams(p); }, count: itemsCount }))));
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9;
//# sourceMappingURL=multiple-repo-selector.js.map