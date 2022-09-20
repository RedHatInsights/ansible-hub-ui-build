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
import { i18n } from '@lingui/core';
import * as React from 'react';
import { Flex, FlexItem, InputGroup, InputGroupText, Select, SelectOption, } from '@patternfly/react-core';
import { Constants } from 'src/constants';
import { formatPath } from 'src/paths';
import { AppContext } from 'src/loaders/app-context';
import './repo-selector.scss';
var RepoSelector = /** @class */ (function (_super) {
    __extends(RepoSelector, _super);
    function RepoSelector(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { selectExpanded: false };
        return _this;
    }
    RepoSelector.prototype.render = function () {
        var _this = this;
        var repoNames = Constants.REPOSITORYNAMES;
        return (React.createElement(Flex, null,
            React.createElement(FlexItem, null,
                React.createElement(InputGroup, null,
                    React.createElement(InputGroupText, { style: { paddingLeft: 0 }, variant: 'plain', className: 'hub-input-group-text-no-wrap' }, t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Filter by repository"], ["Filter by repository"])))),
                    React.createElement(Select, { className: 'nav-select', isDisabled: this.props.isDisabled, isOpen: this.state.selectExpanded, isPlain: false, onSelect: function (event) {
                            var originalRepo = _this.props.selectedRepo;
                            var newRepo = _this.getRepoName(event.target.name);
                            _this.setState({ selectExpanded: false });
                            if (newRepo !== originalRepo) {
                                var path = formatPath(_this.props.path, __assign(__assign({}, _this.props.pathParams), { repo: event.target.name }));
                                _this.context.setRepo(path);
                            }
                        }, onToggle: function (isExpanded) {
                            _this.setState({ selectExpanded: isExpanded });
                        }, selections: this.getRepoName(this.props.selectedRepo), variant: 'single' }, Object.keys(repoNames).map(function (option) { return (React.createElement(SelectOption, { name: option, key: option, value: i18n._(repoNames[option]) })); }))))));
    };
    RepoSelector.prototype.getRepoName = function (repoName) {
        var repo = Constants.REPOSITORYNAMES[repoName];
        return repo ? i18n._(repo) : repoName;
    };
    RepoSelector.contextType = AppContext;
    return RepoSelector;
}(React.Component));
export { RepoSelector };
var templateObject_1;
//# sourceMappingURL=repo-selector.js.map