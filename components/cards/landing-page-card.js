import { Card, CardBody, CardHeader, Title } from '@patternfly/react-core';
import * as React from 'react';
export var LandingPageCard = function (_a) {
    var title = _a.title, body = _a.body;
    return (React.createElement(Card, { className: 'landing-page-card', style: {
            margin: '0 0 24px 24px',
            flex: '30%',
            borderTop: '3px solid #39a5dc',
        } },
        ' ',
        React.createElement("div", { style: {
                border: 0,
                borderBottom: '1px solid #d1d1d1',
            } },
            React.createElement(CardHeader, null,
                React.createElement(Title, { headingLevel: 'h1', size: '2xl' }, title))),
        React.createElement(CardBody, { style: { marginTop: '24px' } }, body)));
};
//# sourceMappingURL=landing-page-card.js.map