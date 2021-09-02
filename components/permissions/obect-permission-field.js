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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import * as React from 'react';
import { Flex, FlexItem } from '@patternfly/react-core';
import { TrashIcon } from '@patternfly/react-icons';
import { GroupAPI } from 'src/api';
import { APISearchTypeAhead, PermissionChipSelector } from 'src/components';
import { twoWayMapper } from 'src/utilities';
import { Constants } from 'src/constants';
var ObjectPermissionField = /** @class */ (function (_super) {
    __extends(ObjectPermissionField, _super);
    function ObjectPermissionField(props) {
        var _this = _super.call(this, props) || this;
        _this.loadGroups = function (name) {
            GroupAPI.list({ name__contains: name }).then(function (result) {
                var added = _this.props.groups.map(function (group) { return group.name; });
                var groups = result.data.data.filter(function (group) { return !added.includes(group.name); });
                _this.setState({ searchGroups: groups });
            });
        };
        _this.onSelect = function (event, selection, isPlaceholder) {
            var newGroups = __spreadArray([], _this.props.groups, true);
            var addedGroup = _this.state.searchGroups.find(function (g) { return g.name === selection; });
            newGroups.push({
                id: addedGroup.id,
                name: addedGroup.name,
                object_permissions: _this.props.availablePermissions,
            });
            _this.props.setGroups(newGroups);
        };
        _this.state = {
            searchGroups: [],
        };
        return _this;
    }
    ObjectPermissionField.prototype.componentDidMount = function () {
        this.loadGroups('');
    };
    ObjectPermissionField.prototype.render = function () {
        var _this = this;
        var _a = this.props, groups = _a.groups, availablePermissions = _a.availablePermissions;
        return (React.createElement("div", null,
            React.createElement(APISearchTypeAhead, { results: this.state.searchGroups, loadResults: this.loadGroups, onSelect: this.onSelect, placeholderText: 'Find a group', menuAppendTo: this.props.menuAppendTo, isDisabled: !!this.props.isDisabled }),
            React.createElement("br", null),
            React.createElement("div", null, groups.map(function (group, i) { return (React.createElement(Flex, { style: { marginTop: '16px' }, alignItems: { default: 'alignItemsCenter' }, key: group.name },
                React.createElement(FlexItem, { style: { minWidth: '200px' } }, group.name),
                React.createElement(FlexItem, { grow: { default: 'grow' }, style: { width: '90%' } },
                    React.createElement(PermissionChipSelector, { availablePermissions: availablePermissions.map(function (perm) {
                            return twoWayMapper(perm, Constants.GROUP_HUMAN_PERMISSIONS);
                        }), selectedPermissions: group.object_permissions.map(function (perm) {
                            return twoWayMapper(perm, Constants.GROUP_HUMAN_PERMISSIONS);
                        }), setSelected: function (perms) { return _this.setPermissions(perms, group); }, menuAppendTo: _this.props.menuAppendTo })),
                React.createElement(FlexItem, null,
                    React.createElement(TrashIcon, { style: { cursor: 'pointer' }, onClick: function () { return _this.removeGroup(group); } })))); }))));
    };
    ObjectPermissionField.prototype.removeGroup = function (group) {
        var newGroups = [];
        for (var _i = 0, _a = this.props.groups; _i < _a.length; _i++) {
            var g = _a[_i];
            if (g.id !== group.id) {
                newGroups.push(g);
            }
        }
        this.props.setGroups(newGroups);
    };
    ObjectPermissionField.prototype.setPermissions = function (perms, group) {
        var newGroups = __spreadArray([], this.props.groups, true);
        var selectedGroup = newGroups.find(function (g) { return g.id === group.id; });
        selectedGroup.object_permissions = perms.map(function (perm) {
            return twoWayMapper(perm, Constants.GROUP_HUMAN_PERMISSIONS);
        });
        this.props.setGroups(newGroups);
    };
    return ObjectPermissionField;
}(React.Component));
export { ObjectPermissionField };
//# sourceMappingURL=obect-permission-field.js.map