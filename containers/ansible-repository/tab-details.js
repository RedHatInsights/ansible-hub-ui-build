var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { t } from '@lingui/macro';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnsibleRemoteAPI, } from 'src/api';
import { Details, LazyDistributions, PulpLabels } from 'src/components';
import { Paths, formatPath } from 'src/paths';
import { parsePulpIDFromURL } from 'src/utilities';
export var DetailsTab = function (_a) {
    var _b;
    var item = _a.item;
    var _c = useState(null), remote = _c[0], setRemote = _c[1];
    useEffect(function () {
        var pk = item.remote && parsePulpIDFromURL(item.remote);
        if (pk) {
            AnsibleRemoteAPI.get(pk).then(function (_a) {
                var data = _a.data;
                return setRemote(data);
            });
        }
        else {
            setRemote(null);
        }
    }, [item.remote]);
    return (React.createElement(Details, { fields: [
            { label: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Repository name"], ["Repository name"]))), value: item === null || item === void 0 ? void 0 : item.name },
            { label: t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Description"], ["Description"]))), value: (item === null || item === void 0 ? void 0 : item.description) || t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["None"], ["None"]))) },
            {
                label: t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["Retained version count"], ["Retained version count"]))),
                value: (_b = item === null || item === void 0 ? void 0 : item.retain_repo_versions) !== null && _b !== void 0 ? _b : t(templateObject_5 || (templateObject_5 = __makeTemplateObject(["All"], ["All"]))),
            },
            {
                label: t(templateObject_6 || (templateObject_6 = __makeTemplateObject(["Distribution"], ["Distribution"]))),
                value: React.createElement(LazyDistributions, { repositoryHref: item.pulp_href }),
            },
            {
                label: t(templateObject_7 || (templateObject_7 = __makeTemplateObject(["Labels"], ["Labels"]))),
                value: React.createElement(PulpLabels, { labels: item === null || item === void 0 ? void 0 : item.pulp_labels }),
            },
            {
                label: t(templateObject_8 || (templateObject_8 = __makeTemplateObject(["Remote"], ["Remote"]))),
                value: remote ? (React.createElement(Link, { to: formatPath(Paths.ansibleRemoteDetail, { name: remote.name }) }, remote.name)) : (t(templateObject_9 || (templateObject_9 = __makeTemplateObject(["None"], ["None"])))),
            },
        ] }));
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9;
//# sourceMappingURL=tab-details.js.map