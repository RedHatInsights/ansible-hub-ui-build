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
import { Trans, t } from '@lingui/macro';
import { Badge, Card, CardBody, CardFooter, CardHeader, Text, TextContent, TextVariants, Tooltip, } from '@patternfly/react-core';
import cx from 'classnames';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { CollectionNumericLabel, Logo, SignatureBadge } from 'src/components';
import { Constants } from 'src/constants';
import { Paths, formatPath } from 'src/paths';
import { convertContentSummaryCounts } from 'src/utilities';
var CollectionCard = /** @class */ (function (_super) {
    __extends(CollectionCard, _super);
    function CollectionCard() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.MAX_DESCRIPTION_LENGTH = 60;
        return _this;
    }
    CollectionCard.prototype.render = function () {
        var _this = this;
        var _a = this.props, name = _a.name, latest_version = _a.latest_version, namespace = _a.namespace, className = _a.className, displaySignatures = _a.displaySignatures, footer = _a.footer, repo = _a.repo, sign_state = _a.sign_state, menu = _a.menu;
        var company = namespace.company || namespace.name;
        var contentSummary = convertContentSummaryCounts(latest_version.metadata);
        return (React.createElement(Card, { className: cx('hub-c-card-collection-container ', className) },
            React.createElement(CardHeader, { className: 'logo-row' },
                React.createElement(Logo, { alt: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["", " logo"], ["", " logo"])), company), fallbackToDefault: true, image: namespace.avatar_url, size: '40px', unlockWidth: true, flexGrow: true }),
                React.createElement(TextContent, null, this.getCertification(repo)),
                displaySignatures ? (React.createElement(SignatureBadge, { isCompact: true, signState: sign_state })) : null,
                menu),
            React.createElement(CardHeader, null,
                React.createElement("div", { className: 'name' },
                    React.createElement(Link, { to: formatPath(Paths.collectionByRepo, {
                            collection: name,
                            namespace: namespace.name,
                            repo: repo,
                        }) }, name)),
                React.createElement("div", { className: 'author' },
                    React.createElement(TextContent, null,
                        React.createElement(Text, { component: TextVariants.small },
                            React.createElement(Trans, null,
                                "Provided by ",
                                company))))),
            React.createElement(CardBody, null,
                React.createElement(Tooltip, { content: React.createElement("div", null, latest_version.metadata.description) },
                    React.createElement("div", { className: 'description' }, this.getDescription(latest_version.metadata.description)))),
            React.createElement(CardBody, { className: 'type-container' }, Object.keys(contentSummary.contents).map(function (k) {
                return _this.renderTypeCount(k, contentSummary.contents[k]);
            })),
            footer && React.createElement(CardFooter, null, footer)));
    };
    CollectionCard.prototype.getCertification = function (repo) {
        if (repo === Constants.CERTIFIED_REPO) {
            return (React.createElement(Text, { component: TextVariants.small },
                React.createElement(Badge, { isRead: true }, t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Certified"], ["Certified"]))))));
        }
        return null;
    };
    CollectionCard.prototype.getDescription = function (d) {
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
    CollectionCard.prototype.renderTypeCount = function (type, count) {
        return (React.createElement("div", { key: type },
            React.createElement(CollectionNumericLabel, { count: count, newline: true, type: type })));
    };
    return CollectionCard;
}(React.Component));
export { CollectionCard };
var templateObject_1, templateObject_2;
//# sourceMappingURL=collection-card.js.map