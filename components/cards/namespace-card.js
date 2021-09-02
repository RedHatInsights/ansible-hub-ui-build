var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
import './cards.scss';
import { Card, CardBody, CardFooter, CardHeader, CardHeaderMain, CardTitle, } from '@patternfly/react-core';
import { Link } from 'react-router-dom';
import { Logo } from 'src/components';
var NamespaceCard = /** @class */ (function (_super) {
    __extends(NamespaceCard, _super);
    function NamespaceCard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NamespaceCard.prototype.render = function () {
        var _a = this.props, avatar_url = _a.avatar_url, name = _a.name, company = _a.company, namespaceURL = _a.namespaceURL;
        return (React.createElement(Card, { className: 'ns-card-container' },
            React.createElement(CardHeader, null,
                React.createElement(CardHeaderMain, null,
                    React.createElement(Logo, { unlockWidth: true, image: avatar_url, alt: company + ' logo', size: '50px' }))),
            React.createElement(CardTitle, null, company || name),
            React.createElement(CardBody, null, name),
            namespaceURL && (React.createElement(CardFooter, null,
                React.createElement(Link, { to: namespaceURL }, "View collections")))));
    };
    return NamespaceCard;
}(React.Component));
export { NamespaceCard };
//# sourceMappingURL=namespace-card.js.map