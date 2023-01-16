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
import { Paths, formatEEPath, formatPath } from 'src/paths';
import { BaseHeader, Breadcrumbs, Tabs, SignatureBadge } from 'src/components';
import { lastSyncStatus, lastSynced } from 'src/utilities';
var ExecutionEnvironmentHeader = /** @class */ (function (_super) {
    __extends(ExecutionEnvironmentHeader, _super);
    function ExecutionEnvironmentHeader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExecutionEnvironmentHeader.prototype.render = function () {
        var _this = this;
        var _a;
        var _b = this.props, container = _b.container, groupId = _b.groupId, tab = _b.tab, displaySignatures = _b.displaySignatures;
        var tabs = [
            { id: 'detail', name: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Detail"], ["Detail"]))) },
            { id: 'activity', name: t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Activity"], ["Activity"]))) },
            { id: 'images', name: t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Images"], ["Images"]))) },
            { id: 'owners', name: t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["Owners"], ["Owners"]))) },
        ];
        var last_sync_task = (_a = container.pulp.repository.remote) === null || _a === void 0 ? void 0 : _a.last_sync_task;
        return (React.createElement(BaseHeader, { title: container.name, breadcrumbs: React.createElement(Breadcrumbs, { links: [
                    {
                        url: formatPath(Paths.executionEnvironments),
                        name: t(templateObject_5 || (templateObject_5 = __makeTemplateObject(["Execution Environments"], ["Execution Environments"]))),
                    },
                    {
                        name: container.name,
                        url: tab === 'owners'
                            ? formatEEPath(Paths.executionEnvironmentDetail, {
                                container: container.name,
                            })
                            : null,
                    },
                    tab === 'owners'
                        ? {
                            name: t(templateObject_6 || (templateObject_6 = __makeTemplateObject(["Owners"], ["Owners"]))),
                            url: groupId
                                ? formatEEPath(Paths.executionEnvironmentDetailOwners, {
                                    container: container.name,
                                })
                                : null,
                        }
                        : null,
                    tab === 'owners' && groupId
                        ? { name: t(templateObject_7 || (templateObject_7 = __makeTemplateObject(["Group ", ""], ["Group ", ""])), groupId) }
                        : null,
                ].filter(Boolean) }), pageControls: this.props.pageControls },
            displaySignatures &&
                this.props.container.pulp.repository.sign_state && (React.createElement(SignatureBadge, { isCompact: true, signState: this.props.container.pulp.repository.sign_state == 'signed'
                    ? 'signed'
                    : 'unsigned' })),
            last_sync_task && (React.createElement("p", { className: 'hub-m-truncated' },
                React.createElement(Trans, null,
                    "Last updated from registry ",
                    lastSynced({ last_sync_task: last_sync_task })),
                ' ',
                lastSyncStatus({ last_sync_task: last_sync_task }))),
            React.createElement("div", { style: { height: '10px' } }, "\u00A0"),
            React.createElement(Tooltip, { content: container.description },
                React.createElement("p", { "data-cy": 'description', className: 'hub-m-truncated' }, container.description)),
            React.createElement("span", null),
            React.createElement("div", { className: 'hub-tab-link-container' },
                React.createElement("div", { className: 'tabs' },
                    React.createElement(Tabs, { tabs: tabs, params: { tab: tab }, updateParams: function (_a) {
                            var tab = _a.tab;
                            return _this.props.updateState({ redirect: tab });
                        } })))));
    };
    return ExecutionEnvironmentHeader;
}(React.Component));
export { ExecutionEnvironmentHeader };
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
//# sourceMappingURL=execution-environment-header.js.map