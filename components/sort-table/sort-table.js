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
import ArrowsAltVIcon from '@patternfly/react-icons/dist/esm/icons/arrows-alt-v-icon';
import LongArrowAltDownIcon from '@patternfly/react-icons/dist/esm/icons/long-arrow-alt-down-icon';
import LongArrowAltUpIcon from '@patternfly/react-icons/dist/esm/icons/long-arrow-alt-up-icon';
import React from 'react';
import { ParamHelper } from 'src/utilities';
import './sort-table.scss';
export var SortTable = function (_a) {
    var options = _a.options, params = _a.params, updateParams = _a.updateParams;
    function sort(id, isMinus) {
        // Alphabetical sorting is inverted in Django, so flip it here to make
        // things match up with the UI.
        isMinus = !isMinus;
        updateParams(__assign(__assign({}, ParamHelper.setParam(params, 'sort', (isMinus ? '-' : '') + id)), { page: 1 }));
    }
    function getIcon(type, id) {
        if (type == 'none') {
            return;
        }
        var Icon;
        var isMinus = false;
        var activeIcon = !!params.sort && id == params.sort.replace('-', '');
        if (activeIcon) {
            isMinus = params.sort.includes('-');
            var up = isMinus;
            if (type == 'alpha') {
                up = !up;
            }
            Icon = up ? LongArrowAltDownIcon : LongArrowAltUpIcon;
        }
        else {
            Icon = ArrowsAltVIcon;
        }
        return (React.createElement(Icon, { "data-cy": 'sort_' + id, size: 'sm', onClick: function () { return sort(id, isMinus); }, className: 'clickable ' + (activeIcon ? 'active' : 'inactive') }));
    }
    var getHeaderItem = function (item) { return (React.createElement("th", { key: item.id, className: item === null || item === void 0 ? void 0 : item.className },
        item.title,
        " ",
        getIcon(item.type, item.id))); };
    return (React.createElement("thead", null,
        React.createElement("tr", { className: 'hub-SortTable-headers', "data-cy": 'SortTable-headers' }, options.headers.map(function (element) { return getHeaderItem(element); }))));
};
//# sourceMappingURL=sort-table.js.map