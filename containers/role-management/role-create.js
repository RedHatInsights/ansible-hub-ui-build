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
import { t } from '@lingui/macro';
import React from 'react';
import { Navigate } from 'react-router-dom';
import { errorMessage, mapNetworkErrors, validateInput, withRouter, } from 'src/utilities';
import { EmptyStateUnauthorized, Main, RoleForm, RoleHeader, } from 'src/components';
import { Paths, formatPath } from 'src/paths';
import { AppContext } from 'src/loaders/app-context';
import { RoleAPI } from 'src/api/role';
var RoleCreate = /** @class */ (function (_super) {
    __extends(RoleCreate, _super);
    function RoleCreate(props) {
        var _this = _super.call(this, props) || this;
        _this.cancelRole = function () {
            _this.setState({
                errorMessages: {},
                redirect: formatPath(Paths.roleList),
            });
        };
        _this.createRole = function (permissions) {
            _this.setState({ saving: true }, function () {
                var _a = _this.state, name = _a.name, description = _a.description;
                RoleAPI.create({ name: name, description: description, permissions: permissions })
                    .then(function () {
                    return _this.setState({
                        redirect: formatPath(Paths.roleList),
                        errorMessages: null,
                    });
                })
                    .catch(function (err) {
                    var _a = err.response, status = _a.status, statusText = _a.statusText;
                    if (status === 400) {
                        var errors = mapNetworkErrors(err);
                        _this.setState({
                            saving: false,
                            errorMessages: errors,
                        });
                    }
                    else if (status === 404) {
                        _this.setState({
                            errorMessages: {},
                            alerts: _this.state.alerts.concat({
                                variant: 'danger',
                                title: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Role \"", "\" could not be created."], ["Role \"", "\" could not be created."])), _this.state.name),
                                description: errorMessage(status, statusText),
                            }),
                            saving: false,
                        });
                    }
                });
            });
        };
        _this.state = {
            saving: false,
            nameValidated: '',
            nameHelperText: '',
            errorMessages: {},
            permissions: [],
            name: '',
            description: '',
            alerts: [],
        };
        return _this;
    }
    RoleCreate.prototype.render = function () {
        var _this = this;
        if (this.state.redirect) {
            return React.createElement(Navigate, { to: this.state.redirect });
        }
        var _a = this.state, errorMessages = _a.errorMessages, description = _a.description, name = _a.name, saving = _a.saving;
        var notAuthorised = !this.context.user || this.context.user.is_anonymous;
        var breadcrumbs = [
            { url: formatPath(Paths.roleList), name: t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Roles"], ["Roles"]))) },
            { name: t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Create new role"], ["Create new role"]))) },
        ];
        return (React.createElement(React.Fragment, null,
            React.createElement(RoleHeader, { title: t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["Create a new role"], ["Create a new role"]))), breadcrumbs: breadcrumbs }),
            notAuthorised ? (React.createElement(EmptyStateUnauthorized, null)) : (React.createElement(Main, null,
                React.createElement("section", { className: 'body' },
                    React.createElement(RoleForm, { nameValidated: errorMessages['name'] ? 'error' : null, nameHelperText: errorMessages['name'], name: name, onNameChange: function (value) {
                            _this.setState({ name: value }, function () {
                                var errors = validateInput(value, 'name', _this.state.errorMessages);
                                _this.setState({ errorMessages: errors });
                            });
                        }, description: description, descriptionValidated: errorMessages['description'] ? 'error' : null, descriptionHelperText: errorMessages['description'], onDescriptionChange: function (value) {
                            _this.setState({ description: value }, function () {
                                var errors = validateInput(value, 'description', _this.state.errorMessages);
                                _this.setState({ errorMessages: errors });
                            });
                        }, saveRole: this.createRole, isSavingDisabled: 'description' in errorMessages || 'name' in errorMessages, cancelRole: this.cancelRole, saving: saving }))))));
    };
    return RoleCreate;
}(React.Component));
export default withRouter(RoleCreate);
RoleCreate.contextType = AppContext;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=role-create.js.map