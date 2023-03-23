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
import { Button, Flex, FlexItem, Label, LabelGroup, Modal, Spinner, Toolbar, ToolbarGroup, ToolbarItem, } from '@patternfly/react-core';
import React, { useEffect, useState } from 'react';
import { CollectionVersionAPI, Repositories } from 'src/api';
import { AlertList, AppliedFilters, CheckboxRow, CompoundFilter, Pagination, SortTable, } from 'src/components';
import { Constants } from 'src/constants';
import { errorMessage, parsePulpIDFromURL, waitForTaskUrl, } from 'src/utilities';
export var ApproveModal = function (props) {
    var _a = useState(''), inputText = _a[0], setInputText = _a[1];
    var _b = useState([]), repositoryList = _b[0], setRepositoryList = _b[1];
    var _c = useState(0), itemsCount = _c[0], setItemsCount = _c[1];
    var _d = useState([]), alerts = _d[0], setAlerts = _d[1];
    var _e = useState([]), selectedRepos = _e[0], setSelectedRepos = _e[1];
    var _f = useState([]), fixedRepos = _f[0], setFixedRepos = _f[1];
    var _g = useState(false), loading = _g[0], setLoading = _g[1];
    var _h = useState({
        page: 1,
        page_size: 10,
        sort: 'name',
    }), params = _h[0], setParams = _h[1];
    function approve() {
        function failedToLoadRepo(status, statusText) {
            setLoading(false);
            addAlert({
                title: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Failed to load pulp_id of collection repository."], ["Failed to load pulp_id of collection repository."]))),
                variant: 'danger',
                description: errorMessage(status, statusText),
            });
        }
        setLoading(true);
        var originRepoName = props.collectionVersion.repository_list.find(function (repo) { return repo == Constants.NEEDSREVIEW || repo == Constants.NOTCERTIFIED; });
        var reposToApprove = [];
        // fill repos that are actualy needed to approve, some of them may already contain the collection, those dont need to be approved again
        // this handles the possible inconsistent state
        selectedRepos.forEach(function (repo) {
            if (!fixedRepos.includes(repo)) {
                reposToApprove.push(repo);
            }
        });
        var repositoriesRef = props.allRepositories
            .filter(function (repo) { return reposToApprove.includes(repo.name); })
            .map(function (repo) { return repo.pulp_href; });
        Repositories.getRepository({ name: originRepoName })
            .then(function (data) {
            if (data.data.results.length == 0) {
                failedToLoadRepo('', t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Repository name ", " not found."], ["Repository name ", " not found."])), originRepoName));
            }
            else {
                var pulp_id_1 = parsePulpIDFromURL(data.data.results[0].pulp_href);
                CollectionVersionAPI.get(props.collectionVersion.id)
                    .then(function (data) {
                    Repositories.moveCollectionVersion(pulp_id_1, [data.data.pulp_href], repositoriesRef)
                        .then(function (task) {
                        return waitForTaskUrl(task['data'].task);
                    })
                        .then(function () {
                        setLoading(false);
                        props.finishAction();
                        props.addAlert({
                            title: t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Certification status for collection \"", " ", " v", "\" has been successfully updated."], ["Certification status for collection \"", " ", " v", "\" has been successfully updated."])), props.collectionVersion.namespace, props.collectionVersion.name, props.collectionVersion.version),
                            variant: 'success',
                            description: '',
                        });
                    })
                        .catch(function (_a) {
                        var _b = _a.response, status = _b.status, statusText = _b.statusText;
                        setLoading(false);
                        addAlert({
                            title: t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["Failed to approve collection."], ["Failed to approve collection."]))),
                            variant: 'danger',
                            description: errorMessage(status, statusText),
                        });
                    });
                })
                    .catch(function (_a) {
                    var _b = _a.response, status = _b.status, statusText = _b.statusText;
                    setLoading(false);
                    addAlert({
                        title: t(templateObject_5 || (templateObject_5 = __makeTemplateObject(["Failed to load collection."], ["Failed to load collection."]))),
                        variant: 'danger',
                        description: errorMessage(status, statusText),
                    });
                });
            }
        })
            .catch(function (_a) {
            var _b = _a.response, status = _b.status, statusText = _b.statusText;
            failedToLoadRepo(status, statusText);
        });
    }
    function addAlert(alert) {
        setAlerts(function (prevAlerts) { return __spreadArray(__spreadArray([], prevAlerts, true), [alert], false); });
    }
    function closeAlert() {
        setAlerts([]);
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
    function renderTable() {
        if (!props.collectionVersion) {
            return;
        }
        var sortTableOptions = {
            headers: [
                {
                    title: t(templateObject_8 || (templateObject_8 = __makeTemplateObject(["Name"], ["Name"]))),
                    type: 'alpha',
                    id: 'name',
                },
            ],
        };
        return (React.createElement(React.Fragment, null,
            React.createElement("table", { "aria-label": t(templateObject_9 || (templateObject_9 = __makeTemplateObject(["Collection versions"], ["Collection versions"]))), className: 'hub-c-table-content pf-c-table' },
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
                React.createElement(Button, { key: 'confirm', onClick: approve, variant: 'primary', isDisabled: selectedRepos.length - fixedRepos.length <= 0 || loading }, t(templateObject_10 || (templateObject_10 = __makeTemplateObject(["Select"], ["Select"])))),
                React.createElement(Button, { key: 'cancel', onClick: props.closeAction, variant: 'link', isDisabled: loading }, t(templateObject_11 || (templateObject_11 = __makeTemplateObject(["Cancel"], ["Cancel"])))),
            ], isOpen: true, onClose: props.closeAction, title: t(templateObject_12 || (templateObject_12 = __makeTemplateObject(["Select repositories"], ["Select repositories"]))), variant: 'large' },
            React.createElement("section", { className: 'modal-body', "data-cy": 'modal-body' },
                renderLabels(),
                React.createElement("div", { className: 'toolbar hub-toolbar' },
                    React.createElement(Toolbar, null,
                        React.createElement(ToolbarGroup, null,
                            React.createElement(ToolbarItem, null,
                                React.createElement(CompoundFilter, { inputText: inputText, onChange: function (text) {
                                        setInputText(text);
                                    }, updateParams: function (p) { return setParams(p); }, params: params, filterConfig: [
                                        {
                                            id: 'name__icontains',
                                            title: t(templateObject_13 || (templateObject_13 = __makeTemplateObject(["Repository"], ["Repository"]))),
                                        },
                                    ] })))),
                    React.createElement(Pagination, { params: params, updateParams: function (p) { return setParams(p); }, count: itemsCount, isTop: true })),
                React.createElement("div", null,
                    React.createElement(AppliedFilters, { updateParams: function (p) {
                            setParams(p);
                            setInputText('');
                        }, params: params, ignoredParams: ['page_size', 'page', 'sort'], niceNames: {
                            name__icontains: t(templateObject_14 || (templateObject_14 = __makeTemplateObject(["Name"], ["Name"]))),
                        } })),
                loading ? React.createElement(Spinner, null) : renderTable(),
                React.createElement("div", { className: 'footer' },
                    React.createElement(Pagination, { params: params, updateParams: function (p) { return setParams(p); }, count: itemsCount }))),
            React.createElement(AlertList, { alerts: alerts, closeAlert: function () { return closeAlert(); } }))));
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14;
//# sourceMappingURL=approve-modal.js.map