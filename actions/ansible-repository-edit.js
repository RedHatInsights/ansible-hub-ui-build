var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { msg } from '@lingui/macro';
import { Paths, formatPath } from 'src/paths';
import { canEditAnsibleRepository } from 'src/permissions';
import { Action } from './action';
export var ansibleRepositoryEditAction = Action({
    condition: canEditAnsibleRepository,
    title: msg(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Edit"], ["Edit"]))),
    onClick: function (_a, _b) {
        var name = _a.name;
        var navigate = _b.navigate;
        return navigate(formatPath(Paths.ansibleRepositoryEdit, { name: name }));
    },
});
var templateObject_1;
//# sourceMappingURL=ansible-repository-edit.js.map