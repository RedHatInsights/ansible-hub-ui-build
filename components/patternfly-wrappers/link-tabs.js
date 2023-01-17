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
import cx from 'classnames';
import * as React from 'react';
import { Link } from 'react-router-dom';
// We're not using the Tab react component because they don't support links.
var LinkTabs = /** @class */ (function (_super) {
    __extends(LinkTabs, _super);
    function LinkTabs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LinkTabs.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: 'pf-c-tabs' },
            React.createElement("ul", { className: 'pf-c-tabs__list' }, this.props.tabs.map(function (tab) { return _this.renderTab(tab); }))));
    };
    LinkTabs.prototype.renderTab = function (_a) {
        var link = _a.link, title = _a.title, _b = _a.active, active = _b === void 0 ? false : _b;
        return (React.createElement("li", { className: cx({
                'pf-c-tabs__item': true,
                'pf-m-current': active,
            }), key: title },
            React.createElement(Link, { to: link, className: 'pf-c-tabs__link' },
                React.createElement("span", { className: 'pf-c-tabs__item-text' }, title))));
    };
    return LinkTabs;
}(React.Component));
export { LinkTabs };
//# sourceMappingURL=link-tabs.js.map