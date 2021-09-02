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
import { BaseHeader, LoadingPageSpinner, Main, Tabs, RemoteRepositoryTable, LocalRepositoryTable, RemoteForm, EmptyStateNoData, } from 'src/components';
import { ParamHelper, mapErrorMessages } from 'src/utilities';
import { Constants } from 'src/constants';
import { RemoteAPI, DistributionAPI, MyDistributionAPI, } from 'src/api';
import { AppContext } from 'src/loaders/app-context';
var Repository = /** @class */ (function () {
    function Repository() {
    }
    return Repository;
}());
export { Repository };
var RepositoryList = /** @class */ (function (_super) {
    __extends(RepositoryList, _super);
    function RepositoryList(props) {
        var _this = _super.call(this, props) || this;
        _this.nonQueryStringParams = ['repository'];
        _this.selectRemoteToEdit = function (remote) {
            // save a copy of the remote to diff against
            _this.unModifiedRemote = __assign({}, remote);
            _this.setState({
                // create a copy of the remote to pass to the edit form, so that the
                // list of remotes doesn't get updated by accident.
                remoteToEdit: __assign({}, remote),
                showRemoteFormModal: true,
            });
        };
        _this.refreshContent = function () {
            _this.loadContent(false);
        };
        _this.loadContent = function (showLoading) {
            if (showLoading === void 0) { showLoading = true; }
            var params = _this.state.params;
            _this.setState({ loading: showLoading }, function () {
                if (params['tab'] == 'remote') {
                    RemoteAPI.list(ParamHelper.getReduced(params, _this.nonQueryStringParams)).then(function (result) {
                        _this.setState({
                            loading: false,
                            content: result.data.data,
                            itemCount: result.data.meta.count,
                        });
                    });
                }
                else {
                    var APIClass = DistributionAPI;
                    if (DEPLOYMENT_MODE === Constants.INSIGHTS_DEPLOYMENT_MODE) {
                        APIClass = MyDistributionAPI;
                    }
                    APIClass.list().then(function (result) {
                        _this.setState({
                            loading: false,
                            content: result.data.data,
                            itemCount: result.data.meta.count,
                        });
                    });
                }
            });
        };
        var params = ParamHelper.parseParamString(props.location.search, [
            'page',
            'page_size',
        ]);
        if (!params['page_size']) {
            params['page_size'] = 10;
        }
        if (!params['tab']) {
            params['tab'] = 'local';
        }
        if (!params['tab'] &&
            DEPLOYMENT_MODE === Constants.STANDALONE_DEPLOYMENT_MODE) {
            params['tab'] = 'local';
        }
        _this.state = {
            itemCount: 1,
            params: params,
            loading: false,
            showRemoteFormModal: false,
            content: [],
            remoteToEdit: undefined,
            errorMessages: {},
        };
        return _this;
    }
    RepositoryList.prototype.componentDidMount = function () {
        this.loadContent();
    };
    RepositoryList.prototype.render = function () {
        var _this = this;
        var _a = this.state, params = _a.params, loading = _a.loading, content = _a.content, remoteToEdit = _a.remoteToEdit, showRemoteFormModal = _a.showRemoteFormModal, errorMessages = _a.errorMessages;
        var tabs = [t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Local"], ["Local"]))), t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Remote"], ["Remote"])))];
        return (React.createElement(React.Fragment, null,
            remoteToEdit && showRemoteFormModal && (React.createElement(RemoteForm, { remote: remoteToEdit, updateRemote: function (r) { return _this.setState({ remoteToEdit: r }); }, saveRemote: function () {
                    var remoteToEdit = _this.state.remoteToEdit;
                    try {
                        var distro_path = remoteToEdit.repositories[0].distributions[0].base_path;
                        RemoteAPI.smartUpdate(distro_path, remoteToEdit, _this.unModifiedRemote)
                            .then(function (r) {
                            _this.setState({
                                errorMessages: {},
                                showRemoteFormModal: false,
                                remoteToEdit: undefined,
                            }, function () { return _this.loadContent(); });
                        })
                            .catch(function (err) {
                            return _this.setState({ errorMessages: mapErrorMessages(err) });
                        });
                    }
                    catch (_a) {
                        _this.setState({
                            errorMessages: {
                                __nofield: t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Can't update remote without a distribution attached to it."], ["Can't update remote without a distribution attached to it."]))),
                            },
                        });
                    }
                }, errorMessages: errorMessages, showModal: showRemoteFormModal, closeModal: function () {
                    return _this.setState({ showRemoteFormModal: false, errorMessages: {} });
                } })),
            React.createElement(BaseHeader, { title: t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["Repo Management"], ["Repo Management"]))) }, DEPLOYMENT_MODE === Constants.STANDALONE_DEPLOYMENT_MODE &&
                !loading ? (React.createElement("div", { className: 'header-bottom' },
                React.createElement("div", { className: 'tab-link-container' },
                    React.createElement("div", { className: 'tabs' },
                        React.createElement(Tabs, { tabs: tabs, params: params, updateParams: function (p) {
                                // empty the content before updating the params to prevent
                                // rendering from breaking when the wrong content is loaded
                                _this.setState({ content: [] }, function () {
                                    return _this.updateParams(p, function () { return _this.loadContent(); });
                                });
                            } }))))) : null),
            loading ? React.createElement(LoadingPageSpinner, null) : this.renderContent(params, content)));
    };
    RepositoryList.prototype.renderContent = function (params, content) {
        var _this = this;
        var user = this.context.user;
        // Dont show remotes on insights
        if (DEPLOYMENT_MODE === Constants.INSIGHTS_DEPLOYMENT_MODE ||
            (!!params.tab && params.tab.toLowerCase() === 'local')) {
            return (React.createElement(Main, { className: 'repository-list' },
                React.createElement("section", { className: 'body' },
                    React.createElement(LocalRepositoryTable, { repositories: content, updateParams: this.updateParams }))));
        }
        if (!!params.tab && params.tab.toLowerCase() === 'remote') {
            return content.length === 0 ? (React.createElement(EmptyStateNoData, { title: t(templateObject_5 || (templateObject_5 = __makeTemplateObject(["No remote repositories yet"], ["No remote repositories yet"]))), description: t(templateObject_6 || (templateObject_6 = __makeTemplateObject(["Remote repositories will appear once added"], ["Remote repositories will appear once added"]))) })) : (React.createElement(Main, { className: 'repository-list' },
                React.createElement("section", { className: 'body' },
                    React.createElement(RemoteRepositoryTable, { remotes: content, updateParams: this.updateParams, editRemote: function (remote) {
                            return _this.selectRemoteToEdit(remote);
                        }, syncRemote: function (distro) {
                            return RemoteAPI.sync(distro).then(function (result) { return _this.loadContent(); });
                        }, user: user, refreshRemotes: this.refreshContent }))));
        }
    };
    Object.defineProperty(RepositoryList.prototype, "updateParams", {
        get: function () {
            return ParamHelper.updateParamsMixin(this.nonQueryStringParams);
        },
        enumerable: false,
        configurable: true
    });
    return RepositoryList;
}(React.Component));
export default withRouter(RepositoryList);
RepositoryList.contextType = AppContext;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
//# sourceMappingURL=repository-list.js.map