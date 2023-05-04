var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { Trans, t } from '@lingui/macro';
import { Checkbox, Text } from '@patternfly/react-core';
import React from 'react';
import { DeleteModal } from 'src/components';
export var DeleteCollectionModal = function (props) {
    var deleteCollection = props.deleteCollection, collections = props.collections, isDeletionPending = props.isDeletionPending, confirmDelete = props.confirmDelete, collectionVersion = props.collectionVersion, cancelAction = props.cancelAction, deleteAction = props.deleteAction, setConfirmDelete = props.setConfirmDelete;
    return (deleteCollection && (React.createElement(DeleteModal, { spinner: isDeletionPending, cancelAction: function () { return cancelAction(); }, deleteAction: function () { return deleteAction(); }, isDisabled: !confirmDelete || isDeletionPending, title: collectionVersion
            ? t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Delete collection version?"], ["Delete collection version?"]))) : t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Delete collection?"], ["Delete collection?"]))) },
        React.createElement(Text, { style: { paddingBottom: 'var(--pf-global--spacer--md)' } }, collectionVersion ? (React.createElement(React.Fragment, null, collections.length === 1 ? (React.createElement(Trans, null,
            "Deleting",
            ' ',
            React.createElement("b", null,
                deleteCollection.collection_version.name,
                " v",
                collectionVersion),
            ' ',
            "and its data will be lost and this will cause the entire collection to be deleted.")) : (React.createElement(Trans, null,
            "Deleting",
            ' ',
            React.createElement("b", null,
                deleteCollection.collection_version.name,
                " v",
                collectionVersion),
            ' ',
            "and its data will be lost.")))) : (React.createElement(Trans, null,
            "Deleting ",
            React.createElement("b", null, deleteCollection.collection_version.name),
            " and its data will be lost."))),
        React.createElement(Checkbox, { isChecked: confirmDelete, onChange: setConfirmDelete, label: t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["I understand that this action cannot be undone."], ["I understand that this action cannot be undone."]))), id: 'delete_confirm' }))));
};
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=delete-collection-modal.js.map