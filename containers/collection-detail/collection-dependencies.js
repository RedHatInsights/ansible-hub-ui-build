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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { t } from '@lingui/macro';
import * as React from 'react';
import { withRouter } from 'react-router-dom';
import { CollectionAPI, CollectionVersionAPI, } from 'src/api';
import { CollectionHeader, LoadingPageWithHeader, Main, CollectionDependenciesList, CollectionUsedbyDependenciesList, EmptyStateNoData, AlertList, closeAlertMixin, } from 'src/components';
import { errorMessage, filterIsSet, ParamHelper } from 'src/utilities';
import { formatPath, namespaceBreadcrumb, Paths } from 'src/paths';
import { AppContext } from 'src/loaders/app-context';
import './collection-dependencies.scss';
var CollectionDependencies = /** @class */ (function (_super) {
    __extends(CollectionDependencies, _super);
    function CollectionDependencies(props) {
        var _this = _super.call(this, props) || this;
        _this.ignoredParams = ['page_size', 'page', 'sort', 'name__icontains'];
        var params = ParamHelper.parseParamString(props.location.search, [
            'page',
            'page_size',
        ]);
        params['sort'] = !params['sort'] ? '-collection' : 'collection';
        _this.state = {
            collection: undefined,
            dependencies_repos: [],
            params: params,
            usedByDependencies: [],
            usedByDependenciesCount: 0,
            usedByDependenciesLoading: true,
            alerts: [],
        };
        return _this;
    }
    CollectionDependencies.prototype.componentDidMount = function () {
        this.loadData(false);
    };
    CollectionDependencies.prototype.render = function () {
        var _this = this;
        var _a = this.state, collection = _a.collection, params = _a.params, usedByDependencies = _a.usedByDependencies, usedByDependenciesCount = _a.usedByDependenciesCount, usedByDependenciesLoading = _a.usedByDependenciesLoading, alerts = _a.alerts;
        if (!collection) {
            return React.createElement(LoadingPageWithHeader, null);
        }
        var breadcrumbs = [
            namespaceBreadcrumb,
            {
                url: formatPath(Paths.namespaceByRepo, {
                    namespace: collection.namespace.name,
                    repo: this.context.selectedRepo,
                }),
                name: collection.namespace.name,
            },
            {
                url: formatPath(Paths.collectionByRepo, {
                    namespace: collection.namespace.name,
                    collection: collection.name,
                    repo: this.context.selectedRepo,
                }),
                name: collection.name,
            },
            { name: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Dependencies"], ["Dependencies"]))) },
        ];
        var headerParams = ParamHelper.getReduced(params, this.ignoredParams);
        var dependenciesParams = ParamHelper.getReduced(params, ['version']);
        var noDependencies = !Object.keys(collection.latest_version.metadata.dependencies).length;
        return (React.createElement(React.Fragment, null,
            React.createElement(AlertList, { alerts: alerts, closeAlert: function (i) { return _this.closeAlert(i); } }),
            React.createElement(CollectionHeader, { reload: function () { return _this.loadData(true); }, collection: collection, params: headerParams, updateParams: function (p) {
                    _this.updateParams(_this.combineParams(_this.state.params, p), function () {
                        return _this.loadData(true);
                    });
                }, breadcrumbs: breadcrumbs, activeTab: 'dependencies', repo: this.context.selectedRepo }),
            React.createElement(Main, null,
                React.createElement("section", { className: 'body' },
                    React.createElement("div", { className: 'pf-c-content collection-dependencies' },
                        React.createElement("h1", null, t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Dependencies"], ["Dependencies"])))),
                        noDependencies &&
                            !usedByDependenciesCount &&
                            !filterIsSet(params, ['name__icontains']) ? (React.createElement(EmptyStateNoData, { title: t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["No dependencies"], ["No dependencies"]))), description: t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["Collection does not have any dependencies."], ["Collection does not have any dependencies."]))) })) : (React.createElement(React.Fragment, null,
                            React.createElement("p", null, t(templateObject_5 || (templateObject_5 = __makeTemplateObject(["This collections requires the following collections for use"], ["This collections requires the following collections for use"])))),
                            noDependencies ? (React.createElement(EmptyStateNoData, { title: t(templateObject_6 || (templateObject_6 = __makeTemplateObject(["No dependencies"], ["No dependencies"]))), description: t(templateObject_7 || (templateObject_7 = __makeTemplateObject(["Collection does not have any dependencies."], ["Collection does not have any dependencies."]))) })) : (React.createElement(CollectionDependenciesList, { collection: this.state.collection, dependencies_repos: this.state.dependencies_repos })),
                            React.createElement("p", null, t(templateObject_8 || (templateObject_8 = __makeTemplateObject(["This collection is being used by"], ["This collection is being used by"])))),
                            React.createElement(CollectionUsedbyDependenciesList, { repo: this.context.selectedRepo, usedByDependencies: usedByDependencies, itemCount: usedByDependenciesCount, params: dependenciesParams, usedByDependenciesLoading: usedByDependenciesLoading, updateParams: function (p) {
                                    return _this.updateParams(_this.combineParams(_this.state.params, p), function () { return _this.loadUsedByDependencies(); });
                                } }))))))));
    };
    CollectionDependencies.prototype.loadData = function (forceReload) {
        var _this = this;
        if (forceReload === void 0) { forceReload = false; }
        this.loadCollection(forceReload, function () {
            return _this.loadCollectionsDependenciesRepos(function () {
                return _this.loadUsedByDependencies();
            });
        });
    };
    CollectionDependencies.prototype.loadCollectionsDependenciesRepos = function (callback) {
        var _this = this;
        var dependencies = this.state.collection.latest_version.metadata.dependencies;
        var dependencies_repos = [];
        var promises = [];
        Object.keys(dependencies).forEach(function (dependency) {
            var _a = dependency.split('.'), namespace = _a[0], collection = _a[1];
            var dependency_repo = {
                name: collection,
                namespace: namespace,
                repo: '',
                path: '',
            };
            dependencies_repos.push(dependency_repo);
            var promise = _this.loadDependencyRepo(dependency_repo);
            promises.push(promise);
        });
        Promise.all(promises).then(function () {
            _this.setState({ dependencies_repos: dependencies_repos }, callback());
        });
    };
    CollectionDependencies.prototype.loadDependencyRepo = function (dependency_repo) {
        var _this = this;
        return CollectionVersionAPI.list({
            namespace: dependency_repo.namespace,
            name: dependency_repo.name,
        })
            .then(function (result) {
            dependency_repo.repo = result.data.data[0].repository_list[0];
            var dependencies = _this.state.collection.latest_version.metadata.dependencies;
            dependency_repo.path = formatPath(Paths.collectionByRepo, {
                collection: dependency_repo.name,
                namespace: dependency_repo.namespace,
                repo: dependency_repo.repo,
            }, _this.separateVersion(dependencies[dependency_repo.namespace + '.' + dependency_repo.name]));
        })
            .catch(function () {
            // do nothing, dependency_repo.path and repo stays empty
            // this may mean that collection was not found - thus is not in the system.
            // user will be notified in the list of dependencies rather than alerts
        });
    };
    CollectionDependencies.prototype.loadUsedByDependencies = function () {
        var _this = this;
        this.setState({ usedByDependenciesLoading: true }, function () {
            if (_this.cancelToken) {
                _this.cancelToken.cancel('request-canceled');
            }
            _this.cancelToken = CollectionAPI.getCancelToken();
            CollectionAPI.getUsedDependenciesByCollection(_this.state.collection.namespace.name, _this.state.collection.name, ParamHelper.getReduced(_this.state.params, ['version']), _this.cancelToken)
                .then(function (_a) {
                var data = _a.data;
                _this.setState({
                    usedByDependencies: data.data,
                    usedByDependenciesCount: data.meta.count,
                    usedByDependenciesLoading: false,
                });
            })
                .catch(function (err) {
                var _a = err.response, status = _a.status, statusText = _a.statusText;
                if ((err === null || err === void 0 ? void 0 : err.message) !== 'request-canceled') {
                    _this.setState({
                        usedByDependenciesLoading: false,
                        alerts: __spreadArray(__spreadArray([], _this.state.alerts, true), [
                            {
                                variant: 'danger',
                                title: t(templateObject_9 || (templateObject_9 = __makeTemplateObject(["Dependent collections could not be displayed."], ["Dependent collections could not be displayed."]))),
                                description: errorMessage(status, statusText),
                            },
                        ], false),
                    });
                }
            })
                .finally(function () {
                _this.cancelToken = undefined;
            });
        });
    };
    CollectionDependencies.prototype.loadCollection = function (forceReload, callback) {
        var _this = this;
        CollectionAPI.getCached(this.props.match.params['namespace'], this.props.match.params['collection'], this.context.selectedRepo, this.state.params.version ? { version: this.state.params.version } : {}, forceReload)
            .then(function (result) {
            _this.setState({ collection: result }, callback);
        })
            .catch(function () {
            _this.props.history.push(Paths.notFound);
        });
    };
    Object.defineProperty(CollectionDependencies.prototype, "updateParams", {
        get: function () {
            return ParamHelper.updateParamsMixin();
        },
        enumerable: false,
        configurable: true
    });
    CollectionDependencies.prototype.combineParams = function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        return params.reduce(function (acc, cur) { return (__assign(__assign({}, acc), cur)); });
    };
    Object.defineProperty(CollectionDependencies.prototype, "closeAlert", {
        get: function () {
            return closeAlertMixin('alerts');
        },
        enumerable: false,
        configurable: true
    });
    CollectionDependencies.prototype.separateVersion = function (version) {
        var v = version.match(/((\d+\.*)+)/);
        return v ? { version: v[0] } : {};
    };
    return CollectionDependencies;
}(React.Component));
export default withRouter(CollectionDependencies);
CollectionDependencies.contextType = AppContext;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9;
//# sourceMappingURL=collection-dependencies.js.map