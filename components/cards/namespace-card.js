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
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { t } from '@lingui/macro';
import * as React from 'react';
import './cards.scss';
import { Card, CardBody, CardFooter, CardHeader, CardHeaderMain, CardTitle, Tooltip, } from '@patternfly/react-core';
import { Link } from 'react-router-dom';
import { Logo } from 'src/components';
var NamespaceCard = /** @class */ (function (_super) {
    __extends(NamespaceCard, _super);
    function NamespaceCard() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.MAX_DESCRIPTION_LENGTH = 26;
        return _this;
    }
    NamespaceCard.prototype.render = function () {
        var _a = this.props, avatar_url = _a.avatar_url, name = _a.name, company = _a.company, namespaceURL = _a.namespaceURL;
        return (React.createElement(Card, { className: 'ns-card-container' },
            React.createElement(CardHeader, null,
                React.createElement(CardHeaderMain, null,
                    React.createElement(Logo, { alt: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["", " logo"], ["", " logo"])), company), fallbackToDefault: true, image: avatar_url, size: '40px', unlockWidth: true }))),
            React.createElement(Tooltip, { content: company || name },
                React.createElement(CardTitle, null, this.getDescription(company || name))),
            React.createElement(Tooltip, { content: name },
                React.createElement(CardBody, null, this.getDescription(name))),
            namespaceURL && (React.createElement(CardFooter, null,
                React.createElement(Link, { to: namespaceURL }, t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["View collections"], ["View collections"]))))))));
    };
    NamespaceCard.prototype.getDescription = function (d) {
        if (!d) {
            return '';
        }
        if (d.length > this.MAX_DESCRIPTION_LENGTH) {
            return d.slice(0, this.MAX_DESCRIPTION_LENGTH) + '...';
        }
        else {
            return d;
        }
    };
    return NamespaceCard;
}(React.Component));
export { NamespaceCard };
var templateObject_1, templateObject_2;
//# sourceMappingURL=namespace-card.js.map