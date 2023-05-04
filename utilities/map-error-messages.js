// Transforms the error message format from the API into an object such that
// {<backendFieldID>: <errorMessage>}
var ErrorMessagesType = /** @class */ (function () {
    function ErrorMessagesType() {
    }
    return ErrorMessagesType;
}());
export { ErrorMessagesType };
export function mapErrorMessages(err) {
    var messages = {};
    var data = err.response.data;
    // 500 errors only have err.response.data string
    if (typeof data === 'string') {
        messages['__nofield'] = err.response.data;
        return messages;
    }
    // errors can come in several flavors depending on if the API is from
    // pulp or anible.
    // Galaxy error:
    // {
    //   "errors": [
    //     {
    //       "status": "400",
    //       "code": "invalid",
    //       "title": "<short_message>",
    //       "detail": "<long_message>",
    //       "source": {
    //         "parameter": "<field_name>"
    //       }
    //     }
    //   ]
    // }
    // Pulp error:
    // {
    //   "<field_name>": "<error_message>",
    // }
    // handle galaxy error
    if ('errors' in data && Array.isArray(data['errors'])) {
        for (var _i = 0, _a = err.response.data.errors; _i < _a.length; _i++) {
            var e = _a[_i];
            if (e.source) {
                messages[e.source.parameter] = e.detail;
            }
            else {
                // some error responses are too cool to have a
                // parameter set on them >:(
                messages['__nofield'] = e.detail || e.title;
            }
        }
        return messages;
    }
    // handle pulp error
    if (typeof data === 'object') {
        return data;
    }
    return {};
}
export function isFieldValid(errorMessagesType, name) {
    var names = [];
    if (Array.isArray(name)) {
        names = name;
    }
    else {
        names.push(name);
    }
    if (!errorMessagesType) {
        return 'default';
    }
    return names.find(function (n) { return errorMessagesType[n]; }) ? 'error' : 'default';
}
export function isFormValid(errorMessages) {
    if (!errorMessages) {
        return true;
    }
    return !Object.values(errorMessages).find(Boolean);
}
export function alertErrorsWithoutFields(errorMessages, fields, addAlert, title, setErrorMessages) {
    if (!errorMessages) {
        return;
    }
    // select only errors without associated field
    var errors = Object.keys(errorMessages)
        .filter(function (field) { return !fields.includes(field); })
        .map(function (field) { return errorMessages[field]; });
    if (errors.length) {
        // alert them
        addAlert({
            variant: 'danger',
            title: title,
            description: errors.join('\n'),
        });
        // filter only errors with field, rest will be removed from the state, because they were already alerted
        var formErrors_1 = {};
        Object.keys(errorMessages).forEach(function (field) {
            if (fields.includes(field)) {
                formErrors_1[field] = errorMessages[field];
            }
        });
        setErrorMessages(formErrors_1);
    }
    return;
}
//# sourceMappingURL=map-error-messages.js.map