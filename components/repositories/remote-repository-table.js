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
import { Button, DropdownItem, Tooltip } from '@patternfly/react-core';
import { ExclamationCircleIcon } from '@patternfly/react-icons';
import { PulpStatus } from 'src/api';
import { DateComponent, HelperText, SortTable, StatefulDropdown } from '..';
import { StatusIndicator } from 'src/components';
import { Constants } from 'src/constants';
var RemoteRepositoryTable = /** @class */ (function (_super) {
    __extends(RemoteRepositoryTable, _super);
    function RemoteRepositoryTable(props) {
        var _this = _super.call(this, props) || this;
        _this.refreshOnStatuses = [PulpStatus.waiting, PulpStatus.running];
        return _this;
    }
    RemoteRepositoryTable.prototype.componentDidMount = function () {
        var _this = this;
        this.polling = setInterval(function () {
            var remotes = _this.props.remotes;
            var refresh = false;
            for (var _i = 0, remotes_1 = remotes; _i < remotes_1.length; _i++) {
                var remote = remotes_1[_i];
                for (var _a = 0, _b = remote.repositories; _a < _b.length; _a++) {
                    var repo = _b[_a];
                    if (repo.last_sync_task) {
                        if (_this.refreshOnStatuses.includes(repo.last_sync_task.state)) {
                            refresh = true;
                            break;
                        }
                    }
                }
            }
            if (refresh) {
                _this.props.refreshRemotes();
            }
            else {
            }
        }, 5000);
    };
    RemoteRepositoryTable.prototype.componentWillUnmount = function () {
        clearInterval(this.polling);
    };
    RemoteRepositoryTable.prototype.render = function () {
        var remotes = this.props.remotes;
        return this.renderTable(remotes);
    };
    RemoteRepositoryTable.prototype.renderTable = function (remotes) {
        var _this = this;
        var params = { sort: 'repository' };
        var sortTableOptions = {
            headers: [
                {
                    title: 'Remote name',
                    type: 'none',
                    id: 'remote',
                },
                {
                    title: 'Repositories',
                    type: 'none',
                    id: 'repository',
                },
                {
                    title: 'Last updated',
                    type: 'none',
                    id: 'updated_at',
                },
                {
                    title: 'Last synced',
                    type: 'none',
                    id: 'last_sync_task.finished_at',
                },
                {
                    title: 'Sync status',
                    type: 'none',
                    id: 'last_sync_task.error',
                },
                {
                    title: '',
                    type: 'none',
                    id: 'controls',
                },
            ],
        };
        return (React.createElement("table", { "aria-label": 'Collection versions', className: 'content-table pf-c-table' },
            React.createElement(SortTable, { options: sortTableOptions, params: params, updateParams: function (p) { return null; } }),
            React.createElement("tbody", null, remotes.map(function (remote, i) { return _this.renderRow(remote, i); }))));
    };
    RemoteRepositoryTable.prototype.renderRow = function (remote, i) {
        var _this = this;
        var user = this.props.user;
        return (React.createElement("tr", { key: i },
            React.createElement("td", null, remote.name),
            React.createElement("td", null, remote.repositories.map(function (r) { return r.name; }).join(', ')),
            !!remote.updated_at ? (React.createElement("td", null,
                React.createElement(DateComponent, { date: remote.updated_at }))) : (React.createElement("td", null, '---')),
            !!remote.last_sync_task && !!remote.last_sync_task.finished_at ? (React.createElement("td", null,
                React.createElement(DateComponent, { date: remote.last_sync_task.finished_at }))) : (React.createElement("td", null, '---')),
            React.createElement("td", null, this.renderStatus(remote)),
            React.createElement("td", null, remote.repositories.length === 0 ? (React.createElement(Tooltip, { content: 'There are no repos associated with this remote.' },
                React.createElement(Button, { variant: 'plain' },
                    React.createElement(ExclamationCircleIcon, null)))) : (!!user &&
                user.model_permissions.change_remote && (React.createElement(React.Fragment, null,
                this.getConfigureOrSyncButton(remote),
                React.createElement("span", null,
                    React.createElement(StatefulDropdown, { items: [
                            React.createElement(DropdownItem, { key: 'edit', onClick: function () { return _this.props.editRemote(remote); } }, "Edit"),
                        ] }))))))));
    };
    RemoteRepositoryTable.prototype.renderStatus = function (remote) {
        if (!remote.last_sync_task) {
            return '---';
        }
        var errorMessage = null;
        if (remote['last_sync_task']['error']) {
            errorMessage = (React.createElement(HelperText, { content: remote.last_sync_task.error['description'] }));
        }
        return (React.createElement(React.Fragment, null,
            React.createElement(StatusIndicator, { status: remote.last_sync_task.state }),
            " ",
            errorMessage));
    };
    RemoteRepositoryTable.prototype.getConfigureOrSyncButton = function (remote) {
        var _this = this;
        var user = this.props.user;
        if (!!user && !user.model_permissions.change_remote) {
            return null;
        }
        var configButton = (React.createElement(Button, { onClick: function () { return _this.props.editRemote(remote); }, variant: 'secondary' }, "Configure"));
        var syncButton = (React.createElement(React.Fragment, null,
            React.createElement(Button, { isDisabled: remote.repositories.length === 0 ||
                    (remote.last_sync_task &&
                        ['running', 'waiting'].includes(remote.last_sync_task.state)), onClick: function () {
                    return _this.props.syncRemote(remote.repositories[0].distributions[0].base_path);
                }, variant: 'secondary' }, "Sync")));
        var remoteType = 'none';
        for (var _i = 0, _a = Constants.UPSTREAM_HOSTS; _i < _a.length; _i++) {
            var host = _a[_i];
            if (remote.url.includes(host)) {
                remoteType = 'community';
                break;
            }
        }
        for (var _b = 0, _c = Constants.DOWNSTREAM_HOSTS; _b < _c.length; _b++) {
            var host = _c[_b];
            if (remote.url.includes(host)) {
                remoteType = 'certified';
                break;
            }
        }
        if (remoteType === 'community' &&
            remote.url &&
            remote.name &&
            remote.requirements_file) {
            return syncButton;
        }
        if (remoteType === 'certified' &&
            remote.url &&
            remote.name &&
            remote.auth_url) {
            return syncButton;
        }
        if (remoteType === 'none' && remote.url) {
            return syncButton;
        }
        return configButton;
    };
    return RemoteRepositoryTable;
}(React.Component));
export { RemoteRepositoryTable };
//# sourceMappingURL=remote-repository-table.js.map