var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { t } from '@lingui/macro';
import { List, ListItem } from '@patternfly/react-core';
import React from 'react';
import { Link } from 'react-router-dom';
import { EmptyStateNoData, HelperText } from 'src/components';
import 'src/containers/collection-detail/collection-dependencies.scss';
export var CollectionDependenciesList = function (_a) {
    var collection = _a.collection, dependencies_repos = _a.dependencies_repos;
    var dependencies = collection.collection_version.dependencies;
    if (!Object.keys(dependencies).length) {
        return (React.createElement(EmptyStateNoData, { title: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["No dependencies"], ["No dependencies"]))), description: t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Collection does not have dependencies."], ["Collection does not have dependencies."]))) }));
    }
    return (React.createElement(List, { className: 'hub-c-list-dependencies' }, dependencies_repos.map(function (dependency, i) {
        return listDep(dependency, i, dependencies);
    })));
};
var listDep = function (dependency, i, dependencies) {
    var fqn = dependency.namespace + '.' + dependency.name;
    var version_range = dependencies[fqn];
    if (dependency.path) {
        return (React.createElement(ListItem, { key: i, style: { marginRight: '70px' } },
            React.createElement(Link, { to: dependency.path }, fqn),
            ": ",
            version_range));
    }
    else {
        return (React.createElement(ListItem, { key: i, style: { marginRight: '70px' } },
            fqn,
            ": ",
            version_range,
            ' ',
            React.createElement(HelperText, { content: t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["No version of ", " exists that matches ", "."], ["No version of ", " exists that matches ", "."])), fqn, version_range) })));
    }
};
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=collection-dependencies-list.js.map