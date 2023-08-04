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
import { Button, Spinner, Tooltip } from '@patternfly/react-core';
import { ExclamationCircleIcon } from '@patternfly/react-icons';
import React, { useEffect, useState } from 'react';
import { AnsibleDistributionAPI } from 'src/api';
import { errorMessage } from 'src/utilities';
export var LazyDistributions = function (_a) {
    var _b, _c, _d;
    var emptyText = _a.emptyText, repositoryHref = _a.repositoryHref;
    var _e = useState([]), distributions = _e[0], setDistributions = _e[1];
    var _f = useState(null), count = _f[0], setCount = _f[1];
    var _g = useState(1), page = _g[0], setPage = _g[1];
    var _h = useState(null), error = _h[0], setError = _h[1];
    var _j = useState(true), loading = _j[0], setLoading = _j[1];
    var query = function (prepend) {
        AnsibleDistributionAPI.list({
            repository: repositoryHref,
            sort: 'pulp_created',
            page: page,
            page_size: 10,
        })
            .then(function (_a) {
            var _b = _a.data, count = _b.count, results = _b.results;
            setDistributions(prepend ? __spreadArray(__spreadArray([], prepend, true), results, true) : results);
            setCount(count);
            setError(null);
            setLoading(false);
        })
            .catch(function (e) {
            var _a = e.response, status = _a.status, statusText = _a.statusText;
            setDistributions(prepend || []);
            setCount(null);
            setError(errorMessage(status, statusText));
            setLoading(false);
        });
    };
    useEffect(function () {
        if (!repositoryHref) {
            setDistributions([]);
            setCount(null);
            setPage(1);
            setError(null);
            setLoading(false);
            return;
        }
        setDistributions([]);
        setCount(null);
        setPage(1);
        setError(null);
        setLoading(true);
        query();
    }, [repositoryHref]);
    // support pagination, but page == 1 is handled above
    useEffect(function () {
        if (page === 1) {
            return;
        }
        query(distributions);
    }, [page]);
    var errorElement = error && (React.createElement(Tooltip, { content: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Failed to load distributions: ", ""], ["Failed to load distributions: ", ""])), error), key: 'empty' },
        React.createElement(Button, { variant: 'plain' },
            React.createElement(ExclamationCircleIcon, null))));
    var loadMore = function () {
        setPage(function (page) { return page + 1; });
    };
    return loading ? (React.createElement(Spinner, { size: 'sm' })) : error ? (errorElement) : (React.createElement(React.Fragment, null,
        ((_d = (_c = (_b = distributions === null || distributions === void 0 ? void 0 : distributions.map) === null || _b === void 0 ? void 0 : _b.call(distributions, function (_a) {
            var name = _a.name;
            return name;
        })) === null || _c === void 0 ? void 0 : _c.join) === null || _d === void 0 ? void 0 : _d.call(_c, ', ')) ||
            (emptyText !== null && emptyText !== void 0 ? emptyText : '---'),
        count > (distributions === null || distributions === void 0 ? void 0 : distributions.length) ? (React.createElement(React.Fragment, null,
            ' ',
            React.createElement("a", { onClick: loadMore }, "(more)"))) : null));
};
var templateObject_1;
//# sourceMappingURL=lazy-distributions.js.map