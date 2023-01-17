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
import { Trans, t } from '@lingui/macro';
import { Checkbox, Text } from '@patternfly/react-core';
import React from 'react';
import { DeleteModal } from 'src/components';
var DeleteCollectionModal = /** @class */ (function (_super) {
    __extends(DeleteCollectionModal, _super);
    function DeleteCollectionModal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DeleteCollectionModal.prototype.render = function () {
        var _a = this.props, deleteCollection = _a.deleteCollection, isDeletionPending = _a.isDeletionPending, confirmDelete = _a.confirmDelete, collectionVersion = _a.collectionVersion, cancelAction = _a.cancelAction, deleteAction = _a.deleteAction, setConfirmDelete = _a.setConfirmDelete;
        return (deleteCollection && (React.createElement(DeleteModal, { spinner: isDeletionPending, cancelAction: function () { return cancelAction(); }, deleteAction: function () { return deleteAction(); }, isDisabled: !confirmDelete || isDeletionPending, title: collectionVersion
                ? t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Delete collection version?"], ["Delete collection version?"]))) : t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Delete collection?"], ["Delete collection?"]))) },
            React.createElement(Text, { style: { paddingBottom: 'var(--pf-global--spacer--md)' } }, collectionVersion ? (React.createElement(React.Fragment, null, deleteCollection.all_versions
                .length === 1 ? (React.createElement(Trans, null,
                "Deleting",
                ' ',
                React.createElement("b", null,
                    deleteCollection.name,
                    " v",
                    collectionVersion),
                ' ',
                "and its data will be lost and this will cause the entire collection to be deleted.")) : (React.createElement(Trans, null,
                "Deleting",
                ' ',
                React.createElement("b", null,
                    deleteCollection.name,
                    " v",
                    collectionVersion),
                ' ',
                "and its data will be lost.")))) : (React.createElement(Trans, null,
                "Deleting ",
                React.createElement("b", null, deleteCollection.name),
                " and its data will be lost."))),
            React.createElement(Checkbox, { isChecked: confirmDelete, onChange: setConfirmDelete, label: t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["I understand that this action cannot be undone."], ["I understand that this action cannot be undone."]))), id: 'delete_confirm' }))));
    };
    return DeleteCollectionModal;
}(React.Component));
export { DeleteCollectionModal };
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=delete-collection-modal.js.map