var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
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
import { t } from '@lingui/macro';
import { Spinner } from '@patternfly/react-core';
import React, { useEffect, useState } from 'react';
import { CollectionAPI } from 'src/api';
import { errorMessage } from 'src/utilities';
export var CollectionCount = function (_a) {
    var distributionPath = _a.distributionPath;
    var _b = useState(null), collectionCount = _b[0], setCollectionCount = _b[1];
    var _c = useState([]), alerts = _c[0], setAlerts = _c[1];
    var _d = useState(true), loading = _d[0], setLoading = _d[1];
    var getCollectionCount = function (repo) {
        var promises = [];
        promises.push(CollectionAPI.getPublishedCount(repo).then(function (count) {
            return count;
        }));
        promises.push(CollectionAPI.getExcludesCount(repo).then(function (results) {
            var excludedCollections = results.collections;
            var count = excludedCollections.length;
            return count;
        }));
        Promise.all(promises)
            .then(function (results) {
            var count = results[0] - results[1];
            setCollectionCount(count);
            setLoading(false);
        })
            .catch(function (err) {
            setLoading(false);
            var _a = err.response, status = _a.status, statusText = _a.statusText;
            addAlert(t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Collection count for \"", "\" could not be displayed."], ["Collection count for \"", "\" could not be displayed."])), distributionPath), 'danger', errorMessage(status, statusText), setAlerts, alerts);
        });
    };
    useEffect(function () {
        getCollectionCount(distributionPath);
    }, []);
    return !loading ? React.createElement(React.Fragment, null, collectionCount) : React.createElement(Spinner, { size: 'sm' });
};
function addAlert(title, variant, description, setAlerts, alerts) {
    setAlerts(__spreadArray(__spreadArray([], alerts, true), [
        {
            description: description,
            title: title,
            variant: variant,
        },
    ], false));
}
var templateObject_1;
//# sourceMappingURL=collection-count.js.map