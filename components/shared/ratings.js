var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { Trans, t } from '@lingui/macro';
import React, { useEffect, useState } from 'react';
import { HelperText, Tooltip } from 'src/components';
var cache = { collection: null, role: null };
var loadScore = function (type, namespace, name, callback) { return function () {
    var setScores = function (data) {
        var _a;
        if (namespace && name && callback) {
            callback((_a = data === null || data === void 0 ? void 0 : data[namespace]) === null || _a === void 0 ? void 0 : _a[name]);
        }
    };
    if (!cache[type]) {
        // not in cache, trigger load
        cache[type] = fetch("/static/scores/".concat(type, ".json"))
            .then(function (response) { return response.json(); })
            .then(function (data) {
            cache[type] = data;
            setScores(data);
        });
    }
    else if (typeof cache[type].then === 'function') {
        // waiting for load
        cache[type].then(function () { return setScores(cache[type]); });
    }
    else {
        // already loaded
        setScores(cache[type]);
    }
}; };
export function CollectionRatings(_a) {
    var namespace = _a.namespace, name = _a.name, isList = _a.isList;
    var _b = useState(null), scores = _b[0], setScores = _b[1];
    var loader = loadScore('collection', namespace, name, setScores);
    useEffect(loader, [namespace, name]);
    return isList ? (React.createElement(Ratings, { scores: scores })) : (React.createElement("span", { style: { padding: '12px 0 4px 0' } },
        React.createElement(Ratings, { scores: scores })));
}
export function RoleRatings(_a) {
    var namespace = _a.namespace, name = _a.name;
    var _b = useState(null), scores = _b[0], setScores = _b[1];
    var loader = loadScore('role', namespace, name, setScores);
    useEffect(loader, [namespace, name]);
    return React.createElement(Ratings, { scores: scores });
}
function Ratings(_a) {
    var scores = _a.scores;
    if (!scores) {
        return null;
    }
    var help = t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["This is the rating from old-galaxy.ansible.com. We are working on redoing the rating for the new version of galaxy."], ["This is the rating from old-galaxy.ansible.com. We are working on redoing the rating for the new version of galaxy."])));
    var more = (React.createElement("table", { className: 'pf-c-table' },
        scores.quality_score !== null ? (React.createElement("tr", null,
            React.createElement("th", null, t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Quality score"], ["Quality score"])))),
            React.createElement("td", null,
                React.createElement("progress", { max: 100, value: ~~(20 * scores.quality_score) }),
                ' '),
            React.createElement("td", null,
                React.createElement("strong", null, scores.quality_score),
                "\u00A0/\u00A05"))) : null,
        React.createElement("tr", null,
            React.createElement("th", null, t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Community score"], ["Community score"])))),
            React.createElement("td", null,
                React.createElement("progress", { max: 100, value: ~~(20 * scores.score) }),
                ' '),
            React.createElement("td", null,
                React.createElement("strong", null, scores.score),
                "\u00A0/\u00A05")),
        React.createElement("tr", null,
            React.createElement("td", { colSpan: 3, style: { textAlign: 'right' } },
                React.createElement(Trans, null,
                    "Based on ",
                    scores.count,
                    " surveys."))),
        React.createElement("tr", null,
            React.createElement("th", null, t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["Quality of docs"], ["Quality of docs"])))),
            React.createElement("td", null,
                React.createElement("progress", { max: 100, value: ~~(20 * scores.docs) }),
                ' '),
            React.createElement("td", null,
                React.createElement("strong", null, scores.docs),
                "\u00A0/\u00A05")),
        React.createElement("tr", null,
            React.createElement("th", null, t(templateObject_5 || (templateObject_5 = __makeTemplateObject(["Ease of use"], ["Ease of use"])))),
            React.createElement("td", null,
                React.createElement("progress", { max: 100, value: ~~(20 * scores.ease_of_use) }),
                ' '),
            React.createElement("td", null,
                React.createElement("strong", null, scores.ease_of_use),
                "\u00A0/\u00A05")),
        React.createElement("tr", null,
            React.createElement("th", null, t(templateObject_6 || (templateObject_6 = __makeTemplateObject(["Does what it promises"], ["Does what it promises"])))),
            React.createElement("td", null,
                React.createElement("progress", { max: 100, value: ~~(20 * scores.does_what_it_says) }),
                ' '),
            React.createElement("td", null,
                React.createElement("strong", null, scores.does_what_it_says),
                "\u00A0/\u00A05")),
        React.createElement("tr", null,
            React.createElement("th", null, t(templateObject_7 || (templateObject_7 = __makeTemplateObject(["Works without change"], ["Works without change"])))),
            React.createElement("td", null,
                React.createElement("progress", { max: 100, value: ~~(20 * scores.works_as_is) }),
                ' '),
            React.createElement("td", null,
                React.createElement("strong", null, scores.works_as_is),
                "\u00A0/\u00A05")),
        React.createElement("tr", null,
            React.createElement("th", null, t(templateObject_8 || (templateObject_8 = __makeTemplateObject(["Ready for production"], ["Ready for production"])))),
            React.createElement("td", null,
                React.createElement("progress", { max: 100, value: ~~(20 * scores.used_in_production) }),
                ' '),
            React.createElement("td", null,
                React.createElement("strong", null, scores.used_in_production),
                "\u00A0/\u00A05"))));
    return (React.createElement(Tooltip, { content: help },
        React.createElement(HelperText, { hasAutoWidth: true, content: more }),
        ' ',
        React.createElement("span", { style: { marginRight: '8px' } }, scores.score)));
}
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;
//# sourceMappingURL=ratings.js.map