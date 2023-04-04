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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { t } from '@lingui/macro';
import React from 'react';
import { AnsibleRemoteAPI } from 'src/api';
import { Page, RemoteForm } from 'src/components';
import { Paths, formatPath } from 'src/paths';
import { canAddAnsibleRemote, canEditAnsibleRemote } from 'src/permissions';
import { parsePulpIDFromURL, taskAlert } from 'src/utilities';
var initialRemote = {
    name: '',
    url: '',
    ca_cert: null,
    client_cert: null,
    tls_validation: true,
    proxy_url: null,
    download_concurrency: null,
    rate_limit: null,
    requirements_file: null,
    auth_url: null,
    signed_only: false,
    hidden_fields: [
        'client_key',
        'proxy_username',
        'proxy_password',
        'username',
        'password',
        'token',
    ].map(function (name) { return ({ name: name, is_set: false }); }),
};
var AnsibleRemoteEdit = Page({
    breadcrumbs: function (_a) {
        var name = _a.name;
        return [
            { url: formatPath(Paths.ansibleRemotes), name: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Remotes"], ["Remotes"]))) },
            name && { url: formatPath(Paths.ansibleRemoteDetail, { name: name }), name: name },
            name ? { name: t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Edit"], ["Edit"]))) } : { name: t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Add"], ["Add"]))) },
        ].filter(Boolean);
    },
    condition: function (context, item) {
        return canAddAnsibleRemote(context) || canEditAnsibleRemote(context, item);
    },
    displayName: 'AnsibleRemoteEdit',
    errorTitle: t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["Remote could not be displayed."], ["Remote could not be displayed."]))),
    query: function (_a) {
        var name = _a.name;
        return AnsibleRemoteAPI.list({ name: name })
            .then(function (_a) {
            var results = _a.data.results;
            return results[0];
        })
            .then(function (remote) {
            return AnsibleRemoteAPI.myPermissions(parsePulpIDFromURL(remote.pulp_href))
                .then(function (_a) {
                var permissions = _a.data.permissions;
                return permissions;
            })
                .catch(function (e) {
                console.error(e);
                return [];
            })
                .then(function (my_permissions) { return (__assign(__assign({}, remote), { my_permissions: my_permissions })); });
        });
    },
    title: function (_a) {
        var name = _a.name;
        return name || t(templateObject_5 || (templateObject_5 = __makeTemplateObject(["Add new remote"], ["Add new remote"])));
    },
    transformParams: function (_a) {
        var name = _a.name, rest = __rest(_a, ["name"]);
        return (__assign(__assign({}, rest), { name: name !== '_' ? name : null }));
    },
    render: function (item, _a) {
        var navigate = _a.navigate, queueAlert = _a.queueAlert, state = _a.state, setState = _a.setState;
        if (!state.remoteToEdit) {
            var remoteToEdit_1 = __assign(__assign({}, initialRemote), item);
            setState({ remoteToEdit: remoteToEdit_1, errorMessages: {} });
        }
        var remoteToEdit = state.remoteToEdit, errorMessages = state.errorMessages;
        if (!remoteToEdit) {
            return null;
        }
        var saveRemote = function () {
            var remoteToEdit = state.remoteToEdit;
            var data = __assign({}, remoteToEdit);
            if (!item) {
                // prevent "This field may not be blank." when writing in and then deleting username/password/etc
                // only when creating, edit diffs with item
                Object.keys(data).forEach(function (k) {
                    if (data[k] === '' || data[k] == null) {
                        delete data[k];
                    }
                });
                delete data.hidden_fields;
            }
            delete data.my_permissions;
            // api requires traling slash, fix the trivial case
            if (data.url && !data.url.includes('?') && !data.url.endsWith('/')) {
                data.url += '/';
            }
            var promise = !item
                ? AnsibleRemoteAPI.create(data)
                : AnsibleRemoteAPI.smartUpdate(parsePulpIDFromURL(item.pulp_href), data, item);
            promise
                .then(function (_a) {
                var task = _a.data;
                setState({
                    errorMessages: {},
                    remoteToEdit: undefined,
                });
                queueAlert(item
                    ? taskAlert(task, t(templateObject_6 || (templateObject_6 = __makeTemplateObject(["Update started for remote ", ""], ["Update started for remote ", ""])), data.name))
                    : {
                        variant: 'success',
                        title: t(templateObject_7 || (templateObject_7 = __makeTemplateObject(["Successfully created remote ", ""], ["Successfully created remote ", ""])), data.name),
                    });
                navigate(formatPath(Paths.ansibleRemoteDetail, {
                    name: data.name,
                }));
            })
                .catch(function (_a) {
                var data = _a.response.data;
                return setState({
                    errorMessages: __assign({ __nofield: data.non_field_errors || data.detail }, data),
                });
            });
        };
        var closeModal = function () {
            setState({ errorMessages: {}, remoteToEdit: undefined });
            navigate(item
                ? formatPath(Paths.ansibleRemoteDetail, {
                    name: item.name,
                })
                : formatPath(Paths.ansibleRemotes));
        };
        return (React.createElement(RemoteForm, { allowEditName: !item, remote: remoteToEdit, updateRemote: function (r) { return setState({ remoteToEdit: r }); }, remoteType: 'ansible-remote', showMain: true, saveRemote: saveRemote, errorMessages: errorMessages, closeModal: closeModal }));
    },
});
export default AnsibleRemoteEdit;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
//# sourceMappingURL=edit.js.map