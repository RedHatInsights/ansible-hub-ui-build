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
import { t } from '@lingui/macro';
import * as React from 'react';
import { withRouter } from 'react-router-dom';
import { BaseHeader, Breadcrumbs, LoadingPageWithHeader, Main, TagLabel, ClipboardCopy, } from '../../components';
import { DataList, DataListItem, DataListItemRow, DataListItemCells, DataListCell, Flex, FlexItem, LabelGroup, Title, } from '@patternfly/react-core';
import { sum } from 'lodash';
import { Paths, formatPath } from '../../paths';
import { ExecutionEnvironmentAPI } from '../../api';
import { getHumanSize } from 'src/utilities';
import './execution-environment-manifest.scss';
var ExecutionEnvironmentManifest = /** @class */ (function (_super) {
    __extends(ExecutionEnvironmentManifest, _super);
    function ExecutionEnvironmentManifest(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            container: { name: _this.props.match.params['container'] },
            digest: _this.props.match.params['digest'],
            environment: [],
            labels: [],
            layers: [],
            loading: true,
            selectedLayer: 'layer-0',
            size: 0,
        };
        return _this;
    }
    ExecutionEnvironmentManifest.prototype.componentDidMount = function () {
        var _this = this;
        var _a = this.state, container = _a.container, digest = _a.digest;
        var whileLoading = function (callback) {
            return _this.setState({ loading: true }, function () {
                return callback().then(function (data) { return _this.setState(__assign({ loading: false }, data)); });
            });
        };
        whileLoading(function () {
            return _this.query({
                container: container,
                digest: digest,
            });
        });
    };
    ExecutionEnvironmentManifest.prototype.render = function () {
        var _this = this;
        var _a = this.state, container = _a.container, digest = _a.digest, environment = _a.environment, labels = _a.labels, layers = _a.layers, loading = _a.loading, selectedLayer = _a.selectedLayer, size = _a.size;
        if (loading) {
            return React.createElement(LoadingPageWithHeader, null);
        }
        var command = (layers[selectedLayer.split(/-/)[1]] || {}).text;
        return (React.createElement(React.Fragment, null,
            React.createElement(BaseHeader, { title: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Image layers"], ["Image layers"]))), breadcrumbs: React.createElement(Breadcrumbs, { links: [
                        {
                            name: t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Container Registry"], ["Container Registry"]))),
                            url: Paths.executionEnvironments,
                        },
                        {
                            name: this.state.container.name,
                            url: formatPath(Paths.executionEnvironmentDetail, {
                                container: container.name,
                            }),
                        },
                        {
                            name: digest,
                        },
                    ] }) },
                React.createElement("div", null,
                    React.createElement(ClipboardCopy, { className: 'eco-clipboard-copy', isReadOnly: true }, digest)),
                React.createElement(LabelGroup, { numLabels: 6 }, labels.map(function (label) { return (React.createElement(TagLabel, { tag: label, key: label })); })),
                React.createElement("div", { style: { padding: '4px 0' } },
                    "Size: ",
                    size)),
            React.createElement(Main, null,
                React.createElement(Flex, null,
                    React.createElement(FlexItem, { className: 'layers-max-width' },
                        React.createElement("section", { className: 'body' },
                            React.createElement(Title, { headingLevel: 'h2', size: 'lg' }, t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Image layers"], ["Image layers"])))),
                            React.createElement(DataList, { "aria-label": t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["Image layers"], ["Image layers"]))), onSelectDataListItem: function (id) {
                                    return _this.setState({ selectedLayer: id });
                                }, selectedDataListItemId: selectedLayer }, layers.map(function (_a, index) {
                                var text = _a.text, size = _a.size;
                                return (React.createElement(DataListItem, { key: index, id: "layer-" + index },
                                    React.createElement(DataListItemRow, null,
                                        React.createElement(DataListItemCells, { dataListCells: [
                                                React.createElement(DataListCell, { key: 'primary content', className: 'single-line-ellipsis' },
                                                    React.createElement("code", null, text)),
                                                size && (React.createElement(DataListCell, { key: 'secondary content' }, size)),
                                            ] }))));
                            })))),
                    React.createElement(Flex, { direction: { default: 'column' }, className: 'layers-max-width' },
                        React.createElement(FlexItem, null,
                            React.createElement("section", { className: 'body' },
                                React.createElement(Title, { headingLevel: 'h2', size: 'lg' }, t(templateObject_5 || (templateObject_5 = __makeTemplateObject(["Command"], ["Command"])))),
                                React.createElement("code", null, command))),
                        React.createElement(FlexItem, null,
                            React.createElement("section", { className: 'body' },
                                React.createElement(Title, { headingLevel: 'h2', size: 'lg' }, t(templateObject_6 || (templateObject_6 = __makeTemplateObject(["Environment"], ["Environment"])))),
                                environment.map(function (line, index) { return (React.createElement(React.Fragment, { key: index },
                                    React.createElement("code", null, line),
                                    React.createElement("br", null))); }))))))));
    };
    ExecutionEnvironmentManifest.prototype.query = function (_a) {
        var container = _a.container, digestOrTag = _a.digest;
        return ExecutionEnvironmentAPI.image(container.name, digestOrTag).then(function (_a) {
            var _b = _a.data, config_blob = _b.config_blob, digest = _b.digest, layers = _b.layers, tags = _b.tags;
            var sizes = layers.map(function (l) { return l.size; });
            var size = getHumanSize(sum(sizes));
            // convert '/bin/sh -c #(nop)  CMD ["sh"]' to 'CMD ["sh"]'
            // but keep anything without #(nop) unchanged
            var parseNop = function (str) { return str.replace(/^.*#\(nop\)\s+(.*)/, '$1'); };
            var history = config_blob.data.history.map(function (_a) {
                var created_by = _a.created_by;
                return ({
                    text: parseNop(created_by),
                    // FIXME: size, but no correspondence between the order of history (which have the commands) and layers (which have sizes)
                });
            });
            return {
                digest: digest,
                environment: config_blob.data.config.Env || [],
                labels: tags || [],
                layers: history,
                size: size,
            };
        });
    };
    return ExecutionEnvironmentManifest;
}(React.Component));
export default withRouter(ExecutionEnvironmentManifest);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
//# sourceMappingURL=execution-environment-manifest.js.map