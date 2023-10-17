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
import { t } from '@lingui/macro';
import { Dropdown, DropdownItem, DropdownToggle, DropdownToggleCheckbox, Flex, FlexItem, Label, LabelGroup, Spinner, Toolbar, ToolbarGroup, ToolbarItem, } from '@patternfly/react-core';
import React, { useEffect, useState } from 'react';
import { AnsibleRepositoryAPI } from 'src/api';
import { AppliedFilters, CheckboxRow, CompoundFilter, Pagination, RadioRow, SortTable, } from 'src/components';
import { errorMessage } from 'src/utilities';
export var MultipleRepoSelector = function (props) {
    var _a;
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
    var selectedRepos = props.selectedRepos.map(function (_a) {
        var name = _a.name;
        return name;
    });
    var disabledRepos = props.disabledRepos || [];
    var isSelectorChecked = repositoryList
        .map(function (_a) {
        var name = _a.name;
        return name;
    })
        .every(function (n) { return selectedRepos.includes(n) || disabledRepos.includes(n); });
    function loadRepos() {
        setLoading(true);
        AnsibleRepositoryAPI.list(__assign(__assign({}, params), (props.params || {})))
            .then(function (_a) {
            var _b = _a.data, count = _b.count, results = _b.results;
            setRepositoryList(results);
            setItemsCount(count);
        })
            .catch(function (_a) {
            var _b = _a.response, status = _b.status, statusText = _b.statusText;
            return props.addAlert({
                title: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Failed to load repositories."], ["Failed to load repositories."]))),
                variant: 'danger',
                description: errorMessage(status, statusText),
            });
        })
            .finally(function () { return setLoading(false); });
    }
    function changeSelection(repo) {
        var name = repo.name;
        if (disabledRepos.includes(name)) {
            return;
        }
        var checked = selectedRepos.includes(name);
        if (checked) {
            // remove
            props.setSelectedRepos(props.selectedRepos.filter(function (_a) {
                var element = _a.name;
                return element != name;
            }));
        }
        else {
            // add
            props.setSelectedRepos(__spreadArray(__spreadArray([], props.selectedRepos, true), [repo], false));
        }
    }
    function setSelection(repo) {
        props.setSelectedRepos(repo ? [repo] : null);
    }
    function renderLabels() {
        return (React.createElement(Flex, null,
            React.createElement(FlexItem, null,
                React.createElement("b", null, t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Selected"], ["Selected"]))))),
            React.createElement(FlexItem, null,
                React.createElement(LabelGroup, null, selectedRepos.map(function (name) { return (React.createElement(React.Fragment, null,
                    React.createElement(Label, { onClose: function () { return changeSelection({ name: name }); } }, name),
                    ' ')); })))));
    }
    useEffect(function () {
        loadRepos();
    }, [params, (_a = props.params) === null || _a === void 0 ? void 0 : _a.pulp_label_select]);
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
        function selectPage() {
            var newRepos = __spreadArray([], props.selectedRepos, true);
            repositoryList.forEach(function (repo) {
                if (!selectedRepos.includes(repo.name) &&
                    !disabledRepos.includes(repo.name)) {
                    newRepos.push(repo);
                }
            });
            props.setSelectedRepos(newRepos);
        }
        function deselectAll() {
            props.setSelectedRepos([]);
        }
        function deselectPage() {
            var newRepos = props.selectedRepos.filter(function (_a) {
                var repo1 = _a.name;
                return !repositoryList.find(function (_a) {
                    var repo2 = _a.name;
                    return repo1 === repo2;
                });
            });
            props.setSelectedRepos(newRepos);
        }
        function onToggleCheckbox() {
            if (isSelectorChecked) {
                deselectPage();
            }
            else {
                selectPage();
            }
        }
        var dropdownItems = [
            React.createElement(DropdownItem, { onClick: selectPage, key: 'select-page' }, t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Select page (", " items)"], ["Select page (", " items)"])), repositoryList.length)),
            React.createElement(DropdownItem, { onClick: deselectPage, key: 'deselect-page' }, t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["Deselect page (", " items)"], ["Deselect page (", " items)"])), repositoryList.length)),
            React.createElement(DropdownItem, { onClick: deselectAll, key: 'deselect-all' }, t(templateObject_5 || (templateObject_5 = __makeTemplateObject(["Deselect all (", " items)"], ["Deselect all (", " items)"])), selectedRepos.length)),
        ];
        return (React.createElement(Dropdown, { onSelect: onSelect, toggle: React.createElement(DropdownToggle, { splitButtonItems: [
                    React.createElement(DropdownToggleCheckbox, { id: 'split-button-toggle-checkbox', key: 'split-checkbox', "aria-label": t(templateObject_6 || (templateObject_6 = __makeTemplateObject(["Select page"], ["Select page"]))), checked: isSelectorChecked, onChange: onToggleCheckbox }),
                ], onToggle: onToggle, id: 'toggle-split-button' }), isOpen: isSelectorOpen, dropdownItems: dropdownItems }));
    }
    function renderTable() {
        var sortTableOptions = {
            headers: [
                {
                    title: '',
                    type: 'none',
                    id: 'expander',
                },
                {
                    title: t(templateObject_7 || (templateObject_7 = __makeTemplateObject(["Name"], ["Name"]))),
                    type: 'alpha',
                    id: 'name',
                },
                {
                    title: t(templateObject_8 || (templateObject_8 = __makeTemplateObject(["Description"], ["Description"]))),
                    type: 'none',
                    id: 'description',
                },
            ],
        };
        return (React.createElement("table", { "aria-label": t(templateObject_9 || (templateObject_9 = __makeTemplateObject(["Repositories"], ["Repositories"]))), className: 'hub-c-table-content pf-c-table' },
            React.createElement(SortTable, { options: sortTableOptions, params: params, updateParams: function (p) { return setParams(p); } }),
            repositoryList.map(function (repo, i) {
                return props.singleSelectionOnly ? (React.createElement(RadioRow, { rowIndex: i, key: repo.name, isSelected: selectedRepos.includes(repo.name) ||
                        disabledRepos.includes(repo.name), onSelect: function () { return setSelection(repo); }, isDisabled: disabledRepos.includes(repo.name), "data-cy": "ApproveModal-RadioRow-row-".concat(repo.name) },
                    React.createElement("td", null, repo.name),
                    React.createElement("td", null, repo.description))) : (React.createElement(CheckboxRow, { rowIndex: i, key: repo.name, isSelected: selectedRepos.includes(repo.name) ||
                        disabledRepos.includes(repo.name), onSelect: function () { return changeSelection(repo); }, isDisabled: disabledRepos.includes(repo.name), "data-cy": "ApproveModal-CheckboxRow-row-".concat(repo.name) },
                    React.createElement("td", null, repo.name),
                    React.createElement("td", null, repo.description)));
            })));
    }
    return (React.createElement(React.Fragment, null,
        renderLabels(),
        React.createElement("div", { className: 'hub-toolbar' },
            React.createElement(Toolbar, null,
                React.createElement(ToolbarGroup, null,
                    !props.singleSelectionOnly && (React.createElement(ToolbarItem, null, renderMultipleSelector())),
                    React.createElement(ToolbarItem, null,
                        React.createElement(CompoundFilter, { inputText: inputText, onChange: function (text) {
                                setInputText(text);
                            }, updateParams: function (p) { return setParams(p); }, params: params, filterConfig: [
                                {
                                    id: 'name__icontains',
                                    title: t(templateObject_10 || (templateObject_10 = __makeTemplateObject(["Repository"], ["Repository"]))),
                                },
                            ] })))),
            React.createElement(Pagination, { params: params, updateParams: function (p) { return setParams(p); }, count: itemsCount, isTop: true })),
        React.createElement("div", null,
            React.createElement(AppliedFilters, { updateParams: function (p) {
                    setParams(p);
                    setInputText('');
                }, params: params, ignoredParams: ['page_size', 'page', 'sort'], niceNames: {
                    name__icontains: t(templateObject_11 || (templateObject_11 = __makeTemplateObject(["Name"], ["Name"]))),
                } })),
        loading ? React.createElement(Spinner, { size: 'lg' }) : renderTable(),
        React.createElement("div", { className: 'footer' },
            React.createElement(Pagination, { params: params, updateParams: function (p) { return setParams(p); }, count: itemsCount }))));
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11;
//# sourceMappingURL=multiple-repo-selector.js.map