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
import { Modal } from '@patternfly/react-core';
import { Form, FormGroup } from '@patternfly/react-core';
import { Button, InputGroup, TextInput, Alert } from '@patternfly/react-core';
import { NamespaceAPI } from 'src/api';
import { HelperText, ObjectPermissionField } from 'src/components';
var NamespaceModal = /** @class */ (function (_super) {
    __extends(NamespaceModal, _super);
    function NamespaceModal(props) {
        var _this = _super.call(this, props) || this;
        _this.handleSubmit = function (event) {
            var data = {
                name: _this.state.newNamespaceName,
                groups: _this.state.newGroups,
            };
            NamespaceAPI.create(data)
                .then(function (results) {
                _this.toggleModal();
                _this.setState({
                    newNamespaceName: '',
                    newGroups: [],
                    errorMessages: {},
                });
                _this.props.onCreateSuccess(data);
            })
                .catch(function (error) {
                var result = error.response;
                var messages = _this.state.errorMessages;
                for (var _i = 0, _a = result.data.errors; _i < _a.length; _i++) {
                    var e = _a[_i];
                    messages[e.source.parameter] = e.detail;
                }
                _this.setState({
                    errorMessages: messages,
                    newNamespaceNameValid: !('name' in messages),
                });
            });
        };
        _this.toggleModal = _this.props.toggleModal;
        _this.state = {
            newNamespaceName: '',
            newNamespaceNameValid: true,
            newGroups: [],
            errorMessages: {},
            formErrors: {
                groups: null,
            },
        };
        return _this;
    }
    NamespaceModal.prototype.newNamespaceNameIsValid = function () {
        var error = this.state.errorMessages;
        var name = this.state.newNamespaceName;
        if (name == '') {
            error['name'] = t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Please, provide the namespace name"], ["Please, provide the namespace name"])));
        }
        else if (!/^[a-zA-Z0-9_]+$/.test(name)) {
            error['name'] = t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Name can only contain letters and numbers"], ["Name can only contain letters and numbers"])));
        }
        else if (name.length <= 2) {
            error['name'] = t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Name must be longer than 2 characters"], ["Name must be longer than 2 characters"])));
        }
        else if (name.startsWith('_')) {
            error['name'] = t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["Name cannot begin with '_'"], ["Name cannot begin with '_'"])));
        }
        else {
            delete error['name'];
        }
        this.setState({
            newNamespaceNameValid: !('name' in error),
            errorMessages: error,
        });
    };
    NamespaceModal.prototype.render = function () {
        var _this = this;
        var _a = this.state, newNamespaceName = _a.newNamespaceName, newGroups = _a.newGroups, newNamespaceNameValid = _a.newNamespaceNameValid, formErrors = _a.formErrors;
        return (React.createElement(Modal, { variant: 'medium', title: t(templateObject_5 || (templateObject_5 = __makeTemplateObject(["Create a new namespace"], ["Create a new namespace"]))), isOpen: this.props.isOpen, onClose: this.toggleModal, actions: [
                React.createElement(Button, { key: 'confirm', variant: 'primary', onClick: this.handleSubmit, isDisabled: !newNamespaceName || !newNamespaceNameValid }, t(templateObject_6 || (templateObject_6 = __makeTemplateObject(["Create"], ["Create"])))),
                React.createElement(Button, { key: 'cancel', variant: 'link', onClick: this.toggleModal }, t(templateObject_7 || (templateObject_7 = __makeTemplateObject(["Cancel"], ["Cancel"])))),
            ] },
            React.createElement(Form, null,
                React.createElement(FormGroup, { label: t(templateObject_8 || (templateObject_8 = __makeTemplateObject(["Name"], ["Name"]))), isRequired: true, fieldId: 'name', helperTextInvalid: this.state.errorMessages['name'], validated: this.toError(this.state.newNamespaceNameValid), labelIcon: React.createElement(HelperText, { content: t(templateObject_9 || (templateObject_9 = __makeTemplateObject(["Namespace names are limited to alphanumeric characters and underscores, must have a minimum length of 2 characters and cannot start with an \u2018_\u2019."], ["Namespace names are limited to alphanumeric characters and underscores, must have a minimum length of 2 characters and cannot start with an \u2018_\u2019."]))), header: t(templateObject_10 || (templateObject_10 = __makeTemplateObject(["Namespace name"], ["Namespace name"]))) }) },
                    React.createElement(InputGroup, null,
                        React.createElement(TextInput, { validated: this.toError(this.state.newNamespaceNameValid), isRequired: true, type: 'text', id: 'newNamespaceName', name: 'newNamespaceName', value: newNamespaceName, onChange: function (value) {
                                _this.setState({ newNamespaceName: value }, function () {
                                    _this.newNamespaceNameIsValid();
                                });
                            } }))),
                React.createElement(FormGroup, { label: t(templateObject_11 || (templateObject_11 = __makeTemplateObject(["Namespace owners"], ["Namespace owners"]))), fieldId: 'groups', helperTextInvalid: this.state.errorMessages['groups'] }, !!(formErrors === null || formErrors === void 0 ? void 0 : formErrors.groups) ? (React.createElement(Alert, { title: formErrors.groups.title, variant: 'danger', isInline: true }, formErrors.groups.description)) : (React.createElement(ObjectPermissionField, { availablePermissions: [
                        'change_namespace',
                        'upload_to_namespace',
                    ], groups: newGroups, setGroups: function (g) { return _this.setState({ newGroups: g }); }, menuAppendTo: 'parent', onError: function (err) {
                        return _this.setState({
                            formErrors: __assign(__assign({}, _this.state.formErrors), { groups: {
                                    title: t(templateObject_12 || (templateObject_12 = __makeTemplateObject(["Error loading groups."], ["Error loading groups."]))),
                                    description: err,
                                    variant: 'danger',
                                } }),
                        });
                    } }))))));
    };
    NamespaceModal.prototype.toError = function (validated) {
        if (validated) {
            return 'default';
        }
        else {
            return 'error';
        }
    };
    return NamespaceModal;
}(React.Component));
export { NamespaceModal };
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12;
//# sourceMappingURL=namespace-modal.js.map