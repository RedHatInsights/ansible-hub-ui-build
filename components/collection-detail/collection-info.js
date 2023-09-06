var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { Trans, t } from '@lingui/macro';
import { Alert, Button, Grid, GridItem, Split, SplitItem, } from '@patternfly/react-core';
import DownloadIcon from '@patternfly/react-icons/dist/esm/icons/download-icon';
import React from 'react';
import { Link } from 'react-router-dom';
import { CollectionAPI, } from 'src/api';
import { ClipboardCopy, LoadingPageSpinner, LoginLink, Tag, } from 'src/components';
import { useContext } from 'src/loaders/app-context';
import { Paths, formatPath } from 'src/paths';
import { errorMessage } from 'src/utilities';
import './collection-info.scss';
import { DownloadSignatureGridItem } from './download-signature-grid-item';
export var CollectionInfo = function (_a) {
    var _b, _c, _d;
    var collection_version = _a.collection_version, repository = _a.repository, content = _a.content, params = _a.params, addAlert = _a.addAlert;
    var downloadLinkRef = React.useRef(null);
    var context = useContext();
    var installCommand = "ansible-galaxy collection install ".concat(collection_version.namespace, ".").concat(collection_version.name);
    if (params.version) {
        installCommand += ":".concat(params.version);
    }
    if (!content) {
        return React.createElement(LoadingPageSpinner, null);
    }
    return (React.createElement("div", { className: 'pf-c-content info-panel' },
        React.createElement("h1", null, t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Install"], ["Install"])))),
        React.createElement(Grid, { hasGutter: true },
            React.createElement(GridItem, null, collection_version.description),
            React.createElement(GridItem, null, collection_version.tags.map(function (tag, i) { return (React.createElement(Tag, { key: i }, tag.name)); })),
            ((_b = content.license) === null || _b === void 0 ? void 0 : _b.length) > 0 && (React.createElement(GridItem, null,
                React.createElement(Split, { hasGutter: true },
                    React.createElement(SplitItem, { className: 'install-title' }, t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["License"], ["License"])))),
                    React.createElement(SplitItem, { isFilled: true }, content.license ? content.license.join(', ') : '')))),
            React.createElement(GridItem, null,
                React.createElement(Split, { hasGutter: true },
                    React.createElement(SplitItem, { className: 'install-title' }, t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Installation"], ["Installation"])))),
                    React.createElement(SplitItem, { isFilled: true },
                        React.createElement(ClipboardCopy, { isReadOnly: true }, installCommand),
                        React.createElement("div", null,
                            React.createElement(Trans, null,
                                React.createElement("b", null, "Note:"),
                                " Installing collections with ansible-galaxy is only supported in ansible 2.9+"))))),
            React.createElement(GridItem, null,
                React.createElement(Split, { hasGutter: true },
                    React.createElement(SplitItem, { className: 'install-title' }, t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["Download"], ["Download"])))),
                    context.user.is_anonymous &&
                        !context.settings
                            .GALAXY_ENABLE_UNAUTHENTICATED_COLLECTION_DOWNLOAD ? (React.createElement(Alert, { className: 'hub-collection-download-alert', isInline: true, variant: 'warning', title: React.createElement(React.Fragment, null, t(templateObject_5 || (templateObject_5 = __makeTemplateObject(["You have to be logged in to be able to download the tarball."], ["You have to be logged in to be able to download the tarball."]))),
                            ' ',
                            React.createElement(LoginLink, null)) })) : (React.createElement(SplitItem, { isFilled: true },
                        React.createElement("div", null,
                            React.createElement(Trans, null,
                                "To download this collection, configure your client to connect to one of this repositories",
                                ' ',
                                React.createElement(Link, { to: formatPath(Paths.collectionDistributionsByRepo, {
                                        repo: repository.name,
                                        namespace: collection_version.namespace,
                                        collection: collection_version.name,
                                    }) }, "distributions"),
                                ".")),
                        React.createElement("a", { ref: downloadLinkRef, style: { display: 'none' } }),
                        React.createElement(Button, { className: 'download-button', variant: 'link', "data-cy": 'download-collection-tarball-button', icon: React.createElement(DownloadIcon, null), onClick: function () {
                                return download(repository, collection_version.namespace, collection_version.name, collection_version.version, downloadLinkRef, addAlert);
                            } }, t(templateObject_6 || (templateObject_6 = __makeTemplateObject(["Download tarball"], ["Download tarball"])))))))),
            React.createElement(DownloadSignatureGridItem, { collectionVersion: collection_version, repository: repository, addAlert: function (status, statusText) {
                    return addAlert('danger', t(templateObject_7 || (templateObject_7 = __makeTemplateObject(["Signatures could not be loaded."], ["Signatures could not be loaded."]))), errorMessage(status, statusText));
                } }),
            (content === null || content === void 0 ? void 0 : content.requires_ansible) && (React.createElement(GridItem, null,
                React.createElement(Split, { hasGutter: true },
                    React.createElement(SplitItem, { className: 'install-title' }, t(templateObject_8 || (templateObject_8 = __makeTemplateObject(["Requires Ansible"], ["Requires Ansible"])))),
                    React.createElement(SplitItem, { isFilled: true, "data-cy": 'ansible-requirement' }, content === null || content === void 0 ? void 0 : content.requires_ansible)))),
            ((_c = content === null || content === void 0 ? void 0 : content.docs_blob) === null || _c === void 0 ? void 0 : _c.collection_readme) ? (React.createElement(GridItem, null,
                React.createElement("div", { className: 'hub-readme-container' },
                    React.createElement("div", { className: 'pf-c-content', dangerouslySetInnerHTML: {
                            __html: (_d = content === null || content === void 0 ? void 0 : content.docs_blob) === null || _d === void 0 ? void 0 : _d.collection_readme.html,
                        } }),
                    React.createElement("div", { className: 'hub-fade-out' })),
                React.createElement(Link, { to: formatPath(Paths.collectionDocsIndexByRepo, {
                        collection: collection_version.name,
                        namespace: collection_version.namespace,
                        repo: repository.name,
                    }, params) }, t(templateObject_9 || (templateObject_9 = __makeTemplateObject(["Go to documentation"], ["Go to documentation"])))))) : null)));
};
function download(repository, namespace, name, version, downloadLinkRef, addAlert) {
    CollectionAPI.getDownloadURL(repository, namespace, name, version)
        .then(function (downloadURL) {
        // By getting a reference to a hidden <a> tag, setting the href and
        // programmatically clicking it, we can hold off on making the api
        // calls to get the download URL until it's actually needed. Clicking
        // the <a> tag also gets around all the problems using a popup with
        // window.open() causes.
        downloadLinkRef.current.href = downloadURL;
        downloadLinkRef.current.click();
    })
        .catch(function (e) {
        var _a = e.response, status = _a.status, statusText = _a.statusText;
        addAlert('danger', t(templateObject_10 || (templateObject_10 = __makeTemplateObject(["Collection \"", "\" could not be downloaded."], ["Collection \"", "\" could not be downloaded."])), name), errorMessage(status, statusText));
    });
}
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10;
//# sourceMappingURL=collection-info.js.map