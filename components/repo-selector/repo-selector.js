var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { t } from '@lingui/macro';
import { Flex, FlexItem, InputGroup, InputGroupText, } from '@patternfly/react-core';
import React from 'react';
export var RepoSelector = function (_a) {
    var selectedRepo = _a.selectedRepo;
    var repoName = {
        community: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Community"], ["Community"]))),
        published: t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Published"], ["Published"]))),
        rejected: t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Rejected"], ["Rejected"]))),
        'rh-certified': t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["Red Hat Certified"], ["Red Hat Certified"]))),
        staging: t(templateObject_5 || (templateObject_5 = __makeTemplateObject(["Staging"], ["Staging"]))),
        validated: t(templateObject_6 || (templateObject_6 = __makeTemplateObject(["Validated"], ["Validated"]))),
    }[selectedRepo] || selectedRepo;
    return (React.createElement(Flex, null,
        React.createElement(FlexItem, null,
            React.createElement(InputGroup, null,
                React.createElement(InputGroupText, { style: { paddingLeft: 0 }, variant: 'plain' }, t(templateObject_7 || (templateObject_7 = __makeTemplateObject(["Repository"], ["Repository"])))),
                React.createElement(InputGroupText, { variant: 'plain', style: {
                        backgroundColor: 'var(--pf-global--disabled-color--300)',
                        color: 'var(--pf-global--Color--100)',
                        height: '36px',
                    } }, repoName)))));
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
//# sourceMappingURL=repo-selector.js.map