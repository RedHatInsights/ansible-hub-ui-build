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
import './header.scss';
import { ExternalLinkAltIcon } from '@patternfly/react-icons';
import { BaseHeader, Logo, Tabs, Breadcrumbs } from 'src/components';
var PartnerHeader = /** @class */ (function (_super) {
    __extends(PartnerHeader, _super);
    function PartnerHeader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PartnerHeader.prototype.render = function () {
        var _a = this.props, breadcrumbs = _a.breadcrumbs, contextSelector = _a.contextSelector, filters = _a.filters, namespace = _a.namespace, pageControls = _a.pageControls, params = _a.params, tabs = _a.tabs, updateParams = _a.updateParams;
        var company = namespace.company || namespace.name;
        return (React.createElement(BaseHeader, { title: company, logo: namespace.avatar_url && (React.createElement(Logo, { alt: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["", " logo"], ["", " logo"])), company), className: 'image', fallbackToDefault: true, image: namespace.avatar_url, size: '40px', unlockWidth: true })), breadcrumbs: React.createElement(Breadcrumbs, { links: breadcrumbs }), pageControls: pageControls, contextSelector: contextSelector, className: 'header' },
            namespace.description ? React.createElement("div", null, namespace.description) : null,
            React.createElement("div", { className: 'hub-tab-link-container' },
                React.createElement("div", { className: 'tabs' },
                    React.createElement(Tabs, { tabs: tabs, params: params, updateParams: function (p) { return updateParams(p); } })),
                namespace.links.length > 0 ? (React.createElement("div", { className: 'links' },
                    React.createElement("div", null,
                        React.createElement(ExternalLinkAltIcon, null)),
                    namespace.links.map(function (x, i) {
                        return (React.createElement("div", { className: 'link', key: i },
                            React.createElement("a", { href: x.url, target: 'blank' }, x.name)));
                    }))) : null),
            filters || null));
    };
    return PartnerHeader;
}(React.Component));
export { PartnerHeader };
var templateObject_1;
//# sourceMappingURL=partner-header.js.map