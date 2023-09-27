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
import { Trans, t } from '@lingui/macro';
import { DataListCell, DataListItem, DataListItemCells, DataListItemRow, LabelGroup, } from '@patternfly/react-core';
import React from 'react';
import { Link } from 'react-router-dom';
import { DateComponent, DownloadCount, Logo, ProviderLink, Tag, } from 'src/components';
import { Paths, formatPath } from 'src/paths';
import { chipGroupProps, getProviderInfo } from 'src/utilities';
import './legacy-role-item.scss';
export function LegacyRoleListItem(_a) {
    var role = _a.role, show_thumbnail = _a.show_thumbnail;
    var description = role.description, github_user = role.github_user, modified = role.modified, name = role.name, _b = role.summary_fields, namespace = _b.namespace, versions = _b.versions, tags = _b.tags;
    var latest = versions[0];
    var role_url = formatPath(Paths.legacyRole, {
        username: github_user,
        name: name,
    });
    var release_date = (latest === null || latest === void 0 ? void 0 : latest.release_date) || modified;
    var release_name = (latest === null || latest === void 0 ? void 0 : latest.name) || '';
    var provider = getProviderInfo(role);
    var cells = [];
    if (show_thumbnail !== false) {
        cells.push(React.createElement(DataListCell, { isFilled: false, alignRight: false, key: 'ns' },
            React.createElement(Logo, { alt: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["", " logo"], ["", " logo"])), github_user), image: namespace.avatar_url, size: '70px', unlockWidth: true, width: '97px' })));
    }
    cells.push(React.createElement(DataListCell, { key: 'content' },
        React.createElement("div", null,
            React.createElement(Link, { to: role_url },
                namespace.name,
                ".",
                name),
            React.createElement(ProviderLink, __assign({}, provider))),
        React.createElement("div", { className: 'hub-entry' }, description),
        React.createElement("div", { className: 'hub-entry' },
            React.createElement(LabelGroup, __assign({}, chipGroupProps()), tags.map(function (tag, index) { return (React.createElement(Tag, { key: index }, tag)); })))));
    cells.push(React.createElement(DataListCell, { isFilled: false, alignRight: true, key: 'stats' },
        React.createElement("div", { className: 'hub-right-col hub-entry' },
            React.createElement(Trans, null,
                "Updated ",
                React.createElement(DateComponent, { date: release_date }))),
        React.createElement("div", { className: 'hub-entry' }, release_name),
        React.createElement("div", { className: 'hub-entry' },
            React.createElement(DownloadCount, { item: role }))));
    return (React.createElement(DataListItem, { "data-cy": 'LegacyRoleListItem' },
        React.createElement(DataListItemRow, null,
            React.createElement(DataListItemCells, { dataListCells: cells }))));
}
var templateObject_1;
//# sourceMappingURL=legacy-role-item.js.map