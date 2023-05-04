var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { t } from '@lingui/macro';
import { downloadString } from 'src/utilities';
import { Action } from './action';
export var ansibleRemoteDownloadCAAction = Action({
    title: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Download CA certificate"], ["Download CA certificate"]))),
    onClick: function (_a) {
        var ca_cert = _a.ca_cert;
        return downloadString(ca_cert, 'ca_cert');
    },
    visible: function (_a) {
        var ca_cert = _a.ca_cert;
        return !!ca_cert;
    },
});
var templateObject_1;
//# sourceMappingURL=ansible-remote-download-ca.js.map