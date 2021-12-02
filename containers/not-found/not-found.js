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
import './not-found.scss';
// had to declare *.gif in src/index.d.ts
import NotFoundImage from 'src/../static/images/not_found.svg';
import { withRouter } from 'react-router-dom';
import { Bullseye } from '@patternfly/react-core';
import { BaseHeader, Main } from 'src/components';
var NotFound = /** @class */ (function (_super) {
    __extends(NotFound, _super);
    function NotFound() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NotFound.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement(BaseHeader, { title: '404 - Page not found' }),
            React.createElement(Main, null,
                React.createElement("section", { className: 'body' },
                    React.createElement(Bullseye, { className: 'bullseye' },
                        React.createElement("div", { className: 'bullseye-center' },
                            React.createElement("img", { src: NotFoundImage, alt: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Not found image"], ["Not found image"]))) }),
                            React.createElement("div", null, t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["We couldn't find the page you're looking for!"], ["We couldn't find the page you're looking for!"])))),
                            React.createElement("div", { className: 'pf-c-content' },
                                React.createElement("span", { className: 'four-oh-four' }, "404"))))))));
    };
    return NotFound;
}(React.Component));
export default withRouter(NotFound);
var templateObject_1, templateObject_2;
//# sourceMappingURL=not-found.js.map