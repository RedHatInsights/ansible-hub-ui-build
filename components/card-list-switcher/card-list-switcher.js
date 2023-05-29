import { ListIcon, ThLargeIcon } from '@patternfly/react-icons';
import cx from 'classnames';
import React from 'react';
import { ParamHelper } from 'src/utilities/param-helper';
import './switcher.scss';
export var CardListSwitcher = function (_a) {
    var params = _a.params, updateParams = _a.updateParams, _b = _a.size, size = _b === void 0 ? 'sm' : _b, className = _a.className;
    var disp = params.view_type;
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
//# sourceMappingURL=card-list-switcher.js.map