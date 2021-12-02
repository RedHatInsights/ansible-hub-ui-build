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
export function isWriteOnly(name, writeOnlyFields) {
    var field = writeOnlyFields.find(function (el) { return el.name === name; });
    return !!field;
}
export function isFieldSet(name, writeOnlyFields) {
    var field = writeOnlyFields.find(function (el) { return el.name === name; });
    if (field) {
        return field.is_set;
    }
    else {
        throw 'Field ${name} is not in writeOnlyFields';
    }
}
// Deletes any write only fields from the object so that they don't
// get sent to the API
export function clearSetFieldsFromRequest(data, writeOnlyFields) {
    var newObj = __assign({}, data);
    for (var _i = 0, writeOnlyFields_1 = writeOnlyFields; _i < writeOnlyFields_1.length; _i++) {
        var field = writeOnlyFields_1[_i];
        if (field.is_set) {
            delete newObj[field.name];
        }
    }
    return newObj;
}
//# sourceMappingURL=write-only-fields.js.map