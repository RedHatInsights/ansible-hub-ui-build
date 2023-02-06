import cx from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';
var renderTab = function (_a) {
    var link = _a.link, title = _a.title, _b = _a.active, active = _b === void 0 ? false : _b;
    return (React.createElement("li", { className: cx({
            'pf-c-tabs__item': true,
            'pf-m-current': active,
        }), key: title },
        React.createElement(Link, { to: link, className: 'pf-c-tabs__link' },
            React.createElement("span", { className: 'pf-c-tabs__item-text' }, title))));
};
// We're not using the Tab react component because they don't support links.
export var LinkTabs = function (_a) {
    var tabs = _a.tabs;
    return (React.createElement("div", { className: 'pf-c-tabs' },
        React.createElement("ul", { className: 'pf-c-tabs__list' }, tabs.map(function (tab) { return renderTab(tab); }))));
};
//# sourceMappingURL=link-tabs.js.map