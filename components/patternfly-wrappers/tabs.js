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
import * as React from 'react';
import { Tab, Tabs as PFTabs, TabTitleText } from '@patternfly/react-core';
import { ParamHelper } from 'src/utilities/param-helper';
// FIXME: use LinkTabs, switch from ?tab to routes, rename to Tabs
var Tabs = /** @class */ (function (_super) {
    __extends(Tabs, _super);
    function Tabs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tabs.prototype.render = function () {
        var _a = this.props, tabs = _a.tabs, params = _a.params, updateParams = _a.updateParams, isDisabled = _a.isDisabled, disabledTitle = _a.disabledTitle;
        return (React.createElement(PFTabs, { activeKey: this.getActiveTab(), onSelect: function (_, key) {
                return !isDisabled &&
                    updateParams(ParamHelper.setParam(params, 'tab', tabs[key].toLowerCase()));
            } }, tabs.map(function (tab, i) { return (React.createElement(Tab, { key: i, eventKey: i, title: React.createElement(TabTitleText, { title: isDisabled ? disabledTitle : null }, tab), className: isDisabled ? 'disabled' : null })); })));
    };
    Tabs.prototype.getActiveTab = function () {
        var _a = this.props, params = _a.params, tabs = _a.tabs;
        if (params.tab) {
            var i = tabs.findIndex(function (x) { return x.toLowerCase() === params.tab.toLowerCase(); });
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
    };
    return Tabs;
}(React.Component));
export { Tabs };
//# sourceMappingURL=tabs.js.map