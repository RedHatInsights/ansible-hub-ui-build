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
import { CollectionVersionAPI, Repositories, SigningServiceAPI, } from 'src/api';
import { AlertList, AppliedFilters, CheckboxRow, CompoundFilter, Pagination, SortTable, closeAlert, } from 'src/components';
import { useContext } from 'src/loaders/app-context';
import { errorMessage, parsePulpIDFromURL, waitForTaskUrl, } from 'src/utilities';
export var ApproveModal = function (props) {
    var _a = React.useState(false), isSelectorOpen = _a[0], setIsSelectorOpen = _a[1];
    var _b = useState(''), inputText = _b[0], setInputText = _b[1];
    var _c = useState([]), repositoryList = _c[0], setRepositoryList = _c[1];
    var _d = useState(0), itemsCount = _d[0], setItemsCount = _d[1];
    var _e = useState([]), alerts = _e[0], setAlerts = _e[1];
    var _f = useState([]), selectedRepos = _f[0], setSelectedRepos = _f[1];
    var _g = useState([]), fixedRepos = _g[0], setFixedRepos = _g[1];
    var _h = useState(false), loading = _h[0], setLoading = _h[1];
    var _j = useState({
        page: 1,
        page_size: 10,
        sort: 'name',
    }), params = _j[0], setParams = _j[1];
    var context = useContext();
    function approve() {
        var error = '';
        function approveAsync() {
            return __awaiter(this, void 0, void 0, function () {
                var reapprove, originRepoName, reposToApprove, repositoriesRef, repoData, pulp_id, collectionData, autosign, signingService_href, signingServiceName, signingList, promiseCopyOrMove, task;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            setLoading(true);
                            reapprove = false;
                            originRepoName = props.collectionVersion.repository_list.find(function (repo) {
                                return props.stagingRepoNames.includes(repo) ||
                                    repo == props.rejectedRepoName;
                            });
                            // origin repo is not staging or rejected, so this is reapprove process, user can add collection to approved repos
                            if (!originRepoName) {
                                reapprove = true;
                                originRepoName = fixedRepos[0];
                            }
                            reposToApprove = [];
                            // fill repos that are actualy needed to approve, some of them may already contain the collection, those dont need to be approved again
                            // this handles the possible inconsistent state
                            selectedRepos.forEach(function (repo) {
                                if (!fixedRepos.includes(repo)) {
                                    reposToApprove.push(repo);
                                }
                            });
                            repositoriesRef = props.allRepositories
                                .filter(function (repo) { return reposToApprove.includes(repo.name); })
                                .map(function (repo) { return repo.pulp_href; });
                            error = t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Repository name ", " not found."], ["Repository name ", " not found."])), originRepoName);
                            return [4 /*yield*/, Repositories.getRepository({
                                    name: originRepoName,
                                })];
                        case 1:
                            repoData = _a.sent();
                            if (repoData.data.results.length == 0) {
                                throw new Error();
                            }
                            error = '';
                            pulp_id = parsePulpIDFromURL(repoData.data.results[0].pulp_href);
                            error = t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Collection with id ", " not found."], ["Collection with id ", " not found."])), props.collectionVersion.id);
                            return [4 /*yield*/, CollectionVersionAPI.get(props.collectionVersion.id)];
                        case 2:
                            collectionData = _a.sent();
                            error = '';
                            autosign = context.settings.GALAXY_AUTO_SIGN_COLLECTIONS;
                            signingService_href = null;
                            if (!autosign) return [3 /*break*/, 4];
                            signingServiceName = context.settings.GALAXY_COLLECTION_SIGNING_SERVICE;
                            error = t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Signing service ", " not found"], ["Signing service ", " not found"])), signingServiceName);
                            return [4 /*yield*/, SigningServiceAPI.list({
                                    name: signingServiceName,
                                })];
                        case 3:
                            signingList = _a.sent();
                            if (signingList.data.results.length > 0) {
                                signingService_href = signingList.data.results[0].pulp_href;
                            }
                            else {
                                throw new Error();
                            }
                            error = '';
                            _a.label = 4;
                        case 4:
                            promiseCopyOrMove = null;
                            if (reapprove) {
                                // reapprove takes first
                                promiseCopyOrMove = Repositories.copyCollectionVersion(pulp_id, [collectionData.data.pulp_href], repositoriesRef, signingService_href);
                            }
                            else {
                                promiseCopyOrMove = Repositories.moveCollectionVersion(pulp_id, [collectionData.data.pulp_href], repositoriesRef, signingService_href);
                            }
                            return [4 /*yield*/, promiseCopyOrMove];
                        case 5:
                            task = _a.sent();
                            return [4 /*yield*/, waitForTaskUrl(task['data'].task)];
                        case 6:
                            _a.sent();
                            setLoading(false);
                            props.finishAction();
                            props.addAlert({
                                title: t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["Certification status for collection \"", " ", " v", "\" has been successfully updated."], ["Certification status for collection \"", " ", " v", "\" has been successfully updated."])), props.collectionVersion.namespace, props.collectionVersion.name, props.collectionVersion.version),
                                variant: 'success',
                                description: '',
                            });
                            return [2 /*return*/];
                    }
                });
            });
        }
        approveAsync().catch(function () {
            setLoading(false);
            addAlert({
                title: t(templateObject_5 || (templateObject_5 = __makeTemplateObject(["Failed to approve collection."], ["Failed to approve collection."]))),
                variant: 'danger',
                description: error,
            });
        });
    }
    function addAlert(alert) {
        setAlerts(function (prevAlerts) { return __spreadArray(__spreadArray([], prevAlerts, true), [alert], false); });
    }
    function changeSelection(name) {
        if (fixedRepos.includes(name)) {
            return;
        }
        var checked = selectedRepos.includes(name);
        if (checked) {
            // remove
            setSelectedRepos(selectedRepos.filter(function (element) { return element != name; }));
        }
        else {
            // add
            setSelectedRepos(__spreadArray(__spreadArray([], selectedRepos, true), [name], false));
        }
    }
    function loadRepos() {
        // modify params
        var par = __assign({}, params);
        par['pulp_label_select'] = 'pipeline=approved';
        par['ordering'] = par['sort'];
        delete par['sort'];
        setLoading(true);
        Repositories.list(par)
            .then(function (data) {
            setLoading(false);
            setRepositoryList(data.data.results);
            setItemsCount(data.data.count);
        })
            .catch(function (_a) {
            var _b = _a.response, status = _b.status, statusText = _b.statusText;
            setLoading(false);
            addAlert({
                title: t(templateObject_6 || (templateObject_6 = __makeTemplateObject(["Failed to load repositories."], ["Failed to load repositories."]))),
                variant: 'danger',
                description: errorMessage(status, statusText),
            });
        });
    }
    function renderLabels() {
        var labels = (React.createElement(React.Fragment, null,
            React.createElement(LabelGroup, null, selectedRepos.map(function (name) {
                var label = null;
                if (fixedRepos.includes(name)) {
                    label = React.createElement(Label, null, name);
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
                    React.createElement("b", null, t(templateObject_7 || (templateObject_7 = __makeTemplateObject(["Selected"], ["Selected"]))))),
                React.createElement(FlexItem, null, labels))));
    }
    useEffect(function () {
        loadRepos();
    }, [params]);
    useEffect(function () {
        var fixedReposLocal = [];
        var selectedReposLocal = [];
        // check for approval repos that are already in collection and select them in UI
        // this is handling of situation when collection is in inconsistent state
        props.collectionVersion.repository_list.forEach(function (repo) {
            var count = props.allRepositories.filter(function (r) { return r.name == repo; }).length;
            if (count > 0) {
                fixedReposLocal.push(repo);
                selectedReposLocal.push(repo);
            }
        });
        setSelectedRepos(selectedReposLocal);
        setFixedRepos(fixedReposLocal);
    }, []);
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
            setSelectedRepos(props.allRepositories.map(function (a) { return a.name; }));
        }
        function selectPage() {
            var newRepos = __spreadArray([], selectedRepos, true);
            repositoryList.forEach(function (repo) {
                if (!selectedRepos.includes(repo.name)) {
                    newRepos.push(repo.name);
                }
            });
            setSelectedRepos(newRepos);
        }
        function deselectAll() {
            setSelectedRepos(fixedRepos);
        }
        function deselectPage() {
            var newSelectedRepos = selectedRepos.filter(function (repo) {
                return fixedRepos.includes(repo) ||
                    !repositoryList.find(function (repo2) { return repo2.name == repo; });
            });
            setSelectedRepos(newSelectedRepos);
        }
        var dropdownItems = [
            React.createElement(DropdownItem, { onClick: selectPage, key: 'select-page' }, t(templateObject_8 || (templateObject_8 = __makeTemplateObject(["Select page (", " items)"], ["Select page (", " items)"])), repositoryList.length)),
            React.createElement(DropdownItem, { onClick: selectAll, key: 'select-all' }, t(templateObject_9 || (templateObject_9 = __makeTemplateObject(["Select all (", " items)"], ["Select all (", " items)"])), props.allRepositories.length)),
            React.createElement(DropdownSeparator, { key: 'separator' }),
            React.createElement(DropdownItem, { onClick: deselectPage, key: 'deselect-page' }, t(templateObject_10 || (templateObject_10 = __makeTemplateObject(["Deselect page (", " items)"], ["Deselect page (", " items)"])), repositoryList.length)),
            React.createElement(DropdownItem, { onClick: deselectAll, key: 'deselect-all' }, t(templateObject_11 || (templateObject_11 = __makeTemplateObject(["Deselect all (", " items)"], ["Deselect all (", " items)"])), props.allRepositories.length)),
        ];
        return (React.createElement(Dropdown, { onSelect: onSelect, toggle: React.createElement(DropdownToggle, { splitButtonItems: [
                    React.createElement(DropdownToggleCheckbox, { id: 'split-button-toggle-checkbox', key: 'split-checkbox', "aria-label": 'Select all' }),
                ], onToggle: onToggle, id: 'toggle-split-button' }), isOpen: isSelectorOpen, dropdownItems: dropdownItems }));
    }
    function renderTable() {
        if (!props.collectionVersion) {
            return;
        }
        var sortTableOptions = {
            headers: [
                {
                    title: t(templateObject_12 || (templateObject_12 = __makeTemplateObject(["Name"], ["Name"]))),
                    type: 'alpha',
                    id: 'name',
                },
            ],
        };
        return (React.createElement(React.Fragment, null,
            React.createElement("table", { "aria-label": t(templateObject_13 || (templateObject_13 = __makeTemplateObject(["Collection versions"], ["Collection versions"]))), className: 'hub-c-table-content pf-c-table' },
                React.createElement(SortTable, { options: sortTableOptions, params: params, updateParams: function (p) { return setParams(p); } }),
                React.createElement("tbody", null, repositoryList.map(function (repo, i) { return (React.createElement(CheckboxRow, { rowIndex: i, key: repo.name, isSelected: selectedRepos.includes(repo.name), onSelect: function () {
                        changeSelection(repo.name);
                    }, isDisabled: fixedRepos.includes(repo.name), "data-cy": "ApproveModal-CheckboxRow-row-".concat(repo.name) },
                    React.createElement("td", null,
                        React.createElement("div", null, repo.name),
                        React.createElement("div", null, repo.description)))); })))));
    }
    return (React.createElement(React.Fragment, null,
        React.createElement(Modal, { actions: [
                React.createElement(Button, { key: 'confirm', onClick: approve, variant: 'primary', isDisabled: selectedRepos.length - fixedRepos.length <= 0 || loading }, t(templateObject_14 || (templateObject_14 = __makeTemplateObject(["Select"], ["Select"])))),
                React.createElement(Button, { key: 'cancel', onClick: props.closeAction, variant: 'link', isDisabled: loading }, t(templateObject_15 || (templateObject_15 = __makeTemplateObject(["Cancel"], ["Cancel"])))),
            ], isOpen: true, onClose: props.closeAction, title: t(templateObject_16 || (templateObject_16 = __makeTemplateObject(["Select repositories"], ["Select repositories"]))), variant: 'large' },
            React.createElement("section", { className: 'modal-body', "data-cy": 'modal-body' },
                renderLabels(),
                React.createElement("div", { className: 'toolbar hub-toolbar' },
                    React.createElement(Toolbar, null,
                        React.createElement(ToolbarGroup, null,
                            React.createElement(ToolbarItem, null, renderMultipleSelector()),
                            React.createElement(ToolbarItem, null,
                                React.createElement(CompoundFilter, { inputText: inputText, onChange: function (text) {
                                        setInputText(text);
                                    }, updateParams: function (p) { return setParams(p); }, params: params, filterConfig: [
                                        {
                                            id: 'name__icontains',
                                            title: t(templateObject_17 || (templateObject_17 = __makeTemplateObject(["Repository"], ["Repository"]))),
                                        },
                                    ] })))),
                    React.createElement(Pagination, { params: params, updateParams: function (p) { return setParams(p); }, count: itemsCount, isTop: true })),
                React.createElement("div", null,
                    React.createElement(AppliedFilters, { updateParams: function (p) {
                            setParams(p);
                            setInputText('');
                        }, params: params, ignoredParams: ['page_size', 'page', 'sort'], niceNames: {
                            name__icontains: t(templateObject_18 || (templateObject_18 = __makeTemplateObject(["Name"], ["Name"]))),
                        } })),
                loading ? React.createElement(Spinner, null) : renderTable(),
                React.createElement("div", { className: 'footer' },
                    React.createElement(Pagination, { params: params, updateParams: function (p) { return setParams(p); }, count: itemsCount }))),
            React.createElement(AlertList, { alerts: alerts, closeAlert: function (i) { return closeAlert(i, { alerts: alerts, setAlerts: setAlerts }); } }))));
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18;
//# sourceMappingURL=approve-modal.js.map