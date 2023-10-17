var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { t } from '@lingui/macro';
import React from 'react';
import { Link } from 'react-router-dom';
import { CopyURL, Details, LazyDistributions, PulpLabels, } from 'src/components';
import { Paths, formatPath } from 'src/paths';
import { getRepoURL } from 'src/utilities';
export var DetailsTab = function (_a) {
    var _b;
    var item = _a.item;
    return (React.createElement(Details, { fields: [
            { label: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Repository name"], ["Repository name"]))), value: item === null || item === void 0 ? void 0 : item.name },
            { label: t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Description"], ["Description"]))), value: (item === null || item === void 0 ? void 0 : item.description) || t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["None"], ["None"]))) },
            {
                label: t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["Retained version count"], ["Retained version count"]))),
                value: (_b = item === null || item === void 0 ? void 0 : item.retain_repo_versions) !== null && _b !== void 0 ? _b : t(templateObject_5 || (templateObject_5 = __makeTemplateObject(["All"], ["All"]))),
            },
            {
                label: t(templateObject_6 || (templateObject_6 = __makeTemplateObject(["Distribution"], ["Distribution"]))),
                value: React.createElement(LazyDistributions, { repositoryHref: item === null || item === void 0 ? void 0 : item.pulp_href }),
            },
            {
                label: t(templateObject_7 || (templateObject_7 = __makeTemplateObject(["Repository URL"], ["Repository URL"]))),
                value: (item === null || item === void 0 ? void 0 : item.distroBasePath) ? (React.createElement(CopyURL, { url: getRepoURL(item.distroBasePath) })) : ('---'),
            },
            {
                label: t(templateObject_8 || (templateObject_8 = __makeTemplateObject(["Labels"], ["Labels"]))),
                value: React.createElement(PulpLabels, { labels: item === null || item === void 0 ? void 0 : item.pulp_labels }),
            },
            {
                label: t(templateObject_9 || (templateObject_9 = __makeTemplateObject(["Private"], ["Private"]))),
                value: (item === null || item === void 0 ? void 0 : item.private) ? t(templateObject_10 || (templateObject_10 = __makeTemplateObject(["Yes"], ["Yes"]))) : t(templateObject_11 || (templateObject_11 = __makeTemplateObject(["No"], ["No"]))),
            },
            {
                label: t(templateObject_12 || (templateObject_12 = __makeTemplateObject(["Remote"], ["Remote"]))),
                value: (item === null || item === void 0 ? void 0 : item.remote) ? (React.createElement(Link, { to: formatPath(Paths.ansibleRemoteDetail, {
                        name: item === null || item === void 0 ? void 0 : item.remote.name,
                    }) }, item === null || item === void 0 ? void 0 : item.remote.name)) : (t(templateObject_13 || (templateObject_13 = __makeTemplateObject(["None"], ["None"])))),
            },
        ] }));
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13;
//# sourceMappingURL=tab-details.js.map