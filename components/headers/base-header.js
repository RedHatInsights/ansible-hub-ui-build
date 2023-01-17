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
import { Title } from '@patternfly/react-core';
import cx from 'classnames';
import * as React from 'react';
import { Constants } from 'src/constants';
import './header.scss';
var BaseHeader = /** @class */ (function (_super) {
    __extends(BaseHeader, _super);
    function BaseHeader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BaseHeader.prototype.render = function () {
        var _a = this.props, title = _a.title, logo = _a.logo, pageControls = _a.pageControls, children = _a.children, breadcrumbs = _a.breadcrumbs, className = _a.className, contextSelector = _a.contextSelector, versionControl = _a.versionControl, status = _a.status;
        var showRepoSelector = contextSelector && DEPLOYMENT_MODE !== Constants.INSIGHTS_DEPLOYMENT_MODE;
        return (React.createElement("div", { className: cx('background', className) },
            showRepoSelector && (React.createElement("div", { className: 'breadcrumb-container' }, contextSelector)),
            breadcrumbs && (React.createElement("div", { className: 'breadcrumb-container' }, breadcrumbs)),
            !breadcrumbs && !showRepoSelector && React.createElement("div", { className: 'placeholder' }),
            React.createElement("div", { className: 'column-section' },
                React.createElement("div", { className: 'title-box' },
                    logo,
                    React.createElement("div", null,
                        React.createElement(Title, { headingLevel: 'h1', size: '2xl' },
                            title,
                            status))),
                pageControls ? (React.createElement("div", { className: 'header-right' }, pageControls)) : null),
            versionControl ? React.createElement(React.Fragment, null, versionControl) : null,
            children ? (React.createElement("div", { className: 'header-bottom' }, children)) : (React.createElement("div", { className: 'placeholder' }))));
    };
    return BaseHeader;
}(React.Component));
export { BaseHeader };
//# sourceMappingURL=base-header.js.map