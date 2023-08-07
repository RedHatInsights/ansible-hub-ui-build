import { Tabs as PFTabs, Tab, TabTitleText } from '@patternfly/react-core';
import React from 'react';
import { ParamHelper } from 'src/utilities';
var TabsType = /** @class */ (function () {
    function TabsType() {
    }
    return TabsType;
}());
export { TabsType };
// FIXME: use LinkTabs, switch from ?tab to routes, rename to Tabs
export var Tabs = function (_a) {
    var tabs = _a.tabs, params = _a.params, updateParams = _a.updateParams, isDisabled = _a.isDisabled, disabledTitle = _a.disabledTitle;
    return (React.createElement(PFTabs, { activeKey: getActiveTab({ params: params, tabs: tabs }), onSelect: function (_, key) {
            return !isDisabled &&
                updateParams(ParamHelper.setParam(params, 'tab', tabs[key].id.toLowerCase()));
        } }, tabs.map(function (tab, i) { return (React.createElement(Tab, { key: i, eventKey: i, title: React.createElement(TabTitleText, { title: isDisabled ? disabledTitle : null }, tab.name), className: isDisabled ? 'disabled' : null })); })));
};
function getActiveTab(_a) {
    var params = _a.params, tabs = _a.tabs;
    if (params.tab) {
        var i = tabs.findIndex(function (x) { return x.id.toLowerCase() === params.tab.toLowerCase(); });
        // If tab is not found, default to the first tab.
        if (i === -1) {
            return 0;
        }
        else {
            return i;
        }
    }
    else {
        return 0;
    }
}
//# sourceMappingURL=tabs.js.map