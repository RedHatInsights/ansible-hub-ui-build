var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
import { Button, Form, FormGroup, InputGroup, Label, LabelGroup, Modal, Spinner, TextArea, TextInput, } from '@patternfly/react-core';
import { TagIcon } from '@patternfly/react-icons';
import React from 'react';
import { ContainerDistributionAPI, ExecutionEnvironmentRegistryAPI, ExecutionEnvironmentRemoteAPI, } from 'src/api';
import { APISearchTypeAhead, AlertList, HelperText, closeAlertMixin, } from 'src/components';
import { alertErrorsWithoutFields, chipGroupProps, errorMessage, isFieldValid, isFormValid, mapErrorMessages, } from 'src/utilities';
var RepositoryForm = /** @class */ (function (_super) {
    __extends(RepositoryForm, _super);
    function RepositoryForm(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            name: _this.props.name || '',
            description: _this.props.description,
            addTagsInclude: '',
            addTagsExclude: '',
            excludeTags: _this.props.excludeTags,
            includeTags: _this.props.includeTags,
            registries: null,
            registrySelection: [],
            upstreamName: _this.props.upstreamName || '',
            formErrors: {},
            alerts: [],
        };
        return _this;
    }
    RepositoryForm.prototype.componentDidMount = function () {
        var _this = this;
        if (this.props.isRemote) {
            this.loadRegistries()
                .then(function () {
                // prefill registry if passed from props
                if (_this.props.registry) {
                    _this.setState({
                        registrySelection: _this.state.registries.filter(function (_a) {
                            var id = _a.id;
                            return id === _this.props.registry;
                        }),
                    });
                }
            })
                .catch(function (e) {
                var _a = e.response, status = _a.status, statusText = _a.statusText;
                var errorTitle = t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Registries list could not be displayed."], ["Registries list could not be displayed."])));
                _this.addAlert({
                    variant: 'danger',
                    title: errorTitle,
                    description: errorMessage(status, statusText),
                });
                _this.setState({
                    formErrors: __assign(__assign({}, _this.state.formErrors), { registries: errorTitle }),
                });
            });
        }
    };
    RepositoryForm.prototype.render = function () {
        var _this = this;
        var _a = this.props, onSave = _a.onSave, onCancel = _a.onCancel, namespace = _a.namespace, isNew = _a.isNew, isRemote = _a.isRemote;
        var _b = this.state, name = _b.name, description = _b.description, upstreamName = _b.upstreamName, excludeTags = _b.excludeTags, includeTags = _b.includeTags, registrySelection = _b.registrySelection, registries = _b.registries, addTagsInclude = _b.addTagsInclude, addTagsExclude = _b.addTagsExclude, formErrors = _b.formErrors;
        return (React.createElement(Modal, { variant: 'large', onClose: onCancel, isOpen: true, title: isNew ? t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Add execution environment"], ["Add execution environment"]))) : t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Edit execution environment"], ["Edit execution environment"]))), actions: [
                React.createElement(Button, { key: 'save', variant: 'primary', isDisabled: !this.formIsValid(), onClick: function () { return onSave(_this.onSave(), _this.state); } }, t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["Save"], ["Save"])))),
                React.createElement(Button, { key: 'cancel', variant: 'link', onClick: onCancel }, t(templateObject_5 || (templateObject_5 = __makeTemplateObject(["Cancel"], ["Cancel"])))),
            ] },
            React.createElement(AlertList, { alerts: this.state.alerts, closeAlert: function (i) { return _this.closeAlert(i); } }),
            React.createElement(Form, null,
                !isRemote ? (React.createElement(React.Fragment, null,
                    React.createElement(FormGroup, { key: 'name', fieldId: 'name', label: t(templateObject_6 || (templateObject_6 = __makeTemplateObject(["Name"], ["Name"]))) },
                        React.createElement(TextInput, { id: 'name', value: name, isDisabled: true, type: 'text' })),
                    React.createElement(FormGroup, { key: 'namespace', fieldId: 'namespace', label: t(templateObject_7 || (templateObject_7 = __makeTemplateObject(["Container namespace"], ["Container namespace"]))) },
                        React.createElement(TextInput, { id: 'namespace', value: namespace, isDisabled: true, type: 'text' })))) : (React.createElement(React.Fragment, null,
                    React.createElement(FormGroup, { isRequired: true, key: 'name', fieldId: 'name', label: t(templateObject_8 || (templateObject_8 = __makeTemplateObject(["Name"], ["Name"]))), helperTextInvalid: this.state.formErrors['name'], validated: isFieldValid(this.state.formErrors, 'name') },
                        React.createElement(TextInput, { id: 'name', value: name, isDisabled: !isNew, onChange: function (value) {
                                _this.setState({ name: value });
                                _this.validateName(value);
                            }, validated: isFieldValid(this.state.formErrors, 'name') })),
                    React.createElement(FormGroup, { key: 'upstreamName', fieldId: 'upstreamName', label: t(templateObject_9 || (templateObject_9 = __makeTemplateObject(["Upstream name"], ["Upstream name"]))), isRequired: true, labelIcon: React.createElement(HelperText, { content: t(templateObject_10 || (templateObject_10 = __makeTemplateObject(["Use the namespace/name format for namespaced containers. Otherwise, use the library/name format."], ["Use the namespace/name format for namespaced containers. Otherwise, use the library/name format."]))) }) },
                        React.createElement(TextInput, { id: 'upstreamName', value: upstreamName, onChange: function (value) { return _this.setState({ upstreamName: value }); } })),
                    React.createElement(FormGroup, { key: 'registry', fieldId: 'registry', label: t(templateObject_11 || (templateObject_11 = __makeTemplateObject(["Registry"], ["Registry"]))), className: 'hub-formgroup-registry', isRequired: true, helperTextInvalid: this.state.formErrors['registries'] ||
                            this.state.formErrors['registry'], validated: isFieldValid(this.state.formErrors, [
                            'registries',
                            'registry',
                        ]) }, !(formErrors === null || formErrors === void 0 ? void 0 : formErrors.registries) && (React.createElement(React.Fragment, null, registries ? (React.createElement(APISearchTypeAhead, { loadResults: function (name) { return _this.loadRegistries(name); }, onClear: function () { return _this.setState({ registrySelection: [] }); }, onSelect: function (event, value) {
                            return _this.setState({
                                registrySelection: registries.filter(function (_a) {
                                    var name = _a.name;
                                    return name === value;
                                }),
                                formErrors: __assign(__assign({}, formErrors), { registry: null }),
                            });
                        }, placeholderText: t(templateObject_12 || (templateObject_12 = __makeTemplateObject(["Select a registry"], ["Select a registry"]))), results: registries, selections: registrySelection })) : (React.createElement(Spinner, null))))),
                    React.createElement(FormGroup, { fieldId: 'addTagsInclude', label: t(templateObject_13 || (templateObject_13 = __makeTemplateObject(["Add tag(s) to include"], ["Add tag(s) to include"]))) },
                        React.createElement(InputGroup, null,
                            React.createElement(TextInput, { type: 'text', id: 'addTagsInclude', value: addTagsInclude, onChange: function (val) { return _this.setState({ addTagsInclude: val }); }, onKeyUp: function (e) {
                                    // l10n: don't translate
                                    if (e.key === 'Enter') {
                                        _this.addTags(addTagsInclude, 'includeTags');
                                    }
                                } }),
                            React.createElement(Button, { variant: 'secondary', onClick: function () { return _this.addTags(addTagsInclude, 'includeTags'); } }, t(templateObject_14 || (templateObject_14 = __makeTemplateObject(["Add"], ["Add"])))))),
                    React.createElement(FormGroup, { fieldId: 'currentTag', label: t(templateObject_15 || (templateObject_15 = __makeTemplateObject(["Currently included tags"], ["Currently included tags"]))) },
                        React.createElement(LabelGroup, __assign({}, chipGroupProps(), { id: 'remove-tag', defaultIsOpen: true }), includeTags.map(function (tag) { return (React.createElement(Label, { icon: React.createElement(TagIcon, null), onClose: function () { return _this.removeTag(tag, 'includeTags'); }, key: tag }, tag)); }))),
                    React.createElement(FormGroup, { fieldId: 'addTagsExclude', label: t(templateObject_16 || (templateObject_16 = __makeTemplateObject(["Add tag(s) to exclude"], ["Add tag(s) to exclude"]))) },
                        React.createElement(InputGroup, null,
                            React.createElement(TextInput, { type: 'text', id: 'addTagsExclude', value: addTagsExclude, onChange: function (val) { return _this.setState({ addTagsExclude: val }); }, onKeyUp: function (e) {
                                    // l10n: don't translate
                                    if (e.key === 'Enter') {
                                        _this.addTags(addTagsExclude, 'excludeTags');
                                    }
                                } }),
                            React.createElement(Button, { variant: 'secondary', onClick: function () { return _this.addTags(addTagsExclude, 'excludeTags'); } }, t(templateObject_17 || (templateObject_17 = __makeTemplateObject(["Add"], ["Add"])))))),
                    React.createElement(FormGroup, { fieldId: 'currentTag', label: t(templateObject_18 || (templateObject_18 = __makeTemplateObject(["Currently excluded tags"], ["Currently excluded tags"]))) },
                        React.createElement(LabelGroup, __assign({}, chipGroupProps(), { id: 'remove-tag', defaultIsOpen: true }), excludeTags.map(function (tag) { return (React.createElement(Label, { icon: React.createElement(TagIcon, null), onClose: function () { return _this.removeTag(tag, 'excludeTags'); }, key: tag }, tag)); }))))),
                React.createElement(FormGroup, { key: 'description', fieldId: 'description', label: t(templateObject_19 || (templateObject_19 = __makeTemplateObject(["Description"], ["Description"]))) },
                    React.createElement(TextArea, { id: 'description', value: description || '', isDisabled: !this.props.permissions.includes('container.namespace_change_containerdistribution'), onChange: function (value) { return _this.setState({ description: value }); }, type: 'text', resizeOrientation: 'vertical', autoResize: true })))));
    };
    RepositoryForm.prototype.validateName = function (name) {
        var regex = /^([0-9A-Za-z._-]+\/)?[0-9A-Za-z._-]+$/;
        if (name === '' || regex.test(name)) {
            this.setState({ formErrors: __assign(__assign({}, this.state.formErrors), { name: null }) });
            return;
        }
        else {
            var error = t(templateObject_20 || (templateObject_20 = __makeTemplateObject(["Container names can only contain alphanumeric characters, \".\", \"_\", \"-\" and a up to one \"/\"."], ["Container names can only contain alphanumeric characters, \".\", \"_\", \"-\" and a up to one \"/\"."])));
            this.setState({ formErrors: __assign(__assign({}, this.state.formErrors), { name: error }) });
        }
    };
    RepositoryForm.prototype.formIsValid = function () {
        var _a = this.state, name = _a.name, upstreamName = _a.upstreamName, registrySelection = _a.registrySelection;
        if (!this.props.isRemote) {
            // no validation for local
            return true;
        }
        if (!isFormValid(this.state.formErrors)) {
            return false;
        }
        // validation for non empty fields
        return name && upstreamName && registrySelection.length;
    };
    RepositoryForm.prototype.loadRegistries = function (name) {
        var _this = this;
        return ExecutionEnvironmentRegistryAPI.list(__assign({}, (name ? { name__icontains: name } : {}))).then(function (_a) {
            var data = _a.data;
            var registries = data.data.map(function (_a) {
                var id = _a.id, name = _a.name;
                return ({ id: id, name: name });
            });
            _this.setState({ registries: registries });
            return registries;
        });
    };
    RepositoryForm.prototype.addTags = function (tags, key) {
        var _a;
        var current = new Set(this.state[key]);
        tags.split(/\s+|\s*,\s*/).forEach(function (tag) { return current.add(tag); });
        this.setState((_a = {},
            _a[key] = Array.from(current.values()),
            _a[key === 'includeTags' ? 'addTagsInclude' : 'addTagsExclude'] = '',
            _a));
    };
    RepositoryForm.prototype.removeTag = function (tag, key) {
        var _a;
        var current = new Set(this.state[key]);
        current.delete(tag);
        this.setState((_a = {},
            _a[key] = Array.from(current.values()),
            _a));
    };
    RepositoryForm.prototype.onSave = function () {
        var _this = this;
        var _a = this.props, originalDescription = _a.description, distributionPulpId = _a.distributionPulpId, isNew = _a.isNew, isRemote = _a.isRemote, originalName = _a.name, remoteId = _a.remoteId;
        var _b = this.state, description = _b.description, exclude_tags = _b.excludeTags, include_tags = _b.includeTags, name = _b.name, _c = _b.registrySelection[0], _d = _c === void 0 ? { id: null } : _c, registry = _d.id, upstream_name = _b.upstreamName;
        var promise = null;
        if (isRemote && isNew) {
            promise = ExecutionEnvironmentRemoteAPI.create({
                name: name,
                upstream_name: upstream_name,
                registry: registry,
                include_tags: include_tags,
                exclude_tags: exclude_tags,
            });
        }
        else {
            promise = Promise.all([
                // remote edit - upstream, tags, registry
                isRemote &&
                    !isNew &&
                    ExecutionEnvironmentRemoteAPI.update(remoteId, {
                        name: originalName,
                        upstream_name: upstream_name,
                        registry: registry,
                        include_tags: include_tags,
                        exclude_tags: exclude_tags,
                    }),
                // remote edit or local edit - description, if changed
                description !== originalDescription &&
                    ContainerDistributionAPI.patch(distributionPulpId, { description: description }),
            ]);
        }
        return promise.catch(function (e) {
            _this.setState({ formErrors: mapErrorMessages(e) });
            alertErrorsWithoutFields(_this.state.formErrors, ['name', 'registry', 'registries'], function (alert) { return _this.addAlert(alert); }, t(templateObject_21 || (templateObject_21 = __makeTemplateObject(["Error when saving registry."], ["Error when saving registry."]))), function (state) { return _this.setState({ formErrors: state }); });
            return Promise.reject(new Error(e));
        });
    };
    RepositoryForm.prototype.addAlert = function (alert) {
        this.setState({
            alerts: __spreadArray(__spreadArray([], this.state.alerts, true), [alert], false),
        });
    };
    Object.defineProperty(RepositoryForm.prototype, "closeAlert", {
        get: function () {
            return closeAlertMixin('alerts');
        },
        enumerable: false,
        configurable: true
    });
    return RepositoryForm;
}(React.Component));
export { RepositoryForm };
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18, templateObject_19, templateObject_20, templateObject_21;
//# sourceMappingURL=repository-form.js.map