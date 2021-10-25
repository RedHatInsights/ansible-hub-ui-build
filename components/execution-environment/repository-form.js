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
import { t } from '@lingui/macro';
import * as React from 'react';
import { Alert, Button, Form, FormGroup, InputGroup, Label, LabelGroup, Modal, Spinner, TextArea, TextInput, } from '@patternfly/react-core';
import { TagIcon } from '@patternfly/react-icons';
import { isEqual, isEmpty, xorWith, cloneDeep } from 'lodash';
import { APISearchTypeAhead, ObjectPermissionField } from 'src/components';
import { ContainerDistributionAPI, ExecutionEnvironmentNamespaceAPI, ExecutionEnvironmentRegistryAPI, ExecutionEnvironmentRemoteAPI, } from 'src/api';
import { Constants } from 'src/constants';
var RepositoryForm = /** @class */ (function (_super) {
    __extends(RepositoryForm, _super);
    function RepositoryForm(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            name: _this.props.name,
            description: _this.props.description,
            selectedGroups: [],
            originalSelectedGroups: [],
            addTagsInclude: '',
            addTagsExclude: '',
            excludeTags: _this.props.excludeTags,
            includeTags: _this.props.includeTags,
            registries: null,
            registrySelection: [],
            upstreamName: _this.props.upstreamName,
        };
        return _this;
    }
    RepositoryForm.prototype.componentDidMount = function () {
        var _this = this;
        if (this.props.isRemote) {
            this.loadRegistries().then(function () {
                // prefill registry if passed from props
                if (_this.props.registry) {
                    _this.setState({
                        registrySelection: _this.state.registries.filter(function (_a) {
                            var id = _a.id;
                            return id === _this.props.registry;
                        }),
                    });
                }
            });
        }
        if (!this.props.isNew) {
            this.loadSelectedGroups();
        }
    };
    RepositoryForm.prototype.render = function () {
        var _this = this;
        var _a = this.props, onSave = _a.onSave, onCancel = _a.onCancel, namespace = _a.namespace, isNew = _a.isNew, isRemote = _a.isRemote;
        var _b = this.state, name = _b.name, description = _b.description, selectedGroups = _b.selectedGroups, upstreamName = _b.upstreamName, excludeTags = _b.excludeTags, includeTags = _b.includeTags, registrySelection = _b.registrySelection, registries = _b.registries, addTagsInclude = _b.addTagsInclude, addTagsExclude = _b.addTagsExclude;
        return (React.createElement(Modal, { variant: 'large', onClose: onCancel, isOpen: true, title: isNew ? t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Add execution environment"], ["Add execution environment"]))) : t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Edit execution environment"], ["Edit execution environment"]))), actions: [
                React.createElement(Button, { key: 'save', variant: 'primary', onClick: function () { return onSave(_this.onSave()); } }, t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Save"], ["Save"])))),
                React.createElement(Button, { key: 'cancel', variant: 'link', onClick: onCancel }, t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["Cancel"], ["Cancel"])))),
            ] },
            React.createElement(Form, null,
                !isRemote ? (React.createElement(React.Fragment, null,
                    React.createElement(FormGroup, { key: 'name', fieldId: 'name', label: t(templateObject_5 || (templateObject_5 = __makeTemplateObject(["Name"], ["Name"]))) },
                        React.createElement(TextInput, { id: 'name', value: name, isDisabled: true, type: 'text' })),
                    React.createElement(FormGroup, { key: 'namespace', fieldId: 'namespace', label: t(templateObject_6 || (templateObject_6 = __makeTemplateObject(["Container namespace"], ["Container namespace"]))) },
                        React.createElement(TextInput, { id: 'namespace', value: namespace, isDisabled: true, type: 'text' })))) : (React.createElement(React.Fragment, null,
                    React.createElement(FormGroup, { key: 'name', fieldId: 'name', label: t(templateObject_7 || (templateObject_7 = __makeTemplateObject(["Name"], ["Name"]))) },
                        React.createElement(TextInput, { id: 'name', value: name, isDisabled: !isNew, onChange: function (value) { return _this.setState({ name: value }); } })),
                    React.createElement(FormGroup, { key: 'upstreamName', fieldId: 'upstreamName', label: t(templateObject_8 || (templateObject_8 = __makeTemplateObject(["Upstream name"], ["Upstream name"]))) },
                        React.createElement(TextInput, { id: 'upstreamName', value: upstreamName, onChange: function (value) { return _this.setState({ upstreamName: value }); } })),
                    React.createElement(FormGroup, { key: 'registry', fieldId: 'registry', label: t(templateObject_9 || (templateObject_9 = __makeTemplateObject(["Registry"], ["Registry"]))), className: 'hub-formgroup-registry' }, registries ? (React.createElement(APISearchTypeAhead, { loadResults: function (name) { return _this.loadRegistries(name); }, onClear: function () { return _this.setState({ registrySelection: [] }); }, onSelect: function (event, value) {
                            return _this.setState({
                                registrySelection: registries.filter(function (_a) {
                                    var name = _a.name;
                                    return name === value;
                                }),
                            });
                        }, placeholderText: t(templateObject_10 || (templateObject_10 = __makeTemplateObject(["Select a registry"], ["Select a registry"]))), results: registries, selections: registrySelection })) : (React.createElement(Spinner, null))),
                    React.createElement(FormGroup, { fieldId: 'addTagsInclude', label: t(templateObject_11 || (templateObject_11 = __makeTemplateObject(["Add tag(s) to include"], ["Add tag(s) to include"]))) },
                        React.createElement(InputGroup, null,
                            React.createElement(TextInput, { type: 'text', id: 'addTagsInclude', value: addTagsInclude, onChange: function (val) { return _this.setState({ addTagsInclude: val }); }, onKeyUp: function (e) {
                                    // l10n: don't translate
                                    if (e.key === 'Enter') {
                                        _this.addTags(addTagsInclude, 'includeTags');
                                    }
                                } }),
                            React.createElement(Button, { variant: 'secondary', onClick: function () { return _this.addTags(addTagsInclude, 'includeTags'); } }, t(templateObject_12 || (templateObject_12 = __makeTemplateObject(["Add"], ["Add"])))))),
                    React.createElement(FormGroup, { fieldId: 'currentTag', label: t(templateObject_13 || (templateObject_13 = __makeTemplateObject(["Currently included tags"], ["Currently included tags"]))) },
                        React.createElement(LabelGroup, { id: 'remove-tag', defaultIsOpen: true }, includeTags.map(function (tag) { return (React.createElement(Label, { icon: React.createElement(TagIcon, null), onClose: function () { return _this.removeTag(tag, 'includeTags'); }, key: tag }, tag)); }))),
                    React.createElement(FormGroup, { fieldId: 'addTagsExclude', label: t(templateObject_14 || (templateObject_14 = __makeTemplateObject(["Add tag(s) to exclude"], ["Add tag(s) to exclude"]))) },
                        React.createElement(InputGroup, null,
                            React.createElement(TextInput, { type: 'text', id: 'addTagsExclude', value: addTagsExclude, onChange: function (val) { return _this.setState({ addTagsExclude: val }); }, onKeyUp: function (e) {
                                    // l10n: don't translate
                                    if (e.key === 'Enter') {
                                        _this.addTags(addTagsExclude, 'excludeTags');
                                    }
                                } }),
                            React.createElement(Button, { variant: 'secondary', onClick: function () { return _this.addTags(addTagsExclude, 'excludeTags'); } }, t(templateObject_15 || (templateObject_15 = __makeTemplateObject(["Add"], ["Add"])))))),
                    React.createElement(FormGroup, { fieldId: 'currentTag', label: t(templateObject_16 || (templateObject_16 = __makeTemplateObject(["Currently excluded tags"], ["Currently excluded tags"]))) },
                        React.createElement(LabelGroup, { id: 'remove-tag', defaultIsOpen: true }, excludeTags.map(function (tag) { return (React.createElement(Label, { icon: React.createElement(TagIcon, null), onClose: function () { return _this.removeTag(tag, 'excludeTags'); }, key: tag }, tag)); }))),
                    includeTags.length && excludeTags.length ? (React.createElement(Alert, { variant: 'warning', isInline: true, title: t(templateObject_17 || (templateObject_17 = __makeTemplateObject(["It does not make sense to include and exclude tags at the same time."], ["It does not make sense to include and exclude tags at the same time."]))) })) : null)),
                React.createElement(FormGroup, { key: 'description', fieldId: 'description', label: t(templateObject_18 || (templateObject_18 = __makeTemplateObject(["Description"], ["Description"]))) },
                    React.createElement(TextArea, { id: 'description', value: description, isDisabled: !this.props.permissions.includes('container.namespace_change_containerdistribution'), onChange: function (value) { return _this.setState({ description: value }); }, type: 'text', resizeOrientation: 'vertical', autoResize: true })),
                React.createElement(FormGroup, { key: 'groups', fieldId: 'groups', label: t(templateObject_19 || (templateObject_19 = __makeTemplateObject(["Groups with access"], ["Groups with access"]))), className: 'hub-formgroup-groups' },
                    React.createElement("div", { className: 'pf-c-form__helper-text' }, t(templateObject_20 || (templateObject_20 = __makeTemplateObject(["Adding groups provides access to all repositories in the\n                \"", "\" container namespace."], ["Adding groups provides access to all repositories in the\n                \"", "\" container namespace."])), namespace)),
                    React.createElement(ObjectPermissionField, { groups: this.state.selectedGroups, availablePermissions: Constants.CONTAINER_NAMESPACE_PERMISSIONS, setGroups: function (g) { return _this.setState({ selectedGroups: g }); }, menuAppendTo: 'parent', isDisabled: !this.props.permissions.includes('container.change_containernamespace') })))));
    };
    RepositoryForm.prototype.loadRegistries = function (name) {
        var _this = this;
        return ExecutionEnvironmentRegistryAPI.list(__assign({}, (name ? { name__icontains: name } : {}))).then(function (_a) {
            var data = _a.data;
            var registries = data.data.map(function (_a) {
                var pk = _a.pk, name = _a.name;
                return ({ id: pk, name: name });
            });
            _this.setState({ registries: registries });
            return registries;
        });
    };
    RepositoryForm.prototype.loadSelectedGroups = function () {
        var _this = this;
        var namespace = this.props.namespace;
        return ExecutionEnvironmentNamespaceAPI.get(namespace).then(function (result) {
            return _this.setState({
                selectedGroups: cloneDeep(result.data.groups),
                originalSelectedGroups: result.data.groups,
            });
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
        var _a = this.props, originalDescription = _a.description, distributionPulpId = _a.distributionPulpId, isNew = _a.isNew, isRemote = _a.isRemote, originalName = _a.name, namespace = _a.namespace, remotePulpId = _a.remotePulpId;
        var _b = this.state, description = _b.description, exclude_tags = _b.excludeTags, include_tags = _b.includeTags, name = _b.name, _c = _b.registrySelection[0], _d = _c === void 0 ? { id: null } : _c, registry = _d.id, selectedGroups = _b.selectedGroups, originalSelectedGroups = _b.originalSelectedGroups, upstream_name = _b.upstreamName;
        if (isRemote && isNew) {
            return ExecutionEnvironmentRemoteAPI.create({
                name: name,
                upstream_name: upstream_name,
                registry: registry,
                include_tags: include_tags,
                exclude_tags: exclude_tags,
            });
        }
        return Promise.all([
            // remote edit - upstream, tags, registry
            isRemote &&
                !isNew &&
                ExecutionEnvironmentRemoteAPI.update(remotePulpId, {
                    name: originalName,
                    upstream_name: upstream_name,
                    registry: registry,
                    include_tags: include_tags,
                    exclude_tags: exclude_tags,
                }),
            // remote edit or local edit - description, if changed
            description !== originalDescription &&
                ContainerDistributionAPI.patch(distributionPulpId, { description: description }),
            // remote edit or local edit - groups, if changed
            !this.compareGroupsAndPerms(selectedGroups.sort(), originalSelectedGroups.sort()) &&
                ExecutionEnvironmentNamespaceAPI.update(namespace, {
                    groups: selectedGroups,
                }),
        ]);
    };
    //Compare groups and compare their permissions
    RepositoryForm.prototype.compareGroupsAndPerms = function (original, newOne) {
        var same = true;
        if (original.length === newOne.length) {
            original.forEach(function (x, index) {
                if (!isEmpty(xorWith(x.object_permissions.sort(), newOne[index].object_permissions.sort(), isEqual))) {
                    same = false;
                }
            });
        }
        return isEmpty(xorWith(original, newOne, isEqual)) && same;
    };
    return RepositoryForm;
}(React.Component));
export { RepositoryForm };
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18, templateObject_19, templateObject_20;
//# sourceMappingURL=repository-form.js.map