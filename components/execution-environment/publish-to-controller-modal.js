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
import { Trans, t } from '@lingui/macro';
import { Button, ClipboardCopyButton, DescriptionList, DescriptionListDescription, DescriptionListGroup, DescriptionListTerm, Flex, FlexItem, List, ListItem, Modal, } from '@patternfly/react-core';
import { ExternalLinkAltIcon, TagIcon } from '@patternfly/react-icons';
import React, { useEffect, useState } from 'react';
import { ControllerAPI, ExecutionEnvironmentAPI } from 'src/api';
import { APISearchTypeAhead, AlertList, AppliedFilters, CompoundFilter, EmptyStateFilter, EmptyStateNoData, LoadingPageSpinner, Pagination, ShaLabel, closeAlert, } from 'src/components';
import { errorMessage, filterIsSet, getContainersURL } from 'src/utilities';
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
    inputText: '',
};
export var PublishToControllerModal = function (props) {
    var _a = useState(initialState.alerts), alerts = _a[0], setAlerts = _a[1];
    var _b = useState(initialState.controllers), controllers = _b[0], setControllers = _b[1];
    var _c = useState(initialState.controllerCount), controllerCount = _c[0], setControllerCount = _c[1];
    var _d = useState(initialState.controllerParams), controllerParams = _d[0], setControllerParams = _d[1];
    var _e = useState(initialState.digest), digest = _e[0], setDigest = _e[1];
    var _f = useState(initialState.digestByTag), digestByTag = _f[0], setDigestByTag = _f[1];
    var _g = useState(initialState.loading), loading = _g[0], setLoading = _g[1];
    var _h = useState(initialState.tag), tag = _h[0], setTag = _h[1];
    var _j = useState(initialState.tagResults), tagResults = _j[0], setTagResults = _j[1];
    var _k = useState(initialState.tagSelection), tagSelection = _k[0], setTagSelection = _k[1];
    var _l = useState(initialState.inputText), inputText = _l[0], setInputText = _l[1];
    useEffect(function () {
        var image = props.image, isOpen = props.isOpen;
        if (isOpen) {
            // load on open
            fetchData(image);
        }
        else {
            // reset on close
            setAlerts(initialState.alerts);
            setControllers(initialState.controllers);
            setControllerCount(initialState.controllerCount);
            setControllerParams(initialState.controllerParams);
            setDigest(initialState.digest);
            setDigestByTag(initialState.digestByTag);
            setLoading(initialState.loading);
            setTag(initialState.tag);
            setTagResults(initialState.tagResults);
            setTagSelection(initialState.tagSelection);
            setInputText(initialState.inputText);
        }
    }, [props.isOpen]);
    useEffect(function () {
        fetchControllers();
    }, [controllerParams]);
    function fetchControllers() {
        return ControllerAPI.list(controllerParams)
            .then(function (_a) {
            var data = _a.data;
            var controllers = data.data.map(function (c) { return c.host; });
            var controllerCount = data.meta.count;
            setControllers(controllers);
            setControllerCount(controllerCount);
            return controllers;
        })
            .catch(function (e) {
            var _a = e.response, status = _a.status, statusText = _a.statusText;
            setAlerts(__spreadArray(__spreadArray([], alerts, true), [
                {
                    variant: 'danger',
                    title: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Controllers list could not be displayed."], ["Controllers list could not be displayed."]))),
                    description: errorMessage(status, statusText),
                },
            ], false));
        });
    }
    function fetchTags(image, name) {
        // filter tags by digest when provided from Images list
        var digest = props.digest;
        return ExecutionEnvironmentAPI.tags(image, __assign(__assign({ sort: '-created_at' }, (digest ? { tagged_manifest__digest: digest } : {})), (name ? { name__icontains: name } : {})))
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
            setDigestByTag(digestByTag);
            setTagResults(tagResults);
            return { digestByTag: digestByTag, tags: tags };
        })
            .catch(function (e) {
            var _a = e.response, status = _a.status, statusText = _a.statusText;
            setAlerts(__spreadArray(__spreadArray([], alerts, true), [
                {
                    variant: 'danger',
                    title: t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Tags could not be displayed."], ["Tags could not be displayed."]))),
                    description: errorMessage(status, statusText),
                },
            ], false));
        });
    }
    function fetchData(image) {
        var controllers = fetchControllers();
        var tagsPromises = fetchTags(image).then(function (_a) {
            // tags and digestByTag must be passed this way from fetchTags, otherwise, closure
            // will see old value of both variables set in fetchTags
            // and additionaly, tags state is not needed at all because of that
            var _b;
            var tags = _a.tags, digestByTag = _a.digestByTag;
            // preselect tag if present
            var digest = props.digest, tag = props.tag;
            tag || (tag = (_b = tags[0]) === null || _b === void 0 ? void 0 : _b.tag); // default to first tag unless in props (tags already filtered by digest if in props)
            digest || (digest = digestByTag[tag]); // set digest by tag unless in props
            setDigest(digest);
            setTag(tag);
            setTagSelection(tag ? [{ id: tag, name: tag }] : []);
        });
        Promise.all([controllers, tagsPromises]).then(function () {
            setLoading(false);
        });
    }
    function renderControllers() {
        var image = props.image, isOpen = props.isOpen;
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
        var imageUrl = encodeURIComponent(getContainersURL({
            name: image,
            tag: tag,
            digest: digest,
        }));
        return (React.createElement(List, { isPlain: true, isBordered: true }, controllers.map(function (host) {
            var href = "".concat(host, "/#/execution_environments/add?image=").concat(imageUrl);
            return (React.createElement(ListItem, { style: { paddingTop: '8px' }, key: host },
                React.createElement("a", { href: href, target: '_blank', rel: 'noreferrer' }, host),
                ' ',
                unsafeLinksSupported && (React.createElement("small", null,
                    React.createElement(ExternalLinkAltIcon, null))),
                !unsafeLinksSupported && (React.createElement(ClipboardCopyButton, { variant: 'plain', id: href, textId: t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["Copy to clipboard"], ["Copy to clipboard"]))), onClick: function () { return navigator.clipboard.writeText(href); } }, t(templateObject_5 || (templateObject_5 = __makeTemplateObject(["Copy to clipboard"], ["Copy to clipboard"])))))));
        })));
    }
    var image = props.image, isOpen = props.isOpen, onClose = props.onClose;
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
        React.createElement(AlertList, { alerts: alerts, closeAlert: function (i) { return closeAlert(i, { alerts: alerts, setAlerts: setAlerts }); } }),
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
                                React.createElement(APISearchTypeAhead, { loadResults: function (name) { return fetchTags(image, name); }, onClear: function () {
                                        setTag(null);
                                        setTagSelection([]);
                                    }, onSelect: function (event, value) {
                                        var digest = digestByTag[value.toString()];
                                        setTag(digest && value.toString());
                                        setTagSelection([{ id: value, name: value }]);
                                        setDigest(digest);
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
                    React.createElement(CompoundFilter, { inputText: inputText, onChange: function (text) { return setInputText(text); }, updateParams: function (controllerParams) {
                            setControllerParams(controllerParams);
                        }, params: controllerParams, filterConfig: [
                            {
                                id: 'host__icontains',
                                title: t(templateObject_15 || (templateObject_15 = __makeTemplateObject(["Controller name"], ["Controller name"]))),
                            },
                        ] })),
                React.createElement(FlexItem, { grow: { default: 'grow' } }),
                React.createElement(FlexItem, null,
                    React.createElement(Pagination, { params: controllerParams, updateParams: function (controllerParams) {
                            setControllerParams(controllerParams);
                        }, count: controllerCount, isTop: true }))),
            React.createElement(AppliedFilters, { updateParams: function (controllerParams) {
                    setControllerParams(controllerParams);
                }, params: controllerParams, ignoredParams: ['page_size', 'page'], niceNames: {
                    host__icontains: t(templateObject_16 || (templateObject_16 = __makeTemplateObject(["Controller name"], ["Controller name"]))),
                } }),
            React.createElement(Spacer, null),
            renderControllers(),
            React.createElement(Spacer, null),
            React.createElement(Pagination, { params: controllerParams, updateParams: function (controllerParams) {
                    setControllerParams(controllerParams);
                }, count: controllerCount, isTop: true }),
            React.createElement(Spacer, null),
            React.createElement("div", null, notListedMessage)))));
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16;
//# sourceMappingURL=publish-to-controller-modal.js.map