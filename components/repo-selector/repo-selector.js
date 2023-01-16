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
import { i18n } from '@lingui/core';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Flex, FlexItem, InputGroup, InputGroupText, Select, SelectOption, } from '@patternfly/react-core';
import { Constants } from 'src/constants';
import { formatPath } from 'src/paths';
import './repo-selector.scss';
export var RepoSelector = function (_a) {
    var selectedRepo = _a.selectedRepo, path = _a.path, pathParams = _a.pathParams, isDisabled = _a.isDisabled;
    var _b = useState(false), selectExpanded = _b[0], setSelectExpanded = _b[1];
    var navigate = useNavigate();
    var getRepoName = function (repoName) {
        var repo = Constants.REPOSITORYNAMES[repoName];
        return repo ? i18n._(repo) : repoName;
    };
    var repoNames = Constants.REPOSITORYNAMES;
    return (React.createElement(Flex, null,
        React.createElement(FlexItem, null,
            React.createElement(InputGroup, null,
                React.createElement(InputGroupText, { style: { paddingLeft: 0 }, variant: 'plain', className: 'hub-input-group-text-no-wrap' }, t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Filter by repository"], ["Filter by repository"])))),
                React.createElement(Select, { className: 'nav-select', isDisabled: isDisabled, isOpen: selectExpanded, isPlain: false, onSelect: function (event) {
                        var originalRepo = selectedRepo;
                        var newRepo = getRepoName(event.target.name);
                        setSelectExpanded(false);
                        if (newRepo !== originalRepo) {
                            var newPath = formatPath(path, __assign(__assign({}, pathParams), { repo: event.target.name }));
                            navigate(newPath);
                        }
                    }, onToggle: function (isExpanded) { return setSelectExpanded(isExpanded); }, selections: getRepoName(selectedRepo), variant: 'single' }, Object.keys(repoNames).map(function (option) { return (React.createElement(SelectOption, { name: option, key: option, value: i18n._(repoNames[option]) })); }))))));
};
var templateObject_1;
//# sourceMappingURL=repo-selector.js.map