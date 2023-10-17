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
import ExclamationCircleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-circle-icon';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnsibleRepositoryAPI } from 'src/api';
import { Paths, formatPath } from 'src/paths';
import { errorMessage } from 'src/utilities';
export var LazyRepositories = function (_a) {
    var _b;
    var emptyText = _a.emptyText, remoteHref = _a.remoteHref;
    var _c = useState([]), repositories = _c[0], setRepositories = _c[1];
    var _d = useState(null), count = _d[0], setCount = _d[1];
    var _e = useState(1), page = _e[0], setPage = _e[1];
    var _f = useState(null), error = _f[0], setError = _f[1];
    var _g = useState(true), loading = _g[0], setLoading = _g[1];
    var query = function (prepend) {
        AnsibleRepositoryAPI.list({ remote: remoteHref, page: page, page_size: 10 })
            .then(function (_a) {
            var _b = _a.data, count = _b.count, results = _b.results;
            setRepositories(prepend ? __spreadArray(__spreadArray([], prepend, true), results, true) : results);
            setCount(count);
            setError(null);
            setLoading(false);
        })
            .catch(function (e) {
            var _a = e.response, status = _a.status, statusText = _a.statusText;
            setRepositories(prepend || []);
            setCount(null);
            setError(errorMessage(status, statusText));
            setLoading(false);
        });
    };
    useEffect(function () {
        if (!remoteHref) {
            setRepositories([]);
            setCount(null);
            setPage(1);
            setError(null);
            setLoading(false);
            return;
        }
        setRepositories([]);
        setCount(null);
        setPage(1);
        setError(null);
        setLoading(true);
        query();
    }, [remoteHref]);
    // support pagination, but page == 1 is handled above
    useEffect(function () {
        if (page === 1) {
            return;
        }
        query(repositories);
    }, [page]);
    var errorElement = error && (React.createElement(Tooltip, { content: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Failed to load repositories: ", ""], ["Failed to load repositories: ", ""])), error), key: 'empty' },
        React.createElement(Button, { variant: 'plain' },
            React.createElement(ExclamationCircleIcon, null))));
    var loadMore = function () {
        setPage(function (page) { return page + 1; });
    };
    return loading ? (React.createElement(Spinner, { size: 'sm' })) : error ? (errorElement) : (React.createElement(React.Fragment, null, (_b = repositories === null || repositories === void 0 ? void 0 : repositories.map) === null || _b === void 0 ? void 0 :
        _b.call(repositories, function (_a, index) {
            var name = _a.name;
            return (React.createElement(React.Fragment, null,
                index ? ', ' : '',
                React.createElement(Link, { to: formatPath(Paths.ansibleRepositoryDetail, { name: name }) }, name)));
        }),
        !(repositories === null || repositories === void 0 ? void 0 : repositories.length) ? emptyText !== null && emptyText !== void 0 ? emptyText : '---' : null,
        count > (repositories === null || repositories === void 0 ? void 0 : repositories.length) ? (React.createElement(React.Fragment, null,
            ' ',
            React.createElement("a", { onClick: loadMore }, "(more)"))) : null));
};
var templateObject_1;
//# sourceMappingURL=lazy-repositories.js.map