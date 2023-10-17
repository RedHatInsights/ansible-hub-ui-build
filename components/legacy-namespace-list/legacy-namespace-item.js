var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { t } from '@lingui/macro';
import { DataListCell, DataListItem, DataListItemCells, DataListItemRow, DropdownItem, } from '@patternfly/react-core';
import React from 'react';
import { Link } from 'react-router-dom';
import { Logo, StatefulDropdown } from 'src/components';
import { useContext } from 'src/loaders/app-context';
import { Paths, formatPath } from 'src/paths';
import './legacy-namespace-item.scss';
export function LegacyNamespaceListItem(_a) {
    var namespace = _a.namespace, openModal = _a.openModal;
    var _b = useContext(), ai_deny_index = _b.featureFlags.ai_deny_index, _c = _b.user, username = _c.username, is_superuser = _c.is_superuser;
    var id = namespace.id, avatar_url = namespace.avatar_url, name = namespace.name, summary_fields = namespace.summary_fields;
    var namespace_url = formatPath(Paths.legacyNamespace, {
        namespaceid: id,
    });
    var cells = [];
    cells.push(React.createElement(DataListCell, { isFilled: false, alignRight: false, key: 'ns' },
        React.createElement(Logo, { alt: 'logo', fallbackToDefault: true, image: avatar_url, size: '40px', unlockWidth: true, width: '97px' })));
    cells.push(React.createElement(DataListCell, { key: 'content', size: 10 },
        React.createElement("div", null,
            React.createElement(Link, { to: namespace_url }, name))));
    var userOwnsLegacyNamespace = !!summary_fields.owners.find(function (n) { return n.username == username; });
    var showWisdom = ai_deny_index && (is_superuser || userOwnsLegacyNamespace);
    var dropdownItems = [];
    dropdownItems.push(React.createElement(DropdownItem, { onClick: function () { return openModal(namespace); } }, t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Ansible Lightspeed settings"], ["Ansible Lightspeed settings"])))));
    if (showWisdom && openModal) {
        cells.push(React.createElement(DataListCell, { key: 'menu', alignRight: true },
            React.createElement("div", { style: { float: 'right' } },
                React.createElement(StatefulDropdown, { items: dropdownItems }))));
    }
    return (React.createElement(DataListItem, { "data-cy": 'LegacyNamespaceListItem' },
        React.createElement(DataListItemRow, null,
            React.createElement(DataListItemCells, { dataListCells: cells }))));
}
var templateObject_1;
//# sourceMappingURL=legacy-namespace-item.js.map