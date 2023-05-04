var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { t } from '@lingui/macro';
import { downloadString } from 'src/utilities';
import { Action } from './action';
export var ansibleRemoteDownloadClientAction = Action({
    title: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Download client certificate"], ["Download client certificate"]))),
    onClick: function (_a) {
        var client_cert = _a.client_cert;
        return downloadString(client_cert, 'client_cert');
    },
    visible: function (_a) {
        var client_cert = _a.client_cert;
        return !!client_cert;
    },
});
var templateObject_1;
//# sourceMappingURL=ansible-remote-download-client.js.map