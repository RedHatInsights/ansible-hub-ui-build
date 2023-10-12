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
import { ExecutionEnvironmentNamespaceAPI, GroupAPI, UserAPI, } from 'src/api';
import { AccessTab } from 'src/components';
import { AppContext } from 'src/loaders/app-context';
import { Paths, formatEEPath } from 'src/paths';
import { withRouter } from 'src/utilities';
import { ParamHelper, assignRoles, errorMessage } from 'src/utilities';
import { withContainerParamFix, withContainerRepo, } from './base';
import './execution-environment-detail.scss';
var ExecutionEnvironmentDetailAccess = /** @class */ (function (_super) {
    __extends(ExecutionEnvironmentDetailAccess, _super);
    function ExecutionEnvironmentDetailAccess(props) {
        var _this = _super.call(this, props) || this;
        var params = ParamHelper.parseParamString(_this.props.location.search);
        _this.state = {
            canEditOwners: false,
            groups: null,
            name: props.containerRepository.name,
            params: params,
            selectedGroup: null,
            selectedUser: null,
            showGroupRemoveModal: null,
            showGroupSelectWizard: null,
            showRoleRemoveModal: null,
            showRoleSelectWizard: null,
            showUserRemoveModal: null,
            showUserSelectWizard: null,
            users: null, // loading
        };
        return _this;
    }
    ExecutionEnvironmentDetailAccess.prototype.componentDidMount = function () {
        this.queryNamespace(this.props.containerRepository.namespace);
    };
    ExecutionEnvironmentDetailAccess.prototype.componentDidUpdate = function (prevProps) {
        var _this = this;
        if (prevProps.location.search !== this.props.location.search) {
            var params = ParamHelper.parseParamString(this.props.location.search);
            if (!params.group) {
                this.setState({
                    selectedGroup: null,
                });
            }
            if (!params.user) {
                this.setState({
                    selectedUser: null,
                });
            }
            this.setState({ params: params }, function () {
                return _this.queryNamespace(_this.props.containerRepository.namespace);
            });
        }
    };
    ExecutionEnvironmentDetailAccess.prototype.updateRoles = function (_a) {
        var _this = this;
        var roles = _a.roles, alertSuccess = _a.alertSuccess, alertFailure = _a.alertFailure, stateUpdate = _a.stateUpdate;
        var _b = this.props, addAlert = _b.addAlert, namespace = _b.containerRepository.namespace;
        Promise.all(roles)
            .then(function () {
            addAlert({
                title: alertSuccess,
                variant: 'success',
            });
            // ensure reload() sets users/groups: null to trigger loading spinner
            _this.queryNamespace(namespace);
        })
            .catch(function (_a) {
            var _b = _a.response, status = _b.status, statusText = _b.statusText;
            addAlert({
                title: alertFailure,
                variant: 'danger',
                description: errorMessage(status, statusText),
            });
        })
            .finally(function () {
            _this.setState(stateUpdate);
        });
    };
    ExecutionEnvironmentDetailAccess.prototype.render = function () {
        var _this = this;
        var _a = this.state, canEditOwners = _a.canEditOwners, groups = _a.groups, name = _a.name, selectedGroup = _a.selectedGroup, selectedUser = _a.selectedUser, users = _a.users;
        return (React.createElement("section", { className: 'body' },
            React.createElement(AccessTab, { canEditOwners: canEditOwners, group: selectedGroup, groups: groups, name: name, pulpObjectType: 'pulp_container/namespaces', selectRolesMessage: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["The selected roles will be added to this specific Execution Environment."], ["The selected roles will be added to this specific Execution Environment."]))), showGroupRemoveModal: this.state.showGroupRemoveModal, showGroupSelectWizard: this.state.showGroupSelectWizard, showRoleRemoveModal: this.state.showRoleRemoveModal, showRoleSelectWizard: this.state.showRoleSelectWizard, showUserRemoveModal: this.state.showUserRemoveModal, showUserSelectWizard: this.state.showUserSelectWizard, updateProps: function (prop) {
                    _this.setState(prop);
                }, urlPrefix: formatEEPath(Paths.executionEnvironmentDetailAccess, {
                    container: name,
                }), user: selectedUser, users: users, addUser: function (user, roles) {
                    var rolePromises = roles.map(function (role) {
                        return ExecutionEnvironmentNamespaceAPI.addRole(_this.props.containerRepository.namespace.id, {
                            role: role.name,
                            users: [user.username],
                        });
                    });
                    _this.updateRoles({
                        roles: rolePromises,
                        alertSuccess: t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["User \"", "\" has been successfully added to \"", "\"."], ["User \"", "\" has been successfully added to \"", "\"."])), user.username, name),
                        alertFailure: t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["User \"", "\" could not be added to \"", "\"."], ["User \"", "\" could not be added to \"", "\"."])), user.username, name),
                        stateUpdate: { showUserSelectWizard: null },
                    });
                }, removeUser: function (user) {
                    var roles = user.object_roles.map(function (role) {
                        return ExecutionEnvironmentNamespaceAPI.removeRole(_this.props.containerRepository.namespace.id, {
                            role: role,
                            users: [user.username],
                        });
                    });
                    _this.updateRoles({
                        roles: roles,
                        alertSuccess: t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["User \"", "\" has been successfully removed from \"", "\"."], ["User \"", "\" has been successfully removed from \"", "\"."])), user.username, name),
                        alertFailure: t(templateObject_5 || (templateObject_5 = __makeTemplateObject(["User \"", "\" could not be removed from \"", "\"."], ["User \"", "\" could not be removed from \"", "\"."])), user.username, name),
                        stateUpdate: { showUserRemoveModal: null },
                    });
                }, addGroup: function (group, roles) {
                    var rolePromises = roles.map(function (role) {
                        return ExecutionEnvironmentNamespaceAPI.addRole(_this.props.containerRepository.namespace.id, {
                            role: role.name,
                            groups: [group.name],
                        });
                    });
                    _this.updateRoles({
                        roles: rolePromises,
                        alertSuccess: t(templateObject_6 || (templateObject_6 = __makeTemplateObject(["Group \"", "\" has been successfully added to \"", "\"."], ["Group \"", "\" has been successfully added to \"", "\"."])), group.name, name),
                        alertFailure: t(templateObject_7 || (templateObject_7 = __makeTemplateObject(["Group \"", "\" could not be added to \"", "\"."], ["Group \"", "\" could not be added to \"", "\"."])), group.name, name),
                        stateUpdate: { showGroupSelectWizard: null },
                    });
                }, removeGroup: function (group) {
                    var roles = group.object_roles.map(function (role) {
                        return ExecutionEnvironmentNamespaceAPI.removeRole(_this.props.containerRepository.namespace.id, {
                            role: role,
                            groups: [group.name],
                        });
                    });
                    _this.updateRoles({
                        roles: roles,
                        alertSuccess: t(templateObject_8 || (templateObject_8 = __makeTemplateObject(["Group \"", "\" has been successfully removed from \"", "\"."], ["Group \"", "\" has been successfully removed from \"", "\"."])), group.name, name),
                        alertFailure: t(templateObject_9 || (templateObject_9 = __makeTemplateObject(["Group \"", "\" could not be removed from \"", "\"."], ["Group \"", "\" could not be removed from \"", "\"."])), group.name, name),
                        stateUpdate: { showGroupRemoveModal: null },
                    });
                }, addUserRole: function (user, roles) {
                    var rolePromises = roles.map(function (role) {
                        return ExecutionEnvironmentNamespaceAPI.addRole(_this.props.containerRepository.namespace.id, {
                            role: role.name,
                            users: [user.username],
                        });
                    });
                    _this.updateRoles({
                        roles: rolePromises,
                        alertSuccess: t(templateObject_10 || (templateObject_10 = __makeTemplateObject(["User \"", "\" roles successfully updated in \"", "\"."], ["User \"", "\" roles successfully updated in \"", "\"."])), user.username, name),
                        alertFailure: t(templateObject_11 || (templateObject_11 = __makeTemplateObject(["User \"", "\" roles could not be update in \"", "\"."], ["User \"", "\" roles could not be update in \"", "\"."])), user.username, name),
                        stateUpdate: { showRoleSelectWizard: null },
                    });
                }, removeUserRole: function (role, user) {
                    var removedRole = ExecutionEnvironmentNamespaceAPI.removeRole(_this.props.containerRepository.namespace.id, {
                        role: role,
                        users: [user.username],
                    });
                    _this.updateRoles({
                        roles: [removedRole],
                        alertSuccess: t(templateObject_12 || (templateObject_12 = __makeTemplateObject(["User \"", "\" roles successfully updated in \"", "\"."], ["User \"", "\" roles successfully updated in \"", "\"."])), user.username, name),
                        alertFailure: t(templateObject_13 || (templateObject_13 = __makeTemplateObject(["User \"", "\" roles could not be update in \"", "\"."], ["User \"", "\" roles could not be update in \"", "\"."])), user.username, name),
                        stateUpdate: { showRoleRemoveModal: null },
                    });
                }, addRole: function (group, roles) {
                    var rolePromises = roles.map(function (role) {
                        return ExecutionEnvironmentNamespaceAPI.addRole(_this.props.containerRepository.namespace.id, {
                            role: role.name,
                            groups: [group.name],
                        });
                    });
                    _this.updateRoles({
                        roles: rolePromises,
                        alertSuccess: t(templateObject_14 || (templateObject_14 = __makeTemplateObject(["Group \"", "\" roles successfully updated in \"", "\"."], ["Group \"", "\" roles successfully updated in \"", "\"."])), group.name, name),
                        alertFailure: t(templateObject_15 || (templateObject_15 = __makeTemplateObject(["Group \"", "\" roles could not be update in \"", "\"."], ["Group \"", "\" roles could not be update in \"", "\"."])), group.name, name),
                        stateUpdate: { showRoleSelectWizard: null },
                    });
                }, removeRole: function (role, group) {
                    var removedRole = ExecutionEnvironmentNamespaceAPI.removeRole(_this.props.containerRepository.namespace.id, {
                        role: role,
                        groups: [group.name],
                    });
                    _this.updateRoles({
                        roles: [removedRole],
                        alertSuccess: t(templateObject_16 || (templateObject_16 = __makeTemplateObject(["Group \"", "\" roles successfully updated in \"", "\"."], ["Group \"", "\" roles successfully updated in \"", "\"."])), group.name, name),
                        alertFailure: t(templateObject_17 || (templateObject_17 = __makeTemplateObject(["Group \"", "\" roles could not be update in \"", "\"."], ["Group \"", "\" roles could not be update in \"", "\"."])), group.name, name),
                        stateUpdate: { showRoleRemoveModal: null },
                    });
                } })));
    };
    ExecutionEnvironmentDetailAccess.prototype.querySelectedUser = function (username, users) {
        var _this = this;
        UserAPI.list({ username: username }).then(function (_a) {
            var data = _a.data.data;
            _this.setState({
                selectedUser: users.find(function (u) { return u.username === data[0].username; }),
            });
        });
    };
    ExecutionEnvironmentDetailAccess.prototype.querySelectedGroup = function (name, groups) {
        var _this = this;
        GroupAPI.list({ name: name }).then(function (_a) {
            var data = _a.data.data;
            _this.setState({
                selectedGroup: groups.find(function (g) { return g.name === data[0].name; }),
            });
        });
    };
    ExecutionEnvironmentDetailAccess.prototype.queryNamespace = function (_a) {
        var _this = this;
        var id = _a.id, name = _a.name;
        var hasPermission = this.context.hasPermission;
        Promise.all([
            ExecutionEnvironmentNamespaceAPI.myPermissions(id).then(function (_a) {
                var permissions = _a.data.permissions;
                return permissions;
            }),
            // TODO handle pagination
            ExecutionEnvironmentNamespaceAPI.listRoles(id, { page_size: 100 }).then(function (_a) {
                var roles = _a.data.roles;
                return roles;
            }),
        ])
            .then(function (_a) {
            var _b, _c;
            var permissions = _a[0], roles = _a[1];
            var _d = assignRoles(roles), users = _d.users, groups = _d.groups;
            _this.setState({
                name: name,
                canEditOwners: permissions.includes('container.change_containernamespace') ||
                    hasPermission('container.change_containernamespace'),
                groups: groups,
                users: users,
            });
            if ((_b = _this.state.params) === null || _b === void 0 ? void 0 : _b.user) {
                _this.querySelectedUser(_this.state.params.user, users);
            }
            if ((_c = _this.state.params) === null || _c === void 0 ? void 0 : _c.group) {
                _this.querySelectedGroup(_this.state.params.group, groups);
            }
        })
            .catch(function () {
            _this.setState({
                canEditOwners: false,
                groups: [],
                users: [],
            });
        });
    };
    return ExecutionEnvironmentDetailAccess;
}(React.Component));
ExecutionEnvironmentDetailAccess.contextType = AppContext;
export default withRouter(withContainerParamFix(withContainerRepo(ExecutionEnvironmentDetailAccess)));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17;
//# sourceMappingURL=execution_environment_detail_access.js.map