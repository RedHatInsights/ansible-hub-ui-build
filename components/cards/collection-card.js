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
    var name = _a.name, latest_version = _a.latest_version, namespace = _a.namespace, className = _a.className, displaySignatures = _a.displaySignatures, footer = _a.footer, repo = _a.repo, sign_state = _a.sign_state, menu = _a.menu;
    var MAX_DESCRIPTION_LENGTH = 60;
    var company = namespace.company || namespace.name;
    var contentSummary = convertContentSummaryCounts(latest_version.metadata);
    return (React.createElement(Card, { className: cx('hub-c-card-collection-container ', className) },
        React.createElement(CardHeader, { className: 'logo-row' },
            React.createElement(Logo, { alt: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["", " logo"], ["", " logo"])), company), fallbackToDefault: true, image: namespace.avatar_url, size: '40px', unlockWidth: true, flexGrow: true }),
            React.createElement(TextContent, null, getCertification(repo)),
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
                React.createElement("div", { className: 'description' }, getDescription(latest_version.metadata.description, MAX_DESCRIPTION_LENGTH)))),
        React.createElement(CardBody, { className: 'type-container' }, Object.keys(contentSummary.contents).map(function (k) {
            return renderTypeCount(k, contentSummary.contents[k]);
        })),
        footer && React.createElement(CardFooter, null, footer)));
};
function getCertification(repo) {
    if (repo === Constants.CERTIFIED_REPO) {
        return (React.createElement(Text, { component: TextVariants.small },
            React.createElement(Badge, { isRead: true }, t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Certified"], ["Certified"]))))));
    }
    return null;
}
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