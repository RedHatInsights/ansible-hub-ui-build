import { Label } from '@patternfly/react-core';
import { TagIcon } from '@patternfly/react-icons';
import React from 'react';
export var TagLabel = function (_a) {
    var tag = _a.tag;
    return (React.createElement(Label, { variant: 'outline', icon: React.createElement(TagIcon, null) }, tag));
};
//# sourceMappingURL=tag-label.js.map