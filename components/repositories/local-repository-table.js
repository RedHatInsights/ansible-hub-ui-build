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
import { DateComponent, EmptyStateNoData, SortTable, ClipboardCopy } from '..';
import { Constants } from 'src/constants';
import { getRepoUrl } from 'src/utilities';
import { CollectionCount } from 'src/components';
var LocalRepositoryTable = /** @class */ (function (_super) {
    __extends(LocalRepositoryTable, _super);
    function LocalRepositoryTable(props) {
        return _super.call(this, props) || this;
    }
    LocalRepositoryTable.prototype.render = function () {
        var repositories = this.props.repositories;
        if (repositories.length === 0) {
            return (React.createElement(EmptyStateNoData, { title: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["No local repositories yet"], ["No local repositories yet"]))), description: '' }));
        }
        return this.renderTable(repositories);
    };
    LocalRepositoryTable.prototype.renderTable = function (repositories) {
        var _this = this;
        var params = { sort: 'repository' };
        var sortTableOptions = {
            headers: [
                {
                    title: t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Distribution name"], ["Distribution name"]))),
                    type: 'none',
                    id: 'distribution',
                },
                {
                    title: t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Repository name"], ["Repository name"]))),
                    type: 'none',
                    id: 'repository',
                },
                {
                    title: t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["Collection count"], ["Collection count"]))),
                    type: 'none',
                    id: 'content',
                },
                {
                    title: t(templateObject_5 || (templateObject_5 = __makeTemplateObject(["Last updated"], ["Last updated"]))),
                    type: 'none',
                    id: 'updated_at',
                },
                {
                    title: t(templateObject_6 || (templateObject_6 = __makeTemplateObject(["Distribution URL"], ["Distribution URL"]))),
                    type: 'none',
                    id: 'ansible_cli_url',
                },
                {
                    title: t(templateObject_7 || (templateObject_7 = __makeTemplateObject(["CLI configuration"], ["CLI configuration"]))),
                    type: 'none',
                    id: 'cli_config',
                },
            ],
        };
        if (DEPLOYMENT_MODE === Constants.INSIGHTS_DEPLOYMENT_MODE) {
            sortTableOptions.headers = sortTableOptions.headers.filter(function (object) {
                return object.id !== 'updated_at' && object.id !== 'cli_config';
            });
        }
        return (React.createElement("table", { "aria-label": t(templateObject_8 || (templateObject_8 = __makeTemplateObject(["Collection versions"], ["Collection versions"]))), className: 'hub-c-table-content pf-c-table' },
            React.createElement(SortTable, { options: sortTableOptions, params: params, updateParams: function (p) { return console.log(p); } }),
            React.createElement("tbody", null, repositories.map(function (distribution) { return _this.renderRow(distribution); }))));
    };
    LocalRepositoryTable.prototype.renderRow = function (distribution) {
        var cliConfig = [
            '[galaxy]',
            "server_list = ".concat(distribution.repository.name, "_repo"),
            '',
            "[galaxy_server.".concat(distribution.repository.name, "_repo]"),
            "url=".concat(getRepoUrl(distribution.base_path)),
            'token=<put your token here>',
        ];
        return (React.createElement("tr", { key: distribution.name },
            React.createElement("td", null, distribution.name),
            React.createElement("td", null, distribution.repository.name),
            React.createElement("td", null,
                React.createElement(CollectionCount, { distributionPath: distribution.base_path })),
            DEPLOYMENT_MODE ===
                Constants.INSIGHTS_DEPLOYMENT_MODE ? null : distribution.repository
                .pulp_last_updated ? (React.createElement("td", null,
                React.createElement(DateComponent, { date: distribution.repository.pulp_last_updated }))) : (React.createElement("td", null, '---')),
            React.createElement("td", null,
                React.createElement(ClipboardCopy, { isReadOnly: true }, getRepoUrl(distribution.base_path))),
            DEPLOYMENT_MODE === Constants.INSIGHTS_DEPLOYMENT_MODE ? null : (React.createElement("td", null,
                React.createElement(ClipboardCopy, { isCode: true, isReadOnly: true, variant: 'expansion' }, cliConfig.join('\n'))))));
    };
    return LocalRepositoryTable;
}(React.Component));
export { LocalRepositoryTable };
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;
//# sourceMappingURL=local-repository-table.js.map