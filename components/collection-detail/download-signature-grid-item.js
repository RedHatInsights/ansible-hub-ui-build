var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React, { useState } from 'react';
import { Button, ButtonVariant, CodeBlock, CodeBlockCode, GridItem, Split, SplitItem, } from '@patternfly/react-core';
import { DownloadIcon } from '@patternfly/react-icons';
import { t } from '@lingui/macro';
import { useContext } from 'src/loaders/app-context';
export var DownloadSignatureGridItem = function (_a) {
    var _b;
    var version = _a.version;
    var display_signatures = useContext().featureFlags.display_signatures;
    var _c = useState(false), show = _c[0], setShow = _c[1];
    // No signature object or the signatures is empty
    if (!display_signatures || ((_b = version.metadata.signatures) === null || _b === void 0 ? void 0 : _b.length) < 1) {
        return null;
    }
    return (React.createElement(React.Fragment, null,
        React.createElement(GridItem, null,
            React.createElement(Split, { hasGutter: true },
                React.createElement(SplitItem, { className: 'install-title' }, t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Signature"], ["Signature"])))),
                React.createElement(SplitItem, null,
                    React.createElement(Button, { style: { padding: 0 }, variant: ButtonVariant.link, icon: React.createElement(DownloadIcon, null), "data-cy": 'toggle-signature-button', onClick: function () {
                            setShow(!show);
                        } }, show ? t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Hide the signature"], ["Hide the signature"]))) : t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Show the signature"], ["Show the signature"]))))))),
        React.createElement(GridItem, null, show &&
            version.metadata.signatures.map(function (_a, idx) {
                var signature = _a.signature;
                return (React.createElement(CodeBlock, { key: idx },
                    React.createElement(CodeBlockCode, null, signature)));
            }))));
};
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=download-signature-grid-item.js.map