var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { t } from '@lingui/macro';
export var chipGroupProps = function () {
    var count = '${remaining}'; // pf templating
    return {
        collapsedText: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["", " more"], ["", " more"])), count),
        expandedText: t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Show Less"], ["Show Less"]))),
    };
};
var templateObject_1, templateObject_2;
//# sourceMappingURL=chip-group-props.js.map