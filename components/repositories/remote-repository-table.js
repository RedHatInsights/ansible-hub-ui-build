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
import { Button, DropdownItem, Tooltip } from '@patternfly/react-core';
import { ExclamationCircleIcon } from '@patternfly/react-icons';
import { PulpStatus } from 'src/api';
import { DateComponent, SortTable, ListItemActions } from 'src/components';
import { Constants } from 'src/constants';
import { lastSynced, lastSyncStatus } from 'src/utilities';
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
                    title: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Remote name"], ["Remote name"]))),
                    type: 'none',
                    id: 'remote',
                },
                {
                    title: t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Repositories"], ["Repositories"]))),
                    type: 'none',
                    id: 'repository',
                },
                {
                    title: t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Last updated"], ["Last updated"]))),
                    type: 'none',
                    id: 'updated_at',
                },
                {
                    title: t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["Last synced"], ["Last synced"]))),
                    type: 'none',
                    id: 'last_sync_task.finished_at',
                },
                {
                    title: t(templateObject_5 || (templateObject_5 = __makeTemplateObject(["Sync status"], ["Sync status"]))),
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
        return (React.createElement("table", { "aria-label": t(templateObject_6 || (templateObject_6 = __makeTemplateObject(["Collection versions"], ["Collection versions"]))), className: 'hub-c-table-content pf-c-table' },
            React.createElement(SortTable, { options: sortTableOptions, params: params, updateParams: function () { return null; } }),
            React.createElement("tbody", null, remotes.map(function (remote, i) { return _this.renderRow(remote, i); }))));
    };
    RemoteRepositoryTable.prototype.renderRow = function (remote, i) {
        var _this = this;
        var _a;
        var user = this.props.user;
        var buttons = remote.repositories.length
            ? this.getConfigureOrSyncButton(remote)
            : [
                React.createElement(Tooltip, { content: t(templateObject_7 || (templateObject_7 = __makeTemplateObject(["There are no repos associated with this remote."], ["There are no repos associated with this remote."]))), key: 'empty' },
                    React.createElement(Button, { variant: 'plain' },
                        React.createElement(ExclamationCircleIcon, null))),
            ];
        var dropdownItems = [
            remote.repositories.length && ((_a = user === null || user === void 0 ? void 0 : user.model_permissions) === null || _a === void 0 ? void 0 : _a.change_remote) && (React.createElement(DropdownItem, { key: 'edit', onClick: function () { return _this.props.editRemote(remote); } }, t(templateObject_8 || (templateObject_8 = __makeTemplateObject(["Edit"], ["Edit"]))))),
        ];
        return (React.createElement("tr", { key: i },
            React.createElement("td", null, remote.name),
            React.createElement("td", null, remote.repositories.map(function (r) { return r.name; }).join(', ')),
            remote.updated_at ? (React.createElement("td", null,
                React.createElement(DateComponent, { date: remote.updated_at }))) : (React.createElement("td", null, '---')),
            React.createElement("td", null, lastSynced(remote) || '---'),
            React.createElement("td", null, lastSyncStatus(remote) || '---'),
            React.createElement(ListItemActions, { kebabItems: dropdownItems, buttons: buttons })));
    };
    RemoteRepositoryTable.prototype.getConfigureOrSyncButton = function (remote) {
        var _this = this;
        var _a;
        var user = this.props.user;
        if (!((_a = user === null || user === void 0 ? void 0 : user.model_permissions) === null || _a === void 0 ? void 0 : _a.change_remote)) {
            return null;
        }
        var configButton = [
            React.createElement(Button, { key: 'config', onClick: function () { return _this.props.editRemote(remote); }, variant: 'secondary' }, t(templateObject_9 || (templateObject_9 = __makeTemplateObject(["Configure"], ["Configure"])))),
        ];
        var syncButton = [
            React.createElement(Button, { key: 'sync', isDisabled: remote.repositories.length === 0 ||
                    (remote.last_sync_task &&
                        ['running', 'waiting'].includes(remote.last_sync_task.state)), onClick: function () {
                    return _this.props.syncRemote(remote.repositories[0].distributions[0].base_path);
                }, variant: 'secondary' }, t(templateObject_10 || (templateObject_10 = __makeTemplateObject(["Sync"], ["Sync"])))),
        ];
        var remoteType = 'none';
        for (var _i = 0, _b = Constants.UPSTREAM_HOSTS; _i < _b.length; _i++) {
            var host = _b[_i];
            if (remote.url.includes(host)) {
                remoteType = 'community';
                break;
            }
        }
        for (var _c = 0, _d = Constants.DOWNSTREAM_HOSTS; _c < _d.length; _c++) {
            var host = _d[_c];
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
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10;
//# sourceMappingURL=remote-repository-table.js.map