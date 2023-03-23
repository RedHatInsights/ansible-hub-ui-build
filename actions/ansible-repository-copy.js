var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { t } from '@lingui/macro';
import React from 'react';
import { getRepoUrl } from 'src/utilities';
import { Action } from './action';
export var ansibleRepositoryCopyAction = Action({
    title: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Copy CLI configuration"], ["Copy CLI configuration"]))),
    onClick: function (item, _a) {
        var addAlert = _a.addAlert;
        var cliConfig = [
            '[galaxy]',
            "server_list = ".concat(item.name, "_repo"),
            '',
            "[galaxy_server.".concat(item.name, "_repo]"),
            "url=".concat(getRepoUrl()),
            'token=<put your token here>',
        ].join('\n');
        navigator.clipboard.writeText(cliConfig);
        addAlert({
            title: t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Successfully copied to clipboard"], ["Successfully copied to clipboard"]))),
            variant: 'success',
            description: React.createElement("pre", null, cliConfig),
        });
    },
});
var templateObject_1, templateObject_2;
//# sourceMappingURL=ansible-repository-copy.js.map