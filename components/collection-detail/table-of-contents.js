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
import { capitalize } from 'lodash';
import { Link } from 'react-router-dom';
import { Nav, NavExpandable, NavItem, NavList, SearchInput, Toolbar, ToolbarGroup, ToolbarItem, } from '@patternfly/react-core';
import { Paths, formatPath } from 'src/paths';
import { ParamHelper, sanitizeDocsUrls } from 'src/utilities';
import { AppContext } from 'src/loaders/app-context';
var DocsEntry = /** @class */ (function () {
    function DocsEntry() {
    }
    return DocsEntry;
}());
var Table = /** @class */ (function () {
    function Table() {
    }
    return Table;
}());
var TableOfContents = /** @class */ (function (_super) {
    __extends(TableOfContents, _super);
    function TableOfContents(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            collapsedCategories: [],
        };
        return _this;
    }
    TableOfContents.prototype.render = function () {
        var _this = this;
        var _a = this.props, className = _a.className, docs_blob = _a.docs_blob, updateParams = _a.updateParams, params = _a.params;
        // There's a lot of heavy processing that goes into formatting the table
        // variable. To prevent running everything each time the component renders,
        // cache the value as an object property.
        // This is a lazy anti pattern. I should be using memoization or something
        // like that, but the react docs recommend using a third party memoization
        // library and I am not going to add extra dependencies just for this
        // component https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html#what-about-memoization
        if (!this.tableCache || this.docsBlobCache !== docs_blob) {
            this.tableCache = this.parseLinks(docs_blob);
            this.docsBlobCache = docs_blob;
        }
        var table = this.tableCache;
        return (React.createElement("div", { className: className },
            React.createElement(Toolbar, null,
                React.createElement(ToolbarGroup, null,
                    React.createElement(ToolbarItem, null,
                        React.createElement(SearchInput, { ref: this.props.searchBarRef, value: params.keywords, onChange: function (val) {
                                updateParams(ParamHelper.setParam(params, 'keywords', val));
                            }, onClear: function () {
                                return updateParams(ParamHelper.setParam(params, 'keywords', ''));
                            }, "aria-label": 'find-content', placeholder: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Find content"], ["Find content"]))) })))),
            React.createElement(Nav, { theme: 'light' },
                React.createElement(NavList, null, Object.keys(table).map(function (key) {
                    return table[key].length === 0
                        ? null
                        : _this.renderLinks(table[key], key, _this.props.params.keywords || '');
                })))));
    };
    TableOfContents.prototype.parseLinks = function (docs_blob) {
        var _a = this.props, namespace = _a.namespace, collection = _a.collection;
        var baseUrlParams = {
            namespace: namespace,
            collection: collection,
            repo: this.context.selectedRepo,
        };
        var table = {
            documentation: [],
            modules: [],
            roles: [],
            plugins: [],
            playbooks: [],
        };
        table.documentation.push({
            display: t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Readme"], ["Readme"]))),
            url: formatPath(Paths.collectionDocsIndexByRepo, baseUrlParams),
            type: 'docs',
            name: 'readme',
        });
        if (docs_blob.documentation_files) {
            for (var _i = 0, _b = docs_blob.documentation_files; _i < _b.length; _i++) {
                var file = _b[_i];
                var url = sanitizeDocsUrls(file.name);
                table.documentation.push({
                    display: this.capitalize(file.name.split('.')[0].split('_').join(' ')),
                    url: formatPath(Paths.collectionDocsPageByRepo, __assign(__assign({}, baseUrlParams), { page: url })),
                    // selected: selectedType === 'docs' && selectedName === url,
                    type: 'docs',
                    name: url,
                });
            }
        }
        if (docs_blob.contents) {
            for (var _c = 0, _d = docs_blob.contents; _c < _d.length; _c++) {
                var content = _d[_c];
                switch (content.content_type) {
                    case 'role':
                        table.roles.push(this.getContentEntry(content, baseUrlParams));
                        break;
                    case 'module':
                        table.modules.push(this.getContentEntry(content, baseUrlParams));
                        break;
                    case 'playbook':
                        table.playbooks.push(this.getContentEntry(content, baseUrlParams));
                        break;
                    default:
                        table.plugins.push(this.getContentEntry(content, baseUrlParams));
                        break;
                }
            }
        }
        // Sort docs
        for (var _e = 0, _f = Object.keys(table); _e < _f.length; _e++) {
            var k = _f[_e];
            table[k].sort(function (a, b) {
                // Make sure that anything starting with _ goes to the bottom
                // of the list
                if (a.display.startsWith('_') && !b.display.startsWith('_')) {
                    return 1;
                }
                if (!a.display.startsWith('_') && b.display.startsWith('_')) {
                    return -1;
                }
                return a.display > b.display ? 1 : -1;
            });
        }
        return table;
    };
    TableOfContents.prototype.renderLinks = function (links, title, filterString) {
        var _this = this;
        var isExpanded = !this.state.collapsedCategories.includes(title);
        var filteredLinks = links.filter(function (link) {
            return link.display.toLowerCase().includes(filterString.toLowerCase());
        });
        return (React.createElement(NavExpandable, { key: title, title: capitalize(title + " (" + filteredLinks.length + ")"), isExpanded: isExpanded, isActive: this.getSelectedCategory() === title }, filteredLinks.map(function (link, index) { return (React.createElement(NavItem, { key: index, isActive: _this.isSelected(link) },
            React.createElement(Link, { style: {
                    textOverflow: 'ellipses',
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                }, to: link.url +
                    (Object.keys(_this.props.params).length != 0
                        ? '?' + ParamHelper.getQueryString(_this.props.params)
                        : '') },
                React.createElement("span", { style: {
                        textOverflow: 'ellipsis',
                        overflow: 'hidden',
                        whiteSpace: 'nowrap',
                        display: 'block',
                    } }, link.display)))); })));
    };
    TableOfContents.prototype.isSelected = function (entry) {
        // the readme's url is always docs/, so load it when the name is null
        if (!this.props.selectedName && entry.name === 'readme') {
            return true;
        }
        return (
        // selected name and type are the values found for type and name
        // in the page url
        this.props.selectedName === entry.name &&
            this.props.selectedType === entry.type);
    };
    TableOfContents.prototype.getSelectedCategory = function () {
        var selectedType = this.props.selectedType;
        if (!selectedType || selectedType === 'docs') {
            return 'documentation';
        }
        if (selectedType === 'role') {
            return 'roles';
        }
        if (selectedType === 'module') {
            return 'modules';
        }
        return 'plugins';
    };
    TableOfContents.prototype.capitalize = function (s) {
        return s.slice(0, 1).toUpperCase() + s.slice(1);
    };
    TableOfContents.prototype.getContentEntry = function (content, base) {
        return {
            display: content.content_name,
            url: formatPath(Paths.collectionContentDocsByRepo, __assign(__assign({}, base), { type: content.content_type, name: content.content_name })),
            name: content.content_name,
            type: content.content_type,
        };
    };
    TableOfContents.contextType = AppContext;
    return TableOfContents;
}(React.Component));
export { TableOfContents };
var templateObject_1, templateObject_2;
//# sourceMappingURL=table-of-contents.js.map