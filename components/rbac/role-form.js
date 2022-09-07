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
import { i18n } from '@lingui/core';
import { PermissionChipSelector } from 'src/components';
import { ActionGroup, Button, Flex, FlexItem, Form, TextInput, InputGroup, FormGroup, Title, Divider, Spinner, } from '@patternfly/react-core';
import { twoWayMapper } from 'src/utilities';
import { Constants } from 'src/constants';
var RoleForm = /** @class */ (function (_super) {
    __extends(RoleForm, _super);
    function RoleForm(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            permissions: [],
        };
        return _this;
    }
    RoleForm.prototype.componentDidMount = function () {
        if (this.props.originalPermissions) {
            this.setState({ permissions: this.props.originalPermissions });
        }
    };
    RoleForm.prototype.render = function () {
        var _this = this;
        var selectedPermissions = this.state.permissions;
        var _a = this.props, name = _a.name, onNameChange = _a.onNameChange, nameValidated = _a.nameValidated, nameHelperText = _a.nameHelperText, description = _a.description, descriptionValidated = _a.descriptionValidated, descriptionHelperText = _a.descriptionHelperText, onDescriptionChange = _a.onDescriptionChange, saveRole = _a.saveRole, cancelRole = _a.cancelRole, nameDisabled = _a.nameDisabled, isSavingDisabled = _a.isSavingDisabled, saving = _a.saving;
        var groups = Constants.PERMISSIONS;
        var filteredPermissions = __assign({}, Constants.HUMAN_PERMISSIONS);
        return (React.createElement(React.Fragment, null,
            React.createElement(Form, null,
                React.createElement("div", null,
                    React.createElement("div", { style: { paddingBottom: '8px' } },
                        React.createElement(Title, { headingLevel: 'h2' }, t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Details"], ["Details"]))))),
                    React.createElement("div", { style: { display: 'flex', gap: '10px' } },
                        React.createElement(FormGroup, { isRequired: true, key: 'name', fieldId: 'name', label: t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Name"], ["Name"]))), style: { width: '50%', float: 'left' }, helperTextInvalid: nameHelperText, validated: nameValidated },
                            React.createElement(InputGroup, null,
                                React.createElement(TextInput, { id: 'role_name', isDisabled: nameDisabled, value: name, onChange: onNameChange, type: 'text', validated: nameValidated, placeholder: 'Role name' }))),
                        React.createElement(FormGroup, { isRequired: true, style: { width: '50%' }, key: 'description', fieldId: 'description', label: t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Description"], ["Description"]))), helperTextInvalid: descriptionHelperText, validated: descriptionValidated },
                            React.createElement(TextInput, { id: 'role_description', value: description, onChange: onDescriptionChange, type: 'text', validated: descriptionValidated, placeholder: 'Add a role description here' })))),
                React.createElement("div", null,
                    React.createElement("br", null),
                    React.createElement(Divider, null),
                    React.createElement("br", null),
                    React.createElement(Title, { headingLevel: 'h2' }, "Permissions"),
                    groups.map(function (group) { return (React.createElement(Flex, { style: { marginTop: '16px' }, alignItems: { default: 'alignItemsCenter' }, key: group.name, className: group.name, "data-cy": "RoleForm-Permissions-row-".concat(group.name) },
                        React.createElement(FlexItem, { style: { minWidth: '200px' } }, i18n._(group.label)),
                        React.createElement(FlexItem, { grow: { default: 'grow' } },
                            React.createElement(PermissionChipSelector, { availablePermissions: group.object_permissions
                                    .filter(function (perm) {
                                    return !selectedPermissions.find(function (selected) { return selected === perm; });
                                })
                                    .map(function (value) { return twoWayMapper(value, filteredPermissions); })
                                    .sort(), selectedPermissions: selectedPermissions
                                    .filter(function (selected) {
                                    return group.object_permissions.find(function (perm) { return selected === perm; });
                                })
                                    .map(function (value) { return twoWayMapper(value, filteredPermissions); }), setSelected: function (perms) {
                                    return _this.setState({ permissions: perms });
                                }, menuAppendTo: 'inline', multilingual: true, isViewOnly: false, onClear: function () {
                                    var clearedPerms = group.object_permissions;
                                    _this.setState({
                                        permissions: _this.state.permissions.filter(function (x) { return !clearedPerms.includes(x); }),
                                    });
                                }, onSelect: function (event, selection) {
                                    var newPerms = new Set(_this.state.permissions);
                                    if (newPerms.has(twoWayMapper(selection, filteredPermissions))) {
                                        newPerms.delete(twoWayMapper(selection, filteredPermissions));
                                    }
                                    else {
                                        newPerms.add(twoWayMapper(selection, filteredPermissions));
                                    }
                                    _this.setState({
                                        permissions: Array.from(newPerms),
                                    });
                                } })))); })),
                React.createElement(ActionGroup, null,
                    React.createElement(Button, { variant: 'primary', isDisabled: isSavingDisabled, onClick: function () { return saveRole(selectedPermissions); } }, t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["Save"], ["Save"])))),
                    React.createElement(Button, { variant: 'secondary', onClick: cancelRole }, t(templateObject_5 || (templateObject_5 = __makeTemplateObject(["Cancel"], ["Cancel"])))),
                    saving ? React.createElement(Spinner, null) : null))));
    };
    return RoleForm;
}(React.Component));
export { RoleForm };
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
//# sourceMappingURL=role-form.js.map