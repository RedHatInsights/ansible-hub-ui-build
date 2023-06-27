var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { t } from '@lingui/macro';
import { Button, ButtonVariant, CodeBlock, CodeBlockCode, GridItem, Split, SplitItem, } from '@patternfly/react-core';
import { DownloadIcon } from '@patternfly/react-icons';
import React, { useState } from 'react';
import { AnsibleDistributionAPI, CollectionAPI, findDistroBasePathByRepo, } from 'src/api';
import 'src/api/response-types/collection';
import { useContext } from 'src/loaders/app-context';
import { LoadingPageSpinner } from '../loading/loading-page-spinner';
export var DownloadSignatureGridItem = function (_a) {
    var collectionVersion = _a.collectionVersion, repository = _a.repository, addAlert = _a.addAlert;
    var display_signatures = useContext().featureFlags.display_signatures;
    var _b = useState(false), show = _b[0], setShow = _b[1];
    var _c = useState([]), signatures = _c[0], setSignatures = _c[1];
    var _d = useState(true), isLoading = _d[0], setIsLoading = _d[1];
    // No signature object
    if (!display_signatures) {
        return null;
    }
    React.useEffect(function () {
        if (show && isLoading) {
            AnsibleDistributionAPI.list({
                repository: repository.pulp_href,
            }).then(function (result) {
                var distroBasePath = findDistroBasePathByRepo(result.data.results, repository);
                var namespace = collectionVersion.namespace, name = collectionVersion.name, version = collectionVersion.version;
                CollectionAPI.getSignatures(distroBasePath, namespace, name, version)
                    .then(function (res) {
                    setSignatures(res.data.signatures);
                    setIsLoading(false);
                })
                    .catch(function (_a) {
                    var code = _a.code, message = _a.message;
                    addAlert(code, message);
                    setIsLoading(false);
                    setShow(false);
                });
            });
        }
    }, [show]);
    return (React.createElement(React.Fragment, null,
        React.createElement(GridItem, null,
            React.createElement(Split, { hasGutter: true },
                React.createElement(SplitItem, { className: 'install-title' }, t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Signature"], ["Signature"])))),
                React.createElement(SplitItem, null,
                    React.createElement(Button, { style: { padding: 0 }, variant: ButtonVariant.link, icon: React.createElement(DownloadIcon, null), "data-cy": 'toggle-signature-button', onClick: function () {
                            setShow(!show);
                        } }, show ? t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Hide the signature"], ["Hide the signature"]))) : t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Show the signature"], ["Show the signature"]))))))),
        React.createElement(GridItem, null, show && (React.createElement(React.Fragment, null, isLoading ? (React.createElement(LoadingPageSpinner, null)) : (signatures.map(function (_a, idx) {
            var signature = _a.signature;
            return (React.createElement(CodeBlock, { key: idx },
                React.createElement(CodeBlockCode, null, signature)));
        })))))));
};
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=download-signature-grid-item.js.map