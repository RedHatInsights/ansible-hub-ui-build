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
import { Link } from 'react-router-dom';
import { List, ListItem, ListVariant } from '@patternfly/react-core';
import { EmptyStateNoData, HelperText } from 'src/components';
import 'src/containers/collection-detail/collection-dependencies.scss';
var CollectionDependenciesList = /** @class */ (function (_super) {
    __extends(CollectionDependenciesList, _super);
    function CollectionDependenciesList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CollectionDependenciesList.prototype.render = function () {
        var _this = this;
        var _a = this.props, collection = _a.collection, dependencies_repos = _a.dependencies_repos;
        var dependencies = collection.latest_version.metadata.dependencies;
        if (!Object.keys(dependencies).length) {
            return (React.createElement(EmptyStateNoData, { title: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["No dependencies"], ["No dependencies"]))), description: t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Collection does not have dependencies."], ["Collection does not have dependencies."]))) }));
        }
        return (React.createElement(List, { variant: ListVariant.inline, className: 'hub-c-list-dependencies' }, dependencies_repos.map(function (dependency, i) {
            return _this.listDep(dependency, i, dependencies);
        })));
    };
    CollectionDependenciesList.prototype.listDep = function (dependency, i, dependencies) {
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
                React.createElement(HelperText, { content: t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["No version of ", " exists that matches ", "."], ["No version of ", " exists that matches ", "."])), fqn, version_range) })));
        }
    };
    return CollectionDependenciesList;
}(React.Component));
export { CollectionDependenciesList };
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=collection-dependencies-list.js.map