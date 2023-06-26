var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { t } from '@lingui/macro';
import { Button, Spinner, Tooltip } from '@patternfly/react-core';
import { ExclamationCircleIcon } from '@patternfly/react-icons';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnsibleRepositoryAPI } from 'src/api';
import { Paths, formatPath } from 'src/paths';
import { errorMessage } from 'src/utilities';
export var LazyRepositories = function (_a) {
    var _b;
    var emptyText = _a.emptyText, onLoad = _a.onLoad, remoteHref = _a.remoteHref;
    var _c = useState([]), repositories = _c[0], setRepositories = _c[1];
    var _d = useState(null), error = _d[0], setError = _d[1];
    var _e = useState(true), loading = _e[0], setLoading = _e[1];
    useEffect(function () {
        if (!remoteHref) {
            setRepositories([]);
            setError(null);
            setLoading(false);
            onLoad === null || onLoad === void 0 ? void 0 : onLoad([]);
            return;
        }
        setRepositories([]);
        setError(null);
        setLoading(true);
        AnsibleRepositoryAPI.list({ remote: remoteHref })
            .then(function (_a) {
            var data = _a.data;
            setRepositories(data.results);
            setError(null);
            setLoading(false);
            onLoad === null || onLoad === void 0 ? void 0 : onLoad(data.results);
        })
            .catch(function (e) {
            var _a = e.response, status = _a.status, statusText = _a.statusText;
            setRepositories([]);
            setError(errorMessage(status, statusText));
            setLoading(false);
            onLoad === null || onLoad === void 0 ? void 0 : onLoad([]);
        });
    }, [remoteHref]);
    var errorElement = error && (React.createElement(Tooltip, { content: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Failed to load repositories: ", ""], ["Failed to load repositories: ", ""])), error), key: 'empty' },
        React.createElement(Button, { variant: 'plain' },
            React.createElement(ExclamationCircleIcon, null))));
    return loading ? (React.createElement(Spinner, { size: 'sm' })) : error ? (errorElement) : (React.createElement(React.Fragment, null, (_b = repositories === null || repositories === void 0 ? void 0 : repositories.map) === null || _b === void 0 ? void 0 :
        _b.call(repositories, function (_a, index) {
            var name = _a.name;
            return (React.createElement(React.Fragment, null,
                index ? ', ' : '',
                React.createElement(Link, { to: formatPath(Paths.ansibleRepositoryDetail, { name: name }) }, name)));
        }),
        !(repositories === null || repositories === void 0 ? void 0 : repositories.length) ? emptyText !== null && emptyText !== void 0 ? emptyText : '---' : null));
};
var templateObject_1;
//# sourceMappingURL=lazy-repositories.js.map