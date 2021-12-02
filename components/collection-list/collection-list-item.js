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
import * as React from 'react';
import { t, Trans } from '@lingui/macro';
import './list-item.scss';
import { DataListItem, DataListItemRow, DataListItemCells, DataListCell, LabelGroup, TextContent, Text, TextVariants, } from '@patternfly/react-core';
import { Link } from 'react-router-dom';
import { Paths, formatPath } from 'src/paths';
import { NumericLabel, Tag, Logo, DeprecatedTag, DateComponent, } from 'src/components';
import { convertContentSummaryCounts } from 'src/utilities';
import { Constants } from 'src/constants';
var CollectionListItem = /** @class */ (function (_super) {
    __extends(CollectionListItem, _super);
    function CollectionListItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CollectionListItem.prototype.render = function () {
        var _a = this.props, name = _a.name, 
        // download_count,
        latest_version = _a.latest_version, namespace = _a.namespace, showNamespace = _a.showNamespace, controls = _a.controls, deprecated = _a.deprecated, repo = _a.repo;
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
                    }) }, name),
                deprecated && React.createElement(DeprecatedTag, null),
                showNamespace ? (React.createElement(TextContent, null,
                    React.createElement(Text, { component: TextVariants.small },
                        React.createElement(Trans, null,
                            "Provided by ",
                            company)))) : null),
            React.createElement("div", { className: 'entry' }, latest_version.metadata.description),
            React.createElement("div", { className: 'entry pf-l-flex pf-m-wrap content' }, Object.keys(contentSummary.contents).map(function (k) { return (React.createElement("div", { key: k },
                React.createElement(NumericLabel, { className: 'numeric-label-capitalize-text', label: k, number: contentSummary.contents[k], pluralLabels: Constants.COLLECTION_PLURAL_LABELS[k] }))); })),
            React.createElement("div", { className: 'entry pf-l-flex pf-m-wrap' },
                React.createElement(LabelGroup, null, latest_version.metadata.tags.map(function (tag, index) { return (React.createElement(Tag, { key: index }, tag)); })))));
        cells.push(React.createElement(DataListCell, { isFilled: false, alignRight: true, key: 'stats' },
            controls ? React.createElement("div", { className: 'entry' }, controls) : null,
            React.createElement("div", { className: 'right-col entry' },
                React.createElement(Trans, null,
                    "Updated ",
                    React.createElement(DateComponent, { date: latest_version.created_at }))),
            React.createElement("div", { className: 'entry' },
                "v",
                latest_version.version)));
        return (React.createElement(DataListItem, { "aria-labelledby": 'simple-item1' },
            React.createElement(DataListItemRow, null,
                React.createElement(DataListItemCells, { dataListCells: cells }))));
    };
    return CollectionListItem;
}(React.Component));
export { CollectionListItem };
var templateObject_1;
//# sourceMappingURL=collection-list-item.js.map