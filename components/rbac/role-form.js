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
import { Trans, t } from '@lingui/macro';
import { ActionGroup, Button, Divider, Form, FormGroup, InputGroup, Spinner, TextInput, Title, } from '@patternfly/react-core';
import React from 'react';
import { PermissionCategories } from 'src/components';
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
        var permissions = this.state.permissions;
        var _a = this.props, name = _a.name, onNameChange = _a.onNameChange, nameValidated = _a.nameValidated, nameHelperText = _a.nameHelperText, description = _a.description, descriptionValidated = _a.descriptionValidated, descriptionHelperText = _a.descriptionHelperText, onDescriptionChange = _a.onDescriptionChange, saveRole = _a.saveRole, cancelRole = _a.cancelRole, nameDisabled = _a.nameDisabled, isSavingDisabled = _a.isSavingDisabled, saving = _a.saving;
        return (React.createElement(React.Fragment, null,
            React.createElement(Form, null,
                React.createElement("div", null,
                    React.createElement("div", { style: { paddingBottom: '8px' } },
                        React.createElement(Title, { headingLevel: 'h2' }, t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Details"], ["Details"]))))),
                    React.createElement("div", { style: { display: 'flex', gap: '10px' } },
                        React.createElement(FormGroup, { isRequired: true, key: 'name', fieldId: 'name', label: t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Name"], ["Name"]))), style: { width: '50%', float: 'left' }, helperTextInvalid: nameHelperText, validated: nameValidated },
                            React.createElement(InputGroup, null,
                                React.createElement(TextInput, { id: 'role_name', isDisabled: nameDisabled, value: name, onChange: onNameChange, type: 'text', validated: nameValidated, placeholder: t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Role name"], ["Role name"]))) }))),
                        React.createElement(FormGroup, { isRequired: true, style: { width: '50%' }, key: 'description', fieldId: 'description', label: t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["Description"], ["Description"]))), helperTextInvalid: descriptionHelperText, validated: descriptionValidated },
                            React.createElement(TextInput, { id: 'role_description', value: description, onChange: onDescriptionChange, type: 'text', validated: descriptionValidated, placeholder: t(templateObject_5 || (templateObject_5 = __makeTemplateObject(["Add a role description here"], ["Add a role description here"]))) })))),
                React.createElement("div", null,
                    React.createElement("br", null),
                    React.createElement(Divider, null),
                    React.createElement("br", null),
                    React.createElement(Title, { headingLevel: 'h2' },
                        React.createElement(Trans, null, "Permissions")),
                    React.createElement(PermissionCategories, { permissions: permissions, setSelected: function (permissions) { return _this.setState({ permissions: permissions }); }, showCustom: false, showEmpty: true })),
                React.createElement(ActionGroup, null,
                    React.createElement(Button, { variant: 'primary', isDisabled: isSavingDisabled, onClick: function () { return saveRole(permissions); } }, t(templateObject_6 || (templateObject_6 = __makeTemplateObject(["Save"], ["Save"])))),
                    React.createElement(Button, { variant: 'secondary', onClick: cancelRole }, t(templateObject_7 || (templateObject_7 = __makeTemplateObject(["Cancel"], ["Cancel"])))),
                    saving ? React.createElement(Spinner, null) : null))));
    };
    return RoleForm;
}(React.Component));
export { RoleForm };
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
//# sourceMappingURL=role-form.js.map