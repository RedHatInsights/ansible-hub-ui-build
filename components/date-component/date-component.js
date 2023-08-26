import * as moment from 'moment';
import React from 'react';
import { Tooltip } from 'src/components';
export var DateComponent = function (_a) {
    var date = _a.date;
    return date && (React.createElement("time", { dateTime: date },
        React.createElement(Tooltip, { content: moment(date).format('DD MMMM YYYY, HH:mm Z') }, moment(date).fromNow())));
};
//# sourceMappingURL=date-component.js.map