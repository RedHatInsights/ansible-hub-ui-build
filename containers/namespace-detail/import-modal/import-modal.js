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
import './import-modal.scss';
import axios from 'axios';
import { Modal, Button } from '@patternfly/react-core';
import { FolderOpenIcon, SpinnerIcon } from '@patternfly/react-icons';
import { CollectionAPI, } from 'src/api';
var Status;
(function (Status) {
    Status["uploading"] = "uploading";
    Status["waiting"] = "waiting";
})(Status || (Status = {}));
var ImportModal = /** @class */ (function (_super) {
    __extends(ImportModal, _super);
    function ImportModal(props) {
        var _this = _super.call(this, props) || this;
        _this.acceptedFileTypes = ['application/x-gzip', 'application/gzip'];
        _this.COLLECTION_NAME_REGEX = /[0-9a-z_]+\-[0-9a-z_]+\-[0-9A-Za-z.+-]+/;
        _this.state = {
            file: undefined,
            errors: '',
            uploadProgress: 0,
            uploadStatus: Status.waiting,
        };
        return _this;
    }
    ImportModal.prototype.render = function () {
        var _this = this;
        var _a = this.props, isOpen = _a.isOpen, collection = _a.collection;
        var _b = this.state, file = _b.file, errors = _b.errors, uploadProgress = _b.uploadProgress, uploadStatus = _b.uploadStatus;
        return (React.createElement(Modal, { variant: 'small', title: collection ? 'New version of ' + collection.name : 'New collection', isOpen: isOpen, onClose: function () { return _this.handleClose(); }, actions: [
                React.createElement(Button, { key: 'confirm', variant: 'primary', onClick: function () { return _this.saveFile(); }, isDisabled: !this.canUpload() }, "Upload"),
                React.createElement(Button, { key: 'cancel', variant: 'secondary', onClick: function () { return _this.handleClose(); } }, "Cancel"),
            ] },
            React.createElement("div", { className: 'upload-collection' },
                React.createElement("form", null,
                    React.createElement("input", { disabled: uploadStatus !== Status.waiting, className: 'upload-file', type: 'file', id: 'collection-widget', onChange: function (e) { return _this.handleFileUpload(e.target.files); } }),
                    React.createElement("label", { className: 'upload-file-label', htmlFor: 'collection-widget' },
                        React.createElement("div", { className: 'upload-box' },
                            React.createElement("div", { className: 'upload-button' }, this.renderFileIcon()),
                            React.createElement("div", { className: 'upload-text' },
                                file != null ? file.name : 'Select file',
                                React.createElement("div", { className: 'loading-bar', style: {
                                        width: uploadProgress * 100 + '%',
                                    } }))))),
                errors ? (React.createElement("span", { className: 'file-error-messages' },
                    React.createElement("i", { className: 'pficon-error-circle-o' }),
                    " ",
                    errors)) : null)));
    };
    ImportModal.prototype.canUpload = function () {
        if (this.state.errors) {
            return false;
        }
        if (this.state.uploadStatus !== Status.waiting) {
            return false;
        }
        if (!this.state.file) {
            return false;
        }
        return true;
    };
    ImportModal.prototype.renderFileIcon = function () {
        switch (this.state.uploadStatus) {
            case Status.uploading:
                return React.createElement(SpinnerIcon, { className: 'fa-spin' });
            default:
                return React.createElement(FolderOpenIcon, null);
        }
    };
    ImportModal.prototype.handleFileUpload = function (files) {
        // Selects the artifact that will be uploaded and performs some basic
        // preliminary checks on it.
        var newCollection = files[0];
        var collection = this.props.collection;
        if (files.length > 1) {
            this.setState({
                errors: 'Please select no more than one file.',
            });
        }
        else if (!this.acceptedFileTypes.includes(newCollection.type)) {
            this.setState({
                errors: 'Invalid file format.',
                file: newCollection,
                uploadProgress: 0,
            });
        }
        else if (!this.COLLECTION_NAME_REGEX.test(newCollection.name)) {
            this.setState({
                errors: "Invalid file name. Collections must be formatted as 'namespace-collection_name-1.0.0'",
                file: newCollection,
                uploadProgress: 0,
            });
        }
        else if (collection &&
            collection.name !== newCollection.name.split('-')[1]) {
            this.setState({
                errors: "The collection you have selected doesn't appear to match " + collection.name,
                file: newCollection,
                uploadProgress: 0,
            });
        }
        else if (this.props.namespace != newCollection.name.split('-')[0]) {
            this.setState({
                errors: "The collection you have selected does not match this namespace.",
                file: newCollection,
                uploadProgress: 0,
            });
        }
        else {
            this.setState({
                errors: '',
                file: newCollection,
                uploadProgress: 0,
            });
        }
    };
    ImportModal.prototype.saveFile = function () {
        var _this = this;
        this.setState({ uploadStatus: Status.uploading });
        var artifact = {
            file: this.state.file,
            sha256: '',
        };
        this.cancelToken = CollectionAPI.getCancelToken();
        CollectionAPI.upload('inbound-' + this.props.namespace, artifact, function (e) {
            _this.setState({
                uploadProgress: e.loaded / e.total,
            });
        }, this.cancelToken)
            .then(function (response) {
            _this.props.onUploadSuccess(response);
        })
            .catch(function (errors) {
            var errorMessage = '';
            // If request was canceled by the user
            if (!axios.isCancel(errors)) {
                // Upload fails
                if (errors.response.data.errors) {
                    var messages = [];
                    for (var _i = 0, _a = errors.response.data.errors; _i < _a.length; _i++) {
                        var err = _a[_i];
                        messages.push(err.detail ||
                            err.title ||
                            err.code ||
                            'API error. Status code: ' + err.status);
                    }
                    errorMessage = messages.join(', ');
                }
                else {
                    errorMessage = 'API error. Status code: ' + errors.response.status;
                }
            }
            _this.setState({
                uploadStatus: Status.waiting,
                errors: errorMessage,
            });
        })
            .finally(function (_) {
            _this.cancelToken = null;
        });
    };
    ImportModal.prototype.handleClose = function () {
        var _this = this;
        var msg = null;
        if (this.cancelToken && this.state.uploadStatus === Status.uploading) {
            msg = 'Collection upload canceled';
            this.cancelToken.cancel(msg);
        }
        this.setState({
            file: undefined,
            errors: '',
            uploadProgress: 0,
            uploadStatus: Status.waiting,
        }, function () { return _this.props.setOpen(false, msg); });
    };
    return ImportModal;
}(React.Component));
export { ImportModal };
//# sourceMappingURL=import-modal.js.map