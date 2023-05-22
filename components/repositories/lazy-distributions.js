var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { t } from '@lingui/macro';
import { Button, Spinner, Tooltip } from '@patternfly/react-core';
import { ExclamationCircleIcon } from '@patternfly/react-icons';
import React, { useEffect, useState } from 'react';
import { AnsibleDistributionAPI } from 'src/api';
import { errorMessage } from 'src/utilities';
export var NonLazyDistributions = function (_a) {
    var _b, _c, _d;
    var distributions = _a.distributions, emptyText = _a.emptyText;
    return (React.createElement(React.Fragment, null, ((_d = (_c = (_b = distributions === null || distributions === void 0 ? void 0 : distributions.map) === null || _b === void 0 ? void 0 : _b.call(distributions, function (_a) {
        var name = _a.name;
        return name;
    })) === null || _c === void 0 ? void 0 : _c.join) === null || _d === void 0 ? void 0 : _d.call(_c, ', ')) ||
        (emptyText !== null && emptyText !== void 0 ? emptyText : '---')));
};
export var LazyDistributions = function (_a) {
    var emptyText = _a.emptyText, onLoad = _a.onLoad, repositoryHref = _a.repositoryHref;
    var _b = useState([]), distributions = _b[0], setDistributions = _b[1];
    var _c = useState(null), error = _c[0], setError = _c[1];
    var _d = useState(true), loading = _d[0], setLoading = _d[1];
    useEffect(function () {
        if (!repositoryHref) {
            setDistributions([]);
            setError(null);
            setLoading(false);
            onLoad === null || onLoad === void 0 ? void 0 : onLoad([]);
            return;
        }
        setDistributions([]);
        setError(null);
        setLoading(true);
        AnsibleDistributionAPI.list({ repository: repositoryHref })
            .then(function (_a) {
            var data = _a.data;
            setDistributions(data.results);
            setError(null);
            setLoading(false);
            onLoad === null || onLoad === void 0 ? void 0 : onLoad(data.results);
        })
            .catch(function (e) {
            var _a = e.response, status = _a.status, statusText = _a.statusText;
            setDistributions([]);
            setError(errorMessage(status, statusText));
            setLoading(false);
            onLoad === null || onLoad === void 0 ? void 0 : onLoad([]);
        });
    }, [repositoryHref]);
    var errorElement = error && (React.createElement(Tooltip, { content: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Failed to load distributions: ", ""], ["Failed to load distributions: ", ""])), error), key: 'empty' },
        React.createElement(Button, { variant: 'plain' },
            React.createElement(ExclamationCircleIcon, null))));
    return loading ? (React.createElement(Spinner, { size: 'sm' })) : error ? (errorElement) : (React.createElement(NonLazyDistributions, { distributions: distributions, emptyText: emptyText }));
};
var templateObject_1;
//# sourceMappingURL=lazy-distributions.js.map