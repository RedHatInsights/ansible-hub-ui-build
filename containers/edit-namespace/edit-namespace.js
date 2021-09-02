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
import { Section, Spinner } from '@redhat-cloud-services/frontend-components';
import { withRouter, Redirect } from 'react-router-dom';
import { PartnerHeader, NamespaceForm, ResourcesForm, AlertList, closeAlertMixin, Main, EmptyStateUnauthorized, } from 'src/components';
import { MyNamespaceAPI, ActiveUserAPI, } from 'src/api';
import { Form, ActionGroup, Button } from '@patternfly/react-core';
import { formatPath, namespaceBreadcrumb, Paths } from 'src/paths';
import { ParamHelper, mapErrorMessages } from 'src/utilities';
var EditNamespace = /** @class */ (function (_super) {
    __extends(EditNamespace, _super);
    function EditNamespace(props) {
        var _this = _super.call(this, props) || this;
        var params = ParamHelper.parseParamString(props.location.search);
        if (!params['tab']) {
            params['tab'] = 'edit details';
        }
        _this.state = {
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
        ActiveUserAPI.getUser().then(function (result) {
            _this.setState({ userId: result.account_number }, function () {
                return _this.loadNamespace();
            });
        });
    };
    EditNamespace.prototype.render = function () {
        var _this = this;
        var _a = this.state, namespace = _a.namespace, errorMessages = _a.errorMessages, saving = _a.saving, redirect = _a.redirect, params = _a.params, userId = _a.userId, unauthorized = _a.unauthorized;
        if (!namespace) {
            return null;
        }
        if (redirect) {
            return React.createElement(Redirect, { to: redirect });
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
                    { name: 'Edit' },
                ], tabs: ['Edit details', 'Edit resources'], params: params, updateParams: function (p) { return _this.updateParams(p); } }),
            React.createElement(AlertList, { alerts: this.state.alerts, closeAlert: function (i) { return _this.closeAlert(i); } }),
            unauthorized ? (React.createElement(EmptyStateUnauthorized, null)) : (React.createElement(Main, null,
                React.createElement(Section, { className: 'body' },
                    params.tab.toLowerCase() === 'edit details' ? (React.createElement(NamespaceForm, { userId: userId, namespace: namespace, errorMessages: errorMessages, updateNamespace: function (namespace) {
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
                            React.createElement(Button, { variant: 'primary', onClick: function () { return _this.saveNamespace(); } }, "Save"),
                            React.createElement(Button, { variant: 'secondary', onClick: function () { return _this.cancel(); } }, "Cancel"),
                            saving ? React.createElement(Spinner, null) : null),
                        this.state.unsavedData ? (React.createElement("div", { style: { color: 'red' } }, "You have unsaved changes")) : null))))));
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
            _this.setState({ namespace: response.data });
        })
            .catch(function (response) {
            _this.setState({ unauthorized: true });
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
                            title: "API Error: " + error.response.status,
                            description: "You don't have permissions to update this namespace.",
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
export default withRouter(EditNamespace);
//# sourceMappingURL=edit-namespace.js.map