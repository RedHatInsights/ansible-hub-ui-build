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
import { Pagination, Toolbar } from '@patternfly/react-core';
import cx from 'classnames';
import React from 'react';
import { MyNamespaceAPI, PulpStatus, } from 'src/api';
import { APISearchTypeAhead, AppliedFilters, CompoundFilter, DateComponent, EmptyStateFilter, EmptyStateNoData, LoadingPageSpinner, } from 'src/components';
import { Constants } from 'src/constants';
import { ParamHelper, errorMessage, filterIsSet } from 'src/utilities';
import './my-imports.scss';
var ImportList = /** @class */ (function (_super) {
    __extends(ImportList, _super);
    function ImportList(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            kwField: '',
            inputText: '',
            namespaces: [],
        };
        return _this;
    }
    ImportList.prototype.componentDidMount = function () {
        this.loadNamespaces(this.props.params.namespace);
    };
    ImportList.prototype.render = function () {
        var _this = this;
        var _a = this.props, selectImport = _a.selectImport, importList = _a.importList, selectedImport = _a.selectedImport, numberOfResults = _a.numberOfResults, params = _a.params, updateParams = _a.updateParams, loading = _a.loading;
        return (React.createElement("div", { className: 'import-list' },
            this.renderApiSearchAhead(),
            React.createElement(Toolbar, null,
                React.createElement(CompoundFilter, { inputText: this.state.inputText, onChange: function (text) { return _this.setState({ inputText: text }); }, updateParams: function (p) { return _this.props.updateParams(p); }, params: params, filterConfig: [
                        {
                            id: 'keywords',
                            title: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Name"], ["Name"]))),
                        },
                        {
                            id: 'state',
                            title: t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Status"], ["Status"]))),
                            inputType: 'select',
                            options: [
                                {
                                    id: 'completed',
                                    title: t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Completed"], ["Completed"]))),
                                },
                                {
                                    id: 'failed',
                                    title: t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["Failed"], ["Failed"]))),
                                },
                                {
                                    id: 'running',
                                    title: t(templateObject_5 || (templateObject_5 = __makeTemplateObject(["Running"], ["Running"]))),
                                },
                                {
                                    id: 'waiting',
                                    title: t(templateObject_6 || (templateObject_6 = __makeTemplateObject(["Waiting"], ["Waiting"]))),
                                },
                            ],
                        },
                    ] })),
            React.createElement(AppliedFilters, { updateParams: function (p) {
                    _this.props.updateParams(p);
                    _this.setState({ inputText: '' });
                }, params: params, ignoredParams: ['page_size', 'page', 'sort', 'ordering', 'namespace'], niceNames: {
                    keywords: t(templateObject_7 || (templateObject_7 = __makeTemplateObject(["Name"], ["Name"]))),
                    state: t(templateObject_8 || (templateObject_8 = __makeTemplateObject(["Status"], ["Status"]))),
                } }),
            React.createElement("div", { "data-cy": 'import-list-data' }, this.renderList(selectImport, importList, selectedImport, loading)),
            this.props.params.namespace && (React.createElement(Pagination, { itemCount: numberOfResults, perPage: params.page_size || Constants.DEFAULT_PAGE_SIZE, page: params.page || 1, onSetPage: function (_, p) {
                    return updateParams(ParamHelper.setParam(params, 'page', p));
                }, onPerPageSelect: function (_, p) {
                    updateParams(__assign(__assign({}, params), { page: 1, page_size: p }));
                }, isCompact: true }))));
    };
    ImportList.prototype.renderList = function (selectImport, importList, selectedImport, loading) {
        var _this = this;
        if (!this.props.params.namespace) {
            return (React.createElement(EmptyStateNoData, { title: t(templateObject_9 || (templateObject_9 = __makeTemplateObject(["No namespace selected."], ["No namespace selected."]))), description: '' }));
        }
        if (loading) {
            return (React.createElement("div", { className: 'loading' },
                React.createElement(LoadingPageSpinner, null)));
        }
        if (importList.length === 0 &&
            !filterIsSet(this.props.params, ['keywords', 'state'])) {
            return (React.createElement(EmptyStateNoData, { title: t(templateObject_10 || (templateObject_10 = __makeTemplateObject(["No imports"], ["No imports"]))), description: t(templateObject_11 || (templateObject_11 = __makeTemplateObject(["There have not been any imports on this namespace."], ["There have not been any imports on this namespace."]))) }));
        }
        else if (importList.length === 0) {
            return React.createElement(EmptyStateFilter, null);
        }
        return (React.createElement("div", null, importList.map(function (item) {
            return (React.createElement("div", { onClick: function () { return selectImport(item); }, key: item.id, className: cx({
                    clickable: true,
                    'list-container': true,
                    'hub-c-toolbar__item-selected-item': item.type === selectedImport.type &&
                        item.id === selectedImport.id,
                }), "data-cy": "ImportList-row-".concat(item.name) },
                React.createElement("div", { className: 'left' },
                    React.createElement("i", { className: _this.getStatusClass(item.state) })),
                React.createElement("div", { className: 'right' }, _this.renderDescription(item))));
        })));
    };
    ImportList.prototype.renderDescription = function (item) {
        return (React.createElement("div", null,
            React.createElement("div", null,
                React.createElement("span", { "data-cy": 'item-name' }, item.name),
                ' ',
                item.version ? 'v' + item.version : ''),
            React.createElement("div", { className: 'sub-text' },
                "Status: ",
                item.state,
                ' ',
                item.finished_at ? React.createElement(DateComponent, { date: item.finished_at }) : null)));
    };
    ImportList.prototype.getStatusClass = function (state) {
        var statusClass = 'fa status-icon ';
        switch (state) {
            case PulpStatus.running:
                return statusClass + 'fa-spin fa-spinner warning';
            case PulpStatus.waiting:
                return statusClass + 'fa-spin fa-spinner warning';
            case PulpStatus.completed:
                return statusClass + 'fa-circle success';
            default:
                return statusClass + 'fa-circle failed';
        }
    };
    ImportList.prototype.loadNamespaces = function (namespace_filter) {
        var _this = this;
        if (!namespace_filter) {
            namespace_filter = '';
        }
        MyNamespaceAPI.list({ page_size: 10, keywords: namespace_filter })
            .then(function (result) {
            _this.setState({ namespaces: result.data.data });
        })
            .catch(function (e) {
            return _this.props.addAlert({
                variant: 'danger',
                title: t(templateObject_12 || (templateObject_12 = __makeTemplateObject(["Namespaces list could not be displayed."], ["Namespaces list could not be displayed."]))),
                description: errorMessage(e.status, e.statusText),
            });
        });
    };
    ImportList.prototype.renderApiSearchAhead = function () {
        var _this = this;
        return (React.createElement("div", { className: 'namespace-selector-wrapper' },
            React.createElement("div", { className: 'label' }, t(templateObject_13 || (templateObject_13 = __makeTemplateObject(["Namespace"], ["Namespace"])))),
            React.createElement("div", { className: 'selector' },
                React.createElement(APISearchTypeAhead, { loadResults: function (name) { return _this.loadNamespaces(name); }, onSelect: function (event, value) {
                        var params = ParamHelper.setParam(_this.props.params, 'namespace', value);
                        params['page'] = 1;
                        _this.props.updateParams(params);
                    }, onClear: function () {
                        var params = ParamHelper.setParam(_this.props.params, 'namespace', '');
                        params['page'] = 1;
                        _this.props.updateParams(params);
                    }, placeholderText: t(templateObject_14 || (templateObject_14 = __makeTemplateObject(["Select namespace"], ["Select namespace"]))), selections: [{ id: -1, name: this.props.params.namespace }], results: this.state.namespaces }))));
    };
    return ImportList;
}(React.Component));
export { ImportList };
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14;
//# sourceMappingURL=import-list.js.map