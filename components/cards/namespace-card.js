var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { t } from '@lingui/macro';
import { Card, CardBody, CardFooter, CardHeader, CardHeaderMain, CardTitle, Tooltip, } from '@patternfly/react-core';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from 'src/components';
import './cards.scss';
export var NamespaceCard = function (_a) {
    var avatar_url = _a.avatar_url, name = _a.name, company = _a.company, namespaceURL = _a.namespaceURL;
    var MAX_DESCRIPTION_LENGTH = 26;
    return (React.createElement(Card, { className: 'hub-c-card-ns-container' },
        React.createElement(CardHeader, null,
            React.createElement(CardHeaderMain, null,
                React.createElement(Logo, { alt: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["", " logo"], ["", " logo"])), company), fallbackToDefault: true, image: avatar_url, size: '40px', unlockWidth: true }))),
        React.createElement(Tooltip, { content: company || name },
            React.createElement(CardTitle, null, getDescription(company || name, MAX_DESCRIPTION_LENGTH))),
        React.createElement(Tooltip, { content: name },
            React.createElement(CardBody, null, getDescription(name, MAX_DESCRIPTION_LENGTH))),
        namespaceURL && (React.createElement(CardFooter, null,
            React.createElement(Link, { to: namespaceURL }, t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["View collections"], ["View collections"]))))))));
};
function getDescription(d, MAX_DESCRIPTION_LENGTH) {
    if (!d) {
        return '';
    }
    if (d.length > MAX_DESCRIPTION_LENGTH) {
        return d.slice(0, MAX_DESCRIPTION_LENGTH) + '...';
    }
    else {
        return d;
    }
}
var templateObject_1, templateObject_2;
//# sourceMappingURL=namespace-card.js.map