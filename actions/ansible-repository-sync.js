var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { msg, t } from '@lingui/macro';
import { Button, FormGroup, Modal, Spinner, Switch, } from '@patternfly/react-core';
import React, { useEffect, useState } from 'react';
import { AnsibleRepositoryAPI } from 'src/api';
import { HelperText } from 'src/components';
import { canSyncAnsibleRepository } from 'src/permissions';
import { handleHttpError, parsePulpIDFromURL, taskAlert } from 'src/utilities';
import { Action } from './action';
var SyncModal = function (_a) {
    var closeAction = _a.closeAction, syncAction = _a.syncAction, name = _a.name;
    var _b = useState(false), pending = _b[0], setPending = _b[1];
    var _c = useState({
        mirror: true,
        optimize: true,
    }), syncParams = _c[0], setSyncParams = _c[1];
    useEffect(function () {
        setPending(false);
        setSyncParams({ mirror: true, optimize: true });
    }, [name]);
    if (!name) {
        return null;
    }
    return (React.createElement(Modal, { actions: [
            React.createElement("div", { "data-cy": 'sync-button', key: 'sync' },
                React.createElement(Button, { key: 'sync', onClick: function () {
                        setPending(true);
                        syncAction(syncParams)
                            .then(closeAction)
                            .finally(function () { return setPending(false); });
                    }, variant: 'primary', isDisabled: pending }, t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Sync"], ["Sync"]))),
                    pending && React.createElement(Spinner, { size: 'sm' }))),
            React.createElement(Button, { key: 'close', onClick: closeAction, variant: 'link' }, t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Close"], ["Close"])))),
        ], isOpen: true, onClose: closeAction, title: t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Sync repository \"", "\""], ["Sync repository \"", "\""])), name), variant: 'medium' },
        React.createElement(FormGroup, { label: t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["Mirror"], ["Mirror"]))), labelIcon: React.createElement(HelperText, { content: t(templateObject_5 || (templateObject_5 = __makeTemplateObject(["If selected, all content that is not present in the remote repository will be removed from the local repository; otherwise, sync will add missing content."], ["If selected, all content that is not present in the remote repository will be removed from the local repository; otherwise, sync will add missing content."]))) }) },
            React.createElement(Switch, { isChecked: syncParams.mirror, onChange: function (mirror) { return setSyncParams(__assign(__assign({}, syncParams), { mirror: mirror })); }, label: t(templateObject_6 || (templateObject_6 = __makeTemplateObject(["Content not present in remote repository will be removed from the local repository"], ["Content not present in remote repository will be removed from the local repository"]))), labelOff: t(templateObject_7 || (templateObject_7 = __makeTemplateObject(["Sync will only add missing content"], ["Sync will only add missing content"]))) })),
        React.createElement("br", null),
        React.createElement(FormGroup, { label: t(templateObject_8 || (templateObject_8 = __makeTemplateObject(["Optimize"], ["Optimize"]))), labelIcon: React.createElement(HelperText, { content: t(templateObject_9 || (templateObject_9 = __makeTemplateObject(["Only perform the sync if no changes are reported by the remote server. To force a sync to happen, deselect this option."], ["Only perform the sync if no changes are reported by the remote server. To force a sync to happen, deselect this option."]))) }) },
            React.createElement(Switch, { isChecked: syncParams.optimize, onChange: function (optimize) { return setSyncParams(__assign(__assign({}, syncParams), { optimize: optimize })); }, label: t(templateObject_10 || (templateObject_10 = __makeTemplateObject(["Only perform the sync if no changes are reported by the remote server."], ["Only perform the sync if no changes are reported by the remote server."]))), labelOff: t(templateObject_11 || (templateObject_11 = __makeTemplateObject(["Force a sync to happen."], ["Force a sync to happen."]))) })),
        React.createElement("br", null)));
};
export var ansibleRepositorySyncAction = Action({
    condition: canSyncAnsibleRepository,
    title: msg(templateObject_12 || (templateObject_12 = __makeTemplateObject(["Sync"], ["Sync"]))),
    modal: function (_a) {
        var addAlert = _a.addAlert, query = _a.query, setState = _a.setState, state = _a.state;
        return state.syncModalOpen ? (React.createElement(SyncModal, { closeAction: function () { return setState({ syncModalOpen: null }); }, syncAction: function (syncParams) {
                return syncRepository(state.syncModalOpen, { addAlert: addAlert, query: query }, syncParams);
            }, name: state.syncModalOpen.name })) : null;
    },
    onClick: function (_a, _b) {
        var name = _a.name, pulp_href = _a.pulp_href;
        var setState = _b.setState;
        return setState({
            syncModalOpen: { name: name, pulp_href: pulp_href },
        });
    },
    visible: function (_item, _a) {
        var hasPermission = _a.hasPermission;
        return hasPermission('ansible.change_collectionremote');
    },
    disabled: function (_a) {
        var remote = _a.remote, last_sync_task = _a.last_sync_task;
        if (!remote) {
            return t(templateObject_13 || (templateObject_13 = __makeTemplateObject(["There are no remotes associated with this repository."], ["There are no remotes associated with this repository."])));
        }
        if (last_sync_task &&
            ['running', 'waiting'].includes(last_sync_task.state)) {
            return t(templateObject_14 || (templateObject_14 = __makeTemplateObject(["Sync task is already queued."], ["Sync task is already queued."])));
        }
        return null;
    },
});
function syncRepository(_a, _b, syncParams) {
    var name = _a.name, pulp_href = _a.pulp_href;
    var addAlert = _b.addAlert, query = _b.query;
    var pulpId = parsePulpIDFromURL(pulp_href);
    return AnsibleRepositoryAPI.sync(pulpId, syncParams || { mirror: true })
        .then(function (_a) {
        var data = _a.data;
        addAlert(taskAlert(data.task, t(templateObject_15 || (templateObject_15 = __makeTemplateObject(["Sync started for repository \"", "\"."], ["Sync started for repository \"", "\"."])), name)));
        query();
    })
        .catch(handleHttpError(t(templateObject_16 || (templateObject_16 = __makeTemplateObject(["Failed to sync repository \"", "\""], ["Failed to sync repository \"", "\""])), name), function () { return null; }, addAlert));
}
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16;
//# sourceMappingURL=ansible-repository-sync.js.map