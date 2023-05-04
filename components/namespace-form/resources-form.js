var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
import { t } from '@lingui/macro';
import React from 'react';
import { MarkdownEditor } from '..';
import './namespace-form.scss';
var placeholder = "## Custom resources\n\nYou can use this page to add any resources which you think might help your users automate all the things.\n\nConsider using it for:\n\n- Links to blog posts\n- Training resources\n- Documentation\n- Cat gifs? If that's your thing :)\n";
export var ResourcesForm = function (_a) {
    var namespace = _a.namespace, updateNamespace = _a.updateNamespace;
    return (React.createElement(MarkdownEditor, { text: namespace.resources, placeholder: placeholder, helperText: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["You can can customize the Resources tab on your profile by entering custom markdown here."], ["You can can customize the Resources tab on your profile by entering custom markdown here."]))), updateText: function (resources) { return updateNamespace(__assign(__assign({}, namespace), { resources: resources })); }, editing: true }));
};
var templateObject_1;
//# sourceMappingURL=resources-form.js.map