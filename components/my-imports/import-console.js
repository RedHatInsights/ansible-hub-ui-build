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
import { t } from '@lingui/macro';
import * as React from 'react';
import cx from 'classnames';
import './my-imports.scss';
import { Tooltip, Spinner } from '@patternfly/react-core';
import { Link } from 'react-router-dom';
import { formatPath, Paths } from 'src/paths';
import { PulpStatus, } from 'src/api';
import { StatusIndicator } from 'src/components';
import { Constants } from 'src/constants';
var ImportConsole = /** @class */ (function (_super) {
    __extends(ImportConsole, _super);
    function ImportConsole(props) {
        var _this = _super.call(this, props) || this;
        _this.isLoading = false;
        _this.lastImport = React.createRef();
        return _this;
    }
    ImportConsole.prototype.componentDidUpdate = function () {
        this.followLogs();
    };
    ImportConsole.prototype.componentDidMount = function () {
        this.followLogs();
    };
    ImportConsole.prototype.render = function () {
        var _this = this;
        var _a = this.props, selectedImport = _a.selectedImport, task = _a.task, apiError = _a.apiError, loading = _a.loading;
        if (loading || apiError) {
            return (React.createElement("div", { className: 'import-console' },
                selectedImport ? this.renderTitle(selectedImport) : null,
                React.createElement("div", { className: 'loading message-list' }, apiError ? React.createElement("div", { className: 'message' }, apiError) : React.createElement(Spinner, null))));
        }
        this.isLoading =
            selectedImport.state === PulpStatus.running ||
                selectedImport.state === PulpStatus.waiting;
        return (React.createElement("div", { className: 'import-console pf-c-content' },
            this.renderTitle(selectedImport),
            React.createElement("div", { className: 'message-list' },
                React.createElement("div", { className: cx({
                        'follow-active': this.props.followMessages,
                        'log-follow-button': true,
                    }) },
                    React.createElement(Tooltip, { position: 'left', content: this.isLoading ? t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Follow logs"], ["Follow logs"]))) : t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Scroll to end"], ["Scroll to end"]))) },
                        React.createElement("span", { onClick: function () { return _this.handleScrollClick(); }, className: 'fa fa-arrow-circle-down clickable' }))),
                task.messages.map(function (x, i) {
                    return _this.renderMessage(x, i);
                }),
                task.messages.length === 0 ? (React.createElement("div", { className: 'message' },
                    React.createElement("span", { className: 'error' }, t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["No task messages available"], ["No task messages available"])))))) : null,
                task.state === PulpStatus.completed && (React.createElement("div", { className: 'message' },
                    React.createElement("br", null),
                    React.createElement("span", { className: 'success' }, t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["Done"], ["Done"])))))),
                task.state === PulpStatus.failed && (React.createElement("div", { className: 'message' },
                    React.createElement("br", null),
                    React.createElement("span", { className: 'failed' }, t(templateObject_5 || (templateObject_5 = __makeTemplateObject(["Failed"], ["Failed"]))))))),
            React.createElement("div", { className: 'last-message', key: 'last', ref: this.lastImport })));
    };
    ImportConsole.prototype.renderMessage = function (item, i) {
        return (React.createElement("div", { className: 'message', key: i },
            React.createElement("span", { className: item.level.toLowerCase() },
                item.message,
                "\u00A0")));
    };
    ImportConsole.prototype.renderTitle = function (selectedImport) {
        var _a = this.props, task = _a.task, hideCollectionName = _a.hideCollectionName, collectionVersion = _a.collectionVersion;
        var collectionHead = selectedImport.namespace + "." + selectedImport.name;
        var approvalStatus = t(templateObject_6 || (templateObject_6 = __makeTemplateObject(["waiting for import to finish"], ["waiting for import to finish"])));
        if (collectionVersion) {
            var rlist = collectionVersion.repository_list;
            if (rlist.includes(Constants.NOTCERTIFIED)) {
                approvalStatus = t(templateObject_7 || (templateObject_7 = __makeTemplateObject(["rejected"], ["rejected"])));
            }
            else if (rlist.includes(Constants.NEEDSREVIEW)) {
                approvalStatus = t(templateObject_8 || (templateObject_8 = __makeTemplateObject(["waiting for approval"], ["waiting for approval"])));
            }
            else if (rlist.includes(Constants.PUBLISHED)) {
                approvalStatus = t(templateObject_9 || (templateObject_9 = __makeTemplateObject(["approved"], ["approved"])));
            }
            else {
                approvalStatus = t(templateObject_10 || (templateObject_10 = __makeTemplateObject(["could not be determined yet"], ["could not be determined yet"])));
            }
            collectionHead = (React.createElement(Link, { className: 'title', to: formatPath(Paths.collectionByRepo, {
                    namespace: selectedImport.namespace,
                    collection: selectedImport.name,
                    repo: rlist[0],
                }, {
                    version: selectedImport.version,
                }) },
                selectedImport.namespace,
                ".",
                selectedImport.name));
        }
        return (React.createElement("div", null,
            !hideCollectionName && (React.createElement("div", { className: 'title-container' }, collectionHead)),
            React.createElement("div", { className: 'title-bar' },
                React.createElement("div", null,
                    React.createElement("span", { className: 'data-title' }, t(templateObject_11 || (templateObject_11 = __makeTemplateObject(["Status:"], ["Status:"])))),
                    ' ',
                    React.createElement(StatusIndicator, { type: 'secondary', status: selectedImport.state })),
                React.createElement("div", null,
                    React.createElement("span", { className: 'data-title' }, t(templateObject_12 || (templateObject_12 = __makeTemplateObject(["Approval status:"], ["Approval status:"])))),
                    ' ',
                    approvalStatus),
                React.createElement("div", null,
                    React.createElement("span", { className: 'data-title' }, t(templateObject_13 || (templateObject_13 = __makeTemplateObject(["Version:"], ["Version:"])))),
                    ' ',
                    selectedImport.version),
                task && task.error ? (React.createElement("div", null,
                    React.createElement("span", { className: 'data-title' }, t(templateObject_14 || (templateObject_14 = __makeTemplateObject(["Error message:"], ["Error message:"])))),
                    ' ',
                    task.error.code,
                    React.createElement("pre", null,
                        React.createElement("code", null, task.error.description)),
                    React.createElement("pre", null,
                        React.createElement("code", null, task.error.traceback)))) : null)));
    };
    ImportConsole.prototype.handleScrollClick = function () {
        if (this.isLoading) {
            this.props.setFollowMessages(!this.props.followMessages);
        }
        else {
            this.lastImport.current.scrollIntoView({ behavior: 'smooth' });
        }
    };
    ImportConsole.prototype.followLogs = function () {
        var _this = this;
        if (this.props.followMessages && this.lastImport.current) {
            window.requestAnimationFrame(function () {
                _this.lastImport.current.scrollIntoView({ behavior: 'smooth' });
                if (!_this.isLoading) {
                    _this.props.setFollowMessages(false);
                }
            });
        }
    };
    return ImportConsole;
}(React.Component));
export { ImportConsole };
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14;
//# sourceMappingURL=import-console.js.map