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
import { Alert, Button, Grid, GridItem, Split, SplitItem, } from '@patternfly/react-core';
import { DownloadIcon } from '@patternfly/react-icons';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { CollectionAPI } from 'src/api';
import { ClipboardCopy, LoginLink, Tag } from 'src/components';
import { AppContext } from 'src/loaders/app-context';
import { Paths, formatPath } from 'src/paths';
import { errorMessage } from 'src/utilities';
import './collection-info.scss';
import { DownloadSignatureGridItem } from './download-signature-grid-item';
var CollectionInfo = /** @class */ (function (_super) {
    __extends(CollectionInfo, _super);
    function CollectionInfo(props) {
        var _this = _super.call(this, props) || this;
        _this.downloadLinkRef = React.createRef();
        return _this;
    }
    CollectionInfo.prototype.render = function () {
        var _this = this;
        var _a, _b;
        var _c = this.props, name = _c.name, latest_version = _c.latest_version, namespace = _c.namespace, params = _c.params;
        var installCommand = "ansible-galaxy collection install ".concat(namespace.name, ".").concat(name);
        if (params.version) {
            installCommand += ":".concat(params.version);
        }
        return (React.createElement("div", { className: 'pf-c-content info-panel' },
            React.createElement("h1", null, t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Install"], ["Install"])))),
            React.createElement(Grid, { hasGutter: true },
                React.createElement(GridItem, null, latest_version.metadata.description),
                React.createElement(GridItem, null, latest_version.metadata.tags.map(function (tag, i) { return (React.createElement(Tag, { key: i }, tag)); })),
                ((_b = (_a = latest_version === null || latest_version === void 0 ? void 0 : latest_version.metadata) === null || _a === void 0 ? void 0 : _a.license) === null || _b === void 0 ? void 0 : _b.length) > 0 && (React.createElement(GridItem, null,
                    React.createElement(Split, { hasGutter: true },
                        React.createElement(SplitItem, { className: 'install-title' }, t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["License"], ["License"])))),
                        React.createElement(SplitItem, { isFilled: true }, latest_version.metadata.license
                            ? latest_version.metadata.license.join(', ')
                            : '')))),
                React.createElement(GridItem, null,
                    React.createElement(Split, { hasGutter: true },
                        React.createElement(SplitItem, { className: 'install-title' }, t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Installation"], ["Installation"])))),
                        React.createElement(SplitItem, { isFilled: true },
                            React.createElement(ClipboardCopy, { isReadOnly: true }, installCommand),
                            React.createElement("div", null,
                                React.createElement(Trans, null,
                                    React.createElement("b", null, "Note:"),
                                    " Installing collections with ansible-galaxy is only supported in ansible 2.9+")),
                            this.context.user.is_anonymous &&
                                !this.context.settings
                                    .GALAXY_ENABLE_UNAUTHENTICATED_COLLECTION_DOWNLOAD ? (React.createElement(Alert, { className: 'hub-collection-download-alert', isInline: true, variant: 'warning', title: React.createElement(React.Fragment, null, t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["You have to be logged in to be able to download the tarball."], ["You have to be logged in to be able to download the tarball."]))),
                                    ' ',
                                    React.createElement(LoginLink, null)) })) : (React.createElement("div", null,
                                React.createElement("a", { ref: this.downloadLinkRef, style: { display: 'none' } }),
                                React.createElement(Button, { className: 'download-button', variant: 'link', "data-cy": 'download-collection-tarball-button', icon: React.createElement(DownloadIcon, null), onClick: function () {
                                        return _this.download(_this.context.selectedRepo, namespace, name, latest_version);
                                    } }, t(templateObject_5 || (templateObject_5 = __makeTemplateObject(["Download tarball"], ["Download tarball"]))))))))),
                React.createElement(DownloadSignatureGridItem, { version: latest_version }),
                latest_version.requires_ansible && (React.createElement(GridItem, null,
                    React.createElement(Split, { hasGutter: true },
                        React.createElement(SplitItem, { className: 'install-title' }, t(templateObject_6 || (templateObject_6 = __makeTemplateObject(["Requires Ansible"], ["Requires Ansible"])))),
                        React.createElement(SplitItem, { isFilled: true, "data-cy": 'ansible-requirement' }, latest_version.requires_ansible)))),
                latest_version.docs_blob.collection_readme ? (React.createElement(GridItem, null,
                    React.createElement("div", { className: 'hub-readme-container' },
                        React.createElement("div", { className: 'pf-c-content', dangerouslySetInnerHTML: {
                                __html: latest_version.docs_blob.collection_readme.html,
                            } }),
                        React.createElement("div", { className: 'hub-fade-out' })),
                    React.createElement(Link, { to: formatPath(Paths.collectionDocsIndexByRepo, {
                            collection: name,
                            namespace: namespace.name,
                            repo: this.context.selectedRepo,
                        }, params) }, t(templateObject_7 || (templateObject_7 = __makeTemplateObject(["Go to documentation"], ["Go to documentation"])))))) : null)));
    };
    CollectionInfo.prototype.download = function (reponame, namespace, name, latest_version) {
        var _this = this;
        CollectionAPI.getDownloadURL(reponame, namespace.name, name, latest_version.version)
            .then(function (downloadURL) {
            // By getting a reference to a hidden <a> tag, setting the href and
            // programmatically clicking it, we can hold off on making the api
            // calls to get the download URL until it's actually needed. Clicking
            // the <a> tag also gets around all the problems using a popup with
            // window.open() causes.
            _this.downloadLinkRef.current.href = downloadURL;
            _this.downloadLinkRef.current.click();
        })
            .catch(function (e) {
            var _a = e.response, status = _a.status, statusText = _a.statusText;
            _this.props.addAlert('danger', t(templateObject_8 || (templateObject_8 = __makeTemplateObject(["Collection \"", "\" could not be downloaded."], ["Collection \"", "\" could not be downloaded."])), name), errorMessage(status, statusText));
        });
    };
    CollectionInfo.contextType = AppContext;
    return CollectionInfo;
}(React.Component));
export { CollectionInfo };
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;
//# sourceMappingURL=collection-info.js.map