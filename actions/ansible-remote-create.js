var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { msg } from '@lingui/macro';
import { Paths, formatPath } from 'src/paths';
import { canAddAnsibleRemote } from 'src/permissions';
import { Action } from './action';
export var ansibleRemoteCreateAction = Action({
    condition: canAddAnsibleRemote,
    title: msg(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Add remote"], ["Add remote"]))),
    onClick: function (item, _a) {
        var navigate = _a.navigate;
        return navigate(formatPath(Paths.ansibleRemoteEdit, { name: '_' }));
    },
});
var templateObject_1;
//# sourceMappingURL=ansible-remote-create.js.map