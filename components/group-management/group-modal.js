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
import { Button, Form, FormGroup, Modal, TextInput, } from '@patternfly/react-core';
var GroupModal = /** @class */ (function (_super) {
    __extends(GroupModal, _super);
    function GroupModal(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            name: !_this.props.group || !_this.props.group.name
                ? ''
                : _this.props.group.name,
        };
        return _this;
    }
    GroupModal.prototype.render = function () {
        var _this = this;
        var _a = this.props, onCancel = _a.onCancel, onSave = _a.onSave, clearErrors = _a.clearErrors;
        return (React.createElement(Modal, { variant: 'small', onClose: function () {
                onCancel();
            }, isOpen: true, title: '', header: React.createElement("h2", null, "Create a group"), "aria-label": 'group-modal', actions: [
                React.createElement(Button, { isDisabled: this.state.name.length === 0 ||
                        (this.props.group && this.state.name === this.props.group.name), key: 'create', variant: 'primary', onClick: function () { return onSave(_this.state.name); } }, !this.props.group ? 'Create' : 'Save'),
                React.createElement(Button, { key: 'cancel', variant: 'link', onClick: function () { return onCancel(); } }, "Cancel"),
            ] },
            React.createElement(Form, { onSubmit: function (e) {
                    e.preventDefault();
                    onSave(_this.state.name);
                } },
                React.createElement(FormGroup, { isRequired: true, key: 'name', fieldId: 'name', label: 'Name', helperTextInvalid: !this.props.errorMessage ? null : this.props.errorMessage.name, validated: this.toError(!this.props.errorMessage) },
                    React.createElement(TextInput, { id: 'group_name', value: this.state.name, onChange: function (value) {
                            _this.setState({ name: value });
                            clearErrors();
                        }, type: 'text', validated: this.toError(!this.props.errorMessage) })))));
    };
    GroupModal.prototype.toError = function (validated) {
        return validated ? 'default' : 'error';
    };
    return GroupModal;
}(React.Component));
export { GroupModal };
//# sourceMappingURL=group-modal.js.map