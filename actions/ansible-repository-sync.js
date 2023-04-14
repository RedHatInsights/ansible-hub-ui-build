var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { t } from '@lingui/macro';
import { AnsibleRepositoryAPI } from 'src/api';
import { canSyncAnsibleRepository } from 'src/permissions';
import { handleHttpError, parsePulpIDFromURL, taskAlert } from 'src/utilities';
import { Action } from './action';
export var ansibleRepositorySyncAction = Action({
    condition: canSyncAnsibleRepository,
    title: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Sync"], ["Sync"]))),
    onClick: function (_a, _b) {
        var name = _a.name, pulp_href = _a.pulp_href;
        var addAlert = _b.addAlert, query = _b.query;
        var pulpId = parsePulpIDFromURL(pulp_href);
        AnsibleRepositoryAPI.sync(pulpId, { mirror: true })
            .then(function (_a) {
            var data = _a.data;
            addAlert(taskAlert(data.task, t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Sync started for repository \"", "\"."], ["Sync started for repository \"", "\"."])), name)));
            query();
        })
            .catch(handleHttpError(t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Failed to sync repository \"", "\""], ["Failed to sync repository \"", "\""])), name), function () { return null; }, addAlert));
    },
    visible: function (_item, _a) {
        var hasPermission = _a.hasPermission;
        return hasPermission('ansible.change_collectionremote');
    },
    disabled: function (_a) {
        var remote = _a.remote, last_sync_task = _a.last_sync_task;
        if (!remote) {
            return t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["There are no remotes associated with this repository."], ["There are no remotes associated with this repository."])));
        }
        if (last_sync_task &&
            ['running', 'waiting'].includes(last_sync_task.state)) {
            return t(templateObject_5 || (templateObject_5 = __makeTemplateObject(["Sync task is already queued."], ["Sync task is already queued."])));
        }
        return null;
    },
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
//# sourceMappingURL=ansible-repository-sync.js.map