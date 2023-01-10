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
import * as React from 'react';
import './legacy-namespace-item.scss';
import { DataListItem, DataListItemRow, DataListItemCells, DataListCell, } from '@patternfly/react-core';
import { Link } from 'react-router-dom';
import { Paths, formatPath } from 'src/paths';
import { Logo } from 'src/components';
var LegacyNamespaceListItem = /** @class */ (function (_super) {
    __extends(LegacyNamespaceListItem, _super);
    function LegacyNamespaceListItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LegacyNamespaceListItem.prototype.render = function () {
        var namespace = this.props.namespace;
        var namespace_url = formatPath(Paths.legacyNamespace, {
            namespaceid: namespace.id,
        });
        var cells = [];
        cells.push(React.createElement(DataListCell, { isFilled: false, alignRight: false, key: 'ns' },
            React.createElement(Logo, { alt: 'logo', fallbackToDefault: true, image: namespace.avatar_url, size: '40px', unlockWidth: true, width: '97px' })));
        cells.push(React.createElement(DataListCell, { key: 'content' },
            React.createElement("div", null,
                React.createElement(Link, { to: namespace_url }, namespace.name))));
        return (React.createElement(DataListItem, { "data-cy": 'LegacyNamespaceListItem' },
            React.createElement(DataListItemRow, null,
                React.createElement(DataListItemCells, { dataListCells: cells }))));
    };
    return LegacyNamespaceListItem;
}(React.Component));
export { LegacyNamespaceListItem };
//# sourceMappingURL=legacy-namespace-item.js.map