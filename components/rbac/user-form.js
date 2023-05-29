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
import { ActionGroup, Alert, Button, FormGroup, Label, Switch, TextInput, TextInputTypes, Tooltip, } from '@patternfly/react-core';
import React from 'react';
import { GroupAPI } from 'src/api';
import { APISearchTypeAhead, HelperText } from 'src/components';
import { DataForm } from 'src/components/shared/data-form';
import { AppContext } from 'src/loaders/app-context';
import { errorMessage } from 'src/utilities';
var UserForm = /** @class */ (function (_super) {
    __extends(UserForm, _super);
    function UserForm(props) {
        var _this = _super.call(this, props) || this;
        _this.clearGroups = function () {
            var newUser = __assign({}, _this.props.user);
            newUser.groups = [];
            _this.props.updateUser(newUser, _this.props.errorMessages);
        };
        _this.onSelectGroup = function (event, selection) {
            var user = _this.props.user;
            var newUser = __assign({}, user);
            var i = user.groups.findIndex(function (g) { return g.name === selection; });
            if (i === -1) {
                var addedGroup = _this.state.searchGroups.find(function (g) { return g.name === selection; });
                user.groups.push(addedGroup);
            }
            else {
                user.groups.splice(i, 1);
            }
            _this.props.updateUser(newUser, _this.props.errorMessages);
        };
        _this.loadGroups = function (name) {
            GroupAPI.list({ name__contains: name, page_size: 5 })
                .then(function (result) { return _this.setState({ searchGroups: result.data.data }); })
                .catch(function (e) {
                var _a = e.response, status = _a.status, statusText = _a.statusText;
                _this.setState({
                    formErrors: __assign(__assign({}, _this.state.formErrors), { groups: {
                            variant: 'danger',
                            title: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Groups list could not be displayed."], ["Groups list could not be displayed."]))),
                            description: errorMessage(status, statusText),
                        } }),
                });
            });
        };
        _this.updateField = function (value, event) {
            _this.updateUserFieldByName(value, event.target.id);
        };
        _this.state = {
            passwordConfirm: '',
            searchGroups: [],
            formErrors: {
                groups: null,
            },
        };
        return _this;
    }
    UserForm.prototype.componentDidMount = function () {
        this.loadGroups('');
    };
    UserForm.prototype.render = function () {
        var _this = this;
        var _a = this.props, user = _a.user, errorMessages = _a.errorMessages, isReadonly = _a.isReadonly, saveUser = _a.saveUser, onCancel = _a.onCancel, isNewUser = _a.isNewUser, isMe = _a.isMe;
        var _b = this.state, passwordConfirm = _b.passwordConfirm, formErrors = _b.formErrors;
        var minLength = this.context.settings.GALAXY_MINIMUM_PASSWORD_LENGTH || 9; // actually counts codepoints, close enough
        var formFields = [
            { id: 'username', title: t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Username"], ["Username"]))) },
            { id: 'first_name', title: t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["First name"], ["First name"]))) },
            { id: 'last_name', title: t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["Last name"], ["Last name"]))) },
            { id: 'email', title: t(templateObject_5 || (templateObject_5 = __makeTemplateObject(["Email"], ["Email"]))) },
            !isReadonly && {
                id: 'password',
                title: t(templateObject_6 || (templateObject_6 = __makeTemplateObject(["Password"], ["Password"]))),
                type: TextInputTypes.password,
                placeholder: isNewUser ? '' : '••••••••••••••••••••••',
                formGroupLabelIcon: (React.createElement(HelperText, { content: t(templateObject_7 || (templateObject_7 = __makeTemplateObject(["Create a password using at least ", " characters, including special characters , ex <!@$%>. Avoid using common names or expressions."], ["Create a password using at least ", " characters, including special characters , ex <!@$%>. Avoid using common names or expressions."])), minLength) })),
            },
        ];
        var requiredFields = __spreadArray(['username'], (isNewUser ? ['password'] : []), true);
        var passwordConfirmGroup = function () { return (React.createElement(FormGroup, { fieldId: 'password-confirm', helperTextInvalid: t(templateObject_8 || (templateObject_8 = __makeTemplateObject(["Passwords do not match"], ["Passwords do not match"]))), isRequired: isNewUser || !!user.password, key: 'confirm-group', label: t(templateObject_9 || (templateObject_9 = __makeTemplateObject(["Password confirmation"], ["Password confirmation"]))), validated: _this.toError(_this.isPassSame(user.password, passwordConfirm)) },
            React.createElement(TextInput, { placeholder: isNewUser ? '' : '••••••••••••••••••••••', validated: _this.toError(_this.isPassSame(user.password, passwordConfirm)), isDisabled: isReadonly, id: 'password-confirm', value: passwordConfirm, onChange: function (value) {
                    _this.setState({ passwordConfirm: value });
                }, type: 'password' }))); };
        var readonlyAuth = function () { return (React.createElement(FormGroup, { fieldId: 'auth_provider', key: 'readonlyAuth', label: t(templateObject_10 || (templateObject_10 = __makeTemplateObject(["Authentication provider"], ["Authentication provider"]))) }, user.auth_provider.map(function (provider) { return (React.createElement(Label, { key: provider }, provider)); }))); };
        var readonlyGroups = function () { return (React.createElement(FormGroup, { fieldId: 'groups', key: 'readonlyGroups', label: t(templateObject_11 || (templateObject_11 = __makeTemplateObject(["Groups"], ["Groups"]))), "data-cy": 'UserForm-readonly-groups' }, user.groups.map(function (group) { return (React.createElement(Label, { key: group.name }, group.name)); }))); };
        var editGroups = function () { return (React.createElement(FormGroup, { fieldId: 'groups', helperTextInvalid: errorMessages['groups'], key: 'editGroups', label: t(templateObject_12 || (templateObject_12 = __makeTemplateObject(["Groups"], ["Groups"]))), validated: _this.toError(!('groups' in errorMessages)) }, formErrors.groups ? (React.createElement(Alert, { title: formErrors.groups.title, variant: 'danger', isInline: true }, formErrors.groups.description)) : (React.createElement(APISearchTypeAhead, { results: _this.state.searchGroups, loadResults: _this.loadGroups, onSelect: _this.onSelectGroup, placeholderText: t(templateObject_13 || (templateObject_13 = __makeTemplateObject(["Select groups"], ["Select groups"]))), selections: user.groups, multiple: true, onClear: _this.clearGroups, isDisabled: isReadonly })))); };
        var superuserLabel = (React.createElement(FormGroup, { validated: this.toError(!('is_superuser' in errorMessages)), fieldId: 'is_superuser', key: 'superuserLabel', label: t(templateObject_14 || (templateObject_14 = __makeTemplateObject(["User type"], ["User type"]))), helperTextInvalid: errorMessages['is_superuser'], helperText: this.getSuperUserHelperText(user) },
            React.createElement(Tooltip, { content: t(templateObject_15 || (templateObject_15 = __makeTemplateObject(["Super users have all system permissions regardless of what groups they are in."], ["Super users have all system permissions regardless of what groups they are in."]))) },
                React.createElement(Switch, { isDisabled: !this.context.user.is_superuser ||
                        isReadonly ||
                        this.context.user.id === user.id, label: t(templateObject_16 || (templateObject_16 = __makeTemplateObject(["Super user"], ["Super user"]))), labelOff: t(templateObject_17 || (templateObject_17 = __makeTemplateObject(["Not a super user"], ["Not a super user"]))), isChecked: user.is_superuser, onChange: function () {
                        return _this.updateUserFieldByName(!user.is_superuser, 'is_superuser');
                    } }))));
        var formButtons = function () { return (React.createElement(ActionGroup, { key: 'actions' },
            React.createElement(Button, { type: 'submit', isDisabled: !_this.isPassValid(user.password, passwordConfirm) ||
                    !_this.requiredFilled(user) }, t(templateObject_18 || (templateObject_18 = __makeTemplateObject(["Save"], ["Save"])))),
            React.createElement(Button, { key: 'cancel', onClick: function () { return onCancel(); }, variant: 'link' }, t(templateObject_19 || (templateObject_19 = __makeTemplateObject(["Cancel"], ["Cancel"])))))); };
        var formSuffix = [
            !isReadonly && passwordConfirmGroup(),
            isMe || isReadonly ? readonlyGroups() : editGroups(),
            isMe && isReadonly && readonlyAuth(),
            superuserLabel,
            !isReadonly && formButtons(),
        ];
        return (React.createElement(DataForm, { errorMessages: errorMessages, formFields: formFields, formSuffix: React.createElement(React.Fragment, null, formSuffix), isReadonly: isReadonly, model: user, requiredFields: requiredFields, updateField: function (v, e) { return _this.updateField(v, e); }, onSave: function () { return saveUser(); } }));
    };
    UserForm.prototype.getSuperUserHelperText = function (user) {
        if (!this.context.user.is_superuser) {
            return t(templateObject_20 || (templateObject_20 = __makeTemplateObject(["Requires super user permissions to edit."], ["Requires super user permissions to edit."])));
        }
        if (this.context.user.id === user.id) {
            return t(templateObject_21 || (templateObject_21 = __makeTemplateObject(["Super users can't disable themselves."], ["Super users can't disable themselves."])));
        }
        return null;
    };
    UserForm.prototype.toError = function (validated) {
        if (validated) {
            return 'default';
        }
        else {
            return 'error';
        }
    };
    // confirm is empty, or matches password
    UserForm.prototype.isPassSame = function (pass, confirm) {
        return !confirm || pass === confirm;
    };
    // both passwords missing, or both match
    UserForm.prototype.isPassValid = function (pass, confirm) {
        return !(pass || confirm) || pass === confirm;
    };
    UserForm.prototype.requiredFilled = function (user) {
        if (this.props.isNewUser) {
            return !!user.password && !!user.username;
        }
        else {
            return !!user.username;
        }
    };
    UserForm.prototype.updateUserFieldByName = function (value, field) {
        var errorMessages = __assign({}, this.props.errorMessages);
        var update = __assign({}, this.props.user);
        update[field] = value;
        if (field in errorMessages) {
            delete errorMessages[field];
        }
        this.props.updateUser(update, errorMessages);
    };
    UserForm.defaultProps = {
        isReadonly: false,
    };
    UserForm.contextType = AppContext;
    return UserForm;
}(React.Component));
export { UserForm };
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18, templateObject_19, templateObject_20, templateObject_21;
//# sourceMappingURL=user-form.js.map