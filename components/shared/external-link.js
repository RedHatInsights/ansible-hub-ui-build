import ExternalLinkAltIcon from '@patternfly/react-icons/dist/esm/icons/external-link-alt-icon';
import React from 'react';
export var ExternalLink = function (_a) {
    var children = _a.children, className = _a.className, externalLinkIconStyle = _a.externalLinkIconStyle, href = _a.href, title = _a.title;
    if (!href || !title) {
        return null;
    }
    return (React.createElement(React.Fragment, null,
        React.createElement("a", { className: className, href: href, rel: 'noreferrer noopener', target: '_blank' }, title || children),
        ' ',
        React.createElement("small", { style: { display: 'inline' } },
            React.createElement(ExternalLinkAltIcon, { style: externalLinkIconStyle || {} }))));
};
//# sourceMappingURL=external-link.js.map