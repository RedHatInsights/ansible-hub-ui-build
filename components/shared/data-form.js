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
import { Form, FormGroup, TextInput } from '@patternfly/react-core';
var DataForm = /** @class */ (function (_super) {
    __extends(DataForm, _super);
    function DataForm() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DataForm.prototype.render = function () {
        var _this = this;
        var _a = this.props, errorMessages = _a.errorMessages, formFields = _a.formFields, formPrefix = _a.formPrefix, formSuffix = _a.formSuffix, isReadonly = _a.isReadonly, model = _a.model, requiredFields = _a.requiredFields, updateField = _a.updateField;
        var fields = formFields.map(function (field) {
            if (!field) {
                return null;
            }
            var validated = field.id in errorMessages ? 'error' : 'default';
            return (React.createElement(FormGroup, { fieldId: field.id, helperTextInvalid: errorMessages[field.id], isRequired: !isReadonly && requiredFields.includes(field.id), key: field.id, label: field.title, labelIcon: !isReadonly && field.formGroupLabelIcon, validated: isReadonly ? 'default' : validated }, isReadonly ? (model[field.id]) : (React.createElement(TextInput, { id: field.id, onChange: updateField, placeholder: field.placeholder, type: field.type || 'text', validated: validated, value: model[field.id] }))));
        });
        return (React.createElement(Form, { onSubmit: function (e) {
                e.preventDefault();
                _this.props.onSave();
            } },
            formPrefix,
            fields,
            formSuffix));
    };
    return DataForm;
}(React.Component));
export { DataForm };
//# sourceMappingURL=data-form.js.map