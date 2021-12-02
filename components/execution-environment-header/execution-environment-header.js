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
import { t, Trans } from '@lingui/macro';
import * as React from 'react';
import { Tooltip } from '@patternfly/react-core';
import { Paths } from 'src/paths';
import { BaseHeader, Breadcrumbs, Tabs } from 'src/components';
import { lastSyncStatus, lastSynced } from 'src/utilities';
var ExecutionEnvironmentHeader = /** @class */ (function (_super) {
    __extends(ExecutionEnvironmentHeader, _super);
    function ExecutionEnvironmentHeader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExecutionEnvironmentHeader.prototype.render = function () {
        var _this = this;
        var _a;
        var tabs = [
            { id: 'detail', name: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Detail"], ["Detail"]))) },
            { id: 'activity', name: t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Activity"], ["Activity"]))) },
            { id: 'images', name: t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Images"], ["Images"]))) },
        ];
        var last_sync_task = (_a = this.props.container.pulp.repository.remote) === null || _a === void 0 ? void 0 : _a.last_sync_task;
        return (React.createElement(BaseHeader, { title: this.props.container.name, breadcrumbs: React.createElement(Breadcrumbs, { links: [
                    {
                        url: Paths.executionEnvironments,
                        name: t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["Execution Environments"], ["Execution Environments"]))),
                    },
                    { name: this.props.container.name },
                ] }), pageControls: this.props.pageControls },
            React.createElement(Tooltip, { content: this.props.container.description },
                React.createElement("p", { "data-cy": 'description', className: 'truncated' }, this.props.container.description)),
            last_sync_task && (React.createElement("p", { className: 'truncated' },
                React.createElement(Trans, null,
                    "Last updated from registry ",
                    lastSynced({ last_sync_task: last_sync_task })),
                ' ',
                lastSyncStatus({ last_sync_task: last_sync_task }))),
            React.createElement("span", null),
            React.createElement("div", { className: 'tab-link-container' },
                React.createElement("div", { className: 'tabs' },
                    React.createElement(Tabs, { tabs: tabs, params: { tab: this.props.tab }, updateParams: function (p) {
                            if (_this.props.tab !== p.tab) {
                                _this.props.updateState({ redirect: p.tab });
                            }
                        } })))));
    };
    return ExecutionEnvironmentHeader;
}(React.Component));
export { ExecutionEnvironmentHeader };
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=execution-environment-header.js.map