var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { Trans, t } from '@lingui/macro';
import { DataListCell, DataListItem, DataListItemCells, DataListItemRow, LabelGroup, Text, TextContent, TextVariants, } from '@patternfly/react-core';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { CollectionNumericLabel, DateComponent, DeprecatedTag, Logo, Tag, } from 'src/components';
import { Paths, formatPath } from 'src/paths';
import { chipGroupProps, convertContentSummaryCounts } from 'src/utilities';
import { SignatureBadge } from '../signing';
import './list-item.scss';
export var CollectionListItem = function (props) {
    var name = props.name, latest_version = props.latest_version, namespace = props.namespace, showNamespace = props.showNamespace, controls = props.controls, deprecated = props.deprecated, displaySignatures = props.displaySignatures, repo = props.repo, sign_state = props.sign_state;
    var cells = [];
    var company = namespace.company || namespace.name;
    if (showNamespace) {
        cells.push(React.createElement(DataListCell, { isFilled: false, alignRight: false, key: 'ns' },
            React.createElement(Logo, { alt: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["", " logo"], ["", " logo"])), company), fallbackToDefault: true, image: namespace.avatar_url, size: '40px', unlockWidth: true, width: '97px' })));
    }
    var contentSummary = convertContentSummaryCounts(latest_version.metadata);
    cells.push(React.createElement(DataListCell, { key: 'content' },
        React.createElement("div", null,
            React.createElement(Link, { to: formatPath(Paths.collectionByRepo, {
                    collection: name,
                    namespace: namespace.name,
                    repo: repo,
                }), "data-cy": 'CollectionList-name' }, name),
            deprecated && React.createElement(DeprecatedTag, null),
            showNamespace ? (React.createElement(TextContent, null,
                React.createElement(Text, { component: TextVariants.small },
                    React.createElement(Trans, null,
                        "Provided by ",
                        company)))) : null),
        React.createElement("div", { className: 'hub-entry' }, latest_version.metadata.description),
        React.createElement("div", { className: 'hub-entry pf-l-flex pf-m-wrap' }, Object.keys(contentSummary.contents).map(function (type) { return (React.createElement("div", { key: type },
            React.createElement(CollectionNumericLabel, { count: contentSummary.contents[type], type: type }))); })),
        React.createElement("div", { className: 'hub-entry pf-l-flex pf-m-wrap' },
            React.createElement(LabelGroup, __assign({}, chipGroupProps()), latest_version.metadata.tags.map(function (tag, index) { return (React.createElement(Tag, { key: index }, tag)); })))));
    cells.push(React.createElement(DataListCell, { isFilled: false, alignRight: true, key: 'stats' },
        controls ? React.createElement("div", { className: 'hub-entry' }, controls) : null,
        React.createElement("div", { className: 'hub-right-col hub-entry' },
            React.createElement(Trans, null,
                "Updated ",
                React.createElement(DateComponent, { date: latest_version.created_at }))),
        React.createElement("div", { className: 'hub-entry' },
            "v",
            latest_version.version),
        displaySignatures ? (React.createElement(SignatureBadge, { className: 'hub-entry', signState: sign_state })) : null));
    return (React.createElement(DataListItem, { "data-cy": 'CollectionListItem' },
        React.createElement(DataListItemRow, null,
            React.createElement(DataListItemCells, { dataListCells: cells }))));
};
var templateObject_1;
//# sourceMappingURL=collection-list-item.js.map