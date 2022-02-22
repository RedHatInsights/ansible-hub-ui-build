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
import { t, Trans } from '@lingui/macro';
import * as React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { SortTable, EmptyStateNoData, ShaLabel, TagLabel, DateComponent, } from '../../components';
import { FlexItem, Flex, Button } from '@patternfly/react-core';
import { formatPath, Paths } from '../../paths';
import { ActivitiesAPI } from '../../api';
import './execution-environment-detail.scss';
import { withContainerRepo } from './base';
var ExecutionEnvironmentDetailActivities = /** @class */ (function (_super) {
    __extends(ExecutionEnvironmentDetailActivities, _super);
    function ExecutionEnvironmentDetailActivities(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            loading: true,
            activities: [],
            redirect: null,
            page: 0,
        };
        return _this;
    }
    ExecutionEnvironmentDetailActivities.prototype.componentDidMount = function () {
        this.queryActivities(this.props.containerRepository.name);
    };
    ExecutionEnvironmentDetailActivities.prototype.render = function () {
        return this.renderActivity();
    };
    ExecutionEnvironmentDetailActivities.prototype.renderActivity = function () {
        var activities = this.state.activities;
        if (activities.length === 0) {
            return (React.createElement(EmptyStateNoData, { title: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["No activities yet"], ["No activities yet"]))), description: t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Activities will appear once you push something"], ["Activities will appear once you push something"]))) }));
        }
        return (React.createElement(Flex, null,
            React.createElement(Flex, { direction: { default: 'column' }, flex: { default: 'flex_1' } },
                React.createElement(FlexItem, null,
                    React.createElement("section", { className: 'body' },
                        React.createElement("table", { "aria-label": t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Activities"], ["Activities"]))), className: 'pf-c-table' },
                            React.createElement(SortTable, { options: {
                                    headers: [
                                        { title: t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["Change"], ["Change"]))), type: 'none', id: 'change' },
                                        { title: t(templateObject_5 || (templateObject_5 = __makeTemplateObject(["Date"], ["Date"]))), type: 'none', id: 'date' },
                                    ],
                                }, params: {}, updateParams: function () { return null; } }),
                            React.createElement("tbody", null, activities.map(function (action, i) {
                                return (React.createElement("tr", { key: i },
                                    React.createElement("td", null, action.action),
                                    action.created ? (React.createElement("td", null,
                                        React.createElement(DateComponent, { date: action.created }))) : (React.createElement("td", null))));
                            }))))))));
    };
    ExecutionEnvironmentDetailActivities.prototype.queryActivities = function (name) {
        var _this = this;
        var manifestLink = function (digestOrTag) {
            return formatPath(Paths.executionEnvironmentManifest, {
                container: name,
                digest: digestOrTag,
            });
        };
        var ShaLink = function (_a) {
            var digest = _a.digest;
            return (React.createElement(Link, { to: manifestLink(digest) },
                React.createElement(ShaLabel, { digest: digest })));
        };
        var TagLink = function (_a) {
            var tag = _a.tag;
            return (React.createElement(Link, { to: manifestLink(tag) },
                React.createElement(TagLabel, { tag: tag })));
        };
        this.setState({ loading: true }, function () {
            ActivitiesAPI.list(name, _this.state.page)
                .then(function (result) {
                var activities = [];
                result.data.data.forEach(function (activity) {
                    {
                        activity.added.forEach(function (action) {
                            var activityDescription;
                            if (action.pulp_type === 'container.tag') {
                                var removed = activity.removed.find(function (item) {
                                    return item.tag_name === action.tag_name;
                                });
                                if (removed) {
                                    activityDescription = (React.createElement(React.Fragment, null,
                                        React.createElement(Trans, null,
                                            React.createElement(TagLink, { tag: action.tag_name }),
                                            " was moved to",
                                            ' ',
                                            React.createElement(ShaLink, { digest: action.manifest_digest }),
                                            " from",
                                            ' ',
                                            React.createElement(ShaLink, { digest: removed.manifest_digest }))));
                                }
                                else {
                                    activityDescription = (React.createElement(React.Fragment, null,
                                        React.createElement(Trans, null,
                                            React.createElement(TagLink, { tag: action.tag_name }),
                                            " was added to",
                                            ' ',
                                            React.createElement(ShaLink, { digest: action.manifest_digest }))));
                                }
                            }
                            else {
                                activityDescription = (React.createElement(React.Fragment, null,
                                    React.createElement(Trans, null,
                                        React.createElement(ShaLink, { digest: action.manifest_digest }),
                                        " was added")));
                            }
                            activities.push({
                                created: activity.pulp_created,
                                action: activityDescription,
                            });
                        });
                        activity.removed.forEach(function (action) {
                            var activityDescription;
                            if (action.pulp_type === 'container.tag') {
                                if (!activity.added.find(function (item) {
                                    return item.tag_name === action.tag_name;
                                })) {
                                    activityDescription = (React.createElement(React.Fragment, null,
                                        React.createElement(Trans, null,
                                            React.createElement(TagLabel, { tag: action.tag_name }),
                                            " was removed from",
                                            ' ',
                                            React.createElement(ShaLink, { digest: action.manifest_digest }))));
                                }
                                else {
                                    // skip one added as moved
                                    return;
                                }
                            }
                            else {
                                activityDescription = (React.createElement(React.Fragment, null,
                                    React.createElement(Trans, null,
                                        React.createElement(ShaLabel, { digest: action.manifest_digest }),
                                        " was removed")));
                            }
                            activities.push({
                                created: activity.pulp_created,
                                action: activityDescription,
                            });
                        });
                    }
                });
                if (result.data.links.next) {
                    _this.setState({ page: _this.state.page + 1 });
                    activities.push({
                        created: '',
                        action: (React.createElement(Button, { variant: 'link', onClick: function () { return _this.queryActivities(name); } },
                            ' ',
                            "Load more",
                            ' ')),
                    });
                }
                else {
                    var lastActivity = activities[activities.length - 1];
                    if (lastActivity) {
                        activities.push({
                            created: lastActivity.created,
                            action: (React.createElement(React.Fragment, null, t(templateObject_6 || (templateObject_6 = __makeTemplateObject(["", " was added"], ["", " was added"])), _this.props.containerRepository.name))),
                        });
                    }
                }
                // remove last activity (Load more button) and add newly fetched activities
                _this.setState({
                    activities: _this.state.activities.slice(0, -1).concat(activities),
                    loading: false,
                });
            })
                .catch(function () { return _this.setState({ redirect: 'notFound' }); });
        });
    };
    return ExecutionEnvironmentDetailActivities;
}(React.Component));
export default withRouter(withContainerRepo(ExecutionEnvironmentDetailActivities));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
//# sourceMappingURL=execution_environment_detail_activities.js.map