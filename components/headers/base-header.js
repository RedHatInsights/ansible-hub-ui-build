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
import cx from 'classnames';
import './header.scss';
import { Title } from '@patternfly/react-core';
import { Logo } from 'src/components';
var BaseHeader = /** @class */ (function (_super) {
    __extends(BaseHeader, _super);
    function BaseHeader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BaseHeader.prototype.render = function () {
        var _a = this.props, title = _a.title, imageURL = _a.imageURL, pageControls = _a.pageControls, children = _a.children, breadcrumbs = _a.breadcrumbs, className = _a.className, contextSelector = _a.contextSelector, versionControl = _a.versionControl;
        return (React.createElement("div", { className: cx('background', className) },
            contextSelector && (React.createElement("div", { className: 'breadcrumb-container' }, contextSelector)),
            breadcrumbs && (React.createElement("div", { className: 'breadcrumb-container' }, breadcrumbs)),
            !breadcrumbs && !contextSelector && React.createElement("div", { className: 'placeholder' }),
            React.createElement("div", { className: 'column-section' },
                React.createElement("div", { className: 'title-box' },
                    imageURL ? (React.createElement(Logo, { className: 'image', alt: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Page logo"], ["Page logo"]))), image: imageURL, size: '40px', unlockWidth: true })) : null,
                    React.createElement("div", null,
                        React.createElement(Title, { headingLevel: 'h1', size: '2xl', children: title }))),
                pageControls ? (React.createElement("div", { className: 'header-right' }, pageControls)) : null),
            versionControl ? React.createElement(React.Fragment, null, versionControl) : null,
            children ? (React.createElement("div", { className: 'header-bottom' }, children)) : (React.createElement("div", { className: 'placeholder' }))));
    };
    return BaseHeader;
}(React.Component));
export { BaseHeader };
var templateObject_1;
//# sourceMappingURL=base-header.js.map