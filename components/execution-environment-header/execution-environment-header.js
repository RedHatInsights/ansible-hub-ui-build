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
import { Tooltip } from '@patternfly/react-core';
import { Paths } from 'src/paths';
import { BaseHeader, Breadcrumbs, Tabs } from 'src/components';
var ExecutionEnvironmentHeader = /** @class */ (function (_super) {
    __extends(ExecutionEnvironmentHeader, _super);
    function ExecutionEnvironmentHeader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExecutionEnvironmentHeader.prototype.render = function () {
        var _this = this;
        var tabs = ['Detail', 'Activity', 'Images'];
        return (React.createElement(BaseHeader, { title: this.props.container.name, breadcrumbs: React.createElement(Breadcrumbs, { links: [
                    {
                        url: Paths.executionEnvironments,
                        name: 'Container Registry',
                    },
                    { name: this.props.container.name },
                ] }), pageControls: this.props.pageControls },
            React.createElement(Tooltip, { content: this.props.container.description },
                React.createElement("p", { className: 'truncated' }, this.props.container.description)),
            React.createElement("span", null),
            React.createElement("div", { className: 'tab-link-container' },
                React.createElement("div", { className: 'tabs' },
                    React.createElement(Tabs, { tabs: tabs, params: { tab: this.props.tab }, updateParams: function (p) { return _this.props.updateState({ redirect: p.tab }); } })))));
    };
    return ExecutionEnvironmentHeader;
}(React.Component));
export { ExecutionEnvironmentHeader };
//# sourceMappingURL=execution-environment-header.js.map