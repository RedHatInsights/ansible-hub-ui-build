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
import { t } from '@lingui/macro';
import { Spinner } from '@patternfly/react-core';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ansibleRepositoryVersionRevertAction } from 'src/actions';
import { AnsibleRepositoryAPI, PulpAPI, } from 'src/api';
import { DateComponent, DetailList, Details, ListItemActions, } from 'src/components';
import { Paths, formatPath } from 'src/paths';
import { parsePulpIDFromURL } from 'src/utilities';
var AnyAPI = function (href) {
    return new (/** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.useOrdering = true;
            _this.apiPath = href.replace(PULP_API_BASE_PATH, '');
            return _this;
        }
        return class_1;
    }(PulpAPI)))();
};
var VersionContent = function (_a) {
    var href = _a.href, addAlert = _a.addAlert;
    var _b = useState({}), state = _b[0], setState = _b[1];
    var API = AnyAPI(href);
    var query = function (_a) {
        var params = _a.params;
        return API.list(params);
    };
    var renderTableRow = function (_a) {
        var _b = _a.manifest.collection_info, namespace = _b.namespace, name = _b.name, version = _b.version, description = _a.description;
        return (React.createElement("tr", null,
            React.createElement("td", null,
                React.createElement(Link, { to: formatPath(Paths.collection, {
                        namespace: namespace,
                        collection: name,
                    }, {
                        version: version,
                    }) },
                    namespace,
                    ".",
                    name,
                    " v",
                    version)),
            React.createElement("td", null, description)));
    };
    return (React.createElement(DetailList, { actionContext: {
            addAlert: addAlert,
            state: state,
            setState: setState,
            query: query,
        }, defaultPageSize: 10, defaultSort: 'name', errorTitle: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Collection versions could not be displayed."], ["Collection versions could not be displayed."]))), noDataDescription: t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["No collection versions in this repository version."], ["No collection versions in this repository version."]))), noDataTitle: t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["No collection versions yet"], ["No collection versions yet"]))), query: query, renderTableRow: renderTableRow, sortHeaders: [
            {
                title: t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["Collection"], ["Collection"]))),
                type: 'none',
                id: 'col1',
            },
            {
                title: t(templateObject_5 || (templateObject_5 = __makeTemplateObject(["Description"], ["Description"]))),
                type: 'none',
                id: 'col2',
            },
        ], title: t(templateObject_6 || (templateObject_6 = __makeTemplateObject(["Collection versions"], ["Collection versions"]))) }));
};
var ContentSummary = function (_a) {
    var data = _a.data;
    if (!Object.keys(data).length) {
        return React.createElement(React.Fragment, null, t(templateObject_7 || (templateObject_7 = __makeTemplateObject(["None"], ["None"]))));
    }
    return (React.createElement("table", { className: 'pf-c-table' },
        React.createElement("tr", null,
            React.createElement("th", null, t(templateObject_8 || (templateObject_8 = __makeTemplateObject(["Count"], ["Count"])))),
            React.createElement("th", null, t(templateObject_9 || (templateObject_9 = __makeTemplateObject(["Pulp type"], ["Pulp type"]))))),
        Object.entries(data).map(function (_a) {
            var k = _a[0], v = _a[1];
            return (React.createElement("tr", { key: k },
                React.createElement("td", null, v['count']),
                React.createElement("th", null, k)));
        })));
};
var BaseVersion = function (_a) {
    var repositoryName = _a.repositoryName, data = _a.data;
    if (!data) {
        return React.createElement(React.Fragment, null, t(templateObject_10 || (templateObject_10 = __makeTemplateObject(["None"], ["None"]))));
    }
    var number = data.split('/').at(-2);
    return (React.createElement(Link, { to: formatPath(Paths.ansibleRepositoryDetail, {
            name: repositoryName,
        }, {
            repositoryVersion: number,
            tab: 'repository-versions',
        }) }, number));
};
export var RepositoryVersionsTab = function (_a) {
    var _b, _c, _d;
    var item = _a.item, _e = _a.actionContext, addAlert = _e.addAlert, state = _e.state;
    var pulpId = parsePulpIDFromURL(item.pulp_href);
    var latest_href = item.latest_version_href;
    var repositoryName = item.name;
    var queryList = function (_a) {
        var params = _a.params;
        return AnsibleRepositoryAPI.listVersions(pulpId, params);
    };
    var queryDetail = function (_a) {
        var number = _a.number;
        return AnsibleRepositoryAPI.listVersions(pulpId, { number: number });
    };
    var _f = useState({}), modalState = _f[0], setModalState = _f[1];
    var _g = useState(null), version = _g[0], setVersion = _g[1];
    useEffect(function () {
        if (state.params.repositoryVersion) {
            queryDetail({ number: state.params.repositoryVersion }).then(function (_a) {
                var _b;
                var data = _a.data;
                if (!((_b = data === null || data === void 0 ? void 0 : data.results) === null || _b === void 0 ? void 0 : _b[0])) {
                    addAlert({
                        variant: 'danger',
                        title: t(templateObject_11 || (templateObject_11 = __makeTemplateObject(["Failed to find repository version"], ["Failed to find repository version"]))),
                    });
                }
                setVersion(data.results[0]);
            });
        }
        else {
            setVersion(null);
        }
    }, [state.params.repositoryVersion]);
    var renderTableRow = function (item, index, actionContext, listItemActions) {
        var number = item.number, pulp_created = item.pulp_created, pulp_href = item.pulp_href;
        var isLatest = latest_href === pulp_href;
        var kebabItems = listItemActions.map(function (action) {
            return action.dropdownItem(__assign(__assign({}, item), { isLatest: isLatest, repositoryName: repositoryName }), actionContext);
        });
        return (React.createElement("tr", { key: index },
            React.createElement("td", null,
                React.createElement(Link, { to: formatPath(Paths.ansibleRepositoryDetail, {
                        name: repositoryName,
                    }, {
                        repositoryVersion: number,
                        tab: 'repository-versions',
                    }) }, number),
                isLatest ? ' ' + t(templateObject_12 || (templateObject_12 = __makeTemplateObject(["(latest)"], ["(latest)"]))) : null),
            React.createElement("td", null,
                React.createElement(DateComponent, { date: pulp_created })),
            React.createElement(ListItemActions, { kebabItems: kebabItems })));
    };
    return state.params.repositoryVersion ? (version ? (React.createElement(React.Fragment, null,
        React.createElement(Details, { fields: [
                { label: t(templateObject_13 || (templateObject_13 = __makeTemplateObject(["Version number"], ["Version number"]))), value: version.number },
                {
                    label: t(templateObject_14 || (templateObject_14 = __makeTemplateObject(["Created date"], ["Created date"]))),
                    value: React.createElement(DateComponent, { date: version.pulp_created }),
                },
                {
                    label: t(templateObject_15 || (templateObject_15 = __makeTemplateObject(["Content added"], ["Content added"]))),
                    value: React.createElement(ContentSummary, { data: (_b = version.content_summary) === null || _b === void 0 ? void 0 : _b.added }),
                },
                {
                    label: t(templateObject_16 || (templateObject_16 = __makeTemplateObject(["Content removed"], ["Content removed"]))),
                    value: React.createElement(ContentSummary, { data: (_c = version.content_summary) === null || _c === void 0 ? void 0 : _c.removed }),
                },
                {
                    label: t(templateObject_17 || (templateObject_17 = __makeTemplateObject(["Current content"], ["Current content"]))),
                    value: React.createElement(ContentSummary, { data: (_d = version.content_summary) === null || _d === void 0 ? void 0 : _d.present }),
                },
                {
                    label: t(templateObject_18 || (templateObject_18 = __makeTemplateObject(["Base version"], ["Base version"]))),
                    value: (React.createElement(BaseVersion, { repositoryName: repositoryName, data: version.base_version })),
                },
            ] }),
        React.createElement("div", { className: 'pf-c-page__main-section', style: { padding: '8px 0', margin: '24px -16px 0' } }),
        React.createElement(VersionContent, __assign({}, version.content_summary.present['ansible.collection_version'])))) : (React.createElement(Spinner, { size: 'md' }))) : (React.createElement(DetailList, { actionContext: {
            addAlert: addAlert,
            state: modalState,
            setState: setModalState,
            query: queryList,
        }, defaultPageSize: 10, defaultSort: '-pulp_created', errorTitle: t(templateObject_19 || (templateObject_19 = __makeTemplateObject(["Repository versions could not be displayed."], ["Repository versions could not be displayed."]))), filterConfig: null, listItemActions: [ansibleRepositoryVersionRevertAction], noDataButton: null, noDataDescription: t(templateObject_20 || (templateObject_20 = __makeTemplateObject(["Repository versions will appear once the repository is modified."], ["Repository versions will appear once the repository is modified."]))), noDataTitle: t(templateObject_21 || (templateObject_21 = __makeTemplateObject(["No repository versions yet"], ["No repository versions yet"]))), query: queryList, renderTableRow: renderTableRow, sortHeaders: [
            {
                title: t(templateObject_22 || (templateObject_22 = __makeTemplateObject(["Version number"], ["Version number"]))),
                type: 'numeric',
                id: 'number',
            },
            {
                title: t(templateObject_23 || (templateObject_23 = __makeTemplateObject(["Created date"], ["Created date"]))),
                type: 'numeric',
                id: 'pulp_created',
            },
        ], title: t(templateObject_24 || (templateObject_24 = __makeTemplateObject(["Repository versions"], ["Repository versions"]))) }));
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18, templateObject_19, templateObject_20, templateObject_21, templateObject_22, templateObject_23, templateObject_24;
//# sourceMappingURL=tab-repository-versions.js.map