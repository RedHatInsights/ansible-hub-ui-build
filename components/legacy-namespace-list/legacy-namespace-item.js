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
import { DataListCell, DataListItem, DataListItemCells, DataListItemRow, DropdownItem, } from '@patternfly/react-core';
import React from 'react';
import { Link } from 'react-router-dom';
import { Logo, StatefulDropdown } from 'src/components';
import { AppContext } from 'src/loaders/app-context';
import { Paths, formatPath } from 'src/paths';
import './legacy-namespace-item.scss';
var LegacyNamespaceListItem = /** @class */ (function (_super) {
    __extends(LegacyNamespaceListItem, _super);
    function LegacyNamespaceListItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LegacyNamespaceListItem.prototype.render = function () {
        var _this = this;
        var _a;
        var namespace = this.props.namespace;
        var namespace_url = formatPath(Paths.legacyNamespace, {
            namespaceid: namespace.id,
        });
        var cells = [];
        cells.push(React.createElement(DataListCell, { isFilled: false, alignRight: false, key: 'ns' },
            React.createElement(Logo, { alt: 'logo', fallbackToDefault: true, image: namespace.avatar_url, size: '40px', unlockWidth: true, width: '97px' })));
        cells.push(React.createElement(DataListCell, { key: 'content', size: 10 },
            React.createElement("div", null,
                React.createElement(Link, { to: namespace_url }, namespace.name))));
        var ai_deny_index = this.context.featureFlags.ai_deny_index;
        var summary_fields = namespace.summary_fields;
        var userOwnsLegacyNamespace = (_a = summary_fields === null || summary_fields === void 0 ? void 0 : summary_fields.owners) === null || _a === void 0 ? void 0 : _a.filter(function (n) { return n.username == _this.context.user.username; }).length;
        var showWisdom = ai_deny_index &&
            (this.context.user.is_superuser || userOwnsLegacyNamespace);
        var dropdownItems = [];
        dropdownItems.push(React.createElement(DropdownItem, { onClick: function () { return _this.props.openModal(namespace); } }, t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Ansible Lightspeed settings"], ["Ansible Lightspeed settings"])))));
        if (showWisdom) {
            cells.push(React.createElement(DataListCell, { key: 'menu', alignRight: true },
                React.createElement("div", { style: { float: 'right' } },
                    React.createElement(StatefulDropdown, { items: dropdownItems }))));
        }
        return (React.createElement(DataListItem, { "data-cy": 'LegacyNamespaceListItem' },
            React.createElement(DataListItemRow, null,
                React.createElement(DataListItemCells, { dataListCells: cells }))));
    };
    return LegacyNamespaceListItem;
}(React.Component));
export { LegacyNamespaceListItem };
LegacyNamespaceListItem.contextType = AppContext;
var templateObject_1;
//# sourceMappingURL=legacy-namespace-item.js.map