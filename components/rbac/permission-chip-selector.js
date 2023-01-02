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
import { Label, LabelGroup, Select, SelectOption, SelectVariant, } from '@patternfly/react-core';
import { AppContext } from 'src/loaders/app-context';
var PermissionChipSelector = /** @class */ (function (_super) {
    __extends(PermissionChipSelector, _super);
    function PermissionChipSelector(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { isOpen: false };
        return _this;
    }
    PermissionChipSelector.prototype.render = function () {
        var _this = this;
        var model_permissions = this.context.user.model_permissions;
        var _a = this.props, availablePermissions = _a.availablePermissions, isDisabled = _a.isDisabled, isViewOnly = _a.isViewOnly, onCategoryClear = _a.onCategoryClear, onPermissionToggle = _a.onPermissionToggle, selectedPermissions = _a.selectedPermissions;
        var isOpen = this.state.isOpen;
        if (isViewOnly) {
            var items = selectedPermissions.map(function (permission) {
                var _a;
                return ({
                    label: ((_a = model_permissions[permission]) === null || _a === void 0 ? void 0 : _a.name) || permission,
                    value: permission,
                });
            });
            return (React.createElement(LabelGroup, null,
                items.length ? null : (React.createElement(Label, { key: 'placeholder' }, t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["No permission"], ["No permission"]))))),
                items.map(function (text) { return (React.createElement(Label, { key: text.value, title: text.value }, text.label)); })));
        }
        // { value: 'galaxy.foo', toString: () => "View foo (translated)" }
        var selections = selectedPermissions.map(function (permission) { return ({
            value: permission,
            toString: function () { var _a; return ((_a = model_permissions[permission]) === null || _a === void 0 ? void 0 : _a.name) || permission; },
        }); });
        return (React.createElement(Select, { menuAppendTo: 'inline', variant: SelectVariant.typeaheadMulti, typeAheadAriaLabel: t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Select permissions"], ["Select permissions"]))), onToggle: function (isOpen) { return _this.setState({ isOpen: isOpen }); }, onSelect: function (event, permission) {
                return onPermissionToggle(permission['value'] || permission);
            }, onClear: function () { return onCategoryClear(); }, selections: selections, isOpen: isOpen, placeholderText: !isDisabled && !isViewOnly
                ? t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Select permissions"], ["Select permissions"]))) : selectedPermissions.length === 0
                ? t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["No permission"], ["No permission"]))) : '', isDisabled: !!isDisabled }, availablePermissions.length === 0
            ? [
                React.createElement(SelectOption, { isDisabled: true, key: 'not_found', value: t(templateObject_5 || (templateObject_5 = __makeTemplateObject(["Not found"], ["Not found"]))) }),
            ]
            : availablePermissions.map(function (permission) {
                var _a;
                return (React.createElement(SelectOption, { key: permission, value: permission }, ((_a = model_permissions[permission]) === null || _a === void 0 ? void 0 : _a.name) || permission));
            })));
    };
    PermissionChipSelector.contextType = AppContext;
    return PermissionChipSelector;
}(React.Component));
export { PermissionChipSelector };
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
//# sourceMappingURL=permission-chip-selector.js.map