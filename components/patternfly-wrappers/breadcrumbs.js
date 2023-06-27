import { Breadcrumb, BreadcrumbItem } from '@patternfly/react-core';
import React from 'react';
import { Link } from 'react-router-dom';
var BreadcrumbType = /** @class */ (function () {
    function BreadcrumbType() {
    }
    return BreadcrumbType;
}());
export { BreadcrumbType };
export var Breadcrumbs = function (_a) {
    var links = _a.links;
    return (React.createElement(Breadcrumb, null, links.map(function (link, index) { return (React.createElement(BreadcrumbItem, { key: index, isActive: index + 1 === links.length }, link.url ? React.createElement(Link, { to: link.url }, link.name) : link.name)); })));
};
//# sourceMappingURL=breadcrumbs.js.map