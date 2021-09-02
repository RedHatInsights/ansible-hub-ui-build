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
import { LongArrowAltUpIcon, LongArrowAltDownIcon, ArrowsAltVIcon, } from '@patternfly/react-icons';
import { ParamHelper } from 'src/utilities';
import './sort-table.scss';
var SortTable = /** @class */ (function (_super) {
    __extends(SortTable, _super);
    function SortTable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SortTable.prototype.sort = function (id, isMinus) {
        // Alphabetical sorting is inverted in Django, so flip it here to make
        // things match up with the UI.
        isMinus = !isMinus;
        this.props.updateParams(ParamHelper.setParam(this.props.params, 'sort', (isMinus ? '-' : '') + id));
    };
    SortTable.prototype.getIcon = function (type, id) {
        var _this = this;
        if (type == 'none') {
            return;
        }
        var Icon;
        var activeIcon = !!this.props.params['sort'] &&
            id == this.props.params['sort'].replace('-', '');
        var isMinus = false;
        if (activeIcon) {
            isMinus = this.props.params['sort'].includes('-');
            var up = isMinus;
            if (type == 'alpha') {
                up = !up;
            }
            Icon = up ? LongArrowAltDownIcon : LongArrowAltUpIcon;
        }
        else {
            Icon = ArrowsAltVIcon;
        }
        return (React.createElement(Icon, { size: 'sm', onClick: function () { return _this.sort(id, isMinus); }, className: 'clickable ' + (activeIcon ? 'active' : 'inactive') }));
    };
    SortTable.prototype.getHeaderItem = function (item) {
        return (React.createElement("th", { key: item.id },
            item.title,
            " ",
            this.getIcon(item.type, item.id)));
    };
    SortTable.prototype.render = function () {
        var _this = this;
        return (React.createElement("thead", null,
            React.createElement("tr", { "aria-labelledby": 'headers' }, this.props.options['headers'].map(function (element) {
                return _this.getHeaderItem(element);
            }))));
    };
    return SortTable;
}(React.Component));
export { SortTable };
//# sourceMappingURL=sort-table.js.map