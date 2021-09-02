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
import './markdown-editor.scss';
import { Form, FormGroup, TextArea } from '@patternfly/react-core';
import * as ReactMarkdown from 'react-markdown';
var MarkdownEditor = /** @class */ (function (_super) {
    __extends(MarkdownEditor, _super);
    function MarkdownEditor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MarkdownEditor.prototype.render = function () {
        var _a = this.props, text = _a.text, placeholder = _a.placeholder, updateText = _a.updateText, helperText = _a.helperText, editing = _a.editing;
        return (React.createElement(Form, null,
            React.createElement("div", { className: 'markdown-editor' },
                editing && (React.createElement("div", { className: 'column editor' },
                    React.createElement(FormGroup, { fieldId: 'resources', helperText: helperText },
                        React.createElement("div", { id: 'markdown-title' }, "Raw Markdown"),
                        React.createElement(TextArea, { "aria-labelledby": 'markdown-title', id: 'resources', value: text, onChange: function (value) { return updateText(value); }, placeholder: placeholder })))),
                React.createElement("div", { className: 'column preview-container' },
                    editing && 'Preview',
                    React.createElement("div", { className: editing ? 'pf-c-content preview' : 'pf-c-content' }, text ? (React.createElement(ReactMarkdown, { children: text })) : (React.createElement(ReactMarkdown, { children: placeholder })))))));
    };
    return MarkdownEditor;
}(React.Component));
export { MarkdownEditor };
//# sourceMappingURL=markdown-editor.js.map