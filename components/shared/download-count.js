var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { Trans, t } from '@lingui/macro';
import DownloadIcon from '@patternfly/react-icons/dist/esm/icons/download-icon';
import React from 'react';
import { Tooltip } from 'src/components';
import { Constants } from 'src/constants';
import { language } from 'src/l10n';
export var DownloadCount = function (_a) {
    var item = _a.item;
    if (DEPLOYMENT_MODE === Constants.INSIGHTS_DEPLOYMENT_MODE) {
        return null;
    }
    if (!(item === null || item === void 0 ? void 0 : item.download_count)) {
        return null;
    }
    var downloadCount = new Intl.NumberFormat(language).format(item.download_count);
    return (React.createElement(Tooltip, { content: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Download count is the sum of all versions' download counts"], ["Download count is the sum of all versions' download counts"]))) },
        React.createElement(DownloadIcon, null),
        " ",
        React.createElement(Trans, null,
            downloadCount,
            " Downloads")));
};
var templateObject_1;
//# sourceMappingURL=download-count.js.map