import { plural } from '@lingui/macro';
import React from 'react';
function roundNumber(n) {
    if (n < 1000) {
        // returns 1 to 999
        return n.toString();
    }
    else if (n < 10000) {
        // returns 1K to 9.9K
        return (Math.floor(n / 100) / 10).toString() + 'K';
    }
    else if (n < 1000000) {
        // returns 10K to 999K
        return Math.floor(n / 1000).toString() + 'K';
    }
    else if (n < 100000000) {
        // returns 1M to 9.9M
        return (Math.floor(n / 100000) / 10).toString() + 'M';
    }
    else if (n < 1000000000) {
        return Math.floor(n / 1000000).toString() + 'M';
    }
    // If larger than a billion, don't even bother.
    return '1B+';
}
var NumericLabel = function (_a) {
    var number = _a.number, newline = _a.newline, label = _a.label;
    var numberElem = React.createElement("span", { key: 'number' },
        roundNumber(number),
        " ");
    var labelElem = (React.createElement("span", { key: 'label', className: 'hub-numeric-label-label' }, label));
    if (newline) {
        numberElem = React.createElement("div", null, numberElem);
        labelElem = React.createElement("div", null, labelElem);
    }
    return (React.createElement("div", null,
        numberElem,
        labelElem));
};
var label = function (count, type) {
    return ({
        module: plural(count, {
            one: 'Module',
            other: 'Modules',
        }),
        role: plural(count, {
            one: 'Role',
            other: 'Roles',
        }),
        plugin: plural(count, {
            one: 'Plugin',
            other: 'Plugins',
        }),
        dependency: plural(count, {
            one: 'Dependency',
            other: 'Dependencies',
        }),
    }[type] || type);
};
export var CollectionNumericLabel = function (_a) {
    var count = _a.count, newline = _a.newline, type = _a.type;
    return (React.createElement(NumericLabel, { number: count, newline: newline, label: label(count, type) }));
};
//# sourceMappingURL=numeric-label.js.map