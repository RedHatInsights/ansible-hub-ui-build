var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { t } from '@lingui/macro';
import React, { useEffect, useState } from 'react';
import { CollectionVersionAPI } from 'src/api';
import { Details } from 'src/components';
import { handleHttpError } from 'src/utilities';
export var CollectionVersionsTab = function (_a) {
    var item = _a.item, addAlert = _a.actionContext.addAlert;
    var _b = useState([]), versions = _b[0], setVersions = _b[1];
    useEffect(function () {
        CollectionVersionAPI.list({ repository: item.name })
            .then(function (_a) {
            var data = _a.data.data;
            return setVersions(data);
        })
            .catch(handleHttpError(t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Failed to load collection versions"], ["Failed to load collection versions"]))), function () { return setVersions([]); }, addAlert));
    }, []);
    return React.createElement(Details, { item: versions });
};
var templateObject_1;
//# sourceMappingURL=tab-collection-versions.js.map