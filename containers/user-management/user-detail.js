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
import { t } from '@lingui/macro';
import * as React from 'react';
import { withRouter, Link, Redirect, } from 'react-router-dom';
import { Button } from '@patternfly/react-core';
import { LoadingPageWithHeader, AlertList, closeAlertMixin, UserFormPage, EmptyStateUnauthorized, } from 'src/components';
import { UserAPI } from 'src/api';
import { Paths, formatPath } from 'src/paths';
import { DeleteUserModal } from './delete-user-modal';
import { AppContext } from 'src/loaders/app-context';
var UserDetail = /** @class */ (function (_super) {
    __extends(UserDetail, _super);
    function UserDetail(props) {
        var _this = _super.call(this, props) || this;
        _this.closeModal = function (didDelete) {
            return _this.setState({
                showDeleteModal: false,
            }, function () {
                if (didDelete) {
                    _this.setState({ redirect: Paths.userList });
                }
            });
        };
        _this.state = {
            userDetail: undefined,
            errorMessages: {},
            alerts: [],
            showDeleteModal: false,
            unauthorised: false,
        };
        return _this;
    }
    UserDetail.prototype.componentDidMount = function () {
        var _this = this;
        var id = this.props.match.params['userID'];
        if (!this.context.user ||
            this.context.user.is_anonymous ||
            !this.context.user.model_permissions.view_user) {
            this.setState({ unauthorised: true });
        }
        else {
            UserAPI.get(id)
                .then(function (result) { return _this.setState({ userDetail: result.data }); })
                .catch(function () { return _this.setState({ redirect: Paths.notFound }); });
        }
    };
    UserDetail.prototype.render = function () {
        var _this = this;
        if (this.state.redirect) {
            return React.createElement(Redirect, { push: true, to: this.state.redirect });
        }
        var _a = this.state, userDetail = _a.userDetail, errorMessages = _a.errorMessages, alerts = _a.alerts, showDeleteModal = _a.showDeleteModal, unauthorised = _a.unauthorised;
        var user = this.context.user;
        if (unauthorised) {
            return React.createElement(EmptyStateUnauthorized, null);
        }
        if (!userDetail) {
            return React.createElement(LoadingPageWithHeader, null);
        }
        var breadcrumbs = [
            { url: Paths.userList, name: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Users"], ["Users"]))) },
            { name: userDetail.username },
        ];
        var title = t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["User details"], ["User details"])));
        return (React.createElement(React.Fragment, null,
            React.createElement(AlertList, { alerts: alerts, closeAlert: function (i) { return _this.closeAlert(i); } }),
            React.createElement(DeleteUserModal, { isOpen: showDeleteModal, closeModal: this.closeModal, user: userDetail, addAlert: function (text, variant, description) {
                    if (description === void 0) { description = undefined; }
                    return _this.setState({
                        alerts: alerts.concat([
                            { title: text, variant: variant, description: description },
                        ]),
                    });
                } }),
            React.createElement(UserFormPage, { user: userDetail, breadcrumbs: breadcrumbs, title: title, errorMessages: errorMessages, updateUser: function (user) { return _this.setState({ userDetail: user }); }, isReadonly: true, extraControls: React.createElement("div", { style: { display: 'flex', justifyContent: 'flex-end' } },
                    !!user && user.model_permissions.change_user ? (React.createElement("div", null,
                        React.createElement(Link, { to: formatPath(Paths.editUser, {
                                userID: userDetail.id,
                            }) },
                            React.createElement(Button, null, t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Edit"], ["Edit"]))))))) : null,
                    !!user && user.model_permissions.delete_user ? (React.createElement("div", { style: { marginLeft: '8px' } },
                        React.createElement(Button, { variant: 'secondary', onClick: function () { return _this.setState({ showDeleteModal: true }); } }, t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["Delete"], ["Delete"])))))) : null) })));
    };
    Object.defineProperty(UserDetail.prototype, "closeAlert", {
        get: function () {
            return closeAlertMixin('alerts');
        },
        enumerable: false,
        configurable: true
    });
    return UserDetail;
}(React.Component));
export default withRouter(UserDetail);
UserDetail.contextType = AppContext;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=user-detail.js.map