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
import * as React from 'react';
import { withRouter } from 'react-router-dom';
import { BaseHeader, Breadcrumbs, EmptyStateUnauthorized, UserFormPage, } from 'src/components';
import { mapErrorMessages } from 'src/utilities';
import { UserAPI } from 'src/api';
import { Paths } from 'src/paths';
import { AppContext } from 'src/loaders/app-context';
var UserCreate = /** @class */ (function (_super) {
    __extends(UserCreate, _super);
    function UserCreate(props) {
        var _this = _super.call(this, props) || this;
        _this.saveUser = function () {
            var user = _this.state.user;
            UserAPI.create(user)
                .then(function (result) { return _this.props.history.push(Paths.userList); })
                .catch(function (err) {
                _this.setState({ errorMessages: mapErrorMessages(err) });
            });
        };
        _this.state = {
            user: {
                username: '',
                first_name: '',
                last_name: '',
                email: '',
                password: '',
                groups: [],
                is_superuser: false,
            },
            errorMessages: {},
        };
        return _this;
    }
    UserCreate.prototype.render = function () {
        var _this = this;
        var _a = this.state, user = _a.user, errorMessages = _a.errorMessages;
        var notAuthorised = !this.context.user || !this.context.user.model_permissions.add_user;
        var breadcrumbs = [
            { url: Paths.userList, name: 'Users' },
            { name: 'Create new user' },
        ];
        var title = 'Create new user';
        return notAuthorised ? (React.createElement(React.Fragment, null,
            React.createElement(BaseHeader, { breadcrumbs: React.createElement(Breadcrumbs, { links: breadcrumbs }), title: title }),
            React.createElement(EmptyStateUnauthorized, null))) : (React.createElement(UserFormPage, { user: user, breadcrumbs: breadcrumbs, title: title, errorMessages: errorMessages, updateUser: function (user, errorMessages) {
                return _this.setState({ user: user, errorMessages: errorMessages });
            }, saveUser: this.saveUser, onCancel: function () { return _this.props.history.push(Paths.userList); }, isNewUser: true }));
    };
    return UserCreate;
}(React.Component));
export default withRouter(UserCreate);
UserCreate.contextType = AppContext;
//# sourceMappingURL=user-create.js.map