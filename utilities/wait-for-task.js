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
import { t } from '@lingui/macro';
import { TaskAPI } from 'src/api';
import { parsePulpIDFromURL } from './parse-pulp-id';
export function waitForTask(task, options) {
    if (options === void 0) { options = {}; }
    // default to starting with a 2s wait, increasing the wait time 1.5x each time, with max 10 attempts
    // 2000, 1.5, 10 = ~226s ; 500, 1.5, 10 = ~57s
    var _a = options.waitMs, waitMs = _a === void 0 ? 2000 : _a, _b = options.multiplier, multiplier = _b === void 0 ? 1.5 : _b, _c = options.bailAfter, bailAfter = _c === void 0 ? 10 : _c;
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
                return waitForTask(task, __assign(__assign({}, options), { waitMs: Math.round(waitMs * multiplier), bailAfter: bailAfter - 1 }));
            });
        }
    });
}
export function waitForTaskUrl(taskUrl, options) {
    if (options === void 0) { options = {}; }
    return waitForTask(parsePulpIDFromURL(taskUrl), options);
}
var templateObject_1, templateObject_2;
//# sourceMappingURL=wait-for-task.js.map