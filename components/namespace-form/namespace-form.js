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
import * as React from 'react';
import './namespace-form.scss';
import { Form, FormGroup, TextInput, TextArea, Alert, } from '@patternfly/react-core';
import { PlusCircleIcon, TrashIcon } from '@patternfly/react-icons';
import { NamespaceCard, ObjectPermissionField, } from 'src/components';
import { errorMessage } from 'src/utilities';
var NamespaceForm = /** @class */ (function (_super) {
    __extends(NamespaceForm, _super);
    function NamespaceForm(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            newNamespaceGroup: '',
            formErrors: {
                groups: null,
            },
        };
        return _this;
    }
    NamespaceForm.prototype.render = function () {
        var _this = this;
        var _a = this.props, namespace = _a.namespace, errorMessages = _a.errorMessages;
        var formErrors = this.state.formErrors;
        if (!namespace) {
            return null;
        }
        return (React.createElement(Form, null,
            React.createElement("div", { className: 'hub-card-row' },
                React.createElement("div", { className: 'fields' },
                    React.createElement(FormGroup, { fieldId: 'name', label: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Name"], ["Name"]))), isRequired: true },
                        React.createElement(TextInput, { isRequired: true, isDisabled: true, id: 'name', type: 'text', value: namespace.name })),
                    React.createElement("br", null),
                    React.createElement(FormGroup, { fieldId: 'company', label: t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Company name"], ["Company name"]))), helperTextInvalid: errorMessages['company'], validated: this.toError(!('company' in errorMessages)) },
                        React.createElement(TextInput, { validated: this.toError(!('company' in errorMessages)), isRequired: true, id: 'company', type: 'text', value: namespace.company, onChange: function (value, event) { return _this.updateField(value, event); } }))),
                React.createElement("div", { className: 'card' },
                    React.createElement(NamespaceCard, __assign({}, namespace)))),
            React.createElement(FormGroup, { fieldId: 'groups', label: t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Namespace owners"], ["Namespace owners"]))), className: 'namespace-owners', helperTextInvalid: errorMessages['groups'], validated: this.toError(!isNaN(Number(this.state.newNamespaceGroup)) &&
                    !('groups' in errorMessages)) },
                React.createElement("br", null),
                (formErrors === null || formErrors === void 0 ? void 0 : formErrors.groups) ? (React.createElement(Alert, { title: formErrors.groups.title, variant: 'danger', isInline: true }, formErrors.groups.description)) : (React.createElement(ObjectPermissionField, { groups: namespace.groups, availablePermissions: ['change_namespace', 'upload_to_namespace'], setGroups: function (g) {
                        var newNS = __assign({}, namespace);
                        newNS.groups = g;
                        _this.props.updateNamespace(newNS);
                    }, onError: function (err) {
                        var _a = err.response, status = _a.status, statusText = _a.statusText;
                        _this.setState({
                            formErrors: __assign(__assign({}, _this.state.formErrors), { groups: {
                                    title: t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["Groups list could not be displayed."], ["Groups list could not be displayed."]))),
                                    description: errorMessage(status, statusText),
                                    variant: 'danger',
                                } }),
                        });
                    } }))),
            React.createElement(FormGroup, { fieldId: 'avatar_url', label: t(templateObject_5 || (templateObject_5 = __makeTemplateObject(["Logo URL"], ["Logo URL"]))), helperTextInvalid: errorMessages['avatar_url'], validated: this.toError(!('avatar_url' in errorMessages)) },
                React.createElement(TextInput, { validated: this.toError(!('avatar_url' in errorMessages)), id: 'avatar_url', type: 'text', value: namespace.avatar_url, onChange: function (value, event) { return _this.updateField(value, event); } })),
            React.createElement(FormGroup, { fieldId: 'description', label: t(templateObject_6 || (templateObject_6 = __makeTemplateObject(["Description"], ["Description"]))), helperTextInvalid: errorMessages['description'], validated: this.toError(!('description' in errorMessages)) },
                React.createElement(TextArea, { validated: this.toError(!('description' in errorMessages)), id: 'description', type: 'text', value: namespace.description, onChange: function (value, event) { return _this.updateField(value, event); } })),
            React.createElement(FormGroup, { fieldId: 'links', label: t(templateObject_7 || (templateObject_7 = __makeTemplateObject(["Useful links"], ["Useful links"]))), helperTextInvalid: this.getLinksErrorText(errorMessages), validated: this.toError(!('links__url' in errorMessages || 'links__name' in errorMessages)) },
                namespace.links.map(function (link, index) {
                    return _this.renderLinkGroup(link, index);
                }),
                namespace.links.length === 0 && (React.createElement(PlusCircleIcon, { className: 'clickable', onClick: function () { return _this.addLink(); }, size: 'sm' })))));
    };
    NamespaceForm.prototype.getLinksErrorText = function (errorMessages) {
        var msg = [];
        if ('links__name' in errorMessages) {
            msg.push(t(templateObject_8 || (templateObject_8 = __makeTemplateObject(["Text: ", ""], ["Text: ", ""])), errorMessages['links__name']));
        }
        if ('links__url' in errorMessages) {
            msg.push(t(templateObject_9 || (templateObject_9 = __makeTemplateObject(["URL: ", ""], ["URL: ", ""])), errorMessages['links__url']));
        }
        return msg.join(' ');
    };
    NamespaceForm.prototype.toError = function (validated) {
        if (validated) {
            return 'default';
        }
        else {
            return 'error';
        }
    };
    NamespaceForm.prototype.updateField = function (value, event) {
        var update = __assign({}, this.props.namespace);
        update[event.target.id] = value;
        this.props.updateNamespace(update);
    };
    NamespaceForm.prototype.updateLink = function (index, value, event) {
        var update = __assign({}, this.props.namespace);
        update.links[index][event.target.id] = value;
        this.props.updateNamespace(update);
    };
    NamespaceForm.prototype.removeLink = function (index) {
        var update = __assign({}, this.props.namespace);
        update.links.splice(index, 1);
        this.props.updateNamespace(update);
    };
    NamespaceForm.prototype.addLink = function () {
        var update = __assign({}, this.props.namespace);
        update.links.push({
            name: '',
            url: '',
        });
        this.props.updateNamespace(update);
    };
    NamespaceForm.prototype.renderLinkGroup = function (link, index) {
        var _this = this;
        var last = index === this.props.namespace.links.length - 1;
        return (React.createElement("div", { className: 'useful-links', key: index },
            React.createElement("div", { className: 'link-name' },
                React.createElement(TextInput, { id: 'name', type: 'text', placeholder: t(templateObject_10 || (templateObject_10 = __makeTemplateObject(["Link text"], ["Link text"]))), value: link.name, onChange: function (value, event) { return _this.updateLink(index, value, event); } })),
            React.createElement("div", { className: 'link-url' },
                React.createElement(TextInput, { id: 'url', type: 'text', placeholder: t(templateObject_11 || (templateObject_11 = __makeTemplateObject(["Link URL"], ["Link URL"]))), value: link.url, onChange: function (value, event) { return _this.updateLink(index, value, event); } })),
            React.createElement("div", { className: 'link-button' },
                React.createElement("div", { className: 'link-container' },
                    React.createElement(TrashIcon, { className: 'clickable', onClick: function () { return _this.removeLink(index); }, size: 'sm' })),
                React.createElement("div", { className: 'link-container' }, last && (React.createElement(PlusCircleIcon, { className: 'clickable', onClick: function () { return _this.addLink(); }, size: 'sm' }))))));
    };
    return NamespaceForm;
}(React.Component));
export { NamespaceForm };
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11;
//# sourceMappingURL=namespace-form.js.map