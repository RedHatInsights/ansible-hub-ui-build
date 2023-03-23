import React from 'react';
export var Details = function (_a) {
    var item = _a.item, _b = _a.fields, fields = _b === void 0 ? [] : _b;
    return (React.createElement(React.Fragment, null,
        fields.map(function (_a) {
            var label = _a.label, value = _a.value;
            return (React.createElement("div", { key: label },
                React.createElement("div", null,
                    React.createElement("b", null, label)),
                React.createElement("div", null, value)));
        }),
        item && (React.createElement(React.Fragment, null,
            React.createElement("hr", null),
            React.createElement("pre", { style: { whiteSpace: 'pre-wrap' } }, JSON.stringify(item, null, 2))))));
};
//# sourceMappingURL=details.js.map