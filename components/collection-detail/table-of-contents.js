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
import { Nav, NavExpandable, NavItem, NavList, SearchInput, Toolbar, ToolbarGroup, ToolbarItem, } from '@patternfly/react-core';
import { capitalize } from 'lodash';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'src/loaders/app-context';
import { Paths, formatPath } from 'src/paths';
import { ParamHelper, sanitizeDocsUrls } from 'src/utilities';
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
export var TableOfContents = function (props) {
    var _a = useState(null), docsBlob = _a[0], setDocsBlob = _a[1];
    var _b = useState(null), table = _b[0], setTable = _b[1];
    var context = useContext();
    var collapsedCategories = [];
    var className = props.className, docs_blob = props.docs_blob, updateParams = props.updateParams, params = props.params;
    if (!table || docsBlob !== docs_blob) {
        setTable(parseLinks(docs_blob, props, context));
        setDocsBlob(docs_blob);
    }
    return (React.createElement("div", { className: className },
        React.createElement(Toolbar, null,
            React.createElement(ToolbarGroup, null,
                React.createElement(ToolbarItem, null,
                    React.createElement(SearchInput, { ref: props.searchBarRef, value: params.keywords, onChange: function (val) {
                            updateParams(ParamHelper.setParam(params, 'keywords', val));
                        }, onClear: function () {
                            return updateParams(ParamHelper.setParam(params, 'keywords', ''));
                        }, "aria-label": t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["find-content"], ["find-content"]))), placeholder: t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Find content"], ["Find content"]))) })))),
        React.createElement(Nav, { theme: 'light' },
            React.createElement(NavList, null, table != null &&
                Object.keys(table).map(function (key) {
                    return table[key].length === 0
                        ? null
                        : renderLinks(table[key], key, props.params.keywords || '', collapsedCategories, props);
                })))));
};
function parseLinks(docs_blob, props, context) {
    var namespace = props.namespace, collection = props.collection;
    var baseUrlParams = {
        namespace: namespace,
        collection: collection,
        repo: context.selectedRepo,
    };
    var table = {
        documentation: [],
        modules: [],
        roles: [],
        plugins: [],
        playbooks: [],
    };
    table.documentation.push({
        display: t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Readme"], ["Readme"]))),
        url: formatPath(Paths.collectionDocsIndexByRepo, baseUrlParams),
        type: 'docs',
        name: 'readme',
    });
    if (docs_blob.documentation_files) {
        for (var _i = 0, _a = docs_blob.documentation_files; _i < _a.length; _i++) {
            var file = _a[_i];
            var url = sanitizeDocsUrls(file.name);
            table.documentation.push({
                display: my_capitalize(file.name.split('.')[0].split('_').join(' ')),
                url: formatPath(Paths.collectionDocsPageByRepo, __assign(__assign({}, baseUrlParams), { page: url })),
                // selected: selectedType === 'docs' && selectedName === url,
                type: 'docs',
                name: url,
            });
        }
    }
    if (docs_blob.contents) {
        for (var _b = 0, _c = docs_blob.contents; _b < _c.length; _b++) {
            var content = _c[_b];
            switch (content.content_type) {
                case 'role':
                    table.roles.push(getContentEntry(content, baseUrlParams));
                    break;
                case 'module':
                    table.modules.push(getContentEntry(content, baseUrlParams));
                    break;
                case 'playbook':
                    table.playbooks.push(getContentEntry(content, baseUrlParams));
                    break;
                default:
                    table.plugins.push(getContentEntry(content, baseUrlParams));
                    break;
            }
        }
    }
    // Sort docs
    for (var _d = 0, _e = Object.keys(table); _d < _e.length; _d++) {
        var k = _e[_d];
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
}
function renderLinks(links, title, filterString, collapsedCategories, props) {
    var isExpanded = !collapsedCategories.includes(title);
    var filteredLinks = links.filter(function (link) {
        return link.display.toLowerCase().includes(filterString.toLowerCase());
    });
    return (React.createElement(NavExpandable, { key: title, title: capitalize("".concat(title, " (").concat(filteredLinks.length, ")")), isExpanded: isExpanded, isActive: getSelectedCategory(props) === title }, filteredLinks.map(function (link, index) { return (React.createElement(NavItem, { key: index, isActive: isSelected(link, props) },
        React.createElement(Link, { style: {
                textOverflow: 'ellipses',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
            }, to: link.url +
                (Object.keys(props.params).length != 0
                    ? '?' + ParamHelper.getQueryString(props.params)
                    : '') },
            React.createElement("span", { style: {
                    textOverflow: 'ellipsis',
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                    display: 'block',
                } }, link.display)))); })));
}
function isSelected(entry, props) {
    // the readme's url is always docs/, so load it when the name is null
    if (!props.selectedName && entry.name === 'readme') {
        return true;
    }
    return (
    // selected name and type are the values found for type and name
    // in the page url
    props.selectedName === entry.name && props.selectedType === entry.type);
}
function getSelectedCategory(props) {
    var selectedType = props.selectedType;
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
}
function my_capitalize(s) {
    return s.slice(0, 1).toUpperCase() + s.slice(1);
}
function getContentEntry(content, base) {
    return {
        display: content.content_name,
        url: formatPath(Paths.collectionContentDocsByRepo, __assign(__assign({}, base), { type: content.content_type, name: content.content_name })),
        name: content.content_name,
        type: content.content_type,
    };
}
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=table-of-contents.js.map