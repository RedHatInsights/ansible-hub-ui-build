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
import * as React from 'react';
import { Button, Form, FormGroup, Modal, TextInput, TextArea, } from '@patternfly/react-core';
import { ObjectPermissionField } from 'src/components';
import { Constants } from 'src/constants';
var RepositoryForm = /** @class */ (function (_super) {
    __extends(RepositoryForm, _super);
    function RepositoryForm(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            description: _this.props.description,
            selectedGroups: _this.props.selectedGroups,
        };
        return _this;
    }
    RepositoryForm.prototype.render = function () {
        var _this = this;
        var _a = this.props, name = _a.name, onSave = _a.onSave, onCancel = _a.onCancel, namespace = _a.namespace;
        var _b = this.state, description = _b.description, selectedGroups = _b.selectedGroups;
        return (React.createElement(Modal, { variant: 'large', onClose: onCancel, isOpen: true, title: 'Edit repository', actions: [
                React.createElement(Button, { key: 'save', variant: 'primary', onClick: function () { return onSave(description, selectedGroups); } }, "Save"),
                React.createElement(Button, { key: 'cancel', variant: 'link', onClick: onCancel }, "Cancel"),
            ] },
            React.createElement(Form, null,
                React.createElement(FormGroup, { key: 'name', fieldId: 'name', label: 'Name' },
                    React.createElement(TextInput, { id: 'name', value: name, isDisabled: true, type: 'text' })),
                React.createElement(FormGroup, { key: 'name', fieldId: 'name', label: 'Container namespace' },
                    React.createElement(TextInput, { id: 'name', value: namespace, isDisabled: true, type: 'text' })),
                React.createElement(FormGroup, { key: 'description', fieldId: 'description', label: 'Description' },
                    React.createElement(TextArea, { id: 'description', value: description, isDisabled: !this.props.permissions.includes('container.namespace_change_containerdistribution'), onChange: function (value) { return _this.setState({ description: value }); }, type: 'text', resizeOrientation: 'vertical', autoResize: true })),
                React.createElement(FormGroup, { key: 'groups', fieldId: 'groups', label: 'Groups with access' },
                    React.createElement("div", { className: 'pf-c-form__helper-text' },
                        "Adding groups provides access to all repositories in the \"",
                        namespace,
                        "\" container namespace."),
                    React.createElement(ObjectPermissionField, { groups: this.state.selectedGroups, availablePermissions: Constants.CONTAINER_NAMESPACE_PERMISSIONS, setGroups: function (g) { return _this.setState({ selectedGroups: g }); }, menuAppendTo: 'parent', isDisabled: !this.props.permissions.includes('container.change_containernamespace') })))));
    };
    return RepositoryForm;
}(React.Component));
export { RepositoryForm };
//# sourceMappingURL=repository-form.js.map