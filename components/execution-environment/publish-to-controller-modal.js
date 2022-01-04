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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import * as React from 'react';
import { t, Trans } from '@lingui/macro';
import { Button, ClipboardCopyButton, DescriptionList, DescriptionListDescription, DescriptionListGroup, DescriptionListTerm, Flex, FlexItem, List, ListItem, Modal, } from '@patternfly/react-core';
import { ExternalLinkAltIcon, TagIcon } from '@patternfly/react-icons';
import { ControllerAPI, ExecutionEnvironmentAPI } from 'src/api';
import { APISearchTypeAhead, AlertList, AppliedFilters, CompoundFilter, EmptyStateFilter, EmptyStateNoData, LoadingPageSpinner, Pagination, ShaLabel, closeAlertMixin, } from 'src/components';
import { filterIsSet, getContainersURL } from 'src/utilities';
var initialState = {
    alerts: [],
    controllers: null,
    controllerCount: 0,
    controllerParams: { page: 1, page_size: 10 },
    digest: null,
    digestByTag: {},
    loading: true,
    tag: null,
    tagResults: [],
    tagSelection: [],
    tags: [],
    inputText: '',
};
var PublishToControllerModal = /** @class */ (function (_super) {
    __extends(PublishToControllerModal, _super);
    function PublishToControllerModal(props) {
        var _this = _super.call(this, props) || this;
        _this.state = initialState;
        return _this;
    }
    PublishToControllerModal.prototype.componentDidUpdate = function (prevProps) {
        var _a = this.props, image = _a.image, isOpen = _a.isOpen;
        if (isOpen !== prevProps.isOpen) {
            if (isOpen) {
                // load on open
                this.fetchData(image);
            }
            else {
                // reset on close
                this.setState(initialState);
            }
        }
    };
    PublishToControllerModal.prototype.fetchControllers = function () {
        var _this = this;
        var params = this.state.controllerParams;
        return ControllerAPI.list(params)
            .then(function (_a) {
            var data = _a.data;
            var controllers = data.data.map(function (c) { return c.host; });
            var controllerCount = data.meta.count;
            _this.setState({ controllers: controllers, controllerCount: controllerCount });
            return controllers;
        })
            .catch(function (e) {
            return _this.setState({
                alerts: __spreadArray(__spreadArray([], _this.state.alerts, true), [
                    {
                        variant: 'danger',
                        title: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Error loading Controllers"], ["Error loading Controllers"]))),
                        description: e.message,
                    },
                ], false),
            });
        });
    };
    PublishToControllerModal.prototype.fetchTags = function (image, name) {
        var _this = this;
        // filter tags by digest when provided from Images list
        var digest = this.props.digest;
        return ExecutionEnvironmentAPI.tags(image, __assign(__assign({ sort: '-pulp_created' }, (digest ? { tagged_manifest__digest: digest } : {})), (name ? { name__icontains: name } : {})))
            .then(function (_a) {
            var data = _a.data;
            var tags = data.data.map(function (_a) {
                var tag = _a.name, digest = _a.tagged_manifest.digest;
                return ({ digest: digest, tag: tag });
            });
            var digestByTag = {};
            tags.forEach(function (_a) {
                var digest = _a.digest, tag = _a.tag;
                return (digestByTag[tag] = digest);
            });
            var tagResults = tags.map(function (_a) {
                var tag = _a.tag;
                return ({ id: tag, name: tag });
            });
            _this.setState({
                digestByTag: digestByTag,
                tagResults: tagResults,
                tags: tags,
            });
            return tags;
        })
            .catch(function (e) {
            return _this.setState({
                alerts: __spreadArray(__spreadArray([], _this.state.alerts, true), [
                    {
                        variant: 'danger',
                        title: t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Error loading tags"], ["Error loading tags"]))),
                        description: e.message,
                    },
                ], false),
            });
        });
    };
    PublishToControllerModal.prototype.fetchData = function (image) {
        var _this = this;
        var controllers = this.fetchControllers();
        var tags = this.fetchTags(image).then(function () {
            var _a;
            // preselect tag if present
            var _b = _this.props, digest = _b.digest, tag = _b.tag;
            tag || (tag = (_a = _this.state.tags[0]) === null || _a === void 0 ? void 0 : _a.tag); // default to first tag unless in props (tags already filtered by digest if in props)
            digest || (digest = _this.state.digestByTag[tag]); // set digest by tag unless in props
            _this.setState({
                digest: digest,
                tag: tag,
                tagSelection: tag ? [{ id: tag, name: tag }] : [],
            });
        });
        Promise.all([controllers, tags]).then(function () {
            return _this.setState({ loading: false });
        });
    };
    PublishToControllerModal.prototype.renderControllers = function () {
        var _a = this.props, image = _a.image, isOpen = _a.isOpen;
        var _b = this.state, controllers = _b.controllers, digest = _b.digest, tag = _b.tag;
        var url = getContainersURL();
        var unsafeLinksSupported = !Object.keys(window).includes('chrome');
        if (!isOpen || !controllers) {
            return null;
        }
        if (controllers.length === 0) {
            // EmptyStateNoData already handled in render()
            return React.createElement(EmptyStateFilter, null);
        }
        if (!digest && !tag) {
            return t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["No tag or digest selected."], ["No tag or digest selected."])));
        }
        return (React.createElement(List, { isPlain: true, isBordered: true }, controllers.map(function (host) {
            var imageUrl = "".concat(url, "/").concat(tag ? "".concat(image, ":").concat(tag) : digest);
            var href = "".concat(host, "/#/execution_environments/add?image=").concat(encodeURIComponent(imageUrl));
            return (React.createElement(ListItem, { style: { paddingTop: '8px' }, key: host },
                React.createElement("a", { href: href, target: '_blank', rel: 'noreferrer' }, host),
                ' ',
                unsafeLinksSupported && (React.createElement("small", null,
                    React.createElement(ExternalLinkAltIcon, null))),
                !unsafeLinksSupported && (React.createElement(ClipboardCopyButton, { variant: 'plain', id: href, textId: t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["Copy to clipboard"], ["Copy to clipboard"]))), onClick: function () { return navigator.clipboard.writeText(href); } }, t(templateObject_5 || (templateObject_5 = __makeTemplateObject(["Copy to clipboard"], ["Copy to clipboard"])))))));
        })));
    };
    PublishToControllerModal.prototype.render = function () {
        var _this = this;
        var _a = this.props, image = _a.image, isOpen = _a.isOpen, onClose = _a.onClose;
        var _b = this.state, alerts = _b.alerts, controllers = _b.controllers, controllerCount = _b.controllerCount, controllerParams = _b.controllerParams, loading = _b.loading, digest = _b.digest, digestByTag = _b.digestByTag, tagResults = _b.tagResults, tagSelection = _b.tagSelection;
        var docsLink = 'https://access.redhat.com/documentation/en-us/red_hat_ansible_automation_platform/2.1';
        var noData = (controllers === null || controllers === void 0 ? void 0 : controllers.length) === 0 &&
            !filterIsSet(controllerParams, ['host__icontains']);
        var notListedMessage = (React.createElement(React.Fragment, null, t(templateObject_6 || (templateObject_6 = __makeTemplateObject(["If the Controller is not listed in the table, check settings.py."], ["If the Controller is not listed in the table, check settings.py."]))),
            ' ',
            docsLink && (React.createElement(React.Fragment, null,
                React.createElement("a", { href: docsLink, target: '_blank', rel: 'noreferrer' }, t(templateObject_7 || (templateObject_7 = __makeTemplateObject(["Learn more"], ["Learn more"])))),
                ' ',
                React.createElement(ExternalLinkAltIcon, null)))));
        var Spacer = function () { return React.createElement("div", { style: { paddingTop: '24px' } }); };
        var unsafeLinksSupported = !Object.keys(window).includes('chrome');
        return (React.createElement(Modal, { variant: 'large', title: t(templateObject_8 || (templateObject_8 = __makeTemplateObject(["Use in Controller"], ["Use in Controller"]))), isOpen: isOpen, onClose: onClose, actions: [
                React.createElement(Button, { key: 'close', variant: 'primary', onClick: onClose }, t(templateObject_9 || (templateObject_9 = __makeTemplateObject(["Close"], ["Close"])))),
            ] },
            React.createElement(AlertList, { alerts: alerts, closeAlert: function (i) { return _this.closeAlert(i); } }),
            loading && (React.createElement("div", { style: { padding: '16px' } },
                React.createElement(LoadingPageSpinner, null))),
            noData && !loading ? (React.createElement(EmptyStateNoData, { title: t(templateObject_10 || (templateObject_10 = __makeTemplateObject(["No Controllers available"], ["No Controllers available"]))), description: notListedMessage })) : null,
            isOpen && !loading && !noData && controllers && (React.createElement(React.Fragment, null,
                React.createElement(DescriptionList, { isHorizontal: true },
                    React.createElement(DescriptionListGroup, null,
                        React.createElement(DescriptionListTerm, null, t(templateObject_11 || (templateObject_11 = __makeTemplateObject(["Execution Environment"], ["Execution Environment"])))),
                        React.createElement(DescriptionListDescription, null, image)),
                    React.createElement(DescriptionListGroup, null,
                        React.createElement(DescriptionListTerm, null, t(templateObject_12 || (templateObject_12 = __makeTemplateObject(["Tag"], ["Tag"])))),
                        React.createElement(DescriptionListDescription, null,
                            React.createElement(Flex, null,
                                React.createElement(FlexItem, null,
                                    React.createElement(APISearchTypeAhead, { loadResults: function (name) { return _this.fetchTags(image, name); }, onClear: function () {
                                            return _this.setState({ tag: null, tagSelection: [] });
                                        }, onSelect: function (event, value) {
                                            var digest = digestByTag[value.toString()];
                                            _this.setState({
                                                tag: digest && value.toString(),
                                                tagSelection: [{ id: value, name: value }],
                                                digest: digest,
                                            });
                                        }, placeholderText: t(templateObject_13 || (templateObject_13 = __makeTemplateObject(["Select a tag"], ["Select a tag"]))), results: tagResults, selections: tagSelection, toggleIcon: React.createElement(TagIcon, null) })),
                                React.createElement(FlexItem, null)))),
                    digest && (React.createElement(React.Fragment, null,
                        React.createElement(DescriptionListGroup, null,
                            React.createElement(DescriptionListTerm, null, t(templateObject_14 || (templateObject_14 = __makeTemplateObject(["Digest"], ["Digest"])))),
                            React.createElement(DescriptionListDescription, null,
                                React.createElement(ShaLabel, { grey: true, long: true, digest: digest })))))),
                React.createElement(Spacer, null),
                React.createElement(Trans, null, "Click on the Controller URL that you want to use the above execution environment in, and it will launch that Controller's console. Log in (if necessary) and follow the steps to complete the configuration."),
                React.createElement("br", null),
                !unsafeLinksSupported && (React.createElement(Trans, null,
                    React.createElement("b", null, "Note:"),
                    " The following links may be blocked by your browser. Copy and paste the external link manually.")),
                React.createElement(Spacer, null),
                React.createElement(Flex, null,
                    React.createElement(FlexItem, null,
                        React.createElement(CompoundFilter, { inputText: this.state.inputText, onChange: function (text) { return _this.setState({ inputText: text }); }, updateParams: function (controllerParams) {
                                controllerParams.page = 1;
                                _this.setState({ controllerParams: controllerParams }, function () {
                                    return _this.fetchControllers();
                                });
                            }, params: controllerParams, filterConfig: [
                                {
                                    id: 'host__icontains',
                                    title: t(templateObject_15 || (templateObject_15 = __makeTemplateObject(["Controller name"], ["Controller name"]))),
                                },
                            ] })),
                    React.createElement(FlexItem, { grow: { default: 'grow' } }),
                    React.createElement(FlexItem, null,
                        React.createElement(Pagination, { params: controllerParams, updateParams: function (controllerParams) {
                                _this.setState({ controllerParams: controllerParams }, function () {
                                    return _this.fetchControllers();
                                });
                            }, count: controllerCount, isTop: true }))),
                React.createElement(AppliedFilters, { updateParams: function (controllerParams) {
                        return _this.setState({ controllerParams: controllerParams }, function () {
                            return _this.fetchControllers();
                        });
                    }, params: controllerParams, ignoredParams: ['page_size', 'page'], niceNames: {
                        host__icontains: t(templateObject_16 || (templateObject_16 = __makeTemplateObject(["Controller name"], ["Controller name"]))),
                    } }),
                React.createElement(Spacer, null),
                this.renderControllers(),
                React.createElement(Spacer, null),
                React.createElement(Pagination, { params: controllerParams, updateParams: function (controllerParams) {
                        _this.setState({ controllerParams: controllerParams }, function () {
                            return _this.fetchControllers();
                        });
                    }, count: controllerCount, isTop: true }),
                React.createElement(Spacer, null),
                React.createElement("div", null, notListedMessage)))));
    };
    Object.defineProperty(PublishToControllerModal.prototype, "closeAlert", {
        get: function () {
            return closeAlertMixin('alerts');
        },
        enumerable: false,
        configurable: true
    });
    return PublishToControllerModal;
}(React.Component));
export { PublishToControllerModal };
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16;
//# sourceMappingURL=publish-to-controller-modal.js.map