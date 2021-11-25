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
import cx from 'classnames';
import './switcher.scss';
import { ListIcon, ThLargeIcon } from '@patternfly/react-icons';
import { ParamHelper } from 'src/utilities/param-helper';
var CardListSwitcher = /** @class */ (function (_super) {
    __extends(CardListSwitcher, _super);
    function CardListSwitcher() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CardListSwitcher.prototype.render = function () {
        var disp = this.props.params.view_type;
        var _a = this.props, updateParams = _a.updateParams, params = _a.params, size = _a.size, className = _a.className;
        if (!disp) {
            disp = 'card';
        }
        var iconClasses = ['icon', 'clickable'];
        return (React.createElement("div", { className: className },
            React.createElement("span", { "data-cy": 'view_type_card' },
                React.createElement(ThLargeIcon, { size: size, className: cx(iconClasses, { selected: disp === 'card' }), onClick: function () {
                        return updateParams(ParamHelper.setParam(params, 'view_type', 'card'));
                    } })),
            React.createElement("span", { "data-cy": 'view_type_list' },
                React.createElement(ListIcon, { size: size, className: cx(iconClasses, { selected: disp === 'list' }), onClick: function () {
                        return updateParams(ParamHelper.setParam(params, 'view_type', 'list'));
                    } }))));
    };
    CardListSwitcher.defaultProps = {
        size: 'sm',
    };
    return CardListSwitcher;
}(React.Component));
export { CardListSwitcher };
//# sourceMappingURL=card-list-switcher.js.map