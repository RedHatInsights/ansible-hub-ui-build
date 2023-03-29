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
export var CollectionCard = function (_a) {
    var collection_version = _a.collection_version, namespace = _a.namespace_metadata, repository = _a.repository, is_signed = _a.is_signed, className = _a.className, displaySignatures = _a.displaySignatures, menu = _a.menu, footer = _a.footer;
    var MAX_DESCRIPTION_LENGTH = 60;
    var company = (namespace === null || namespace === void 0 ? void 0 : namespace.company) || collection_version.namespace;
    var contentSummary = convertContentSummaryCounts(collection_version);
    return (React.createElement(Card, { className: cx('hub-c-card-collection-container ', className) },
        React.createElement(CardHeader, { className: 'logo-row' },
            React.createElement(Logo, { alt: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["", " logo"], ["", " logo"])), company), fallbackToDefault: true, image: namespace === null || namespace === void 0 ? void 0 : namespace.avatar_url, size: '40px', unlockWidth: true, flexGrow: true }),
            React.createElement("div", { className: 'card-badge-area' },
                React.createElement(TextContent, null,
                    React.createElement(Text, { component: TextVariants.small },
                        React.createElement(Badge, { isRead: true },
                            React.createElement(Link, { to: formatPath(Paths.ansibleRepositoryDetail, {
                                    name: repository.name,
                                }) }, repository.name === Constants.CERTIFIED_REPO
                                ? t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Certified"], ["Certified"]))) : repository.name)))),
                displaySignatures ? (React.createElement(SignatureBadge, { isCompact: true, signState: is_signed ? 'signed' : 'unsigned' })) : null),
            menu),
        React.createElement(CardHeader, null,
            React.createElement("div", { className: 'name' },
                React.createElement(Link, { to: formatPath(Paths.collectionByRepo, {
                        collection: collection_version.name,
                        namespace: collection_version.namespace,
                        repo: repository.name,
                    }) }, collection_version.name)),
            React.createElement("div", { className: 'author' },
                React.createElement(TextContent, null,
                    React.createElement(Text, { component: TextVariants.small },
                        React.createElement(Trans, null,
                            "Provided by\u00A0",
                            React.createElement(Link, { to: formatPath(Paths.namespaceDetail, {
                                    namespace: collection_version.namespace,
                                }) }, company)))))),
        React.createElement(CardBody, null,
            React.createElement(Tooltip, { content: React.createElement("div", null, collection_version.description) },
                React.createElement("div", { className: 'description' }, getDescription(collection_version.description, MAX_DESCRIPTION_LENGTH)))),
        React.createElement(CardBody, { className: 'type-container' }, Object.keys(contentSummary.contents).map(function (k) {
            return renderTypeCount(k, contentSummary.contents[k]);
        })),
        footer && React.createElement(CardFooter, null, footer)));
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
function renderTypeCount(type, count) {
    return (React.createElement("div", { key: type },
        React.createElement(CollectionNumericLabel, { count: count, newline: true, type: type })));
}
var templateObject_1, templateObject_2;
//# sourceMappingURL=collection-card.js.map