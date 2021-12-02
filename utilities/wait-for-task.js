var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { t } from '@lingui/macro';
import { TaskAPI } from 'src/api';
export function waitForTask(task, bailAfter) {
    if (bailAfter === void 0) { bailAfter = 10; }
    return TaskAPI.get(task).then(function (result) {
        if (result.data.state !== 'completed') {
            if (!bailAfter) {
                return Promise.reject(new Error(t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Giving up waiting for task after 10 attempts."], ["Giving up waiting for task after 10 attempts."])))));
            }
            return new Promise(function (r) { return setTimeout(r, 5000); }).then(function () {
                return waitForTask(task, bailAfter - 1);
            });
        }
    });
}
var templateObject_1;
//# sourceMappingURL=wait-for-task.js.map