import { Trans } from '@lingui/macro';
import React from 'react';
import { BaseHeader, Breadcrumbs } from 'src/components';
export var RoleHeader = function (_a) {
    var title = _a.title, subTitle = _a.subTitle, breadcrumbs = _a.breadcrumbs;
    return (React.createElement(BaseHeader, { breadcrumbs: React.createElement(Breadcrumbs, { links: breadcrumbs }), title: title },
        ' ',
        React.createElement("div", { style: { paddingBottom: '10px' } },
            React.createElement(Trans, null, subTitle))));
};
//# sourceMappingURL=role-header.js.map