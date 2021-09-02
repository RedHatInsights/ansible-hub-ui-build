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
import * as React from 'react';
import './namespace-form.scss';
import { MarkdownEditor } from '..';
var placeholder = "## Custom resources\n\nYou can use this page to add any resources which you think might help your users automate all the things.\n\nConsider using it for:\n\n- Links to blog posts\n- Training resources\n- Documentation\n- Cat gifs? If that's your thing :)\n";
var ResourcesForm = /** @class */ (function (_super) {
    __extends(ResourcesForm, _super);
    function ResourcesForm() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ResourcesForm.prototype.render = function () {
        var _this = this;
        var namespace = this.props.namespace;
        return (React.createElement(MarkdownEditor, { text: namespace.resources, placeholder: placeholder, helperText: 'You can can customize the Resources tab on your profile by entering custom markdown here.', updateText: function (value) { return _this.updateResources(value); }, editing: true }));
    };
    ResourcesForm.prototype.updateResources = function (data) {
        var update = __assign({}, this.props.namespace);
        update.resources = data;
        this.props.updateNamespace(update);
    };
    return ResourcesForm;
}(React.Component));
export { ResourcesForm };
//# sourceMappingURL=resources-form.js.map