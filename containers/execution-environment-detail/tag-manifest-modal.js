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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { t, Trans } from '@lingui/macro';
import * as React from 'react';
import { Button, Modal, Spinner, Label, LabelGroup, Form, FormGroup, TextInput, InputGroup, Alert, AlertActionLink, } from '@patternfly/react-core';
import { TagIcon } from '@patternfly/react-icons';
import { ExecutionEnvironmentAPI, ContainerTagAPI, TaskAPI, PulpStatus, } from 'src/api';
import { parsePulpIDFromURL } from 'src/utilities';
var VALID_TAG_REGEX = /^[A-Za-z0-9][A-Za-z0-9._-]*$/;
var TagManifestModal = /** @class */ (function (_super) {
    __extends(TagManifestModal, _super);
    function TagManifestModal(props) {
        var _this = _super.call(this, props) || this;
        _this.handleFailedTag = function (tag, error, operation) {
            var msg = undefined;
            if (error.response.data['tag']) {
                msg = error.response.data.tag.join(' ');
            }
            if (error.response.data['detail']) {
                msg = error.response.data['detail'];
            }
            _this.props.onAlert({
                variant: 'danger',
                title: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Failed to ", " tag \"", "\"."], ["Failed to ", " tag \"", "\"."])), operation, tag),
                description: msg,
            });
        };
        _this.verifyAndAddTag = function () {
            // copy tag to prevent it from changing in the form during verification
            var tag = "".concat(_this.state.tagInForm);
            _this.setState({ verifyingTag: true }, function () { return _this.verifyTag(tag); });
        };
        _this.state = {
            isSaving: false,
            tagsToAdd: [],
            tagsToRemove: [],
            tagInForm: '',
            verifyingTag: false,
            tagToVerify: '',
            tagInFormError: undefined,
            pendingTasks: 0,
        };
        return _this;
    }
    TagManifestModal.prototype.componentDidUpdate = function (prevProps) {
        // if the containtainer manifest changes, reset the state
        if (this.props.containerManifest !== prevProps.containerManifest) {
            // Don't reset pending tasks and isSaving. This will prevent the user from
            // editing another image while one is already being updated
            this.setState({
                tagsToAdd: [],
                tagsToRemove: [],
                tagInForm: '',
                verifyingTag: false,
                tagToVerify: '',
                tagInFormError: undefined,
            });
        }
    };
    TagManifestModal.prototype.render = function () {
        var _this = this;
        var _a = this.props, closeModal = _a.closeModal, isOpen = _a.isOpen, containerManifest = _a.containerManifest;
        var _b = this.state, tagInForm = _b.tagInForm, isSaving = _b.isSaving, tagToVerify = _b.tagToVerify, verifyingTag = _b.verifyingTag, tagsToAdd = _b.tagsToAdd, tagsToRemove = _b.tagsToRemove, pendingTasks = _b.pendingTasks, tagInFormError = _b.tagInFormError;
        if (!containerManifest) {
            return null;
        }
        return (React.createElement(Modal, { actions: [
                React.createElement(Button, { key: 'save', onClick: function () { return _this.saveTags(); }, isDisabled: isSaving || (tagsToAdd.length <= 0 && tagsToRemove.length <= 0) }, t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Save"], ["Save"]))),
                    isSaving && React.createElement(Spinner, { size: 'sm' })),
                React.createElement(Button, { isDisabled: isSaving, key: 'cancel', onClick: function () { return closeModal(); }, variant: 'link' }, t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Cancel"], ["Cancel"])))),
            ], isOpen: isOpen, onClose: function () { return closeModal(); }, title: t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["Manage tags"], ["Manage tags"]))), variant: 'small' },
            React.createElement(Form, { onSubmit: function (e) { return e.preventDefault(); } },
                React.createElement(FormGroup, { validated: !!tagInFormError ? 'error' : 'default', helperTextInvalid: tagInFormError, fieldId: 'add-new-tag', label: t(templateObject_5 || (templateObject_5 = __makeTemplateObject(["Add new tag"], ["Add new tag"]))) },
                    React.createElement(InputGroup, null,
                        React.createElement(TextInput, { validated: !!tagInFormError ? 'error' : 'default', type: 'text', id: 'add-new-tag', value: tagInForm, onChange: function (val) { return _this.setState({ tagInForm: val }); }, isDisabled: !!tagToVerify || verifyingTag || isSaving, onKeyUp: function (e) {
                                // l10n: don't translate
                                if (e.key === 'Enter') {
                                    _this.verifyAndAddTag();
                                }
                            } }),
                        React.createElement(Button, { "aria-label": t(templateObject_6 || (templateObject_6 = __makeTemplateObject(["Add new tag to image"], ["Add new tag to image"]))), variant: 'secondary', onClick: this.verifyAndAddTag, isDisabled: !!tagToVerify || verifyingTag || isSaving }, t(templateObject_7 || (templateObject_7 = __makeTemplateObject(["Add"], ["Add"]))),
                            " ",
                            verifyingTag && React.createElement(Spinner, { size: 'sm' })))),
                tagToVerify && (React.createElement(Alert, { variant: 'warning', isInline: true, title: t(templateObject_8 || (templateObject_8 = __makeTemplateObject(["This tag already exists on another image. Do you want to move it to this image?"], ["This tag already exists on another image. Do you want to move it to this image?"]))), actionLinks: React.createElement(React.Fragment, null,
                        React.createElement(AlertActionLink, { onClick: function () {
                                return _this.setState({ tagToVerify: '', tagInForm: '' }, function () {
                                    return _this.addTag(tagToVerify);
                                });
                            } }, t(templateObject_9 || (templateObject_9 = __makeTemplateObject(["Yes"], ["Yes"])))),
                        React.createElement(AlertActionLink, { onClick: function () { return _this.setState({ tagToVerify: '' }); } }, t(templateObject_10 || (templateObject_10 = __makeTemplateObject(["No"], ["No"]))))) })),
                React.createElement(FormGroup, { fieldId: 'remove-tag', label: t(templateObject_11 || (templateObject_11 = __makeTemplateObject(["Current tags"], ["Current tags"]))) },
                    React.createElement(LabelGroup, { id: 'remove-tag', defaultIsOpen: true }, this.getCurrentTags().map(function (tag) { return (React.createElement(Label, { disabled: isSaving, icon: React.createElement(TagIcon, null), onClose: isSaving ? undefined : function () { return _this.removeTag(tag); }, key: tag }, tag)); }))),
                pendingTasks > 0 && (React.createElement(Alert, { isInline: true, variant: 'info', title: React.createElement(Trans, null,
                        "Waiting for ",
                        pendingTasks,
                        " task(s) to finish.") },
                    React.createElement(Trans, null, "It's safe to close this window. These tasks will finish in the background."))))));
    };
    TagManifestModal.prototype.validateTagName = function (tag) {
        return tag.match(VALID_TAG_REGEX);
    };
    TagManifestModal.prototype.saveTags = function () {
        var _this = this;
        var containerManifest = this.props.containerManifest;
        var promises = [];
        this.setState({ isSaving: true }, function () {
            var repository = _this.props.containerRepository;
            var _loop_1 = function (tag) {
                promises.push({
                    tag: tag,
                    promise: ContainerTagAPI.untag(repository.pulp.repository.pulp_id, tag, containerManifest.digest).catch(function (e) { return _this.handleFailedTag(tag, e, 'remove'); }),
                });
            };
            for (var _i = 0, _a = _this.state.tagsToRemove; _i < _a.length; _i++) {
                var tag = _a[_i];
                _loop_1(tag);
            }
            var _loop_2 = function (tag) {
                promises.push({
                    tag: tag,
                    promise: ContainerTagAPI.tag(repository.pulp.repository.pulp_id, tag, containerManifest.digest).catch(function (e) { return _this.handleFailedTag(tag, e, 'add'); }),
                });
            };
            for (var _b = 0, _c = _this.state.tagsToAdd; _b < _c.length; _b++) {
                var tag = _c[_b];
                _loop_2(tag);
            }
            if (promises.length > 0) {
                Promise.all(promises.map(function (p) { return p.promise; })).then(function (results) {
                    var tasks = [];
                    for (var r in results) {
                        if (results[r]) {
                            tasks.push({
                                tag: promises[r].tag,
                                task: parsePulpIDFromURL(results[r].data.task),
                            });
                        }
                    }
                    _this.waitForTasks(tasks);
                });
            }
            else {
                _this.setState({ isSaving: false });
            }
        });
    };
    // FIXME merge with waitForTask from utilities
    TagManifestModal.prototype.waitForTasks = function (taskUrls) {
        var _this = this;
        var pending = new Set(taskUrls.map(function (i) { return i.task; }));
        var queryTasks = function () {
            var promises = [];
            for (var _i = 0, _a = Array.from(pending); _i < _a.length; _i++) {
                var task = _a[_i];
                promises.push(TaskAPI.get(task));
            }
            Promise.all(promises).then(function (results) { return __awaiter(_this, void 0, void 0, function () {
                var _loop_3, this_1, _i, results_1, r;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _loop_3 = function (r) {
                                var status_1 = r.data.state;
                                if (status_1 === PulpStatus.completed ||
                                    status_1 === PulpStatus.skipped ||
                                    status_1 === PulpStatus.failed ||
                                    status_1 === PulpStatus.canceled) {
                                    pending.delete(r.data.pulp_id);
                                    if (status_1 === PulpStatus.skipped ||
                                        status_1 === PulpStatus.failed ||
                                        status_1 === PulpStatus.canceled) {
                                        var tag = taskUrls.find(function (e) { return e.task === r.data.pulp_id; });
                                        this_1.props.onAlert({
                                            variant: 'danger',
                                            title: t(templateObject_12 || (templateObject_12 = __makeTemplateObject(["Task to change tag \"", "\" could not be completed."], ["Task to change tag \"", "\" could not be completed."])), tag.tag),
                                            description: t(templateObject_13 || (templateObject_13 = __makeTemplateObject(["Reason: task ", ""], ["Reason: task ", ""])), r.data.state),
                                        });
                                    }
                                }
                            };
                            this_1 = this;
                            for (_i = 0, results_1 = results; _i < results_1.length; _i++) {
                                r = results_1[_i];
                                _loop_3(r);
                            }
                            if (!(pending.size > 0)) return [3 /*break*/, 2];
                            // wait 5 seconds and then refresn
                            this.setState({ pendingTasks: pending.size });
                            return [4 /*yield*/, new Promise(function (r) { return setTimeout(r, 5000); })];
                        case 1:
                            _a.sent();
                            queryTasks();
                            return [3 /*break*/, 3];
                        case 2:
                            this.setState({ isSaving: false, pendingTasks: 0 }, function () {
                                return _this.props.reloadManifests();
                            });
                            _a.label = 3;
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
        };
        this.setState({ pendingTasks: pending.size }, queryTasks);
    };
    TagManifestModal.prototype.verifyTag = function (tag) {
        var _this = this;
        if (!this.validateTagName(tag)) {
            this.setState({
                verifyingTag: false,
                tagInFormError: t(templateObject_14 || (templateObject_14 = __makeTemplateObject(["A tag may contain lowercase and uppercase ASCII alphabetic characters, digits, underscores, periods, and dashes. A tag must not start with a period, underscore, or a dash."], ["A tag may contain lowercase and uppercase ASCII alphabetic characters, digits, underscores, periods, and dashes. A tag must not start with a period, underscore, or a dash."]))),
            });
        }
        else if (this.getCurrentTags().includes(tag)) {
            this.setState({
                verifyingTag: false,
                tagInFormError: t(templateObject_15 || (templateObject_15 = __makeTemplateObject(["This tag is already selected for this image. You cannot add it twice."], ["This tag is already selected for this image. You cannot add it twice."]))),
            });
        }
        else {
            this.setState({ tagInFormError: undefined }, function () {
                ExecutionEnvironmentAPI.image(_this.props.repositoryName, tag)
                    .then(function () {
                    _this.setState({ tagToVerify: tag, verifyingTag: false });
                })
                    .catch(function () {
                    _this.setState({ tagInForm: '', verifyingTag: false }, function () {
                        return _this.addTag(tag);
                    });
                });
            });
        }
    };
    TagManifestModal.prototype.addTag = function (tag) {
        var toAdd = new Set(this.state.tagsToAdd);
        var toRemove = new Set(this.state.tagsToRemove);
        toAdd.add(tag);
        toRemove.delete(tag);
        this.setState({
            tagsToAdd: Array.from(toAdd),
            tagsToRemove: Array.from(toRemove),
        });
    };
    TagManifestModal.prototype.removeTag = function (tag) {
        var toAdd = new Set(this.state.tagsToAdd);
        var toRemove = new Set(this.state.tagsToRemove);
        toAdd.delete(tag);
        toRemove.add(tag);
        this.setState({
            tagsToAdd: Array.from(toAdd),
            tagsToRemove: Array.from(toRemove),
        });
    };
    TagManifestModal.prototype.getCurrentTags = function () {
        var tags = new Set(__spreadArray(__spreadArray([], this.props.containerManifest.tags, true), this.state.tagsToAdd, true));
        for (var _i = 0, _a = this.state.tagsToRemove; _i < _a.length; _i++) {
            var tag = _a[_i];
            tags.delete(tag);
        }
        return Array.from(tags.values());
    };
    return TagManifestModal;
}(React.Component));
export { TagManifestModal };
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15;
//# sourceMappingURL=tag-manifest-modal.js.map