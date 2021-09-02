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
import './execution-environment-detail.scss';
import { pickBy } from 'lodash';
import { ImagesAPI } from '../../api';
import { formatPath, Paths } from '../../paths';
import { filterIsSet, ParamHelper, getHumanSize } from '../../utilities';
import { Link, withRouter } from 'react-router-dom';
import { Section } from '@redhat-cloud-services/frontend-components';
import { Toolbar, ToolbarContent, ToolbarGroup, ToolbarItem, ClipboardCopy, DropdownItem, LabelGroup, } from '@patternfly/react-core';
import { AppliedFilters, CompoundFilter, Pagination, SortTable, EmptyStateNoData, EmptyStateFilter, ShaLabel, TagLabel, StatefulDropdown, AlertList, closeAlertMixin, DateComponent, } from '../../components';
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
            alerts: [],
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
        var _a = this.state, params = _a.params, images = _a.images, manageTagsManifestDigest = _a.manageTagsManifestDigest;
        if (images.length === 0 &&
            !filterIsSet(params, ['tag', 'digest__icontains'])) {
            return (React.createElement(EmptyStateNoData, { title: 'No images yet', description: 'Images will appear once uploaded' }));
        }
        var sortTableOptions = {
            headers: [
                {
                    title: 'Tag',
                    type: 'none',
                    id: 'tag',
                },
                {
                    title: 'Published',
                    type: 'none',
                    id: 'published',
                },
                {
                    title: 'Layers',
                    type: 'none',
                    id: 'layers',
                },
                {
                    title: 'Size',
                    type: 'none',
                    id: 'size',
                },
                {
                    title: 'Digest',
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
        return (React.createElement(Section, { className: 'body' },
            React.createElement(AlertList, { alerts: this.state.alerts, closeAlert: function (i) { return _this.closeAlert(i); } }),
            React.createElement(TagManifestModal, { isOpen: !!manageTagsManifestDigest, closeModal: function () { return _this.setState({ manageTagsManifestDigest: null }); }, containerManifest: images.find(function (el) { return el.digest === manageTagsManifestDigest; }), reloadManifests: function () {
                    return _this.queryImages(_this.props.containerRepository.name);
                }, repositoryName: this.props.containerRepository.name, onAlert: function (alert) {
                    _this.setState({ alerts: _this.state.alerts.concat(alert) });
                }, containerRepository: this.props.containerRepository }),
            React.createElement("div", { className: 'toolbar' },
                React.createElement(Toolbar, null,
                    React.createElement(ToolbarContent, null,
                        React.createElement(ToolbarGroup, null,
                            React.createElement(ToolbarItem, null,
                                React.createElement(CompoundFilter, { updateParams: function (p) {
                                        return _this.updateParams(p, function () {
                                            return _this.queryImages(_this.props.match.params['container']);
                                        });
                                    }, params: params, filterConfig: [
                                        {
                                            id: 'tag',
                                            title: 'Tag',
                                        },
                                        {
                                            id: 'digest__icontains',
                                            title: 'Digest',
                                        },
                                    ] }))))),
                React.createElement(Pagination, { params: params, updateParams: function (p) {
                        return _this.updateParams(p, function () {
                            return _this.queryImages(_this.props.match.params['container']);
                        });
                    }, count: this.state.numberOfImages, isTop: true })),
            React.createElement("div", null,
                React.createElement(AppliedFilters, { updateParams: function (p) {
                        return _this.updateParams(p, function () {
                            return _this.queryImages(_this.props.match.params['container']);
                        });
                    }, params: params, ignoredParams: ['page_size', 'page', 'sort', 'id', 'tab'] })),
            images.length === 0 && filterIsSet(params, ['tag']) ? (React.createElement(EmptyStateFilter, null)) : (React.createElement("table", { "aria-label": 'Images', className: 'content-table pf-c-table' },
                React.createElement(SortTable, { options: sortTableOptions, params: params, updateParams: function (p) {
                        return _this.updateParams(p, function () {
                            return _this.queryImages(_this.props.match.params['container']);
                        });
                    } }),
                React.createElement("tbody", null, images.map(function (image, i) {
                    return _this.renderTableRow(image, i, canEditTags);
                })))),
            React.createElement("div", { style: { paddingTop: '24px', paddingBottom: '8px' } },
                React.createElement(Pagination, { params: params, updateParams: function (p) {
                        return _this.updateParams(p, function () {
                            return _this.queryImages(_this.props.match.params['container']);
                        });
                    }, count: this.state.numberOfImages }))));
    };
    ExecutionEnvironmentDetailImages.prototype.renderTableRow = function (image, index, canEditTags) {
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
        var url = window.location.href.split('://')[1].split('/ui')[0];
        var instruction = image.tags.length === 0
            ? image.digest
            : this.props.match.params['container'] + ':' + image.tags[0];
        var dropdownItems = [
            React.createElement(DropdownItem, { key: 'edit-tags', onClick: function () {
                    _this.setState({ manageTagsManifestDigest: image.digest });
                } }, "Edit tags"),
        ];
        return (React.createElement("tr", { key: index },
            React.createElement("td", null,
                React.createElement(LabelGroup, { className: 'tags-column' }, image.tags.sort().map(function (tag) { return (React.createElement(TagLink, { key: tag, tag: tag })); }))),
            React.createElement("td", null,
                React.createElement(DateComponent, { date: image.pulp_created })),
            React.createElement("td", null, image.layers),
            React.createElement("td", null, getHumanSize(image.size)),
            React.createElement("td", null,
                React.createElement(ShaLink, { digest: image.digest })),
            React.createElement("td", null,
                React.createElement(ClipboardCopy, { isReadOnly: true }, 'podman pull ' + url + '/' + instruction)),
            React.createElement("td", null, canEditTags && (React.createElement(StatefulDropdown, { items: dropdownItems })))));
    };
    ExecutionEnvironmentDetailImages.prototype.queryImages = function (name) {
        var _this = this;
        this.setState({ loading: true }, function () {
            return ImagesAPI.list(name, ParamHelper.getReduced(_this.state.params, _this.nonQueryStringParams))
                .then(function (result) {
                var images = [];
                result.data.data.forEach(function (object) {
                    var image = pickBy(object, function (value, key) {
                        return ['digest', 'tags', 'pulp_created'].includes(key);
                    });
                    image['layers'] = object.layers.length;
                    var size = 0;
                    object.layers.forEach(function (layer) { return (size += layer.size); });
                    image['size'] = size;
                    images.push(image);
                });
                _this.setState({
                    images: images,
                    numberOfImages: result.data.meta.count,
                });
            })
                .catch(function (error) { return _this.setState({ redirect: 'notFound' }); });
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
//# sourceMappingURL=execution_environment_detail_images.js.map