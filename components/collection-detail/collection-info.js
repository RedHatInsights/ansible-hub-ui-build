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
import './collection-info.scss';
import * as moment from 'moment';
import { Link } from 'react-router-dom';
import { ClipboardCopy, Split, SplitItem, Grid, GridItem, FormSelect, FormSelectOption, Button, } from '@patternfly/react-core';
import { DownloadIcon } from '@patternfly/react-icons';
import { CollectionAPI } from 'src/api';
import { Tag } from 'src/components';
import { Paths, formatPath } from 'src/paths';
import { ParamHelper } from 'src/utilities/param-helper';
import { AppContext } from 'src/loaders/app-context';
var CollectionInfo = /** @class */ (function (_super) {
    __extends(CollectionInfo, _super);
    function CollectionInfo(props) {
        var _this = _super.call(this, props) || this;
        _this.downloadLinkRef = React.createRef();
        return _this;
    }
    CollectionInfo.prototype.render = function () {
        var _this = this;
        var _a = this.props, name = _a.name, latest_version = _a.latest_version, namespace = _a.namespace, all_versions = _a.all_versions, params = _a.params, updateParams = _a.updateParams;
        var installCommand = "ansible-galaxy collection install " + namespace.name + "." + name;
        if (params.version) {
            installCommand += ":" + params.version;
        }
        return (React.createElement("div", { className: 'pf-c-content info-panel' },
            React.createElement("h1", null, "Info"),
            React.createElement(Grid, { hasGutter: true },
                React.createElement(GridItem, null, latest_version.metadata.description),
                React.createElement(GridItem, null, latest_version.metadata.tags.map(function (tag, i) { return (React.createElement(Tag, { key: i }, tag)); })),
                React.createElement(GridItem, null,
                    React.createElement(Split, { hasGutter: true },
                        React.createElement(SplitItem, { className: 'install-title' }, "License"),
                        React.createElement(SplitItem, { isFilled: true }, latest_version.metadata.license))),
                React.createElement(GridItem, null,
                    React.createElement(Split, { hasGutter: true },
                        React.createElement(SplitItem, { className: 'install-title' }, "Installation"),
                        React.createElement(SplitItem, { isFilled: true },
                            React.createElement(ClipboardCopy, { isReadOnly: true }, installCommand),
                            React.createElement("div", null,
                                React.createElement("b", null, "Note:"),
                                " Installing collections with ansible-galaxy is only supported in ansible 2.9+"),
                            React.createElement("div", null,
                                React.createElement("a", { ref: this.downloadLinkRef, style: { display: 'none' } }),
                                React.createElement(Button, { className: 'download-button', variant: 'link', icon: React.createElement(DownloadIcon, null), onClick: function () {
                                        return _this.download(_this.context.selectedRepo, namespace, name, latest_version);
                                    } }, "Download tarball"))))),
                React.createElement(GridItem, null,
                    React.createElement(Split, { hasGutter: true },
                        React.createElement(SplitItem, { className: 'install-tile' }, "Install Version"),
                        React.createElement(SplitItem, { isFilled: true },
                            React.createElement(FormSelect, { onChange: function (val) {
                                    return updateParams(ParamHelper.setParam(params, 'version', val));
                                }, value: params.version ? params.version : latest_version.version, "aria-label": 'Select collection version' }, all_versions.map(function (v) { return (React.createElement(FormSelectOption, { key: v.version, value: v.version, label: v.version + " released " + moment(v.created).fromNow() + " " + (v.version === latest_version.version ? '(latest)' : '') })); }))))),
                latest_version.requires_ansible && (React.createElement(GridItem, null,
                    React.createElement(Split, { hasGutter: true },
                        React.createElement(SplitItem, { className: 'install-title' }, "Requires Ansible"),
                        React.createElement(SplitItem, { isFilled: true }, latest_version.requires_ansible)))),
                latest_version.docs_blob.collection_readme ? (React.createElement(GridItem, null,
                    React.createElement("div", { className: 'readme-container' },
                        React.createElement("div", { className: 'pf-c-content', dangerouslySetInnerHTML: {
                                __html: latest_version.docs_blob.collection_readme.html,
                            } }),
                        React.createElement("div", { className: 'fade-out' })),
                    React.createElement(Link, { to: formatPath(Paths.collectionDocsIndexByRepo, {
                            collection: name,
                            namespace: namespace.name,
                            repo: this.context.selectedRepo,
                        }, params) }, "Load full readme"))) : null)));
    };
    CollectionInfo.prototype.download = function (reponame, namespace, name, latest_version) {
        var _this = this;
        CollectionAPI.getDownloadURL(reponame, namespace.name, name, latest_version.version).then(function (downloadURL) {
            // By getting a reference to a hidden <a> tag, setting the href and
            // programmatically clicking it, we can hold off on making the api
            // calls to get the download URL until it's actually needed. Clicking
            // the <a> tag also gets around all the problems using a popup with
            // window.open() causes.
            _this.downloadLinkRef.current.href = downloadURL;
            _this.downloadLinkRef.current.click();
        });
    };
    CollectionInfo.contextType = AppContext;
    return CollectionInfo;
}(React.Component));
export { CollectionInfo };
//# sourceMappingURL=collection-info.js.map