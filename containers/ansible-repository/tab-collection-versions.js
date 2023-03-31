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
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CollectionVersionAPI, } from 'src/api';
import { DetailList, ListItemActions } from 'src/components';
import { Paths, formatPath } from 'src/paths';
import { parsePulpIDFromURL } from 'src/utilities';
export var CollectionVersionsTab = function (_a) {
    var item = _a.item, _b = _a.actionContext, addAlert = _b.addAlert, hasPermission = _b.hasPermission;
    var query = function (_a) {
        var params = _a.params;
        var newParams = __assign({}, params);
        newParams.ordering = newParams.sort;
        delete newParams.sort;
        var repository = parsePulpIDFromURL(item.pulp_href);
        return CollectionVersionAPI.list(__assign({ repository: repository }, newParams)).then(function (_a) {
            var _b = _a.data, count = _b.meta.count, results = _b.data;
            return ({
                data: { count: count, results: results },
            });
        });
    };
    var _c = useState({}), modalState = _c[0], setModalState = _c[1];
    var renderTableRow = function (item, index, actionContext, listItemActions) {
        var _a = item.collection_version, name = _a.name, namespace = _a.namespace, version = _a.version, description = _a.description;
        var kebabItems = listItemActions.map(function (action) {
            return action.dropdownItem(item, actionContext);
        });
        return (React.createElement("tr", { key: index },
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
            React.createElement("td", null, description),
            React.createElement(ListItemActions, { kebabItems: kebabItems })));
    };
    return (React.createElement(DetailList, { actionContext: {
            addAlert: addAlert,
            state: modalState,
            setState: setModalState,
            query: query,
            hasPermission: hasPermission,
        }, defaultPageSize: 10, defaultSort: 'name', errorTitle: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Collection versions could not be displayed."], ["Collection versions could not be displayed."]))), filterConfig: null, listItemActions: [
        /*TODO*/
        ], noDataButton: null, noDataDescription: t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Collection versions will appear once the collection is modified."], ["Collection versions will appear once the collection is modified."]))), noDataTitle: t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["No collection versions yet"], ["No collection versions yet"]))), query: query, renderTableRow: renderTableRow, sortHeaders: [
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
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
//# sourceMappingURL=tab-collection-versions.js.map