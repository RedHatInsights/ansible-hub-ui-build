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
import { withRouter } from 'react-router-dom';
import { EmptyStateNoData, MarkdownEditor, ClipboardCopy, } from 'src/components';
import { FlexItem, Flex, Title, Button } from '@patternfly/react-core';
import { withContainerRepo } from './base';
import { ExecutionEnvironmentAPI } from 'src/api';
import { getContainersURL } from 'src/utilities';
import './execution-environment-detail.scss';
var ExecutionEnvironmentDetail = /** @class */ (function (_super) {
    __extends(ExecutionEnvironmentDetail, _super);
    function ExecutionEnvironmentDetail(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            loading: true,
            readme: '',
            markdownEditing: false,
            redirect: null,
            distribution_id: '',
            groups: [],
            description: '',
            namespace: {},
        };
        return _this;
    }
    ExecutionEnvironmentDetail.prototype.componentDidMount = function () {
        this.queryReadme(this.props.containerRepository.name);
    };
    ExecutionEnvironmentDetail.prototype.render = function () {
        return this.renderDetail();
    };
    ExecutionEnvironmentDetail.prototype.renderDetail = function () {
        var _this = this;
        var url = getContainersURL();
        var instructions = 'podman pull ' +
            url +
            '/' +
            this.props.containerRepository.name +
            ':latest';
        var containerRepository = this.props.containerRepository;
        var canEdit = containerRepository.namespace.my_permissions.includes('container.change_containernamespace');
        return (React.createElement(Flex, { direction: { default: 'column' } },
            React.createElement(FlexItem, null,
                React.createElement("section", { className: 'body card-area' },
                    ' ',
                    React.createElement(Title, { headingLevel: 'h2', size: 'lg' }, t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Instructions"], ["Instructions"])))),
                    React.createElement(Title, { headingLevel: 'h3', size: 'md' }, t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Pull this image"], ["Pull this image"])))),
                    React.createElement(ClipboardCopy, { isReadOnly: true }, instructions))),
            React.createElement(FlexItem, null,
                React.createElement("section", { className: 'body pf-c-content' },
                    React.createElement(Title, { headingLevel: 'h2', size: 'lg' }, !this.state.markdownEditing && this.state.readme && canEdit && (React.createElement(Button, { className: 'edit-button', variant: 'primary', onClick: function () {
                            _this.setState({ markdownEditing: true });
                        } }, t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Edit"], ["Edit"])))))),
                    !this.state.markdownEditing && !this.state.readme ? (React.createElement(EmptyStateNoData, { title: t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["No README"], ["No README"]))), description: t(templateObject_5 || (templateObject_5 = __makeTemplateObject(["Add a README with instructions for using this container."], ["Add a README with instructions for using this container."]))), button: canEdit ? (React.createElement(Button, { variant: 'primary', onClick: function () { return _this.setState({ markdownEditing: true }); } }, t(templateObject_6 || (templateObject_6 = __makeTemplateObject(["Add"], ["Add"]))))) : null })) : (React.createElement(MarkdownEditor, { text: this.state.readme, placeholder: '', helperText: '', updateText: function (value) {
                            return _this.setState({
                                readme: value,
                            });
                        }, editing: this.state.markdownEditing })),
                    this.state.markdownEditing && (React.createElement(React.Fragment, null,
                        React.createElement(Button, { variant: 'primary', onClick: function () {
                                return _this.saveReadme(_this.props.containerRepository.name, _this.state.readme);
                            } }, t(templateObject_7 || (templateObject_7 = __makeTemplateObject(["Save"], ["Save"])))),
                        React.createElement(Button, { variant: 'link', onClick: function () {
                                _this.setState({
                                    markdownEditing: false,
                                });
                                _this.queryReadme(_this.props.containerRepository.name);
                            } }, t(templateObject_8 || (templateObject_8 = __makeTemplateObject(["Cancel"], ["Cancel"]))))))))));
    };
    ExecutionEnvironmentDetail.prototype.queryReadme = function (name) {
        var _this = this;
        this.setState({ loading: true }, function () {
            return ExecutionEnvironmentAPI.readme(name)
                .then(function (result) {
                _this.setState({
                    readme: result.data.text,
                    loading: false,
                });
            })
                .catch(function (error) { return _this.setState({ redirect: 'notFound' }); });
        });
    };
    ExecutionEnvironmentDetail.prototype.saveReadme = function (name, readme) {
        var _this = this;
        this.setState({ loading: true }, function () {
            return ExecutionEnvironmentAPI.saveReadme(name, { text: readme }).then(function () {
                _this.setState({
                    markdownEditing: false,
                    loading: false,
                });
            });
        });
    };
    return ExecutionEnvironmentDetail;
}(React.Component));
export default withRouter(withContainerRepo(ExecutionEnvironmentDetail));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;
//# sourceMappingURL=execution_environment_detail.js.map