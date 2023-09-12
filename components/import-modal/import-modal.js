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
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { t } from '@lingui/macro';
import { Button, Modal, Radio } from '@patternfly/react-core';
import FolderOpenIcon from '@patternfly/react-icons/dist/esm/icons/folder-open-icon';
import SpinnerIcon from '@patternfly/react-icons/dist/esm/icons/spinner-icon';
import axios from 'axios';
import cx from 'classnames';
import React from 'react';
import { AnsibleRepositoryAPI, CollectionAPI, } from 'src/api';
import { AlertList, MultipleRepoSelector, closeAlertMixin, } from 'src/components';
import { repositoryBasePath } from 'src/utilities';
import './import-modal.scss';
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
        _this.COLLECTION_NAME_REGEX = /[0-9a-z_]+-[0-9a-z_]+-[0-9A-Za-z.+-]+/;
        _this.state = {
            file: undefined,
            errors: '',
            errorVariant: 'default',
            uploadProgress: 0,
            uploadStatus: Status.waiting,
            loading: true,
            alerts: [],
            selectedRepos: [],
            onlyStaging: true,
        };
        return _this;
    }
    ImportModal.prototype.componentDidMount = function () {
        this.loadAllRepos();
    };
    ImportModal.prototype.loadAllRepos = function () {
        return __awaiter(this, void 0, void 0, function () {
            var onlyStaging, staging, _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        onlyStaging = this.state.onlyStaging;
                        if (!onlyStaging) return [3 /*break*/, 2];
                        return [4 /*yield*/, AnsibleRepositoryAPI.list({
                                name: 'staging',
                                page_size: 1,
                                pulp_label_select: 'pipeline=staging',
                            })
                                .then(function (_a) {
                                var results = _a.data.results;
                                return results[0];
                            })
                                .catch(function () { return null; })];
                    case 1:
                        _a = _b.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        _a = null;
                        _b.label = 3;
                    case 3:
                        staging = _a;
                        return [2 /*return*/, AnsibleRepositoryAPI.list({
                                pulp_label_select: onlyStaging ? 'pipeline=staging' : '!pipeline',
                                page_size: 1,
                            })
                                .then(function (_a) {
                                var _b = _a.data, count = _b.count, results = _b.results;
                                return _this.setState({
                                    selectedRepos: onlyStaging
                                        ? [staging || results[0]].filter(Boolean)
                                        : count === 1
                                            ? [results[0]]
                                            : [],
                                });
                            })
                                .catch(function (error) {
                                return _this.addAlert(t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Error loading repositories."], ["Error loading repositories."]))), 'danger', error === null || error === void 0 ? void 0 : error.message);
                            })
                                .finally(function () { return _this.setState({ loading: false }); })];
                }
            });
        });
    };
    ImportModal.prototype.addAlert = function (title, variant, description) {
        this.setState({
            alerts: __spreadArray(__spreadArray([], this.state.alerts, true), [
                {
                    description: description,
                    title: title,
                    variant: variant,
                },
            ], false),
        });
    };
    ImportModal.prototype.addAlertObj = function (alert) {
        this.addAlert(alert.title, alert.variant, alert.description);
    };
    Object.defineProperty(ImportModal.prototype, "closeAlert", {
        get: function () {
            return closeAlertMixin('alerts');
        },
        enumerable: false,
        configurable: true
    });
    ImportModal.prototype.render = function () {
        var _this = this;
        var _a = this.props, isOpen = _a.isOpen, collection = _a.collection;
        var _b = this.state, errors = _b.errors, errorVariant = _b.errorVariant, file = _b.file, onlyStaging = _b.onlyStaging, uploadProgress = _b.uploadProgress, uploadStatus = _b.uploadStatus;
        var skipError = function () {
            if (errorVariant === 'skippable') {
                _this.setState({ errorVariant: 'skipped' });
            }
        };
        return (React.createElement(Modal, { variant: 'large', title: collection ? t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["New version of ", ""], ["New version of ", ""])), collection.name) : t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["New collection"], ["New collection"]))), isOpen: isOpen, onClose: function () { return _this.handleClose(); }, actions: [
                React.createElement(Button, { key: 'confirm', variant: 'primary', onClick: function () { return _this.saveFile(); }, isDisabled: !this.canUpload() || !this.state.selectedRepos.length, "data-cy": 'confirm-upload' }, t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["Upload"], ["Upload"])))),
                React.createElement(Button, { key: 'cancel', variant: 'secondary', onClick: function () { return _this.handleClose(); } }, t(templateObject_5 || (templateObject_5 = __makeTemplateObject(["Cancel"], ["Cancel"])))),
            ] },
            React.createElement("div", { className: 'upload-collection' },
                React.createElement(AlertList, { alerts: this.state.alerts, closeAlert: function (i) { return _this.closeAlert(i); } }),
                React.createElement("form", null,
                    React.createElement("input", { disabled: uploadStatus !== Status.waiting, className: 'upload-file', type: 'file', id: 'collection-widget', onChange: function (e) { return _this.handleFileUpload(e.target.files); } }),
                    React.createElement("label", { className: 'upload-file-label', htmlFor: 'collection-widget' },
                        React.createElement("div", { className: 'upload-box' },
                            React.createElement("div", { className: 'upload-button' }, this.renderFileIcon()),
                            React.createElement("div", { className: 'upload-text' },
                                file != null ? file.name : t(templateObject_6 || (templateObject_6 = __makeTemplateObject(["Select file"], ["Select file"]))),
                                React.createElement("div", { className: 'loading-bar', style: {
                                        width: uploadProgress * 100 + '%',
                                    } }))))),
                errors ? (React.createElement("span", { className: cx('file-error-messages', errorVariant) },
                    errors,
                    errorVariant === 'skippable' && (React.createElement(React.Fragment, null,
                        ' ',
                        React.createElement("a", { onClick: skipError }, t(templateObject_7 || (templateObject_7 = __makeTemplateObject(["Upload anyway?"], ["Upload anyway?"])))))))) : null),
            React.createElement(React.Fragment, null,
                React.createElement("br", null),
                React.createElement(Radio, { isChecked: this.state.onlyStaging, name: 'radio-1', onChange: function (val) {
                        _this.setState({ onlyStaging: val }, function () { return _this.loadAllRepos(); });
                    }, label: t(templateObject_8 || (templateObject_8 = __makeTemplateObject(["Staging Repos"], ["Staging Repos"]))), id: 'radio-staging' }),
                React.createElement(Radio, { isChecked: !this.state.onlyStaging, name: 'radio-2', onChange: function (val) {
                        _this.setState({ onlyStaging: !val }, function () { return _this.loadAllRepos(); });
                    }, label: t(templateObject_9 || (templateObject_9 = __makeTemplateObject(["All Repos"], ["All Repos"]))), id: 'radio-all' }),
                !this.state.onlyStaging && (React.createElement(React.Fragment, null, t(templateObject_10 || (templateObject_10 = __makeTemplateObject(["Please note that these repositories are not filtered by permissions. Upload may fail without the right permissions."], ["Please note that these repositories are not filtered by permissions. Upload may fail without the right permissions."]))))),
                React.createElement(MultipleRepoSelector, { addAlert: function (a) { return _this.addAlertObj(a); }, params: {
                        pulp_label_select: onlyStaging ? 'pipeline=staging' : '!pipeline',
                    }, singleSelectionOnly: true, selectedRepos: this.state.selectedRepos, setSelectedRepos: function (selectedRepos) {
                        return _this.setState({
                            selectedRepos: selectedRepos,
                            errors: '',
                            errorVariant: 'default',
                        });
                    } }))));
    };
    ImportModal.prototype.canUpload = function () {
        if (this.state.errors && this.state.errorVariant !== 'skipped') {
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
                errors: t(templateObject_11 || (templateObject_11 = __makeTemplateObject(["Please select no more than one file."], ["Please select no more than one file."]))),
                errorVariant: 'default',
            });
        }
        else if (!this.acceptedFileTypes.includes(newCollection.type)) {
            var detectedType = newCollection.type || t(templateObject_12 || (templateObject_12 = __makeTemplateObject(["unknown"], ["unknown"])));
            var acceptedTypes = this.acceptedFileTypes.join(', ');
            this.setState({
                errors: t(templateObject_13 || (templateObject_13 = __makeTemplateObject(["Invalid file format: ", " (expected: ", ")."], ["Invalid file format: ", " (expected: ", ")."])), detectedType, acceptedTypes),
                errorVariant: 'skippable',
                file: newCollection,
                uploadProgress: 0,
            });
        }
        else if (!this.COLLECTION_NAME_REGEX.test(newCollection.name)) {
            this.setState({
                errors: t(templateObject_14 || (templateObject_14 = __makeTemplateObject(["Invalid file name. Collections must be formatted as 'namespace-collection_name-1.0.0'"], ["Invalid file name. Collections must be formatted as 'namespace-collection_name-1.0.0'"]))),
                errorVariant: 'default',
                file: newCollection,
                uploadProgress: 0,
            });
        }
        else if (collection &&
            collection.name !== newCollection.name.split('-')[1]) {
            this.setState({
                errors: t(templateObject_15 || (templateObject_15 = __makeTemplateObject(["The collection you have selected doesn't appear to match ", ""], ["The collection you have selected doesn't appear to match ", ""])), collection.name),
                errorVariant: 'default',
                file: newCollection,
                uploadProgress: 0,
            });
        }
        else if (this.props.namespace != newCollection.name.split('-')[0]) {
            this.setState({
                errors: t(templateObject_16 || (templateObject_16 = __makeTemplateObject(["The collection you have selected does not match this namespace."], ["The collection you have selected does not match this namespace."]))),
                errorVariant: 'default',
                file: newCollection,
                uploadProgress: 0,
            });
        }
        else {
            this.setState({
                errors: '',
                errorVariant: 'default',
                file: newCollection,
                uploadProgress: 0,
            });
        }
    };
    ImportModal.prototype.saveFile = function () {
        return __awaiter(this, void 0, void 0, function () {
            var repo, distro_base_path, artifact;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        repo = this.state.selectedRepos[0];
                        this.setState({ uploadStatus: Status.uploading });
                        return [4 /*yield*/, repositoryBasePath(repo.name, repo.pulp_href).catch(function (error) {
                                _this.addAlert(error, 'danger');
                            })];
                    case 1:
                        distro_base_path = _a.sent();
                        if (!distro_base_path) {
                            this.setState({ uploadStatus: Status.waiting });
                            return [2 /*return*/];
                        }
                        artifact = {
                            file: this.state.file,
                            sha256: '',
                            distro_base_path: distro_base_path,
                        };
                        this.cancelToken = CollectionAPI.getCancelToken();
                        CollectionAPI.upload(artifact, function (e) {
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
                                            err.code || t(templateObject_17 || (templateObject_17 = __makeTemplateObject(["API error. Status code: ", ""], ["API error. Status code: ", ""])), err.status));
                                    }
                                    errorMessage = messages.join(', ');
                                }
                                else {
                                    errorMessage = t(templateObject_18 || (templateObject_18 = __makeTemplateObject(["API error. Status code: ", ""], ["API error. Status code: ", ""])), errors.response.status);
                                }
                            }
                            _this.setState({
                                uploadStatus: Status.waiting,
                                errors: errorMessage,
                                errorVariant: 'default',
                            });
                        })
                            .finally(function () {
                            _this.cancelToken = null;
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ImportModal.prototype.handleClose = function () {
        var _this = this;
        var msg = null;
        if (this.cancelToken && this.state.uploadStatus === Status.uploading) {
            msg = t(templateObject_19 || (templateObject_19 = __makeTemplateObject(["Collection upload canceled"], ["Collection upload canceled"])));
            this.cancelToken.cancel(msg);
        }
        this.setState({
            file: undefined,
            errors: '',
            errorVariant: 'default',
            uploadProgress: 0,
            uploadStatus: Status.waiting,
        }, function () { return _this.props.setOpen(false, msg); });
    };
    return ImportModal;
}(React.Component));
export { ImportModal };
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18, templateObject_19;
//# sourceMappingURL=import-modal.js.map