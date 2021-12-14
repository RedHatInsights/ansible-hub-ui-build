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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { t, Trans } from '@lingui/macro';
import * as React from 'react';
import { UserAPI } from 'src/api';
import { mapErrorMessages } from 'src/utilities';
import { AppContext } from 'src/loaders/app-context';
import { DeleteModal } from 'src/components/delete-modal/delete-modal';
var DeleteUserModal = /** @class */ (function (_super) {
    __extends(DeleteUserModal, _super);
    function DeleteUserModal(props) {
        var _this = _super.call(this, props) || this;
        _this.isUserSelfOrAdmin = function (user) {
            return user.is_superuser || user.id === _this.context.user.id;
        };
        _this.deleteUser = function () {
            _this.setState({ isWaitingForResponse: true }, function () {
                return UserAPI.delete(_this.props.user.id)
                    .then(function () { return _this.waitForDeleteConfirm(_this.props.user.id); })
                    .catch(function (err) {
                    _this.props.addAlert(t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Error deleting user."], ["Error deleting user."]))), 'danger', mapErrorMessages(err)['__nofield']);
                    _this.props.closeModal(false);
                })
                    .finally(function () { return _this.setState({ isWaitingForResponse: false }); });
            });
        };
        _this.state = { isWaitingForResponse: false };
        return _this;
    }
    DeleteUserModal.prototype.render = function () {
        var _this = this;
        var _a = this.props, isOpen = _a.isOpen, user = _a.user, closeModal = _a.closeModal;
        var isWaitingForResponse = this.state.isWaitingForResponse;
        if (!user || !isOpen) {
            return null;
        }
        return (React.createElement(DeleteModal, { cancelAction: function () { return closeModal(false); }, deleteAction: function () { return _this.deleteUser(); }, isDisabled: isWaitingForResponse || this.isUserSelfOrAdmin(user), spinner: isWaitingForResponse, title: t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Delete user?"], ["Delete user?"]))) }, this.getActionDescription(user)));
    };
    DeleteUserModal.prototype.getActionDescription = function (user) {
        if (user.is_superuser) {
            return t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Deleting super users is not allowed."], ["Deleting super users is not allowed."])));
        }
        else if (user.id === this.context.user.id) {
            return t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["Deleting yourself is not allowed."], ["Deleting yourself is not allowed."])));
        }
        return (React.createElement(Trans, null,
            React.createElement("b", null, user.username),
            " will be permanently deleted."));
    };
    // Wait for the user to actually get removed from the database before closing the
    // modal
    DeleteUserModal.prototype.waitForDeleteConfirm = function (user) {
        var _this = this;
        UserAPI.get(user)
            .then(function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    // wait half a second
                    return [4 /*yield*/, new Promise(function (r) { return setTimeout(r, 500); })];
                    case 1:
                        // wait half a second
                        _a.sent();
                        this.waitForDeleteConfirm(user);
                        return [2 /*return*/];
                }
            });
        }); })
            .catch(function (err) {
            if (err.response.status === 404) {
                _this.props.addAlert(t(templateObject_5 || (templateObject_5 = __makeTemplateObject(["Successfully deleted user."], ["Successfully deleted user."]))), 'success');
                _this.props.closeModal(true);
            }
            else {
                _this.props.addAlert(t(templateObject_6 || (templateObject_6 = __makeTemplateObject(["Error deleting user."], ["Error deleting user."]))), 'danger');
            }
            _this.setState({ isWaitingForResponse: false });
        });
    };
    DeleteUserModal.contextType = AppContext;
    return DeleteUserModal;
}(React.Component));
export { DeleteUserModal };
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
//# sourceMappingURL=delete-user-modal.js.map