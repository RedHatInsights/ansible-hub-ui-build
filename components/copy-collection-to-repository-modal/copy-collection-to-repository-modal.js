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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
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
import { Button, Dropdown, DropdownItem, DropdownSeparator, DropdownToggle, DropdownToggleCheckbox, Flex, FlexItem, Label, LabelGroup, Modal, Spinner, Toolbar, ToolbarGroup, ToolbarItem, } from '@patternfly/react-core';
import React, { useEffect, useState } from 'react';
import { AnsibleRepositoryAPI, SigningServiceAPI, } from 'src/api';
import { AppliedFilters, CheckboxRow, CompoundFilter, Pagination, SortTable, } from 'src/components';
import { useContext } from 'src/loaders/app-context';
import { RepositoriesUtils, errorMessage, parsePulpIDFromURL, taskAlert, } from 'src/utilities';
export var CopyCollectionToRepositoryModal = function (props) {
    var _a = useState(false), isSelectorOpen = _a[0], setIsSelectorOpen = _a[1];
    var _b = useState(false), isSelectorChecked = _b[0], setIsSelectorChecked = _b[1];
    var _c = useState([]), repositoryList = _c[0], setRepositoryList = _c[1];
    var _d = useState([]), fixedRepos = _d[0], setFixedRepos = _d[1];
    var _e = useState([]), selectedRepos = _e[0], setSelectedRepos = _e[1];
    var _f = useState(''), inputText = _f[0], setInputText = _f[1];
    var _g = useState(0), itemsCount = _g[0], setItemsCount = _g[1];
    // const [alerts, setAlerts] = useState([]);
    var _h = useState(false), loading = _h[0], setLoading = _h[1];
    var _j = useState({
        page: 1,
        page_size: 10,
        sort: 'name',
    }), params = _j[0], setParams = _j[1];
    var context = useContext();
    useEffect(function () {
        loadRepos();
        loadAssociatedRepoList();
    }, []);
    useEffect(function () {
        loadRepos();
    }, [params]);
    var loadRepos = function () { return __awaiter(void 0, void 0, void 0, function () {
        var par, repos;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    par = __assign({}, params);
                    par['name__contains'] = inputText;
                    setLoading(true);
                    return [4 /*yield*/, AnsibleRepositoryAPI.list(par)];
                case 1:
                    repos = _a.sent();
                    setItemsCount(repos.data.count);
                    setRepositoryList(repos.data.results);
                    setLoading(false);
                    return [2 /*return*/];
            }
        });
    }); };
    var loadAllRepos = function () {
        setLoading(true);
        // TODO: replace getAll pagination
        RepositoriesUtils.listAll().then(function (repos) {
            setSelectedRepos(repos.map(function (repo) { return repo.name; }));
            setRepositoryList(repos);
            setLoading(false);
        });
    };
    var loadAssociatedRepoList = function () { return __awaiter(void 0, void 0, void 0, function () {
        var repoList;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, RepositoriesUtils.getCollectionRepoList(props.collection)];
                case 1:
                    repoList = _a.sent();
                    setFixedRepos(repoList);
                    return [2 /*return*/];
            }
        });
    }); };
    var changeSelection = function (name) {
        var checked = selectedRepos.includes(name);
        if (checked) {
            // remove
            setSelectedRepos(selectedRepos.filter(function (element) { return element != name; }));
        }
        else {
            // add
            setSelectedRepos(__spreadArray(__spreadArray([], selectedRepos, true), [name], false));
        }
    };
    var copyToRepositories = function () { return __awaiter(void 0, void 0, void 0, function () {
        var _a, collection_version, repository, pulpId, signingServiceName, signingService, signingList, _b, repoHrefs, copyParams;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    setLoading(true);
                    _a = props.collection, collection_version = _a.collection_version, repository = _a.repository;
                    pulpId = parsePulpIDFromURL(repository.pulp_href);
                    signingServiceName = context.settings.GALAXY_COLLECTION_SIGNING_SERVICE;
                    signingService = null;
                    _c.label = 1;
                case 1:
                    _c.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, SigningServiceAPI.list({
                            name: signingServiceName,
                        })];
                case 2:
                    signingList = _c.sent();
                    signingService = signingList.data.results[0].pulp_href;
                    return [3 /*break*/, 4];
                case 3:
                    _b = _c.sent();
                    setLoading(false);
                    props.addAlert({
                        title: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Failed to copy collection version."], ["Failed to copy collection version."]))),
                        variant: 'danger',
                        description: t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Signing service ", " not found"], ["Signing service ", " not found"])), signingServiceName),
                    });
                    return [2 /*return*/];
                case 4:
                    repoHrefs = repositoryList
                        .filter(function (repo) { return selectedRepos.includes(repo.name); })
                        .map(function (repo) { return repo.pulp_href; });
                    copyParams = {
                        collection_versions: [collection_version.pulp_href],
                        destination_repositories: repoHrefs,
                    };
                    if (signingService) {
                        copyParams['signing_service'] = signingService;
                    }
                    AnsibleRepositoryAPI.copyCollectionVersion(pulpId, copyParams)
                        .then(function (_a) {
                        var data = _a.data;
                        selectedRepos.map(function (repo) {
                            props.addAlert(taskAlert(data.task, t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Started adding ", ".", " v", " from \"", "\" to repository \"", "\"."], ["Started adding ", ".", " v", " from \"", "\" to repository \"", "\"."])), collection_version.namespace, collection_version.name, collection_version.version, repository.name, repo)));
                        });
                    })
                        .catch(function (e) {
                        setLoading(false);
                        props.addAlert({
                            variant: 'danger',
                            title: t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["Collection ", ".", " v", " could not be copied."], ["Collection ", ".", " v", " could not be copied."])), collection_version.namespace, collection_version.name, collection_version.version),
                            description: errorMessage(e.status, e.statusText),
                        });
                    });
                    return [2 /*return*/];
            }
        });
    }); };
    var renderLabels = function (repos) {
        var labels = (React.createElement(LabelGroup, null, repos.map(function (name, i) { return (React.createElement(Label, { key: i, onClose: function () { return changeSelection(name); } }, name)); })));
        return (React.createElement(Flex, null,
            React.createElement(FlexItem, null,
                React.createElement("b", null, t(templateObject_5 || (templateObject_5 = __makeTemplateObject(["Selected"], ["Selected"]))))),
            React.createElement(FlexItem, null, labels)));
    };
    var renderMultipleSelector = function () {
        var onToggle = function (isOpen) {
            setIsSelectorOpen(isOpen);
        };
        var onFocus = function () {
            var element = document.getElementById('toggle-split-button');
            element.focus();
        };
        var onSelect = function () {
            setIsSelectorOpen(false);
            onFocus();
        };
        var selectAll = function () {
            loadAllRepos();
            setIsSelectorChecked(true);
        };
        var selectPage = function () {
            setSelectedRepos(repositoryList.map(function (repo) { return repo.name; }));
            setIsSelectorChecked(true);
        };
        var deselectAll = function () {
            setSelectedRepos([]);
            setIsSelectorChecked(false);
        };
        var deselectPage = function () {
            setSelectedRepos([]);
            setIsSelectorChecked(false);
        };
        var onToggleCheckbox = function () {
            setIsSelectorChecked(!isSelectorChecked);
            if (isSelectorChecked) {
                deselectPage();
            }
            else {
                selectPage();
            }
        };
        var dropdownItems = [
            React.createElement(DropdownItem, { onClick: selectPage, key: 'select-page' }, t(templateObject_6 || (templateObject_6 = __makeTemplateObject(["Select page (", " items)"], ["Select page (", " items)"])), repositoryList.length)),
            React.createElement(DropdownItem, { onClick: selectAll, key: 'select-all' }, t(templateObject_7 || (templateObject_7 = __makeTemplateObject(["Select all (", " items)"], ["Select all (", " items)"])), itemsCount)),
            React.createElement(DropdownSeparator, { key: 'separator' }),
            React.createElement(DropdownItem, { onClick: deselectPage, key: 'deselect-page' }, t(templateObject_8 || (templateObject_8 = __makeTemplateObject(["Deselect page (", " items)"], ["Deselect page (", " items)"])), repositoryList.length)),
            React.createElement(DropdownItem, { onClick: deselectAll, key: 'deselect-all' }, t(templateObject_9 || (templateObject_9 = __makeTemplateObject(["Deselect all (", " items)"], ["Deselect all (", " items)"])), itemsCount)),
        ];
        return (React.createElement(Dropdown, { onSelect: onSelect, toggle: React.createElement(DropdownToggle, { splitButtonItems: [
                    React.createElement(DropdownToggleCheckbox, { id: 'split-button-toggle-checkbox', key: 'split-checkbox', "aria-label": 'Select all', checked: isSelectorChecked, onChange: onToggleCheckbox }),
                ], onToggle: onToggle, id: 'toggle-split-button' }), isOpen: isSelectorOpen, dropdownItems: dropdownItems }));
    };
    var renderTable = function () {
        if (!props.collection) {
            return;
        }
        var sortTableOptions = {
            headers: [
                {
                    title: t(templateObject_10 || (templateObject_10 = __makeTemplateObject(["Name"], ["Name"]))),
                    type: 'alpha',
                    id: 'name',
                },
            ],
        };
        return (React.createElement(React.Fragment, null,
            React.createElement("table", { "aria-label": t(templateObject_11 || (templateObject_11 = __makeTemplateObject(["Collection versions"], ["Collection versions"]))), className: 'hub-c-table-content pf-c-table' },
                React.createElement(SortTable, { options: sortTableOptions, params: params, updateParams: function (p) { return setParams(p); } }),
                React.createElement("tbody", null, repositoryList.map(function (repo, i) { return (React.createElement(CheckboxRow, { rowIndex: i, key: repo.name, isSelected: fixedRepos.includes(repo.name) ||
                        selectedRepos.includes(repo.name), onSelect: function () {
                        changeSelection(repo.name);
                    }, isDisabled: fixedRepos.includes(repo.name), "data-cy": "ApproveModal-CheckboxRow-row-".concat(repo.name) },
                    React.createElement("td", null,
                        React.createElement("div", null, repo.name),
                        React.createElement("div", null, repo.description)))); })))));
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(Modal, { actions: [
                React.createElement(Button, { key: 'confirm', onClick: function () { return copyToRepositories(); }, variant: 'primary', isDisabled: selectedRepos.length <= 0 || loading }, t(templateObject_12 || (templateObject_12 = __makeTemplateObject(["Select"], ["Select"])))),
                React.createElement(Button, { key: 'cancel', onClick: props.closeAction, variant: 'link', isDisabled: loading }, t(templateObject_13 || (templateObject_13 = __makeTemplateObject(["Cancel"], ["Cancel"])))),
            ], isOpen: true, onClose: props.closeAction, title: t(templateObject_14 || (templateObject_14 = __makeTemplateObject(["Select repositories"], ["Select repositories"]))), variant: 'large' },
            React.createElement("section", { className: 'modal-body', "data-cy": 'modal-body' },
                renderLabels(selectedRepos),
                React.createElement("div", { className: 'hub-toolbar' },
                    React.createElement(Toolbar, null,
                        React.createElement(ToolbarGroup, null,
                            React.createElement(ToolbarItem, null, renderMultipleSelector()),
                            React.createElement(ToolbarItem, null,
                                React.createElement(CompoundFilter, { inputText: inputText, onChange: function (text) {
                                        setInputText(text);
                                    }, updateParams: function (p) { return setParams(p); }, params: params, filterConfig: [
                                        {
                                            id: 'name__icontains',
                                            title: t(templateObject_15 || (templateObject_15 = __makeTemplateObject(["Repository"], ["Repository"]))),
                                        },
                                    ] })))),
                    React.createElement(Pagination, { params: params, updateParams: function (p) { return setParams(p); }, count: itemsCount, isTop: true })),
                React.createElement("div", null,
                    React.createElement(AppliedFilters, { updateParams: function (p) {
                            setParams(p);
                            setInputText('');
                        }, params: params, ignoredParams: ['page_size', 'page', 'sort'], niceNames: {
                            name__icontains: t(templateObject_16 || (templateObject_16 = __makeTemplateObject(["Name"], ["Name"]))),
                        } })),
                loading ? React.createElement(Spinner, null) : renderTable(),
                React.createElement("div", { className: 'footer' },
                    React.createElement(Pagination, { params: params, updateParams: function (p) { return setParams(p); }, count: itemsCount }))))));
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16;
//# sourceMappingURL=copy-collection-to-repository-modal.js.map