var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { t } from '@lingui/macro';
import { Paths, formatPath } from 'src/paths';
import { canAddAnsibleRepository } from 'src/permissions';
import { Action } from './action';
export var ansibleRepositoryCreateAction = Action({
    condition: canAddAnsibleRepository,
    title: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Add repository"], ["Add repository"]))),
    onClick: function (item, _a) {
        var navigate = _a.navigate;
        return navigate(formatPath(Paths.ansibleRepositoryEdit, { name: '_' }));
    },
});
var templateObject_1;
//# sourceMappingURL=ansible-repository-create.js.map