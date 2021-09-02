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
import { Link } from 'react-router-dom';
import { DropdownItem, ClipboardCopy } from '@patternfly/react-core';
import { DateComponent, EmptyStateNoData, SortTable, StatefulDropdown, } from '..';
import { Constants } from 'src/constants';
import { getRepoUrl } from 'src/utilities';
import { Paths, formatPath } from 'src/paths';
var LocalRepositoryTable = /** @class */ (function (_super) {
    __extends(LocalRepositoryTable, _super);
    function LocalRepositoryTable(props) {
        return _super.call(this, props) || this;
    }
    LocalRepositoryTable.prototype.render = function () {
        var repositories = this.props.repositories;
        if (repositories.length === 0) {
            return (React.createElement(EmptyStateNoData, { title: 'No local repositories yet', description: '' }));
        }
        return this.renderTable(repositories);
    };
    LocalRepositoryTable.prototype.renderTable = function (repositories) {
        var _this = this;
        var params = { sort: 'repository' };
        var sortTableOptions = {
            headers: [
                {
                    title: 'Distribution name',
                    type: 'none',
                    id: 'distribution',
                },
                {
                    title: 'Repository name',
                    type: 'none',
                    id: 'repository',
                },
                {
                    title: 'Content count',
                    type: 'none',
                    id: 'content',
                },
                {
                    title: 'Last updated',
                    type: 'none',
                    id: 'updated_at',
                },
                {
                    title: 'Repo URL',
                    type: 'none',
                    id: 'ansible_cli_url',
                },
                {
                    title: 'CLI configuration',
                    type: 'none',
                    id: 'cli_config',
                },
                {
                    title: '',
                    type: 'none',
                    id: 'kebab',
                },
            ],
        };
        if (DEPLOYMENT_MODE === Constants.INSIGHTS_DEPLOYMENT_MODE) {
            sortTableOptions.headers = sortTableOptions.headers.filter(function (object) {
                return object.id !== 'updated_at' && object.id !== 'cli_config';
            });
        }
        return (React.createElement("table", { "aria-label": 'Collection versions', className: 'content-table pf-c-table' },
            React.createElement(SortTable, { options: sortTableOptions, params: params, updateParams: function (p) { return console.log(p); } }),
            React.createElement("tbody", null, repositories.map(function (distribution) { return _this.renderRow(distribution); }))));
    };
    LocalRepositoryTable.prototype.renderRow = function (distribution) {
        var cliConfig = [
            '[galaxy]',
            "server_list = " + distribution.repository.name + "_repo",
            '',
            "[galaxy_server." + distribution.repository.name + "_repo]",
            "url=" + getRepoUrl(distribution.base_path),
            'token=<put your token here>',
        ];
        return (React.createElement("tr", { key: distribution.name },
            React.createElement("td", null, distribution.name),
            React.createElement("td", null, distribution.repository.name),
            React.createElement("td", null, distribution.repository.content_count),
            DEPLOYMENT_MODE ===
                Constants.INSIGHTS_DEPLOYMENT_MODE ? null : !!distribution.repository
                .pulp_last_updated ? (React.createElement("td", null,
                React.createElement(DateComponent, { date: distribution.repository.pulp_last_updated }))) : (React.createElement("td", null, '---')),
            React.createElement("td", null,
                React.createElement(ClipboardCopy, { isReadOnly: true }, getRepoUrl(distribution.base_path))),
            DEPLOYMENT_MODE === Constants.INSIGHTS_DEPLOYMENT_MODE ? null : (React.createElement("td", null,
                React.createElement(ClipboardCopy, { isCode: true, isReadOnly: true, variant: 'expansion' }, cliConfig.join('\n')))),
            React.createElement("td", null,
                React.createElement("span", null,
                    React.createElement(StatefulDropdown, { items: [
                            React.createElement(DropdownItem, { key: '2', component: React.createElement(Link, { to: formatPath(Paths.token, {}), target: '_blank' }, "Get token") }),
                        ] })))));
    };
    return LocalRepositoryTable;
}(React.Component));
export { LocalRepositoryTable };
//# sourceMappingURL=local-repository-table.js.map