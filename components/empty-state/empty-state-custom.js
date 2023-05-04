import { EmptyState, EmptyStateBody, EmptyStateIcon, EmptyStatePrimary, EmptyStateVariant, Title, } from '@patternfly/react-core';
import * as React from 'react';
export var EmptyStateCustom = function (_a) {
    var icon = _a.icon, title = _a.title, description = _a.description, button = _a.button, _b = _a.variant, variant = _b === void 0 ? 'small' : _b;
    return (React.createElement(EmptyState, { variant: EmptyStateVariant[variant], "data-cy": 'EmptyState' },
        React.createElement(EmptyStateIcon, { icon: icon }),
        React.createElement(Title, { headingLevel: 'h4', size: 'lg' }, title),
        React.createElement(EmptyStateBody, null, description),
        button && React.createElement(EmptyStatePrimary, null, button)));
};
//# sourceMappingURL=empty-state-custom.js.map