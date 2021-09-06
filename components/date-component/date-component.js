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
import { Tooltip } from 'src/components';
import * as moment from 'moment';
import { userLanguage } from 'src/l10n';
var DateComponent = /** @class */ (function (_super) {
    __extends(DateComponent, _super);
    function DateComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DateComponent.prototype.render = function () {
        var date = this.props.date;
        moment.locale(userLanguage);
        return (date && (React.createElement(Tooltip, { content: moment(date).format('DD MMMM YYYY, HH:mm Z') }, moment(date).fromNow())));
    };
    return DateComponent;
}(React.Component));
export { DateComponent };
//# sourceMappingURL=date-component.js.map