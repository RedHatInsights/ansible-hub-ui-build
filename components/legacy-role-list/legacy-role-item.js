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
import * as React from 'react';
import { t, Trans } from '@lingui/macro';
import './legacy-role-item.scss';
import { DataListItem, DataListItemRow, DataListItemCells, DataListCell, LabelGroup, TextContent, Text, TextVariants, } from '@patternfly/react-core';
import { Link } from 'react-router-dom';
import { Paths, formatPath } from 'src/paths';
import { Tag, Logo, DateComponent } from 'src/components';
var LegacyRoleListItem = /** @class */ (function (_super) {
    __extends(LegacyRoleListItem, _super);
    function LegacyRoleListItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LegacyRoleListItem.prototype.render = function () {
        var _a = this.props, role = _a.role, show_thumbnail = _a.show_thumbnail;
        var namespace = role.summary_fields.namespace;
        var role_url = formatPath(Paths.legacyRole, {
            username: role.github_user,
            name: role.name,
        });
        var namespace_url = formatPath(Paths.legacyNamespace, {
            namespaceid: namespace.id,
        });
        var release_date = null;
        var release_name = null;
        var lv = role.summary_fields.versions[0];
        if (lv !== undefined && lv !== null) {
            release_date = lv.release_date;
            release_name = lv.name;
        }
        if (release_date === undefined ||
            release_date === null ||
            release_date === '') {
            release_date = role.modified;
        }
        if (release_name === undefined ||
            release_name === null ||
            release_name === '') {
            release_name = '';
        }
        var cells = [];
        if (show_thumbnail !== false) {
            cells.push(React.createElement(DataListCell, { isFilled: false, alignRight: false, key: 'ns' },
                React.createElement(Logo, { alt: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["role.github_user logo"], ["role.github_user logo"]))), image: role.summary_fields.namespace.avatar_url, size: '70px', unlockWidth: true, width: '97px' })));
        }
        cells.push(React.createElement(DataListCell, { key: 'content' },
            React.createElement("div", null,
                React.createElement(Link, { to: role_url },
                    namespace.name,
                    ".",
                    role.name),
                React.createElement(TextContent, null,
                    React.createElement(Text, { component: TextVariants.small },
                        React.createElement(Trans, null,
                            "Provided by ",
                            React.createElement(Link, { to: namespace_url }, namespace.name))))),
            React.createElement("div", { className: 'hub-entry' }, role.description),
            React.createElement("div", { className: 'hub-entry' },
                React.createElement(LabelGroup, null, role.summary_fields.tags.map(function (tag, index) { return (React.createElement(Tag, { key: index }, tag)); })))));
        cells.push(React.createElement(DataListCell, { isFilled: false, alignRight: true, key: 'stats' },
            React.createElement("div", { className: 'hub-right-col hub-entry' },
                React.createElement(Trans, null,
                    "Updated ",
                    React.createElement(DateComponent, { date: release_date }))),
            React.createElement("div", { className: 'hub-entry' }, release_name)));
        return (React.createElement(DataListItem, { "data-cy": 'LegacyRoleListItem' },
            React.createElement(DataListItemRow, null,
                React.createElement(DataListItemCells, { dataListCells: cells }))));
    };
    return LegacyRoleListItem;
}(React.Component));
export { LegacyRoleListItem };
var templateObject_1;
//# sourceMappingURL=legacy-role-item.js.map