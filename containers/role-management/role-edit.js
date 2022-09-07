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
import * as React from 'react';
import { parsePulpIDFromURL, errorMessage, } from 'src/utilities';
import { mapNetworkErrors, validateInput, } from 'src/containers/role-management/map-role-errors';
import { RoleAPI } from 'src/api/role';
import { withRouter, Redirect } from 'react-router-dom';
import { AlertList, closeAlertMixin, EmptyStateUnauthorized, LoadingPageWithHeader, Main, RoleForm, RoleHeader, } from 'src/components';
import { Paths } from 'src/paths';
import { AppContext } from 'src/loaders/app-context';
var EditRole = /** @class */ (function (_super) {
    __extends(EditRole, _super);
    function EditRole(props) {
        var _this = _super.call(this, props) || this;
        _this.nonQueryStringParams = ['role'];
        _this.cancelRole = function () {
            _this.setState({
                errorMessages: {},
                redirect: Paths.roleList,
            });
        };
        _this.editRole = function (permissions) {
            _this.setState({ saving: true }, function () {
                var pulp_href = _this.state.role.pulp_href;
                var roleID = parsePulpIDFromURL(pulp_href) + '/';
                var _a = _this.state, name = _a.name, description = _a.description;
                RoleAPI.updatePermissions(roleID, { name: name, description: description, permissions: permissions })
                    .then(function () { return _this.setState({ redirect: Paths.roleList }); })
                    .catch(function (err) {
                    var _a = err.response, status = _a.status, statusText = _a.statusText;
                    if (err.response.status === 400) {
                        var errors = mapNetworkErrors(err);
                        _this.setState({ saving: false, errorMessages: errors });
                    }
                    else if (status === 404) {
                        _this.setState({
                            errorMessages: {},
                            alerts: _this.state.alerts.concat({
                                variant: 'danger',
                                title: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Changes to role \"", "\" could not be saved."], ["Changes to role \"", "\" could not be saved."])), name),
                                description: errorMessage(status, statusText),
                            }),
                            saving: false,
                        });
                    }
                });
            });
        };
        var id = _this.props.match.params['role'];
        _this.state = {
            role: null,
            params: {
                id: id,
            },
            itemCount: 0,
            alerts: [],
            roleError: null,
            options: undefined,
            selected: [],
            editPermissions: false,
            showDeleteModal: false,
            nameError: false,
            permissions: [],
            originalPermissions: [],
            unauthorised: false,
            inputText: '',
            name: null,
            description: null,
            errorMessages: {},
            saving: false,
        };
        return _this;
    }
    EditRole.prototype.componentDidMount = function () {
        var _this = this;
        this.setState({ editPermissions: true });
        if (!this.context.user || this.context.user.is_anonymous) {
            this.setState({ unauthorised: true });
        }
        else {
            RoleAPI.get(this.state.params.id)
                .then(function (result) {
                _this.setState({
                    role: result.data,
                    description: result.data.description,
                    name: result.data.name,
                    originalPermissions: result.data.permissions,
                });
            })
                .catch(function (e) {
                var _a = e.response, status = _a.status, statusText = _a.statusText;
                _this.setState({ redirect: Paths.notFound });
                _this.addAlert(t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Role \"", "\" could not be displayed."], ["Role \"", "\" could not be displayed."])), _this.state.role.name), 'danger', errorMessage(status, statusText));
            });
        }
    };
    EditRole.prototype.render = function () {
        var _this = this;
        if (this.state.redirect) {
            return React.createElement(Redirect, { push: true, to: this.state.redirect });
        }
        var _a = this.state, name = _a.name, description = _a.description, alerts = _a.alerts, editPermissions = _a.editPermissions, role = _a.role, errorMessages = _a.errorMessages, unauthorised = _a.unauthorised, saving = _a.saving;
        if (!role && alerts && alerts.length) {
            return (React.createElement(AlertList, { alerts: alerts, closeAlert: function (i) { return _this.closeAlert(i); } }));
        }
        if (!role) {
            return React.createElement(LoadingPageWithHeader, null);
        }
        var breadcrumbs = [
            { url: Paths.roleList, name: t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Roles"], ["Roles"]))) },
            { name: role.name },
        ];
        return (React.createElement(React.Fragment, null,
            React.createElement(AlertList, { alerts: alerts, closeAlert: function (i) { return _this.closeAlert(i); } }),
            React.createElement(RoleHeader, { title: editPermissions ? t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["Edit role permissions"], ["Edit role permissions"]))) : role.name, subTitle: role.description, breadcrumbs: breadcrumbs }),
            unauthorised ? (React.createElement(EmptyStateUnauthorized, null)) : (React.createElement(Main, null,
                React.createElement("section", { className: 'body' },
                    React.createElement(RoleForm, __assign({}, this.state, { name: name, nameDisabled: true, description: description, descriptionHelperText: errorMessages['description'], descriptionValidated: errorMessages['description'] ? 'error' : null, onDescriptionChange: function (value) {
                            _this.setState({ description: value }, function () {
                                var errors = validateInput(value, 'description', _this.state.errorMessages);
                                _this.setState({ errorMessages: errors });
                            });
                        }, saving: saving, saveRole: this.editRole, isSavingDisabled: 'description' in errorMessages || 'name' in errorMessages, cancelRole: this.cancelRole })))))));
    };
    EditRole.prototype.addAlert = function (title, variant, description) {
        this.setState({
            alerts: __spreadArray(__spreadArray([], this.state.alerts, true), [
                {
                    description: description,
                    title: title,
                    variant: variant,
                },
            ], false),
        });
    };
    EditRole.prototype.toError = function (validated) {
        return validated ? 'default' : 'error';
    };
    Object.defineProperty(EditRole.prototype, "closeAlert", {
        get: function () {
            return closeAlertMixin('alerts');
        },
        enumerable: false,
        configurable: true
    });
    return EditRole;
}(React.Component));
export default withRouter(EditRole);
EditRole.contextType = AppContext;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=role-edit.js.map