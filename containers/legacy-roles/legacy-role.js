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
import { Trans, t } from '@lingui/macro';
import { DataList, DataListCell, DataListItem, DataListItemCells, DataListItemRow, LabelGroup, Nav, NavItem, NavList, Panel, Text, TextContent, TextVariants, } from '@patternfly/react-core';
import { ExternalLinkAltIcon } from '@patternfly/react-icons';
import React from 'react';
import { Link } from 'react-router-dom';
import { LegacyRoleAPI } from 'src/api/legacyrole';
import { EmptyStateNoData } from 'src/components';
import { Breadcrumbs, ClipboardCopy, DateComponent, LoadingPageWithHeader, Logo, Main, Tag, } from 'src/components';
import { AppContext } from 'src/loaders/app-context';
import { Paths, formatPath } from 'src/paths';
import { chipGroupProps, withRouter } from 'src/utilities';
import './legacy-roles.scss';
var LegacyRoleInstall = /** @class */ (function (_super) {
    __extends(LegacyRoleInstall, _super);
    function LegacyRoleInstall() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LegacyRoleInstall.prototype.render = function () {
        var installCMD = "ansible-galaxy role install ".concat(this.props.github_user, ".").concat(this.props.name);
        return (React.createElement(React.Fragment, null,
            React.createElement("h1", null,
                React.createElement(Trans, null, "Installation:")),
            React.createElement(ClipboardCopy, { isCode: true, isReadOnly: true, variant: 'expansion' }, installCMD)));
    };
    return LegacyRoleInstall;
}(React.Component));
var LegacyRoleDocs = /** @class */ (function (_super) {
    __extends(LegacyRoleDocs, _super);
    function LegacyRoleDocs(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            readme_html: null,
        };
        return _this;
    }
    LegacyRoleDocs.prototype.componentDidMount = function () {
        var _this = this;
        var url = 'roles/' + this.props.role.id + '/content';
        LegacyRoleAPI.get(url).then(function (response) {
            _this.setState(function () { return ({
                readme_html: response.data.readme_html,
            }); });
        });
    };
    LegacyRoleDocs.prototype.render = function () {
        return (React.createElement("div", { className: 'legacy-role-readme-container' },
            React.createElement("div", { className: 'pf-c-content', dangerouslySetInnerHTML: { __html: this.state.readme_html } })));
    };
    return LegacyRoleDocs;
}(React.Component));
var LegacyRoleVersion = /** @class */ (function (_super) {
    __extends(LegacyRoleVersion, _super);
    function LegacyRoleVersion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LegacyRoleVersion.prototype.render = function () {
        return (React.createElement(DataListItemRow, null,
            React.createElement(DataListCell, { alignRight: true }, this.props.role_version.version),
            React.createElement(DataListCell, { alignRight: true },
                React.createElement(Trans, null,
                    "Released ",
                    React.createElement(DateComponent, { date: this.props.role_version.created }))),
            React.createElement(DataListCell, { alignRight: true },
                React.createElement("a", { href: this.props.role_version.download_url, target: '_blank', rel: 'noreferrer' }))));
    };
    return LegacyRoleVersion;
}(React.Component));
var LegacyRoleVersions = /** @class */ (function (_super) {
    __extends(LegacyRoleVersions, _super);
    function LegacyRoleVersions(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            role_versions: [],
            loading: true,
        };
        return _this;
    }
    LegacyRoleVersions.prototype.componentDidMount = function () {
        var _this = this;
        var url = 'roles/' + this.props.role.id + '/versions';
        LegacyRoleAPI.get(url).then(function (response) {
            _this.setState(function () { return ({
                role_versions: response.data.results,
                loading: false,
            }); });
        });
    };
    LegacyRoleVersions.prototype.render = function () {
        return (React.createElement("div", { id: 'versions-div' },
            !this.state.loading &&
                this.state.role_versions &&
                this.state.role_versions.length == 0 ? (React.createElement(EmptyStateNoData, { title: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["No versions"], ["No versions"]))), description: t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["The role is versionless and will always install from the head/main/master branch."], ["The role is versionless and will always install from the head/main/master branch."]))) })) : (''),
            React.createElement(DataList, { "aria-label": t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["List of versions"], ["List of versions"]))) }, this.state.role_versions.reverse().map(function (rversion) { return (React.createElement(DataListItem, { key: rversion.name, "aria-labelledby": 'compact-item2' },
                React.createElement(LegacyRoleVersion, { role_version: rversion }))); }))));
    };
    return LegacyRoleVersions;
}(React.Component));
var LegacyRole = /** @class */ (function (_super) {
    __extends(LegacyRole, _super);
    function LegacyRole(props) {
        var _this = _super.call(this, props) || this;
        var roleUser = props.routeParams.username;
        var roleName = props.routeParams.name;
        _this.state = {
            id: null,
            role: null,
            github_user: roleUser,
            name: roleName,
            activeItem: 'install',
        };
        _this.onSelect = function (result) {
            _this.setState({
                activeItem: result.itemId,
            });
        };
        return _this;
    }
    LegacyRole.prototype.componentDidMount = function () {
        var _this = this;
        var url = 'roles/?github_user=' +
            this.state.github_user +
            '&name=' +
            this.state.name;
        LegacyRoleAPI.get(url).then(function (response) {
            var github_user = _this.state.github_user;
            var name = _this.state.name;
            var activeItem = _this.state.activeItem;
            var role = response.data.results[0];
            _this.setState(function () { return ({
                id: role.id,
                role: role,
                github_user: github_user,
                name: name,
                activeItem: activeItem,
            }); });
        });
    };
    LegacyRole.prototype.onSelect = function (e) {
        this.setState(function () { return ({
            activeItem: e.itemId,
        }); });
    };
    LegacyRole.prototype.render = function () {
        var _this = this;
        var role = this.state.role;
        if (!role) {
            return React.createElement(LoadingPageWithHeader, null);
        }
        var repository = 'https://github.com/' + role.github_user + '/' + role.github_repo;
        var namespace = role.summary_fields.namespace;
        var namespace_url = formatPath(Paths.legacyNamespace, {
            namespaceid: namespace.id,
        });
        var release_date = null;
        var release_name = null;
        var ix = role.summary_fields.versions.length - 1;
        var lv = role.summary_fields.versions[ix];
        if (lv !== undefined && lv !== null) {
            release_date = lv.release_date;
            release_name = lv.name;
        }
        if (release_date === undefined ||
            release_date === null ||
            release_date === '') {
            release_date = role.modified;
        }
        if (release_name === undefined ||
            release_name === null ||
            release_name === '') {
            release_name = '';
        }
        var header_cells = [];
        if (this.state.role !== undefined && this.state.role !== null) {
            header_cells.push(React.createElement(DataListCell, { isFilled: false, alignRight: false, key: 'ns' },
                React.createElement(Logo, { alt: t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["", " logo"], ["", " logo"])), role.github_user), fallbackToDefault: true, image: role.summary_fields.namespace.avatar_url, size: '70px', unlockWidth: true, width: '97px' }),
                React.createElement(Link, { to: namespace_url }, namespace.name)));
            header_cells.push(React.createElement(DataListCell, { key: 'content' },
                React.createElement("div", null,
                    React.createElement(TextContent, null,
                        React.createElement(Text, { component: TextVariants.h1 },
                            namespace.name,
                            ".",
                            this.state.role.name))),
                React.createElement("div", { className: 'hub-entry' }, this.state.role.description),
                React.createElement("div", { className: 'hub-entry' },
                    React.createElement(LabelGroup, __assign({}, chipGroupProps()), this.state.role.summary_fields.tags.map(function (tag, index) { return (React.createElement(Tag, { key: index }, tag)); })))));
            header_cells.push(React.createElement(DataListCell, { isFilled: false, alignRight: true, key: 'version' },
                React.createElement("div", { className: 'hub-right-col hub-entry' },
                    React.createElement(Trans, null,
                        "Updated ",
                        React.createElement(DateComponent, { date: release_date }))),
                release_name && React.createElement("div", { className: 'hub-entry' }, release_name),
                React.createElement("div", { className: 'hub-entry' },
                    React.createElement("a", { href: repository },
                        "Github Repository ",
                        React.createElement(ExternalLinkAltIcon, null)))));
        }
        var table = {
            install: { title: 'Install' },
            documentation: { title: 'Documentation' },
            versions: { title: 'Versions' },
        };
        var renderContent = function () {
            if (_this.state.activeItem == 'install') {
                return (React.createElement(LegacyRoleInstall, { role: _this.state.role, github_user: _this.state.github_user, name: _this.state.name, id: _this.state.role.id }));
            }
            else if (_this.state.activeItem === 'documentation') {
                return (React.createElement(LegacyRoleDocs, { role: _this.state.role, github_user: _this.state.github_user, name: _this.state.name, id: _this.state.role.id }));
            }
            else if (_this.state.activeItem === 'versions') {
                return (React.createElement(LegacyRoleVersions, { role: _this.state.role, github_user: _this.state.github_user, name: _this.state.name, id: _this.state.role.id }));
            }
            else {
                return React.createElement("div", null);
            }
        };
        var breadcrumbs = [
            {
                name: 'Legacy Roles',
                url: formatPath(Paths.legacyRoles, {}),
            },
            {
                name: this.state.github_user,
                url: formatPath(Paths.legacyNamespace, { namespaceid: namespace.id }),
            },
            {
                name: this.state.name,
                url: formatPath(Paths.legacyRole, {
                    username: this.state.github_user,
                    name: this.state.name,
                }),
            },
        ];
        return (React.createElement(React.Fragment, null,
            React.createElement(DataList, { "aria-label": t(templateObject_5 || (templateObject_5 = __makeTemplateObject(["Role Header"], ["Role Header"]))) },
                React.createElement(DataListItem, { "data-cy": 'LegacyRoleListItem' },
                    React.createElement(DataListItemRow, null,
                        React.createElement(Breadcrumbs, { links: breadcrumbs })),
                    React.createElement(DataListItemRow, null,
                        React.createElement(DataListItemCells, { dataListCells: header_cells })))),
            React.createElement(Panel, { isScrollable: true },
                React.createElement(Nav, { theme: 'light', variant: 'tertiary', onSelect: this.onSelect },
                    React.createElement(NavList, null, Object.keys(table).map(function (key) {
                        return (React.createElement(NavItem, { isActive: _this.state.activeItem === key, title: table[key].title, key: key, itemId: key }, table[key].title));
                    })))),
            React.createElement(Main, null,
                React.createElement("section", { className: 'body' }, renderContent()))));
    };
    return LegacyRole;
}(React.Component));
export default withRouter(LegacyRole);
LegacyRole.contextType = AppContext;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
//# sourceMappingURL=legacy-role.js.map