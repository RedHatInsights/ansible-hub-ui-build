var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { t } from '@lingui/macro';
import { downloadString } from 'src/utilities';
import { Action } from './action';
export var ansibleRemoteDownloadRequirementsAction = Action({
    title: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Download requirements YAML"], ["Download requirements YAML"]))),
    onClick: function (_a) {
        var requirements_file = _a.requirements_file;
        return downloadString(requirements_file, 'requirements.yml');
    },
    visible: function (_a) {
        var requirements_file = _a.requirements_file;
        return !!requirements_file;
    },
});
var templateObject_1;
//# sourceMappingURL=ansible-remote-download-requirements.js.map