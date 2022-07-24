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
import { Constants } from 'src/constants';
import { HubAPI } from './hub';
var API = /** @class */ (function (_super) {
    __extends(API, _super);
    function API() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.apiPath = _this.getUIPath('me/');
        return _this;
    }
    API.prototype.getUser = function () {
        return this.http.get(this.apiPath).then(function (result) { return result.data; });
    };
    API.prototype.saveUser = function (data) {
        return this.http.put(this.apiPath, data);
    };
    // insights has some asinine way of loading tokens that involves forcing the
    // page to refresh before loading the token that can't be done witha single
    // API request.
    API.prototype.getToken = function () {
        if (DEPLOYMENT_MODE === Constants.INSIGHTS_DEPLOYMENT_MODE) {
            return Promise.reject('Use window.insights.chrome.auth to get tokens for insights deployments');
        }
        return this.http.post('v3/auth/token/', {});
    };
    // Note: This does not reset the app's authentication state. That has to be done
    // separately by setting the user state in the app's root component
    API.prototype.logout = function () {
        return this.http.post(this.getUIPath('auth/logout/'), {});
    };
    // Note: This does not reset the app's authentication state. That has to be done
    // separately by setting the user state in the app's root component
    API.prototype.login = function (username, password) {
        var _this = this;
        var loginURL = this.getUIPath('auth/login/');
        // Make a get request to the login endpoint to set CSRF tokens before making
        // the authentication reqest
        return this.http.get(loginURL).then(function () {
            return _this.http.post(loginURL, {
                username: username,
                password: password,
            });
        });
    };
    return API;
}(HubAPI));
export var ActiveUserAPI = new API();
//# sourceMappingURL=active-user.js.map