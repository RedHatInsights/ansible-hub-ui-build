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
import { Skeleton, PageHeaderTitle, PageHeader, Section, } from '@redhat-cloud-services/frontend-components';
import { Main } from 'src/components';
import { LoadingPageSpinner } from 'src/components';
var LoadingPageWithHeader = /** @class */ (function (_super) {
    __extends(LoadingPageWithHeader, _super);
    function LoadingPageWithHeader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LoadingPageWithHeader.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement(PageHeader, null,
                React.createElement(PageHeaderTitle, { title: React.createElement(Skeleton, { size: 'sm' }) })),
            React.createElement(Main, null,
                React.createElement(Section, null,
                    React.createElement(LoadingPageSpinner, null)))));
    };
    return LoadingPageWithHeader;
}(React.Component));
export { LoadingPageWithHeader };
//# sourceMappingURL=loading-with-header.js.map