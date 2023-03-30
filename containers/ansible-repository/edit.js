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
import { AnsibleDistributionAPI, AnsibleRepositoryAPI, } from 'src/api';
import { AnsibleRepositoryForm, Page } from 'src/components';
import { Paths, formatPath } from 'src/paths';
import { canAddAnsibleRepository, canEditAnsibleRepository, } from 'src/permissions';
import { parsePulpIDFromURL, taskAlert } from 'src/utilities';
var initialRepository = {
    name: '',
    description: '',
    retain_repo_versions: 1,
    pulp_labels: {},
    remote: null,
};
export var AnsibleRepositoryEdit = Page({
    breadcrumbs: function (_a) {
        var name = _a.name;
        return [
            { url: formatPath(Paths.ansibleRepositories), name: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Repositories"], ["Repositories"]))) },
            name && {
                url: formatPath(Paths.ansibleRepositoryDetail, { name: name }),
                name: name,
            },
            name ? { name: t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Edit"], ["Edit"]))) } : { name: t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Add"], ["Add"]))) },
        ].filter(Boolean);
    },
    condition: function (context, item) {
        return canAddAnsibleRepository(context) || canEditAnsibleRepository(context, item);
    },
    displayName: 'AnsibleRepositoryEdit',
    errorTitle: t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["Repository could not be displayed."], ["Repository could not be displayed."]))),
    query: function (_a) {
        var name = _a.name;
        return AnsibleRepositoryAPI.list({ name: name })
            .then(function (_a) {
            var results = _a.data.results;
            return results[0];
        })
            .then(function (repository) {
            return AnsibleRepositoryAPI.myPermissions(parsePulpIDFromURL(repository.pulp_href))
                .then(function (_a) {
                var permissions = _a.data.permissions;
                return permissions;
            })
                .catch(function (e) {
                console.error(e);
                return [];
            })
                .then(function (my_permissions) { return (__assign(__assign({}, repository), { my_permissions: my_permissions })); });
        });
    },
    title: function (_a) {
        var name = _a.name;
        return name || t(templateObject_5 || (templateObject_5 = __makeTemplateObject(["Add new repository"], ["Add new repository"])));
    },
    transformParams: function (_a) {
        var name = _a.name, rest = __rest(_a, ["name"]);
        return (__assign(__assign({}, rest), { name: name !== '_' ? name : null }));
    },
    render: function (item, _a) {
        var navigate = _a.navigate, queueAlert = _a.queueAlert, state = _a.state, setState = _a.setState;
        if (!state.repositoryToEdit) {
            var repositoryToEdit_1 = __assign(__assign({}, initialRepository), item);
            setState({ repositoryToEdit: repositoryToEdit_1, errorMessages: {} });
        }
        var repositoryToEdit = state.repositoryToEdit, errorMessages = state.errorMessages;
        if (!repositoryToEdit) {
            return null;
        }
        var saveRepository = function (_a) {
            var createDistribution = _a.createDistribution, hideFromSearch = _a.hideFromSearch, pipeline = _a.pipeline;
            var repositoryToEdit = state.repositoryToEdit;
            var data = __assign({}, repositoryToEdit);
            // prevent "This field may not be blank." for nullable fields
            Object.keys(data).forEach(function (k) {
                if (data[k] === '') {
                    data[k] = null;
                }
            });
            if (item) {
                delete data.last_sync_task;
                delete data.last_synced_metadata_time;
                delete data.latest_version_href;
                delete data.pulp_created;
                delete data.pulp_href;
                delete data.versions_href;
            }
            data.pulp_labels || (data.pulp_labels = {});
            if (hideFromSearch) {
                data.pulp_labels.hide_from_search = '';
            }
            else {
                delete data.pulp_labels.hide_from_search;
            }
            if (pipeline) {
                data.pulp_labels.pipeline = pipeline;
            }
            else {
                delete data.pulp_labels.pipeline;
            }
            var promise = !item
                ? AnsibleRepositoryAPI.create(data).then(function (_a) {
                    var newData = _a.data;
                    queueAlert({
                        variant: 'success',
                        title: t(templateObject_6 || (templateObject_6 = __makeTemplateObject(["Successfully created repository ", ""], ["Successfully created repository ", ""])), data.name),
                    });
                    return newData.pulp_href;
                })
                : AnsibleRepositoryAPI.update(parsePulpIDFromURL(item.pulp_href), data).then(function (_a) {
                    var task = _a.data;
                    queueAlert(taskAlert(task, t(templateObject_7 || (templateObject_7 = __makeTemplateObject(["Update started for repository ", ""], ["Update started for repository ", ""])), data.name)));
                    return item.pulp_href;
                });
            if (createDistribution) {
                promise = promise
                    .then(function (pulp_href) {
                    return AnsibleDistributionAPI.create({
                        name: data.name,
                        base_path: data.name,
                        repository: pulp_href,
                    });
                })
                    .then(function (_a) {
                    var task = _a.data;
                    return queueAlert(taskAlert(task, t(templateObject_8 || (templateObject_8 = __makeTemplateObject(["Creation started for distribution ", ""], ["Creation started for distribution ", ""])), data.name)));
                });
            }
            promise
                .then(function () {
                setState({
                    errorMessages: {},
                    repositoryToEdit: undefined,
                });
                navigate(formatPath(Paths.ansibleRepositoryDetail, {
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
            setState({ errorMessages: {}, repositoryToEdit: undefined });
            navigate(item
                ? formatPath(Paths.ansibleRepositoryDetail, {
                    name: item.name,
                })
                : formatPath(Paths.ansibleRepositories));
        };
        return (React.createElement(AnsibleRepositoryForm, { allowEditName: !item, errorMessages: errorMessages, onCancel: closeModal, onSave: saveRepository, repository: repositoryToEdit, updateRepository: function (r) { return setState({ repositoryToEdit: r }); } }));
    },
});
export default AnsibleRepositoryEdit;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;
//# sourceMappingURL=edit.js.map