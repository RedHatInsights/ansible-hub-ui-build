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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { t, Trans } from '@lingui/macro';
import * as React from 'react';
import './execution-environment-detail.scss';
import { sum } from 'lodash';
import { ExecutionEnvironmentAPI } from 'src/api';
import { formatPath, Paths } from 'src/paths';
import { ParamHelper, filterIsSet, getContainersURL, getHumanSize, waitForTask, } from 'src/utilities';
import { Link, withRouter } from 'react-router-dom';
import { Button, Checkbox, DropdownItem, LabelGroup, Toolbar, ToolbarContent, ToolbarGroup, ToolbarItem, } from '@patternfly/react-core';
import { AngleDownIcon, AngleRightIcon } from '@patternfly/react-icons';
import { AppliedFilters, CompoundFilter, Pagination, SortTable, EmptyStateNoData, EmptyStateFilter, ShaLabel, TagLabel, PublishToControllerModal, StatefulDropdown, AlertList, closeAlertMixin, DateComponent, ClipboardCopy, DeleteModal, LoadingPageSpinner, } from '../../components';
import { TagManifestModal } from './tag-manifest-modal';
import { withContainerRepo } from './base';
import './execution-environment-detail_images.scss';
var ExecutionEnvironmentDetailImages = /** @class */ (function (_super) {
    __extends(ExecutionEnvironmentDetailImages, _super);
    function ExecutionEnvironmentDetailImages(props) {
        var _this = _super.call(this, props) || this;
        _this.nonQueryStringParams = [];
        var params = ParamHelper.parseParamString(props.location.search, [
            'page',
            'page_size',
        ]);
        if (!params['page_size']) {
            params['page_size'] = 10;
        }
        if (!params['page']) {
            params['page'] = 1;
        }
        _this.state = {
            loading: true,
            images: [],
            numberOfImages: 0,
            params: params,
            redirect: null,
            manageTagsManifestDigest: undefined,
            publishToController: null,
            selectedImage: undefined,
            deleteModalVisible: false,
            alerts: [],
            confirmDelete: false,
            expandedImage: null,
            isDeletionPending: false,
            inputText: '',
        };
        return _this;
    }
    ExecutionEnvironmentDetailImages.prototype.componentDidMount = function () {
        this.queryImages(this.props.containerRepository.name);
    };
    ExecutionEnvironmentDetailImages.prototype.render = function () {
        return this.renderImages();
    };
    ExecutionEnvironmentDetailImages.prototype.renderImages = function () {
        var _this = this;
        var _a = this.state, params = _a.params, images = _a.images, manageTagsManifestDigest = _a.manageTagsManifestDigest, publishToController = _a.publishToController, selectedImage = _a.selectedImage, deleteModalVisible = _a.deleteModalVisible, confirmDelete = _a.confirmDelete, loading = _a.loading, isDeletionPending = _a.isDeletionPending;
        if (images.length === 0 &&
            !filterIsSet(params, ['tag', 'digest__icontains'])) {
            return (React.createElement(EmptyStateNoData, { title: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["No images yet"], ["No images yet"]))), description: t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Images will appear once uploaded"], ["Images will appear once uploaded"]))) }));
        }
        if (loading) {
            return React.createElement(LoadingPageSpinner, null);
        }
        var sortTableOptions = {
            headers: [
                {
                    title: '',
                    type: 'none',
                    id: 'expand',
                    className: 'pf-c-table__toggle',
                },
                {
                    title: t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Tag"], ["Tag"]))),
                    type: 'none',
                    id: 'tag',
                },
                {
                    title: t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["Published"], ["Published"]))),
                    type: 'none',
                    id: 'published',
                },
                {
                    title: t(templateObject_5 || (templateObject_5 = __makeTemplateObject(["Layers"], ["Layers"]))),
                    type: 'none',
                    id: 'layers',
                },
                {
                    title: t(templateObject_6 || (templateObject_6 = __makeTemplateObject(["Size"], ["Size"]))),
                    type: 'none',
                    id: 'size',
                },
                {
                    title: t(templateObject_7 || (templateObject_7 = __makeTemplateObject(["Digest"], ["Digest"]))),
                    type: 'none',
                    id: 'digest',
                },
                {
                    title: '',
                    type: 'none',
                    id: 'instructions',
                },
                {
                    title: '',
                    type: 'none',
                    id: 'controls',
                },
            ],
        };
        var canEditTags = this.props.containerRepository.namespace.my_permissions.includes('container.namespace_modify_content_containerpushrepository');
        var digest = (selectedImage || {}).digest;
        return (React.createElement("section", { className: 'body' },
            React.createElement(AlertList, { alerts: this.state.alerts, closeAlert: function (i) { return _this.closeAlert(i); } }),
            deleteModalVisible && (React.createElement(DeleteModal, { spinner: isDeletionPending, title: t(templateObject_8 || (templateObject_8 = __makeTemplateObject(["Permanently delete image?"], ["Permanently delete image?"]))), cancelAction: function () {
                    return _this.setState({
                        deleteModalVisible: false,
                        selectedImage: null,
                        confirmDelete: false,
                    });
                }, deleteAction: function () { return _this.deleteImage(); }, isDisabled: !confirmDelete || isDeletionPending },
                React.createElement(Trans, null,
                    "Deleting ",
                    React.createElement("b", null, digest),
                    " and its data will be lost."),
                React.createElement(Checkbox, { isChecked: confirmDelete, onChange: function (value) { return _this.setState({ confirmDelete: value }); }, label: t(templateObject_9 || (templateObject_9 = __makeTemplateObject(["I understand that this action cannot be undone."], ["I understand that this action cannot be undone."]))), id: 'delete_confirm' }))),
            React.createElement(TagManifestModal, { isOpen: !!manageTagsManifestDigest, closeModal: function () { return _this.setState({ manageTagsManifestDigest: null }); }, containerManifest: images.find(function (el) { return el.digest === manageTagsManifestDigest; }), reloadManifests: function () {
                    return _this.queryImages(_this.props.containerRepository.name);
                }, repositoryName: this.props.containerRepository.name, onAlert: function (alert) {
                    _this.setState({ alerts: _this.state.alerts.concat(alert) });
                }, containerRepository: this.props.containerRepository }),
            React.createElement(PublishToControllerModal, { digest: publishToController === null || publishToController === void 0 ? void 0 : publishToController.digest, image: publishToController === null || publishToController === void 0 ? void 0 : publishToController.image, isOpen: !!publishToController, onClose: function () { return _this.setState({ publishToController: null }); }, tag: publishToController === null || publishToController === void 0 ? void 0 : publishToController.tag }),
            React.createElement("div", { className: 'detail-images-toolbar toolbar' },
                React.createElement(Toolbar, null,
                    React.createElement(ToolbarContent, null,
                        React.createElement(ToolbarGroup, null,
                            React.createElement(ToolbarItem, null,
                                React.createElement(CompoundFilter, { inputText: this.state.inputText, onChange: function (text) { return _this.setState({ inputText: text }); }, updateParams: function (p) {
                                        return _this.updateParams(p, function () {
                                            return _this.queryImages(_this.props.match.params['container']);
                                        });
                                    }, params: params, filterConfig: [
                                        {
                                            id: 'tag',
                                            title: t(templateObject_10 || (templateObject_10 = __makeTemplateObject(["Tag"], ["Tag"]))),
                                        },
                                        {
                                            id: 'digest__icontains',
                                            title: t(templateObject_11 || (templateObject_11 = __makeTemplateObject(["Digest"], ["Digest"]))),
                                        },
                                    ] }))))),
                React.createElement(Pagination, { params: params, updateParams: function (p) {
                        return _this.updateParams(p, function () {
                            return _this.queryImages(_this.props.match.params['container']);
                        });
                    }, count: this.state.numberOfImages, isTop: true })),
            React.createElement("div", null,
                React.createElement(AppliedFilters, { updateParams: function (p) {
                        _this.updateParams(p, function () {
                            return _this.queryImages(_this.props.match.params['container']);
                        });
                        _this.setState({ inputText: '' });
                    }, params: params, ignoredParams: ['page_size', 'page', 'sort', 'id', 'tab'] })),
            images.length === 0 && filterIsSet(params, ['tag']) ? (React.createElement(EmptyStateFilter, null)) : (React.createElement("table", { "aria-label": t(templateObject_12 || (templateObject_12 = __makeTemplateObject(["Images"], ["Images"]))), className: 'content-table pf-c-table' },
                React.createElement(SortTable, { options: sortTableOptions, params: params, updateParams: function (p) {
                        return _this.updateParams(p, function () {
                            return _this.queryImages(_this.props.match.params['container']);
                        });
                    } }),
                React.createElement("tbody", null, images.map(function (image, i) {
                    return _this.renderTableRow(image, i, canEditTags, sortTableOptions.headers.length);
                })))),
            React.createElement(Pagination, { params: params, updateParams: function (p) {
                    return _this.updateParams(p, function () {
                        return _this.queryImages(_this.props.match.params['container']);
                    });
                }, count: this.state.numberOfImages })));
    };
    ExecutionEnvironmentDetailImages.prototype.renderTableRow = function (image, index, canEditTags, cols) {
        var _this = this;
        var manifestLink = function (digestOrTag) {
            return formatPath(Paths.executionEnvironmentManifest, {
                container: _this.props.match.params['container'],
                digest: digestOrTag,
            });
        };
        var ShaLink = function (_a) {
            var digest = _a.digest;
            return (React.createElement(Link, { to: manifestLink(digest) },
                React.createElement(ShaLabel, { digest: digest })));
        };
        var TagLink = function (_a) {
            var tag = _a.tag;
            return (React.createElement(Link, { to: manifestLink(tag) },
                React.createElement(TagLabel, { tag: tag })));
        };
        var url = getContainersURL();
        var instruction = image.tags.length === 0
            ? image.digest
            : this.props.match.params['container'] + ':' + image.tags[0];
        var isRemote = !!this.props.containerRepository.pulp.repository.remote;
        var isManifestList = image.isManifestList;
        var expandedImage = this.state.expandedImage;
        var dropdownItems = [
            canEditTags && !isRemote && (React.createElement(DropdownItem, { key: 'edit-tags', onClick: function () {
                    _this.setState({ manageTagsManifestDigest: image.digest });
                } }, t(templateObject_13 || (templateObject_13 = __makeTemplateObject(["Manage tags"], ["Manage tags"]))))),
            React.createElement(DropdownItem, { key: 'publish-to-controller', onClick: function () {
                    _this.setState({
                        publishToController: {
                            digest: image.digest,
                            image: _this.props.containerRepository.name,
                            tag: image.tags[0],
                        },
                    });
                } }, t(templateObject_14 || (templateObject_14 = __makeTemplateObject(["Use in Controller"], ["Use in Controller"])))),
            React.createElement(DropdownItem, { key: 'delete-image', onClick: function () {
                    _this.setState({ deleteModalVisible: true, selectedImage: image });
                } }, t(templateObject_15 || (templateObject_15 = __makeTemplateObject(["Delete"], ["Delete"])))),
        ].filter(function (truthy) { return truthy; });
        return (React.createElement(React.Fragment, { key: index },
            React.createElement("tr", null,
                React.createElement("td", { className: 'pf-c-table__toggle' }, isManifestList ? (React.createElement(Button, { variant: 'plain', onClick: function () {
                        return _this.setState({
                            expandedImage: expandedImage === image ? null : image,
                        });
                    } }, expandedImage === image ? (React.createElement(AngleDownIcon, null)) : (React.createElement(AngleRightIcon, null)))) : null),
                React.createElement("td", null,
                    React.createElement(LabelGroup, { className: 'tags-column' }, image.tags
                        .sort()
                        .map(function (tag) {
                        return isManifestList ? (React.createElement(TagLabel, { key: tag, tag: tag })) : (React.createElement(TagLink, { key: tag, tag: tag }));
                    }))),
                React.createElement("td", null,
                    React.createElement(DateComponent, { date: image.pulp_created })),
                React.createElement("td", null, isManifestList ? '---' : image.layers),
                React.createElement("td", null, isManifestList ? '---' : getHumanSize(image.size)),
                React.createElement("td", null, isManifestList ? (React.createElement(ShaLabel, { digest: image.digest })) : (React.createElement(ShaLink, { digest: image.digest }))),
                React.createElement("td", null,
                    React.createElement(ClipboardCopy, { isReadOnly: true }, 'podman pull ' + url + '/' + instruction)),
                React.createElement("td", { style: { paddingRight: '0px', textAlign: 'right' } }, dropdownItems.length && (React.createElement(StatefulDropdown, { items: dropdownItems })))),
            expandedImage === image && (React.createElement("tr", null,
                React.createElement("td", { colSpan: cols }, this.renderManifestList(image, ShaLink))))));
    };
    ExecutionEnvironmentDetailImages.prototype.renderManifestList = function (_a, ShaLink) {
        var image_manifests = _a.image_manifests;
        return (React.createElement("table", { className: 'content-table pf-c-table' },
            React.createElement(SortTable, { options: {
                    headers: [
                        {
                            title: t(templateObject_16 || (templateObject_16 = __makeTemplateObject(["Digest"], ["Digest"]))),
                            type: 'none',
                            id: 'digest',
                        },
                        {
                            title: t(templateObject_17 || (templateObject_17 = __makeTemplateObject(["OS / Arch"], ["OS / Arch"]))),
                            type: 'none',
                            id: 'os_arch',
                        },
                    ],
                }, params: {}, updateParams: function (p) { return null; } }),
            React.createElement("tbody", null, image_manifests.map(function (_a) {
                var digest = _a.digest, os = _a.os, os_version = _a.os_version, os_features = _a.os_features, architecture = _a.architecture, variant = _a.variant, features = _a.features;
                return (React.createElement("tr", null,
                    React.createElement("td", null,
                        React.createElement(ShaLink, { digest: digest })),
                    React.createElement("td", null, [
                        os,
                        os_version,
                        os_features,
                        '/',
                        architecture,
                        variant,
                        features,
                    ]
                        .filter(Boolean)
                        .join(' '))));
            }))));
    };
    ExecutionEnvironmentDetailImages.prototype.queryImages = function (name) {
        var _this = this;
        this.setState({ loading: true }, function () {
            return ExecutionEnvironmentAPI.images(name, __assign(__assign({}, ParamHelper.getReduced(_this.state.params, _this.nonQueryStringParams)), { exclude_child_manifests: true }))
                .then(function (_a) {
                var _b = _a.data, data = _b.data, meta = _b.meta;
                var images = data.map(function (_a) {
                    var digest = _a.digest, image_manifests = _a.image_manifests, layers = _a.layers, media_type = _a.media_type, pulp_created = _a.pulp_created, tags = _a.tags;
                    return ({
                        digest: digest,
                        image_manifests: image_manifests,
                        isManifestList: !!media_type.match('manifest.list'),
                        layers: layers.length,
                        pulp_created: pulp_created,
                        size: sum(layers.map(function (l) { return l.size || 0; })),
                        tags: tags,
                    });
                });
                _this.setState({
                    images: images,
                    numberOfImages: meta.count,
                    loading: false,
                });
            })
                .catch(function (error) { return _this.setState({ redirect: 'notFound' }); });
        });
    };
    ExecutionEnvironmentDetailImages.prototype.deleteImage = function () {
        var _this = this;
        var selectedImage = this.state.selectedImage;
        var digest = selectedImage.digest;
        this.setState({ isDeletionPending: true }, function () {
            return ExecutionEnvironmentAPI.deleteImage(_this.props.match.params['container'], selectedImage.digest)
                .then(function (result) {
                var taskId = result.data.task.split('tasks/')[1].replace('/', '');
                _this.setState({
                    selectedImage: null,
                });
                waitForTask(taskId).then(function () {
                    _this.setState({
                        isDeletionPending: false,
                        confirmDelete: false,
                        deleteModalVisible: false,
                        alerts: _this.state.alerts.concat([
                            {
                                variant: 'success',
                                title: t(templateObject_18 || (templateObject_18 = __makeTemplateObject(["Success: ", " was deleted"], ["Success: ", " was deleted"])), digest),
                            },
                        ]),
                    });
                    _this.queryImages(_this.props.match.params['container']);
                });
            })
                .catch(function () {
                _this.setState({
                    deleteModalVisible: false,
                    selectedImage: null,
                    confirmDelete: false,
                    isDeletionPending: false,
                    alerts: _this.state.alerts.concat([
                        { variant: 'danger', title: t(templateObject_19 || (templateObject_19 = __makeTemplateObject(["Error: delete failed"], ["Error: delete failed"]))) },
                    ]),
                });
            });
        });
    };
    Object.defineProperty(ExecutionEnvironmentDetailImages.prototype, "updateParams", {
        get: function () {
            return ParamHelper.updateParamsMixin(this.nonQueryStringParams);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ExecutionEnvironmentDetailImages.prototype, "closeAlert", {
        get: function () {
            return closeAlertMixin('alerts');
        },
        enumerable: false,
        configurable: true
    });
    return ExecutionEnvironmentDetailImages;
}(React.Component));
export default withRouter(withContainerRepo(ExecutionEnvironmentDetailImages));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18, templateObject_19;
//# sourceMappingURL=execution_environment_detail_images.js.map