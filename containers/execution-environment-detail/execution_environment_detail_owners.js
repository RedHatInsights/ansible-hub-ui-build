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
import { withRouter } from 'react-router-dom';
import { ExecutionEnvironmentNamespaceAPI } from 'src/api';
import { OwnersTab } from 'src/components';
import { formatPath, Paths } from 'src/paths';
import { AppContext } from 'src/loaders/app-context';
import { ParamHelper } from 'src/utilities';
import './execution-environment-detail.scss';
import { withContainerRepo } from './base';
var ExecutionEnvironmentDetailOwners = /** @class */ (function (_super) {
    __extends(ExecutionEnvironmentDetailOwners, _super);
    function ExecutionEnvironmentDetailOwners(props) {
        var _this = _super.call(this, props) || this;
        var params = ParamHelper.parseParamString(_this.props.location.search);
        _this.state = {
            name: props.containerRepository.name,
            groups: null,
            canEditOwners: false,
            params: params,
        };
        return _this;
    }
    ExecutionEnvironmentDetailOwners.prototype.componentDidMount = function () {
        this.queryNamespace(this.props.containerRepository.name);
    };
    ExecutionEnvironmentDetailOwners.prototype.componentDidUpdate = function (prevProps) {
        if (prevProps.location.search !== this.props.location.search) {
            var params = ParamHelper.parseParamString(this.props.location.search);
            this.setState({ params: params });
        }
    };
    ExecutionEnvironmentDetailOwners.prototype.render = function () {
        var _this = this;
        var _a = this.state, name = _a.name, groups = _a.groups, params = _a.params, canEditOwners = _a.canEditOwners;
        var loadAll = function () {
            return _this.queryNamespace(_this.props.containerRepository.name);
        };
        return (React.createElement(OwnersTab, { canEditOwners: canEditOwners, addAlert: this.props.addAlert, groupId: params.group, groups: groups, name: name, pulpObjectType: 'pulp_container/namespaces', reload: loadAll, selectRolesMessage: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["The selected roles will be added to this specific Execution Environment."], ["The selected roles will be added to this specific Execution Environment."]))), updateGroups: function (groups) {
                return ExecutionEnvironmentNamespaceAPI.update(name, {
                    groups: groups,
                });
            }, urlPrefix: formatPath(Paths.executionEnvironmentDetailOwners, {
                container: name,
            }) }));
    };
    ExecutionEnvironmentDetailOwners.prototype.queryNamespace = function (name) {
        var _this = this;
        ExecutionEnvironmentNamespaceAPI.get(name).then(function (_a) {
            var _b = _a.data, groups = _b.groups, my_permissions = _b.my_permissions;
            return _this.setState({
                name: name,
                groups: groups,
                canEditOwners: my_permissions.includes('container.change_containernamespace') ||
                    _this.context.user.model_permissions.change_containernamespace,
            });
        });
    };
    return ExecutionEnvironmentDetailOwners;
}(React.Component));
ExecutionEnvironmentDetailOwners.contextType = AppContext;
export default withRouter(withContainerRepo(ExecutionEnvironmentDetailOwners));
var templateObject_1;
//# sourceMappingURL=execution_environment_detail_owners.js.map