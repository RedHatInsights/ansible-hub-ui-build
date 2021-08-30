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
import * as React from 'react';
import './namespace-list.scss';
import { ParamHelper } from 'src/utilities/param-helper';
import { BaseHeader, EmptyStateFilter, EmptyStateNoData, LinkTabs, LoadingPageSpinner, LoadingPageWithHeader, NamespaceCard, NamespaceModal, Pagination, Toolbar, } from 'src/components';
import { Button, ToolbarItem } from '@patternfly/react-core';
import { NamespaceAPI, MyNamespaceAPI } from 'src/api';
import { formatPath, namespaceBreadcrumb, Paths } from 'src/paths';
import { Constants } from 'src/constants';
import { AppContext } from 'src/loaders/app-context';
import { filterIsSet } from 'src/utilities';
var NamespaceList = /** @class */ (function (_super) {
    __extends(NamespaceList, _super);
    function NamespaceList(props) {
        var _this = _super.call(this, props) || this;
        _this.nonURLParams = ['tenant'];
        _this.handleModalToggle = function () {
            _this.setState(function (_a) {
                var isModalOpen = _a.isModalOpen;
                return ({
                    isModalOpen: !isModalOpen,
                });
            });
        };
        var params = ParamHelper.parseParamString(props.location.search, [
            'page',
            'page_size',
        ]);
        if (!params['page_size']) {
            params['page_size'] = 20;
        }
        if (!params['sort']) {
            params['sort'] = 'name';
        }
        _this.state = {
            namespaces: undefined,
            itemCount: 0,
            params: params,
            hasPermission: true,
            isModalOpen: false,
            loading: true,
        };
        return _this;
    }
    NamespaceList.prototype.componentDidMount = function () {
        var _this = this;
        if (this.props.filterOwner) {
            // Make a query with no params and see if it returns results to tell
            // if the user can edit namespaces
            MyNamespaceAPI.list({}).then(function (results) {
                if (results.data.meta.count !== 0) {
                    _this.loadNamespaces();
                }
                else {
                    _this.setState({
                        hasPermission: false,
                        namespaces: [],
                        loading: false,
                    });
                }
            });
        }
        else {
            this.loadNamespaces();
        }
    };
    NamespaceList.prototype.render = function () {
        var _this = this;
        var _a;
        var _b = this.state, namespaces = _b.namespaces, params = _b.params, itemCount = _b.itemCount;
        var filterOwner = this.props.filterOwner;
        var user = this.context.user;
        var noData = !filterIsSet(this.state.params, ['keywords']) &&
            namespaces !== undefined &&
            namespaces.length === 0;
        if (!namespaces) {
            return React.createElement(LoadingPageWithHeader, null);
        }
        var extra = [];
        if ((_a = user === null || user === void 0 ? void 0 : user.model_permissions) === null || _a === void 0 ? void 0 : _a.add_namespace) {
            extra.push(React.createElement(ToolbarItem, { key: 'create-button' },
                React.createElement(Button, { variant: 'primary', onClick: this.handleModalToggle }, _(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Create"], ["Create"]))))));
        }
        var title = namespaceBreadcrumb.name;
        var search = filterOwner
            ? _(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Search my namespaces"], ["Search my namespaces"]))) : _(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Search all "], ["Search all "]))) + title.toLowerCase();
        return (React.createElement("div", { className: 'namespace-page' },
            React.createElement(NamespaceModal, { isOpen: this.state.isModalOpen, toggleModal: this.handleModalToggle, onCreateSuccess: function (result) {
                    return _this.props.history.push(formatPath(Paths.myCollections, {
                        namespace: result['name'],
                    }));
                } }),
            React.createElement(BaseHeader, { title: title },
                React.createElement("div", { className: 'tab-link-container' },
                    React.createElement("div", { className: 'tabs' },
                        React.createElement(LinkTabs, { tabs: [
                                {
                                    title: _(templateObject_4 || (templateObject_4 = __makeTemplateObject(["All"], ["All"]))),
                                    link: Paths[NAMESPACE_TERM],
                                    active: !filterOwner,
                                },
                                {
                                    title: _(templateObject_5 || (templateObject_5 = __makeTemplateObject(["My namespaces"], ["My namespaces"]))),
                                    link: Paths.myNamespaces,
                                    active: filterOwner,
                                },
                            ] }))),
                noData ? null : (React.createElement("div", { className: 'toolbar' },
                    React.createElement(Toolbar, { params: params, sortOptions: [{ title: _(templateObject_6 || (templateObject_6 = __makeTemplateObject(["Name"], ["Name"]))), id: 'name', type: 'alpha' }], searchPlaceholder: search, updateParams: function (p) {
                            return _this.updateParams(p, function () { return _this.loadNamespaces(); });
                        }, extraInputs: extra }),
                    React.createElement("div", null,
                        React.createElement(Pagination, { params: params, updateParams: function (p) {
                                return _this.updateParams(p, function () { return _this.loadNamespaces(); });
                            }, count: itemCount, isCompact: true, perPageOptions: Constants.CARD_DEFAULT_PAGINATION_OPTIONS }))))),
            React.createElement("section", { className: 'card-area' }, this.renderBody()),
            noData ? null : (React.createElement("section", { className: 'footer' },
                React.createElement(Pagination, { params: params, updateParams: function (p) {
                        return _this.updateParams(p, function () { return _this.loadNamespaces(); });
                    }, perPageOptions: Constants.CARD_DEFAULT_PAGINATION_OPTIONS, count: itemCount })))));
    };
    NamespaceList.prototype.renderBody = function () {
        var _this = this;
        var _a;
        var _b = this.state, namespaces = _b.namespaces, loading = _b.loading;
        var _c = this.props, namespacePath = _c.namespacePath, filterOwner = _c.filterOwner;
        var user = this.context.user;
        var noDataTitle = _(templateObject_7 || (templateObject_7 = __makeTemplateObject(["No namespaces yet"], ["No namespaces yet"])));
        var noDataDescription = !filterOwner
            ? _(templateObject_8 || (templateObject_8 = __makeTemplateObject(["Namespaces will appear once created"], ["Namespaces will appear once created"]))) : _(templateObject_9 || (templateObject_9 = __makeTemplateObject(["This account is not set up to manage any namespaces"], ["This account is not set up to manage any namespaces"])));
        var noDataButton = ((_a = user === null || user === void 0 ? void 0 : user.model_permissions) === null || _a === void 0 ? void 0 : _a.add_namespace) ? (React.createElement(Button, { variant: 'primary', onClick: function () { return _this.handleModalToggle(); } }, _(templateObject_10 || (templateObject_10 = __makeTemplateObject(["Create"], ["Create"]))))) : null;
        if (loading) {
            return (React.createElement("section", null,
                React.createElement(LoadingPageSpinner, null),
                ";"));
        }
        if (namespaces.length === 0) {
            return (React.createElement("section", null, filterIsSet(this.state.params, ['keywords']) ? (React.createElement(EmptyStateFilter, null)) : (React.createElement(EmptyStateNoData, { title: noDataTitle, description: noDataDescription, button: noDataButton }))));
        }
        return (React.createElement("section", { className: 'card-layout' }, namespaces.map(function (ns, i) { return (React.createElement("div", { key: i, className: 'card-wrapper' },
            React.createElement(NamespaceCard, __assign({ namespaceURL: formatPath(namespacePath, {
                    namespace: ns.name,
                    repo: _this.context.selectedRepo,
                }), key: i }, ns)))); })));
    };
    NamespaceList.prototype.loadNamespaces = function () {
        var _this = this;
        var apiFunc;
        if (this.props.filterOwner) {
            apiFunc = function (p) { return MyNamespaceAPI.list(p); };
        }
        else {
            apiFunc = function (p) { return NamespaceAPI.list(p); };
        }
        this.setState({ loading: true }, function () {
            apiFunc(_this.state.params).then(function (results) {
                _this.setState({
                    namespaces: results.data.data,
                    itemCount: results.data.meta.count,
                    loading: false,
                });
            });
        });
    };
    Object.defineProperty(NamespaceList.prototype, "updateParams", {
        get: function () {
            return ParamHelper.updateParamsMixin(this.nonURLParams);
        },
        enumerable: false,
        configurable: true
    });
    return NamespaceList;
}(React.Component));
export { NamespaceList };
NamespaceList.contextType = AppContext;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10;
//# sourceMappingURL=namespace-list.js.map