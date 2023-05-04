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
import * as React from 'react';
import { ExecutionEnvironmentNamespaceAPI, GroupAPI, } from 'src/api';
import { AccessTab } from 'src/components';
import { AppContext } from 'src/loaders/app-context';
import { Paths, formatEEPath } from 'src/paths';
import { withRouter } from 'src/utilities';
import { ParamHelper, errorMessage } from 'src/utilities';
import { withContainerParamFix, withContainerRepo, } from './base';
import './execution-environment-detail.scss';
var ExecutionEnvironmentDetailAccess = /** @class */ (function (_super) {
    __extends(ExecutionEnvironmentDetailAccess, _super);
    function ExecutionEnvironmentDetailAccess(props) {
        var _this = _super.call(this, props) || this;
        var params = ParamHelper.parseParamString(_this.props.location.search);
        _this.state = {
            name: props.containerRepository.name,
            groups: null,
            canEditOwners: false,
            selectedGroup: null,
            params: params,
            showGroupRemoveModal: null,
            showGroupSelectWizard: null,
            showRoleRemoveModal: null,
            showRoleSelectWizard: null,
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
            if (!params['group']) {
                this.setState({
                    selectedGroup: null,
                });
            }
            this.setState({ params: params }, function () {
                return _this.queryNamespace(_this.props.containerRepository.namespace);
            });
        }
    };
    ExecutionEnvironmentDetailAccess.prototype.updateGroupRoles = function (_a) {
        var _this = this;
        var roles = _a.roles, alertSuccess = _a.alertSuccess, alertFailure = _a.alertFailure, stateUpdate = _a.stateUpdate;
        Promise.all(roles)
            .then(function () {
            _this.props.addAlert({
                title: alertSuccess,
                variant: 'success',
            });
            _this.queryNamespace(_this.props.containerRepository.namespace); // ensure reload() sets groups: null to trigger loading spinner
        })
            .catch(function (_a) {
            var _b = _a.response, status = _b.status, statusText = _b.statusText;
            _this.props.addAlert({
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
        var _a = this.state, name = _a.name, groups = _a.groups, canEditOwners = _a.canEditOwners, selectedGroup = _a.selectedGroup;
        return (React.createElement(AccessTab, { showGroupRemoveModal: this.state.showGroupRemoveModal, showGroupSelectWizard: this.state.showGroupSelectWizard, showRoleRemoveModal: this.state.showRoleRemoveModal, showRoleSelectWizard: this.state.showRoleSelectWizard, canEditOwners: canEditOwners, group: selectedGroup, groups: groups, name: name, pulpObjectType: 'pulp_container/namespaces', updateProps: function (prop) {
                _this.setState(prop);
            }, addGroup: function (group, roles) {
                var rolePromises = roles.map(function (role) {
                    return ExecutionEnvironmentNamespaceAPI.addRole(_this.props.containerRepository.namespace.id, {
                        role: role.name,
                        groups: [group.name],
                    });
                });
                _this.updateGroupRoles({
                    roles: rolePromises,
                    alertSuccess: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Group \"", "\" has been successfully added to \"", "\"."], ["Group \"", "\" has been successfully added to \"", "\"."])), group.name, name),
                    alertFailure: t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Group \"", "\" could not be added to \"", "\"."], ["Group \"", "\" could not be added to \"", "\"."])), group.name, name),
                    stateUpdate: { showGroupSelectWizard: null },
                });
            }, removeGroup: function (group) {
                var roles = group.object_roles.map(function (role) {
                    return ExecutionEnvironmentNamespaceAPI.removeRole(_this.props.containerRepository.namespace.id, {
                        role: role,
                        groups: [group.name],
                    });
                });
                _this.updateGroupRoles({
                    roles: roles,
                    alertSuccess: t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Group \"", "\" has been successfully removed from \"", "\"."], ["Group \"", "\" has been successfully removed from \"", "\"."])), group.name, name),
                    alertFailure: t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["Group \"", "\" could not be removed from \"", "\"."], ["Group \"", "\" could not be removed from \"", "\"."])), group.name, name),
                    stateUpdate: { showGroupRemoveModal: null },
                });
            }, addRole: function (group, roles) {
                var rolePromises = roles.map(function (role) {
                    return ExecutionEnvironmentNamespaceAPI.addRole(_this.props.containerRepository.namespace.id, {
                        role: role.name,
                        groups: [group.name],
                    });
                });
                _this.updateGroupRoles({
                    roles: rolePromises,
                    alertSuccess: t(templateObject_5 || (templateObject_5 = __makeTemplateObject(["Group \"", "\" roles successfully updated in \"", "\"."], ["Group \"", "\" roles successfully updated in \"", "\"."])), group.name, name),
                    alertFailure: t(templateObject_6 || (templateObject_6 = __makeTemplateObject(["Group \"", "\" roles could not be update in \"", "\"."], ["Group \"", "\" roles could not be update in \"", "\"."])), group.name, name),
                    stateUpdate: { showRoleSelectWizard: null },
                });
            }, removeRole: function (role, group) {
                var removedRole = ExecutionEnvironmentNamespaceAPI.removeRole(_this.props.containerRepository.namespace.id, {
                    role: role,
                    groups: [group.name],
                });
                _this.updateGroupRoles({
                    roles: [removedRole],
                    alertSuccess: t(templateObject_7 || (templateObject_7 = __makeTemplateObject(["Group \"", "\" roles successfully updated in \"", "\"."], ["Group \"", "\" roles successfully updated in \"", "\"."])), group.name, name),
                    alertFailure: t(templateObject_8 || (templateObject_8 = __makeTemplateObject(["Group \"", "\" roles could not be update in \"", "\"."], ["Group \"", "\" roles could not be update in \"", "\"."])), group.name, name),
                    stateUpdate: { showRoleRemoveModal: null },
                });
            }, selectRolesMessage: t(templateObject_9 || (templateObject_9 = __makeTemplateObject(["The selected roles will be added to this specific Execution Environment."], ["The selected roles will be added to this specific Execution Environment."]))), urlPrefix: formatEEPath(Paths.executionEnvironmentDetailAccess, {
                container: name,
            }) }));
    };
    ExecutionEnvironmentDetailAccess.prototype.assignRolesToGroup = function (roles) {
        var groupRoles = [];
        for (var _i = 0, roles_1 = roles; _i < roles_1.length; _i++) {
            var _a = roles_1[_i], groups = _a.groups, role = _a.role;
            var _loop_1 = function (name_1) {
                var groupIndex = groupRoles.findIndex(function (g) { return g.name === name_1; });
                if (groupIndex == -1) {
                    groupRoles.push({ name: name_1, object_roles: [role] });
                }
                else {
                    groupRoles[groupIndex].object_roles.push(role);
                }
            };
            for (var _b = 0, groups_1 = groups; _b < groups_1.length; _b++) {
                var name_1 = groups_1[_b];
                _loop_1(name_1);
            }
        }
        return groupRoles;
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
        var id = _a.id, repoName = _a.name;
        var hasPermission = this.context.hasPermission;
        ExecutionEnvironmentNamespaceAPI.myPermissions(id)
            .then(function (_a) {
            var permissions = _a.data.permissions;
            ExecutionEnvironmentNamespaceAPI.listRoles(id)
                .then(function (_a) {
                var _b;
                var roles = _a.data.roles;
                var groupRoles = _this.assignRolesToGroup(roles);
                _this.setState({
                    name: repoName,
                    groups: groupRoles,
                    canEditOwners: permissions.includes('container.change_containernamespace') ||
                        hasPermission('container.change_containernamespace'),
                });
                if ((_b = _this.state.params) === null || _b === void 0 ? void 0 : _b.group) {
                    _this.querySelectedGroup(_this.state.params.group, groupRoles);
                }
            })
                .catch(function () {
                _this.setState({
                    groups: [],
                });
            });
        })
            .catch(function () {
            _this.setState({
                groups: [],
                canEditOwners: false,
            });
        });
    };
    return ExecutionEnvironmentDetailAccess;
}(React.Component));
ExecutionEnvironmentDetailAccess.contextType = AppContext;
export default withRouter(withContainerParamFix(withContainerRepo(ExecutionEnvironmentDetailAccess)));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9;
//# sourceMappingURL=execution_environment_detail_access.js.map