import { Tooltip as PFTooltip } from '@patternfly/react-core';
import React from 'react';
export var Tooltip = function (_a) {
    var content = _a.content, children = _a.children;
    return (React.createElement(PFTooltip, { content: content },
        React.createElement("span", null, children)));
};
//# sourceMappingURL=tooltip.js.map