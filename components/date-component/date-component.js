import * as moment from 'moment';
import * as React from 'react';
import { Tooltip } from 'src/components';
export var DateComponent = function (props) {
    var date = props.date;
    return (date && (React.createElement(Tooltip, { content: moment(date).format('DD MMMM YYYY, HH:mm Z') }, moment(date).fromNow())));
};
//# sourceMappingURL=date-component.js.map