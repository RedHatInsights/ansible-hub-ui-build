import { Trans } from '@lingui/macro';
import { Text, TextContent, TextVariants } from '@patternfly/react-core';
import React from 'react';
import { Link } from 'react-router-dom';
export function ProviderLink(_a) {
    var name = _a.name, url = _a.url;
    return url ? (React.createElement(TextContent, null,
        React.createElement(Text, { component: TextVariants.small },
            React.createElement(Trans, null,
                "Provided by\u00A0",
                React.createElement(Link, { to: url }, name))))) : null;
}
//# sourceMappingURL=provider-link.js.map