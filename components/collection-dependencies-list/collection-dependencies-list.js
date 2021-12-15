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
import { EmptyStateNoData } from 'src/components';
import { formatPath, Paths } from 'src/paths';
import 'src/containers/collection-detail/collection-dependencies.scss';
var CollectionDependenciesList = /** @class */ (function (_super) {
    __extends(CollectionDependenciesList, _super);
    function CollectionDependenciesList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CollectionDependenciesList.prototype.render = function () {
        var _this = this;
        var _a = this.props, collection = _a.collection, repo = _a.repo;
        var dependencies = collection.latest_version.metadata.dependencies;
        if (!Object.keys(dependencies).length) {
            return (React.createElement(EmptyStateNoData, { title: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["No dependencies"], ["No dependencies"]))), description: t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Collection does not have dependencies."], ["Collection does not have dependencies."]))) }));
        }
        return (React.createElement(List, { variant: ListVariant.inline, className: 'dependencies-list' }, Object.keys(dependencies).map(function (dependency, i) { return (React.createElement(ListItem, { key: i, style: { marginRight: '70px' } },
            React.createElement(Link, { to: formatPath(Paths.collectionByRepo, {
                    collection: _this.splitDependencyName(dependency).collection,
                    namespace: _this.splitDependencyName(dependency).namespace,
                    repo: repo,
                }, _this.separateVersion(dependencies[dependency])) }, _this.splitDependencyName(dependency).collection))); })));
    };
    CollectionDependenciesList.prototype.splitDependencyName = function (dependency) {
        var _a = dependency.split('.'), namespace = _a[0], collection = _a[1];
        return { namespace: namespace, collection: collection };
    };
    CollectionDependenciesList.prototype.separateVersion = function (version) {
        var v = version.match(/((\d+\.*)+)/);
        return v ? { version: v[0] } : {};
    };
    return CollectionDependenciesList;
}(React.Component));
export { CollectionDependenciesList };
var templateObject_1, templateObject_2;
//# sourceMappingURL=collection-dependencies-list.js.map