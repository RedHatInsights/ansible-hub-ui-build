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
import { t, Trans } from '@lingui/macro';
import * as React from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import { Form, ActionGroup, Button, Spinner } from '@patternfly/react-core';
import { PartnerHeader, NamespaceForm, ResourcesForm, AlertList, closeAlertMixin, Main, EmptyStateUnauthorized, LoadingPageSpinner, } from 'src/components';
import { MyNamespaceAPI, ActiveUserAPI, } from 'src/api';
import { formatPath, namespaceBreadcrumb, Paths } from 'src/paths';
import { ParamHelper, mapErrorMessages, errorMessage, } from 'src/utilities';
import { AppContext } from 'src/loaders/app-context';
var EditNamespace = /** @class */ (function (_super) {
    __extends(EditNamespace, _super);
    function EditNamespace(props) {
        var _this = _super.call(this, props) || this;
        var params = ParamHelper.parseParamString(props.location.search);
        if (!params['tab']) {
            params['tab'] = 'edit-details';
        }
        _this.state = {
            loading: false,
            alerts: [],
            namespace: null,
            userId: '',
            newLinkURL: '',
            newLinkName: '',
            errorMessages: {},
            saving: false,
            redirect: null,
            unsavedData: false,
            params: params,
            unauthorized: false,
        };
        return _this;
    }
    EditNamespace.prototype.componentDidMount = function () {
        var _this = this;
        this.setState({ loading: true }, function () {
            ActiveUserAPI.getUser()
                .then(function (result) {
                _this.setState({ userId: result.account_number }, function () {
                    return _this.loadNamespace();
                });
            })
                .catch(function (e) {
                var _a = e.response, status = _a.status, statusText = _a.statusText;
                _this.setState({
                    loading: false,
                    redirect: formatPath(Paths.namespaceByRepo, {
                        namespace: _this.props.match.params['namespace'],
                        repo: _this.context.selectedRepo,
                    }),
                }, function () {
                    var _a;
                    _this.context.setAlerts(__spreadArray(__spreadArray([], _this.context.alerts, true), [
                        {
                            variant: 'danger',
                            title: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Active user profile \"", "\" could not be displayed."], ["Active user profile \"", "\" could not be displayed."])), (_a = _this.context.user) === null || _a === void 0 ? void 0 : _a.username),
                            description: errorMessage(status, statusText),
                        },
                    ], false));
                });
            });
        });
    };
    EditNamespace.prototype.render = function () {
        var _this = this;
        var _a = this.state, namespace = _a.namespace, errorMessages = _a.errorMessages, saving = _a.saving, redirect = _a.redirect, params = _a.params, userId = _a.userId, unauthorized = _a.unauthorized, loading = _a.loading;
        var tabs = [
            { id: 'edit-details', name: t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Edit details"], ["Edit details"]))) },
            { id: 'edit-resources', name: t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Edit resources"], ["Edit resources"]))) },
        ];
        if (redirect) {
            return React.createElement(Redirect, { push: true, to: redirect });
        }
        if (loading) {
            return React.createElement(LoadingPageSpinner, null);
        }
        if (!namespace) {
            return null;
        }
        return (React.createElement(React.Fragment, null,
            React.createElement(PartnerHeader, { namespace: namespace, breadcrumbs: [
                    namespaceBreadcrumb,
                    {
                        name: namespace.name,
                        url: formatPath(Paths.myCollections, {
                            namespace: namespace.name,
                        }),
                    },
                    { name: t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["Edit"], ["Edit"]))) },
                ], tabs: tabs, params: params, updateParams: function (p) { return _this.updateParams(p); } }),
            React.createElement(AlertList, { alerts: this.state.alerts, closeAlert: function (i) { return _this.closeAlert(i); } }),
            unauthorized ? (React.createElement(EmptyStateUnauthorized, null)) : (React.createElement(Main, null,
                React.createElement("section", { className: 'body' },
                    params.tab.toLowerCase() === 'edit-details' ? (React.createElement(NamespaceForm, { userId: userId, namespace: namespace, errorMessages: errorMessages, updateNamespace: function (namespace) {
                            return _this.setState({
                                namespace: namespace,
                                unsavedData: true,
                            });
                        } })) : (React.createElement(ResourcesForm, { updateNamespace: function (namespace) {
                            return _this.setState({
                                namespace: namespace,
                                unsavedData: true,
                            });
                        }, namespace: namespace })),
                    React.createElement(Form, null,
                        React.createElement(ActionGroup, null,
                            React.createElement(Button, { variant: 'primary', onClick: function () { return _this.saveNamespace(); } }, t(templateObject_5 || (templateObject_5 = __makeTemplateObject(["Save"], ["Save"])))),
                            React.createElement(Button, { variant: 'secondary', onClick: function () { return _this.cancel(); } }, t(templateObject_6 || (templateObject_6 = __makeTemplateObject(["Cancel"], ["Cancel"])))),
                            saving ? React.createElement(Spinner, null) : null),
                        this.state.unsavedData ? (React.createElement("div", { style: { color: 'red' } }, t(templateObject_7 || (templateObject_7 = __makeTemplateObject(["You have unsaved changes"], ["You have unsaved changes"]))))) : null))))));
    };
    Object.defineProperty(EditNamespace.prototype, "updateParams", {
        get: function () {
            return ParamHelper.updateParamsMixin();
        },
        enumerable: false,
        configurable: true
    });
    EditNamespace.prototype.loadNamespace = function () {
        var _this = this;
        MyNamespaceAPI.get(this.props.match.params['namespace'])
            .then(function (response) {
            // Add an empty link to the end of the links array to create an empty field
            // on the link edit form for adding new links
            var emptyLink = { name: '', url: '' };
            response.data.links.push(emptyLink);
            _this.setState({ loading: false, namespace: response.data });
        })
            .catch(function () {
            _this.setState({ unauthorized: true, loading: false });
        });
    };
    EditNamespace.prototype.saveNamespace = function () {
        var _this = this;
        this.setState({ saving: true }, function () {
            var namespace = __assign({}, _this.state.namespace);
            var setLinks = [];
            // remove any empty links from the list before saving
            for (var _i = 0, _a = namespace.links; _i < _a.length; _i++) {
                var link = _a[_i];
                if (link.url !== '' || link.name !== '') {
                    setLinks.push(link);
                }
            }
            namespace.links = setLinks;
            MyNamespaceAPI.update(_this.state.namespace.name, namespace)
                .then(function (result) {
                _this.setState({
                    namespace: result.data,
                    errorMessages: {},
                    saving: false,
                    unsavedData: false,
                    redirect: formatPath(Paths.myCollections, {
                        namespace: _this.state.namespace.name,
                    }),
                }, function () {
                    return _this.context.setAlerts(__spreadArray(__spreadArray([], _this.context.alerts, true), [
                        {
                            variant: 'success',
                            title: (React.createElement(Trans, null,
                                "Saved changes to namespace \"",
                                _this.state.namespace.name,
                                "\".")),
                        },
                    ], false));
                });
            })
                .catch(function (error) {
                var result = error.response;
                if (result.status === 400) {
                    _this.setState({
                        errorMessages: mapErrorMessages(error),
                        saving: false,
                    });
                }
                else if (result.status === 404) {
                    _this.setState({
                        alerts: _this.state.alerts.concat({
                            variant: 'danger',
                            title: t(templateObject_8 || (templateObject_8 = __makeTemplateObject(["Changes to namespace \"", "\" could not be saved."], ["Changes to namespace \"", "\" could not be saved."])), _this.state.namespace.name),
                            description: errorMessage(result.status, result.statusText),
                        }),
                        saving: false,
                    });
                }
            });
        });
    };
    Object.defineProperty(EditNamespace.prototype, "closeAlert", {
        get: function () {
            return closeAlertMixin('alerts');
        },
        enumerable: false,
        configurable: true
    });
    EditNamespace.prototype.cancel = function () {
        this.setState({
            redirect: formatPath(Paths.myCollections, {
                namespace: this.state.namespace.name,
            }),
        });
    };
    return EditNamespace;
}(React.Component));
EditNamespace.contextType = AppContext;
export default withRouter(EditNamespace);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;
//# sourceMappingURL=edit-namespace.js.map