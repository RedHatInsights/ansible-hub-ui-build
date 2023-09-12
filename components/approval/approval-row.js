var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { t } from '@lingui/macro';
import { Button, ButtonVariant, DropdownItem, Label, LabelGroup, Spinner, } from '@patternfly/react-core';
import CheckCircleIcon from '@patternfly/react-icons/dist/esm/icons/check-circle-icon';
import DownloadIcon from '@patternfly/react-icons/dist/esm/icons/download-icon';
import ExclamationCircleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-circle-icon';
import ExclamationTriangleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-triangle-icon';
import React from 'react';
import { Link } from 'react-router-dom';
import { CollectionAPI } from 'src/api';
import { DateComponent, ListItemActions } from 'src/components';
import { Paths, formatPath } from 'src/paths';
export var ApprovalRow = function (_a) {
    var approve = _a.approve, collectionVersion = _a.collectionVersion, featureFlags = _a.context.featureFlags, isVersionUpdating = _a.isVersionUpdating, openUploadCertificateModal = _a.openUploadCertificateModal, reject = _a.reject;
    var version = collectionVersion.collection_version, repository = collectionVersion.repository;
    return (React.createElement("tr", { "data-cy": "ApprovalRow-".concat(repository.name, "-").concat(version.namespace, "-").concat(version.name) },
        React.createElement("td", null, version.namespace),
        React.createElement("td", null, version.name),
        React.createElement("td", null,
            React.createElement(Link, { to: formatPath(Paths.collectionByRepo, {
                    namespace: version.namespace,
                    collection: version.name,
                    repo: repository.name,
                }, {
                    version: version.version,
                }) }, version.version),
            React.createElement(Button, { variant: ButtonVariant.link, onClick: function () {
                    download(repository, version.namespace, version.name, version.version);
                } },
                React.createElement(DownloadIcon, null))),
        React.createElement("td", null,
            React.createElement(DateComponent, { date: version.pulp_created })),
        React.createElement("td", null,
            React.createElement(LabelGroup, null, repository.name)),
        React.createElement("td", null, renderStatus(collectionVersion)),
        renderButtons(collectionVersion)));
    function renderButtons(collectionVersion) {
        var _a;
        // not checking namespace permissions here, auto_sign happens API side, so is the permission check
        var version = collectionVersion.collection_version, repository = collectionVersion.repository, is_signed = collectionVersion.is_signed;
        var can_upload_signatures = featureFlags.can_upload_signatures, collection_auto_sign = featureFlags.collection_auto_sign, require_upload_signatures = featureFlags.require_upload_signatures;
        var pipeline = (_a = repository === null || repository === void 0 ? void 0 : repository.pulp_labels) === null || _a === void 0 ? void 0 : _a.pipeline;
        if (isVersionUpdating(collectionVersion) || !pipeline) {
            return React.createElement(ListItemActions, null); // empty td;
        }
        var canUploadSignature = can_upload_signatures && !is_signed;
        var mustUploadSignature = canUploadSignature && require_upload_signatures;
        var autoSign = collection_auto_sign && !require_upload_signatures;
        var approveButton = [
            canUploadSignature && (React.createElement(React.Fragment, { key: 'upload' },
                React.createElement(Button, { onClick: function () { return openUploadCertificateModal(collectionVersion); } }, t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Upload signature"], ["Upload signature"])))),
                ' ')),
            React.createElement(Button, { key: 'approve-button', isDisabled: mustUploadSignature, "data-cy": 'approve-button', onClick: function () { return approve(collectionVersion); } }, autoSign ? t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Sign and approve"], ["Sign and approve"]))) : t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Approve"], ["Approve"])))),
        ].filter(Boolean);
        var approveDropDown = function (isDisabled) { return (React.createElement(DropdownItem, { onClick: function () { return approve(collectionVersion); }, isDisabled: isDisabled, key: 'approve' }, autoSign ? t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["Sign and approve"], ["Sign and approve"]))) : t(templateObject_5 || (templateObject_5 = __makeTemplateObject(["Approve"], ["Approve"]))))); };
        var rejectDropDown = function (isDisabled) { return (React.createElement(DropdownItem, { onClick: function () { return reject(collectionVersion); }, isDisabled: isDisabled, key: 'reject' }, t(templateObject_6 || (templateObject_6 = __makeTemplateObject(["Reject"], ["Reject"]))))); };
        var importsLink = (React.createElement(DropdownItem, { key: 'imports', component: React.createElement(Link, { to: formatPath(Paths.myImports, {}, {
                    namespace: version.namespace,
                    name: version.name,
                    version: version.version,
                }) }, t(templateObject_7 || (templateObject_7 = __makeTemplateObject(["View Import Logs"], ["View Import Logs"])))) }));
        if (pipeline === 'approved') {
            return (React.createElement(ListItemActions, { kebabItems: [
                    approveDropDown(true),
                    rejectDropDown(false),
                    importsLink,
                ] }));
        }
        if (pipeline === 'rejected') {
            return (React.createElement(ListItemActions, { kebabItems: [
                    approveDropDown(false),
                    rejectDropDown(true),
                    importsLink,
                ] }));
        }
        if (pipeline === 'staging') {
            return (React.createElement(ListItemActions, { kebabItems: [rejectDropDown(false), importsLink], buttons: approveButton }));
        }
    }
    function renderStatus(collectionVersion) {
        var _a;
        var repository = collectionVersion.repository, is_signed = collectionVersion.is_signed;
        var pipeline = (_a = repository === null || repository === void 0 ? void 0 : repository.pulp_labels) === null || _a === void 0 ? void 0 : _a.pipeline;
        if (isVersionUpdating(collectionVersion)) {
            return React.createElement(Spinner, { size: 'lg' });
        }
        if (pipeline === 'approved') {
            var display_signatures = featureFlags.display_signatures;
            return (React.createElement(Label, { variant: 'outline', color: 'green', icon: React.createElement(CheckCircleIcon, null) }, display_signatures && is_signed
                ? t(templateObject_8 || (templateObject_8 = __makeTemplateObject(["Signed and approved"], ["Signed and approved"]))) : t(templateObject_9 || (templateObject_9 = __makeTemplateObject(["Approved"], ["Approved"])))));
        }
        if (pipeline === 'rejected') {
            return (React.createElement(Label, { variant: 'outline', color: 'red', icon: React.createElement(ExclamationCircleIcon, null) }, t(templateObject_10 || (templateObject_10 = __makeTemplateObject(["Rejected"], ["Rejected"])))));
        }
        if (pipeline === 'staging') {
            var can_upload_signatures = featureFlags.can_upload_signatures, require_upload_signatures = featureFlags.require_upload_signatures;
            return (React.createElement(Label, { variant: 'outline', color: 'orange', icon: React.createElement(ExclamationTriangleIcon, null) }, !is_signed && can_upload_signatures && require_upload_signatures
                ? t(templateObject_11 || (templateObject_11 = __makeTemplateObject(["Needs signature and review"], ["Needs signature and review"]))) : t(templateObject_12 || (templateObject_12 = __makeTemplateObject(["Needs review"], ["Needs review"])))));
        }
    }
    function download(repository, namespace, name, version) {
        CollectionAPI.getDownloadURL(repository, namespace, name, version).then(function (downloadURL) {
            window.location.assign(downloadURL);
        });
    }
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12;
//# sourceMappingURL=approval-row.js.map