var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { t } from '@lingui/macro';
import { DataListCell, DataListItem, DataListItemCells, DataListItemRow, } from '@patternfly/react-core';
import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from 'src/components';
import { Paths, formatPath } from 'src/paths';
import { namespaceTitle } from 'src/utilities';
export function NamespaceListItem(_a) {
    var namespace = _a.namespace;
    var avatar_url = namespace.avatar_url, name = namespace.name;
    var namespace_url = formatPath(Paths.namespaces, {
        namespace: name,
    });
    var title = namespaceTitle(namespace);
    return (React.createElement(DataListItem, { "data-cy": 'NamespaceListItem' },
        React.createElement(DataListItemRow, null,
            React.createElement(DataListItemCells, { dataListCells: [
                    React.createElement(DataListCell, { isFilled: false, alignRight: false, key: 'ns' },
                        React.createElement(Logo, { alt: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["", " logo"], ["", " logo"])), title), fallbackToDefault: true, image: avatar_url, size: '40px', unlockWidth: true, width: '97px' })),
                    React.createElement(DataListCell, { key: 'content', size: 10 },
                        React.createElement("div", null,
                            React.createElement(Link, { to: namespace_url }, title))),
                    title !== name ? (React.createElement(DataListCell, { key: 'content', size: 5 },
                        React.createElement("div", null, name))) : null,
                ].filter(Boolean) }))));
}
var templateObject_1;
//# sourceMappingURL=namespace-list-item.js.map