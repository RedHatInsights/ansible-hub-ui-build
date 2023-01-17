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
import { Breadcrumb, BreadcrumbItem } from '@patternfly/react-core';
import * as React from 'react';
import { Link } from 'react-router-dom';
var BreadcrumbType = /** @class */ (function () {
    function BreadcrumbType() {
    }
    return BreadcrumbType;
}());
export { BreadcrumbType };
var Breadcrumbs = /** @class */ (function (_super) {
    __extends(Breadcrumbs, _super);
    function Breadcrumbs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Breadcrumbs.prototype.render = function () {
        var _this = this;
        return (React.createElement(Breadcrumb, null, this.props.links.map(function (link, i) { return _this.renderLink(link, i); })));
    };
    Breadcrumbs.prototype.renderLink = function (link, index) {
        return (React.createElement(BreadcrumbItem, { key: index, isActive: index + 1 === this.props.links.length }, link.url ? React.createElement(Link, { to: link.url }, link.name) : link.name));
    };
    return Breadcrumbs;
}(React.Component));
export { Breadcrumbs };
//# sourceMappingURL=breadcrumbs.js.map