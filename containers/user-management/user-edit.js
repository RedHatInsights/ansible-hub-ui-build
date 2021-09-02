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
import * as React from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import { BaseHeader, EmptyStateUnauthorized, LoadingPageWithHeader, UserFormPage, } from 'src/components';
import { mapErrorMessages } from 'src/utilities';
import { UserAPI } from 'src/api';
import { Paths, formatPath } from 'src/paths';
import { AppContext } from 'src/loaders/app-context';
var UserEdit = /** @class */ (function (_super) {
    __extends(UserEdit, _super);
    function UserEdit(props) {
        var _this = _super.call(this, props) || this;
        _this.saveUser = function () {
            var user = _this.state.user;
            UserAPI.update(user.id.toString(), user)
                .then(function () {
                //redirect to login page when password of logged user is changed
                if (_this.context.user.id === user.id && user.password) {
                    _this.setState({ redirect: Paths.login });
                }
                else {
                    _this.setState({ redirect: Paths.userList });
                }
            })
                .catch(function (err) {
                _this.setState({ errorMessages: mapErrorMessages(err) });
            });
        };
        _this.state = { user: undefined, errorMessages: {}, unauthorized: false };
        return _this;
    }
    UserEdit.prototype.componentDidMount = function () {
        var _this = this;
        var id = this.props.match.params['userID'];
        UserAPI.get(id)
            .then(function (result) {
            return _this.setState({ user: result.data, unauthorized: false });
        })
            .catch(function () { return _this.setState({ unauthorized: true }); });
    };
    UserEdit.prototype.render = function () {
        var _this = this;
        if (this.state.redirect) {
            return React.createElement(Redirect, { push: true, to: this.state.redirect });
        }
        var _a = this.state, user = _a.user, errorMessages = _a.errorMessages, unauthorized = _a.unauthorized;
        var title = _(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Edit user"], ["Edit user"])));
        if (unauthorized) {
            return (React.createElement(React.Fragment, null,
                React.createElement(BaseHeader, { title: title }),
                React.createElement(EmptyStateUnauthorized, null)));
        }
        if (!user) {
            return React.createElement(LoadingPageWithHeader, null);
        }
        var breadcrumbs = [
            { url: Paths.userList, name: _(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Users"], ["Users"]))) },
            {
                url: formatPath(Paths.userDetail, { userID: user.id }),
                name: user.username,
            },
            { name: _(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Edit"], ["Edit"]))) },
        ];
        return (React.createElement(UserFormPage, { user: user, breadcrumbs: breadcrumbs, title: title, errorMessages: errorMessages, updateUser: function (user, errorMessages) {
                return _this.setState({ user: user, errorMessages: errorMessages });
            }, saveUser: this.saveUser, onCancel: function () { return _this.setState({ redirect: Paths.userList }); } }));
    };
    return UserEdit;
}(React.Component));
export default withRouter(UserEdit);
UserEdit.contextType = AppContext;
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=user-edit.js.map