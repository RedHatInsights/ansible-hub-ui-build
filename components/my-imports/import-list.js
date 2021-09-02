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
import * as React from 'react';
import cx from 'classnames';
import './my-imports.scss';
import { cloneDeep } from 'lodash';
import { TextInput, Pagination, FormSelect, FormSelectOption, InputGroup, Button, ButtonVariant, } from '@patternfly/react-core';
import { SearchIcon } from '@patternfly/react-icons';
import { Spinner } from '@redhat-cloud-services/frontend-components';
import { PulpStatus } from 'src/api';
import { ParamHelper } from 'src/utilities/param-helper';
import { Constants } from 'src/constants';
import { DateComponent, EmptyStateNoData } from '..';
var ImportList = /** @class */ (function (_super) {
    __extends(ImportList, _super);
    function ImportList(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            kwField: '',
        };
        return _this;
    }
    ImportList.prototype.render = function () {
        var _this = this;
        var _a = this.props, selectImport = _a.selectImport, importList = _a.importList, selectedImport = _a.selectedImport, namespaces = _a.namespaces, numberOfResults = _a.numberOfResults, params = _a.params, updateParams = _a.updateParams, loading = _a.loading;
        var kwField = this.state.kwField;
        return (React.createElement("div", { className: 'import-list' },
            this.renderNamespacePicker(namespaces),
            React.createElement(InputGroup, { className: 'search-box' },
                React.createElement(TextInput, { value: kwField, onChange: function (k) { return _this.setState({ kwField: k }); }, onKeyPress: function (e) { return _this.handleEnter(e); }, type: 'search', "aria-label": 'search text input', placeholder: 'Search imports' }),
                React.createElement(Button, { variant: ButtonVariant.control, "aria-label": 'search button', onClick: function () { return _this.submitSearch(); } },
                    React.createElement(SearchIcon, null))),
            React.createElement("div", null, this.renderList(selectImport, importList, selectedImport, loading)),
            React.createElement(Pagination, { itemCount: numberOfResults, perPage: params.page_size || Constants.DEFAULT_PAGE_SIZE, page: params.page || 1, onSetPage: function (_, p) {
                    return updateParams(ParamHelper.setParam(params, 'page', p));
                }, onPerPageSelect: function (_, p) {
                    updateParams(__assign(__assign({}, params), { page: 1, page_size: p }));
                }, isCompact: true })));
    };
    ImportList.prototype.setPageSize = function (size) {
        var params = cloneDeep(this.props.params);
        params['page_size'] = size;
        params['page'] = 1;
        this.props.updateParams(params);
    };
    ImportList.prototype.setPageNumber = function (pageNum) {
        var params = cloneDeep(this.props.params);
        params['page'] = pageNum;
        this.props.updateParams(params);
    };
    ImportList.prototype.renderList = function (selectImport, importList, selectedImport, loading) {
        var _this = this;
        if (loading) {
            return (React.createElement("div", { className: 'loading' },
                React.createElement(Spinner, { centered: true })));
        }
        if (importList.length === 0) {
            return (React.createElement(EmptyStateNoData, { title: 'No imports', description: 'There have not been any imports on this namespace.' }));
        }
        return (React.createElement("div", null, importList.map(function (item) {
            return (React.createElement("div", { onClick: function () { return selectImport(item); }, key: item.id, className: cx({
                    clickable: true,
                    'list-container': true,
                    'selected-item': item.type === selectedImport.type &&
                        item.id === selectedImport.id,
                }) },
                React.createElement("div", { className: 'left' },
                    React.createElement("i", { className: _this.getStatusClass(item.state) })),
                React.createElement("div", { className: 'right' }, _this.renderDescription(item))));
        })));
    };
    ImportList.prototype.handleEnter = function (e) {
        if (e.key === 'Enter') {
            this.submitSearch();
        }
    };
    ImportList.prototype.submitSearch = function () {
        this.props.updateParams(ParamHelper.setParam(this.props.params, 'keywords', this.state.kwField));
    };
    ImportList.prototype.renderDescription = function (item) {
        return (React.createElement("div", null,
            React.createElement("div", null,
                item.name,
                " ",
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
    ImportList.prototype.renderNamespacePicker = function (namespaces) {
        var _this = this;
        return (React.createElement("div", { className: 'namespace-selector-wrapper' },
            React.createElement("div", { className: 'label' }, "Namespace"),
            React.createElement("div", { className: 'selector' },
                React.createElement(FormSelect, { onChange: function (val) {
                        return _this.props.updateParams(ParamHelper.setParam(_this.props.params, 'namespace', val));
                    }, value: this.props.params.namespace, "aria-label": 'Select namespace' }, namespaces.map(function (ns) { return (React.createElement(FormSelectOption, { key: ns.name, label: ns.name, value: ns.name })); })))));
    };
    return ImportList;
}(React.Component));
export { ImportList };
//# sourceMappingURL=import-list.js.map