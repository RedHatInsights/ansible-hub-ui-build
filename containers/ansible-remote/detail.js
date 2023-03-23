var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { t } from '@lingui/macro';
import { ClipboardCopyButton, CodeBlock, CodeBlockAction, CodeBlockCode, } from '@patternfly/react-core';
import React from 'react';
import { ansibleRemoteDeleteAction, ansibleRemoteDownloadCAAction, ansibleRemoteDownloadClientAction, ansibleRemoteDownloadRequirementsAction, ansibleRemoteEditAction, } from 'src/actions';
import { AnsibleRemoteAPI } from 'src/api';
import { CopyURL, Details, LazyRepositories, PageWithTabs, } from 'src/components';
import { Paths, formatPath } from 'src/paths';
import { isLoggedIn } from 'src/permissions';
var wip = '🚧 ';
var tabs = [
    { id: 'details', name: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Details"], ["Details"]))) },
    { id: 'access', name: wip + t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Access"], ["Access"]))) },
];
var PFCodeBlock = function (_a) {
    var code = _a.code;
    var _b = React.useState(false), copied = _b[0], setCopied = _b[1];
    var clipboardCopyFunc = function (event, text) {
        navigator.clipboard.writeText(text.toString());
    };
    var onClick = function (event, text) {
        clipboardCopyFunc(event, text);
        setCopied(true);
    };
    var actions = (React.createElement(React.Fragment, null,
        React.createElement(CodeBlockAction, null,
            React.createElement(ClipboardCopyButton, { id: 'basic-copy-button', textId: 'code-content', "aria-label": 'Copy to clipboard', onClick: function (e) { return onClick(e, code); }, exitDelay: copied ? 1500 : 600, maxWidth: '110px', variant: 'plain', onTooltipHidden: function () { return setCopied(false); } }, copied ? t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Successfully copied to clipboard"], ["Successfully copied to clipboard"]))) : t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["Copy to clipboard"], ["Copy to clipboard"])))))));
    return (React.createElement(CodeBlock, { actions: actions },
        React.createElement(CodeBlockCode, { id: 'code-content' }, code)));
};
var MaybeCode = function (_a) {
    var code = _a.code;
    return code ? React.createElement(PFCodeBlock, { code: code }) : React.createElement(React.Fragment, null, t(templateObject_5 || (templateObject_5 = __makeTemplateObject(["None"], ["None"]))));
};
var DetailsTab = function (_a) {
    var _b, _c;
    var item = _a.item;
    return (React.createElement(Details, { fields: [
            { label: t(templateObject_6 || (templateObject_6 = __makeTemplateObject(["Remote name"], ["Remote name"]))), value: item === null || item === void 0 ? void 0 : item.name },
            {
                label: t(templateObject_7 || (templateObject_7 = __makeTemplateObject(["URL"], ["URL"]))),
                value: React.createElement(CopyURL, { url: item === null || item === void 0 ? void 0 : item.url, fallback: true }),
            },
            {
                label: t(templateObject_8 || (templateObject_8 = __makeTemplateObject(["Proxy URL"], ["Proxy URL"]))),
                value: React.createElement(CopyURL, { url: item === null || item === void 0 ? void 0 : item.proxy_url, fallback: true }),
            },
            {
                label: t(templateObject_9 || (templateObject_9 = __makeTemplateObject(["TLS validation"], ["TLS validation"]))),
                value: (item === null || item === void 0 ? void 0 : item.tls_validation) ? t(templateObject_10 || (templateObject_10 = __makeTemplateObject(["Enabled"], ["Enabled"]))) : t(templateObject_11 || (templateObject_11 = __makeTemplateObject(["Disabled"], ["Disabled"]))),
            },
            { label: t(templateObject_12 || (templateObject_12 = __makeTemplateObject(["Client certificate"], ["Client certificate"]))), value: (item === null || item === void 0 ? void 0 : item.client_cert) || t(templateObject_13 || (templateObject_13 = __makeTemplateObject(["None"], ["None"]))) },
            { label: t(templateObject_14 || (templateObject_14 = __makeTemplateObject(["CA certificate"], ["CA certificate"]))), value: (item === null || item === void 0 ? void 0 : item.ca_cert) || t(templateObject_15 || (templateObject_15 = __makeTemplateObject(["None"], ["None"]))) },
            {
                label: t(templateObject_16 || (templateObject_16 = __makeTemplateObject(["Download concurrency"], ["Download concurrency"]))),
                value: (_b = item === null || item === void 0 ? void 0 : item.download_concurrency) !== null && _b !== void 0 ? _b : t(templateObject_17 || (templateObject_17 = __makeTemplateObject(["None"], ["None"]))),
            },
            { label: t(templateObject_18 || (templateObject_18 = __makeTemplateObject(["Rate limit"], ["Rate limit"]))), value: (_c = item === null || item === void 0 ? void 0 : item.rate_limit) !== null && _c !== void 0 ? _c : t(templateObject_19 || (templateObject_19 = __makeTemplateObject(["None"], ["None"]))) },
            {
                label: t(templateObject_20 || (templateObject_20 = __makeTemplateObject(["Repositories"], ["Repositories"]))),
                value: React.createElement(LazyRepositories, { remoteHref: item === null || item === void 0 ? void 0 : item.pulp_href }),
            },
            {
                label: t(templateObject_21 || (templateObject_21 = __makeTemplateObject(["YAML requirements"], ["YAML requirements"]))),
                value: React.createElement(MaybeCode, { code: item === null || item === void 0 ? void 0 : item.requirements_file }),
            },
        ] }));
};
var AccessTab = function (_a) {
    var item = _a.item;
    return React.createElement(Details, { item: item });
};
export var AnsibleRemoteDetail = PageWithTabs({
    breadcrumbs: function (_a) {
        var name = _a.name, tab = _a.tab;
        return [
            { url: formatPath(Paths.ansibleRemotes), name: t(templateObject_22 || (templateObject_22 = __makeTemplateObject(["Remotes"], ["Remotes"]))) },
            { url: formatPath(Paths.ansibleRemoteDetail, { name: name }), name: name },
            { name: tab.name },
        ];
    },
    condition: isLoggedIn,
    displayName: 'AnsibleRemoteDetail',
    errorTitle: t(templateObject_23 || (templateObject_23 = __makeTemplateObject(["Remote could not be displayed."], ["Remote could not be displayed."]))),
    headerActions: [
        ansibleRemoteEditAction,
        ansibleRemoteDownloadRequirementsAction,
        ansibleRemoteDownloadClientAction,
        ansibleRemoteDownloadCAAction,
        ansibleRemoteDeleteAction,
    ],
    query: function (_a) {
        var name = _a.name;
        return AnsibleRemoteAPI.list({ name: name }).then(function (_a) {
            var results = _a.data.results;
            return results[0];
        });
    },
    renderTab: function (tab, item, actionContext) {
        return ({
            details: React.createElement(DetailsTab, { item: item, actionContext: actionContext }),
            access: React.createElement(AccessTab, { item: item, actionContext: actionContext }),
        }[tab]);
    },
    tabs: tabs,
});
export default AnsibleRemoteDetail;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18, templateObject_19, templateObject_20, templateObject_21, templateObject_22, templateObject_23;
//# sourceMappingURL=detail.js.map