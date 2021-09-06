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
import { t, Trans } from '@lingui/macro';
import * as React from 'react';
import { List, ListItem, Spinner } from '@patternfly/react-core';
import { DeleteModal } from 'src/components/delete-modal/delete-modal';
var DeleteGroupModal = /** @class */ (function (_super) {
    __extends(DeleteGroupModal, _super);
    function DeleteGroupModal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DeleteGroupModal.prototype.render = function () {
        var _a = this.props, cancelAction = _a.cancelAction, count = _a.count, deleteAction = _a.deleteAction, name = _a.name, users = _a.users;
        var nameBold = React.createElement("b", null, name);
        return (React.createElement(DeleteModal, { cancelAction: cancelAction, deleteAction: deleteAction, title: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Delete group?"], ["Delete group?"]))) },
            React.createElement(Trans, null,
                React.createElement("b", null, name),
                " will be permanently deleted."),
            React.createElement("p", null, "\u00A0"),
            React.createElement("div", null,
                users && count > 10 && (React.createElement("p", null,
                    React.createElement(Trans, null,
                        "Deleting this group will affect ",
                        count,
                        " users."))),
                users && count > 0 && count <= 10 && (React.createElement(React.Fragment, null,
                    React.createElement("p", null,
                        React.createElement(Trans, null, "These users will lose access to the group content:")),
                    React.createElement(List, null, users.map(function (u) { return (React.createElement(ListItem, { key: u.username },
                        React.createElement("b", null, u.username))); })))),
                users && !count && React.createElement("p", null, t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["No users will be affected."], ["No users will be affected."])))),
                !users && (React.createElement("p", null,
                    React.createElement(Trans, null,
                        "Checking for affected users... ",
                        React.createElement(Spinner, { size: 'sm' })))))));
    };
    return DeleteGroupModal;
}(React.Component));
export { DeleteGroupModal };
var templateObject_1, templateObject_2;
//# sourceMappingURL=delete-group-modal.js.map