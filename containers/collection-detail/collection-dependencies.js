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
import React from 'react';
import { CollectionAPI, CollectionVersionAPI, } from 'src/api';
import { AlertList, CollectionDependenciesList, CollectionHeader, CollectionUsedbyDependenciesList, EmptyStateNoData, LoadingPageWithHeader, Main, closeAlertMixin, } from 'src/components';
import { AppContext } from 'src/loaders/app-context';
import { Paths, formatPath, namespaceBreadcrumb } from 'src/paths';
import { withRouter } from 'src/utilities';
import { ParamHelper, errorMessage, filterIsSet } from 'src/utilities';
import { loadCollection } from './base';
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
            collections: [],
            collectionsCount: 0,
            collection: null,
            content: null,
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
        var _a = this.state, collections = _a.collections, collectionsCount = _a.collectionsCount, collection = _a.collection, content = _a.content, params = _a.params, usedByDependencies = _a.usedByDependencies, usedByDependenciesCount = _a.usedByDependenciesCount, usedByDependenciesLoading = _a.usedByDependenciesLoading, alerts = _a.alerts;
        if (collections.length <= 0) {
            return React.createElement(LoadingPageWithHeader, null);
        }
        var version = collection.collection_version, repository = collection.repository;
        var breadcrumbs = [
            namespaceBreadcrumb(),
            {
                url: formatPath(Paths.namespaceDetail, {
                    namespace: version.namespace,
                }),
                name: version.namespace,
            },
            {
                url: formatPath(Paths.collectionByRepo, {
                    namespace: version.namespace,
                    collection: version.name,
                    repo: repository.name,
                }),
                name: version.name,
            },
            { name: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Dependencies"], ["Dependencies"]))) },
        ];
        var headerParams = ParamHelper.getReduced(params, this.ignoredParams);
        var dependenciesParams = ParamHelper.getReduced(params, ['version']);
        var noDependencies = !Object.keys(version.dependencies).length;
        return (React.createElement(React.Fragment, null,
            React.createElement(AlertList, { alerts: alerts, closeAlert: function (i) { return _this.closeAlert(i); } }),
            React.createElement(CollectionHeader, { reload: function () { return _this.loadData(true); }, collections: collections, collectionsCount: collectionsCount, collection: collection, content: content, params: headerParams, updateParams: function (p) {
                    _this.updateParams(_this.combineParams(_this.state.params, p), function () {
                        return _this.loadData(true);
                    });
                }, breadcrumbs: breadcrumbs, activeTab: 'dependencies', repo: repository.name }),
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
                            React.createElement(CollectionUsedbyDependenciesList, { usedByDependencies: usedByDependencies, itemCount: usedByDependenciesCount, params: dependenciesParams, usedByDependenciesLoading: usedByDependenciesLoading, updateParams: function (p) {
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
        var dependencies = this.state.collection.collection_version.dependencies;
        var dependencies_repos = [];
        var promises = [];
        Object.keys(dependencies).forEach(function (dependency) {
            var _a = dependency.split('.'), namespace = _a[0], collection = _a[1];
            var version_range = dependencies[dependency];
            var dependency_repo = {
                name: collection,
                namespace: namespace,
                version_range: version_range,
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
        return CollectionVersionAPI.list({
            namespace: dependency_repo.namespace,
            name: dependency_repo.name,
            version_range: dependency_repo.version_range,
            page_size: 1,
        })
            .then(function (result) {
            var collection = result.data.data[0];
            dependency_repo.repo = collection.repository.name;
            dependency_repo.path = formatPath(Paths.collectionByRepo, {
                collection: dependency_repo.name,
                namespace: dependency_repo.namespace,
                repo: dependency_repo.repo,
            });
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
            var _a = _this.state.collection.collection_version, name = _a.name, namespace = _a.namespace;
            // We have to use CollectionAPI here for used by dependencies
            // because cross repo collection search doesn't allow `name__icontains` filter
            CollectionAPI.getUsedDependenciesByCollection(namespace, name, ParamHelper.getReduced(_this.state.params, ['version']), _this.cancelToken)
                .then(function (_a) {
                var data = _a.data;
                _this.setState({
                    usedByDependencies: data.data,
                    usedByDependenciesCount: data.meta.count,
                    usedByDependenciesLoading: false,
                });
            })
                .catch(function (_a) {
                var response = _a.response, message = _a.message;
                // console.log(response, message);
                if (message !== 'request-canceled') {
                    var status_1 = response.status, statusText = response.statusText;
                    _this.setState({
                        usedByDependenciesLoading: false,
                        alerts: __spreadArray(__spreadArray([], _this.state.alerts, true), [
                            {
                                variant: 'danger',
                                title: t(templateObject_9 || (templateObject_9 = __makeTemplateObject(["Dependent collections could not be displayed."], ["Dependent collections could not be displayed."]))),
                                description: errorMessage(status_1, statusText),
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
        loadCollection({
            forceReload: forceReload,
            matchParams: this.props.routeParams,
            navigate: this.props.navigate,
            setCollection: function (collections, collection, content, collectionsCount) {
                return _this.setState({ collections: collections, collection: collection, content: content, collectionsCount: collectionsCount }, callback);
            },
            stateParams: this.state.params.version
                ? { version: this.state.params.version }
                : {},
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