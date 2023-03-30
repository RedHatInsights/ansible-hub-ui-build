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
import { Trans, t } from '@lingui/macro';
import { ActionGroup, Button, Checkbox, Form, FormGroup, Select, SelectOption, Spinner, TextInput, } from '@patternfly/react-core';
import React, { useEffect, useState } from 'react';
import { AnsibleRemoteAPI } from 'src/api';
import { APISearchTypeAhead, HelperText, LazyDistributions, PulpLabels, } from 'src/components';
import { errorMessage } from 'src/utilities';
export var AnsibleRepositoryForm = function (_a) {
    var _b, _c, _d;
    var allowEditName = _a.allowEditName, errorMessages = _a.errorMessages, onCancel = _a.onCancel, onSave = _a.onSave, repository = _a.repository, updateRepository = _a.updateRepository;
    var requiredFields = [];
    var disabledFields = allowEditName ? [] : ['name'];
    var toError = function (bool) { return (bool ? 'default' : 'error'); };
    var formGroup = function (fieldName, label, helperText, children) { return (React.createElement(FormGroup, { key: fieldName, fieldId: fieldName, label: helperText ? (React.createElement(React.Fragment, null,
            label,
            " ",
            React.createElement(HelperText, { content: helperText }))) : (label), isRequired: requiredFields.includes(fieldName), validated: toError(!(fieldName in errorMessages)), helperTextInvalid: errorMessages[fieldName] }, children)); };
    var inputField = function (fieldName, label, helperText, props) {
        return formGroup(fieldName, label, helperText, React.createElement(TextInput, __assign({ validated: toError(!(fieldName in errorMessages)), isRequired: requiredFields.includes(fieldName), isDisabled: disabledFields.includes(fieldName), id: fieldName, value: repository[fieldName] || '', onChange: function (value) {
                var _a;
                return updateRepository(__assign(__assign({}, repository), (_a = {}, _a[fieldName] = value, _a)));
            } }, props)));
    };
    var stringField = function (fieldName, label, helperText) {
        return inputField(fieldName, label, helperText, { type: 'text' });
    };
    var numericField = function (fieldName, label, helperText) {
        return inputField(fieldName, label, helperText, { type: 'number' });
    };
    var isValid = !requiredFields.find(function (field) { return !repository[field]; });
    var _f = useState(true), createDistribution = _f[0], setCreateDistribution = _f[1];
    var _g = useState(false), disabledDistribution = _g[0], setDisabledDistribution = _g[1];
    var onDistributionsLoad = function (distributions) {
        var _a;
        if ((_a = distributions === null || distributions === void 0 ? void 0 : distributions.find) === null || _a === void 0 ? void 0 : _a.call(distributions, function (_a) {
            var name = _a.name;
            return name === repository.name;
        })) {
            setCreateDistribution(false);
            setDisabledDistribution(true);
        }
        else {
            setCreateDistribution(true);
            setDisabledDistribution(false);
        }
    };
    var _h = useState(((_b = repository === null || repository === void 0 ? void 0 : repository.pulp_labels) === null || _b === void 0 ? void 0 : _b.hide_from_search) === ''), hideFromSearch = _h[0], setHideFromSearch = _h[1];
    var _j = useState((_c = repository === null || repository === void 0 ? void 0 : repository.pulp_labels) === null || _c === void 0 ? void 0 : _c.pipeline), pipeline = _j[0], setPipeline = _j[1];
    var _k = useState(hideFromSearch && pipeline === 'staging'), disableHideFromSearch = _k[0], setDisableHideFromSearch = _k[1];
    var _l = useState(null), remotes = _l[0], setRemotes = _l[1];
    var _m = useState(null), remotesError = _m[0], setRemotesError = _m[1];
    var loadRemotes = function (name) {
        setRemotesError(null);
        AnsibleRemoteAPI.list(__assign({}, (name ? { name__icontains: name } : {})))
            .then(function (_a) {
            var data = _a.data;
            return setRemotes(data.results);
        })
            .catch(function (e) {
            var _a = e.response, status = _a.status, statusText = _a.statusText;
            setRemotes([]);
            setRemotesError(errorMessage(status, statusText));
        });
    };
    useEffect(function () { return loadRemotes(); }, []);
    var selectedRemote = (_d = remotes === null || remotes === void 0 ? void 0 : remotes.find) === null || _d === void 0 ? void 0 : _d.call(remotes, function (_a) {
        var pulp_href = _a.pulp_href;
        return pulp_href === (repository === null || repository === void 0 ? void 0 : repository.remote);
    });
    var _o = useState(hideFromSearch && pipeline === 'staging'
        ? 'staging'
        : pipeline === 'approved'
            ? 'approved'
            : 'none'), selectedPipeline = _o[0], setSelectedPipeline = _o[1];
    var _p = useState(false), selectOpen = _p[0], setSelectOpen = _p[1];
    var selectPipeline = function (value) {
        var _a;
        if (disableHideFromSearch && value !== 'staging') {
            setHideFromSearch(((_a = repository === null || repository === void 0 ? void 0 : repository.pulp_labels) === null || _a === void 0 ? void 0 : _a.hide_from_search) === '');
        }
        if (value === 'staging') {
            setSelectedPipeline(value);
            setPipeline(value);
            setHideFromSearch(true);
            setDisableHideFromSearch(true);
        }
        else if (value === 'approved') {
            setSelectedPipeline(value);
            setPipeline(value);
            setDisableHideFromSearch(false);
        }
        else {
            setSelectedPipeline('none');
            setPipeline(null);
            setDisableHideFromSearch(false);
        }
        setSelectOpen(false);
    };
    var selectOptions = {
        staging: { id: 'staging', toString: function () { return t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Staging"], ["Staging"]))); } },
        approved: { id: 'approved', toString: function () { return t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Approved"], ["Approved"]))); } },
        none: { id: 'none', toString: function () { return t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["None"], ["None"]))); } },
    };
    var pipelineHelp = (React.createElement(Trans, null,
        "Pipeline adds repository labels with pre-defined meanings:",
        React.createElement("ul", null,
            React.createElement("li", null,
                React.createElement("b", null, "None"),
                " - users require permissions to modify content in this repository to upload collection."),
            React.createElement("li", null,
                React.createElement("b", null, "Approved"),
                " - collections can be moved here on approval. Publishing directly to this repository is disabled."),
            React.createElement("li", null,
                React.createElement("b", null, "Staging"),
                " - collections uploaded here require approval before showing up on the search page. Anyone with upload permissions for a namespace can upload collections to this repository."))));
    var labelsHelp = (React.createElement(Trans, null,
        "Repository labels can change the context in which a repository is seen.",
        React.createElement("ul", null,
            React.createElement("li", null,
                React.createElement("b", null, "Hide from search"),
                " (",
                React.createElement("pre", { style: { display: 'inline-block' } }, "hide_from_search"),
                ") - prevent collections in this repository from showing up on the home page"),
            React.createElement("li", null,
                "(",
                React.createElement("pre", { style: { display: 'inline-block' } }, "pipeline: *"),
                ") - see Pipeline above"))));
    return (React.createElement(Form, null,
        stringField('name', t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["Name"], ["Name"])))),
        stringField('description', t(templateObject_5 || (templateObject_5 = __makeTemplateObject(["Description"], ["Description"])))),
        numericField('retain_repo_versions', t(templateObject_6 || (templateObject_6 = __makeTemplateObject(["Retained number of versions"], ["Retained number of versions"]))), t(templateObject_7 || (templateObject_7 = __makeTemplateObject(["In order to retain all versions, leave this field blank."], ["In order to retain all versions, leave this field blank."])))),
        formGroup('distributions', t(templateObject_8 || (templateObject_8 = __makeTemplateObject(["Distributions"], ["Distributions"]))), t(templateObject_9 || (templateObject_9 = __makeTemplateObject(["Content in repositories without a distribution will not be visible to clients for sync, download or search."], ["Content in repositories without a distribution will not be visible to clients for sync, download or search."]))), React.createElement(React.Fragment, null,
            React.createElement(LazyDistributions, { emptyText: t(templateObject_10 || (templateObject_10 = __makeTemplateObject(["None"], ["None"]))), repositoryHref: repository.pulp_href, onLoad: onDistributionsLoad }),
            React.createElement("br", null),
            React.createElement(Checkbox, { isChecked: createDistribution, isDisabled: disabledDistribution, onChange: function (value) { return setCreateDistribution(value); }, label: t(templateObject_11 || (templateObject_11 = __makeTemplateObject(["Create a \"", "\" distribution"], ["Create a \"", "\" distribution"])), repository.name), id: 'create_distribution' }))),
        formGroup('pipeline', t(templateObject_12 || (templateObject_12 = __makeTemplateObject(["Pipeline"], ["Pipeline"]))), pipelineHelp, React.createElement(Select, { variant: 'single', isOpen: selectOpen, onToggle: function () { return setSelectOpen(!selectOpen); }, onSelect: function (_e, value) { return selectPipeline(value.id); }, selections: selectOptions[selectedPipeline] }, Object.entries(selectOptions).map(function (_a) {
            var k = _a[0], v = _a[1];
            return (React.createElement(SelectOption, { key: k, value: v }));
        }))),
        formGroup('labels', t(templateObject_13 || (templateObject_13 = __makeTemplateObject(["Labels"], ["Labels"]))), labelsHelp, React.createElement(React.Fragment, null,
            React.createElement("div", { 
                // prevents "N more" clicks from submitting the form
                onClick: function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                } },
                React.createElement(PulpLabels, { labels: repository.pulp_labels })),
            React.createElement("div", { style: { marginTop: '12px' } },
                React.createElement(Checkbox, { isChecked: hideFromSearch, isDisabled: disableHideFromSearch, label: t(templateObject_14 || (templateObject_14 = __makeTemplateObject(["Hide from search"], ["Hide from search"]))), id: 'hide_from_search', onChange: function (value) { return setHideFromSearch(value); } })))),
        formGroup('private', t(templateObject_15 || (templateObject_15 = __makeTemplateObject(["Make private"], ["Make private"]))), t(templateObject_16 || (templateObject_16 = __makeTemplateObject(["Make the repository private."], ["Make the repository private."]))), React.createElement(Checkbox, { id: 'private', isChecked: repository.private, label: t(templateObject_17 || (templateObject_17 = __makeTemplateObject(["Make private"], ["Make private"]))), onChange: function (value) {
                return updateRepository(__assign(__assign({}, repository), { private: value }));
            } })),
        formGroup('remote', t(templateObject_18 || (templateObject_18 = __makeTemplateObject(["Remote"], ["Remote"]))), t(templateObject_19 || (templateObject_19 = __makeTemplateObject(["Setting a remote allows a repository to sync from elsewhere."], ["Setting a remote allows a repository to sync from elsewhere."]))), React.createElement(React.Fragment, null,
            remotes ? (React.createElement(APISearchTypeAhead, { loadResults: loadRemotes, onClear: function () { return updateRepository(__assign(__assign({}, repository), { remote: null })); }, onSelect: function (_event, value) {
                    var _a;
                    return updateRepository(__assign(__assign({}, repository), { remote: (_a = remotes.find(function (_a) {
                            var name = _a.name;
                            return name === value;
                        })) === null || _a === void 0 ? void 0 : _a.pulp_href }));
                }, placeholderText: t(templateObject_20 || (templateObject_20 = __makeTemplateObject(["Select a remote"], ["Select a remote"]))), results: remotes, selections: selectedRemote
                    ? [
                        {
                            name: selectedRemote.name,
                            id: selectedRemote.pulp_href,
                        },
                    ]
                    : [] })) : null,
            remotesError ? (React.createElement("span", { style: {
                    color: 'var(--pf-global--danger-color--200)',
                } }, t(templateObject_21 || (templateObject_21 = __makeTemplateObject(["Failed to load remotes: ", ""], ["Failed to load remotes: ", ""])), remotesError))) : null,
            !remotes && !remotesError ? React.createElement(Spinner, { size: 'sm' }) : null)),
        errorMessages['__nofield'] ? (React.createElement("span", { style: {
                color: 'var(--pf-global--danger-color--200)',
            } }, errorMessages['__nofield'])) : null,
        React.createElement(ActionGroup, { key: 'actions' },
            React.createElement(Button, { isDisabled: !isValid, key: 'confirm', variant: 'primary', onClick: function () {
                    return onSave({
                        createDistribution: createDistribution,
                        hideFromSearch: hideFromSearch,
                        pipeline: pipeline,
                    });
                } }, t(templateObject_22 || (templateObject_22 = __makeTemplateObject(["Save"], ["Save"])))),
            React.createElement(Button, { key: 'cancel', variant: 'link', onClick: onCancel }, t(templateObject_23 || (templateObject_23 = __makeTemplateObject(["Cancel"], ["Cancel"])))))));
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18, templateObject_19, templateObject_20, templateObject_21, templateObject_22, templateObject_23;
//# sourceMappingURL=ansible-repository-form.js.map