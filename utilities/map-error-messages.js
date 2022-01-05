// Transforms the error message format from the API into an object such that
// {<backendFieldID>: <errorMessage>}
export function mapErrorMessages(err) {
    var messages = {};
    // 500 errors only have err.response.data string
    if (typeof err.response.data === 'string') {
        messages['__nofield'] = err.response.data;
        return messages;
    }
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
//# sourceMappingURL=map-error-messages.js.map