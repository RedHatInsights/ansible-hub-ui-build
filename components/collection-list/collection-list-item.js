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
import { DataListCell, DataListItem, DataListItemCells, DataListItemRow, Flex, FlexItem, Label, LabelGroup, Text, TextContent, TextVariants, } from '@patternfly/react-core';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { CollectionNumericLabel, DateComponent, DeprecatedTag, Logo, Tag, } from 'src/components';
import { useContext } from 'src/loaders/app-context';
import { Paths, formatPath } from 'src/paths';
import { chipGroupProps, convertContentSummaryCounts } from 'src/utilities';
import { SignatureBadge } from '../signing';
import './list-item.scss';
export var CollectionListItem = function (_a) {
    var _b = _a.collection, collection_version = _b.collection_version, namespace = _b.namespace_metadata, repository = _b.repository, is_signed = _b.is_signed, is_deprecated = _b.is_deprecated, displaySignatures = _a.displaySignatures, dropdownMenu = _a.dropdownMenu, showNamespace = _a.showNamespace, synclistSwitch = _a.synclistSwitch, uploadButton = _a.uploadButton;
    var featureFlags = useContext().featureFlags;
    var cells = [];
    var company = (namespace === null || namespace === void 0 ? void 0 : namespace.company) || collection_version.namespace;
    if (showNamespace) {
        cells.push(React.createElement(DataListCell, { isFilled: false, alignRight: false, key: 'ns' },
            React.createElement(Logo, { alt: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["", " logo"], ["", " logo"])), company), fallbackToDefault: true, image: namespace === null || namespace === void 0 ? void 0 : namespace.avatar_url, size: '130px', unlockWidth: true, width: '97px' })));
    }
    var contentSummary = convertContentSummaryCounts(collection_version);
    cells.push(React.createElement(DataListCell, { key: 'content' },
        React.createElement("div", null,
            React.createElement(Link, { to: formatPath(Paths.collectionByRepo, {
                    collection: collection_version.name,
                    namespace: collection_version.namespace,
                    repo: repository.name,
                }), "data-cy": 'CollectionList-name' }, collection_version.name),
            is_deprecated && React.createElement(DeprecatedTag, null),
            showNamespace ? (React.createElement(TextContent, null,
                React.createElement(Text, { component: TextVariants.small },
                    React.createElement(Trans, null,
                        "Provided by\u00A0",
                        React.createElement(Link, { to: formatPath(Paths.namespaceDetail, {
                                namespace: collection_version.namespace,
                            }) }, company))))) : null),
        React.createElement("div", { className: 'hub-entry pf-l-flex pf-m-wrap' }, Object.keys(contentSummary.contents).map(function (type) { return (React.createElement("div", { key: type },
            React.createElement(CollectionNumericLabel, { count: contentSummary.contents[type], type: type }))); })),
        React.createElement("div", { className: 'hub-entry pf-l-flex pf-m-wrap' },
            React.createElement(LabelGroup, __assign({}, chipGroupProps()), collection_version.tags.map(function (tag, index) { return (React.createElement(Tag, { key: index }, tag.name)); })))));
    cells.push(React.createElement(DataListCell, { isFilled: false, alignRight: true, key: 'stats' },
        React.createElement(Flex, { direction: { default: 'column' }, alignItems: { default: 'alignItemsFlexEnd' } },
            React.createElement(Flex, { direction: { default: 'column' }, alignItems: { default: 'alignItemsFlexStart' } },
                synclistSwitch && React.createElement(FlexItem, null, synclistSwitch),
                uploadButton || dropdownMenu ? (React.createElement(FlexItem, null,
                    uploadButton,
                    dropdownMenu || React.createElement("span", { className: 'hidden-menu-space' }))) : null,
                React.createElement(FlexItem, null,
                    React.createElement("div", null,
                        React.createElement(Trans, null,
                            "Updated ",
                            React.createElement(DateComponent, { date: collection_version.pulp_created }))),
                    React.createElement("div", null,
                        "v",
                        collection_version.version))),
            React.createElement(Flex, { direction: { default: 'row' }, alignSelf: { default: 'alignSelfFlexStart' } },
                featureFlags.display_repositories ? (React.createElement(FlexItem, null,
                    React.createElement(Label, { variant: 'outline' },
                        React.createElement(Link, { to: formatPath(Paths.ansibleRepositoryDetail, {
                                name: repository.name,
                            }) }, repository.name)))) : null,
                displaySignatures ? (React.createElement(FlexItem, null,
                    React.createElement(SignatureBadge, { variant: 'outline', signState: is_signed ? 'signed' : 'unsigned' }))) : null))));
    return (React.createElement(DataListItem, { "data-cy": 'CollectionListItem' },
        React.createElement(DataListItemRow, null,
            React.createElement(DataListItemCells, { dataListCells: cells }))));
};
var templateObject_1;
//# sourceMappingURL=collection-list-item.js.map