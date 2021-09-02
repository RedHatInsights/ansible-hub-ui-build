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
import './my-imports.scss';
import { withRouter } from 'react-router-dom';
import { Section } from '@redhat-cloud-services/frontend-components';
import { cloneDeep } from 'lodash';
import { BaseHeader, ImportConsole, ImportList, Main } from 'src/components';
import { ImportAPI, PulpStatus, MyNamespaceAPI, CollectionVersionAPI, } from 'src/api';
import { ParamHelper } from 'src/utilities/param-helper';
var MyImports = /** @class */ (function (_super) {
    __extends(MyImports, _super);
    function MyImports(props) {
        var _this = _super.call(this, props) || this;
        var params = ParamHelper.parseParamString(props.location.search, [
            'page',
            'page_size',
        ]);
        _this.topOfPage = React.createRef();
        _this.state = {
            selectedImport: undefined,
            importList: [],
            params: params,
            namespaces: [],
            selectedImportDetails: undefined,
            resultsCount: 0,
            importDetailError: '',
            followLogs: false,
            loadingImports: true,
            loadingImportDetails: true,
            selectedCollectionVersion: undefined,
        };
        return _this;
    }
    MyImports.prototype.componentDidMount = function () {
        var _this = this;
        // Load namespaces, use the namespaces to query the import list,
        // use the import list to load the task details
        this.loadNamespaces(function () {
            return _this.loadImportList(function () { return _this.loadTaskDetails(); });
        });
        this.polling = setInterval(function () {
            if (_this.state.selectedImportDetails &&
                (_this.state.selectedImportDetails.state === PulpStatus.running ||
                    _this.state.selectedImportDetails.state === PulpStatus.waiting)) {
                _this.poll();
            }
        }, 10000);
    };
    MyImports.prototype.componentWillUnmount = function () {
        clearInterval(this.polling);
    };
    MyImports.prototype.render = function () {
        var _this = this;
        var _a = this.state, selectedImport = _a.selectedImport, importList = _a.importList, params = _a.params, namespaces = _a.namespaces, selectedImportDetails = _a.selectedImportDetails, resultsCount = _a.resultsCount, loadingImports = _a.loadingImports, loadingImportDetails = _a.loadingImportDetails, importDetailError = _a.importDetailError, followLogs = _a.followLogs, selectedCollectionVersion = _a.selectedCollectionVersion;
        if (!importList) {
            return null;
        }
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { ref: this.topOfPage }),
            React.createElement(BaseHeader, { title: 'My imports' }),
            React.createElement(Main, null,
                React.createElement(Section, { className: 'body' },
                    React.createElement("div", { className: 'page-container' },
                        React.createElement("div", { className: 'import-list' },
                            React.createElement(ImportList, { importList: importList, selectedImport: selectedImport, loading: loadingImports, numberOfResults: resultsCount, params: params, namespaces: namespaces, selectImport: function (sImport) { return _this.selectImport(sImport); }, updateParams: function (params) {
                                    _this.updateParams(params, function () {
                                        return _this.setState({
                                            loadingImports: true,
                                            loadingImportDetails: true,
                                        }, function () { return _this.loadImportList(function () { return _this.loadTaskDetails(); }); });
                                    });
                                } })),
                        React.createElement("div", { className: 'import-console' },
                            React.createElement(ImportConsole, { loading: loadingImportDetails, task: selectedImportDetails, followMessages: followLogs, setFollowMessages: function (isFollowing) {
                                    _this.setState({
                                        followLogs: isFollowing,
                                    });
                                }, selectedImport: selectedImport, apiError: importDetailError, collectionVersion: selectedCollectionVersion })))))));
    };
    Object.defineProperty(MyImports.prototype, "updateParams", {
        get: function () {
            return ParamHelper.updateParamsMixin();
        },
        enumerable: false,
        configurable: true
    });
    MyImports.prototype.selectImport = function (sImport) {
        var _this = this;
        this.setState({ selectedImport: sImport, loadingImportDetails: true }, function () {
            _this.topOfPage.current.scrollIntoView({
                behavior: 'smooth',
            });
            _this.loadTaskDetails();
        });
    };
    MyImports.prototype.poll = function () {
        var _this = this;
        this.loadTaskDetails(function () {
            // Update the state of the selected import in the list if it's
            // different from the one loaded from the API.
            var _a = _this.state, selectedImport = _a.selectedImport, selectedImportDetails = _a.selectedImportDetails, importList = _a.importList;
            if (!selectedImportDetails) {
                return;
            }
            if (selectedImport.state !== selectedImportDetails.state) {
                var importIndex = importList.findIndex(function (x) { return x.id === selectedImport.id; });
                var imports = cloneDeep(importList);
                var newSelectedImport = cloneDeep(selectedImport);
                newSelectedImport.state = selectedImportDetails.state;
                newSelectedImport.finished_at = selectedImportDetails.finished_at;
                imports[importIndex] = newSelectedImport;
                _this.setState({
                    selectedImport: newSelectedImport,
                    importList: imports,
                });
            }
        });
    };
    MyImports.prototype.loadNamespaces = function (callback) {
        var _this = this;
        MyNamespaceAPI.list({ page_size: 1000 })
            .then(function (result) {
            var namespaces = result.data.data;
            var selectedNS;
            if (_this.state.params.namespace) {
                selectedNS = namespaces.find(function (x) { return x.name === _this.state.params.namespace; });
            }
            if (!selectedNS) {
                selectedNS = namespaces[0];
            }
            _this.setState({
                namespaces: namespaces,
                params: __assign(__assign({}, _this.state.params), { namespace: selectedNS.name }),
            }, callback);
        })
            .catch(function (result) { return console.log(result); });
    };
    MyImports.prototype.loadImportList = function (callback) {
        var _this = this;
        ImportAPI.list(__assign(__assign({}, this.state.params), { sort: '-created' }))
            .then(function (importList) {
            _this.setState({
                importList: importList.data.data,
                selectedImport: importList.data.data[0],
                resultsCount: importList.data.meta.count,
                loadingImports: false,
            }, callback);
        })
            .catch(function (result) { return console.log(result); });
    };
    MyImports.prototype.loadTaskDetails = function (callback) {
        var _this = this;
        if (!this.state.selectedImport) {
            this.setState({
                importDetailError: 'No data',
                loadingImportDetails: false,
            });
        }
        else {
            ImportAPI.get(this.state.selectedImport.id)
                .then(function (result) {
                _this.setState({
                    importDetailError: '',
                    loadingImportDetails: false,
                    selectedImportDetails: result.data,
                    selectedCollectionVersion: undefined,
                }, function () {
                    var importDeets = _this.state.selectedImportDetails;
                    // have to use list instead of get because repository_list isn't
                    // available on collection version details
                    CollectionVersionAPI.list({
                        namespace: importDeets.namespace,
                        name: importDeets.name,
                        version: importDeets.version,
                    })
                        .then(function (result) {
                        if (result.data.meta.count === 1) {
                            _this.setState({
                                selectedCollectionVersion: result.data.data[0],
                            });
                        }
                    })
                        .finally(function () {
                        if (callback) {
                            callback();
                        }
                    });
                });
            })
                .catch(function (result) {
                _this.setState({
                    selectedImportDetails: undefined,
                    importDetailError: 'Error fetching import from API',
                    loadingImportDetails: false,
                });
            });
        }
    };
    return MyImports;
}(React.Component));
export default withRouter(MyImports);
//# sourceMappingURL=my-imports.js.map