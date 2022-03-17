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
import { t, Trans } from '@lingui/macro';
import * as React from 'react';
import * as FileSaver from 'file-saver';
import { Form, FormGroup, TextInput, Flex, FlexItem, Button, Modal, Checkbox, ExpandableSection, } from '@patternfly/react-core';
import { WriteOnlyField, HelperText, FileUpload } from 'src/components';
import { DownloadIcon, ExclamationTriangleIcon, ExclamationCircleIcon, } from '@patternfly/react-icons';
import { Constants } from 'src/constants';
import { isFieldSet, isWriteOnly } from 'src/utilities';
import { validateURLHelper } from 'src/utilities';
var RemoteForm = /** @class */ (function (_super) {
    __extends(RemoteForm, _super);
    function RemoteForm(props) {
        var _this = _super.call(this, props) || this;
        var _a = props.remote || {}, requirements_file = _a.requirements_file, client_key = _a.client_key, client_cert = _a.client_cert, ca_cert = _a.ca_cert;
        _this.state = {
            filenames: {
                requirements_file: {
                    name: requirements_file ? 'requirements.yml' : '',
                    original: !!requirements_file,
                },
                client_key: {
                    name: client_key ? 'client_key' : '',
                    original: !!client_key,
                },
                client_cert: {
                    name: client_cert ? 'client_cert' : '',
                    original: !!client_cert,
                },
                ca_cert: {
                    name: ca_cert ? 'ca_cert' : '',
                    original: !!ca_cert,
                },
            },
        };
        // Shim in a default concurrency value to pass form validation (AAH-959)
        if (_this.props.remoteType !== 'registry' &&
            _this.props.remote.download_concurrency === null) {
            _this.updateRemote(10, 'download_concurrency');
        }
        return _this;
    }
    RemoteForm.prototype.render = function () {
        var _this = this;
        var remote = this.props.remote;
        if (!remote) {
            return null;
        }
        var remoteType = this.props.remoteType || this.getRemoteType(remote.url);
        var requiredFields = ['name', 'url'];
        var disabledFields = this.props.allowEditName ? [] : ['name'];
        if (remoteType === 'certified') {
            requiredFields = requiredFields.concat(['auth_url']);
            disabledFields = disabledFields.concat(['requirements_file']);
        }
        if (remoteType === 'community') {
            requiredFields = requiredFields.concat(['requirements_file']);
            disabledFields = disabledFields.concat(['auth_url', 'token']);
        }
        if (remoteType === 'registry') {
            disabledFields = disabledFields.concat([
                'auth_url',
                'token',
                'requirements_file',
            ]);
        }
        return (React.createElement(Modal, { isOpen: this.props.showModal, title: this.props.title || t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Edit remote"], ["Edit remote"]))), variant: 'small', onClose: function () { return _this.props.closeModal(); }, actions: [
                React.createElement(Button, { isDisabled: !this.isValid(requiredFields, remoteType), key: 'confirm', variant: 'primary', onClick: function () { return _this.props.saveRemote(); } }, t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Save"], ["Save"])))),
                React.createElement(Button, { key: 'cancel', variant: 'secondary', onClick: function () { return _this.props.closeModal(); } }, t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Cancel"], ["Cancel"])))),
            ] }, this.renderForm(requiredFields, disabledFields)));
    };
    RemoteForm.prototype.renderForm = function (requiredFields, disabledFields) {
        var _this = this;
        var _a = this.props, remote = _a.remote, errorMessages = _a.errorMessages;
        var filenames = this.state.filenames;
        var docsAnsibleLink = (React.createElement("a", { target: '_blank', href: 'https://docs.ansible.com/ansible/latest/user_guide/collections_using.html#install-multiple-collections-with-a-requirements-file', rel: 'noreferrer' }, "requirements.yml"));
        var filename = function (field) {
            return filenames[field].original ? t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["(uploaded)"], ["(uploaded)"]))) : filenames[field].name;
        };
        var fileOnChange = function (field) { return function (value, name) {
            var _a;
            _this.setState({
                filenames: __assign(__assign({}, filenames), (_a = {}, _a[field] = {
                    name: name,
                    original: false,
                }, _a)),
            }, function () { return _this.updateRemote(value, field); });
        }; };
        return (React.createElement(Form, null,
            React.createElement(FormGroup, { fieldId: 'name', label: t(templateObject_5 || (templateObject_5 = __makeTemplateObject(["Name"], ["Name"]))), isRequired: requiredFields.includes('name'), validated: this.toError(!('name' in errorMessages)), helperTextInvalid: errorMessages['name'] },
                React.createElement(TextInput, { validated: this.toError(!('name' in errorMessages)), isRequired: requiredFields.includes('name'), isDisabled: disabledFields.includes('name'), id: 'name', type: 'text', value: remote.name || '', onChange: function (value) { return _this.updateRemote(value, 'name'); } })),
            React.createElement(FormGroup, __assign({ fieldId: 'url', label: t(templateObject_6 || (templateObject_6 = __makeTemplateObject(["URL"], ["URL"]))), labelIcon: React.createElement(HelperText, { content: t(templateObject_7 || (templateObject_7 = __makeTemplateObject(["The URL of an external content source."], ["The URL of an external content source."]))) }), isRequired: requiredFields.includes('url') }, validateURLHelper(errorMessages['url'], remote.url), { helperTextIcon: React.createElement(ExclamationTriangleIcon, null), helperTextInvalidIcon: React.createElement(ExclamationCircleIcon, null) }),
                React.createElement(TextInput, { validated: validateURLHelper(errorMessages['url'], remote.url).validated, isRequired: requiredFields.includes('url'), isDisabled: disabledFields.includes('url'), id: 'url', type: 'text', value: remote.url || '', onChange: function (value) { return _this.updateRemote(value, 'url'); } })),
            !disabledFields.includes('token') && (React.createElement(FormGroup, { fieldId: 'token', label: t(templateObject_8 || (templateObject_8 = __makeTemplateObject(["Token"], ["Token"]))), labelIcon: React.createElement(HelperText, { content: t(templateObject_9 || (templateObject_9 = __makeTemplateObject(["Token for authenticating to the server URL."], ["Token for authenticating to the server URL."]))) }), isRequired: requiredFields.includes('token'), validated: this.toError(!('token' in errorMessages)), helperTextInvalid: errorMessages['token'] },
                React.createElement(WriteOnlyField, { isValueSet: isFieldSet('token', remote.write_only_fields), onClear: function () { return _this.updateIsSet('token', false); } },
                    React.createElement(TextInput, { validated: this.toError(!('token' in errorMessages)), isRequired: requiredFields.includes('token'), type: 'password', id: 'token', value: remote.token || '', onChange: function (value) { return _this.updateRemote(value, 'token'); } })))),
            !disabledFields.includes('auth_url') && (React.createElement(FormGroup, { fieldId: 'auth_url', label: t(templateObject_10 || (templateObject_10 = __makeTemplateObject(["SSO URL"], ["SSO URL"]))), labelIcon: React.createElement(HelperText, { content: t(templateObject_11 || (templateObject_11 = __makeTemplateObject(["Single sign on URL."], ["Single sign on URL."]))) }), isRequired: requiredFields.includes('auth_url'), validated: this.toError(!('auth_url' in errorMessages)), helperTextInvalid: errorMessages['auth_url'] },
                React.createElement(TextInput, { validated: this.toError(!('auth_url' in errorMessages)), isRequired: requiredFields.includes('auth_url'), id: 'ssoUrl', type: 'text', value: this.props.remote.auth_url || '', onChange: function (value) { return _this.updateRemote(value, 'auth_url'); } }))),
            !disabledFields.includes('requirements_file') && (React.createElement(FormGroup, { fieldId: 'yaml', label: t(templateObject_12 || (templateObject_12 = __makeTemplateObject(["YAML requirements"], ["YAML requirements"]))), labelIcon: React.createElement(HelperText, { content: React.createElement(Trans, null,
                        "This uses the same ",
                        docsAnsibleLink,
                        " format as the ansible-galaxy CLI with the caveat that roles aren't supported and the source parameter is not supported.") }), isRequired: requiredFields.includes('requirements_file'), validated: this.toError(!('requirements_file' in errorMessages)), helperTextInvalid: errorMessages['requirements_file'] },
                React.createElement(Flex, null,
                    React.createElement(FlexItem, { grow: { default: 'grow' } },
                        React.createElement(FileUpload, { validated: this.toError(!('requirements_file' in errorMessages)), isRequired: requiredFields.includes('requirements_file'), id: 'yaml', type: 'text', filename: filename('requirements_file'), value: this.props.remote.requirements_file || '', hideDefaultPreview: true, onChange: fileOnChange('requirements_file') })),
                    React.createElement(FlexItem, null,
                        React.createElement(Button, { isDisabled: !this.props.remote.requirements_file, onClick: function () {
                                FileSaver.saveAs(new Blob([_this.props.remote.requirements_file], {
                                    type: 'text/plain;charset=utf-8',
                                }), filenames.requirements_file.name);
                            }, variant: 'plain', "aria-label": t(templateObject_13 || (templateObject_13 = __makeTemplateObject(["Download requirements file"], ["Download requirements file"]))) },
                            React.createElement(DownloadIcon, null)))))),
            React.createElement(FormGroup, { fieldId: 'username', label: t(templateObject_14 || (templateObject_14 = __makeTemplateObject(["Username"], ["Username"]))), labelIcon: React.createElement(HelperText, { content: disabledFields.includes('token')
                        ? t(templateObject_15 || (templateObject_15 = __makeTemplateObject(["The username to be used for authentication when syncing."], ["The username to be used for authentication when syncing."]))) : t(templateObject_16 || (templateObject_16 = __makeTemplateObject(["The username to be used for authentication when syncing. This is not required when using a token."], ["The username to be used for authentication when syncing. This is not required when using a token."]))) }), isRequired: requiredFields.includes('username'), validated: this.toError(!('username' in errorMessages)), helperTextInvalid: errorMessages['username'] },
                React.createElement(WriteOnlyField, { isValueSet: isWriteOnly('username', remote.write_only_fields) &&
                        isFieldSet('username', remote.write_only_fields), onClear: function () { return _this.updateIsSet('username', false); } },
                    React.createElement(TextInput, { validated: this.toError(!('username' in errorMessages)), isRequired: requiredFields.includes('username'), isDisabled: disabledFields.includes('username'), id: 'username', type: 'text', value: remote.username || '', onChange: function (value) { return _this.updateRemote(value, 'username'); } }))),
            React.createElement(FormGroup, { fieldId: 'password', label: t(templateObject_17 || (templateObject_17 = __makeTemplateObject(["Password"], ["Password"]))), labelIcon: React.createElement(HelperText, { content: disabledFields.includes('token')
                        ? t(templateObject_18 || (templateObject_18 = __makeTemplateObject(["The password to be used for authentication when syncing."], ["The password to be used for authentication when syncing."]))) : t(templateObject_19 || (templateObject_19 = __makeTemplateObject(["The password to be used for authentication when syncing. This is not required when using a token."], ["The password to be used for authentication when syncing. This is not required when using a token."]))) }), isRequired: requiredFields.includes('password'), validated: this.toError(!('password' in errorMessages)), helperTextInvalid: errorMessages['password'] },
                React.createElement(WriteOnlyField, { isValueSet: isFieldSet('password', remote.write_only_fields), onClear: function () { return _this.updateIsSet('password', false); } },
                    React.createElement(TextInput, { validated: this.toError(!('password' in errorMessages)), isRequired: requiredFields.includes('password'), isDisabled: disabledFields.includes('password'), id: 'password', type: 'password', value: remote.password || '', onChange: function (value) { return _this.updateRemote(value, 'password'); } }))),
            React.createElement(ExpandableSection, { toggleTextExpanded: t(templateObject_20 || (templateObject_20 = __makeTemplateObject(["Hide advanced options"], ["Hide advanced options"]))), toggleTextCollapsed: t(templateObject_21 || (templateObject_21 = __makeTemplateObject(["Show advanced options"], ["Show advanced options"]))) },
                React.createElement("div", { className: 'pf-c-form' },
                    React.createElement(FormGroup, { fieldId: 'proxy_url', label: t(templateObject_22 || (templateObject_22 = __makeTemplateObject(["Proxy URL"], ["Proxy URL"]))), isRequired: requiredFields.includes('proxy_url'), validated: this.toError(!('proxy_url' in errorMessages)), helperTextInvalid: errorMessages['proxy_url'] },
                        React.createElement(TextInput, { validated: this.toError(!('proxy_url' in errorMessages)), isRequired: requiredFields.includes('proxy_url'), isDisabled: disabledFields.includes('proxy_url'), id: 'proxy_url', type: 'text', value: remote.proxy_url || '', onChange: function (value) { return _this.updateRemote(value, 'proxy_url'); } })),
                    React.createElement(FormGroup, { fieldId: 'proxy_username', label: t(templateObject_23 || (templateObject_23 = __makeTemplateObject(["Proxy username"], ["Proxy username"]))), isRequired: requiredFields.includes('proxy_username'), validated: this.toError(!('proxy_username' in errorMessages)), helperTextInvalid: errorMessages['proxy_username'] },
                        React.createElement(WriteOnlyField, { isValueSet: isWriteOnly('proxy_username', remote.write_only_fields) &&
                                isFieldSet('proxy_username', remote.write_only_fields), onClear: function () { return _this.updateIsSet('proxy_username', false); } },
                            React.createElement(TextInput, { validated: this.toError(!('proxy_username' in errorMessages)), isRequired: requiredFields.includes('proxy_username'), isDisabled: disabledFields.includes('proxy_username'), id: 'proxy_username', type: 'text', value: remote.proxy_username || '', onChange: function (value) {
                                    return _this.updateRemote(value, 'proxy_username');
                                } }))),
                    React.createElement(FormGroup, { fieldId: 'proxy_password', label: t(templateObject_24 || (templateObject_24 = __makeTemplateObject(["Proxy password"], ["Proxy password"]))), isRequired: requiredFields.includes('proxy_password'), validated: this.toError(!('proxy_password' in errorMessages)), helperTextInvalid: errorMessages['proxy_password'] },
                        React.createElement(WriteOnlyField, { isValueSet: isFieldSet('proxy_password', remote.write_only_fields), onClear: function () { return _this.updateIsSet('proxy_password', false); } },
                            React.createElement(TextInput, { validated: this.toError(!('proxy_password' in errorMessages)), isRequired: requiredFields.includes('proxy_password'), isDisabled: disabledFields.includes('proxy_password'), id: 'proxy_password', type: 'password', value: remote.proxy_password || '', onChange: function (value) {
                                    return _this.updateRemote(value, 'proxy_password');
                                } }))),
                    React.createElement(FormGroup, { fieldId: 'tls_validation', label: t(templateObject_25 || (templateObject_25 = __makeTemplateObject(["TLS validation"], ["TLS validation"]))), labelIcon: React.createElement(HelperText, { content: t(templateObject_26 || (templateObject_26 = __makeTemplateObject(["If selected, TLS peer validation must be performed."], ["If selected, TLS peer validation must be performed."]))) }), isRequired: requiredFields.includes('tls_validation'), validated: this.toError(!('tls_validation' in errorMessages)), helperTextInvalid: errorMessages['tls_validation'] },
                        React.createElement(Checkbox, { onChange: function (value) { return _this.updateRemote(value, 'tls_validation'); }, id: 'tls_validation', isChecked: remote.tls_validation })),
                    React.createElement(FormGroup, { fieldId: 'client_key', label: t(templateObject_27 || (templateObject_27 = __makeTemplateObject(["Client key"], ["Client key"]))), labelIcon: React.createElement(HelperText, { content: t(templateObject_28 || (templateObject_28 = __makeTemplateObject(["A PEM encoded private key used for authentication."], ["A PEM encoded private key used for authentication."]))) }), isRequired: requiredFields.includes('client_key'), validated: this.toError(!('client_key' in errorMessages)), helperTextInvalid: errorMessages['client_key'] },
                        React.createElement(WriteOnlyField, { isValueSet: isFieldSet('client_key', remote.write_only_fields), onClear: function () { return _this.updateIsSet('client_key', false); } },
                            React.createElement(FileUpload, { "data-cy": 'client_key', validated: this.toError(!('client_key' in errorMessages)), isRequired: requiredFields.includes('client_key'), id: 'yaml', type: 'text', filename: filename('client_key'), value: this.props.remote.client_key || '', hideDefaultPreview: true, onChange: fileOnChange('client_key') }))),
                    React.createElement(FormGroup, { fieldId: 'client_cert', label: t(templateObject_29 || (templateObject_29 = __makeTemplateObject(["Client certificate"], ["Client certificate"]))), labelIcon: React.createElement(HelperText, { content: t(templateObject_30 || (templateObject_30 = __makeTemplateObject(["A PEM encoded client certificate used for authentication."], ["A PEM encoded client certificate used for authentication."]))) }), isRequired: requiredFields.includes('client_cert'), validated: this.toError(!('client_cert' in errorMessages)), helperTextInvalid: errorMessages['client_cert'] },
                        React.createElement(Flex, null,
                            React.createElement(FlexItem, { grow: { default: 'grow' } },
                                React.createElement(FileUpload, { validated: this.toError(!('client_cert' in errorMessages)), isRequired: requiredFields.includes('client_cert'), id: 'yaml', type: 'text', filename: filename('client_cert'), value: this.props.remote.client_cert || '', hideDefaultPreview: true, onChange: fileOnChange('client_cert') })),
                            React.createElement(FlexItem, null,
                                React.createElement(Button, { "data-cy": 'client_cert', isDisabled: !this.props.remote.client_cert, onClick: function () {
                                        FileSaver.saveAs(new Blob([_this.props.remote.client_cert], {
                                            type: 'text/plain;charset=utf-8',
                                        }), filenames.client_cert.name);
                                    }, variant: 'plain', "aria-label": t(templateObject_31 || (templateObject_31 = __makeTemplateObject(["Download client certification file"], ["Download client certification file"]))) },
                                    React.createElement(DownloadIcon, null))))),
                    React.createElement(FormGroup, { fieldId: 'ca_cert', label: t(templateObject_32 || (templateObject_32 = __makeTemplateObject(["CA certificate"], ["CA certificate"]))), labelIcon: React.createElement(HelperText, { content: t(templateObject_33 || (templateObject_33 = __makeTemplateObject(["A PEM encoded client certificate used for authentication."], ["A PEM encoded client certificate used for authentication."]))) }), isRequired: requiredFields.includes('ca_cert'), validated: this.toError(!('ca_cert' in errorMessages)), helperTextInvalid: errorMessages['ca_cert'] },
                        React.createElement(Flex, null,
                            React.createElement(FlexItem, { grow: { default: 'grow' } },
                                React.createElement(FileUpload, { validated: this.toError(!('ca_cert' in errorMessages)), isRequired: requiredFields.includes('ca_cert'), id: 'yaml', type: 'text', filename: filename('ca_cert'), value: this.props.remote.ca_cert || '', hideDefaultPreview: true, onChange: fileOnChange('ca_cert') })),
                            React.createElement(FlexItem, null,
                                React.createElement(Button, { "data-cy": 'ca_cert', isDisabled: !this.props.remote.ca_cert, onClick: function () {
                                        FileSaver.saveAs(new Blob([_this.props.remote.ca_cert], {
                                            type: 'text/plain;charset=utf-8',
                                        }), filenames.ca_cert.name);
                                    }, variant: 'plain', "aria-label": t(templateObject_34 || (templateObject_34 = __makeTemplateObject(["Download CA certification file"], ["Download CA certification file"]))) },
                                    React.createElement(DownloadIcon, null))))),
                    React.createElement(FormGroup, { fieldId: 'download_concurrency', label: t(templateObject_35 || (templateObject_35 = __makeTemplateObject(["Download concurrency"], ["Download concurrency"]))), labelIcon: React.createElement(HelperText, { content: t(templateObject_36 || (templateObject_36 = __makeTemplateObject(["Total number of simultaneous connections."], ["Total number of simultaneous connections."]))) }), validated: !this.isNumericSet(remote.download_concurrency) ||
                            remote.download_concurrency > 0
                            ? 'default'
                            : 'error', helperTextInvalid: t(templateObject_37 || (templateObject_37 = __makeTemplateObject(["Number must be greater than 0"], ["Number must be greater than 0"]))) },
                        React.createElement(TextInput, { id: 'download_concurrency', type: 'number', value: remote.download_concurrency || '', validated: !this.isNumericSet(remote.download_concurrency) ||
                                remote.download_concurrency > 0
                                ? 'default'
                                : 'error', onChange: function (value) {
                                return _this.updateRemote(value, 'download_concurrency');
                            } })),
                    React.createElement(FormGroup, { fieldId: 'rate_limit', label: t(templateObject_38 || (templateObject_38 = __makeTemplateObject(["Rate Limit"], ["Rate Limit"]))), labelIcon: React.createElement(HelperText, { content: t(templateObject_39 || (templateObject_39 = __makeTemplateObject(["Limits total download rate in requests per second."], ["Limits total download rate in requests per second."]))) }), validated: !this.isNumericSet(remote.rate_limit) ||
                            Number.isInteger(remote.rate_limit)
                            ? 'default'
                            : 'error', helperTextInvalid: t(templateObject_40 || (templateObject_40 = __makeTemplateObject(["Must be an integer."], ["Must be an integer."]))) },
                        React.createElement(TextInput, { id: 'rate_limit', type: 'number', value: remote.rate_limit || '', onChange: function (value) { return _this.updateRemote(value, 'rate_limit'); } })))),
            errorMessages['__nofield'] ? (React.createElement("span", { style: {
                    color: 'var(--pf-global--danger-color--200)',
                } }, errorMessages['__nofield'])) : null));
    };
    RemoteForm.prototype.isValid = function (requiredFields, remoteType) {
        var remote = this.props.remote;
        for (var _i = 0, requiredFields_1 = requiredFields; _i < requiredFields_1.length; _i++) {
            var field = requiredFields_1[_i];
            if (!remote[field] || remote[field] === '') {
                return false;
            }
        }
        if (['community', 'certified', 'none'].includes(remoteType)) {
            // only required in remotes, not registries
            if (remote.download_concurrency < 1) {
                return false;
            }
        }
        if (validateURLHelper(null, remote.url).validated == 'error') {
            return false;
        }
        return true;
    };
    RemoteForm.prototype.getRemoteType = function (url) {
        for (var _i = 0, _a = Constants.UPSTREAM_HOSTS; _i < _a.length; _i++) {
            var host = _a[_i];
            if (url.includes(host)) {
                return 'community';
            }
        }
        for (var _b = 0, _c = Constants.DOWNSTREAM_HOSTS; _b < _c.length; _b++) {
            var host = _c[_b];
            if (url.includes(host)) {
                return 'certified';
            }
        }
        return 'none';
    };
    RemoteForm.prototype.updateIsSet = function (fieldName, value) {
        var writeOnlyFields = this.props.remote.write_only_fields;
        var newFields = [];
        for (var _i = 0, writeOnlyFields_1 = writeOnlyFields; _i < writeOnlyFields_1.length; _i++) {
            var field = writeOnlyFields_1[_i];
            if (field.name === fieldName) {
                field.is_set = value;
            }
            newFields.push(field);
        }
        var update = __assign({}, this.props.remote);
        update.write_only_fields = newFields;
        update[fieldName] = null;
        this.props.updateRemote(update);
    };
    RemoteForm.prototype.updateRemote = function (value, field) {
        var numericFields = ['download_concurrency', 'rate_limit'];
        if (numericFields.includes(field)) {
            value = Number.isInteger(value)
                ? value
                : Number.isNaN(parseInt(value, 10))
                    ? null
                    : parseInt(value, 10);
        }
        var update = __assign({}, this.props.remote);
        update[field] = value;
        this.props.updateRemote(update);
    };
    RemoteForm.prototype.toError = function (validated) {
        if (validated) {
            return 'default';
        }
        else {
            return 'error';
        }
    };
    RemoteForm.prototype.isNumericSet = function (value) {
        return value != null && value !== '';
    };
    return RemoteForm;
}(React.Component));
export { RemoteForm };
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18, templateObject_19, templateObject_20, templateObject_21, templateObject_22, templateObject_23, templateObject_24, templateObject_25, templateObject_26, templateObject_27, templateObject_28, templateObject_29, templateObject_30, templateObject_31, templateObject_32, templateObject_33, templateObject_34, templateObject_35, templateObject_36, templateObject_37, templateObject_38, templateObject_39, templateObject_40;
//# sourceMappingURL=remote-form.js.map