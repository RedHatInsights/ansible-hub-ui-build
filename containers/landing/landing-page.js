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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { Trans, t } from '@lingui/macro';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { AlertList, BaseHeader, LandingPageCard, Main, closeAlertMixin, } from 'src/components';
import { AppContext } from 'src/loaders/app-context';
import { Paths, formatPath } from 'src/paths';
import { withRouter } from 'src/utilities';
import './landing-page.scss';
var LandingPage = /** @class */ (function (_super) {
    __extends(LandingPage, _super);
    function LandingPage(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            alerts: [],
            redirect: false,
        };
        return _this;
    }
    LandingPage.prototype.componentDidMount = function () {
        var ai_deny_index = this.context.featureFlags.ai_deny_index;
        if (!ai_deny_index) {
            this.setState({ redirect: true });
        }
    };
    LandingPage.prototype.render = function () {
        var _this = this;
        var _a = this.state, alerts = _a.alerts, redirect = _a.redirect;
        if (redirect) {
            setTimeout(function () { return _this.props.navigate(formatPath(Paths.collections)); });
            return null;
        }
        return (React.createElement(React.Fragment, null,
            React.createElement(AlertList, { alerts: alerts, closeAlert: function (i) { return _this.closeAlert(i); } }),
            React.createElement(BaseHeader, { title: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Welcome to Beta Galaxy"], ["Welcome to Beta Galaxy"]))) }),
            React.createElement(Main, null,
                React.createElement("div", { style: {
                        display: 'flex',
                        flexWrap: 'wrap',
                        alignContent: 'flex-start',
                        marginLeft: '-24px',
                    } },
                    React.createElement(LandingPageCard, { title: t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Download"], ["Download"]))), body: React.createElement(React.Fragment, null,
                            React.createElement("p", null, t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Jump-start your automation project with great content from the Ansible community. Galaxy provides pre-packaged units of work known to Ansible as roles and collections."], ["Jump-start your automation project with great content from the Ansible community. Galaxy provides pre-packaged units of work known to Ansible as roles and collections."])))),
                            React.createElement("br", null),
                            React.createElement("p", null, t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["Content from roles and collections can be referenced in Ansible PlayBooks and immediately put to work. You'll find content for provisioning infrastructure, deploying applications, and all of the tasks you do everyday."], ["Content from roles and collections can be referenced in Ansible PlayBooks and immediately put to work. You'll find content for provisioning infrastructure, deploying applications, and all of the tasks you do everyday."]))),
                                ' '),
                            React.createElement("br", null),
                            React.createElement("p", null,
                                React.createElement(Trans, null,
                                    "Use the",
                                    ' ',
                                    React.createElement(Link, { to: formatPath(Paths.collections) },
                                        "Search page",
                                        ' '),
                                    "to find content for your project, then download them onto your Ansible host using",
                                    ' ',
                                    React.createElement("a", { href: 'https://docs.ansible.com/ansible/latest/reference_appendices/galaxy.html#the-command-line-tool', target: '_blank', rel: 'noreferrer' }, "ansible-galaxy"),
                                    ", the command line tool that comes bundled with Ansible."))) }),
                    React.createElement(LandingPageCard, { title: t(templateObject_5 || (templateObject_5 = __makeTemplateObject(["Share"], ["Share"]))), body: React.createElement(React.Fragment, null,
                            React.createElement("p", null, t(templateObject_6 || (templateObject_6 = __makeTemplateObject(["Help other Ansible users by sharing the awesome roles and collections you create."], ["Help other Ansible users by sharing the awesome roles and collections you create."])))),
                            React.createElement("br", null),
                            React.createElement("p", null, t(templateObject_7 || (templateObject_7 = __makeTemplateObject(["Maybe you have automation for installing and configuring a popular software package, or for deploying software built by your company. Whatever it is, use Galaxy to share it with the community."], ["Maybe you have automation for installing and configuring a popular software package, or for deploying software built by your company. Whatever it is, use Galaxy to share it with the community."])))),
                            React.createElement("br", null),
                            React.createElement("p", null,
                                React.createElement(Trans, null,
                                    "Red Hat is working on exciting new Ansible content development capabilities within the context of",
                                    ' ',
                                    React.createElement("a", { href: 'https://www.redhat.com/en/engage/project-wisdom?extIdCarryOver=true&sc_cid=701f2000001OH6uAAG', target: '_blank', rel: 'noopener noreferrer' }, "Ansible Lightspeed"),
                                    ' ',
                                    "to help other automators build Ansible content. Your roles and collections may be used as training data for a machine learning model that provides Ansible automation content recommendations. If you have concerns, please contact the Ansible team at",
                                    ' ',
                                    React.createElement("a", { href: 'mailto:ansible-content-ai@redhat.com' }, "ansible-content-ai@redhat.com")))) }),
                    React.createElement(LandingPageCard, { title: t(templateObject_8 || (templateObject_8 = __makeTemplateObject(["Featured"], ["Featured"]))), body: React.createElement(React.Fragment, null,
                            React.createElement("b", null,
                                React.createElement("p", null, t(templateObject_9 || (templateObject_9 = __makeTemplateObject(["AnsibleFest"], ["AnsibleFest"]))))),
                            React.createElement("br", null),
                            React.createElement("p", null,
                                React.createElement("a", { href: 'https://www.redhat.com/en/summit/ansiblefest?intcmp=7013a0000034lvmAAA', target: '_blank', rel: 'noreferrer' },
                                    React.createElement("img", { width: '100%', alt: 'Ansible Fest at Red Hat Summit May 23rd to 25th 2023', src: 'https://www.ansible.com/hubfs/rh-2023-summit-ansiblefest-ansible-galaxy-site-200x200.png' }))),
                            React.createElement("hr", { style: {
                                    boxSizing: 'content-box',
                                    height: 0,
                                    marginTop: 20,
                                    marginBottom: 20,
                                    border: 0,
                                    borderTop: '1px solid #f1f1f1',
                                } }),
                            React.createElement("p", null,
                                React.createElement("b", null, t(templateObject_10 || (templateObject_10 = __makeTemplateObject(["Extend the power of Ansible to your entire team."], ["Extend the power of Ansible to your entire team."]))),
                                    ' ')),
                            React.createElement("br", null),
                            React.createElement("p", null, t(templateObject_11 || (templateObject_11 = __makeTemplateObject(["Try Red Hat Ansible Automation Platform"], ["Try Red Hat Ansible Automation Platform"])))),
                            React.createElement("br", null),
                            React.createElement("p", null,
                                React.createElement("a", { href: 'https://www.redhat.com/en/technologies/management/ansible/try-it?sc_cid=7013a0000030vCCAAY', target: '_blank', rel: 'noreferrer' }, t(templateObject_12 || (templateObject_12 = __makeTemplateObject(["Get the trial"], ["Get the trial"])))))) }),
                    React.createElement(LandingPageCard, { title: t(templateObject_13 || (templateObject_13 = __makeTemplateObject(["Terms of Use"], ["Terms of Use"]))), body: React.createElement(React.Fragment, null,
                            React.createElement("div", { className: 'footer-parent-links' },
                                React.createElement("span", null,
                                    React.createElement("a", { className: 'footer-link', href: 'https://www.redhat.com/en/about/privacy-policy', target: '_blank', rel: 'noreferrer' }, t(templateObject_14 || (templateObject_14 = __makeTemplateObject(["Privacy statement"], ["Privacy statement"]))))),
                                React.createElement("span", null,
                                    React.createElement("a", { className: 'footer-link', href: 'https://www.redhat.com/en/about/terms-use', target: '_blank', rel: 'noreferrer' }, t(templateObject_15 || (templateObject_15 = __makeTemplateObject(["Terms of use"], ["Terms of use"]))))),
                                React.createElement("span", null,
                                    React.createElement("a", { className: 'footer-link', href: 'https://www.redhat.com/en/about/all-policies-guidelines', target: '_blank', rel: 'noreferrer' }, t(templateObject_16 || (templateObject_16 = __makeTemplateObject(["All policies and guidelines"], ["All policies and guidelines"]))))),
                                React.createElement("span", null,
                                    React.createElement("a", { className: 'footer-link', href: 'https://www.redhat.com/en/about/digital-accessibility', target: '_blank', rel: 'noreferrer' }, t(templateObject_17 || (templateObject_17 = __makeTemplateObject(["Digital accessibility"], ["Digital accessibility"]))))))) })))));
    };
    Object.defineProperty(LandingPage.prototype, "closeAlert", {
        get: function () {
            return closeAlertMixin('alerts');
        },
        enumerable: false,
        configurable: true
    });
    LandingPage.prototype.addAlert = function (alert) {
        this.setState({
            alerts: __spreadArray(__spreadArray([], this.state.alerts, true), [alert], false),
        });
    };
    return LandingPage;
}(React.Component));
export { LandingPage };
export default withRouter(LandingPage);
LandingPage.contextType = AppContext;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17;
//# sourceMappingURL=landing-page.js.map