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
import { cloneDeep } from 'lodash';
import React from 'react';
import { CollectionVersionAPI, ImportAPI, PulpStatus, } from 'src/api';
import { AlertList, BaseHeader, ImportConsole, ImportList, Main, closeAlertMixin, } from 'src/components';
import { withRouter } from 'src/utilities';
import { ParamHelper } from 'src/utilities/param-helper';
import './my-imports.scss';
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
            selectedImportDetails: undefined,
            resultsCount: 0,
            importDetailError: '',
            followLogs: false,
            loadingImports: true,
            loadingImportDetails: true,
            collection: null,
            alerts: [],
        };
        return _this;
    }
    MyImports.prototype.componentDidMount = function () {
        var _this = this;
        // Load namespaces, use the namespaces to query the import list,
        // use the import list to load the task details
        this.loadImportList(function () { return _this.loadTaskDetails(); });
        this.polling = setInterval(function () {
            if (!_this.state.params.namespace) {
                return;
            }
            var _a = _this.state, selectedImport = _a.selectedImport, selectedImportDetails = _a.selectedImportDetails;
            var allowedStates = [PulpStatus.running, PulpStatus.waiting];
            // selectedImportDetails can be failed while selectedImport is still running, poll() updates selectedImport
            if (allowedStates.includes(selectedImportDetails === null || selectedImportDetails === void 0 ? void 0 : selectedImportDetails.state) ||
                allowedStates.includes(selectedImport === null || selectedImport === void 0 ? void 0 : selectedImport.state)) {
                _this.poll();
            }
        }, 10000);
    };
    MyImports.prototype.componentWillUnmount = function () {
        clearInterval(this.polling);
    };
    Object.defineProperty(MyImports.prototype, "closeAlert", {
        get: function () {
            return closeAlertMixin('alerts');
        },
        enumerable: false,
        configurable: true
    });
    MyImports.prototype.addAlert = function (alert) {
        this.setState({
            alerts: __spreadArray(__spreadArray([], this.state.alerts, true), [alert], false),
        });
    };
    MyImports.prototype.render = function () {
        var _this = this;
        var _a = this.state, selectedImport = _a.selectedImport, importList = _a.importList, params = _a.params, selectedImportDetails = _a.selectedImportDetails, resultsCount = _a.resultsCount, loadingImports = _a.loadingImports, loadingImportDetails = _a.loadingImportDetails, importDetailError = _a.importDetailError, followLogs = _a.followLogs, collection = _a.collection;
        if (!importList) {
            return null;
        }
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { ref: this.topOfPage }),
            React.createElement(BaseHeader, { title: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["My imports"], ["My imports"]))) }),
            React.createElement(AlertList, { alerts: this.state.alerts, closeAlert: function (i) { return _this.closeAlert(i); } }),
            React.createElement(Main, null,
                React.createElement("section", { className: 'body' },
                    React.createElement("div", { className: 'hub-page-container', "data-cy": 'MyImports' },
                        React.createElement("div", { className: 'import-list' },
                            React.createElement(ImportList, { addAlert: function (alert) { return _this.addAlert(alert); }, importList: importList, selectedImport: selectedImport, loading: loadingImports, numberOfResults: resultsCount, params: params, selectImport: function (sImport) { return _this.selectImport(sImport); }, updateParams: function (params) {
                                    _this.updateParams(params, function () {
                                        if (params.namespace) {
                                            _this.setState({
                                                loadingImports: true,
                                                loadingImportDetails: true,
                                            }, function () {
                                                return _this.loadImportList(function () { return _this.loadTaskDetails(); });
                                            });
                                        }
                                        else {
                                            _this.setState({
                                                importDetailError: t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["No data"], ["No data"]))),
                                                loadingImportDetails: false,
                                            });
                                        }
                                    });
                                } })),
                        React.createElement("div", { className: 'hub-import-console' },
                            React.createElement(ImportConsole, { empty: !this.state.params.namespace, loading: loadingImportDetails, task: selectedImportDetails, followMessages: followLogs, setFollowMessages: function (isFollowing) {
                                    _this.setState({
                                        followLogs: isFollowing,
                                    });
                                }, selectedImport: selectedImport, apiError: importDetailError, collection: collection })))))));
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
    MyImports.prototype.loadImportList = function (callback) {
        var _this = this;
        if (!this.state.params.namespace) {
            this.setState({
                importDetailError: t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["No data"], ["No data"]))),
                loadingImportDetails: false,
            });
            return;
        }
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
                importDetailError: t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["No data"], ["No data"]))),
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
                    collection: null,
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
                                collection: result.data.data[0],
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
                .catch(function () {
                _this.setState({
                    selectedImportDetails: undefined,
                    importDetailError: t(templateObject_5 || (templateObject_5 = __makeTemplateObject(["Error fetching import from API"], ["Error fetching import from API"]))),
                    loadingImportDetails: false,
                });
            });
        }
    };
    return MyImports;
}(React.Component));
export default withRouter(MyImports);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
//# sourceMappingURL=my-imports.js.map