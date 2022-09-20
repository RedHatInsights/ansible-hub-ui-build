var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { t } from '@lingui/macro';
import { TaskAPI } from 'src/api';
import { parsePulpIDFromURL } from './parse-pulp-id';
export function waitForTask(task, waitMs, bailAfter) {
    if (waitMs === void 0) { waitMs = 5000; }
    if (bailAfter === void 0) { bailAfter = 10; }
    return TaskAPI.get(task).then(function (result) {
        var _a, _b;
        var failing = ['skipped', 'failed', 'canceled'];
        if (failing.includes(result.data.state)) {
            return Promise.reject((_b = (_a = result.data.error) === null || _a === void 0 ? void 0 : _a.description) !== null && _b !== void 0 ? _b : t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Task failed without error message."], ["Task failed without error message."]))));
        }
        if (result.data.state !== 'completed') {
            if (!bailAfter) {
                return Promise.reject(new Error(t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Giving up waiting for task after 10 attempts."], ["Giving up waiting for task after 10 attempts."])))));
            }
            return new Promise(function (r) { return setTimeout(r, waitMs); }).then(function () {
                return waitForTask(task, bailAfter - 1);
            });
        }
    });
}
export function waitForTaskUrl(taskUrl, bailAfter) {
    if (bailAfter === void 0) { bailAfter = 10; }
    return waitForTask(parsePulpIDFromURL(taskUrl), bailAfter);
}
var templateObject_1, templateObject_2;
//# sourceMappingURL=wait-for-task.js.map